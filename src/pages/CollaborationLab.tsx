import { useState, useRef } from 'react';

// Collaboration roles data
const COLLABORATOR_ROLES = {
  dancers: {
    name: 'Dancers',
    icon: '💃',
    color: '#E85D04',
    timeline: 'Throughout the process — most consistent presence',
    needsFromYou: ['Clear movement vocabulary', 'Space for interpretation', 'Timely feedback', 'Physical and emotional safety'],
    youNeedFromThem: ['Embodied feedback', 'Creative contribution', 'Honest communication', 'Commitment to process'],
    communicationStyle: 'Direct but supportive. Use body-based language. Ask "How does that feel?" rather than "Did you get it?"',
  },
  composers: {
    name: 'Composers',
    icon: '🎵',
    color: '#10B981',
    timeline: 'Early concept phase + intensive lab sessions + final refinement',
    needsFromYou: ['Clear artistic intention', 'Flexibility with timing', 'Reference materials', 'Trust in their expertise'],
    youNeedFromThem: ['Drafts and iterations', 'Responsiveness to movement', 'Technical flexibility', 'Collaborative spirit'],
    communicationStyle: 'Use sensory language: texture, weight, atmosphere. Describe feelings rather than technical specs unless you know them.',
  },
  designers: {
    name: 'Designers',
    icon: '🎨',
    color: '#6366F1',
    timeline: 'Concept phase → Design phase → Tech week (intensive)',
    needsFromYou: ['Early concept sharing', 'Visual references', 'Budget clarity', 'Decisiveness in tech'],
    youNeedFromThem: ['Renderings and sketches', 'Technical possibilities', 'Problem-solving', 'Aesthetic partnership'],
    communicationStyle: 'Visual communication works best. Bring images, sketches, videos. Be specific about atmosphere and function.',
  },
  technical: {
    name: 'Technical Partners',
    icon: '🔧',
    color: '#F59E0B',
    timeline: 'Pre-production planning + Tech week (most intensive)',
    needsFromYou: ['Advance notice of needs', 'Clear cue sheets', 'Respect for load-in time', 'Flexibility during tech'],
    youNeedFromThem: ['Technical solutions', 'Safety guidance', 'Timing precision', 'Creative problem-solving'],
    communicationStyle: 'Be specific and practical. Know your deadlines. Ask questions early. Respect their expertise and time constraints.',
  },
};

type RoleKey = keyof typeof COLLABORATOR_ROLES;

// Language translation examples
const LANGUAGE_EXAMPLES = [
  { directive: "Make it louder there", impact: "I'm imagining more presence in that moment — what would that feel like from your end?" },
  { directive: "That's not working", impact: "Something feels unresolved here — can we explore alternatives?" },
  { directive: "Do it faster", impact: "What happens if we compress the time between those two moments?" },
  { directive: "I don't like that", impact: "I'm not connecting with this yet — can you help me understand your intention?" },
  { directive: "Just do what I showed you", impact: "Let's return to the original phrase and find where we diverged" },
  { directive: "That's wrong", impact: "That's different from what I was imagining — let's clarify together" },
];

// Tone audio examples
const TONE_EXAMPLES = [
  {
    topic: "Addressing a transition",
    closed: { text: "That transition needs to be sharper.", tone: "Directive, leaves no room for input" },
    neutral: { text: "Let's look at the transition.", tone: "Opens space but doesn't invite collaboration" },
    open: { text: "I'm curious about the transition — what are you feeling there?", tone: "Invites dialogue, shares ownership" },
  },
  {
    topic: "Responding to an idea",
    closed: { text: "That doesn't fit the piece.", tone: "Dismissive, shuts down exploration" },
    neutral: { text: "Let me think about that.", tone: "Buys time but doesn't engage" },
    open: { text: "I'm holding that differently — can you tell me more about what drew you there?", tone: "Curious, maintains connection" },
  },
  {
    topic: "Asking for a change",
    closed: { text: "Do it again, but better.", tone: "Vague and critical" },
    neutral: { text: "Let's try that again.", tone: "Neutral but not generative" },
    open: { text: "There's something here — what if we tried it with more weight in the descent?", tone: "Specific, collaborative, builds on what exists" },
  },
];

