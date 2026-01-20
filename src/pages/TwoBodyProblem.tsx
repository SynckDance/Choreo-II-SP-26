import { useState, useRef, useEffect, useCallback } from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import { FBXLoader } from 'three/examples/jsm/loaders/FBXLoader.js';

// Movement phrase definitions with distinct characteristics
const PHRASES = {
  A: { 
    name: 'Phrase A: Tension', 
    desc: 'Contracted, suspended, caught',
    speed: 'Slow',
    color: '#E85D04',
    animSpeed: 0.5,
  },
  B: { 
    name: 'Phrase B: Release', 
    desc: 'Expansive, falling, surrendering',
    speed: 'Medium',
    color: '#10B981',
    animSpeed: 1.0,
  },
  C: { 
    name: 'Phrase C: Resolution', 
    desc: 'Grounded, still, between',
    speed: 'Variable',
    color: '#6366F1',
    animSpeed: 0.75,
  },
};

type PhraseKey = keyof typeof PHRASES;

// Audio configuration for binaural experience
const AUDIO_MODES = {
  drone: { name: 'Drone', desc: 'Sustained tone shifting between worlds', baseFreq: 110 },
  pulse: { name: 'Pulse', desc: 'Rhythmic heartbeat, two perspectives', baseFreq: 80 },
  breath: { name: 'Breath', desc: 'Inhale left, exhale right', baseFreq: 150 },
  tension: { name: 'Tension', desc: 'Dissonance resolving through space', baseFreq: 220 },
};

type AudioMode = keyof typeof AUDIO_MODES;

