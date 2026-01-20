# The Two Body Problem: Extended Technical Study

## Lab Module MOD-001 | Stage Lab | Choreography II

---

## Overview

This lab explores how **a single creative seed transforms based on vantage point** through two interactive components: an audio experience demonstrating spatial sound perception, and a 3D visual experience demonstrating how movement reads differently based on viewing angle.

**Core Question:** "Feeling caught between two worlds"

**Core Problem:** The same event (sound, movement) exists differently depending on where the observer stands. How do we, as choreographers, account for this multiplicity?

---

# Part I: Audio Experience — Two Perspectives

## Concept

Sound, like movement, transforms based on position. The audio component creates a layered binaural soundscape that demonstrates how the same sonic event exists differently depending on where you stand.

### 🎧 Headphones Required

This experience requires headphones. The spatial audio creates distinct left/right separation that speakers cannot reproduce.

---

## Controls

### Spatial Position (Left ← → Right)

Simulates moving your listening position from one side of a performance space to the other.

- **Far Left (-1):** Sound concentrated in left ear
- **Center (0):** Sound balanced between both ears  
- **Far Right (+1):** Sound concentrated in right ear

The audio uses multiple layers that pan in *different directions* — creating spatial depth and the tension of being caught between two sonic worlds.

### Intensity (Soft → Full)

Controls overall volume.

### Sound Modes

| Mode | Character | Choreographic Connection |
|------|-----------|--------------------------|
| **Drone** | Sustained, continuous tone | The unchanging question that persists regardless of position |
| **Pulse** | Rhythmic heartbeat (1.2Hz) | The body's internal rhythm — does the audience hear your heartbeat? |
| **Breath** | Slow inhale/exhale cycle | The breath that initiates and sustains movement |
| **Tension** | Dissonant, unresolved harmonics | The friction of being caught between two worlds |

---

## The Binaural Layer

Underneath the main tones, a **binaural beat** plays slightly different frequencies in each ear (4Hz difference). Your brain "hears" a pulsing that doesn't exist in either ear alone — it emerges from the relationship between the two.

**Choreographic parallel:** What emerges from the relationship between two vantage points that exists in neither alone?

---

## Audio Reflection Prompts

1. If your movement phrase were a sound, would both vantage points hear the same rhythm?
2. What is revealed to the left ear that is concealed from the right?
3. At what position does the sound feel most "caught between two worlds"?
4. How does intensity change what you notice about spatial position?

---

# Part II: Visual Experience — Bi-Focal Vantage

## Concept

The 3D visual component allows you to orbit around a moving figure to experience how the same movement appears differently from each vantage point. What you see depends entirely on where you stand.

---

## Controls

| Action | Result |
|--------|--------|
| **Drag** | Orbit around the figure |
| **Scroll** | Zoom in/out |
| **Right-click + Drag** | Pan the view |
| **Reset** | Return to default front view |

---

## Vantage Point Presets

| Position | What You See | Choreographic Significance |
|----------|--------------|---------------------------|
| **Front** | Face, expression, forward intention | The audience's traditional view — what is being presented |
| **Back** | Spine, shoulders, departure | What the performer leaves behind — vulnerability, history |
| **Side** | Profile, trajectory, spatial path | The journey between — neither here nor there |
| **Top** | Floor pattern, spatial design | The choreographer's view — architecture of movement |

---

## Movement Phrases

### Phrase A: Tension
- **Quality:** Contracted, suspended, caught
- **Speed:** Slow | **Color:** Orange
- **Observe:** How does contraction read from behind vs. in front?

### Phrase B: Release
- **Quality:** Expansive, falling, surrendering
- **Speed:** Medium | **Color:** Green
- **Observe:** Does release look the same from all sides?

### Phrase C: Resolution
- **Quality:** Grounded, still, between
- **Speed:** Variable | **Color:** Purple
- **Observe:** How does stillness register differently based on vantage?

