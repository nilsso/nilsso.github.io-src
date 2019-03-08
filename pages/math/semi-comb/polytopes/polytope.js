function getRandomColor() {
  var length = 6;
  var chars = '0123456789ABCDEF';
  var hex = '0x';
  while(length--) hex += chars[(Math.random() * 16) | 0];
  return hex;
}

/**
 * Converts an HSL color value to RGB. Conversion formula
 * adapted from http://en.wikipedia.org/wiki/HSL_color_space.
 * Assumes h, s, and l are contained in the set [0, 1] and
 * returns r, g, and b in the set [0, 255].
 *
 * @param   Number  h       The hue
 * @param   Number  s       The saturation
 * @param   Number  l       The lightness
 * @return  Array           The RGB representation
 */
function hslToRgb(h, s, l) {
  var r, g, b;

  function hue2rgb(p, q, t) {
    if (t < 0) t += 1;
    if (t > 1) t -= 1;
    if (t < 1/6) return p + (q - p) * 6 * t;
    if (t < 1/2) return q;
    if (t < 2/3) return p + (q - p) * (2/3 - t) * 6;
    return p;
  }

  if (s == 0) {
    r = g = b = l; // achromatic
  } else {

    var q = l < 0.5 ? l * (1 + s) : l + s - l * s;
    var p = 2 * l - q;

    r = hue2rgb(p, q, h + 1/3);
    g = hue2rgb(p, q, h);
    b = hue2rgb(p, q, h - 1/3);
  }

  return [ r * 255, g * 255, b * 255 ];
}

function polytope( container, vertices, s, axes, spin, rainbow ) {
  var group, camera, scene, light, renderer, mesh, w, h;
  var hue = 0, hueDelta = 0.01;

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
    var a = 3;
    //var W = 20, H = 10;
    //camera = new THREE.OrthographicCamera(W/-2,W/2,H/2,H/-2,1,100);
    camera = new THREE.PerspectiveCamera( 45, w / h, 1, a*100 );
    camera.position.set( a*s, a*s, a*s );
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

    // Axes
    if (axes) {
      group.add( new THREE.AxesHelper( 20 ) );
    }

    // Textures
    var loader = new THREE.TextureLoader();
    var texture = loader.load('polytopes/disc.png');

    // Geometry
    var geometry = new THREE.Geometry();
    geometry.setFromPoints( vertices );

    // Mesh geometry
    geometry.scale( a, a, a );
    meshGeometry = new THREE.ConvexGeometry( geometry.vertices );

    // Mesh material
    var meshMaterial = new THREE.MeshLambertMaterial( {
      color: 0xffffff,
      opacity: 0.5,
      transparent: true
    } );

    // Vertex material
    vertexMaterial = new THREE.PointsMaterial( {
      color: 0x0080ff,
      map: texture,
      alphaTest: 0.5,
      size: 10,
      sizeAttenuation: false
    } );

    // Add meshes
    mesh = new THREE.Mesh( meshGeometry, meshMaterial );
    mesh.material.side = THREE.BackSide; // back faces
    mesh.renderOrder = 0;
    group.add( mesh );

    mesh = new THREE.Mesh( meshGeometry, meshMaterial.clone() );
    mesh.material.side = THREE.FrontSide; // front faces
    mesh.renderOrder = 1;
    group.add( mesh );

    // Add vertices
    var points = new THREE.Points(geometry, vertexMaterial);
    group.add(points);

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
    if (spin) {
      group.rotation.y += 0.005;
    }
    if (rainbow) {
      color = '0x' + hslToRgb( hue, 1, 0.5 ).map(
        x => Math.floor( x ).toString( 16 ).padStart( 2, '0' )).join( '' );
      mesh.material.color.setHex(color);
      hue = ( hue + hueDelta ) % 1;
    }
    render();
  }

  function render() {
    renderer.render( scene, camera );
  }
}
