import React, { useRef, useEffect } from "react";
import * as THREE from "three";

const ThreeBackground = ({ enable3D = true, showBanner = false }) => {
  const mountRef = useRef(null);

  useEffect(() => {
    if (!enable3D) return; // 🚫 Don't run Three.js if 3D is disabled

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    camera.position.z = 2.5;

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(window.devicePixelRatio);
    mountRef.current.appendChild(renderer.domElement);

    const vertexShader = `
      varying vec2 vUv;
      void main() {
        vUv = uv;
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
      }
    `;

    const fragmentShader = `
      uniform float time;
      varying vec2 vUv;

      void main() {
        vec2 uv = vUv;
        vec3 color = vec3(0.0);

        float wave = sin(uv.y * 10.0 + time) * 0.1;
        float mask = smoothstep(0.2, 0.8, uv.y + wave);

        color = mix(vec3(0.0, 0.4, 0.6), vec3(0.0, 0.8, 0.6), uv.y + wave);
        color *= mask;

        gl_FragColor = vec4(color, 1.0);
      }
    `;

    const geometry = new THREE.PlaneGeometry(10, 10, 100, 100);
    const material = new THREE.ShaderMaterial({
      uniforms: {
        time: { value: 0.0 },
      },
      vertexShader,
      fragmentShader,
      transparent: true,
    });

    const plane = new THREE.Mesh(geometry, material);
    scene.add(plane);

    const clock = new THREE.Clock();

    const animate = () => {
      requestAnimationFrame(animate);
      material.uniforms.time.value = clock.getElapsedTime();
      renderer.render(scene, camera);
    };

    animate();

    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      if (mountRef.current && renderer.domElement.parentNode === mountRef.current) {
        mountRef.current.removeChild(renderer.domElement);
      }
    };
  }, [enable3D]); // ✅ Depend on enable3D

  return (
    <div ref={mountRef} className="fixed top-0 left-0 w-full h-full -z-10">
      {showBanner && (
        <img
          src="/path/to/your/banner-image.png"
          alt="Banner"
          className="absolute top-10 left-10 w-[400px] z-10"
        />
      )}
    </div>
  );
};

export default ThreeBackground;
