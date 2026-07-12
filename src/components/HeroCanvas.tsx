import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
export function HeroCanvas() {
  const mountRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const mount = mountRef.current;
    const reduced = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches;
    if (!mount || reduced || window.innerWidth < 700) return;
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      42,
      mount.clientWidth / mount.clientHeight,
      0.1,
      100
    );
    camera.position.z = 7;
    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true,
      powerPreference: 'low-power'
    });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5));
    renderer.setSize(mount.clientWidth, mount.clientHeight);
    mount.appendChild(renderer.domElement);
    const group = new THREE.Group();
    scene.add(group);
    const geometry = new THREE.PlaneGeometry(1.5, 2);
    const colors = ['#8f7052', '#d5c8ad', '#59483f', '#b9a079', '#6a5c4d'];
    const cards = colors.map((color, index) => {
      const mesh = new THREE.Mesh(
        geometry,
        new THREE.MeshBasicMaterial({
          color,
          transparent: true,
          opacity: 0.26,
          side: THREE.DoubleSide
        })
      );
      mesh.position.set(
        (index - 2) * 1.15,
        Math.sin(index * 2) * 0.8,
        -Math.abs(index - 2) * 0.5
      );
      mesh.rotation.set(
        (index - 2) * 0.08,
        (index - 2) * 0.13,
        (index - 2) * 0.08
      );
      group.add(mesh);
      return mesh;
    });
    let mouseX = 0;
    const onMove = (event: MouseEvent) => {
      mouseX = (event.clientX / window.innerWidth - 0.5) * 0.45;
    };
    window.addEventListener('mousemove', onMove);
    let frame = 0;
    const render = () => {
      group.rotation.y += (mouseX - group.rotation.y) * 0.025;
      cards.forEach((card, index) => {
        card.position.y += Math.sin(Date.now() * 0.0007 + index) * 0.001;
      });
      renderer.render(scene, camera);
      frame = requestAnimationFrame(render);
    };
    render();
    const resize = () => {
      camera.aspect = mount.clientWidth / mount.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(mount.clientWidth, mount.clientHeight);
    };
    window.addEventListener('resize', resize);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener('resize', resize);
      window.removeEventListener('mousemove', onMove);
      renderer.dispose();
      mount.removeChild(renderer.domElement);
    };
  }, []);
  return (
    <div
      ref={mountRef}
      className="absolute inset-0 opacity-80"
      aria-hidden="true" />);


}