export default function CollaborationLab() {
  const [activeSection, setActiveSection] = useState<'overview' | 'entering' | 'navigating' | 'lab' | 'exiting' | 'templates' | 'coach'>('overview');
  const [selectedRole, setSelectedRole] = useState<RoleKey | null>(null);
  const [activePhase, setActivePhase] = useState<'enter' | 'navigate' | 'exit'>('enter');
  const [languageInput, setLanguageInput] = useState('');
  const [languageOutput, setLanguageOutput] = useState('');
  const [isTranslating, setIsTranslating] = useState(false);
  const [activeToneExample, setActiveToneExample] = useState(0);
  const [energyCheck, setEnergyCheck] = useState({ clarity: 3, openness: 3, body: 3, protect: '' });
  const [tensions, setTensions] = useState<Array<{ id: number; text: string; x: number; y: number }>>([]);
  const [newTension, setNewTension] = useState('');
  const [contract, setContract] = useState({ question: '', protect: '', openTo: '', pauseSignal: '' });
  const tensionIdRef = useRef(0);

  // AI Coach state
  const [coachInput, setCoachInput] = useState('');
  const [coachLoading, setCoachLoading] = useState(false);
  const [coachMessages, setCoachMessages] = useState<Array<{ role: 'user' | 'assistant'; content: string }>>([]);

  // Language translation
  const translateLanguage = async () => {
    if (!languageInput.trim()) return;
    setIsTranslating(true);
    await new Promise(resolve => setTimeout(resolve, 800));
    
    const input = languageInput.toLowerCase();
    let output = '';
    
    if (input.includes("don't") || input.includes("stop") || input.includes("wrong")) {
      output = `Consider: "I'm noticing something different from my intention here — can we explore what's happening together?"`;
    } else if (input.includes("faster") || input.includes("slower") || input.includes("more") || input.includes("less")) {
      output = `Consider: "What would shift if we adjusted the [quality]? I'm curious how that might change the feeling."`;
    } else if (input.includes("like") || input.includes("want") || input.includes("need")) {
      output = `Consider: "The quality I'm imagining has [describe sensation/image]. What does that evoke for you?"`;
    } else if (input.includes("again") || input.includes("repeat")) {
      output = `Consider: "Let's revisit this — I want to understand it more deeply. What felt important to you?"`;
    } else {
      output = `Consider reframing with curiosity: "I'm interested in [your observation]. What's your sense of it? How might we develop this together?"`;
    }
    
    setLanguageOutput(output);
    setIsTranslating(false);
  };

  const addTension = () => {
    if (!newTension.trim()) return;
    tensionIdRef.current += 1;
    setTensions([...tensions, { id: tensionIdRef.current, text: newTension, x: 50, y: 50 }]);
    setNewTension('');
  };

  const removeTension = (id: number) => {
    setTensions(tensions.filter(t => t.id !== id));
  };

  const getEnergyReadiness = () => {
    const avg = (energyCheck.clarity + energyCheck.openness + energyCheck.body) / 3;
    if (avg >= 4) return { level: 'Ready', color: '#10B981', message: 'You are centered and prepared.' };
    if (avg >= 3) return { level: 'Cautious', color: '#F59E0B', message: 'Proceed, but stay attuned to limits.' };
    return { level: 'Pause', color: '#EF4444', message: 'Consider what you need first.' };
  };

  const energyReadiness = getEnergyReadiness();

  // AI Coach query handler
  const askCoach = async () => {
    if (!coachInput.trim() || coachLoading) return;
    
    const userMessage = coachInput.trim();
    setCoachInput('');
    setCoachLoading(true);
    
    const newMessages = [...coachMessages, { role: 'user' as const, content: userMessage }];
    setCoachMessages(newMessages);
    
    try {
      const response = await fetch('/api/coach', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          messages: newMessages.map(m => ({ role: m.role, content: m.content })),
        }),
      });
      
      const data = await response.json();
      
      if (!response.ok) {
        throw new Error(data.error || 'API error');
      }
      
      const assistantMessage = data.content?.[0]?.text || 'I\'m having trouble responding right now. Please try again.';
      
      setCoachMessages([...newMessages, { role: 'assistant', content: assistantMessage }]);
    } catch (error) {
      console.error('Coach error:', error);
      setCoachMessages([...newMessages, { role: 'assistant', content: 'Unable to connect right now. Please try again in a moment, or reach out to Prof. Emoghene or TA Annie directly.' }]);
    }
    
    setCoachLoading(false);
  };

  return (
    <div className="collab-page">
      <style>{`
        .collab-page { max-width: 1000px; margin: 0 auto; }
        .page-header { margin-bottom: 2rem; padding-bottom: 2rem; border-bottom: 1px solid var(--border); }
        .page-badge { display: inline-block; font-family: 'JetBrains Mono', monospace; font-size: 0.65rem; padding: 0.25rem 0.75rem; background: rgba(16, 185, 129, 0.1); color: #10B981; border-radius: 4px; text-transform: uppercase; letter-spacing: 0.1em; margin-bottom: 1rem; }
        .page-title { font-family: 'Playfair Display', serif; font-size: 2.25rem; font-weight: 700; margin-bottom: 0.75rem; }
        .page-subtitle { font-size: 1.05rem; color: var(--text-secondary); max-width: 650px; line-height: 1.6; }
        
        .section-nav { display: flex; gap: 0.5rem; margin-bottom: 2rem; flex-wrap: wrap; border-bottom: 1px solid var(--border); padding-bottom: 1rem; }
        .section-btn { padding: 0.6rem 1rem; background: var(--bg-secondary); border: 1px solid var(--border); border-radius: 8px; cursor: pointer; font-size: 0.8rem; transition: all 0.2s ease; display: flex; align-items: center; gap: 0.5rem; }
        .section-btn:hover { border-color: var(--text-muted); }
        .section-btn.active { background: #10B981; border-color: #10B981; color: white; }
        
        .section-title { font-family: 'Playfair Display', serif; font-size: 1.6rem; margin-bottom: 0.75rem; }
        .section-intro { color: var(--text-secondary); margin-bottom: 1.5rem; line-height: 1.6; }

        .compass-container { display: flex; gap: 2rem; margin: 2rem 0; }
        .compass-visual { position: relative; width: 280px; height: 280px; flex-shrink: 0; }
        .compass-center { position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%); width: 80px; height: 80px; background: var(--bg-secondary); border: 2px solid var(--border); border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 0.7rem; font-weight: 600; text-align: center; z-index: 2; }
        .compass-role { position: absolute; width: 70px; height: 70px; border-radius: 50%; display: flex; flex-direction: column; align-items: center; justify-content: center; cursor: pointer; transition: all 0.3s ease; border: 2px solid transparent; font-size: 1.5rem; }
        .compass-role:hover { transform: scale(1.1); }
        .compass-role.active { transform: scale(1.15); box-shadow: 0 0 20px rgba(0,0,0,0.2); }
        .compass-role span { font-size: 0.6rem; margin-top: 0.25rem; font-weight: 500; }
        .role-dancers { top: 10px; left: 50%; transform: translateX(-50%); background: rgba(232, 93, 4, 0.15); }
        .role-dancers.active { background: rgba(232, 93, 4, 0.3); border-color: #E85D04; }
        .role-composers { top: 50%; right: 10px; transform: translateY(-50%); background: rgba(16, 185, 129, 0.15); }
        .role-composers.active { background: rgba(16, 185, 129, 0.3); border-color: #10B981; }
        .role-designers { bottom: 10px; left: 50%; transform: translateX(-50%); background: rgba(99, 102, 241, 0.15); }
        .role-designers.active { background: rgba(99, 102, 241, 0.3); border-color: #6366F1; }
        .role-technical { top: 50%; left: 10px; transform: translateY(-50%); background: rgba(245, 158, 11, 0.15); }
        .role-technical.active { background: rgba(245, 158, 11, 0.3); border-color: #F59E0B; }
        
        .compass-details { flex: 1; padding: 1.5rem; background: var(--bg-primary); border: 1px solid var(--border); border-radius: 12px; }
        .compass-details-empty { color: var(--text-muted); text-align: center; padding: 3rem 1rem; }
        .role-header { display: flex; align-items: center; gap: 0.75rem; margin-bottom: 1rem; padding-bottom: 1rem; border-bottom: 1px solid var(--border); }
        .role-icon { font-size: 2rem; }
        .role-name { font-family: 'Playfair Display', serif; font-size: 1.3rem; font-weight: 600; }
        .role-section { margin-bottom: 1rem; }
        .role-section-title { font-family: 'JetBrains Mono', monospace; font-size: 0.7rem; text-transform: uppercase; letter-spacing: 0.1em; color: var(--text-muted); margin-bottom: 0.5rem; }
        .role-section-content { font-size: 0.9rem; color: var(--text-secondary); line-height: 1.5; }
        .role-list { list-style: none; padding: 0; margin: 0; }
        .role-list li { font-size: 0.85rem; color: var(--text-secondary); padding: 0.25rem 0; padding-left: 1rem; position: relative; }
        .role-list li::before { content: "→"; position: absolute; left: 0; color: var(--text-muted); }

        .phase-timeline { display: flex; justify-content: space-between; align-items: center; padding: 2rem; background: var(--bg-primary); border: 1px solid var(--border); border-radius: 12px; margin: 1.5rem 0; position: relative; }
        .phase-timeline::before { content: ''; position: absolute; top: 50%; left: 15%; right: 15%; height: 2px; background: var(--border); z-index: 0; }
        .phase-item { display: flex; flex-direction: column; align-items: center; cursor: pointer; z-index: 1; transition: all 0.3s ease; }
        .phase-circle { width: 60px; height: 60px; border-radius: 50%; background: var(--bg-secondary); border: 3px solid var(--border); display: flex; align-items: center; justify-content: center; font-size: 1.5rem; margin-bottom: 0.75rem; transition: all 0.3s ease; }
        .phase-item.active .phase-circle { background: #10B981; border-color: #10B981; transform: scale(1.1); }
        .phase-label { font-weight: 600; font-size: 0.9rem; margin-bottom: 0.25rem; }
        .phase-sub { font-size: 0.75rem; color: var(--text-muted); text-align: center; }
        .phase-content { padding: 1.5rem; background: var(--bg-secondary); border-radius: 12px; margin-top: 1rem; }
        .phase-prompts { display: grid; grid-template-columns: repeat(3, 1fr); gap: 1rem; margin-top: 1rem; }
        .phase-prompt { padding: 1rem; background: var(--bg-primary); border: 1px solid var(--border); border-radius: 8px; text-align: center; }
        .phase-prompt-icon { font-size: 1.5rem; margin-bottom: 0.5rem; }
        .phase-prompt-text { font-size: 0.85rem; font-weight: 500; }

        .translator-container { background: var(--bg-primary); border: 1px solid var(--border); border-radius: 12px; padding: 1.5rem; margin: 1.5rem 0; }
        .translator-input { width: 100%; padding: 1rem; border: 1px solid var(--border); border-radius: 8px; font-size: 0.95rem; background: var(--bg-secondary); color: var(--text-primary); resize: none; font-family: inherit; }
        .translator-input:focus { outline: none; border-color: #10B981; }
        .translator-btn { margin-top: 1rem; padding: 0.75rem 1.5rem; background: #10B981; color: white; border: none; border-radius: 8px; font-weight: 600; cursor: pointer; transition: all 0.2s ease; }
        .translator-btn:hover { background: #059669; }
        .translator-btn:disabled { background: var(--border); cursor: not-allowed; }
        .translator-output { margin-top: 1.5rem; padding: 1.25rem; background: rgba(16, 185, 129, 0.1); border-left: 4px solid #10B981; border-radius: 0 8px 8px 0; }
        .translator-output-label { font-family: 'JetBrains Mono', monospace; font-size: 0.7rem; text-transform: uppercase; letter-spacing: 0.1em; color: #10B981; margin-bottom: 0.5rem; }
        .translator-output-text { font-size: 0.95rem; line-height: 1.6; }
        .examples-grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 1rem; margin-top: 1.5rem; }
        .example-card { padding: 1rem; background: var(--bg-secondary); border: 1px solid var(--border); border-radius: 8px; }
        .example-directive { font-size: 0.85rem; color: #EF4444; margin-bottom: 0.5rem; }
        .example-directive::before { content: "✗ "; }
        .example-impact { font-size: 0.85rem; color: #10B981; }
        .example-impact::before { content: "✓ "; }

        .tone-container { background: var(--bg-primary); border: 1px solid var(--border); border-radius: 12px; padding: 1.5rem; margin: 1.5rem 0; }
        .tone-selector { display: flex; gap: 0.5rem; margin-bottom: 1.5rem; flex-wrap: wrap; }
        .tone-selector-btn { padding: 0.5rem 1rem; background: var(--bg-secondary); border: 1px solid var(--border); border-radius: 6px; cursor: pointer; font-size: 0.8rem; transition: all 0.2s ease; }
        .tone-selector-btn.active { background: #10B981; border-color: #10B981; color: white; }
        .tone-cards { display: grid; grid-template-columns: repeat(3, 1fr); gap: 1rem; }
        .tone-card { padding: 1.25rem; border-radius: 10px; border: 1px solid var(--border); }
        .tone-card.closed { background: rgba(239, 68, 68, 0.08); border-color: rgba(239, 68, 68, 0.3); }
        .tone-card.neutral { background: rgba(245, 158, 11, 0.08); border-color: rgba(245, 158, 11, 0.3); }
        .tone-card.open { background: rgba(16, 185, 129, 0.08); border-color: rgba(16, 185, 129, 0.3); }
        .tone-card-label { font-family: 'JetBrains Mono', monospace; font-size: 0.65rem; text-transform: uppercase; letter-spacing: 0.1em; margin-bottom: 0.75rem; }
        .tone-card.closed .tone-card-label { color: #EF4444; }
        .tone-card.neutral .tone-card-label { color: #F59E0B; }
        .tone-card.open .tone-card-label { color: #10B981; }
        .tone-card-text { font-size: 0.95rem; font-style: italic; margin-bottom: 0.75rem; line-height: 1.5; }
        .tone-card-effect { font-size: 0.8rem; color: var(--text-muted); }

        .energy-container { background: var(--bg-primary); border: 1px solid var(--border); border-radius: 12px; padding: 1.5rem; margin: 1.5rem 0; }
        .energy-sliders { display: flex; flex-direction: column; gap: 1.5rem; }
        .energy-slider-row { display: flex; align-items: center; gap: 1rem; }
        .energy-label { width: 220px; font-size: 0.9rem; }
        .energy-slider { flex: 1; height: 8px; -webkit-appearance: none; appearance: none; background: var(--border); border-radius: 4px; outline: none; }
        .energy-slider::-webkit-slider-thumb { -webkit-appearance: none; appearance: none; width: 20px; height: 20px; background: #10B981; border-radius: 50%; cursor: pointer; }
        .energy-value { width: 30px; text-align: center; font-family: 'JetBrains Mono', monospace; font-size: 0.9rem; }
        .energy-protect { margin-top: 1.5rem; }
        .energy-protect-label { font-size: 0.9rem; margin-bottom: 0.5rem; }
        .energy-protect-input { width: 100%; padding: 0.75rem; border: 1px solid var(--border); border-radius: 8px; font-size: 0.9rem; background: var(--bg-secondary); color: var(--text-primary); }
        .energy-result { margin-top: 1.5rem; padding: 1.25rem; border-radius: 10px; text-align: center; }
        .energy-result-level { font-size: 1.5rem; font-weight: 700; margin-bottom: 0.5rem; }
        .energy-result-message { font-size: 0.9rem; }

        .tension-container { background: var(--bg-primary); border: 1px solid var(--border); border-radius: 12px; padding: 1.5rem; margin: 1.5rem 0; }
        .tension-input-row { display: flex; gap: 0.75rem; margin-bottom: 1.5rem; }
        .tension-input { flex: 1; padding: 0.75rem; border: 1px solid var(--border); border-radius: 8px; font-size: 0.9rem; background: var(--bg-secondary); color: var(--text-primary); }
        .tension-add-btn { padding: 0.75rem 1.25rem; background: #10B981; color: white; border: none; border-radius: 8px; font-weight: 600; cursor: pointer; }
        .tension-map { position: relative; width: 100%; height: 300px; background: var(--bg-secondary); border: 1px solid var(--border); border-radius: 8px; overflow: hidden; }
        .tension-axis-label { position: absolute; font-family: 'JetBrains Mono', monospace; font-size: 0.65rem; text-transform: uppercase; letter-spacing: 0.05em; color: var(--text-muted); }
        .tension-axis-x-left { left: 10px; top: 50%; transform: translateY(-50%); }
        .tension-axis-x-right { right: 10px; top: 50%; transform: translateY(-50%); }
        .tension-axis-y-top { top: 10px; left: 50%; transform: translateX(-50%); }
        .tension-axis-y-bottom { bottom: 10px; left: 50%; transform: translateX(-50%); }
        .tension-line-h { position: absolute; top: 50%; left: 0; right: 0; height: 1px; background: var(--border); }
        .tension-line-v { position: absolute; left: 50%; top: 0; bottom: 0; width: 1px; background: var(--border); }
        .tension-item { position: absolute; padding: 0.5rem 0.75rem; background: rgba(16, 185, 129, 0.2); border: 1px solid #10B981; border-radius: 6px; font-size: 0.8rem; cursor: pointer; max-width: 150px; display: flex; align-items: center; gap: 0.5rem; transform: translate(-50%, -50%); }
        .tension-remove { background: none; border: none; color: #EF4444; cursor: pointer; font-size: 1rem; padding: 0; line-height: 1; }

        .contract-container { background: var(--bg-primary); border: 1px solid var(--border); border-radius: 12px; padding: 1.5rem; margin: 1.5rem 0; }
        .contract-field { margin-bottom: 1.25rem; }
        .contract-label { font-size: 0.9rem; font-weight: 500; margin-bottom: 0.5rem; display: flex; align-items: center; gap: 0.5rem; }
        .contract-input { width: 100%; padding: 0.75rem; border: 1px solid var(--border); border-radius: 8px; font-size: 0.9rem; background: var(--bg-secondary); color: var(--text-primary); }
        .contract-preview { margin-top: 1.5rem; padding: 1.5rem; background: linear-gradient(135deg, rgba(16, 185, 129, 0.1), rgba(99, 102, 241, 0.1)); border-radius: 12px; border: 1px solid var(--border); }
        .contract-preview-title { font-family: 'Playfair Display', serif; font-size: 1.1rem; text-align: center; margin-bottom: 1rem; }
        .contract-preview-item { margin-bottom: 0.75rem; font-size: 0.9rem; }
        .contract-preview-label { font-weight: 600; color: #10B981; }

        .templates-grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 1rem; margin-top: 1.5rem; }
        .template-card { padding: 1.5rem; background: var(--bg-primary); border: 1px solid var(--border); border-radius: 12px; transition: all 0.2s ease; }
        .template-card:hover { border-color: #10B981; transform: translateY(-2px); }
        .template-icon { font-size: 2rem; margin-bottom: 0.75rem; }
        .template-name { font-weight: 600; margin-bottom: 0.5rem; }
        .template-desc { font-size: 0.85rem; color: var(--text-secondary); margin-bottom: 1rem; }
        .template-btn { display: inline-block; padding: 0.5rem 1rem; background: var(--bg-secondary); border: 1px solid var(--border); border-radius: 6px; color: var(--text-primary); text-decoration: none; font-size: 0.8rem; transition: all 0.2s ease; }
        .template-btn:hover { border-color: #10B981; background: rgba(16, 185, 129, 0.1); }

        /* AI Coach */
        .coach-container { background: var(--bg-primary); border: 1px solid var(--border); border-radius: 12px; padding: 1.5rem; margin: 1.5rem 0; }
        .coach-header { display: flex; align-items: center; gap: 1rem; margin-bottom: 1.5rem; padding-bottom: 1rem; border-bottom: 1px solid var(--border); }
        .coach-avatar { width: 50px; height: 50px; background: linear-gradient(135deg, #10B981, #6366F1); border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 1.5rem; }
        .coach-info h3 { margin: 0 0 0.25rem 0; font-size: 1.1rem; }
        .coach-info p { margin: 0; font-size: 0.8rem; color: var(--text-muted); }
        .coach-messages { max-height: 400px; overflow-y: auto; margin-bottom: 1rem; display: flex; flex-direction: column; gap: 1rem; }
        .coach-message { padding: 1rem 1.25rem; border-radius: 12px; font-size: 0.9rem; line-height: 1.6; max-width: 85%; }
        .coach-message.user { background: rgba(16, 185, 129, 0.1); border: 1px solid rgba(16, 185, 129, 0.2); align-self: flex-end; }
        .coach-message.assistant { background: var(--bg-secondary); border: 1px solid var(--border); align-self: flex-start; }
        .coach-input-row { display: flex; gap: 0.75rem; }
        .coach-input { flex: 1; padding: 0.875rem 1rem; border: 1px solid var(--border); border-radius: 8px; font-size: 0.9rem; background: var(--bg-secondary); color: var(--text-primary); resize: none; font-family: inherit; }
        .coach-input:focus { outline: none; border-color: #10B981; }
        .coach-send-btn { padding: 0.875rem 1.5rem; background: linear-gradient(135deg, #10B981, #059669); color: white; border: none; border-radius: 8px; font-weight: 600; cursor: pointer; transition: all 0.2s ease; }
        .coach-send-btn:hover { transform: translateY(-1px); box-shadow: 0 4px 12px rgba(16, 185, 129, 0.3); }
        .coach-send-btn:disabled { opacity: 0.5; cursor: not-allowed; transform: none; box-shadow: none; }
        .coach-suggestions { display: flex; flex-wrap: wrap; gap: 0.5rem; margin-top: 1rem; }
        .coach-suggestion { padding: 0.5rem 0.875rem; background: var(--bg-secondary); border: 1px solid var(--border); border-radius: 20px; font-size: 0.8rem; cursor: pointer; transition: all 0.2s ease; }
        .coach-suggestion:hover { border-color: #10B981; background: rgba(16, 185, 129, 0.05); }
        .coach-empty { text-align: center; padding: 3rem 2rem; color: var(--text-muted); }
        .coach-empty-icon { font-size: 3rem; margin-bottom: 1rem; }
        .coach-frameworks { display: grid; grid-template-columns: repeat(2, 1fr); gap: 1rem; margin-top: 1.5rem; }
        .coach-framework { padding: 1rem; background: var(--bg-secondary); border: 1px solid var(--border); border-radius: 8px; }
        .coach-framework h4 { font-size: 0.85rem; margin-bottom: 0.5rem; display: flex; align-items: center; gap: 0.5rem; }
        .coach-framework p { font-size: 0.8rem; color: var(--text-secondary); margin: 0; }

        .overview-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 1rem; margin: 1.5rem 0; }
        .overview-card { padding: 1.25rem; background: var(--bg-primary); border: 1px solid var(--border); border-radius: 10px; text-align: center; }
        .overview-icon { font-size: 2rem; margin-bottom: 0.5rem; }
        .overview-label { font-weight: 600; margin-bottom: 0.25rem; }
        .overview-value { font-size: 0.85rem; color: var(--text-secondary); }

        .checklist { background: var(--bg-primary); border: 1px solid var(--border); border-radius: 12px; padding: 1.5rem; margin: 1.5rem 0; }
        .checklist-title { font-weight: 600; margin-bottom: 1rem; display: flex; align-items: center; gap: 0.5rem; }
        .checklist-items { display: flex; flex-direction: column; gap: 0.75rem; }
        .checklist-item { display: flex; align-items: flex-start; gap: 0.75rem; font-size: 0.9rem; }
        .checklist-item::before { content: "☐"; color: #10B981; }

        .download-btns { display: flex; flex-wrap: wrap; gap: 0.75rem; margin-top: 1.25rem; }
        .download-btn { display: inline-flex; align-items: center; gap: 0.5rem; padding: 0.6rem 1rem; background: var(--bg-primary); border: 1px solid var(--border); border-radius: 8px; color: var(--text-primary); text-decoration: none; font-size: 0.8rem; transition: all 0.2s ease; }
        .download-btn:hover { border-color: #10B981; background: rgba(16, 185, 129, 0.05); }

        @media (max-width: 768px) {
          .compass-container { flex-direction: column; }
          .compass-visual { margin: 0 auto; }
          .phase-prompts, .examples-grid, .tone-cards, .templates-grid, .overview-grid, .coach-frameworks { grid-template-columns: 1fr; }
          .phase-timeline { flex-direction: column; gap: 1.5rem; }
          .phase-timeline::before { display: none; }
          .energy-slider-row { flex-direction: column; align-items: flex-start; }
          .energy-label { width: 100%; }
          .coach-message { max-width: 95%; }
        }
      `}</style>

      <div className="page-header">
        <span className="page-badge">Stage Lab • MOD-002</span>
        <h1 className="page-title">The Art of Effective Collaboration</h1>
        <p className="page-subtitle">
          How to enter, navigate, and exit collaborations with clarity, openness, and artistic integrity.
        </p>
        <div className="download-btns">
          <a href="/collaboration-brief-template.md" download className="download-btn">📋 Brief Template</a>
          <a href="/collaboration-extended-study.md" download className="download-btn">📖 Extended Study</a>
          <a href="/collaboration-reflection-journal.md" download className="download-btn">💭 Reflection Journal</a>
        </div>
      </div>

      <nav className="section-nav">
        {(['overview', 'entering', 'navigating', 'lab', 'exiting', 'templates', 'coach'] as const).map((section) => (
          <button 
            key={section}
            className={`section-btn ${activeSection === section ? 'active' : ''}`}
            onClick={() => setActiveSection(section)}
          >
            {section === 'overview' && '📋'} 
            {section === 'entering' && '🚪'} 
            {section === 'navigating' && '🧭'} 
            {section === 'lab' && '🔬'} 
            {section === 'exiting' && '🚶'} 
            {section === 'templates' && '📁'}
            {section === 'coach' && '🤖'}
            {section === 'coach' ? ' AI Coach' : ` ${section.charAt(0).toUpperCase() + section.slice(1)}`}
          </button>
        ))}
      </nav>

      {activeSection === 'overview' && (
        <>
          <h2 className="section-title">The Collaboration Journey</h2>
          <p className="section-intro">
            Collaboration is not about giving up your voice — it's about learning to hold your artistic intention 
            while remaining genuinely open to contributions of others.
          </p>

          <div className="phase-timeline">
            {(['enter', 'navigate', 'exit'] as const).map((phase) => (
              <div key={phase} className={`phase-item ${activePhase === phase ? 'active' : ''}`} onClick={() => setActivePhase(phase)}>
                <div className="phase-circle">
                  {phase === 'enter' && '🚪'}
                  {phase === 'navigate' && '🧭'}
                  {phase === 'exit' && '🚶'}
                </div>
                <div className="phase-label">{phase.toUpperCase()}</div>
                <div className="phase-sub">
                  {phase === 'enter' && 'Prepare • Question • Listen'}
                  {phase === 'navigate' && 'Respond • Adjust • Protect'}
                  {phase === 'exit' && 'Reflect • Document • Rest'}
                </div>
              </div>
            ))}
          </div>

          <div className="phase-content">
            {activePhase === 'enter' && (
              <>
                <h3 style={{ marginBottom: '0.75rem' }}>Entering Collaboration</h3>
                <p style={{ color: 'var(--text-secondary)', marginBottom: '1rem' }}>How you enter shapes everything that follows.</p>
                <div className="phase-prompts">
                  <div className="phase-prompt"><div className="phase-prompt-icon">🎯</div><div className="phase-prompt-text">Define your goals</div></div>
                  <div className="phase-prompt"><div className="phase-prompt-icon">❓</div><div className="phase-prompt-text">Prepare questions</div></div>
                  <div className="phase-prompt"><div className="phase-prompt-icon">👂</div><div className="phase-prompt-text">Create space to listen</div></div>
                </div>
              </>
            )}
            {activePhase === 'navigate' && (
              <>
                <h3 style={{ marginBottom: '0.75rem' }}>Navigating Within</h3>
                <p style={{ color: 'var(--text-secondary)', marginBottom: '1rem' }}>Balance responsiveness with protection of your artistic core.</p>
                <div className="phase-prompts">
                  <div className="phase-prompt"><div className="phase-prompt-icon">💬</div><div className="phase-prompt-text">Use impact language</div></div>
                  <div className="phase-prompt"><div className="phase-prompt-icon">🔄</div><div className="phase-prompt-text">Transform, don't abandon</div></div>
                  <div className="phase-prompt"><div className="phase-prompt-icon">🛡️</div><div className="phase-prompt-text">Know your non-negotiables</div></div>
                </div>
              </>
            )}
            {activePhase === 'exit' && (
              <>
                <h3 style={{ marginBottom: '0.75rem' }}>Exiting With Clarity</h3>
                <p style={{ color: 'var(--text-secondary)', marginBottom: '1rem' }}>How you leave determines how you return.</p>
                <div className="phase-prompts">
                  <div className="phase-prompt"><div className="phase-prompt-icon">📝</div><div className="phase-prompt-text">Document discoveries</div></div>
                  <div className="phase-prompt"><div className="phase-prompt-icon">🔍</div><div className="phase-prompt-text">Identify tensions</div></div>
                  <div className="phase-prompt"><div className="phase-prompt-icon">🌱</div><div className="phase-prompt-text">Leave space for return</div></div>
                </div>
              </>
            )}
          </div>

          <h3 style={{ marginTop: '2rem', marginBottom: '1rem' }}>The Collaboration Compass</h3>
          <p style={{ color: 'var(--text-secondary)', marginBottom: '1rem' }}>Click each role to understand their timeline, needs, and communication style.</p>

          <div className="compass-container">
            <div className="compass-visual">
              <div className="compass-center">YOU<br/><span style={{ fontSize: '0.6rem', color: 'var(--text-muted)' }}>Choreographer</span></div>
              {(Object.keys(COLLABORATOR_ROLES) as RoleKey[]).map((role) => (
                <div key={role} className={`compass-role role-${role} ${selectedRole === role ? 'active' : ''}`} onClick={() => setSelectedRole(selectedRole === role ? null : role)}>
                  {COLLABORATOR_ROLES[role].icon}
                  <span>{COLLABORATOR_ROLES[role].name}</span>
                </div>
              ))}
            </div>
            <div className="compass-details">
              {selectedRole ? (
                <>
                  <div className="role-header">
                    <span className="role-icon">{COLLABORATOR_ROLES[selectedRole].icon}</span>
                    <span className="role-name" style={{ color: COLLABORATOR_ROLES[selectedRole].color }}>{COLLABORATOR_ROLES[selectedRole].name}</span>
                  </div>
                  <div className="role-section">
                    <div className="role-section-title">Timeline</div>
                    <div className="role-section-content">{COLLABORATOR_ROLES[selectedRole].timeline}</div>
                  </div>
                  <div className="role-section">
                    <div className="role-section-title">What They Need From You</div>
                    <ul className="role-list">{COLLABORATOR_ROLES[selectedRole].needsFromYou.map((n, i) => <li key={i}>{n}</li>)}</ul>
                  </div>
                  <div className="role-section">
                    <div className="role-section-title">What You Need From Them</div>
                    <ul className="role-list">{COLLABORATOR_ROLES[selectedRole].youNeedFromThem.map((n, i) => <li key={i}>{n}</li>)}</ul>
                  </div>
                  <div className="role-section">
                    <div className="role-section-title">Communication Style</div>
                    <div className="role-section-content">{COLLABORATOR_ROLES[selectedRole].communicationStyle}</div>
                  </div>
                </>
              ) : (
                <div className="compass-details-empty">← Click a role to see details</div>
              )}
            </div>
          </div>
        </>
      )}

      {activeSection === 'entering' && (
        <>
          <h2 className="section-title">Entering Collaboration</h2>
          <p className="section-intro">Before you walk in, prepare yourself. What you bring — and leave space for — determines everything.</p>

          <h3 style={{ marginTop: '1.5rem', marginBottom: '1rem' }}>Energy Check-In</h3>
          <div className="energy-container">
            <div className="energy-sliders">
              <div className="energy-slider-row">
                <div className="energy-label">How clear is my intention?</div>
                <input type="range" className="energy-slider" min="1" max="5" value={energyCheck.clarity} onChange={(e) => setEnergyCheck({ ...energyCheck, clarity: parseInt(e.target.value) })} />
                <div className="energy-value">{energyCheck.clarity}</div>
              </div>
              <div className="energy-slider-row">
                <div className="energy-label">How open am I to unexpected directions?</div>
                <input type="range" className="energy-slider" min="1" max="5" value={energyCheck.openness} onChange={(e) => setEnergyCheck({ ...energyCheck, openness: parseInt(e.target.value) })} />
                <div className="energy-value">{energyCheck.openness}</div>
              </div>
              <div className="energy-slider-row">
                <div className="energy-label">How is my body feeling?</div>
                <input type="range" className="energy-slider" min="1" max="5" value={energyCheck.body} onChange={(e) => setEnergyCheck({ ...energyCheck, body: parseInt(e.target.value) })} />
                <div className="energy-value">{energyCheck.body}</div>
              </div>
            </div>
            <div className="energy-protect">
              <div className="energy-protect-label">What do I need to protect today?</div>
              <input type="text" className="energy-protect-input" placeholder="e.g., My energy, the opening sequence..." value={energyCheck.protect} onChange={(e) => setEnergyCheck({ ...energyCheck, protect: e.target.value })} />
            </div>
            <div className="energy-result" style={{ background: `${energyReadiness.color}15`, border: `1px solid ${energyReadiness.color}` }}>
              <div className="energy-result-level" style={{ color: energyReadiness.color }}>{energyReadiness.level}</div>
              <div className="energy-result-message">{energyReadiness.message}</div>
            </div>
          </div>

          <h3 style={{ marginTop: '2rem', marginBottom: '1rem' }}>Your Collaboration Contract</h3>
          <div className="contract-container">
            <div className="contract-field">
              <div className="contract-label">❓ My guiding question today:</div>
              <input type="text" className="contract-input" placeholder="What am I trying to discover?" value={contract.question} onChange={(e) => setContract({ ...contract, question: e.target.value })} />
            </div>
            <div className="contract-field">
              <div className="contract-label">🛡️ What I will protect:</div>
              <input type="text" className="contract-input" placeholder="What is non-negotiable?" value={contract.protect} onChange={(e) => setContract({ ...contract, protect: e.target.value })} />
            </div>
            <div className="contract-field">
              <div className="contract-label">🌱 What I am open to:</div>
              <input type="text" className="contract-input" placeholder="Where can I be surprised?" value={contract.openTo} onChange={(e) => setContract({ ...contract, openTo: e.target.value })} />
            </div>
            <div className="contract-field">
              <div className="contract-label">⏸️ My signal to pause:</div>
              <input type="text" className="contract-input" placeholder="How will I know when to step back?" value={contract.pauseSignal} onChange={(e) => setContract({ ...contract, pauseSignal: e.target.value })} />
            </div>
            {(contract.question || contract.protect || contract.openTo || contract.pauseSignal) && (
              <div className="contract-preview">
                <div className="contract-preview-title">📜 Today's Contract</div>
                {contract.question && <div className="contract-preview-item"><span className="contract-preview-label">Question:</span> {contract.question}</div>}
                {contract.protect && <div className="contract-preview-item"><span className="contract-preview-label">Protecting:</span> {contract.protect}</div>}
                {contract.openTo && <div className="contract-preview-item"><span className="contract-preview-label">Open to:</span> {contract.openTo}</div>}
                {contract.pauseSignal && <div className="contract-preview-item"><span className="contract-preview-label">Pause when:</span> {contract.pauseSignal}</div>}
              </div>
            )}
          </div>
        </>
      )}

      {activeSection === 'navigating' && (
        <>
          <h2 className="section-title">Navigating Within Collaboration</h2>
          <p className="section-intro">Your language and decisions shape the process. Learn impact language and when to transform vs. abandon ideas.</p>

          <h3 style={{ marginTop: '1.5rem', marginBottom: '1rem' }}>🤖 Language Translator</h3>
          <div className="translator-container">
            <textarea className="translator-input" rows={3} placeholder="Type a directive note... (e.g., 'Make it faster')" value={languageInput} onChange={(e) => setLanguageInput(e.target.value)} />
            <button className="translator-btn" onClick={translateLanguage} disabled={isTranslating || !languageInput.trim()}>
              {isTranslating ? 'Translating...' : '✨ Translate to Impact Language'}
            </button>
            {languageOutput && (
              <div className="translator-output">
                <div className="translator-output-label">Impact Language Suggestion</div>
                <div className="translator-output-text">{languageOutput}</div>
              </div>
            )}
            <h4 style={{ marginTop: '1.5rem', marginBottom: '0.75rem', fontSize: '0.95rem' }}>Examples</h4>
            <div className="examples-grid">
              {LANGUAGE_EXAMPLES.slice(0, 4).map((ex, i) => (
                <div key={i} className="example-card">
                  <div className="example-directive">{ex.directive}</div>
                  <div className="example-impact">{ex.impact}</div>
                </div>
              ))}
            </div>
          </div>

          <h3 style={{ marginTop: '2rem', marginBottom: '1rem' }}>🔊 Tone Matters</h3>
          <div className="tone-container">
            <div className="tone-selector">
              {TONE_EXAMPLES.map((ex, i) => (
                <button key={i} className={`tone-selector-btn ${activeToneExample === i ? 'active' : ''}`} onClick={() => setActiveToneExample(i)}>{ex.topic}</button>
              ))}
            </div>
            <div className="tone-cards">
              <div className="tone-card closed">
                <div className="tone-card-label">Closed</div>
                <div className="tone-card-text">"{TONE_EXAMPLES[activeToneExample].closed.text}"</div>
                <div className="tone-card-effect">{TONE_EXAMPLES[activeToneExample].closed.tone}</div>
              </div>
              <div className="tone-card neutral">
                <div className="tone-card-label">Neutral</div>
                <div className="tone-card-text">"{TONE_EXAMPLES[activeToneExample].neutral.text}"</div>
                <div className="tone-card-effect">{TONE_EXAMPLES[activeToneExample].neutral.tone}</div>
              </div>
              <div className="tone-card open">
                <div className="tone-card-label">Open</div>
                <div className="tone-card-text">"{TONE_EXAMPLES[activeToneExample].open.text}"</div>
                <div className="tone-card-effect">{TONE_EXAMPLES[activeToneExample].open.tone}</div>
              </div>
            </div>
          </div>
        </>
      )}

      {activeSection === 'lab' && (
        <>
          <h2 className="section-title">Lab Work: Composer Collaboration</h2>
          <p className="section-intro">Working with composers in real time requires preparation, presence, and cross-artistic communication.</p>

          <div className="checklist">
            <div className="checklist-title">🎒 What to Bring to Lab</div>
            <div className="checklist-items">
              <div className="checklist-item">Journal or notebook</div>
              <div className="checklist-item">Phone recorder (audio + video)</div>
              <div className="checklist-item">Audiovisual inspirations</div>
              <div className="checklist-item">Prepared questions</div>
              <div className="checklist-item">Space for unexpected suggestions</div>
            </div>
          </div>

          <div className="overview-grid">
            <div className="overview-card"><div className="overview-icon">🔊</div><div className="overview-label">Technology</div><div className="overview-value">Speakers, projectors, cameras</div></div>
            <div className="overview-card"><div className="overview-icon">👥</div><div className="overview-label">People</div><div className="overview-value">Professors, TAs, classmates</div></div>
            <div className="overview-card"><div className="overview-icon">🏠</div><div className="overview-label">Space</div><div className="overview-value">Studio as testing ground</div></div>
          </div>

          <div style={{ marginTop: '2rem', padding: '1.5rem', background: 'rgba(16, 185, 129, 0.08)', borderRadius: '12px', border: '1px solid rgba(16, 185, 129, 0.3)' }}>
            <h3 style={{ marginBottom: '1rem', color: '#10B981' }}>🎯 Work With Intention</h3>
            <p style={{ fontSize: '0.95rem', marginBottom: '1rem' }}>Enter with a guiding question broad enough to spark multiple directions.</p>
            <div style={{ fontStyle: 'italic', color: 'var(--text-secondary)' }}>"How might the sound create a sense of suspension — like the moment before a decision?"</div>
          </div>
        </>
      )}

      {activeSection === 'exiting' && (
        <>
          <h2 className="section-title">Exiting Collaboration</h2>
          <p className="section-intro">How you leave determines how you return. Process, identify tensions, and give yourself space.</p>

          <h3 style={{ marginTop: '1.5rem', marginBottom: '1rem' }}>🗺️ Tension Mapping</h3>
          <p style={{ color: 'var(--text-secondary)', marginBottom: '1rem' }}>A tension is information, not a problem. Map where tensions live.</p>

          <div className="tension-container">
            <div className="tension-input-row">
              <input type="text" className="tension-input" placeholder="Describe a tension..." value={newTension} onChange={(e) => setNewTension(e.target.value)} onKeyPress={(e) => e.key === 'Enter' && addTension()} />
              <button className="tension-add-btn" onClick={addTension}>Add</button>
            </div>
            <div className="tension-map">
              <div className="tension-axis-label tension-axis-x-left">Artistic</div>
              <div className="tension-axis-label tension-axis-x-right">Interpersonal</div>
              <div className="tension-axis-label tension-axis-y-top">Urgent</div>
              <div className="tension-axis-label tension-axis-y-bottom">Can Wait</div>
              <div className="tension-line-h"></div>
              <div className="tension-line-v"></div>
              {tensions.map((t) => (
                <div key={t.id} className="tension-item" style={{ left: `${t.x}%`, top: `${t.y}%` }}>
                  {t.text}
                  <button className="tension-remove" onClick={() => removeTension(t.id)}>×</button>
                </div>
              ))}
            </div>
          </div>

          <h3 style={{ marginTop: '2rem', marginBottom: '1rem' }}>Reflection Prompts</h3>
          <div style={{ display: 'grid', gap: '1rem' }}>
            {[
              { q: 'What ideas strengthened the piece?', h: 'Identify what to carry forward.' },
              { q: 'What surprised you?', h: 'Surprises contain important information.' },
              { q: 'What felt misaligned, and why?', h: 'Separate emotional discomfort from artistic misalignment.' },
              { q: 'What needs more time?', h: 'Leave space for future return.' },
            ].map((item, i) => (
              <div key={i} style={{ padding: '1.25rem', background: 'var(--bg-primary)', borderRadius: '10px', border: '1px solid var(--border)' }}>
                <div style={{ fontWeight: 600, marginBottom: '0.5rem' }}>{item.q}</div>
                <div style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>{item.h}</div>
              </div>
            ))}
          </div>
        </>
      )}

      {activeSection === 'templates' && (
        <>
          <h2 className="section-title">Templates & Downloads</h2>
          <p className="section-intro">Resources to support your collaboration practice.</p>

          <div className="templates-grid">
            <div className="template-card">
              <div className="template-icon">📋</div>
              <div className="template-name">Choreographic Brief</div>
              <div className="template-desc">Share your vision, needs, and questions with collaborators.</div>
              <a href="/collaboration-brief-template.md" download className="template-btn">Download</a>
            </div>
            <div className="template-card">
              <div className="template-icon">✅</div>
              <div className="template-name">Session Prep Checklist</div>
              <div className="template-desc">Everything to prepare before entering collaboration.</div>
              <a href="/collaboration-prep-checklist.md" download className="template-btn">Download</a>
            </div>
            <div className="template-card">
              <div className="template-icon">📝</div>
              <div className="template-name">Reflection Journal</div>
              <div className="template-desc">Process what happened and prepare for next time.</div>
              <a href="/collaboration-reflection-journal.md" download className="template-btn">Download</a>
            </div>
            <div className="template-card">
              <div className="template-icon">📖</div>
              <div className="template-name">Complete Study Guide</div>
              <div className="template-desc">Full extended technical study for this lab.</div>
              <a href="/collaboration-extended-study.md" download className="template-btn">Download</a>
            </div>
          </div>
        </>
      )}

      {activeSection === 'coach' && (
        <>
          <h2 className="section-title">AI Collaboration Coach</h2>
          <p className="section-intro">
            Your thinking partner for navigating collaborative challenges. Ask questions, practice language, 
            prepare for difficult conversations, or reflect on what happened in a session.
          </p>

          <div className="coach-container">
            <div className="coach-header">
              <div className="coach-avatar">🎭</div>
              <div className="coach-info">
                <h3>Collaboration Coach</h3>
                <p>Trained on course frameworks • Artist-centered approach</p>
              </div>
            </div>

            <div className="coach-messages">
              {coachMessages.length === 0 ? (
                <div className="coach-empty">
                  <div className="coach-empty-icon">💬</div>
                  <p>Ask me anything about collaboration, language, process, or reflection.</p>
                  <p style={{ fontSize: '0.8rem', marginTop: '0.5rem' }}>I'm here to help you think — not to tell you what to make.</p>
                </div>
              ) : (
                coachMessages.map((msg, i) => (
                  <div key={i} className={`coach-message ${msg.role}`}>
                    {msg.content}
                  </div>
                ))
              )}
              {coachLoading && (
                <div className="coach-message assistant" style={{ fontStyle: 'italic', opacity: 0.7 }}>
                  Thinking...
                </div>
              )}
            </div>

            <div className="coach-input-row">
              <textarea
                className="coach-input"
                rows={2}
                placeholder="Ask about collaboration, language, process, or reflection..."
                value={coachInput}
                onChange={(e) => setCoachInput(e.target.value)}
                onKeyPress={(e) => {
                  if (e.key === 'Enter' && !e.shiftKey) {
                    e.preventDefault();
                    askCoach();
                  }
                }}
              />
              <button 
                className="coach-send-btn" 
                onClick={askCoach}
                disabled={coachLoading || !coachInput.trim()}
              >
                {coachLoading ? '...' : 'Ask'}
              </button>
            </div>

            <div className="coach-suggestions">
              {[
                "How do I tell my composer their music isn't working?",
                "My dancer keeps changing the choreography",
                "I feel like I'm losing my artistic voice",
                "How do I prepare for a difficult feedback session?",
                "What's the difference between transforming and abandoning an idea?",
                "Help me reframe this note I want to give",
              ].map((suggestion, i) => (
                <button
                  key={i}
                  className="coach-suggestion"
                  onClick={() => setCoachInput(suggestion)}
                >
                  {suggestion}
                </button>
              ))}
            </div>
          </div>

          <h3 style={{ marginTop: '2rem', marginBottom: '1rem' }}>Frameworks I Know</h3>
          <div className="coach-frameworks">
            <div className="coach-framework">
              <h4>🚪 Enter → Navigate → Exit</h4>
              <p>The three phases of collaboration and how to move through them with intention.</p>
            </div>
            <div className="coach-framework">
              <h4>🧭 Collaboration Compass</h4>
              <p>Understanding dancers, composers, designers, and technical partners.</p>
            </div>
            <div className="coach-framework">
              <h4>💬 Impact Language</h4>
              <p>Transforming directive notes into collaborative conversation.</p>
            </div>
            <div className="coach-framework">
              <h4>📋 Critical Response Process</h4>
              <p>Liz Lerman's four-step method for giving and receiving feedback.</p>
            </div>
            <div className="coach-framework">
              <h4>🗺️ Tension Mapping</h4>
              <p>Understanding tensions as information, not problems.</p>
            </div>
            <div className="coach-framework">
              <h4>💜 Self-Care in Process</h4>
              <p>Protecting your energy and exiting without emotional residue.</p>
            </div>
          </div>

          <div style={{ marginTop: '2rem', padding: '1.25rem', background: 'rgba(99, 102, 241, 0.08)', borderRadius: '12px', border: '1px solid rgba(99, 102, 241, 0.2)' }}>
            <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', margin: 0 }}>
              <strong style={{ color: '#6366F1' }}>Note:</strong> This coach helps you think through collaboration challenges — 
              it won't make artistic decisions for you. For logistical questions (studio booking, deadlines, requirements), 
              please reach out to <strong>Annie (TA)</strong> or <strong>Prof. Emoghene</strong>.
            </p>
          </div>
        </>
      )}
    </div>
  );
}
