import { useState, useRef, useEffect, useCallback } from 'react';

// Movement phrase definitions with distinct characteristics
const PHRASES = {
  A: { 
    name: 'Phrase A: Tension', 
    desc: 'Contracted, suspended, caught',
    speed: 'Slow',
    color: '#E85D04',
    // Movement parameters
    breathAmp: 2, swayAmp: 3, armAmp: 8, legAmp: 2,
    breathSpeed: 0.8, swaySpeed: 0.3, armSpeed: 0.5,
    contract: 0.85, // body scale contraction
  },
  B: { 
    name: 'Phrase B: Release', 
    desc: 'Expansive, falling, surrendering',
    speed: 'Medium',
    color: '#10B981',
    breathAmp: 8, swayAmp: 15, armAmp: 25, legAmp: 10,
    breathSpeed: 1.5, swaySpeed: 1.2, armSpeed: 2,
    contract: 1.15,
  },
  C: { 
    name: 'Phrase C: Resolution', 
    desc: 'Grounded, still, between',
    speed: 'Variable',
    color: '#6366F1',
    breathAmp: 4, swayAmp: 6, armAmp: 12, legAmp: 4,
    breathSpeed: 1, swaySpeed: 0.7, armSpeed: 1,
    contract: 1,
  },
};

type PhraseKey = keyof typeof PHRASES;

