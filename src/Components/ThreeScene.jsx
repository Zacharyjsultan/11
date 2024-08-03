import React, { useRef, useEffect } from "react";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";

const createNumberTexture = (number, backgroundColor = "#ffffff") => {
  const canvas = document.createElement("canvas");
  const context = canvas.getContext("2d");
  canvas.width = 256;
  canvas.height = 256;

  if (!context) {
    console.error("Failed to get canvas 2D context");
    return new THREE.CanvasTexture(canvas);
  }

  context.fillStyle = backgroundColor;
  context.fillRect(0, 0, canvas.width, canvas.height);

  context.font = "120px Arial";
  context.fillStyle = "black";
  context.textAlign = "center";
  context.textBaseline = "middle";
  context.fillText(number, canvas.width / 2, canvas.height / 2);

  return new THREE.CanvasTexture(canvas);
};

const ThreeScene = ({ onClick }) => {
  const mountRef = useRef(null);

  useEffect(() => {
    const currentMount = mountRef.current;

    if (!currentMount) return;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    const renderer = new THREE.WebGLRenderer({ antialias: true });

    renderer.setSize(window.innerWidth, window.innerHeight);
    currentMount.appendChild(renderer.domElement);

    const textures = [
      createNumberTexture("18", "#f5d5d5"), // Front
      createNumberTexture("21", "#f5d5d5"), // Back
      createNumberTexture("36", "#f5f5dc"), // Top
      createNumberTexture("420", "#f5f5dc"), // Bottom
      createNumberTexture("50", "#f5d5d5"), // Right
      createNumberTexture("69", "#f5d5d5"), // Left
    ];

    const geometry = new THREE.BoxGeometry();
    const materials = textures.map(
      (texture) => new THREE.MeshBasicMaterial({ map: texture })
    );
    const die = new THREE.Mesh(geometry, materials);
    scene.add(die);

    // Add black edges around the cube
    const edgesGeometry = new THREE.EdgesGeometry(geometry);
    const edgesMaterial = new THREE.LineBasicMaterial({ color: 0x000000 }); // Black color
    const edges = new THREE.LineSegments(edgesGeometry, edgesMaterial);
    scene.add(edges);

    camera.position.z = 5;

    // Add OrbitControls
    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true; // Enable damping (inertia)
    controls.dampingFactor = 0.25; // Damping factor
    controls.screenSpacePanning = false; // Prevent panning
    controls.maxPolarAngle = Math.PI / 2; // Limit vertical rotation

    // Animation loop
    const animate = () => {
      requestAnimationFrame(animate);
      die.rotation.x += 0.01;
      die.rotation.y += 0.01;

      // Ensure edges rotate with the cube
      edges.rotation.x = die.rotation.x;
      edges.rotation.y = die.rotation.y;

      controls.update(); // Update controls
      renderer.render(scene, camera);
    };

    animate();

    // Handle window resize
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    window.addEventListener("resize", handleResize);

    // Clean up on component unmount
    return () => {
      currentMount.removeChild(renderer.domElement);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <button onClick={onClick} className="three-scene-button">
      <div ref={mountRef} className="three-scene"></div>
    </button>
  );
};

export default ThreeScene;
