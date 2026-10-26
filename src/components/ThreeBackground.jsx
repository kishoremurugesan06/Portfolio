import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

export default function ThreeBackground() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReduced) return;

    const isMobile = window.innerWidth < 900;
    let renderer;
    try {
      renderer = new THREE.WebGLRenderer({
        canvas,
        antialias: !isMobile,
        alpha: true,
        powerPreference: 'high-performance'
      });
    } catch (e) {
      console.warn('WebGL not supported:', e);
      return;
    }

    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, isMobile ? 1.5 : 2));
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setClearColor(0xffffff, 0);

    const scene = new THREE.Scene();
    scene.fog = new THREE.FogExp2(0xf6f6f8, isMobile ? 0.045 : 0.032);

    const camera = new THREE.PerspectiveCamera(58, window.innerWidth / window.innerHeight, 0.1, 240);
    camera.position.set(0, 0.6, 10);

    // Texture helpers
    function makeSymbolTex(symbol, color) {
      const c = document.createElement('canvas');
      c.width = c.height = 256;
      const ctx = c.getContext('2d');
      ctx.clearRect(0, 0, 256, 256);
      ctx.font = '900 190px "Orbitron", Arial, sans-serif';
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.fillStyle = color;
      ctx.shadowColor = color;
      ctx.shadowBlur = 24;
      ctx.fillText(symbol, 128, 138);
      const tex = new THREE.CanvasTexture(c);
      tex.needsUpdate = true;
      return tex;
    }

    function makeBinaryTex() {
      const c = document.createElement('canvas');
      c.width = c.height = 64;
      const ctx = c.getContext('2d');
      ctx.clearRect(0, 0, 64, 64);
      ctx.font = 'bold 48px "JetBrains Mono", monospace';
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      const isOne = Math.random() > 0.5;
      const isRed = Math.random() > 0.62;
      ctx.fillStyle = isRed ? 'rgba(224,16,32,0.92)' : 'rgba(10,10,20,0.65)';
      ctx.shadowColor = isRed ? '#e01020' : '#000000';
      ctx.shadowBlur = 8;
      ctx.fillText(isOne ? '1' : '0', 32, 34);
      const tex = new THREE.CanvasTexture(c);
      tex.needsUpdate = true;
      return tex;
    }

    // Binary Rain
    const binaryRain = [];
    const rainGroup = new THREE.Group();
    const RAIN_COUNT = isMobile ? 40 : 90;
    const FALL_AREA = { x: 60, y: 60, zMin: -50, zMax: 8 };

    for (let ri = 0; ri < RAIN_COUNT; ri++) {
      const tex = makeBinaryTex();
      const mat = new THREE.SpriteMaterial({
        map: tex,
        transparent: true,
        depthWrite: false,
        opacity: 0.3 + Math.random() * 0.45
      });
      const sprite = new THREE.Sprite(mat);
      const scale = 0.35 + Math.random() * 0.5;
      sprite.scale.set(scale, scale, 1);
      sprite.position.set(
        (Math.random() - 0.5) * FALL_AREA.x,
        (Math.random() - 0.5) * FALL_AREA.y,
        FALL_AREA.zMin + Math.random() * (FALL_AREA.zMax - FALL_AREA.zMin)
      );
      rainGroup.add(sprite);
      binaryRain.push({
        sprite,
        speed: 0.6 + Math.random() * 1.8
      });
    }
    scene.add(rainGroup);

    // Symbols
    const symbolGroup = new THREE.Group();
    const symbols = ['{', '}', '<', '>', '(', ')', '[', ']', '/', ';', '=', '+', '&&', '||'];
    const symbolSprites = [];

    function symbolColor() {
      const r = Math.random();
      if (r > 0.82) return '#e01020';
      if (r > 0.55) return '#8b0000';
      return '#2a2a34';
    }

    const SYM_COUNT = isMobile ? 10 : 22;
    for (let si = 0; si < SYM_COUNT; si++) {
      const sym = symbols[Math.floor(Math.random() * symbols.length)];
      const symTex = makeSymbolTex(sym, symbolColor());
      const symMat = new THREE.SpriteMaterial({
        map: symTex,
        transparent: true,
        depthWrite: false,
        opacity: 0.25 + Math.random() * 0.35
      });
      const symSprite = new THREE.Sprite(symMat);
      const ss = 1.2 + Math.random() * 2.2;
      symSprite.scale.set(ss, ss, 1);
      symSprite.position.set(
        (Math.random() - 0.5) * 56,
        (Math.random() - 0.5) * 38,
        -Math.random() * 50 + 4
      );
      symbolGroup.add(symSprite);
      symbolSprites.push({
        sprite: symSprite,
        baseY: symSprite.position.y,
        phase: Math.random() * Math.PI * 2,
        amp: 0.4 + Math.random() * 0.8,
        speed: 0.4 + Math.random() * 0.8,
        rotSpeed: (Math.random() - 0.5) * 0.25
      });
    }
    scene.add(symbolGroup);

    // Grids
    const gridHelper = new THREE.GridHelper(160, 70, 0xe01020, 0x8a8a94);
    gridHelper.material.transparent = true;
    gridHelper.material.opacity = 0.08;
    gridHelper.position.y = -13;
    gridHelper.position.z = -22;
    scene.add(gridHelper);

    const grid2 = new THREE.GridHelper(160, 35, 0x8a8a94, 0x8a8a94);
    grid2.material.transparent = true;
    grid2.material.opacity = 0.04;
    grid2.position.y = 13;
    grid2.position.z = -28;
    scene.add(grid2);

    // Core Icosahedron
    const coreGroup = new THREE.Group();
    const coreWireframe = new THREE.LineSegments(
      new THREE.WireframeGeometry(new THREE.IcosahedronGeometry(2.5, 1)),
      new THREE.LineBasicMaterial({ color: 0xe01020, transparent: true, opacity: 0.35 })
    );
    coreGroup.add(coreWireframe);

    const innerGlow = new THREE.Mesh(
      new THREE.IcosahedronGeometry(2.0, 1),
      new THREE.MeshBasicMaterial({ color: 0xff1a2e, transparent: true, opacity: 0.07, wireframe: true })
    );
    coreGroup.add(innerGlow);

    const nodeDotsGeo = new THREE.BufferGeometry();
    const nodePositions = [];
    const nodeGeomSource = new THREE.IcosahedronGeometry(2.5, 1);
    const verts = nodeGeomSource.attributes.position.array;
    for (let v = 0; v < verts.length; v += 3) {
      nodePositions.push(verts[v], verts[v + 1], verts[v + 2]);
    }
    nodeDotsGeo.setAttribute('position', new THREE.Float32BufferAttribute(nodePositions, 3));
    const nodeDots = new THREE.Points(
      nodeDotsGeo,
      new THREE.PointsMaterial({
        color: 0xe01020,
        size: 0.1,
        transparent: true,
        opacity: 0.9,
        sizeAttenuation: true
      })
    );
    coreGroup.add(nodeDots);
    coreGroup.position.set(0, 0, -12);
    scene.add(coreGroup);

    // Connection Lines
    const connGroup = new THREE.Group();
    const CONN_COUNT = isMobile ? 16 : 36;
    for (let ci = 0; ci < CONN_COUNT; ci++) {
      const lineGeo = new THREE.BufferGeometry();
      const p1 = new THREE.Vector3(
        (Math.random() - 0.5) * 56,
        (Math.random() - 0.5) * 38,
        -Math.random() * 54
      );
      const p2 = new THREE.Vector3(
        p1.x + (Math.random() - 0.5) * 8,
        p1.y + (Math.random() - 0.5) * 8,
        p1.z + (Math.random() - 0.5) * 8
      );
      lineGeo.setFromPoints([p1, p2]);
      const lineMat = new THREE.LineBasicMaterial({
        color: Math.random() > 0.6 ? 0xe01020 : 0x8a8a94,
        transparent: true,
        opacity: 0.08 + Math.random() * 0.14
      });
      connGroup.add(new THREE.Line(lineGeo, lineMat));
    }
    scene.add(connGroup);

    // Lights
    scene.add(new THREE.AmbientLight(0xffffff, 1.15));
    const keyLight = new THREE.DirectionalLight(0xffffff, 1.4);
    keyLight.position.set(5, 8, 6);
    scene.add(keyLight);
    const redLight = new THREE.PointLight(0xff1a2e, 2.2, 45, 2);
    redLight.position.set(-6, 2, 5);
    scene.add(redLight);

    // Camera keyframes across scroll
    const CAM_KEYS = [
      { p: [0, 0.6, 10.0], l: [0, 0, 0] },         // top
      { p: [2.8, -0.6, 7.6], l: [0, -0.2, 0] },     // about
      { p: [-3.0, 1.0, 6.6], l: [0.2, 0.1, 0] },    // education
      { p: [0.8, -1.5, 8.0], l: [0, -0.4, 0] },     // skills
      { p: [3.0, 0.8, 5.8], l: [-0.2, 0.2, 0] },   // experience
      { p: [0, 0.0, 4.6], l: [0, 0, 0] },          // projects
      { p: [-2.6, -0.9, 7.0], l: [0.2, -0.2, 0] }, // certs
      { p: [0, 1.2, 11.0], l: [0, 0.3, 0] }        // contact
    ];

    let mouseX = 0;
    let mouseY = 0;
    const onMouseMove = (e) => {
      mouseX = (e.clientX / window.innerWidth - 0.5) * 2;
      mouseY = (e.clientY / window.innerHeight - 0.5) * 2;
    };
    window.addEventListener('mousemove', onMouseMove, { passive: true });

    let animationId;
    let clock = new THREE.Clock();

    const onResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };
    window.addEventListener('resize', onResize);

    canvas.classList.add('is-ready');

    const animate = () => {
      animationId = requestAnimationFrame(animate);
      const delta = clock.getDelta();
      const time = clock.getElapsedTime();

      // Scroll progress 0 to 1
      const maxScroll = Math.max(1, document.documentElement.scrollHeight - window.innerHeight);
      const scrollPct = Math.min(1, Math.max(0, window.scrollY / maxScroll));

      // Keyframe interpolation
      const keyIndex = scrollPct * (CAM_KEYS.length - 1);
      const i0 = Math.floor(keyIndex);
      const i1 = Math.min(CAM_KEYS.length - 1, i0 + 1);
      const f = keyIndex - i0;

      const k0 = CAM_KEYS[i0];
      const k1 = CAM_KEYS[i1];

      const targetX = k0.p[0] + (k1.p[0] - k0.p[0]) * f + mouseX * 0.3;
      const targetY = k0.p[1] + (k1.p[1] - k0.p[1]) * f - mouseY * 0.2;
      const targetZ = k0.p[2] + (k1.p[2] - k0.p[2]) * f;

      camera.position.x += (targetX - camera.position.x) * 0.05;
      camera.position.y += (targetY - camera.position.y) * 0.05;
      camera.position.z += (targetZ - camera.position.z) * 0.05;

      const lookTargetX = k0.l[0] + (k1.l[0] - k0.l[0]) * f;
      const lookTargetY = k0.l[1] + (k1.l[1] - k0.l[1]) * f;
      const lookTargetZ = k0.l[2] + (k1.l[2] - k0.l[2]) * f;
      camera.lookAt(lookTargetX, lookTargetY, lookTargetZ);

      // Rotate core icosahedron
      coreGroup.rotation.x += 0.004;
      coreGroup.rotation.y += 0.007;
      coreGroup.position.y = Math.sin(time * 0.8) * 0.3;

      // Animate binary rain
      for (let ri = 0; ri < binaryRain.length; ri++) {
        const item = binaryRain[ri];
        item.sprite.position.y -= item.speed * delta * 4.0;
        if (item.sprite.position.y < -FALL_AREA.y / 2) {
          item.sprite.position.y = FALL_AREA.y / 2;
          item.sprite.position.x = (Math.random() - 0.5) * FALL_AREA.x;
        }
      }

      // Animate symbols
      for (let si = 0; si < symbolSprites.length; si++) {
        const item = symbolSprites[si];
        item.sprite.position.y = item.baseY + Math.sin(time * item.speed + item.phase) * item.amp;
        item.sprite.material.rotation += item.rotSpeed * delta;
      }

      // Rotate connection lines subtly
      connGroup.rotation.y += 0.0008;

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('resize', onResize);
      renderer.dispose();
    };
  }, []);

  return (
    <canvas
      id="bg-canvas"
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0 opacity-0 transition-opacity duration-1000"
      aria-hidden="true"
    />
  );
}
