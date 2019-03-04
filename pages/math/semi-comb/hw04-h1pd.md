---
layout: none
axes: true
spin: false
rainbow: false
---
<script src='{{ site.url }}/assets/js/three/build/three.js'></script>
<script src='{{ site.url }}/assets/js/three/modules/QuickHull.js'></script>
<script src='{{ site.url }}/assets/js/three/modules/geometries/ConvexGeometry.js'></script>
<script src='{{ site.url }}/assets/js/three/modules/controls/OrbitControls.js'></script>
<script src='polytopes/polytope.js'></script>
<style>
.polytope {
width: 100%;
height: 100%;
}
</style>
<div id='h1pd' class='polytope'></div>
<script>
  var simplex = [
    new THREE.Vector3(1,1,1),
    new THREE.Vector3(1,1,-1),
    new THREE.Vector3(1,-2,1),
    new THREE.Vector3(1,-2,-1),
    new THREE.Vector3(-2,1,1),
    new THREE.Vector3(-2,1,-1)
  ];
  polytope( document.getElementById( 'h1pd' ), simplex, 65,
      {{ page.axes }}, {{ page.spin }}, {{ page.rainbow }} );
</script>