export default function TwoBodyProblem() {
  const [activeSection, setActiveSection] = useState<'overview' | 'audio' | 'visual' | 'process' | 'reflection'>('overview');
  const [audioPan, setAudioPan] = useState(0);
  const [audioMode, setAudioMode] = useState<AudioMode>('drone');
  const [isPlaying, setIsPlaying] = useState(false);
  const [audioIntensity, setAudioIntensity] = useState(0.5);
  const [currentPhrase, setCurrentPhrase] = useState<PhraseKey>('A');
  const [visualMode, setVisualMode] = useState<'wireframe' | 'solid' | 'points'>('wireframe');
  const [isAnimating, setIsAnimating] = useState(true);
  const [loadingStatus, setLoadingStatus] = useState<'loading' | 'loaded' | 'error'>('loading');
  const [loadingProgress, setLoadingProgress] = useState(0);
  
  // Audio refs
  const audioContextRef = useRef<AudioContext | null>(null);
  const oscillatorsRef = useRef<OscillatorNode[]>([]);
  const gainsRef = useRef<GainNode[]>([]);
  const pannersRef = useRef<StereoPannerNode[]>([]);
  const lfoRef = useRef<OscillatorNode | null>(null);
  
  // Three.js refs
  const containerRef = useRef<HTMLDivElement>(null);
  const sceneRef = useRef<THREE.Scene | null>(null);
  const cameraRef = useRef<THREE.PerspectiveCamera | null>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
  const controlsRef = useRef<OrbitControls | null>(null);
  const mixerRef = useRef<THREE.AnimationMixer | null>(null);
  const clockRef = useRef<THREE.Clock>(new THREE.Clock());
  const modelRef = useRef<THREE.Group | null>(null);
  const animationFrameRef = useRef<number | null>(null);

  // Create fallback skeletal figure if FBX fails to load
  const createFallbackFigure = useCallback((scene: THREE.Scene, phraseColor: string) => {
    const material = new THREE.MeshBasicMaterial({ color: phraseColor, wireframe: true });
    
    const group = new THREE.Group();
    
    // Head
    const head = new THREE.Mesh(new THREE.SphereGeometry(10, 16, 16), material);
    head.position.y = 80;
    group.add(head);
    
    // Torso
    const torso = new THREE.Mesh(new THREE.CylinderGeometry(8, 12, 40, 8), material);
    torso.position.y = 50;
    group.add(torso);
    
    // Arms
    const armGeo = new THREE.CylinderGeometry(3, 3, 35, 8);
    const leftArm = new THREE.Mesh(armGeo, material);
    leftArm.position.set(-20, 55, 0);
    leftArm.rotation.z = Math.PI / 4;
    group.add(leftArm);
    
    const rightArm = new THREE.Mesh(armGeo, material);
    rightArm.position.set(20, 55, 0);
    rightArm.rotation.z = -Math.PI / 4;
    group.add(rightArm);
    
    // Legs
    const legGeo = new THREE.CylinderGeometry(4, 3, 45, 8);
    const leftLeg = new THREE.Mesh(legGeo, material);
    leftLeg.position.set(-8, 5, 0);
    group.add(leftLeg);
    
    const rightLeg = new THREE.Mesh(legGeo, material);
    rightLeg.position.set(8, 5, 0);
    group.add(rightLeg);
    
    scene.add(group);
    modelRef.current = group;
    setLoadingStatus('loaded');
  }, []);

  // Update mesh material based on visual mode
  const updateMeshMaterial = useCallback((mesh: THREE.Mesh, mode: string, phraseColor: string) => {
    const color = new THREE.Color(phraseColor);
    
    if (mode === 'wireframe') {
      mesh.material = new THREE.MeshBasicMaterial({ 
        color: color, 
        wireframe: true,
        transparent: true,
        opacity: 0.9
      });
    } else if (mode === 'points') {
      mesh.material = new THREE.PointsMaterial({ color: color, size: 2 });
    } else {
      mesh.material = new THREE.MeshPhongMaterial({ 
        color: color,
        emissive: color,
        emissiveIntensity: 0.1,
        shininess: 30
      });
    }
  }, []);

  // Initialize Three.js scene
  const initThreeJS = useCallback(() => {
    if (!containerRef.current) return;

    const phraseColor = PHRASES[currentPhrase].color;

    // Scene
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0x0a0a0a);
    sceneRef.current = scene;

    // Grid
    const gridHelper = new THREE.GridHelper(200, 20, 0xE85D04, 0x333333);
    gridHelper.position.y = -50;
    scene.add(gridHelper);

    // Lights
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.4);
    scene.add(ambientLight);

    const keyLight = new THREE.DirectionalLight(0xffffff, 1);
    keyLight.position.set(100, 100, 100);
    scene.add(keyLight);

    const fillLight = new THREE.DirectionalLight(0xE85D04, 0.3);
    fillLight.position.set(-100, 50, -100);
    scene.add(fillLight);

    const backLight = new THREE.DirectionalLight(0x6366F1, 0.2);
    backLight.position.set(0, 100, -100);
    scene.add(backLight);

    // Camera
    const camera = new THREE.PerspectiveCamera(
      45,
      containerRef.current.clientWidth / containerRef.current.clientHeight,
      1,
      2000
    );
    camera.position.set(0, 100, 300);
    cameraRef.current = camera;

    // Renderer
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(containerRef.current.clientWidth, containerRef.current.clientHeight);
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.shadowMap.enabled = true;
    containerRef.current.appendChild(renderer.domElement);
    rendererRef.current = renderer;

    // Controls
    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.dampingFactor = 0.05;
    controls.minDistance = 100;
    controls.maxDistance = 500;
    controls.maxPolarAngle = Math.PI / 1.5;
    controls.target.set(0, 50, 0);
    controlsRef.current = controls;

    // Load FBX
    const loader = new FBXLoader();
    loader.load(
      '/adzogbo-mocap.fbx',
      (fbx) => {
        fbx.scale.setScalar(1);
        fbx.position.set(0, 0, 0);
        
        fbx.traverse((child) => {
          if (child instanceof THREE.Mesh) {
            child.castShadow = true;
            child.receiveShadow = true;
            updateMeshMaterial(child, visualMode, phraseColor);
          }
        });

        scene.add(fbx);
        modelRef.current = fbx;

        if (fbx.animations.length > 0) {
          const mixer = new THREE.AnimationMixer(fbx);
          const action = mixer.clipAction(fbx.animations[0]);
          action.play();
          mixerRef.current = mixer;
        }

        setLoadingStatus('loaded');
      },
      (progress) => {
        if (progress.total > 0) {
          const percent = (progress.loaded / progress.total) * 100;
          setLoadingProgress(Math.round(percent));
        }
      },
      (error) => {
        console.error('FBX load error:', error);
        setLoadingStatus('error');
        createFallbackFigure(scene, phraseColor);
      }
    );

    // Resize handler
    const handleResize = () => {
      if (!containerRef.current || !camera || !renderer) return;
      camera.aspect = containerRef.current.clientWidth / containerRef.current.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(containerRef.current.clientWidth, containerRef.current.clientHeight);
    };
    window.addEventListener('resize', handleResize);

    // Animation loop
    const animate = () => {
      animationFrameRef.current = requestAnimationFrame(animate);
      
      const delta = clockRef.current.getDelta();
      
      if (mixerRef.current && isAnimating) {
        mixerRef.current.timeScale = PHRASES[currentPhrase].animSpeed;
        mixerRef.current.update(delta);
      }
      
      if (controlsRef.current) {
        controlsRef.current.update();
      }
      
      if (rendererRef.current && sceneRef.current && cameraRef.current) {
        rendererRef.current.render(sceneRef.current, cameraRef.current);
      }
    };
    animate();

    return () => {
      window.removeEventListener('resize', handleResize);
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
      if (rendererRef.current && containerRef.current) {
        containerRef.current.removeChild(rendererRef.current.domElement);
        rendererRef.current.dispose();
      }
    };
  }, [currentPhrase, isAnimating, visualMode, createFallbackFigure, updateMeshMaterial]);

  // Update materials when visual mode or phrase changes
  useEffect(() => {
    if (modelRef.current) {
      const phraseColor = PHRASES[currentPhrase].color;
      modelRef.current.traverse((child) => {
        if (child instanceof THREE.Mesh) {
          updateMeshMaterial(child, visualMode, phraseColor);
        }
      });
    }
  }, [visualMode, currentPhrase, updateMeshMaterial]);

  // Initialize Three.js when visual section is active
  useEffect(() => {
    if (activeSection === 'visual') {
      const cleanup = initThreeJS();
      return cleanup;
    }
  }, [activeSection, initThreeJS]);

  // Reset camera position
  const resetCamera = () => {
    if (cameraRef.current && controlsRef.current) {
      cameraRef.current.position.set(0, 100, 300);
      controlsRef.current.target.set(0, 50, 0);
      controlsRef.current.update();
    }
  };

  // Camera presets
  const setCameraPosition = (position: 'front' | 'back' | 'side' | 'top') => {
    if (!cameraRef.current || !controlsRef.current) return;
    
    const positions = {
      front: { x: 0, y: 100, z: 300 },
      back: { x: 0, y: 100, z: -300 },
      side: { x: 300, y: 100, z: 0 },
      top: { x: 0, y: 400, z: 50 },
    };
    
    const pos = positions[position];
    cameraRef.current.position.set(pos.x, pos.y, pos.z);
    controlsRef.current.target.set(0, 50, 0);
    controlsRef.current.update();
  };

  // Enhanced binaural audio
  const startAudio = () => {
    if (audioContextRef.current) {
      stopAudio();
    }
    
    const ctx = new AudioContext();
    audioContextRef.current = ctx;
    const mode = AUDIO_MODES[audioMode];
    const baseFreq = mode.baseFreq;
    
    const masterGain = ctx.createGain();
    masterGain.gain.value = audioIntensity * 0.3;
    masterGain.connect(ctx.destination);
    
    const osc1 = ctx.createOscillator();
    const gain1 = ctx.createGain();
    const pan1 = ctx.createStereoPanner();
    osc1.type = 'sine';
    osc1.frequency.value = baseFreq;
    gain1.gain.value = 0.4;
    pan1.pan.value = audioPan;
    osc1.connect(gain1);
    gain1.connect(pan1);
    pan1.connect(masterGain);
    
    const osc2 = ctx.createOscillator();
    const gain2 = ctx.createGain();
    const pan2 = ctx.createStereoPanner();
    osc2.type = 'sine';
    osc2.frequency.value = baseFreq * 1.5;
    gain2.gain.value = 0.2;
    pan2.pan.value = -audioPan * 0.7;
    osc2.connect(gain2);
    gain2.connect(pan2);
    pan2.connect(masterGain);
    
    const osc3 = ctx.createOscillator();
    const gain3 = ctx.createGain();
    const pan3 = ctx.createStereoPanner();
    osc3.type = 'sine';
    osc3.frequency.value = baseFreq * 0.5;
    gain3.gain.value = 0.25;
    pan3.pan.value = audioPan * 0.5;
    osc3.connect(gain3);
    gain3.connect(pan3);
    pan3.connect(masterGain);
    
    const binauralBeatFreq = 4;
    const osc4L = ctx.createOscillator();
    const osc4R = ctx.createOscillator();
    const gain4L = ctx.createGain();
    const gain4R = ctx.createGain();
    const merger = ctx.createChannelMerger(2);
    
    osc4L.type = 'sine';
    osc4R.type = 'sine';
    osc4L.frequency.value = baseFreq * 2;
    osc4R.frequency.value = baseFreq * 2 + binauralBeatFreq;
    gain4L.gain.value = 0.15 * Math.max(0, -audioPan + 0.5);
    gain4R.gain.value = 0.15 * Math.max(0, audioPan + 0.5);
    
    osc4L.connect(gain4L);
    osc4R.connect(gain4R);
    gain4L.connect(merger, 0, 0);
    gain4R.connect(merger, 0, 1);
    merger.connect(masterGain);
    
    const lfo = ctx.createOscillator();
    const lfoGain = ctx.createGain();
    lfo.type = 'sine';
    
    if (audioMode === 'pulse') {
      lfo.frequency.value = 1.2;
      lfoGain.gain.value = 30;
      lfo.connect(lfoGain);
      lfoGain.connect(osc1.frequency);
    } else if (audioMode === 'breath') {
      lfo.frequency.value = 0.15;
      lfoGain.gain.value = 50;
      lfo.connect(lfoGain);
      lfoGain.connect(osc1.frequency);
    } else if (audioMode === 'tension') {
      lfo.frequency.value = 0.3;
      lfoGain.gain.value = 20;
      lfo.connect(lfoGain);
      lfoGain.connect(osc2.frequency);
    }
    
    const now = ctx.currentTime;
    [osc1, osc2, osc3, osc4L, osc4R].forEach(osc => osc.start(now));
    lfo.start(now);
    
    oscillatorsRef.current = [osc1, osc2, osc3, osc4L, osc4R];
    gainsRef.current = [gain1, gain2, gain3, gain4L, gain4R, masterGain];
    pannersRef.current = [pan1, pan2, pan3];
    lfoRef.current = lfo;
    
    setIsPlaying(true);
  };

  const stopAudio = () => {
    oscillatorsRef.current.forEach(osc => {
      try { osc.stop(); } catch {}
    });
    if (lfoRef.current) {
      try { lfoRef.current.stop(); } catch {}
    }
    if (audioContextRef.current) {
      audioContextRef.current.close();
      audioContextRef.current = null;
    }
    oscillatorsRef.current = [];
    gainsRef.current = [];
    pannersRef.current = [];
    lfoRef.current = null;
    setIsPlaying(false);
  };

  useEffect(() => {
    pannersRef.current.forEach((panner, i) => {
      if (panner) {
        const multiplier = i === 1 ? -0.7 : i === 2 ? 0.5 : 1;
        panner.pan.value = audioPan * multiplier;
      }
    });
  }, [audioPan]);

  useEffect(() => {
    const masterGain = gainsRef.current[gainsRef.current.length - 1];
    if (masterGain) {
      masterGain.gain.value = audioIntensity * 0.3;
    }
  }, [audioIntensity]);

  useEffect(() => {
    return () => stopAudio();
  }, []);

  useEffect(() => {
    if (isPlaying) {
      stopAudio();
      setTimeout(() => startAudio(), 100);
    }
  }, [audioMode]);

  return (
    <div className="tbp-page">
      <style>{`
        .tbp-page {
          max-width: 1000px;
          margin: 0 auto;
        }

        .page-header {
          margin-bottom: 2rem;
          padding-bottom: 2rem;
          border-bottom: 1px solid var(--border);
        }

        .page-badge {
          display: inline-block;
          font-family: 'JetBrains Mono', monospace;
          font-size: 0.65rem;
          padding: 0.25rem 0.75rem;
          background: rgba(232, 93, 4, 0.1);
          color: var(--accent);
          border-radius: 4px;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          margin-bottom: 1rem;
        }

        .page-title {
          font-family: 'Playfair Display', serif;
          font-size: 2.5rem;
          font-weight: 700;
          margin-bottom: 0.75rem;
          color: var(--text-primary);
        }

        .page-subtitle {
          font-size: 1.1rem;
          color: var(--text-secondary);
          max-width: 600px;
        }

        .performance-image {
          width: 100%;
          border-radius: 12px;
          margin: 1.5rem 0;
          border: 1px solid var(--border);
        }

        .image-caption {
          font-size: 0.8rem;
          color: var(--text-muted);
          text-align: center;
          margin-top: 0.5rem;
          font-style: italic;
        }

        .download-btn {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.75rem 1.25rem;
          background: var(--bg-primary);
          border: 1px solid var(--border);
          border-radius: 8px;
          color: var(--text-primary);
          text-decoration: none;
          font-size: 0.85rem;
          transition: all 0.2s ease;
          margin-top: 1rem;
        }

        .download-btn:hover {
          border-color: var(--accent);
          background: rgba(232, 93, 4, 0.05);
        }

        .section-nav {
          display: flex;
          gap: 0.5rem;
          margin-bottom: 2rem;
          flex-wrap: wrap;
          border-bottom: 1px solid var(--border);
          padding-bottom: 1rem;
        }

        .section-btn {
          padding: 0.6rem 1.25rem;
          background: var(--bg-secondary);
          border: 1px solid var(--border);
          border-radius: 8px;
          cursor: pointer;
          font-size: 0.85rem;
          transition: all 0.2s ease;
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }

        .section-btn:hover {
          border-color: var(--text-muted);
        }

        .section-btn.active {
          background: var(--accent);
          border-color: var(--accent);
          color: white;
        }

        .section-title {
          font-family: 'Playfair Display', serif;
          font-size: 1.75rem;
          margin-bottom: 0.75rem;
        }

        .section-intro {
          color: var(--text-secondary);
          margin-bottom: 1.5rem;
          line-height: 1.6;
        }

        .audio-container {
          padding: 1.5rem;
          background: var(--bg-secondary);
          border-radius: 12px;
          border: 1px solid var(--border);
        }

        .audio-modes {
          margin-bottom: 1rem;
        }

        .mode-buttons {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 0.75rem;
          margin-top: 0.75rem;
        }

        .mode-btn {
          padding: 1rem;
          background: var(--bg-primary);
          border: 1px solid var(--border);
          border-radius: 8px;
          cursor: pointer;
          text-align: left;
          transition: all 0.2s ease;
        }

        .mode-btn:hover {
          border-color: var(--text-muted);
        }

        .mode-btn.active {
          border-color: var(--accent);
          background: rgba(232, 93, 4, 0.08);
        }

        .mode-name {
          display: block;
          font-weight: 600;
          font-size: 0.9rem;
          margin-bottom: 0.25rem;
        }

        .mode-desc {
          display: block;
          font-size: 0.75rem;
          color: var(--text-muted);
        }

        .pan-label {
          font-family: 'JetBrains Mono', monospace;
          font-size: 0.7rem;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          color: var(--text-muted);
          margin-bottom: 0.5rem;
        }

        .pan-display {
          display: flex;
          align-items: center;
          gap: 1rem;
          justify-content: center;
        }

        .pan-side {
          font-size: 0.85rem;
          font-weight: 600;
          width: 80px;
          transition: color 0.2s ease;
        }

        .pan-slider {
          width: 200px;
          height: 8px;
          -webkit-appearance: none;
          appearance: none;
          background: var(--border);
          border-radius: 4px;
          outline: none;
        }

        .pan-slider::-webkit-slider-thumb {
          -webkit-appearance: none;
          appearance: none;
          width: 20px;
          height: 20px;
          background: var(--accent);
          border-radius: 50%;
          cursor: pointer;
        }

        .audio-btn {
          padding: 0.75rem 2rem;
          background: ${isPlaying ? '#ef4444' : 'var(--accent)'};
          color: white;
          border: none;
          border-radius: 8px;
          font-size: 0.9rem;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.2s ease;
        }

        .audio-btn:hover {
          transform: scale(1.05);
        }

        .audio-note {
          font-size: 0.8rem;
          color: var(--text-muted);
          margin-top: 1rem;
          font-style: italic;
        }

        .visual-3d-container {
          position: relative;
          width: 100%;
          height: 450px;
          background: #0a0a0a;
          border-radius: 12px;
          overflow: hidden;
          border: 1px solid var(--border);
        }

        .loading-overlay {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          background: rgba(10, 10, 10, 0.9);
          z-index: 10;
        }

        .loading-text {
          color: var(--accent);
          font-family: 'JetBrains Mono', monospace;
          font-size: 0.85rem;
          margin-bottom: 1rem;
        }

        .loading-bar {
          width: 200px;
          height: 4px;
          background: var(--border);
          border-radius: 2px;
          overflow: hidden;
        }

        .loading-bar-fill {
          height: 100%;
          background: var(--accent);
          transition: width 0.3s ease;
        }

        .visual-controls-bar {
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          padding: 1rem;
          background: linear-gradient(transparent, rgba(0,0,0,0.8));
          display: flex;
          align-items: center;
          gap: 0.5rem;
          flex-wrap: wrap;
          z-index: 5;
        }

        .control-label {
          font-family: 'JetBrains Mono', monospace;
          font-size: 0.7rem;
          color: rgba(255,255,255,0.6);
          margin-right: 0.25rem;
        }

        .view-btn {
          padding: 0.4rem 0.75rem;
          background: rgba(255,255,255,0.1);
          border: 1px solid rgba(255,255,255,0.2);
          border-radius: 6px;
          color: white;
          font-size: 0.75rem;
          cursor: pointer;
          transition: all 0.2s ease;
        }

        .view-btn:hover {
          background: rgba(255,255,255,0.2);
        }

        .view-btn.active {
          background: var(--accent);
          border-color: var(--accent);
        }

        .spacer {
          flex: 1;
        }

        .phrase-selector {
          margin-bottom: 1.5rem;
        }

        .phrase-buttons {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 0.75rem;
          margin-top: 0.75rem;
        }

        .phrase-btn {
          padding: 1rem;
          background: var(--bg-primary);
          border: 2px solid var(--border);
          border-radius: 8px;
          cursor: pointer;
          text-align: left;
          transition: all 0.2s ease;
        }

        .phrase-btn:hover {
          transform: translateY(-2px);
        }

        .phrase-btn-name {
          display: block;
          font-weight: 600;
          font-size: 0.85rem;
          margin-bottom: 0.25rem;
        }

        .phrase-btn-desc {
          display: block;
          font-size: 0.7rem;
          color: var(--text-muted);
        }

        .orbit-hint {
          text-align: center;
          font-size: 0.8rem;
          color: var(--text-muted);
          margin-top: 0.75rem;
        }

        .overview-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 1rem;
          margin-top: 1.5rem;
        }

        .overview-card {
          padding: 1.25rem;
          background: var(--bg-primary);
          border: 1px solid var(--border);
          border-radius: 10px;
        }

        .overview-icon {
          font-size: 1.5rem;
          margin-bottom: 0.5rem;
        }

        .overview-label {
          font-weight: 600;
          margin-bottom: 0.25rem;
        }

        .overview-value {
          font-size: 0.85rem;
          color: var(--text-secondary);
        }

        .phrases-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 1rem;
          margin-bottom: 2rem;
        }

        .phrase-card {
          padding: 1.25rem;
          background: var(--bg-primary);
          border: 1px solid var(--border);
          border-left: 4px solid var(--accent);
          border-radius: 0 10px 10px 0;
          cursor: pointer;
          transition: all 0.2s ease;
        }

        .phrase-card:hover {
          transform: translateY(-2px);
          box-shadow: 0 4px 12px rgba(0,0,0,0.1);
        }

        .phrase-card.active {
          background: var(--bg-secondary);
          border-color: var(--accent);
        }

        .phrase-name {
          font-weight: 700;
          font-size: 1.1rem;
          margin-bottom: 0.35rem;
        }

        .phrase-desc {
          font-size: 0.8rem;
          color: var(--text-secondary);
          margin-bottom: 0.5rem;
        }

        .phrase-speed {
          font-family: 'JetBrains Mono', monospace;
          font-size: 0.7rem;
          color: var(--text-muted);
        }

        .process-flow {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }

        .process-step {
          display: flex;
          gap: 1rem;
          padding: 1rem;
          background: var(--bg-primary);
          border-radius: 10px;
          border: 1px solid var(--border);
        }

        .step-number {
          width: 32px;
          height: 32px;
          background: var(--accent);
          color: white;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: 700;
          flex-shrink: 0;
        }

        .step-content {
          flex: 1;
        }

        .step-title {
          font-weight: 600;
          margin-bottom: 0.25rem;
        }

        .step-desc {
          font-size: 0.85rem;
          color: var(--text-secondary);
        }

        .reflection-prompts {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }

        .reflection-prompt {
          padding: 1.25rem;
          background: var(--bg-primary);
          border: 1px solid var(--border);
          border-radius: 10px;
        }

        .prompt-question {
          font-weight: 600;
          margin-bottom: 0.5rem;
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }

        .prompt-question::before {
          content: "→";
          color: var(--accent);
        }

        .prompt-hint {
          font-size: 0.85rem;
          color: var(--text-secondary);
          font-style: italic;
        }

        .next-steps {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 1rem;
          margin-top: 1.5rem;
        }

        .next-step-btn {
          padding: 1rem;
          background: var(--bg-primary);
          border: 1px solid var(--border);
          border-radius: 8px;
          text-align: center;
          cursor: pointer;
          transition: all 0.2s ease;
        }

        .next-step-btn:hover {
          border-color: var(--accent);
          background: var(--bg-secondary);
        }

        .next-step-icon {
          font-size: 1.5rem;
          margin-bottom: 0.5rem;
        }

        .next-step-label {
          font-size: 0.85rem;
          font-weight: 500;
        }

        @media (max-width: 700px) {
          .overview-grid,
          .phrases-grid,
          .phrase-buttons,
          .mode-buttons {
            grid-template-columns: 1fr;
          }

          .next-steps {
            grid-template-columns: 1fr;
          }

          .visual-3d-container {
            height: 350px;
          }

          .visual-controls-bar {
            padding: 0.75rem;
          }
        }
      `}</style>

      <div className="page-header">
        <span className="page-badge">Stage Lab • MOD-001</span>
        <h1 className="page-title">The Two Body Problem</h1>
        <p className="page-subtitle">
          Initiating creative processes from a single seed idea. Two bodies, two vantage points, 
          one question: What are we making today?
        </p>
        
        <a 
          href="/class-1-planning.pdf" 
          download="Class-1-Two-Body-Problem.pdf"
          className="download-btn"
        >
          📄 Download Class Planning PDF
        </a>
      </div>

      <nav className="section-nav">
        <button 
          className={`section-btn ${activeSection === 'overview' ? 'active' : ''}`}
          onClick={() => setActiveSection('overview')}
        >
          📋 Overview
        </button>
        <button 
          className={`section-btn ${activeSection === 'audio' ? 'active' : ''}`}
          onClick={() => setActiveSection('audio')}
        >
          🔊 Audio
        </button>
        <button 
          className={`section-btn ${activeSection === 'visual' ? 'active' : ''}`}
          onClick={() => setActiveSection('visual')}
        >
          👁️ 3D Visual
        </button>
        <button 
          className={`section-btn ${activeSection === 'process' ? 'active' : ''}`}
          onClick={() => setActiveSection('process')}
        >
          📋 Process
        </button>
        <button 
          className={`section-btn ${activeSection === 'reflection' ? 'active' : ''}`}
          onClick={() => setActiveSection('reflection')}
        >
          💭 Reflection
        </button>
      </nav>

      <div className="section-content">
        {activeSection === 'overview' && (
          <>
            <h2 className="section-title">The Two Body Problem</h2>
            <p className="section-intro">
              In physics, the two-body problem describes the motion of two bodies interacting only with each other. 
              In choreography, we ask: how does a single question ("feeling caught between two worlds") generate 
              movement that transforms based on where you stand?
            </p>

            <img 
              src="/two-body-performance.jpg" 
              alt="Performance with dancers among illuminated columns"
              className="performance-image"
            />
            <p className="image-caption">
              Two bodies navigating space — vantage points create meaning
            </p>

            <div className="overview-grid">
              <div className="overview-card">
                <div className="overview-icon">❓</div>
                <div className="overview-label">Focus</div>
                <div className="overview-value">Initiating creative processes from a single seed</div>
              </div>
              <div className="overview-card">
                <div className="overview-icon">📐</div>
                <div className="overview-label">Space</div>
                <div className="overview-value">Rectangular, bi-focal seating at both ends</div>
              </div>
              <div className="overview-card">
                <div className="overview-icon">👥</div>
                <div className="overview-label">Bodies</div>
                <div className="overview-value">Two facing, center positioned</div>
              </div>
              <div className="overview-card">
                <div className="overview-icon">🔄</div>
                <div className="overview-label">Method</div>
                <div className="overview-value">Question → Process → Reflection</div>
              </div>
            </div>
          </>
        )}

        {activeSection === 'audio' && (
          <>
            <h2 className="section-title">Audio: Two Perspectives</h2>
            <p className="section-intro">
              Sound, like movement, transforms based on position. This layered binaural soundscape 
              demonstrates how the same sonic event exists differently depending on where you stand.
            </p>

            <div className="audio-container">
              <div className="audio-modes">
                <div className="pan-label">SOUND MODE</div>
                <div className="mode-buttons">
                  {(Object.keys(AUDIO_MODES) as AudioMode[]).map((mode) => (
                    <button
                      key={mode}
                      className={`mode-btn ${audioMode === mode ? 'active' : ''}`}
                      onClick={() => setAudioMode(mode)}
                    >
                      <span className="mode-name">{AUDIO_MODES[mode].name}</span>
                      <span className="mode-desc">{AUDIO_MODES[mode].desc}</span>
                    </button>
                  ))}
                </div>
              </div>

              <div style={{ marginTop: '1.5rem' }}>
                <div className="pan-label">SPATIAL POSITION</div>
                <div className="pan-display">
                  <span className="pan-side" style={{ color: audioPan < 0 ? 'var(--accent)' : 'var(--text-muted)', textAlign: 'right' }}>← LEFT</span>
                  <input 
                    type="range" 
                    className="pan-slider"
                    min="-1" 
                    max="1" 
                    step="0.05"
                    value={audioPan}
                    onChange={(e) => setAudioPan(parseFloat(e.target.value))}
                  />
                  <span className="pan-side" style={{ color: audioPan > 0 ? 'var(--accent)' : 'var(--text-muted)' }}>RIGHT →</span>
                </div>
              </div>

              <div style={{ marginTop: '1rem' }}>
                <div className="pan-label">INTENSITY</div>
                <div className="pan-display">
                  <span className="pan-side" style={{ textAlign: 'right' }}>Soft</span>
                  <input 
                    type="range" 
                    className="pan-slider"
                    min="0.1" 
                    max="1" 
                    step="0.1"
                    value={audioIntensity}
                    onChange={(e) => setAudioIntensity(parseFloat(e.target.value))}
                  />
                  <span className="pan-side">Full</span>
                </div>
              </div>
              
              <div style={{ textAlign: 'center', marginTop: '1.5rem' }}>
                <button 
                  className="audio-btn"
                  onClick={isPlaying ? stopAudio : startAudio}
                >
                  {isPlaying ? '■ Stop' : '▶ Play'}
                </button>
              </div>
              
              <p className="audio-note">
                🎧 Best experienced with headphones. Multiple harmonic layers create a rich spatial field.
              </p>
            </div>

            <div style={{ marginTop: '1.5rem', padding: '1.25rem', background: 'var(--bg-primary)', borderRadius: '10px', borderLeft: '3px solid var(--accent)' }}>
              <strong style={{ display: 'block', marginBottom: '0.5rem' }}>Choreographic Question:</strong>
              <span style={{ color: 'var(--text-secondary)' }}>
                If your movement phrase were a sound, would both vantage points hear the same rhythm? 
                The same intensity? The same silence?
              </span>
            </div>
          </>
        )}

        {activeSection === 'visual' && (
          <>
            <h2 className="section-title">3D Visual: Bi-Focal Vantage</h2>
            <p className="section-intro">
              Orbit around the motion capture figure to experience how the same movement appears differently 
              from each vantage point. Drag to rotate, scroll to zoom, right-click to pan.
            </p>

            <div className="phrase-selector">
              <span className="control-label">Movement Phrase:</span>
              <div className="phrase-buttons">
                {(Object.keys(PHRASES) as PhraseKey[]).map((key) => (
                  <button
                    key={key}
                    className={`phrase-btn ${currentPhrase === key ? 'active' : ''}`}
                    style={{ 
                      borderColor: currentPhrase === key ? PHRASES[key].color : 'var(--border)',
                      background: currentPhrase === key ? `${PHRASES[key].color}15` : 'var(--bg-primary)'
                    }}
                    onClick={() => setCurrentPhrase(key)}
                  >
                    <span className="phrase-btn-name" style={{ color: PHRASES[key].color }}>{PHRASES[key].name}</span>
                    <span className="phrase-btn-desc">{PHRASES[key].desc}</span>
                  </button>
                ))}
              </div>
            </div>

            <div className="visual-3d-container" ref={containerRef}>
              {loadingStatus === 'loading' && (
                <div className="loading-overlay">
                  <div className="loading-text">Loading Motion Capture Data...</div>
                  <div className="loading-bar">
                    <div className="loading-bar-fill" style={{ width: `${loadingProgress}%` }}></div>
                  </div>
                </div>
              )}
              
              <div className="visual-controls-bar">
                <span className="control-label">Vantage:</span>
                <button className="view-btn" onClick={() => setCameraPosition('front')}>Front</button>
                <button className="view-btn" onClick={() => setCameraPosition('back')}>Back</button>
                <button className="view-btn" onClick={() => setCameraPosition('side')}>Side</button>
                <button className="view-btn" onClick={() => setCameraPosition('top')}>Top</button>
                
                <div className="spacer"></div>
                
                <span className="control-label">Style:</span>
                <button 
                  className={`view-btn ${visualMode === 'wireframe' ? 'active' : ''}`}
                  onClick={() => setVisualMode('wireframe')}
                >
                  Wireframe
                </button>
                <button 
                  className={`view-btn ${visualMode === 'solid' ? 'active' : ''}`}
                  onClick={() => setVisualMode('solid')}
                >
                  Solid
                </button>
                <button 
                  className={`view-btn ${visualMode === 'points' ? 'active' : ''}`}
                  onClick={() => setVisualMode('points')}
                >
                  Points
                </button>
                
                <button 
                  className={`view-btn ${isAnimating ? 'active' : ''}`}
                  onClick={() => setIsAnimating(!isAnimating)}
                >
                  {isAnimating ? '⏸' : '▶'}
                </button>
                <button className="view-btn" onClick={resetCamera}>Reset</button>
              </div>
            </div>

            <p className="orbit-hint">
              🖱️ Drag to orbit • Scroll to zoom • Right-click to pan — Experience the vantage point transformation
            </p>

            <div style={{ marginTop: '1.5rem', padding: '1.25rem', background: 'var(--bg-primary)', borderRadius: '10px', borderLeft: `4px solid ${PHRASES[currentPhrase].color}` }}>
              <strong>{PHRASES[currentPhrase].name}</strong> — {PHRASES[currentPhrase].desc}
              <p style={{ marginTop: '0.5rem', fontSize: '0.85rem', color: 'var(--text-muted)' }}>
                Motion capture: Adzogbo danced by Mustapha — Ghanaian tradition from the Global Movement Research corpus.
              </p>
            </div>
          </>
        )}

        {activeSection === 'process' && (
          <>
            <h2 className="section-title">Movement Process</h2>
            <p className="section-intro">
              Build three sequential phrases from the seed idea. Each phrase is distinct, repeatable, 
              and can begin and end using either vantage point.
            </p>

            <div className="phrases-grid">
              {(Object.keys(PHRASES) as PhraseKey[]).map((key) => (
                <div 
                  key={key}
                  className={`phrase-card ${currentPhrase === key ? 'active' : ''}`}
                  style={{ borderLeftColor: PHRASES[key].color }}
                  onClick={() => setCurrentPhrase(key)}
                >
                  <div className="phrase-name" style={{ color: PHRASES[key].color }}>{PHRASES[key].name}</div>
                  <div className="phrase-desc">{PHRASES[key].desc}</div>
                  <div className="phrase-speed">Speed: {PHRASES[key].speed}</div>
                </div>
              ))}
            </div>

            <div className="process-flow">
              <div className="process-step">
                <div className="step-number">1</div>
                <div className="step-content">
                  <div className="step-title">Choose a Single Movement Task</div>
                  <div className="step-desc">What is central to "being caught between two worlds"? Find one action, one gesture, one quality.</div>
                </div>
              </div>
              <div className="process-step">
                <div className="step-number">2</div>
                <div className="step-content">
                  <div className="step-title">Develop 3 Sequential Phrases</div>
                  <div className="step-desc">Each phrase is distinct and repeatable. Characterize by speed, tempo, and vantage point relationship.</div>
                </div>
              </div>
              <div className="process-step">
                <div className="step-number">3</div>
                <div className="step-content">
                  <div className="step-title">Repeat with Modulation</div>
                  <div className="step-desc">Perform each phrase 3 times, modulating each repetition. What changes? What stays?</div>
                </div>
              </div>
              <div className="process-step">
                <div className="step-number">4</div>
                <div className="step-content">
                  <div className="step-title">Apply Creator Viewpoint</div>
                  <div className="step-desc">Move around the phrase as it's performed. What does it look like? How does it feel?</div>
                </div>
              </div>
            </div>
          </>
        )}

        {activeSection === 'reflection' && (
          <>
            <h2 className="section-title">Reflection</h2>
            <p className="section-intro">
              The seed idea has transformed from question to application. Consider these prompts 
              to process your experience.
            </p>

            <div className="reflection-prompts">
              <div className="reflection-prompt">
                <div className="prompt-question">What was asked?</div>
                <div className="prompt-hint">Return to the original seed: "feeling caught between two worlds"</div>
              </div>
              <div className="reflection-prompt">
                <div className="prompt-question">What was made?</div>
                <div className="prompt-hint">Describe the movement material that emerged</div>
              </div>
              <div className="reflection-prompt">
                <div className="prompt-question">How was it made?</div>
                <div className="prompt-hint">Trace the process from question to phrase to performance</div>
              </div>
              <div className="reflection-prompt">
                <div className="prompt-question">What was the process?</div>
                <div className="prompt-hint">Identify your methodology — what can be repeated, modified, extended?</div>
              </div>
            </div>

            <div className="next-steps">
              <div className="next-step-btn">
                <div className="next-step-icon">🔨</div>
                <div className="next-step-label">Build On</div>
              </div>
              <div className="next-step-btn">
                <div className="next-step-icon">🔄</div>
                <div className="next-step-label">Scratch & Restart</div>
              </div>
              <div className="next-step-btn">
                <div className="next-step-icon">❓</div>
                <div className="next-step-label">Modify Question</div>
              </div>
              <div className="next-step-btn">
                <div className="next-step-icon">➕</div>
                <div className="next-step-label">Extend Question</div>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
