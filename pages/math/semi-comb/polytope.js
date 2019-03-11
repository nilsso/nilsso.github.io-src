var selShape, txtEdit, txtData, rngDilation, lblDilation;
var btnRebuild, btnRando, btnDual;
var chkSpin, chkAxis, chkDual, chkExpNorm;
var radNone, radDef, radLattice;
var renderer, scene, camera, controls, group;
var meshMatA, meshMatB, pointMatA, pointMatB;
var axis, geoMeshA, geoMeshB, dualMeshA, dualMeshB;
var geo, dualGeo, vertsDef, dualVertsDef, vertsBound, vertsInner;
var pointsDef, pointsBound, pointsInner, points;

var dilation;
var spin, spinSpeed = 0.005;

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

// Random integer in range
function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}

function randomPoints() {
  return rando;
}

// HyperplaneDescription can be used to return an array of the A matrix and b
// column matrix (both type Array) of the hyperplane description for an existing
// mesh.
function HyperplaneDescription(mesh) {
  mesh.computeFaceNormals();
  var hyperplanes = mesh.faces.map(function(face) {
    // Ax=b (hyperplane description)
    var n = face.normal;
    var p = mesh.vertices[face.a];
    var b = n.dot(p);
    /// Experimental: Turn unit normal into integer component normal
    if (chkExpNorm.prop('checked') && b) {
      var f = math.abs(1/b);
      //n.multiplyScalar(f);
      n.x = math.round(f*n.x);
      n.y = math.round(f*n.y);
      n.z = math.round(f*n.z);
      b = f*b;
    }
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
  var A = hyperplanes.map(h => h[0]);
  var b = hyperplanes.map(h => h[1]);
  // Eliminate duplicate rows
  // (since every square face has two triangular hyperplanes)
  for (var i = 0; i < A.length-1; ++i) {
    for (var j = i+1; j < A.length; ++j) {
      if (math.equal(A[i], A[j]).every(t => t)) {
        A.pop(j);
        b.pop(j);
      }
    }
  }
  return [A, b];
}

// LatticeMeshes can be used to return a set of three.js Points object of
// the enclosing lattice points and interior lattice points from the A matrix
// and b column matrix of the hyperplane description of a polytope and a pair
// of vectors defining the minimum and maximum points of a cuboid in which to
// check lattice points.
function LatticeMeshes(A, b, vMin, vMax) {
  var boundingVertices = [];
  var interiorVertices = [];

  // Get enclosing cuboid diagonal points
  var x = [...range( vMin.x, vMax.x )];
  var y = [...range( vMin.y, vMax.y )];
  var z = [...range( vMin.z, vMax.z )];
  cartesian( x, y, z ).forEach(function(p) {
    var Ax = math.multiply(A, p);
    if (math.smallerEq(Ax, b).every(v => v)) {
      if (math.smaller(Ax, b).every(v => v))
        interiorVertices.push(new THREE.Vector3(...p));
      else
        boundingVertices.push(new THREE.Vector3(...p));
    }
  });
  return [boundingVertices, interiorVertices];
}

function updateVisiblity() {
  // Dual polytope
  dualMeshA.visible = chkDual.prop('checked');
  dualMeshB.visible = chkDual.prop('checked');

  // Lattice points
  points.forEach(p => p.visible=false);
  if (radDef.prop('checked')) {
    pointsDef.visible = true;
  }
  if (radLattice.prop('checked')) {
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
  if (coords.length < 12) {
    alert('Algorithm requires at least 4 points');
    return;
  }
  if (geo) {
    geo.dispose();
    dualGeo.dispose();
    vertsDef.dispose();
    dualVertsDef.dispose();
    vertsBound.dispose();
    vertsInner.dispose();
  }

  var dilation = Number(rngDilation.val());

  // Polytope
  vertsDef = new THREE.Geometry();
  vertsDef.setFromPoints(
    math.reshape(coords.map(Number), [coords.length/3, 3]).map(
      p => new THREE.Vector3(...p)));
  vertsDef.scale(dilation, dilation, dilation);
  geo = new THREE.ConvexGeometry(vertsDef.vertices);

  // Dual polytope
  var [A, b] = HyperplaneDescription(geo);
  dualVertsDef = new THREE.Geometry();
  dualVertsDef.setFromPoints(A.map(p => new THREE.Vector3(...p)));
  dualVertsDef.scale(dilation, dilation, dilation);
  dualGeo = new THREE.ConvexGeometry(dualVertsDef.vertices);

  // Lattice points
  geo.computeBoundingBox();
  var [ vMin, vMax ] = [ geo.boundingBox.min, geo.boundingBox.max ];
  var [bound, inner] = [...LatticeMeshes(A, b, vMin, vMax)];
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

  geoMeshA = new THREE.Mesh(geo, meshMatA);
  geoMeshA.material.side = THREE.BackSide; // back faces
  geoMeshA.renderOrder = 0;
  group.add(geoMeshA);

  geoMeshB = new THREE.Mesh(geo, meshMatA.clone());
  geoMeshB.material.side = THREE.FrontSide; // front faces
  geoMeshB.renderOrder = 1;
  group.add(geoMeshB);

  dualMeshA = new THREE.Mesh(dualGeo, meshMatB);
  dualMeshA.material.side = THREE.BackSide; // back faces
  dualMeshA.renderOrder = 0;
  group.add(dualMeshA);

  dualMeshB = new THREE.Mesh(dualGeo, meshMatB.clone());
  dualMeshB.material.side = THREE.FrontSide; // front faces
  dualMeshB.renderOrder = 1;
  group.add(dualMeshB);

  points.forEach(p => group.add(p));
  updateVisiblity();

  var rad = geo.vertices.reduce((a, b) => math.max(a, b.length()), 0)*3.33;
  camera.fov = rad;
  camera.updateProjectionMatrix();

  txtData.text(
    ' #V: '+geo.vertices.length+'\n'+
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
  scene.background = new THREE.Color(0x000000);

  camera = new THREE.PerspectiveCamera(40, window.innerWidth / window.innerHeight, 1, 1000);
  camera.position.set(15, 20, 30);
  scene.add(camera);

  controls = new THREE.OrbitControls(camera, renderer.domElement);
  controls.enableKeys = false;
  //controls.enableZoom = false;

  scene.add(new THREE.AmbientLight(0x222222));
  camera.add(new THREE.PointLight(0xffffff, 1));

  group = new THREE.Group();
  scene.add(group);

  axis = new THREE.AxesHelper(20);
  group.add(axis);

  meshMatA = new THREE.MeshLambertMaterial({
    color: 0xffffff,
    opacity: 0.5,
    transparent: true
  });

  meshMatB = new THREE.MeshLambertMaterial({
    color: 0x7777ff,
    opacity: 0.25,
    transparent: true
  });

  var loader = new THREE.TextureLoader();
  var texture = loader.load('disc.png');
  pointMatA = new THREE.PointsMaterial({
    color: 0x0080ff,
    map: texture,
    alphaTest: 0.5,
    size: 1,
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
  btnDual = $('#makeDual');
  btnRando = $('#rando');
  chkAxis = $('#axis');
  chkSpin = $('#spin');
  chkDual = $('#dual');
  chkExpNorm = $('#experimentalNormals');
  radNone = $('#verticesNone');
  radDef = $('#verticesDefining');
  radLattice = $('#verticesLattice');

  // Handlers
  selShape.change(function() {
    txtEdit.val($(this).val());
    polytopeRebuild();
  });

  rngDilation.on('input', function() {
    lblDilation.text($(this).val());
    polytopeRebuild();
  });

  btnRebuild.click(polytopeRebuild);

  btnDual.click(function() {
    var [A, b] = HyperplaneDescription(geo);
    txtEdit.val(A.map(r => r.join(' ')).join('\n'));
    polytopeRebuild();
  });

  btnRando.click(function() {
    var r = [...range(0, 3*getRandomInt(4, 16)-1)].map(function(i) {
      var n = math.random()*2 - 1;
      if (math.round(math.random()))
        n = math.round(math.random()*2 - 1);
      return String(n);
    });
    txtEdit.val(math.reshape(r, [r.length/3, 3]).map(r => r.join(' ')).join('\n'));
    polytopeRebuild();
  });

  chkAxis.change(function() {
    axis.visible = $(this).prop('checked');
  });

  chkSpin.change(function() {
    spin = $(this).prop('checked');
  });

  chkExpNorm.change(polytopeRebuild);

  chkDual.change(updateVisiblity);
  radNone.change(updateVisiblity);
  radDef.change(updateVisiblity);
  radLattice.change(updateVisiblity);

  // Initialize
  polytopeInit();
  txtEdit.val(selShape.val());
  lblDilation.text(rngDilation.val());
  axis.visible = chkAxis.prop('checked');
  spin = chkSpin.prop('checked');
  polytopeRebuild();
  animate();
});
