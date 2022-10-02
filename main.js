import './style.css'
import * as THREE from 'three';

// To make the scene movable
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'


// scene
const scene = new THREE.Scene();


// camera
// THREE.PerspectiveCamera(filedOfView, aspectRatio, viewFrustrum, 1000);
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);


// renderer(rendering these objects to the screen)
const renderer = new THREE.WebGLRenderer({
  canvas: document.querySelector('#bg'),
});
// pixel ratio of the object
renderer.setPixelRatio(window.devicePixelRatio)
// size of the canvas
renderer.setSize(window.innerWidth, window.innerHeight)
// camera position
camera.position.setZ(40)


// geometry or shapes to the scene
// Making the shape of the moon
const geometry = new THREE.SphereGeometry(10, 150, 20);
// loading skin of the moon
const moonSkin = new THREE.TextureLoader().load('monn.jpg');
// wrapping the moon with its skin
const material = new THREE.MeshBasicMaterial({ map: moonSkin });
// storing the sphere in the sphere variable
const sphere = new THREE.Mesh(geometry, material);
// adding the moon to the screen
scene.add(sphere)


// lighting
// pointlight
const pointLight = new THREE.PointLight(0xffffff);
const anotherPointLight = new THREE.PointLight(0xffffff);
pointLight.position.set(30, 30, 30)
anotherPointLight.position.set(10, 20, 40)
scene.add(pointLight, anotherPointLight)


// orbitControl lets you move the objects
const controls = new OrbitControls(camera, renderer.domElement);


// random stars
function addStars() {
  // Making the shape of the star
  const geometry = new THREE.SphereGeometry(0.5);
  
  // color of the star[white]
  const material = new THREE.MeshBasicMaterial({ color: 0xffffff });
  
  // putting the star n sphere variable
  const sphere = new THREE.Mesh(geometry, material);

  // generating random points on the screen to put stars in
  const [x, y, z] = Array(3).fill().map(() => THREE.MathUtils.randFloatSpread(700))
  
  // putting stars in random points
  sphere.position.set(x, y, z)

  // adding the scene to the page
  scene.add(sphere)
}
// filling the screen with the stars
Array(800).fill().forEach(addStars)



// function to animate the whole scene after refresh or after repainting the screen
function animate() {
  // telling browser to rerender
  requestAnimationFrame(animate)
  
  // making sphere move
  sphere.rotation.x += 0.001
  sphere.rotation.y += 0.001
  sphere.rotation.z += 0.001

  // mouse controls updating
  controls.update()
  
  // rendering the whole scene by callling the render
  renderer.render(scene, camera)
}
animate();


// random moons
// function addMoons() {
  //   const geometry = new THREE.SphereGeometry(10, 150, 20);
  //   // adding skin to moon
  //   const moonSkin = new THREE.TextureLoader().load('monn.jpg');
  //   const material = new THREE.MeshBasicMaterial({ map: moonSkin });
  //   const sphere = new THREE.Mesh(geometry, material);
  
  //   const [x, y, z] = Array(3).fill().map(() => THREE.MathUtils.randFloatSpread(700))
  //   sphere.position.set(x, y, z)
  
  //   scene.add(sphere)
  // }
  // filling the screen with the stars
  // Array(100).fill().forEach(addMoons)