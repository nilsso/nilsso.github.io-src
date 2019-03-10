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

// Cartesian product and helper functions
// https://stackoverflow.com/questions/12303989/\
//   cartesian-product-of-multiple-arrays-in-javascript
const f = (a, b) => [].concat(...a.map(d => b.map(e => [].concat(d, e))));
const cartesian = (a, b, ...c) => (b ? cartesian(f(a, b), ...c) : a);

// Zip function
const zip = (a, b) => a.map( (e, i) => [ e, b[i] ] );

// Range function
function* range(start, end) {
    for (let i = start; i <= end; i++) {
        yield i;
    }
}

//var points = new THREE.Points(geometry, pointMaterial);
//group.add(points);

// CuboidGeometry can be used to generate a cuboidal convex hull for a pair of
// diagonally opposite 3D points.
// @param a First 3D point
// @param b Second 3D point
// @return Cuboidal Geometry object
function CubeGeometry(a, b) {
  var [ x, y, z ] = zip( a.toArray(), b.toArray() );
  var vertices = cartesian(x, y, z).map(function([ x, y, z ] = p) {
    return new THREE.Vector3(x, y, z);
  });
  var geometry = new THREE.Geometry();
  geometry.setFromPoints( vertices );
  return new THREE.ConvexGeometry( geometry.vertices );
}

// EnclosingCuboidGeometry can be used to generate a cuboidal convex hull which
// contains an existing Geometry object.
// @param mesh The contained object
function EnclosingCuboidGeometry(mesh) {
  var a = mesh.vertices[0].clone(), b = mesh.vertices[0].clone();
  mesh.vertices.slice(1).forEach( v => { a.min(v); b.max(v); } );
  return CubeGeometry(a, b);
}

// EhrhartMeshes can be used to return a set of three.js Points object of
// the enclosing lattice points and interior lattice points of an existing
// mesh object.
function EhrhartMeshes(mesh) {
  // Construct hyperplanes
  mesh.computeFaceNormals();
  hyperplanes = mesh.faces.map(function(face) {
    // Ax=b (hyperplane description)
    var n = face.normal
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
  //console.log(interiorVertices.length);
  //console.log(boundingVertices.length);
  var boundingVertexMesh = new THREE.Geometry();
  var interiorVertexMesh = new THREE.Geometry();
  boundingVertexMesh.setFromPoints(boundingVertices);
  interiorVertexMesh.setFromPoints(interiorVertices);
  return [boundingVertexMesh, interiorVertexMesh];
}

function polytope(
  container, vertices, distance,
  axes=false,
  spin=false,
  rainbow=false,
  interiorPoints=false,
  dilation=1 ) {
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

    var a = dilation;
    // Camera
    //var W = 20, H = 10;
    //camera = new THREE.OrthographicCamera(W/-2,W/2,H/2,H/-2,1,100);
    camera = new THREE.PerspectiveCamera( 45, w / h, 1, 100 );
    camera.position.set( distance*a, distance*a, distance*a );
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

    // Mesh material
    var meshMaterial = new THREE.MeshLambertMaterial( {
      color: 0xffffff,
      opacity: 0.5,
      transparent: true
    } );

    // Vertex material
    var pointMaterial = new THREE.PointsMaterial( {
      color: 0x0080ff,
      map: texture,
      alphaTest: 0.5,
      size: 10,
      sizeAttenuation: false
    } );

    var interiorPointMaterial = pointMaterial.clone();
    interiorPointMaterial.color = new THREE.Color( 0xff8000 );

    // Geometry
    var geometry = new THREE.Geometry();
    geometry.setFromPoints( vertices );
    geometry.scale( a, a, a );

    //var arrowHelper = new THREE.ArrowHelper( dir, origin, length, hex );

    // Mesh geometry
    meshGeometry = new THREE.ConvexGeometry( geometry.vertices );

    // Add meshes
    mesh = new THREE.Mesh( meshGeometry, meshMaterial );
    mesh.material.side = THREE.BackSide; // back faces
    mesh.renderOrder = 0;
    group.add( mesh );

    mesh = new THREE.Mesh( meshGeometry, meshMaterial.clone() );
    mesh.material.side = THREE.FrontSide; // front faces
    mesh.renderOrder = 1;
    group.add( mesh );

    // Vertices
    if ( !interiorPoints ) {
      group.add(new THREE.Points(geometry, pointMaterial));
    } else {
      [bounding, interior] = EhrhartMeshes(meshGeometry);
      group.add(new THREE.Points(bounding, pointMaterial));
      group.add(new THREE.Points(interior, interiorPointMaterial));
    }

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
