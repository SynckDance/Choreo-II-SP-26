# Interactive Visual Experience: Bi-Focal Vantage

## How It Works

The 3D visual component allows you to **orbit around a moving figure** to experience how the same movement appears differently from each vantage point. This is the spatial equivalent of the audio experience — what you see depends entirely on where you stand.

### 🖱️ Controls

- **Drag** — Orbit around the figure
- **Scroll** — Zoom in/out
- **Right-click + Drag** — Pan the view
- **Reset** — Return to default front view

---

## Vantage Point Presets

Quick-jump to specific viewing positions:

| Position | What You See | Choreographic Significance |
|----------|--------------|---------------------------|
| **Front** | Face, expression, forward intention | The audience's traditional view — what is being presented |
| **Back** | Spine, shoulders, departure | What the performer leaves behind — vulnerability, history |
| **Side** | Profile, trajectory, spatial path | The journey between two worlds — neither here nor there |
| **Top** | Floor pattern, spatial design | The choreographer's view — architecture of movement |

---

## Movement Phrases

Select a phrase to see how its unique movement qualities appear from different angles:

### Phrase A: Tension
- **Quality:** Contracted, suspended, caught
- **Speed:** Slow
- **Color:** Orange (#E85D04)
- **What to observe:** How does contraction read from behind vs. in front? Where does tension live in the body from each angle?

### Phrase B: Release
- **Quality:** Expansive, falling, surrendering
- **Speed:** Medium  
- **Color:** Green (#10B981)
- **What to observe:** Does release look the same from all sides? What does "falling" look like from above?

### Phrase C: Resolution
- **Quality:** Grounded, still, between
- **Speed:** Variable
- **Color:** Purple (#6366F1)
- **What to observe:** How does stillness register differently based on vantage? Is "grounded" visible from every angle?

---

## Visualization Styles

| Style | Rendering | Use For |
|-------|-----------|---------|
| **Wireframe** | Skeletal lines and edges | Seeing through the body — spatial pathways, joint relationships |
| **Solid** | Filled surfaces with lighting | Mass, volume, how light falls on the moving form |
| **Points** | Joint markers only | Pure motion capture — the data beneath the body |

---

## The Motion Capture Source

The figure displays motion capture data from **Adzogbo danced by Mustapha** — a Ghanaian tradition from the Global Movement Research corpus. This is real movement data captured at 30fps with 32 tracked joints.

You are not watching an animation — you are watching **recorded embodied knowledge** rendered in digital space.

---

## Reflection Prompts

As you orbit the figure, consider:

1. **What is revealed from the front that is concealed from the back?**
   - Face vs. spine. Intention vs. history. Arrival vs. departure.

2. **At what angle does the movement feel most "caught between two worlds"?**
   - Is it the side view? A diagonal? The transition between views?

3. **How does the same gesture change meaning based on vantage point?**
   - An arm reaching forward (from front) vs. an arm reaching away (from back)

4. **What does the top view reveal about spatial design?**
   - Floor patterns, the architecture of the phrase, the geometry of "between"

5. **If you could only show this phrase from ONE angle, which would you choose? Why?**
   - This is the choreographer's fundamental question about staging and audience placement.

---

## Technical Note

The visualization uses Three.js with:
- FBXLoader for motion capture data
- OrbitControls for camera manipulation
- Real-time skeleton rendering
- Dynamic material switching between wireframe/solid/points

The same data exists in the computer regardless of your view angle — but your *perception* of that data transforms completely based on where you position yourself. This is the Two Body Problem made visible.
