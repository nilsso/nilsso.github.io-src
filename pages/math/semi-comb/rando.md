---
layout: none
axes: true
spin: true
rainbow: true
interPoints: true
dilation: 3
---
<script src='{{ base.url }}/assets/js/three/build/three.js'></script>
<script src='{{ base.url }}/assets/js/three/modules/QuickHull.js'></script>
<script src='{{ base.url }}/assets/js/three/modules/geometries/ConvexGeometry.js'></script>
<script src='{{ base.url }}/assets/js/three/modules/controls/OrbitControls.js'></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/mathjs/5.6.0/math.js"></script>
<script src='polytopes/polytope.js'></script>
<style>
.polytope {
width: 100%;
height: 100%;
}
</style>
<div id='h1p' class='polytope'></div>
<script>
  function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
  }
  function randomCoord() {
    return Math.random()*2 - 1;
  }
  var rando = [];
  for (var i = 0; i < getRandomInt(4, 16); ++i) {
    rando.push(
      new THREE.Vector3(
        randomCoord(), randomCoord(), randomCoord()));
  }
  polytope( document.getElementById( 'h1p' ), rando, 3,
      {{ page.axes }}, {{ page.spin }}, {{ page.rainbow }},
      {{ page.interPoints }}, {{ page.dilation }});
</script>
