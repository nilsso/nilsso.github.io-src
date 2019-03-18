var txtEdit, txtData, selShape;
var rngDilation, rngSpin, rngRadius;
var btnBuild, btnSave, btnRando;
var chkMesh, chkWire, chkSpin, chkAxis, chkDual;
var radNone, radDefining, radLattice;

var w, h;
var fov;
var dilation;
var radius;
var segments = 10;
var spin, spinSpeed;

var renderer, scene, camera, controls, light;
var meshMaterialA, meshMaterialB;
var lineMaterialA, lineMaterialB;
var nodeMaterialA, nodeMaterialB;
var geo, geoLine, dual, dualLine;
var geoBounding, geoInterior;
var geoMeshA, geoMeshB, geoMeshLine;
var dualMeshA, dualMeshB, dualMeshLine;
var boundingPoints, innerPoints;
var axisX, axisY, axisZ;

// Decided to hide meshes on an individual basis
// and nodes on a group basis, but groups stll help organize removal.
var group, axis, meshes, wires, defining, bounding, interior;

const urlParams = new URLSearchParams(window.location.search);

// Cartesian product
// https://stackoverflow.com/questions/12303989/cartesian-product-of-multiple-arrays-in-javascript
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

// URL query vertex data helpers
function setQueryVertices() {
  var vertices = encodeURI(txtEdit.val());
  var url = window.location.pathname + '?v=' + vertices;
  window.history.pushState(vertices, 'test', url);
}
function getQueryVertices() {
  return urlParams.get('v');
}

// Node helper functions
const flushGroup = g => { while (g.children.length > 0) g.remove(g.children[0]); };

// Main document on load event
$(function() {
  txtEdit = $('#vertices');
  txtData = $('#data');
  selShape = $('#shape');
  btnBuild = $('#build');
  btnSave = $('#save');
  btnRando = $('#rando');
  lblDilation = $('#dilationLabel');
  chkMesh = $('#mesh');
  chkWire = $('#wire');
  chkAxis = $('#axis');
  chkSpin = $('#spin');
  chkDual = $('#dual');
  chkExpNorm = $('#exp-norms');
  rngDilation = $('#dilation');
  rngSpin = $('#spin-speed');
  rngRadius = $('#dot-radius');
  rngFOV = $('#fov');
  rngAxis = $('#axis-length');
  radNone = $('#dots-none');
  radDefining = $('#dots-defining');
  radLattice = $('#dots-lattice');

  // Handlers
  $('#toggle-controls').click(function() {
    $('#left-controls').toggle();
    $('#right-controls').toggle();
  });

  btnBuild.click(buildPolytope);

  btnSave.click(saveImage);

  btnRando.click(function() {
    var r = [...range(0, 3*getRandomInt(4, 16)-1)].map(function(i) {
      var n = math.random()*2 - 1;
      if (math.round(math.random()))
        n = math.round(math.random()*2 - 1);
      return String(n);
    });
    txtEdit.val(math.reshape(r, [r.length/3, 3]).map(r => r.join(' ')).join('\n'));
    buildPolytope();
  });

  selShape.change(function() {
    txtEdit.val($(this).val());
    buildPolytope();
  });

  rngDilation.on('input', function() {
    lblDilation.text($(this).val());
    dilation = Number(rngDilation.val());
    buildPolytope();
  });

  rngRadius.on('input', function() {
    radius = Number(rngRadius.val());
    buildNodes();
  });

  rngSpin.on('input', function() {
    spinSpeed = parseFloat($(this).val());
  });

  rngAxis.on('input', buildAxis);

  rngFOV.on('input', function() {
    fov = Number(rngFOV.val());
    camera.fov = fov;
    camera.updateProjectionMatrix();
  });

  chkAxis.change(function() {
    axis.visible = $(this).prop('checked');
  });

  chkSpin.change(function() {
    spin = $(this).prop('checked');
  });

  chkExpNorm.change(buildPolytope);

  chkMesh.change(updateVisibility);
  chkWire.change(updateVisibility);
  chkDual.change(updateVisibility);
  radNone.change(updateVisibility);
  radDefining.change(updateVisibility);
  radLattice.change(updateVisibility);

  // Initialize values
  fov = Number(rngFOV.val());
  radius = Number(rngRadius.val());
  lblDilation.text(rngDilation.val());
  dilation = Number(rngDilation.val());
  spin = chkSpin.prop('checked');
  spinSpeed = parseFloat(rngSpin.val());
  txtEdit.val(selShape.val());

  // Initialize scene
  initThreeEnvironment();
  onWindowResize();

  // Go!
  var vertices = getQueryVertices();
  if (vertices)
    txtEdit.val(vertices);
  buildPolytope();
  animate();
});

