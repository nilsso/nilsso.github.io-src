function getRandomColor() {
  var length = 6;
  var chars = '0123456789ABCDEF';
  var hex = '0x';
  while(length--) hex += chars[(Math.random() * 16) | 0];
  return hex;
}

function polytope( container, vertices, fov, axes ) {
  var group, camera, scene, light, renderer, mesh, w, h;

  init();
  animate();

  function init() {
    // Container
    w = container.offsetWidth;
    h = container.offsetHeight;

    // Renderer
    renderer = new THREE.WebGLRenderer( { antialias: true } );
    renderer.setPixelRatio( window.devicePixelRatio );
    renderer.setSize( w, h );
    container.appendChild( renderer.domElement );

    // Scene
    scene = new THREE.Scene();
    scene.background = new THREE.Color( 0xffffff );

    // Camera
    camera = new THREE.PerspectiveCamera( fov, w / h, 1, 10 );
    camera.position.set( 2, 3, 4 );
    camera.lookAt( new THREE.Vector3( 0, 0, 0 ) );
    scene.add( camera );

    // Controls
    var controls = new THREE.OrbitControls( camera, renderer.domElement );
    controls.enableKeys = false;
    controls.enableZoom = false;

    // Ambient light
    scene.add(new THREE.AmbientLight( 0x222222 ));

    // Scene light
    var light = new THREE.PointLight( 0xffffff, 1 );
    camera.add( light );

    // Group
    group = new THREE.Group();
    scene.add(group);

    // Axis
    if (axes) {
      group.add( new THREE.AxesHelper( 20 ) );
    }

    // Shape vertices

    // Geometry
    var geometry = new THREE.Geometry();
    geometry.setFromPoints( vertices );

    // Mesh geometry
    var a = 1;
    geometry.scale( a, a, a );
    meshGeometry = new THREE.ConvexGeometry( geometry.vertices );

    // Mesh material
    var meshMaterial = new THREE.MeshLambertMaterial( {
      color: 0xffffff,
      opacity: 0.5,
      transparent: true
    } );

    // Composed mesh
    mesh = new THREE.Mesh( meshGeometry, meshMaterial );
    mesh.material.side = THREE.BackSide; // back faces
    mesh.renderOrder = 0;
    group.add( mesh );

    mesh = new THREE.Mesh( meshGeometry, meshMaterial.clone() );
    mesh.material.side = THREE.FrontSide; // front faces
    mesh.renderOrder = 1;
    group.add( mesh );

    window.addEventListener('resize', onWindowResize, false);
  }

  function onWindowResize() {
    w = container.offsetWidth;
    h = container.offsetHeight;
    camera.aspect = w / h;
    camera.updateProjectionMatrix();
    renderer.setSize( w, h );
  }

  function animate() {
    requestAnimationFrame( animate );
    group.rotation.y += 0.005;
    //mesh.material.color.setHex(getRandomColor());
    render();
  }

  function render() {
    renderer.render( scene, camera );
  }
}
