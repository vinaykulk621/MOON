import './style.css'
import * as THREE from 'three';

// scene
const scene = new THREE.Scene();

// camera
// const camera = new TREE.PerspectiveCamera(filedOfView, aspectRatio, viewFrustrum, 1000);
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);


// renderer
const renderer = new THREE.WebGLRenderer({
  canvas: document.querySelector('#bg'),
});
renderer.setPixelRatio(window.devicePixelRatio)
renderer.setSize(window.innerWidth, window.innerHeight)
camera.position.setZ(30)
renderer.render(scene, camera)


// geometry
const geometry = new THREE.TorusGeometry(12, 5, 25, 50);
const material = new THREE.MeshBasicMaterial({ color: 0xFF6347, wireframe: true });
// const material = new THREE.MeshStandardMaterial({ color: 0xFF6347 });
const torus = new THREE.Mesh(geometry, material);
scene.add(torus)

// lighting
// const pointLight = new THREE.pointLight(0xffffff);


function animate() {
  // telling browser to rerender
  requestAnimationFrame(animate)

  // making torus move
  torus.rotation.x += 0.01
  torus.rotation.y += 0.1
  torus.rotation.z += 0.01

  // rendering
  renderer.render(scene, camera)
}

animate();