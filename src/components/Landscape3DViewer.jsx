import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { Box, Sun, Moon, RotateCcw, Sparkles, Check, Send, Eye, ShieldCheck } from 'lucide-react';
import { COMPANY_INFO } from '../data/nurseryData';

export default function Landscape3DViewer() {
  const mountRef = useRef(null);
  const [activePreset, setActivePreset] = useState('villa');
  const [isNightMode, setIsNightMode] = useState(false);
  const [selectedElement, setSelectedElement] = useState(null);
  const [isRotating, setIsRotating] = useState(true);

  // Scene references
  const sceneRef = useRef(null);
  const cameraRef = useRef(null);
  const rendererRef = useRef(null);
  const lightsGroupRef = useRef(null);
  const gardenGroupRef = useRef(null);
  const fountainParticlesRef = useRef([]);

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    const width = container.clientWidth;
    const height = container.clientHeight || 500;

    // 1. Scene Setup
    const scene = new THREE.Scene();
    sceneRef.current = scene;
    scene.background = new THREE.Color(isNightMode ? 0x064E3B : 0xF8FAFC);
    scene.fog = new THREE.FogExp2(isNightMode ? 0x064E3B : 0xF8FAFC, 0.02);

    // 2. Camera Setup
    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 1000);
    camera.position.set(18, 12, 22);
    camera.lookAt(0, 2, 0);
    cameraRef.current = camera;

    // 3. Renderer Setup
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    rendererRef.current = renderer;

    // Clear previous canvas
    while (container.firstChild) {
      container.removeChild(container.firstChild);
    }
    container.appendChild(renderer.domElement);

    // 4. Lighting Setup
    const lightsGroup = new THREE.Group();
    lightsGroupRef.current = lightsGroup;
    scene.add(lightsGroup);

    const ambientLight = new THREE.AmbientLight(
      isNightMode ? 0x1A2E26 : 0xFFFFFF,
      isNightMode ? 0.4 : 0.85
    );
    lightsGroup.add(ambientLight);

    const sunLight = new THREE.DirectionalLight(
      isNightMode ? 0x4A6B82 : 0xFFF5E0,
      isNightMode ? 0.5 : 1.2
    );
    sunLight.position.set(20, 30, 15);
    sunLight.castShadow = true;
    sunLight.shadow.mapSize.width = 1024;
    sunLight.shadow.mapSize.height = 1024;
    sunLight.shadow.bias = -0.0005;
    lightsGroup.add(sunLight);

    // Garden Lights (for night mode)
    const addGardenSpot = (x, y, z, color = 0xD4AF37) => {
      const spot = new THREE.PointLight(color, isNightMode ? 2.5 : 0.2, 10);
      spot.position.set(x, y, z);
      lightsGroup.add(spot);
    };

    addGardenSpot(-4, 1.5, -4);
    addGardenSpot(4, 1.5, -4);
    addGardenSpot(0, 2, 0, 0x00E5FF); // Blue fountain glow

    // 5. Build Procedural 3D Garden Group
    const gardenGroup = new THREE.Group();
    gardenGroupRef.current = gardenGroup;
    scene.add(gardenGroup);

    buildGardenScene(gardenGroup, activePreset, isNightMode);

    // Mouse Interaction / Orbit controls variables
    let isDragging = false;
    let previousMousePosition = { x: 0, y: 0 };
    let spherical = { radius: 28, theta: Math.PI / 4, phi: Math.PI / 3 };

    const updateCameraPosition = () => {
      camera.position.x = spherical.radius * Math.sin(spherical.phi) * Math.cos(spherical.theta);
      camera.position.y = spherical.radius * Math.cos(spherical.phi);
      camera.position.z = spherical.radius * Math.sin(spherical.phi) * Math.sin(spherical.theta);
      camera.lookAt(0, 2, 0);
    };

    const handleMouseDown = (e) => {
      isDragging = true;
      previousMousePosition = { x: e.clientX, y: e.clientY };
    };

    const handleMouseMove = (e) => {
      if (!isDragging) return;
      const deltaX = e.clientX - previousMousePosition.x;
      const deltaY = e.clientY - previousMousePosition.y;

      spherical.theta -= deltaX * 0.008;
      spherical.phi = Math.max(0.1, Math.min(Math.PI / 2 - 0.05, spherical.phi - deltaY * 0.008));

      previousMousePosition = { x: e.clientX, y: e.clientY };
      updateCameraPosition();
    };

    const handleMouseUp = () => {
      isDragging = false;
    };

    const handleWheel = (e) => {
      spherical.radius = Math.max(12, Math.min(45, spherical.radius + e.deltaY * 0.03));
      updateCameraPosition();
    };

    const domElement = renderer.domElement;
    domElement.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseup', handleMouseUp);
    domElement.addEventListener('wheel', handleWheel, { passive: true });

    // Touch Support
    const handleTouchStart = (e) => {
      if (e.touches.length === 1) {
        isDragging = true;
        previousMousePosition = { x: e.touches[0].clientX, y: e.touches[0].clientY };
      }
    };
    const handleTouchMove = (e) => {
      if (!isDragging || e.touches.length !== 1) return;
      const deltaX = e.touches[0].clientX - previousMousePosition.x;
      const deltaY = e.touches[0].clientY - previousMousePosition.y;
      spherical.theta -= deltaX * 0.01;
      spherical.phi = Math.max(0.1, Math.min(Math.PI / 2 - 0.05, spherical.phi - deltaY * 0.01));
      previousMousePosition = { x: e.touches[0].clientX, y: e.touches[0].clientY };
      updateCameraPosition();
    };

    domElement.addEventListener('touchstart', handleTouchStart);
    domElement.addEventListener('touchmove', handleTouchMove);
    domElement.addEventListener('touchend', handleMouseUp);

    // 6. Animation Loop
    let animationFrameId;
    const clock = new THREE.Clock();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      const elapsedTime = clock.getElapsedTime();

      // Auto rotation when idle
      if (isRotating && !isDragging) {
        spherical.theta += 0.003;
        updateCameraPosition();
      }

      // Animate Fountain Water Particles
      fountainParticlesRef.current.forEach((particle) => {
        particle.position.y += particle.userData.velocityY;
        particle.userData.velocityY -= 0.008; // gravity
        particle.position.x += particle.userData.velocityX;
        particle.position.z += particle.userData.velocityZ;

        if (particle.position.y < 0.5) {
          particle.position.set(0, 1.8, 0);
          particle.userData.velocityY = 0.12 + Math.random() * 0.05;
          particle.userData.velocityX = (Math.random() - 0.5) * 0.04;
          particle.userData.velocityZ = (Math.random() - 0.5) * 0.04;
        }
      });

      renderer.render(scene, camera);
    };

    animate();

    // Resize Handler
    const handleResize = () => {
      if (!container) return;
      const w = container.clientWidth;
      const h = container.clientHeight || 500;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
      domElement.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
      domElement.removeEventListener('wheel', handleWheel);
      domElement.removeEventListener('touchstart', handleTouchStart);
      domElement.removeEventListener('touchmove', handleTouchMove);
      domElement.removeEventListener('touchend', handleMouseUp);
      if (renderer.domElement && renderer.domElement.parentNode) {
        renderer.domElement.parentNode.removeChild(renderer.domElement);
      }
      renderer.dispose();
    };
  }, [activePreset, isNightMode, isRotating]);

  // Helper Function to Construct 3D Garden Meshes
  function buildGardenScene(parent, preset, night) {
    // Ground Turf Base
    const groundGeo = new THREE.CylinderGeometry(14, 15, 0.6, 64);
    const groundMat = new THREE.MeshStandardMaterial({
      color: night ? 0x0F2E1E : 0x2A633E,
      roughness: 0.8,
      metalness: 0.1,
    });
    const ground = new THREE.Mesh(groundGeo, groundMat);
    ground.position.y = -0.3;
    ground.receiveShadow = true;
    parent.add(ground);

    // Stone Border Ring
    const ringGeo = new THREE.RingGeometry(13.6, 14.2, 64);
    const ringMat = new THREE.MeshStandardMaterial({ color: 0xD9D3C7, side: THREE.DoubleSide });
    const ring = new THREE.Mesh(ringGeo, ringMat);
    ring.rotation.x = Math.PI / 2;
    ring.position.y = 0.02;
    parent.add(ring);

    // Stone Walkway Path
    const pathGeo = new THREE.PlaneGeometry(3.5, 20);
    const pathMat = new THREE.MeshStandardMaterial({ color: 0xCCC5B8, roughness: 0.9 });
    const path = new THREE.Mesh(pathGeo, pathMat);
    path.rotation.x = -Math.PI / 2;
    path.position.set(0, 0.01, 3);
    path.receiveShadow = true;
    parent.add(path);

    // Central Fountain Architecture
    const fountainBaseGeo = new THREE.CylinderGeometry(2.5, 2.8, 0.8, 32);
    const fountainBaseMat = new THREE.MeshStandardMaterial({ color: 0xE6E1D8, roughness: 0.3 });
    const fountainBase = new THREE.Mesh(fountainBaseGeo, fountainBaseMat);
    fountainBase.position.set(0, 0.4, 0);
    fountainBase.castShadow = true;
    fountainBase.receiveShadow = true;
    parent.add(fountainBase);

    const fountainPoolGeo = new THREE.CylinderGeometry(2.2, 2.2, 0.2, 32);
    const fountainPoolMat = new THREE.MeshStandardMaterial({
      color: night ? 0x00A8FF : 0x1E88E5,
      roughness: 0.1,
      metalness: 0.9,
      transparent: true,
      opacity: 0.85
    });
    const fountainPool = new THREE.Mesh(fountainPoolGeo, fountainPoolMat);
    fountainPool.position.set(0, 0.8, 0);
    parent.add(fountainPool);

    const fountainTierGeo = new THREE.CylinderGeometry(0.8, 1.1, 1.2, 16);
    const fountainTier = new THREE.Mesh(fountainTierGeo, fountainBaseMat);
    fountainTier.position.set(0, 1.3, 0);
    fountainTier.castShadow = true;
    parent.add(fountainTier);

    // Create Water Particles
    fountainParticlesRef.current = [];
    const particleMat = new THREE.MeshBasicMaterial({ color: 0xE0F7FA });
    for (let i = 0; i < 40; i++) {
      const particleGeo = new THREE.SphereGeometry(0.08, 8, 8);
      const p = new THREE.Mesh(particleGeo, particleMat);
      p.position.set(0, 1.8, 0);
      p.userData = {
        velocityY: 0.1 + Math.random() * 0.06,
        velocityX: (Math.random() - 0.5) * 0.05,
        velocityZ: (Math.random() - 0.5) * 0.05
      };
      parent.add(p);
      fountainParticlesRef.current.push(p);
    }

    // Helper: Add Date Palm Trees
    const addPalmTree = (x, z, scale = 1) => {
      const palmGroup = new THREE.Group();
      palmGroup.position.set(x, 0, z);
      palmGroup.scale.set(scale, scale, scale);

      // Trunk
      const trunkGeo = new THREE.CylinderGeometry(0.25, 0.45, 6, 12);
      const trunkMat = new THREE.MeshStandardMaterial({ color: 0x6E5037, roughness: 0.9 });
      const trunk = new THREE.Mesh(trunkGeo, trunkMat);
      trunk.position.y = 3;
      trunk.castShadow = true;
      palmGroup.add(trunk);

      // Leaves Canopy
      const leafMat = new THREE.MeshStandardMaterial({
        color: night ? 0x0D3D25 : 0x1E5936,
        roughness: 0.6,
        side: THREE.DoubleSide
      });

      for (let i = 0; i < 12; i++) {
        const angle = (i / 12) * Math.PI * 2;
        const leafGeo = new THREE.ConeGeometry(1.2, 5, 4);
        const leaf = new THREE.Mesh(leafGeo, leafMat);
        leaf.position.set(Math.cos(angle) * 1.5, 6.2, Math.sin(angle) * 1.5);
        leaf.rotation.x = Math.PI / 3;
        leaf.rotation.y = angle;
        leaf.castShadow = true;
        palmGroup.add(leaf);
      }

      parent.add(palmGroup);
    };

    // Helper: Add Outdoor Pergola / Gazebo
    const addPergola = (x, z) => {
      const pergola = new THREE.Group();
      pergola.position.set(x, 0, z);

      const woodMat = new THREE.MeshStandardMaterial({ color: 0x4A2E1B, roughness: 0.7 });

      // Pillars
      const pillarGeo = new THREE.BoxGeometry(0.3, 4.5, 0.3);
      [[-2.5, -2.5], [2.5, -2.5], [-2.5, 2.5], [2.5, 2.5]].forEach(([px, pz]) => {
        const pillar = new THREE.Mesh(pillarGeo, woodMat);
        pillar.position.set(px, 2.25, pz);
        pillar.castShadow = true;
        pergola.add(pillar);
      });

      // Roof Beams
      const beamGeo = new THREE.BoxGeometry(5.4, 0.2, 0.3);
      for (let i = -2; i <= 2; i += 1) {
        const beam = new THREE.Mesh(beamGeo, woodMat);
        beam.position.set(0, 4.5, i * 1.2);
        beam.castShadow = true;
        pergola.add(beam);
      }

      parent.add(pergola);
    };

    // Helper: Add Decorative Shrubs / Topiary
    const addShrub = (x, z, radius = 0.8) => {
      const shrubGeo = new THREE.DodecahedronGeometry(radius, 2);
      const shrubMat = new THREE.MeshStandardMaterial({
        color: night ? 0x144B2C : 0x2E8B57,
        roughness: 0.7
      });
      const shrub = new THREE.Mesh(shrubGeo, shrubMat);
      shrub.position.set(x, radius * 0.8, z);
      shrub.castShadow = true;
      parent.add(shrub);
    };

    // Add Garden Bollard Lighting
    const addBollardLight = (x, z) => {
      const postGeo = new THREE.CylinderGeometry(0.08, 0.1, 1.2, 12);
      const postMat = new THREE.MeshStandardMaterial({ color: 0x222222 });
      const post = new THREE.Mesh(postGeo, postMat);
      post.position.set(x, 0.6, z);

      const capGeo = new THREE.SphereGeometry(0.15, 12, 12);
      const capMat = new THREE.MeshBasicMaterial({ color: 0xFFD54F });
      const cap = new THREE.Mesh(capGeo, capMat);
      cap.position.set(x, 1.25, z);

      parent.add(post);
      parent.add(cap);
    };

    // Build specific elements based on chosen preset
    if (preset === 'villa') {
      // 4 Palms around corners
      addPalmTree(-6, -6, 1.1);
      addPalmTree(6, -6, 1.1);
      addPalmTree(-6, 6, 1.0);
      addPalmTree(6, 6, 1.0);

      // Topiary shrubs around fountain
      addShrub(-3.5, 0, 0.7);
      addShrub(3.5, 0, 0.7);
      addShrub(0, -3.5, 0.7);

      // Bollard lights along path
      addBollardLight(-2, 4);
      addBollardLight(2, 4);
      addBollardLight(-2, 8);
      addBollardLight(2, 8);

    } else if (preset === 'farmhouse') {
      // Pergola on left
      addPergola(-6, 0);

      // Date Palm Avenue
      addPalmTree(6, -7, 1.3);
      addPalmTree(6, -2, 1.2);
      addPalmTree(6, 3, 1.3);
      addPalmTree(6, 8, 1.2);

      // Shrubs around pool
      addShrub(-7, 5, 0.9);
      addShrub(-5, 6, 0.8);
      addShrub(0, -6, 1.0);

    } else if (preset === 'zen') {
      // Bonsai centerpiece feel
      addPalmTree(0, -7, 1.4);
      addPalmTree(-6, 4, 1.1);

      // Multiple topiary rocks & bonsai spheres
      addShrub(-3, -2, 1.1);
      addShrub(3, -2, 0.9);
      addShrub(-4, 3, 0.7);
      addShrub(4, 3, 0.8);
      addShrub(0, 4, 0.6);

      addPergola(5, -4);
    }
  }

  const handleWhatsAppInquiry = () => {
    const text = `Hello Mian Nursery! I tried your Interactive 3D Garden Visualizer online and I am interested in the '${activePreset.toUpperCase()} GARDEN DESIGN' for my property. Please share details & 3D consultation options.`;
    window.open(`https://wa.me/${COMPANY_INFO.whatsapp}?text=${encodeURIComponent(text)}`, '_blank');
  };

  return (
    <section id="3d-visualizer" className="py-20 md:py-28 px-4 md:px-8 bg-slate-50 relative overflow-hidden text-slate-900">
      {/* Decorative Glow background */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-emerald-200/30 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header Title */}
        <div className="text-center max-w-3xl mx-auto mb-10 md:mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-100 border border-emerald-300 text-emerald-800 text-xs font-semibold uppercase tracking-widest mb-4">
            <Sparkles className="w-3.5 h-3.5 text-emerald-700" /> Live 3D Architectural Studio
          </div>
          <p className="text-slate-600 text-base md:text-lg font-light leading-relaxed">
            Drag to rotate 360°, zoom, and switch style presets to see how our landscape architects design luxury estates in Pakistan before execution.
          </p>
        </div>

        {/* 3D Visualizer Container Box */}
        <div className="relative rounded-2xl overflow-hidden border border-slate-200 shadow-xl bg-white">
          
          {/* Top Control Bar */}
          <div className="absolute top-4 left-4 right-4 z-20 flex flex-wrap items-center justify-between gap-3 p-3 rounded-xl bg-white/90 backdrop-blur-md border border-slate-200 shadow-sm">
            {/* Presets Switcher */}
            <div className="flex items-center gap-2 overflow-x-auto py-1 no-scrollbar">
              <span className="text-[11px] uppercase tracking-wider text-emerald-800 font-bold mr-1 hidden sm:inline">
                Preset:
              </span>
              {[
                { id: 'villa', name: '1 Kanal Villa' },
                { id: 'farmhouse', name: 'Farmhouse Estate' },
                { id: 'zen', name: 'Zen Courtyard' }
              ].map((preset) => (
                <button
                  key={preset.id}
                  onClick={() => setActivePreset(preset.id)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all whitespace-nowrap ${
                    activePreset === preset.id
                      ? 'bg-emerald-700 text-white font-bold shadow-md shadow-emerald-700/20'
                      : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                  }`}
                >
                  {preset.name}
                </button>
              ))}
            </div>

            {/* Controls (Day/Night, Rotation, Reset) */}
            <div className="flex items-center gap-2">
              <button
                onClick={() => setIsNightMode(!isNightMode)}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-100 border border-slate-200 text-xs font-semibold text-slate-800 hover:bg-slate-200 transition-colors"
                title="Toggle Day/Night Garden Lighting"
              >
                {isNightMode ? (
                  <>
                    <Moon className="w-3.5 h-3.5 text-emerald-700" /> <span className="hidden sm:inline">Night Mode</span>
                  </>
                ) : (
                  <>
                    <Sun className="w-3.5 h-3.5 text-amber-500" /> <span className="hidden sm:inline">Daylight</span>
                  </>
                )}
              </button>

              <button
                onClick={() => setIsRotating(!isRotating)}
                className={`p-2 rounded-lg border text-xs transition-colors ${
                  isRotating ? 'bg-emerald-100 border-emerald-300 text-emerald-800 font-bold' : 'bg-slate-100 border-slate-200 text-slate-700'
                }`}
                title="Toggle Auto 360° Rotation"
              >
                <RotateCcw className={`w-3.5 h-3.5 ${isRotating ? 'animate-spin-slow text-emerald-700' : ''}`} />
              </button>
            </div>
          </div>

          {/* Canvas Mount Area */}
          <div
            ref={mountRef}
            className="w-full h-[450px] sm:h-[550px] md:h-[620px] cursor-grab active:cursor-grabbing relative"
          />

          {/* Drag & Rotate Instruction Overlay */}
          <div className="absolute bottom-4 left-4 z-20 pointer-events-none hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-lg bg-slate-900/80 backdrop-blur-sm text-[11px] text-white border border-slate-700">
            <Eye className="w-3.5 h-3.5 text-emerald-400" /> Click & drag to rotate 360° | Scroll to Zoom
          </div>

          {/* Bottom Action Ribbon */}
          <div className="p-4 sm:p-6 bg-slate-900 text-white border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-emerald-600 border border-emerald-500 flex items-center justify-center text-white shrink-0 shadow-md">
                <Box className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-serif text-lg font-bold text-white">
                  {activePreset === 'villa' && '1 Kanal Executive Villa Garden'}
                  {activePreset === 'farmhouse' && 'Multi-Kanal Farmhouse Estate Master Plan'}
                  {activePreset === 'zen' && 'Modern Minimalist Zen Patio & Water Feature'}
                </h4>
                <p className="text-xs text-slate-300">
                  Customized 3D architectural blueprint, soil testing & specimen delivery available nationwide.
                </p>
              </div>
            </div>

            <button
              onClick={handleWhatsAppInquiry}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-emerald-600 text-white font-bold px-6 py-3 rounded-xl text-xs uppercase tracking-widest shadow-lg hover:bg-emerald-700 hover:scale-[1.02] transition-all shrink-0"
            >
              <Send className="w-4 h-4" /> Request Custom 3D Plan
            </button>
          </div>
        </div>

        {/* Feature Badges under 3D canvas */}
        <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { title: "3D CAD Precision", desc: "True-to-scale plot blueprints" },
            { title: "Day & Night Simulation", desc: "Test lighting setups" },
            { title: "Acclimatized Plants", desc: "Specimens suited to Pakistan" },
            { title: "Turnkey Execution", desc: "From design to final planting" }
          ].map((item, idx) => (
            <div key={idx} className="p-4 rounded-xl bg-white border border-slate-200 shadow-sm flex items-center gap-3">
              <ShieldCheck className="w-5 h-5 text-emerald-600 shrink-0" />
              <div>
                <p className="text-xs font-bold text-slate-900">{item.title}</p>
                <p className="text-[11px] text-slate-500">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
