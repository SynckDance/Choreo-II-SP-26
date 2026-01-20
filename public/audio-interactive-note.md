# Interactive Audio Experience: Two Perspectives

## How It Works

The audio component demonstrates how **the same sound exists differently depending on where you stand** — a sonic parallel to the bi-focal vantage point concept in choreography.

### 🎧 Use Headphones

This experience requires headphones to work properly. The spatial audio creates distinct left/right separation that speakers cannot reproduce.

---

## Controls

### Spatial Position (Left ← → Right)

This slider simulates moving your listening position from one side of a performance space to the other.

- **Far Left (-1):** Sound concentrated in your left ear
- **Center (0):** Sound balanced between both ears  
- **Far Right (+1):** Sound concentrated in your right ear

The audio uses multiple layers that pan in *different directions* — as you move "left," some harmonics shift right, creating the spatial depth and tension of being caught between two sonic worlds.

### Intensity (Soft → Full)

Controls the overall volume of the experience.

### Sound Modes

| Mode | Character | Choreographic Connection |
|------|-----------|--------------------------|
| **Drone** | Sustained, continuous tone | The unchanging question that persists regardless of position |
| **Pulse** | Rhythmic heartbeat (1.2Hz) | The body's internal rhythm — does the audience hear your heartbeat? |
| **Breath** | Slow inhale/exhale cycle | The breath that initiates and sustains movement |
| **Tension** | Dissonant, unresolved harmonics | The friction of being caught between two worlds |

---

## The Binaural Layer

Underneath the main tones, a **binaural beat** plays slightly different frequencies in each ear (4Hz difference). This creates a subtle perceptual phenomenon where your brain "hears" a pulsing that doesn't exist in either ear alone — it emerges from the relationship between the two.

This mirrors the choreographic question: **What emerges from the relationship between two vantage points that exists in neither alone?**

---

## Reflection Prompts

As you explore the audio, consider:

1. **If your movement phrase were a sound, would both vantage points hear the same rhythm?**

2. **What is revealed to the left ear that is concealed from the right?**

3. **At what position does the sound feel most "caught between two worlds"?**

4. **How does the intensity change what you notice about spatial position?**

---

## Technical Note

The audio is generated in real-time using the Web Audio API with:
- 4 oscillator layers at different harmonic relationships
- Stereo panning nodes with inverse relationships
- Low-frequency oscillators (LFOs) for rhythmic modulation
- A binaural beat generator for perceptual depth

No audio files are used — the sound is synthesized live, just as movement is generated live in performance.