---

## Visualization Styles

| Style | Use For |
|-------|---------|
| **Wireframe** | Seeing through the body — spatial pathways, joint relationships |
| **Solid** | Mass, volume, how light falls on the moving form |
| **Points** | Pure motion capture — the data beneath the body |

---

## The Motion Capture Source

The figure displays **Adzogbo danced by Mustapha** — a Ghanaian tradition from the Global Movement Research corpus. This is real movement data: 30fps, 32 tracked joints.

You are watching **recorded embodied knowledge** rendered in digital space.

---

## Visual Reflection Prompts

1. What is revealed from the front that is concealed from the back?
2. At what angle does the movement feel most "caught between two worlds"?
3. How does the same gesture change meaning based on vantage point?
4. What does the top view reveal about spatial design?
5. If you could only show this phrase from ONE angle, which would you choose? Why?

---

# Part III: Synthesis — The Two Body Problem

## Connecting Audio and Visual

Both experiences demonstrate the same principle through different senses:

| Dimension | Audio | Visual |
|-----------|-------|--------|
| **Position** | Left/Right pan | Camera orbit angle |
| **The "caught between"** | Sound exists in neither ear alone | Movement reads differently from every angle |
| **What emerges** | Binaural beat (perceptual phenomenon) | Choreographic meaning (interpretive phenomenon) |
| **The observer's role** | Listener position changes the sound | Viewer position changes the dance |

---

## The Choreographer's Problem

When you create movement for **bi-focal staging** (audience on both ends), you cannot optimize for one vantage without affecting the other. Every choice reveals something to one side while concealing it from the other.

This is not a problem to solve — it is a **condition to compose with**.

---

## Studio Application

### Step 1: Choose a Single Movement Task
What is central to "being caught between two worlds"? Find one action, one gesture, one quality.

### Step 2: Develop 3 Sequential Phrases
- **Phrase A:** Tension (contracted, suspended) — Slow
- **Phrase B:** Release (expansive, falling) — Medium
- **Phrase C:** Resolution (grounded, still) — Variable

Each phrase must be distinct, repeatable, and able to begin/end from either vantage point.

### Step 3: Repeat with Modulation
Perform each phrase 3 times, modulating each repetition.
- What changes?
- What stays?

### Step 4: Apply Creator Viewpoint
Move around the phrase as it's performed.
- What does it look like from the front? The back? The side?
- How does it feel to watch from each position?

---

## Final Reflection

### Seed Idea Transformed
The question "feeling caught between two worlds" has now been:
1. Heard (audio spatial position)
2. Seen (visual vantage orbit)
3. Embodied (movement phrases)
4. Observed (creator viewpoint)

### Process Documentation
Answer these four questions:
1. **What was asked?** — Return to the original seed
2. **What was made?** — Describe the movement material
3. **How was it made?** — Trace the process
4. **What was the process?** — Identify your methodology

### Next Steps
Choose one:
- **Build On** — Extend the material you've created
- **Scratch & Restart** — Return to the seed with fresh approach
- **Modify Question** — Change "caught between two worlds" to something else
- **Extend Question** — Add complexity: "caught between two worlds *while*..."

---

## Technical Appendix

### Audio System
- Web Audio API with 4 oscillator layers
- Stereo panning with inverse relationships
- Low-frequency oscillators for rhythmic modulation
- Binaural beat generator (4Hz theta wave)

### Visual System
- Three.js WebGL rendering
- FBXLoader for motion capture data
- OrbitControls for camera manipulation
- Real-time skeleton/mesh rendering
- Dynamic material switching

### Motion Capture Data
- Source: Global Movement Research corpus
- Performer: Mustapha (Ghanaian traditions)
- Dance: Adzogbo
- Capture rate: 30fps
- Joints tracked: 32

---

*The Two Body Problem: What exists between two perspectives that belongs to neither alone?*