// Skeletal figure with phrase-based movement
const createSkeletalFigure = (
  ctx: CanvasRenderingContext2D, 
  x: number, 
  y: number, 
  scale: number, 
  phase: number, 
  isFront: boolean, 
  style: 'skeletal' | 'silhouette' | 'hybrid',
  phrase: PhraseKey
) => {
  const p = PHRASES[phrase];
  const joints: { [key: string]: { x: number; y: number } } = {};
  
  // Apply phrase-specific movement characteristics
  const breathOffset = Math.sin(phase * p.breathSpeed * 2) * p.breathAmp;
  const swayOffset = Math.sin(phase * p.swaySpeed) * p.swayAmp;
  const armSwing = Math.sin(phase * p.armSpeed * 1.5) * p.armAmp;
  const legShift = Math.cos(phase * p.swaySpeed) * p.legAmp;
  const bodyScale = scale * p.contract;
  
  // Head
  joints.head = { x: x + swayOffset * 0.3, y: y - 80 * bodyScale + breathOffset };
  
  // Spine
  joints.neck = { x: x + swayOffset * 0.4, y: y - 65 * bodyScale };
  joints.chest = { x: x + swayOffset * 0.5, y: y - 45 * bodyScale };
  joints.spine = { x: x + swayOffset * 0.6, y: y - 25 * bodyScale };
  joints.pelvis = { x: x + swayOffset * 0.7, y: y - 5 * bodyScale };
  
  // Arms - more expressive based on phrase
  const armDrop = phrase === 'A' ? -10 : phrase === 'B' ? 15 : 0;
  joints.shoulderL = { x: x - 20 * bodyScale + swayOffset * 0.5, y: y - 55 * bodyScale };
  joints.shoulderR = { x: x + 20 * bodyScale + swayOffset * 0.5, y: y - 55 * bodyScale };
  joints.elbowL = { x: x - 35 * bodyScale + armSwing, y: y - 35 * bodyScale + armDrop };
  joints.elbowR = { x: x + 35 * bodyScale - armSwing, y: y - 35 * bodyScale + armDrop };
  joints.wristL = { x: x - 45 * bodyScale + armSwing * 1.3, y: y - 15 * bodyScale + armDrop * 1.5 };
  joints.wristR = { x: x + 45 * bodyScale - armSwing * 1.3, y: y - 15 * bodyScale + armDrop * 1.5 };
  
  // Legs
  joints.hipL = { x: x - 12 * bodyScale + swayOffset * 0.7, y: y - 5 * bodyScale };
  joints.hipR = { x: x + 12 * bodyScale + swayOffset * 0.7, y: y - 5 * bodyScale };
  joints.kneeL = { x: x - 14 * bodyScale + legShift, y: y + 30 * bodyScale };
  joints.kneeR = { x: x + 14 * bodyScale - legShift, y: y + 30 * bodyScale };
  joints.ankleL = { x: x - 15 * bodyScale + legShift * 0.5, y: y + 65 * bodyScale };
  joints.ankleR = { x: x + 15 * bodyScale - legShift * 0.5, y: y + 65 * bodyScale };
  
  const accentColor = p.color;
  const boneColor = isFront ? '#1a1a1a' : '#666666';
  const jointColor = isFront ? accentColor : '#888888';
  
  // Draw silhouette layer
  if (style === 'silhouette' || style === 'hybrid') {
    ctx.fillStyle = isFront ? `${accentColor}20` : 'rgba(100, 100, 100, 0.15)';
    
    // Head
    ctx.beginPath();
    ctx.ellipse(joints.head.x, joints.head.y, 12 * bodyScale, 15 * bodyScale, 0, 0, Math.PI * 2);
    ctx.fill();
    
    // Torso
    ctx.beginPath();
    ctx.moveTo(joints.shoulderL.x - 5, joints.shoulderL.y);
    ctx.quadraticCurveTo(joints.chest.x, joints.chest.y - 10, joints.shoulderR.x + 5, joints.shoulderR.y);
    ctx.lineTo(joints.hipR.x + 8, joints.hipR.y);
    ctx.quadraticCurveTo(joints.pelvis.x, joints.pelvis.y + 8, joints.hipL.x - 8, joints.hipL.y);
    ctx.closePath();
    ctx.fill();
    
    // Arms (silhouette)
    ctx.lineWidth = 8;
    ctx.lineCap = 'round';
    ctx.strokeStyle = isFront ? `${accentColor}15` : 'rgba(100, 100, 100, 0.1)';
    ctx.beginPath();
    ctx.moveTo(joints.shoulderL.x, joints.shoulderL.y);
    ctx.lineTo(joints.elbowL.x, joints.elbowL.y);
    ctx.lineTo(joints.wristL.x, joints.wristL.y);
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(joints.shoulderR.x, joints.shoulderR.y);
    ctx.lineTo(joints.elbowR.x, joints.elbowR.y);
    ctx.lineTo(joints.wristR.x, joints.wristR.y);
    ctx.stroke();
    
    // Legs (silhouette)
    ctx.beginPath();
    ctx.moveTo(joints.hipL.x, joints.hipL.y);
    ctx.lineTo(joints.kneeL.x, joints.kneeL.y);
    ctx.lineTo(joints.ankleL.x, joints.ankleL.y);
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(joints.hipR.x, joints.hipR.y);
    ctx.lineTo(joints.kneeR.x, joints.kneeR.y);
    ctx.lineTo(joints.ankleR.x, joints.ankleR.y);
    ctx.stroke();
  }
  
  // Draw skeletal layer
  if (style === 'skeletal' || style === 'hybrid') {
    ctx.strokeStyle = boneColor;
    ctx.lineWidth = 2;
    ctx.lineCap = 'round';
    
    const drawBone = (j1: string, j2: string) => {
      ctx.beginPath();
      ctx.moveTo(joints[j1].x, joints[j1].y);
      ctx.lineTo(joints[j2].x, joints[j2].y);
      ctx.stroke();
    };
    
    // Spine
    drawBone('head', 'neck');
    drawBone('neck', 'chest');
    drawBone('chest', 'spine');
    drawBone('spine', 'pelvis');
    
    // Arms
    drawBone('neck', 'shoulderL');
    drawBone('neck', 'shoulderR');
    drawBone('shoulderL', 'elbowL');
    drawBone('shoulderR', 'elbowR');
    drawBone('elbowL', 'wristL');
    drawBone('elbowR', 'wristR');
    
    // Legs
    drawBone('pelvis', 'hipL');
    drawBone('pelvis', 'hipR');
    drawBone('hipL', 'kneeL');
    drawBone('hipR', 'kneeR');
    drawBone('kneeL', 'ankleL');
    drawBone('kneeR', 'ankleR');
    
    // Joints
    ctx.fillStyle = jointColor;
    Object.values(joints).forEach(joint => {
      ctx.beginPath();
      ctx.arc(joint.x, joint.y, 4, 0, Math.PI * 2);
      ctx.fill();
    });
    
    // Head outline
    ctx.strokeStyle = jointColor;
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.arc(joints.head.x, joints.head.y, 12 * bodyScale, 0, Math.PI * 2);
    ctx.stroke();
  }
};

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
  const [visualStyle, setVisualStyle] = useState<'skeletal' | 'silhouette' | 'hybrid'>('hybrid');
  const [isAnimating, setIsAnimating] = useState(true);
  const [tempoMultiplier, setTempoMultiplier] = useState(1);
  
  const audioContextRef = useRef<AudioContext | null>(null);
  const oscillatorsRef = useRef<OscillatorNode[]>([]);
  const gainsRef = useRef<GainNode[]>([]);
  const pannersRef = useRef<StereoPannerNode[]>([]);
  const lfoRef = useRef<OscillatorNode | null>(null);
  
  const canvasLeftRef = useRef<HTMLCanvasElement | null>(null);
  const canvasRightRef = useRef<HTMLCanvasElement | null>(null);
  const animationRef = useRef<number | null>(null);
  const phaseRef = useRef(0);

  // Animation loop with phrase-based movement
  const animate = useCallback(() => {
    if (!isAnimating) return;
    
    const canvasL = canvasLeftRef.current;
    const canvasR = canvasRightRef.current;
    if (!canvasL || !canvasR) return;
    
    const ctxL = canvasL.getContext('2d');
    const ctxR = canvasR.getContext('2d');
    if (!ctxL || !ctxR) return;
    
    phaseRef.current += 0.03 * tempoMultiplier;
    
    // Clear canvases
    ctxL.clearRect(0, 0, canvasL.width, canvasL.height);
    ctxR.clearRect(0, 0, canvasR.width, canvasR.height);
    
    // Draw grid background
    const phraseColor = PHRASES[currentPhrase].color;
    [ctxL, ctxR].forEach(ctx => {
      ctx.strokeStyle = `${phraseColor}15`;
      ctx.lineWidth = 1;
      for (let i = 0; i < ctx.canvas.width; i += 20) {
        ctx.beginPath();
        ctx.moveTo(i, 0);
        ctx.lineTo(i, ctx.canvas.height);
        ctx.stroke();
      }
      for (let i = 0; i < ctx.canvas.height; i += 20) {
        ctx.beginPath();
        ctx.moveTo(0, i);
        ctx.lineTo(ctx.canvas.width, i);
        ctx.stroke();
      }
    });
    
    // Draw figures with current phrase
    createSkeletalFigure(ctxL, canvasL.width / 2, canvasL.height / 2 + 20, 1.2, phaseRef.current, true, visualStyle, currentPhrase);
    createSkeletalFigure(ctxR, canvasR.width / 2, canvasR.height / 2 + 20, 1.2, phaseRef.current, false, visualStyle, currentPhrase);
    
    animationRef.current = requestAnimationFrame(animate);
  }, [isAnimating, visualStyle, currentPhrase, tempoMultiplier]);

  // Start/stop animation
  useEffect(() => {
    if (activeSection === 'visual' && isAnimating) {
      animationRef.current = requestAnimationFrame(animate);
    }
    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [activeSection, isAnimating, animate]);

  // Enhanced binaural audio with multiple layers
  const startAudio = () => {
    if (audioContextRef.current) {
      stopAudio();
    }
    
    const ctx = new AudioContext();
    audioContextRef.current = ctx;
    const mode = AUDIO_MODES[audioMode];
    const baseFreq = mode.baseFreq;
    
    // Create master gain
    const masterGain = ctx.createGain();
    masterGain.gain.value = audioIntensity * 0.3;
    masterGain.connect(ctx.destination);
    
    // Layer 1: Base tone with stereo pan
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
    
    // Layer 2: Harmonic (fifth above) with inverse pan
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
    
    // Layer 3: Sub-harmonic for depth
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
    
    // Layer 4: Binaural beat (slightly detuned for each ear)
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
    
    // LFO for mode-specific movement
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
      lfoGain.connect(osc2.frequency);
    } else if (audioMode === 'tension') {
      lfo.frequency.value = 0.3;
      lfoGain.gain.value = 20;
      lfo.connect(lfoGain);
      lfoGain.connect(osc2.frequency);
    }
    
    // Start oscillators
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

  // Update panning in real-time
  useEffect(() => {
    pannersRef.current.forEach((panner, i) => {
      if (panner) {
        const multiplier = i === 1 ? -0.7 : i === 2 ? 0.5 : 1;
        panner.pan.value = audioPan * multiplier;
      }
    });
  }, [audioPan]);

  // Update intensity
  useEffect(() => {
    const masterGain = gainsRef.current[gainsRef.current.length - 1];
    if (masterGain) {
      masterGain.gain.value = audioIntensity * 0.3;
    }
  }, [audioIntensity]);

  // Cleanup audio
  useEffect(() => {
    return () => stopAudio();
  }, []);

  // Restart audio when mode changes
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
          text-transform: uppercase;
          letter-spacing: 0.1em;
          padding: 0.35rem 0.65rem;
          background: var(--accent);
          color: white;
          border-radius: 4px;
          margin-bottom: 1rem;
        }

        .page-title {
          font-family: 'Playfair Display', serif;
          font-size: clamp(2rem, 4vw, 2.75rem);
          font-weight: 600;
          margin-bottom: 0.5rem;
        }

        .page-subtitle {
          font-size: 1rem;
          color: var(--text-secondary);
          line-height: 1.6;
        }

        .seed-question {
          font-family: 'Playfair Display', serif;
          font-size: 1.5rem;
          font-style: italic;
          color: var(--accent);
          text-align: center;
          padding: 2rem;
          background: var(--bg-secondary);
          border: 1px solid var(--border);
          border-radius: 12px;
          margin-bottom: 2rem;
        }

        /* Tabs */
        .tbp-tabs {
          display: flex;
          gap: 0.5rem;
          margin-bottom: 2rem;
          flex-wrap: wrap;
        }

        .tbp-tab {
          padding: 0.65rem 1.25rem;
          background: var(--bg-secondary);
          border: 1px solid var(--border);
          border-radius: 6px;
          font-size: 0.85rem;
          font-weight: 500;
          color: var(--text-secondary);
          cursor: pointer;
          transition: all 0.2s ease;
        }

        .tbp-tab:hover {
          border-color: var(--text-muted);
        }

        .tbp-tab.active {
          background: var(--accent);
          border-color: var(--accent);
          color: white;
        }

        /* Content Sections */
        .tbp-content {
          background: var(--bg-secondary);
          border: 1px solid var(--border);
          border-radius: 12px;
          padding: 2rem;
        }

        .section-title {
          font-family: 'Playfair Display', serif;
          font-size: 1.5rem;
          font-weight: 600;
          margin-bottom: 1rem;
        }

        .section-intro {
          color: var(--text-secondary);
          line-height: 1.7;
          margin-bottom: 1.5rem;
        }

        /* Audio Section */
        .audio-container {
          background: var(--bg-primary);
          border: 1px solid var(--border);
          border-radius: 10px;
          padding: 2rem;
          text-align: center;
        }

        .pan-label {
          font-family: 'JetBrains Mono', monospace;
          font-size: 0.8rem;
          color: var(--text-muted);
          margin-bottom: 0.5rem;
        }

        .pan-display {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 1rem;
          margin-bottom: 1.5rem;
        }

        .pan-side {
          font-size: 0.9rem;
          font-weight: 600;
          width: 80px;
        }

        .pan-side.left { text-align: right; color: ${audioPan < 0 ? 'var(--accent)' : 'var(--text-muted)'}; }
        .pan-side.right { text-align: left; color: ${audioPan > 0 ? 'var(--accent)' : 'var(--text-muted)'}; }

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

        /* Audio Modes */
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

        /* Phrase Selector */
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

        /* Tempo Slider */
        .tempo-slider {
          width: 80px;
          height: 6px;
          -webkit-appearance: none;
          appearance: none;
          background: var(--border);
          border-radius: 3px;
          outline: none;
        }

        .tempo-slider::-webkit-slider-thumb {
          -webkit-appearance: none;
          appearance: none;
          width: 14px;
          height: 14px;
          background: var(--accent);
          border-radius: 50%;
          cursor: pointer;
        }

        .tempo-value {
          font-family: 'JetBrains Mono', monospace;
          font-size: 0.75rem;
          color: var(--text-muted);
          min-width: 35px;
        }

        /* Phrase Info */
        .phrase-info {
          margin-top: 1.5rem;
          padding: 1.25rem;
          background: var(--bg-primary);
          border-radius: 10px;
          border-left: 4px solid var(--accent);
        }

        .phrase-info-header {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          margin-bottom: 0.5rem;
        }

        .phrase-speed-badge {
          font-family: 'JetBrains Mono', monospace;
          font-size: 0.65rem;
          padding: 0.2rem 0.5rem;
          background: var(--border);
          border-radius: 4px;
          text-transform: uppercase;
        }

        /* Visual Section */
        .visual-controls {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          margin-bottom: 1.5rem;
          flex-wrap: wrap;
        }

        .control-label {
          font-family: 'JetBrains Mono', monospace;
          font-size: 0.75rem;
          color: var(--text-muted);
          margin-right: 0.5rem;
        }

        .style-btn {
          padding: 0.5rem 1rem;
          background: var(--bg-primary);
          border: 1px solid var(--border);
          border-radius: 6px;
          font-size: 0.8rem;
          cursor: pointer;
          transition: all 0.2s ease;
        }

        .style-btn:hover {
          border-color: var(--text-muted);
        }

        .style-btn.active {
          background: var(--accent);
          border-color: var(--accent);
          color: white;
        }

        .visual-container {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 1rem;
          margin-bottom: 1.5rem;
        }

        .vantage-view {
          background: var(--bg-primary);
          border: 1px solid var(--border);
          border-radius: 10px;
          padding: 1rem;
          text-align: center;
        }

        .vantage-label {
          font-family: 'JetBrains Mono', monospace;
          font-size: 0.7rem;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          color: var(--text-muted);
          margin-bottom: 0.75rem;
        }

        .motion-canvas {
          background: var(--bg-secondary);
          border-radius: 8px;
          width: 100%;
          max-width: 280px;
          height: auto;
        }

        .vantage-note {
          font-size: 0.75rem;
          color: var(--accent);
          margin-top: 0.75rem;
          font-style: italic;
        }

        /* Process Section */
        .process-flow {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }

        .process-step {
          display: flex;
          gap: 1rem;
          padding: 1.25rem;
          background: var(--bg-primary);
          border: 1px solid var(--border);
          border-radius: 10px;
          border-left: 4px solid var(--accent);
        }

        .step-number {
          font-family: 'JetBrains Mono', monospace;
          font-size: 1.25rem;
          font-weight: 700;
          color: var(--accent);
          width: 30px;
        }

        .step-content {
          flex: 1;
        }

        .step-title {
          font-weight: 600;
          margin-bottom: 0.35rem;
        }

        .step-desc {
          font-size: 0.85rem;
          color: var(--text-secondary);
        }

        /* Phrases */
        .phrases-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 1rem;
          margin: 1.5rem 0;
        }

        .phrase-card {
          padding: 1.25rem;
          background: var(--bg-primary);
          border: 2px solid var(--border);
          border-radius: 10px;
          cursor: pointer;
          transition: all 0.2s ease;
        }

        .phrase-card:hover {
          transform: translateY(-2px);
        }

        .phrase-card.active {
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

        /* Reflection */
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

        /* Next Steps */
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
          .visual-container {
            grid-template-columns: 1fr;
          }

          .phrases-grid {
            grid-template-columns: 1fr;
          }

          .next-steps {
            grid-template-columns: 1fr;
          }
        }
      `}</style>

      <div className="page-header">
        <div className="page-badge">Stage Lab</div>
        <h1 className="page-title">Two Body Problem</h1>
        <p className="page-subtitle">
          An exploration of duality in choreographic space. How does movement transform 
          when viewed from opposing vantage points?
        </p>
      </div>

      <div className="seed-question">
        "Feeling caught between two worlds"
      </div>

      <div className="tbp-tabs">
        <button 
          className={`tbp-tab ${activeSection === 'overview' ? 'active' : ''}`}
          onClick={() => setActiveSection('overview')}
        >
          Overview
        </button>
        <button 
          className={`tbp-tab ${activeSection === 'audio' ? 'active' : ''}`}
          onClick={() => setActiveSection('audio')}
        >
          🔊 Audio Experience
        </button>
        <button 
          className={`tbp-tab ${activeSection === 'visual' ? 'active' : ''}`}
          onClick={() => setActiveSection('visual')}
        >
          👁️ Visual Vantage
        </button>
        <button 
          className={`tbp-tab ${activeSection === 'process' ? 'active' : ''}`}
          onClick={() => setActiveSection('process')}
        >
          📋 Process
        </button>
        <button 
          className={`tbp-tab ${activeSection === 'reflection' ? 'active' : ''}`}
          onClick={() => setActiveSection('reflection')}
        >
          💭 Reflection
        </button>
      </div>

      <div className="tbp-content">
        {activeSection === 'overview' && (
          <>
            <h2 className="section-title">The Two Body Problem</h2>
            <p className="section-intro">
              In physics, the two-body problem asks how two objects move under their mutual gravitational pull. 
              In choreography, we ask: how does a single movement exist differently when observed from two opposing sides? 
              What is revealed? What is hidden? What transforms?
            </p>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem', marginTop: '1.5rem' }}>
              <div style={{ padding: '1.25rem', background: 'var(--bg-primary)', border: '1px solid var(--border)', borderRadius: '10px' }}>
                <div style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>🎯</div>
                <div style={{ fontWeight: 600, marginBottom: '0.25rem' }}>Focus</div>
                <div style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>Initiating a creative process from a single seed idea</div>
              </div>
              <div style={{ padding: '1.25rem', background: 'var(--bg-primary)', border: '1px solid var(--border)', borderRadius: '10px' }}>
                <div style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>📐</div>
                <div style={{ fontWeight: 600, marginBottom: '0.25rem' }}>Space</div>
                <div style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>Rectangular, bi-focal seating on both ends</div>
              </div>
              <div style={{ padding: '1.25rem', background: 'var(--bg-primary)', border: '1px solid var(--border)', borderRadius: '10px' }}>
                <div style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>👥</div>
                <div style={{ fontWeight: 600, marginBottom: '0.25rem' }}>Bodies</div>
                <div style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>Two facing, center positioned</div>
              </div>
              <div style={{ padding: '1.25rem', background: 'var(--bg-primary)', border: '1px solid var(--border)', borderRadius: '10px' }}>
                <div style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>🔄</div>
                <div style={{ fontWeight: 600, marginBottom: '0.25rem' }}>Method</div>
                <div style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>Question → Process → Reflection</div>
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
              Use headphones for the full spatial experience.
            </p>

            <div className="audio-container">
              {/* Mode Selector */}
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

              {/* Spatial Position */}
              <div style={{ marginTop: '1.5rem' }}>
                <div className="pan-label">SPATIAL POSITION</div>
                <div className="pan-display">
                  <span className="pan-side" style={{ color: audioPan < 0 ? 'var(--accent)' : 'var(--text-muted)' }}>← LEFT</span>
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

              {/* Intensity */}
              <div style={{ marginTop: '1rem' }}>
                <div className="pan-label">INTENSITY</div>
                <div className="pan-display">
                  <span className="pan-side">Soft</span>
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
              
              <button 
                className="audio-btn"
                onClick={isPlaying ? stopAudio : startAudio}
                style={{ marginTop: '1.5rem' }}
              >
                {isPlaying ? '■ Stop' : '▶ Play'}
              </button>
              
              <p className="audio-note">
                🎧 Best experienced with headphones. Multiple harmonic layers create a rich spatial field 
                that shifts as you move between vantage points.
              </p>
            </div>

            <div style={{ marginTop: '1.5rem', padding: '1.25rem', background: 'var(--bg-primary)', borderRadius: '10px', borderLeft: '3px solid var(--accent)' }}>
              <strong style={{ display: 'block', marginBottom: '0.5rem' }}>Choreographic Question:</strong>
              <span style={{ color: 'var(--text-secondary)' }}>
                If your movement phrase were a sound, would both vantage points hear the same rhythm? 
                The same intensity? The same silence? What harmonics emerge from different positions?
              </span>
            </div>
          </>
        )}

        {activeSection === 'visual' && (
          <>
            <h2 className="section-title">Visual: Bi-Focal Vantage</h2>
            <p className="section-intro">
              The same figure, the same movement, observed from opposing ends. Select a phrase to see 
              how its unique movement qualities appear differently from each vantage point.
            </p>

            {/* Phrase Selector */}
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

            {/* Controls Row */}
            <div className="visual-controls">
              <span className="control-label">Style:</span>
              <button 
                className={`style-btn ${visualStyle === 'skeletal' ? 'active' : ''}`}
                onClick={() => setVisualStyle('skeletal')}
              >
                Skeletal
              </button>
              <button 
                className={`style-btn ${visualStyle === 'silhouette' ? 'active' : ''}`}
                onClick={() => setVisualStyle('silhouette')}
              >
                Silhouette
              </button>
              <button 
                className={`style-btn ${visualStyle === 'hybrid' ? 'active' : ''}`}
                onClick={() => setVisualStyle('hybrid')}
              >
                Hybrid
              </button>
              
              <span className="control-label" style={{ marginLeft: '1.5rem' }}>Tempo:</span>
              <input 
                type="range" 
                className="tempo-slider"
                min="0.3" 
                max="2" 
                step="0.1"
                value={tempoMultiplier}
                onChange={(e) => setTempoMultiplier(parseFloat(e.target.value))}
              />
              <span className="tempo-value">{tempoMultiplier.toFixed(1)}x</span>

              <button 
                className={`style-btn ${isAnimating ? 'active' : ''}`}
                onClick={() => setIsAnimating(!isAnimating)}
                style={{ marginLeft: 'auto' }}
              >
                {isAnimating ? '⏸ Pause' : '▶ Play'}
              </button>
            </div>

            <div className="visual-container">
              <div className="vantage-view">
                <div className="vantage-label">Vantage Point A — Front</div>
                <canvas 
                  ref={canvasLeftRef} 
                  width={280} 
                  height={240}
                  className="motion-canvas"
                />
                <div className="vantage-note" style={{ color: PHRASES[currentPhrase].color }}>
                  Face • Expression • Intention
                </div>
              </div>

              <div className="vantage-view">
                <div className="vantage-label">Vantage Point B — Back</div>
                <canvas 
                  ref={canvasRightRef} 
                  width={280} 
                  height={240}
                  className="motion-canvas"
                />
                <div className="vantage-note" style={{ color: PHRASES[currentPhrase].color }}>
                  Spine • Vulnerability • Departure
                </div>
              </div>
            </div>

            <div className="phrase-info" style={{ borderLeftColor: PHRASES[currentPhrase].color }}>
              <div className="phrase-info-header">
                <strong>{PHRASES[currentPhrase].name}</strong>
                <span className="phrase-speed-badge">{PHRASES[currentPhrase].speed}</span>
              </div>
              <p>{PHRASES[currentPhrase].desc}</p>
              <p style={{ marginTop: '0.5rem', fontSize: '0.85rem', color: 'var(--text-muted)' }}>
                The Two Body Problem: Same movement, same moment, different truths.
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
                  <div className="step-desc">Each phrase is distinct and repeatable. Characterize by speed and tempo. Consider: tension, release, resolution.</div>
                </div>
              </div>
              <div className="process-step">
                <div className="step-number">3</div>
                <div className="step-content">
                  <div className="step-title">Repeat Each Phrase 3 Times</div>
                  <div className="step-desc">Each repetition is modulated. Change facing, scale, timing, or relationship to the vantage points.</div>
                </div>
              </div>
              <div className="process-step">
                <div className="step-number">4</div>
                <div className="step-content">
                  <div className="step-title">Apply Creator Viewpoint</div>
                  <div className="step-desc">Move around the phrase as it is performed. Ask: What does it look like? How does it feel?</div>
                </div>
              </div>
            </div>
          </>
        )}

        {activeSection === 'reflection' && (
          <>
            <h2 className="section-title">Reflection</h2>
            <p className="section-intro">
              The seed idea has transformed from question to application. Now we reflect on the journey.
            </p>

            <div className="reflection-prompts">
              <div className="reflection-prompt">
                <div className="prompt-question">What was asked?</div>
                <div className="prompt-hint">Return to the original seed: "Feeling caught between two worlds"</div>
              </div>
              <div className="reflection-prompt">
                <div className="prompt-question">What was made?</div>
                <div className="prompt-hint">Describe the movement material that emerged from the process</div>
              </div>
              <div className="reflection-prompt">
                <div className="prompt-question">How was it made?</div>
                <div className="prompt-hint">Document your process, decisions, and discoveries</div>
              </div>
              <div className="reflection-prompt">
                <div className="prompt-question">What was the process?</div>
                <div className="prompt-hint">Did you follow the structure? Where did you deviate? Why?</div>
              </div>
            </div>

            <h3 style={{ marginTop: '2rem', marginBottom: '1rem', fontFamily: "'Playfair Display', serif" }}>Next Steps</h3>
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