function HyperplaneDescription(mesh, expNorm) {
  mesh.computeFaceNormals();
  var hyperplanes = mesh.faces.map(function(face) {
    var n = face.normal;
    var p = mesh.vertices[face.a];
    var b = n.dot(p);
    if (expNorm && b) {
      // Experimental: Turn unit normal into integer component normal
      var f = math.abs(math.round(b)/b);
      //n.multiplyScalar(f);
      n.x = math.round(f*n.x);
      n.y = math.round(f*n.y);
      n.z = math.round(f*n.z);
      b = f*b;
    }
    var faceVertexIndices = [ face.a, face.b, face.c ];
    var disjointVertex;
    for (var i = 0; i < mesh.vertices.length; ++i) {
      if (!faceVertexIndices.includes(i)) {
        disjointVertex = mesh.vertices[i];
        break;
      }
    }
    if (n.dot(disjointVertex) > b) {
      n.negate();
      b *= -1;
    }
    return [ n.toArray(), b ];
  });
  var A = hyperplanes.map(h => h[0]);
  var b = hyperplanes.map(h => h[1]);
  return [A, b];
}

function LatticeMeshes(A, b, vMin, vMax) {
  A = math.matrix(A);
  b = math.matrix(b);
  var boundingVertices = [];
  var interiorVertices = [];

  // Get enclosing cuboid diagonal points
  var x = [...range( vMin.x, vMax.x )];
  var y = [...range( vMin.y, vMax.y )];
  var z = [...range( vMin.z, vMax.z )];
  cartesian(x, y, z).forEach(function(p) {
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

function updateVisibility() {
  // Mesh and wireframe
  meshes.visible = chkMesh.prop('checked');
  wires.visible = chkWire.prop('checked');

  // Dual
  dualMeshA.visible = chkDual.prop('checked');
  dualMeshB.visible = chkDual.prop('checked');
  dualMeshLine.visible = chkDual.prop('checked');

  // Nodes
  defining.visible = false;
  bounding.visible = false;
  interior.visible = false;
  if (radDefining.prop('checked')) {
    defining.visible = true;
  }
  if (radLattice.prop('checked')) {
    bounding.visible = true;
    interior.visible = true;
  }

  // Axis
  axis.visible = chkAxis.prop('checked');
}

function buildMeshes() {
  if (geo) {
    geo.dispose();
    geoLine.dispose();
  }
  flushGroup(meshes);
  flushGroup(wires);

  // Polytope
  geo = new THREE.ConvexGeometry(vertices);
  geo.scale(dilation, dilation, dilation);

  geoMeshA = new THREE.Mesh(geo, meshMaterialA.clone());
  geoMeshA.material.side = THREE.BackSide;
  geoMeshA.renderOrder = 2;
  meshes.add(geoMeshA);

  geoMeshB = new THREE.Mesh(geo, meshMaterialA.clone());
  geoMeshB.material.side = THREE.FrontSide;
  geoMeshB.renderOrder = 2;
  meshes.add(geoMeshB);

  geoLine = new THREE.EdgesGeometry(geo);
  geoMeshLine = new THREE.LineSegments(geoLine, lineMaterialA);
  geoMeshLine.renderOrder = 0;
  wires.add(geoMeshLine);

  // Dual polytope
  var [A, b] = HyperplaneDescription(geo, chkExpNorm.prop('checked'));
  geo.computeBoundingBox();
  var [ vMin, vMax ] = [ geo.boundingBox.min, geo.boundingBox.max ];
  [boundingPoints, innerPoints] = [...LatticeMeshes(A, b, vMin, vMax)];

  dual = new THREE.ConvexGeometry(A.map(v => new THREE.Vector3(...v)));
  dualMeshA = new THREE.Mesh(dual, meshMaterialB.clone());
  dualMeshA.material.side = THREE.BackSide;
  dualMeshA.renderOrder = 2;
  meshes.add(dualMeshA);

  dualMeshB = new THREE.Mesh(dual, meshMaterialB.clone());
  dualMeshB.material.side = THREE.FrontSide;
  dualMeshB.renderOrder = 2;
  meshes.add(dualMeshB);

  dualLine = new THREE.EdgesGeometry(dual);
  dualMeshLine = new THREE.LineSegments(dualLine, lineMaterialB);
  dualMeshLine.renderOrder = 0;
  wires.add(dualMeshLine);

  txtData.text(
    '#Verts: '+geo.vertices.length+'\n'+
    '  #BLP: '+boundingPoints.length+'\n'+
    '  #ILP: '+innerPoints.length+'\n'+
    '  #TLP: '+(boundingPoints.length+innerPoints.length));
}

function rotateDots() {
  [defining, bounding, interior].forEach(function(g) {
    g.children.forEach(c => c.lookAt(camera.position));
  });
}

function makeDots(geo, group, mat) {
  var circle = new THREE.CircleGeometry(radius, segments);
  geo.vertices.forEach(function(v) {
    var n = new THREE.Mesh(circle, mat);
    n.position.x = v.x;
    n.position.y = v.y;
    n.position.z = v.z;
    n.renderOrder = 3;
    group.add(n);
  });
}

function buildNodes() {
  flushGroup(defining);
  flushGroup(bounding);
  flushGroup(interior);
  if (geoBounding) {
    geoBounding.dispose();
    geoInterior.dispose();
  }

  // Polytope defining nodes
  makeDots(geo, defining, nodeMaterialA);

  // Bounding nodes
  geoBounding = new THREE.Geometry();
  geoBounding.setFromPoints(boundingPoints);
  makeDots(geoBounding, bounding, nodeMaterialA);

  // Interior nodes
  geoInterior = new THREE.Geometry();
  geoInterior.setFromPoints(innerPoints);
  makeDots(geoInterior, interior, nodeMaterialB);
}

function buildPolytope() {
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
  console.log('REBUILDING POLYTOPE');
  vertices = math.reshape(coords.map(Number), [coords.length/3, 3]).map(p => new THREE.Vector3(...p));
  buildMeshes();
  buildNodes();
  updateVisibility();
  setQueryVertices();
}

function buildAxis() {
  if (axisX) {
    axisX.dispose();
    axisY.dispose();
    axisZ.dispose();
  }
  flushGroup(axis);
  var len = Number(rngAxis.val());

  axisX = new THREE.BufferGeometry();
  axisX.addAttribute('position', new THREE.Float32BufferAttribute([0,0,0,len,0,0]));
  var xl = new THREE.LineSegments(axisX, new THREE.LineBasicMaterial({ color: 0xff0000, linewidth: 2 }));
  xl.renderOrder = 1;
  axis.add(xl);

  axisY = new THREE.BufferGeometry();
  axisY.addAttribute('position', new THREE.Float32BufferAttribute([0,0,0,0,len,0]));
  var yl = new THREE.LineSegments(axisY, new THREE.LineBasicMaterial({ color: 0x00ff00, linewidth: 2 }));
  yl.renderOrder = 1;
  axis.add(yl);

  axisZ = new THREE.BufferGeometry();
  axisZ.addAttribute('position', new THREE.Float32BufferAttribute([0,0,0,0,0,len]));
  var zl = new THREE.LineSegments(axisZ, new THREE.LineBasicMaterial({ color: 0x0000ff, linewidth: 2 }));
  zl.renderOrder = 1;
  axis.add(zl);
}

function initThreeEnvironment() {
  var canvas = $('#canvas');
  w = window.innerWidth;
  h = window.innerHeight;
  //renderer = new THREE.WebGLRenderer({
    //antialias: true
  //});
  renderer = new THREE.SVGRenderer();
  renderer.name = 'renderer';
  renderer.setSize(w, h);
  canvas.append(renderer.domElement);

  scene = new THREE.Scene();
  scene.name = 'scene';
  scene.background = new THREE.Color(0xffffff);

  camera = new THREE.PerspectiveCamera(fov, w/h, 1, 1000);
  camera.name = 'camera';
  camera.position.set(2, 3, 4);
  camera.aspect = w/h;
  camera.updateProjectionMatrix();
  scene.add(camera);

  controls = new THREE.OrbitControls(camera, canvas.get(0));
  controls.name = 'controls';
  controls.enableKeys = false;
  controls.zoomSpeed = 0.5;
  controls.addEventListener('change', render);

  var ambient = new THREE.AmbientLight(0x222222);
  ambient.name = 'ambient';
  scene.add(ambient);
  light = new THREE.PointLight(0xffffff, 1);
  light.name = 'light';
  camera.add(light);

  // Base group
  group = new THREE.Group();
  group.name = 'group';
  scene.add(group);

  // Geometry groups
  meshes = new THREE.Group();
  meshes.name = 'meshes';
  group.add(meshes);

  wires = new THREE.Group();
  wires.name = 'wires';
  group.add(wires);

  // Node groups
  defining = new THREE.Group();
  defining.name = 'defining';
  group.add(defining);

  bounding = new THREE.Group();
  bounding.name = 'bounding';
  group.add(bounding);

  interior = new THREE.Group();
  interior.name = 'interior';
  group.add(interior);

  // Axis
  axis = new THREE.Group();
  axis.name = 'axis';
  group.add(axis);
  axis.visible = chkAxis.prop('checked');
  buildAxis();

  // Materials
  meshMaterialA = new THREE.MeshLambertMaterial({
    color: 0xffa0a0,
    opacity: 0.5,
    transparent: true
  });

  meshMaterialB = new THREE.MeshLambertMaterial({
    color: 0xa0a0ff,
    opacity: 0.25,
    transparent: true
  });

  lineMaterialA = new THREE.LineBasicMaterial({
    color: 0xff0000,
    linewidth: 2
  });

  lineMaterialB = new THREE.LineBasicMaterial({
    color: 0x0000ff,
    linewidth: 2
  });

  nodeMaterialA = new THREE.MeshBasicMaterial({ color: 0xff0000 });
  nodeMaterialB = new THREE.MeshBasicMaterial({ color: 0x00ff00 });

  window.addEventListener('resize', onWindowResize, false);
}

function onWindowResize() {
  w = window.innerWidth;
  h = window.innerHeight;
  camera.aspect = w/h;
  camera.updateProjectionMatrix();
  renderer.setSize(w, h);
}

function animate() {
  requestAnimationFrame(animate);
  if (spin)
    group.rotation.y += spinSpeed;
  rotateDots();
  render();
}

function render() {
  renderer.render(scene, camera);
}

function saveImage() {
  var d = math.min(w, h);
  renderer.setSize(d, d);
  camera.updateProjectionMatrix();

  // Convert canvas into SVG data and encode
  var xml = new XMLSerializer();
  var data = xml.serializeToString(renderer.domElement);
  var url = 'data:image/svg+xml;charset=utf-8,'+encodeURIComponent(data);

  // Dummy link
  var filename = 'polytope.svg';
  var element = document.createElement('a');
  element.setAttribute('href', url);
  element.setAttribute('download', filename);
  document.body.appendChild(element);
  element.click();
  document.body.removeChild(element);

  renderer.setSize(w, h);
  camera.updateProjectionMatrix();
}

