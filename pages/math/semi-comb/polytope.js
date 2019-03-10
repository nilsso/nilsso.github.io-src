var selShape, txtEdit, btnApply, chkSpin, chkAxis, polytope;
var renderer, scene, camera, controls, group, axis, meshMat, geo, meshA, meshB;

var spin, spinSpeed = 0.005;

var shapes = {
  simplex: `\
0 0 0
1 0 0
0 1 0
0 0 1`,
  cube:`\
0 0 0
1 0 0
0 1 0
1 1 0
0 0 1
1 0 1
0 1 1
1 1 1`
};

// Rebuilt polytope from vertex textarea data
function polytopeRebuild() {
  console.log('REBUILDING POLYTOPE');
  txtEdit.val(txtEdit.val().trim());
  var coords = txtEdit.val().split(/\s+/);
  if (coords.length % 3 || !coords.every(t => $.isNumeric(t))) {
    alert('Invalid vertex list');
    return;
  }
  pointArray = math.reshape(coords.map(Number), [coords.length/3, 3]);
  if (geo)
    geo.dispose();
  geo = new THREE.ConvexGeometry(pointArray.map(p => new THREE.Vector3(...p)));

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

  var v = geo.vertices[0].clone();
  geo.vertices.forEach(u => v.max(u));
  camera.fov = v.length()*3;
  camera.updateProjectionMatrix();
}

// Initialize renderer
function polytopeInit() {
  renderer = new THREE.WebGLRenderer({ antialias: true });
  renderer.setPixelRatio(window.devicePixelRatio);
  renderer.setSize(window.innerWidth, window.innerHeight);
  document.body.appendChild( renderer.domElement );
  //polytope.appendChild(renderer.domElement);

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

  window.addEventListener('resize', onWindowResize, false);
}

function onWindowResize() {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
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
  btnApply = $('#apply');
  chkAxis = $('#axis');
  chkSpin = $('#spin');
  polytope = $('#polytope');

  // Add default shape options
  $.each(shapes, function(k, v) {
    selShape.append(new Option(k, v));
  });

  // Handlers
  selShape.change(function(e) {
    txtEdit.val($(this).val());
    polytopeRebuild();
  });

  btnApply.click(polytopeRebuild);

  chkAxis.change(function() {
    axis.visible = $(this).prop('checked');
  });

  chkSpin.change(function() {
    spin = $(this).prop('checked');
  });

  // Initialize
  polytopeInit();
  txtEdit.val(shapes.simplex);
  axis.visible = chkAxis.prop('checked');
  spin = chkSpin.prop('checked');
  polytopeRebuild();
  animate();
});
