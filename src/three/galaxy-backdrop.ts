/**
 * This is a re-rendition of the threejs example of `tsl / galaxy` restructured to act as a static 
 * background / backdrop for really wide screens rather that using just a basic / static colour.
 * @link {https://threejs.org/examples/?q=galax#webgpu_tsl_galaxy}
 */

import * as THREE from 'three';
import { color, cos, float, mix, range, sin, time, uniform, uv, vec3, vec4, PI2 } from 'three/tsl';
import { SpriteNodeMaterial } from 'three/src/materials/nodes/NodeMaterials.js';
import WebGPURenderer from 'three/src/renderers/webgpu/WebGPURenderer.js'
import { resolveVisibility } from '@lib/visibility';

// import Stats from 'three/addons/libs/stats.module.js';
// import { GUI } from 'three/addons/libs/lil-gui.module.min.js';



let camera:   THREE.PerspectiveCamera;
let scene:    THREE.Scene;
let renderer: WebGPURenderer;
// let stats:    Stats;

// as this is behind the site context lets not even bother instantiating it
const wouldBeVisible = resolveVisibility();

if (wouldBeVisible){

  // stats =  new Stats();
  camera = new THREE.PerspectiveCamera( 50, window.innerWidth / window.innerHeight, 0.1, 100 );
  camera.position.set( 1.6, 6.1, 1.9 );
  camera.rotation.set( -1.3, 0.22, 0.66);

  scene = new THREE.Scene();
  scene.background = new THREE.Color( 0x000000 );

  // galaxy

  const material = new SpriteNodeMaterial( {
    depthWrite: false,
    blending: THREE.AdditiveBlending
  } );

  const size = uniform( 0.08 );
  material.scaleNode = range( 0, 1 ).mul( size );

  const radiusRatio = range( 0, 1 );
  const radius = radiusRatio.pow( 1.5 ).mul( 5 ).toVar();

  const branches = 4;
  const branchAngle = range( 0, branches ).floor().mul( PI2.div( branches ) );
  const angle = branchAngle.add( time.mul( radiusRatio.oneMinus() ) );

  const position = vec3(
    cos( angle ),
    0,
    sin( angle )
  ).mul( radius );

  const randomOffset = range( vec3( - 1 ), vec3( 1 ) ).pow( 3 ).mul( radiusRatio ).add( 0.2 );

  material.positionNode = position.add( randomOffset );

  const colorInside = uniform( color( '#fee35d' ) );
  const colorOutside = uniform( color( '#8f0000' ) );
  const colorFinal = mix( colorInside, colorOutside, radiusRatio.oneMinus().pow( 2 ).oneMinus() );
  const alpha = float( 0.1 ).div( uv().sub( 0.5 ).length() ).sub( 0.2 );
  material.colorNode = vec4( colorFinal, alpha );

  // drop from 20,000 to 5,000 for more reasonable performance
  const mesh = new THREE.InstancedMesh( new THREE.PlaneGeometry( 1, 1 ), material, 5000 );
  scene.add( mesh );

  // debug

  /*
  const gui = new GUI();

  gui.add( size, 'value', 0, 1, 0.001 ).name( 'size' );

  gui.addColor( { color: colorInside.value.getHex( THREE.SRGBColorSpace ) }, 'color' )
    .name( 'colorInside' )
    .onChange( function ( value ) {

      colorInside.value.set( value );

    } );

  gui.addColor( { color: colorOutside.value.getHex( THREE.SRGBColorSpace ) }, 'color' )
    .name( 'colorOutside' )
    .onChange( function ( value ) {

      colorOutside.value.set( value );

    } );

  */

  // renderer

  renderer = new WebGPURenderer( { antialias: true } );
  renderer.setPixelRatio( window.devicePixelRatio );
  renderer.setSize( window.innerWidth, window.innerHeight );
  renderer.setAnimationLoop( animate );

  const wrapperElement = document.getElementById('application_wrapper');
  wrapperElement?.appendChild( renderer.domElement );
  window.addEventListener( 'resize', onWindowResize );
  
  // document.body?.appendChild( stats.dom );
}


function onWindowResize() {

  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();

  renderer.setSize( window.innerWidth, window.innerHeight );

}

export function animate() {
  if (wouldBeVisible){
    try{
      renderer.renderAsync( scene, camera );
      // stats.update();
    } catch (e) {
      console.warn('not animating as failure in render... removing canvas');
      console.warn(e);
      let canvasNode;
      document.getElementById('application_wrapper')?.childNodes.forEach(n => {
        if (n.nodeName === 'CANVAS'){
          canvasNode = n;
        }
      })
      if (canvasNode){
        document.getElementById('application_wrapper')?.removeChild(canvasNode);
      }
      renderer.dispose();
    }
  } else {
    console.warn('not animating as scene is not visible');
  }
}
