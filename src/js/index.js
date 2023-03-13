import * as THREE from 'three';
import {OrbitControls} from 'three/examples/jsm/controls/OrbitControls.js';

import starsTexture from '../img/stars.jpg';
import sunTexture from '../img/sunmapthumb.jpg';
import mercuryTexture from '../img/mercurymapthumb.jpg'
import venusTexture from '../img/venusmapthumb.jpg'
import earthTexture from '../img/earthmapthumb.jpg'
import marsTexture from '../img/marsmapthumb.jpg'
import jupiterTexture from '../img/jupitermapthumb.jpg'
import saturnTexture from '../img/saturnmapthumb.jpg'
import saturnRingTexture from '../img/Ring.png'
import uranusTexture from '../img/uranusmapthumb.jpg'
import uranusRingTexture from '../img/favpng_uranus-the-trooth-texture-mapping-planet-mykolaiv.png'
import neptuneTexture from '../img/neptunemapthumb.jpg'
import plutoTexture from '../img/plutomapthumb.jpg'


const renderer = new THREE.WebGLRenderer({antialias: true});
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// Sets the color of the background
renderer.setClearColor(0xFEFEFE);

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(
    45,
    window.innerWidth / window.innerHeight,
    0.1,
    1000
);

// Sets orbit control to move the camera around
const orbit = new OrbitControls(camera, renderer.domElement);

// Camera positioning
camera.position.set(-90, 140, 140);
orbit.update();


const ambientLight = new THREE.AmbientLight(0x333333);
scene.add(ambientLight);

const cubeTextureLoader = new THREE.CubeTextureLoader();
scene.background = cubeTextureLoader.load([
    starsTexture,
    starsTexture,
    starsTexture,
    starsTexture,
    starsTexture,
    starsTexture,
])

const textureLoader = new THREE.TextureLoader();
const sunGeo = new THREE.SphereGeometry(16,30,30);
const sunMat = new THREE.MeshBasicMaterial({map : textureLoader.load(sunTexture)});
const sun = new THREE.Mesh(sunGeo,sunMat);
scene.add(sun);


// Sets a 12 by 12 gird helper
const gridHelper = new THREE.GridHelper(12, 12);
scene.add(gridHelper);

// Sets the x, y, and z axes with each having a length of 4
const axesHelper = new THREE.AxesHelper(4);
scene.add(axesHelper);

function animate() {
    renderer.render(scene, camera);
}

renderer.setAnimationLoop(animate);
window.addEventListener('resize', function() {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
});