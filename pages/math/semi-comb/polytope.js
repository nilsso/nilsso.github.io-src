var selShape, txtEdit, txtData, rngDilation, lblDilation;
var btnRebuild, chkSpin, chkAxis, radNone, radDef, radEhrhart;
var renderer, scene, camera, controls, group, meshMat;
var pointMatA, pointMatB;
var axis, meshA, meshB, geo;
var vertsDef, vertsBound, vertsInner;
var pointsDef, pointsBound, pointsInner, points;

var dilation;
var spin, spinSpeed = 0.005;

var shapes = {
  simplex: '0 0 0\n1 0 0\n0 1 0\n0 0 1',
  cube: '0 0 0\n1 0 0\n0 1 0\n1 1 0\n0 0 1\n1 0 1\n0 1 1\n1 1 1',
  cube2: '-1 -1 -1\n 1 -1 -1\n-1  1 -1\n 1  1 -1\n-1 -1  1\n 1 -1  1\n-1  1  1\n 1  1  1',
  octohedron: '-1  0  0\n 1  0  0\n 0 -1  0\n 0  1  0\n 0  0 -1\n 0  0  1'
};

// Cartesian product and helper functions
// https://stackoverflow.com/questions/12303989/\
//   cartesian-product-of-multiple-arrays-in-javascript
const f = (a, b) => [].concat(...a.map(d => b.map(e => [].concat(d, e))));
const cartesian = (a, b, ...c) => (b ? cartesian(f(a, b), ...c) : a);

// Zip function
const zip = (a, b) => a.map( (e, i) => [ e, b[i] ] );

// Range helper function
function* range(start, end) {
  for (let i = start; i <= end; i++) {
    yield i;
  }
}

// EhrhartMeshes can be used to return a set of three.js Points object of
// the enclosing lattice points and interior lattice points of an existing
// mesh object.
function EhrhartMeshes(mesh) {
  // Construct hyperplanes
  mesh.computeFaceNormals();
  var hyperplanes = mesh.faces.map(function(face) {
    // Ax=b (hyperplane description)
    var n = face.normal;
    var p = mesh.vertices[face.a];
    var b = n.dot(p);
    var faceVertexIndices = [ face.a, face.b, face.c ];
    // Find vertex not on the hyperplane
    var disjointVertex;
    for (var i = 0; i < mesh.vertices.length; ++i) {
      if (!faceVertexIndices.includes(i)) {
        disjointVertex = mesh.vertices[i];
        break;
      }
    }
    // Negate hyperplane description if disjoint vertex
    // falls on right side of inequality
    if (n.dot(disjointVertex) > b) {
      n.negate();
      b *= -1;
    }
    return [ n.toArray(), b ];
  });

  var A = math.matrix(hyperplanes.map(h => h[0]));
  var b = math.matrix(hyperplanes.map(h => h[1]));

  var boundingVertices = [];
  var interiorVertices = [];

  // Get enclosing cuboid diagonal points
  mesh.computeBoundingBox();
  var [ vMin, vMax ] = [ mesh.boundingBox.min, mesh.boundingBox.max ];
  var x = [...range( vMin.x, vMax.x )];
  var y = [...range( vMin.y, vMax.y )];
  var z = [...range( vMin.z, vMax.z )];
  cartesian( x, y, z ).forEach(function(p) {
    var Ax = math.multiply(A, math.matrix(p));
    if (math.smallerEq(Ax, b).toArray().every(v => v)) {
      if (math.smaller(Ax, b).toArray().every(v => v))
        interiorVertices.push(new THREE.Vector3(...p));
      else
        boundingVertices.push(new THREE.Vector3(...p));
    }
  });
  return [boundingVertices, interiorVertices];
}

function updatePointsVisibility() {
  points.forEach(p => p.visible=false);
  if (radDef.prop('checked')) {
    pointsDef.visible = true;
  }
  if (radEhrhart.prop('checked')) {
    pointsBound.visible = true;
    pointsInner.visible = true;
  }
}

// Rebuilt polytope from vertex textarea data
function polytopeRebuild() {
  console.log('REBUILDING POLYTOPE');
  txtEdit.val(txtEdit.val().trim());
  var coords = txtEdit.val().split(/\s+/);
  if (coords.length % 3 || !coords.every(t => $.isNumeric(t))) {
    alert('Invalid vertex list');
    return;
  }
  if (geo) {
    geo.dispose();
    vertsDef.dispose();
    vertsBound.dispose();
    vertsInner.dispose();
  }
  vertsDef = new THREE.Geometry();
  vertsDef.setFromPoints(
    math.reshape(coords.map(Number), [coords.length/3, 3]).map(
      p => new THREE.Vector3(...p)));
  var dilation = Number(rngDilation.val());
  vertsDef.scale(dilation, dilation, dilation);
  geo = new THREE.ConvexGeometry(vertsDef.vertices);

  var [bound, inner] = [...EhrhartMeshes(geo)];
  vertsBound = new THREE.Geometry();
  vertsBound.setFromPoints(bound);

  vertsInner = new THREE.Geometry();
  vertsInner.setFromPoints(inner);

  pointsDef = new THREE.Points(vertsDef, pointMatA);
  pointsBound = new THREE.Points(vertsBound, pointMatA);
  pointsInner = new THREE.Points(vertsInner, pointMatB);
  points = [pointsDef, pointsBound, pointsInner];

  for (var i = group.children.length - 1; i >= 1; i--) {
    group.remove(group.children[i]);
  }

  meshA = new THREE.Mesh(geo, meshMat);
  meshA.material.side = THREE.BackSide; // back faces
  meshA.renderOrder = 0;
  group.add(meshA);

  meshB = new THREE.Mesh(geo, meshMat.clone());
  meshB.material.side = THREE.FrontSide; // front faces
  meshB.renderOrder = 1;
  group.add(meshB);

  points.forEach(p => group.add(p));
  updatePointsVisibility();

  var v = geo.vertices[0].clone();
  geo.vertices.forEach(u => v.max(u));
  var rad = v.length()*3.33;
  camera.fov = rad;
  camera.updateProjectionMatrix();

  txtData.text(
    'BLP: '+bound.length+'\n'+
    'ILP: '+inner.length);
}

// Initialize renderer
function polytopeInit() {
  renderer = new THREE.WebGLRenderer({ antialias: true });
  var w = window.innerWidth, h = window.innerHeight;
  renderer.setPixelRatio(window.devicePixelRatio);
  renderer.setSize(w, h);
  document.body.appendChild(renderer.domElement);

  scene = new THREE.Scene();
  scene.background = new THREE.Color(0xffffff);

  camera = new THREE.PerspectiveCamera(40, window.innerWidth / window.innerHeight, 1, 1000);
  camera.position.set(15, 20, 30);
  scene.add(camera);

  controls = new THREE.OrbitControls(camera, renderer.domElement);
  controls.enableKeys = false;
  controls.enableZoom = false;

  scene.add(new THREE.AmbientLight(0x222222));
  camera.add(new THREE.PointLight(0xffffff, 1));

  group = new THREE.Group();
  scene.add(group);

  axis = new THREE.AxesHelper(20);
  group.add(axis);

  meshMat = new THREE.MeshLambertMaterial({
    color: 0xffffff,
    opacity: 0.5,
    transparent: true
  });

  var loader = new THREE.TextureLoader();
  var texture = loader.load('disc.png');
  pointMatA = new THREE.PointsMaterial({
    color: 0x0080ff,
    map: texture,
    alphaTest: 0.5,
    size: 2
  });
  pointMatB = pointMatA.clone();
  pointMatB.color = new THREE.Color(0xff8000);

  window.addEventListener('resize', onWindowResize, false);
}

function onWindowResize() {
  var w = window.innerWidth, h = window.innerHeight;
  camera.aspect = w/h;
  camera.updateProjectionMatrix();
  renderer.setSize(w, h);
}

function animate() {
  requestAnimationFrame(animate);
  if (spin) {
    group.rotation.y += spinSpeed;
  }
  render();
}

function render() {
  renderer.render(scene, camera);
}

// Document ready
$(function() {
  selShape =$('#shape');
  txtEdit = $('#vertices');
  txtData = $('#data');
  rngDilation = $('#dilation');
  lblDilation = $('#dilationLabel');
  btnRebuild = $('#rebuild');
  chkAxis = $('#axis');
  chkSpin = $('#spin');
  radNone = $('#verticesNone');
  radDef = $('#verticesDefining');
  radEhrhart = $('#verticesEhrhart');

  // Add default shape options
  $.each(shapes, function(k, v) {
    selShape.append(new Option(k, v));
  });

  // Handlers
  selShape.change(function() {
    txtEdit.val($(this).val());
    polytopeRebuild();
  });

  rngDilation.on('input', function() {
    lblDilation.text($(this).val());
  });

  btnRebuild.click(polytopeRebuild);

  chkAxis.change(function() {
    axis.visible = $(this).prop('checked');
  });

  chkSpin.change(function() {
    spin = $(this).prop('checked');
  });

  radNone.change(updatePointsVisibility);
  radDef.change(updatePointsVisibility);
  radEhrhart.change(updatePointsVisibility);

  // Initialize
  polytopeInit();
  txtEdit.val(selShape.val());
  lblDilation.text(rngDilation.val());
  axis.visible = chkAxis.prop('checked');
  spin = chkSpin.prop('checked');
  polytopeRebuild();
  animate();
});
