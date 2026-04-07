import { useState } from 'react';

type Tab = 'tech-schedule' | 'show-order' | 'behind-scenes' | 'artist-statement';

interface TechGroup {
  group: string;
  members: string[];
  rehearsal: string;
  time: string;
}

interface TechDay {
  date: string;
  day: string;
  venue: string;
  groups: TechGroup[];
}

interface Artist {
  name: string;
  role: 'choreographer' | 'composer';
  bio: string;
}

interface Piece {
  title: string;
  choreographers: string[];
  composers: string[];
  artisticStatement: string;
  collaborativeStatement?: string;
  artists: Artist[];
}

export default function Evolution() {
  const [activeTab, setActiveTab] = useState<Tab>('tech-schedule');
  const [expandedPiece, setExpandedPiece] = useState<string | null>(null);

  const techSchedule: TechDay[] = [
    {
      date: 'April 6',
      day: 'Monday',
      venue: 'B. Iden Payne Theatre',
      groups: [
        { group: 'Group 1', members: ['Valentina', 'Emma', 'Marco'], rehearsal: 'Tech Rehearsal #1', time: '6:30pm - 9:30pm' }
      ]
    },
    {
      date: 'April 7',
      day: 'Tuesday',
      venue: 'B. Iden Payne Theatre',
      groups: [
        { group: 'Group 2', members: ['Bryli', 'Ariyana', 'Heather'], rehearsal: 'Tech Rehearsal #2', time: '3:30pm - 6:30pm' },
        { group: 'Group 3', members: ['Christian', 'Audrey', 'Will'], rehearsal: 'Tech Rehearsal #3', time: '6:30pm - 9:30pm' }
      ]
    },
    {
      date: 'April 8',
      day: 'Wednesday',
      venue: 'B. Iden Payne Theatre',
      groups: [
        { group: 'Group 4', members: ['Elyse', 'Jae'], rehearsal: 'Tech Rehearsal #4', time: '3:30pm - 4:15pm' },
        { group: 'Group 5', members: ['Jeremy', 'Rhea', 'Kel'], rehearsal: 'Tech Rehearsal #4', time: '4:15pm - 5:00pm' },
        { group: 'Group 6', members: ['Laura', 'Merrin', 'Darren'], rehearsal: 'Tech Rehearsal #4', time: '5:00pm - 5:45pm' },
        { group: 'Group 7', members: ['London', 'Jake'], rehearsal: 'Tech Rehearsal #4', time: '5:45pm - 6:30pm' },
        { group: 'Group 8', members: ['Cassidy', 'Jon', 'Chris'], rehearsal: 'Tech Rehearsal #5', time: '6:30pm - 9:30pm' }
      ]
    },
    {
      date: 'April 9',
      day: 'Thursday',
      venue: 'B. Iden Payne Theatre',
      groups: [
        { group: 'Group 9', members: ['Maddie', 'Tri', 'Gloria', 'Betty'], rehearsal: 'Tech Rehearsal #6', time: '3:30pm - 6:30pm' },
        { group: 'Group 10', members: ['Katelyn', 'Lauren', 'Jake', 'Gloria'], rehearsal: 'Tech Rehearsal #7', time: '6:30pm - 9:30pm' }
      ]
    },
    {
      date: 'April 10',
      day: 'Friday',
      venue: 'B. Iden Payne Theatre',
      groups: [
        { group: 'Group 11', members: ['Cat', 'Leili', 'Spencer'], rehearsal: 'Tech Rehearsal #8', time: '3:30pm - 6:30pm' },
        { group: 'Group 12', members: ['Kendall', 'Nico'], rehearsal: 'Tech Rehearsal #9', time: '6:30pm - 9:30pm' }
      ]
    },
    {
      date: 'April 21',
      day: 'Tuesday',
      venue: 'B. Iden Payne Theatre',
      groups: [
        { group: 'Final Tech', members: ['EVERYONE'], rehearsal: 'Tech Rehearsal #10', time: '7:00pm - 10:00pm' }
      ]
    }
  ];

  const pieces: Piece[] = [
    {
      title: 'MOVE: Evolution of Transportation',
      choreographers: ['Elyse Rosario'],
      composers: ['Jae Sandweg'],
      artisticStatement: `In MOVE, I investigate the physical evolution of human transportation, tracing a kinetic line from the foundational act of walking to the cosmic suspension of a satellite. This work explores how the body's energy shifts as our modes of transit accelerate, transitioning from organic, grounded movements into the sharper, more rhythmic textures of modern technology. Central to this narrative is a collaboration with composer Jae Sandweg, whose score serves as a vital storytelling engine; together, we utilized sound to reinforce the idea that transportation is not merely a utility, but a profound expression of movement as a whole.`,
      collaborativeStatement: `MOVE is a multidisciplinary inquiry into the kinetic and auditory evolution of human transit. Tracing a line from the foundational act of walking to the cosmic suspension of a satellite, choreographer Elyse Rosario and composer Jae Sandweg weave a narrative of accelerating energy and human ingenuity. Our collaborative process focuses on the friction between organic, grounded movement and the sharp, technological textures of modern life.`,
      artists: [
        { name: 'Elyse Rosario', role: 'choreographer', bio: `Elyse Rosario is so excited to present her first dance film at Evolution 2026. Her previous choreography includes: Crisol (2025), Her Testimony, Our Story (2025), as well as multiple performances as co-president of UT's Front 'N Center dance organization.` },
        { name: 'Jae Sandweg', role: 'composer', bio: `Jae Sandweg is an Arts and Entertainment major with a certificate in Museum Studies with aspirations to become a game designer. Through this project, they hope to explore the components of environments and their sounds to better understand how they contribute to the tone and atmosphere.` }
      ]
    },
    {
      title: 'Molded Flesh',
      choreographers: ['Audrey Friloux', 'Christian Ortega'],
      composers: ['Will Johnson'],
      artisticStatement: `Molded Flesh explores what happens when a person is shaped by forces beyond their control. Through movement, the dance reflects how environments, whether societal expectations, relationships, or harsh conditions, can reshape the body and identity. Over time, the individual becomes molded into something unfamiliar, losing touch with who they once were. This work asks: when we are constantly shaped by the world around us, what remains of our original self, and what do we ultimately become?`,
      artists: [
        { name: 'Audrey Friloux', role: 'choreographer', bio: `Audrey Friloux is a B.F.A in Dance major pursuing minors in Professional Sales and Business Development and Arts Management and Administration at The University of Texas at Austin. She grew up dancing competitively and now teaches and choreographs for students in Austin. Recent credits with Texas Theatre and Dance include Rooted in Motion (2025), Equinox (2025), Evolution (2025), and Cyphers (2024).` },
        { name: 'Christian Ortega', role: 'choreographer', bio: `Christian Ortega is a 3rd year student at the University of Texas at Austin pursuing a BFA in Dance and a BA in Economics. He grew up in Brownsville, Texas, as a competitive ballroom dancer and trained in a variety of dance styles at Dance Expressions. Recent credits with Texas Theatre and Dance include Cabaret (2025), Cohen New Works Festival (2025), Equinox (2025), and Cyphers (2024).` },
        { name: 'Will Johnson', role: 'composer', bio: `Will Johnson is thrilled to work alongside choreographers Audrey & Christian in composing an evolving, imaginative piece for Evolution 2026. His previous musical work includes his collaborative album, Botanical Bodega (2024); his work with the indie-pop band Foxtales; his most recent solo work, Tree of Life (2026); and various other live performances in Austin, Texas.` }
      ]
    },
    {
      title: '"So I (we) wanna stay here."',
      choreographers: ['Ariyana Bogan', 'Bryli Lee Jameson'],
      composers: ['Heather Kim', 'Jonathan Um'],
      artisticStatement: `You know that feeling when the music is just right? When you can turn off your brain because the rhythms are your guide. Where the melodies hold you close, telling you "everything will be alright." Well, what if you could live in this feeling? "So I (we) wanna stay here" is a movement journey of just this — of the magic of musical escape. In three acts, performers explore what it would be like to put on your headphones and escape to a place where freedom is found in community, joy, and rhythm.`,
      artists: [
        { name: 'Bryli Lee Jameson', role: 'choreographer', bio: `Dance artist and storyteller, Bryli Lee Jameson, is a third-year B.F.A in Dance major at The University of Texas at Austin, where she has performed works by Leandre Douglass, Nadia Milad Issa, and Vanessa Anspaugh. From the Dallas, TX area, she has an extensive background in modern, contemporary, and African diasporic dance styles, which she seamlessly weaves together both as a performer and choreographer.` },
        { name: 'Ariyana Bogan', role: 'choreographer', bio: `Ariyana Bogan is a third-year B.F.A. in Dance major with a minor in Arts Management and Administration at The University of Texas at Austin. She is originally from Houston, Texas, and has a background in various dance styles, including hip-hop, jazz, and contemporary.` },
        { name: 'Heather Kim', role: 'composer', bio: `Heather Kim is a Junior at UT Austin studying Art & Entertainment Technology. A singer-songwriter and producer rooted in indie and R&B, her work weaves together composition, sound design, and immersive storytelling. Currently based in Austin and Seoul, Heather brings a cross-cultural perspective to everything she creates.` }
      ]
    },
    {
      title: 'Abdere',
      choreographers: ['Triana Cisneros', 'Madeleine Birmingham'],
      composers: ['Gloria Jang', 'Betty Luo'],
      artisticStatement: `Alone, yet held. Innocent, yet self-sabotaged. Together, yet withdrawn. Abdere strives to create a world that invites you into the all-too-familiar feeling of self-isolation that can dictate so much of the way you feel, react, and perceive the world. In this presentation of humanity, community, and taciturn existence, we ask that you observe introspectively. Allow the dancers' bodies and the world they create to cause you to ponder your own experiences of self-isolation and the way the people around you bring you out, or further in.`,
      artists: [
        { name: 'Triana Cisneros', role: 'choreographer', bio: `Triana Cisneros is a third-year B.F.A. Dance major at The University of Texas at Austin. She is from Laredo, Texas, where she received extensive dance training at the Laredo School of Contemporary Dance. Her recent credits with Texas Theatre and Dance include Óxido (Rusty) by Claudia Lavista (Points of Intersection, 2024), On and On by Le'Andre (Cyphers, 2024), Motherless Child by Raul Tamez (EQUINOX, 2025).` },
        { name: 'Madeleine Birmingham', role: 'choreographer', bio: `Madeleine Birmingham is a lifelong dancer and emerging dance educator in her 3rd year pursuing a B.F.A. in Dance Education at UT. Maddie's extensive classical and commercial training has allowed her to work with choreographers such as Claudia Lavista, Meredith Rainey, and Raul Tamez.` },
        { name: 'Betty Luo', role: 'composer', bio: `With a varied background in classical music and orchestra, Betty Luo is a fourth year student studying Arts and Entertainment Technology at UT Austin, working to expand her skills as a musician through digital music production. As an artist, she strives to create experiences that can evoke strong emotions, carry an impactful message, and inspire people to continue making art.` },
        { name: 'Gloria Jang', role: 'composer', bio: `Gloria Jang is an artist drawn to the space where creativity and technology meet, using interactive media to explore what it means to genuinely connect. Her work centers on vulnerability, presence, and storytelling—creating experiences that feel personal, even within digital environments.` }
      ]
    },
    {
      title: 'Dovetailed',
      choreographers: ['Laura Baker', 'Merrin Foley'],
      composers: ['Darren Tea'],
      artisticStatement: `Dovetailed explores themes of identity, relationships, and belonging. Each person who comes into your life impacts how you view yourself and the world around you, even after they are gone. As we step into the unknown, we reflect on the people who have molded our identity, knowing that each encounter has left an everlasting imprint. This film seeks to capture the evolution of relationships and what it means to be together, even when time and distance may separate us.`,
      artists: [
        { name: 'Merrin Foley', role: 'choreographer', bio: `Merrin Foley is a fourth-year B.F.A. in Dance and Bachelor of Science in Advertising double major, also pursuing a business minor. She grew up in Atlanta, Georgia, where she trained in numerous dance styles and techniques through school, studios, and intensives. Recent credits with Texas Theatre and Dance include Fall For Dance (2023), The Cohen New Works Festival (2023), Points of Intersection (2024), Equinox (2025), and Evolution (2025).` },
        { name: 'Laura Baker', role: 'choreographer', bio: `Laura Baker is a B.F.A Dance and Bachelor's of Journalism double major. She grew up in Augusta, Georgia, where she trained in ballet. Her recent credits with the Department of Theatre and Dance include Equinox (2026), Quiet Tears of Roses (2025), Cyphers (2024), Points of Intersection (2024), and Evolution (2023).` },
        { name: 'Darren Tea', role: 'composer', bio: `Darren Tea is a musician and composer from Austin, Texas majoring in Arts and Entertainment Technologies and Asian American Studies. They love music!` }
      ]
    },
    {
      title: 'In Your Own Hands',
      choreographers: ['Catalina Duong', 'Leili Givens'],
      composers: ['Spencer Rhodes'],
      artisticStatement: `The choice is yours to "remove the hat."`,
      artists: [
        { name: 'Leili Givens', role: 'choreographer', bio: `Leili Givens is in her third year of pursuing a B.F.A. in Dance with a minor in Social and Behavioral Sciences and Social Work at The University of Texas at Austin. Recent credits include Equinox (2025, 2026), Rooted in Motion (2025), Cyphers (2024), Evolution (2024, 2025), and Dance Action's S.E.E.D. (2023, 2024).` },
        { name: 'Catalina Duong', role: 'choreographer', bio: `Catalina Duong is a third-year B.F.A in Dance and B.S.A in Biology double major also pursuing a Pre-Health Professions Certificate at the University of Texas at Austin. She is from Houston, Texas, where she attended Kinder High School for the Performing and Visual Arts and trained in a variety of dance techniques.` },
        { name: 'Spencer Rhodes', role: 'composer', bio: `Spencer Rhodes is a fourth-year Arts and Entertainment Technology major, also pursuing a certificate in Japanese at the University of Texas Austin. He is from the small town of Lexington, Texas where he participated in both Musical and Theatrical productions for 7 years. He then played for the University Orchestra for 3 semesters.` }
      ]
    },
    {
      title: 'The Smell of Yellow',
      choreographers: ['London Lack'],
      composers: ['Jake Nichols'],
      artisticStatement: `Exploring "The Yellow Wallpaper's" underlying theme of postpartum depression, The Smell of Yellow's movement juxtaposes hyperfemininity with extreme heaviness. The male figure is seen harshly manipulating his female counterpart as she desperately attempts to fulfil his codified gender expectations — ultimately to the point of her own detriment. Her focus is often beyond the frame, creating the sense that while physically in the space, she is not emotionally present. As a lack of understanding and legitimization of her experiences drives her increasingly more mad, her movement becomes sharper and more aggressive as she attempts to cry for help.`,
      artists: [
        { name: 'London Lack', role: 'choreographer', bio: `London Lack is a fourth-year B.F.A. in Dance and a B.A. in Plan II Honors at The University of Texas at Austin. Recent choreographic credits include her student residency work "Shadow Puppets," her contemporary ballet Quiet Tears of Roses, and House Play. She founded the Cauliflower Project and is an active member of The Friar Society. Upon graduation, she will attend the Trinity Laban Conservatory in Greenwich, England to pursue her MFA in Choreography.` },
        { name: 'Jake Nichols', role: 'composer', bio: `Jake Nichols is a senior AET student at the University of Texas at Austin. As a passionate musician, he's spent the past few years honing his craft in both performance and audio production. With a strong foundation in mixing, mastering, and recording, he's had the opportunity to use his musical and technical knowledge to create high-quality sounds and performances.` }
      ]
    },
    {
      title: 'Against the Dying Light',
      choreographers: ['Cassidy Perry'],
      composers: ['Jonathan Um', 'Chris Ozley'],
      artisticStatement: `"And learn, too late, they grieved it on its way" — The process of grief is a tumultuous path often forged in movements we've already completed. It steals, it molds, and it changes. But who do we become? How do we learn how to move on? Against the Dying Light is the physical manifestation of the scars that loss leaves. Inspired by the poem 'Do Not Go Gentle Into That Good Night' and the death that has plagued my life since I was a little girl, I explore my own cycles of grief. The distortion of once untouched memories and the dissonance when they no longer feel like mine.`,
      collaborativeStatement: `Against the Dying Light traverses the weathering of grief in one's life. Its movement and musical vocabulary are reflective of the different emotions experienced when grieving. The piece weaves moments from the poem 'Do Not Go Gentle Into The Good Night' in both its sonic and choreographic structure as well as the lived experiences of the people involved in the piece.`,
      artists: [
        { name: 'Cassidy Perry', role: 'choreographer', bio: `Cassidy Perry is a third-year double major in B.F.A. in Dance and B.A. in Sociology also pursuing minors in Radio-Television-Film with an emphasis in Media and Entertainment Studies, and Law, Justice, and Society. She is from Maryland and has an extensive background in numerous styles of dance. Her Texas Theatre and Dance credits include Points Of Intersection (2024), CYPHERS (2024), Equinox (2025), The Cohen New Works Festival in Quiet Tears of Roses (2025), Evolution (2025), Rooted in Motion (2025), Sovereign Shoulders (2026), and Equinox (2026).` },
        { name: 'Jonathan Um', role: 'composer', bio: `Jonathan Um is a musician, music producer, and creative facilitator working at the intersection of sound, collaboration, and experimentation. Currently studying Arts and Entertainment Technologies at The University of Texas at Austin, his work bridges music, dance, storytelling, and emerging media. Now based in Austin, he releases music under the name UM? and is building an art-first creative production model rooted in experimentation and human connection.` }
      ]
    },
    {
      title: 'AGEGE',
      choreographers: ['Emma Flores', 'Valentina Reyes'],
      composers: ['Marco Hurtado'],
      artisticStatement: `"AGEGE" is a percussive journey that brings people together through rhythm, exploring how each dancer exists as both an individual and part of a larger whole. Inspired by the spirit of community play, the piece unfolds like an Afro-house track, layers of rhythm building, shifting, and sharing the spotlight. The body becomes an instrument, creating and responding to sound, while movement travels between what feels easy and what feels challenging, finding humor in those transitions. Like a group of friends moving through a day into a night club, AGEGE celebrates connection. What happens when the rhythm chases us, but we are faster?`,
      artists: [
        { name: 'Valentina Reyes Rubio', role: 'choreographer', bio: `Valentina Reyes Rubio is a senior B.F.A. Dance major at the University of Texas at Austin. Born in Bogotá, Colombia, she began her training in Latin rhythms, street dance, and contemporary technique. She performed with AAINJAA, a multidisciplinary company, touring internationally as a featured dancer (2015-2021). At UT Austin, her credits include Cohen New Works Festival, Evolution (2023–2024), Fall for Dance (2023), Cyphers & ACDA (2024–2025), and Rooted in Motion (2025).` },
        { name: 'Emma Lou Flores', role: 'choreographer', bio: `Emma Lou Flores is a community leader who works as a choreographer and executive board member for student organizations Redefined Dance Company and ATX The Space. Moving between many mediums, she participates in competitive dance, concert dance, and the Austin freestyle/street dance community. Her choreography shines through musicality and exquisitely precise execution of articulate movements with mechanical melodic aspects.` },
        { name: 'Marco Hurtado', role: 'composer', bio: `Marco Hurtado is a versatile sound designer, editor, and composer who has previously lent his work to other COFA showcases such as the Audio Pixel Collider 2025. A fan of electronic dance music, he is versed in melding genres and styles to create rhythmically compelling and melodically catchy musical experiences.` }
      ]
    },
    {
      title: 'Marrow',
      choreographers: ['Katelyn Doyle', 'Lauren Dorsett'],
      composers: ['Jake Nichols', 'Gloria Jang'],
      artisticStatement: `"Marrow" explores the patterns of indulgence, sacrifice, and shedding in relation to the people around you. In trying to find parts of identity in others, we sacrifice parts ourselves. "Marrow" questions what temptations we fall into that ultimately dictate who we become? Attempts to hide yourself lead to exposing other vulnerabilities. Pursuing things that you desire, but may not ultimately serve you. What does it look like to intentionally leave things that don't serve you?`,
      artists: [
        { name: 'Katelyn Doyle', role: 'choreographer', bio: `Katelyn Doyle is a junior at The University of Texas at Austin pursuing a BFA in Dance and a BA in English. Originally from Dallas, Texas, she trained at Avant Chamber Ballet and Booker T. Washington High School for the Performing and Visual Arts. Her recent credits with Texas Theatre and Dance include Cabaret (2025), Equinox (2025 and 2024), and Cyphers (2024). In 2025, she also choreographed for Cohen New Works Festival.` },
        { name: 'Lauren Dorsett', role: 'choreographer', bio: `Lauren Dorsett is a third-year B.F.A in Dance and B.S. in Kinesiology and Exercise Science major pursuing the Pre-Physical Therapy track at the University of Texas at Austin. She is from Katy, Texas, where she trained in a variety of dance techniques. Her recent credits with Texas Theatre and Dance include Points of Intersection (2024), CYPHERS (2024), and Equinox (2025).` },
        { name: 'Gloria Jang', role: 'composer', bio: `Gloria Jang is an artist drawn to the space where creativity and technology meet, using interactive media to explore what it means to genuinely connect. Music production has become a way for her to slow down and listen more closely. She's interested in organic textures and emotional nuance, shaping sound into moments that invite reflection, intensity, and honesty.` }
      ]
    },
    {
      title: 'Least of You',
      choreographers: ['Kendall Paige Wenmohs'],
      composers: ['Nicolas Sosa'],
      artisticStatement: `Least of You lives in the shadow side of love — the push and pull, the drain, the doors you leave open because you can't bring yourself to close them. It's about how the past seeps into the present whether you invite it or not. I keep my window rolled up, but I crack it for one person, and suddenly everything rushes in. The piece sits with that overstimulation — the strange addiction of something that costs you. Together, we built a world where the body and the music remember what the mind is still trying to forget.`,
      artists: [
        { name: 'Kendall Wenmohs', role: 'choreographer', bio: `Kendall Wenmohs is a B.F.A. in Dance major at The University of Texas at Austin. She has an extensive background in concert dance and competition dance. Recent credits include performances with the High School for the Performing and Visual Arts, various summer intensive shows with the Joffrey Ballet School and The Dance Awards, as well as performing in DRT, Cyphers and Equinox.` },
        { name: 'Nicolas Sosa', role: 'composer', bio: `Nicolas is a sound designer, composer, and mixing engineer whose work moves between music production, collaborative scoring for media, and live sound. He is drawn to music that holds something true about how people feel and who they are. He is currently based in Austin, Texas, and studying at the University of Texas at Austin.` }
      ]
    },
    {
      title: 'Still, Then Again',
      choreographers: ['Jeremy Benavides'],
      composers: ['Rheana Sanders', 'Kel Shang'],
      artisticStatement: `Still, Then Again is a moving representation of the connections between mind and body, focusing on the tension between self-observation and the feeling of being watched. The accompanying music conveys a sense of repetition, intimacy, and sensuality, painting an image of a winter garden or wooded environment. It incorporates ambient, evolving, and natural textures to highlight the unique authenticity found in private movement and performance.`,
      artists: [
        { name: 'Rheana Sanders', role: 'composer', bio: `As a former pianist, Rheana has experience in making a variety of melodies, particularly those in minor keys. She is also an intermediate Ableton and BandLab user, with some familiarity with Reaper. She worked primarily on the piece's middle act, including its climax and transitions.` },
        { name: 'Kel Shang', role: 'composer', bio: `Kel Shang is a senior Arts & Entertainment Technologies and Economics student. Specializing in creative research and storytelling, Kel Shang had the opportunity to expand her background composing sound narratives on a multimedia film collaboration for Evolution 2026. Professionally, Kel is interested in promoting the next generation of fine arts through emerging technologies in educational and instructional spaces.` }
      ]
    }
  ];

  const tabs = [
    { id: 'tech-schedule' as Tab, label: 'Tech Schedule', icon: '🎛️' },
    { id: 'show-order' as Tab, label: 'Show Order', icon: '📋' },
    { id: 'behind-scenes' as Tab, label: 'Behind the Scenes', icon: '🎬' },
    { id: 'artist-statement' as Tab, label: 'Artist Statements', icon: '✍️' }
  ];

  const togglePiece = (title: string) => {
    setExpandedPiece(expandedPiece === title ? null : title);
  };

  return (
    <div className="evolution-page">
      <style>{`
        .evolution-page {
          max-width: 1000px;
          margin: 0 auto;
        }

        .page-header {
          margin-bottom: 2rem;
        }

        .page-badge {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          font-family: 'JetBrains Mono', monospace;
          font-size: 0.7rem;
          padding: 0.35rem 0.75rem;
          background: linear-gradient(135deg, #E85D04, #DC520A);
          color: white;
          border-radius: 4px;
          text-transform: uppercase;
          margin-bottom: 1rem;
        }

        .page-title {
          font-family: 'Playfair Display', serif;
          font-size: clamp(2rem, 4vw, 2.75rem);
          font-weight: 600;
          margin-bottom: 0.75rem;
        }

        .page-subtitle {
          font-size: 1rem;
          color: var(--text-secondary);
          line-height: 1.6;
          max-width: 650px;
        }

        .tabs {
          display: flex;
          gap: 0.5rem;
          margin-bottom: 2rem;
          border-bottom: 1px solid var(--border);
          padding-bottom: 0.5rem;
          overflow-x: auto;
        }

        .tab {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.75rem 1.25rem;
          background: transparent;
          border: 1px solid transparent;
          border-radius: 8px 8px 0 0;
          cursor: pointer;
          font-size: 0.9rem;
          font-weight: 500;
          color: var(--text-secondary);
          transition: all 0.2s ease;
          white-space: nowrap;
        }

        .tab:hover {
          color: var(--text-primary);
          background: var(--border-light);
        }

        .tab.active {
          color: var(--accent);
          background: var(--bg-secondary);
          border-color: var(--border);
          border-bottom-color: var(--bg-secondary);
          margin-bottom: -1px;
        }

        .tab-icon {
          font-size: 1.1rem;
        }

        .updated-notice {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.5rem 1rem;
          background: rgba(232, 93, 4, 0.1);
          border: 1px solid rgba(232, 93, 4, 0.3);
          border-radius: 6px;
          font-size: 0.8rem;
          color: var(--accent);
          margin-bottom: 1.5rem;
        }

        .schedule-container {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }

        .day-card {
          background: var(--bg-secondary);
          border: 1px solid var(--border);
          border-radius: 12px;
          overflow: hidden;
        }

        .day-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 1rem 1.5rem;
          background: var(--border-light);
          border-bottom: 1px solid var(--border);
        }

        .day-date {
          display: flex;
          align-items: baseline;
          gap: 0.75rem;
        }

        .day-name {
          font-family: 'Playfair Display', serif;
          font-size: 1.25rem;
          font-weight: 600;
        }

        .day-full {
          font-size: 0.85rem;
          color: var(--text-muted);
        }

        .day-venue {
          font-family: 'JetBrains Mono', monospace;
          font-size: 0.7rem;
          padding: 0.3rem 0.6rem;
          background: var(--bg-secondary);
          border: 1px solid var(--border);
          border-radius: 4px;
          color: var(--text-secondary);
        }

        .day-groups {
          padding: 1rem 1.5rem;
        }

        .group-row {
          display: grid;
          grid-template-columns: 100px 1fr 140px 140px;
          gap: 1rem;
          padding: 1rem 0;
          border-bottom: 1px solid var(--border-light);
          align-items: center;
        }

        .group-row:last-child {
          border-bottom: none;
        }

        .group-row.final {
          background: linear-gradient(90deg, rgba(232, 93, 4, 0.05), transparent);
          margin: 0 -1.5rem;
          padding: 1rem 1.5rem;
        }

        .group-name {
          font-weight: 600;
          font-size: 0.9rem;
        }

        .group-members {
          font-size: 0.9rem;
          color: var(--text-secondary);
        }

        .group-rehearsal {
          font-family: 'JetBrains Mono', monospace;
          font-size: 0.75rem;
          color: var(--text-muted);
        }

        .group-time {
          font-weight: 500;
          font-size: 0.9rem;
          text-align: right;
        }

        .coming-soon {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          padding: 4rem 2rem;
          background: var(--bg-secondary);
          border: 1px solid var(--border);
          border-radius: 12px;
          text-align: center;
        }

        .coming-soon-icon {
          font-size: 3rem;
          margin-bottom: 1rem;
        }

        .coming-soon-title {
          font-family: 'Playfair Display', serif;
          font-size: 1.5rem;
          margin-bottom: 0.5rem;
        }

        .coming-soon-text {
          font-size: 0.95rem;
          color: var(--text-secondary);
          max-width: 400px;
        }

        .pieces-container {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }

        .piece-card {
          background: var(--bg-secondary);
          border: 1px solid var(--border);
          border-radius: 12px;
          overflow: hidden;
          transition: all 0.2s ease;
        }

        .piece-card:hover {
          border-color: var(--accent);
        }

        .piece-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 1.25rem 1.5rem;
          cursor: pointer;
          transition: background 0.2s ease;
        }

        .piece-header:hover {
          background: var(--border-light);
        }

        .piece-info {
          flex: 1;
        }

        .piece-title {
          font-family: 'Playfair Display', serif;
          font-size: 1.2rem;
          font-weight: 600;
          margin-bottom: 0.35rem;
        }

        .piece-credits {
          font-size: 0.85rem;
          color: var(--text-secondary);
        }

        .piece-credits span {
          color: var(--text-muted);
        }

        .piece-toggle {
          font-size: 1.25rem;
          color: var(--text-muted);
          transition: transform 0.2s ease;
        }

        .piece-toggle.open {
          transform: rotate(180deg);
        }

        .piece-content {
          padding: 0 1.5rem 1.5rem;
          border-top: 1px solid var(--border);
        }

        .piece-section {
          padding-top: 1.25rem;
        }

        .piece-section-title {
          font-family: 'JetBrains Mono', monospace;
          font-size: 0.7rem;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          color: var(--accent);
          margin-bottom: 0.75rem;
        }

        .piece-statement {
          font-size: 0.95rem;
          line-height: 1.7;
          color: var(--text-secondary);
          font-style: italic;
        }

        .artists-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 1rem;
        }

        .artist-card {
          background: var(--bg-primary);
          border: 1px solid var(--border);
          border-radius: 8px;
          padding: 1rem 1.25rem;
        }

        .artist-name {
          font-weight: 600;
          font-size: 1rem;
          margin-bottom: 0.25rem;
        }

        .artist-role {
          font-family: 'JetBrains Mono', monospace;
          font-size: 0.65rem;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          color: var(--text-muted);
          margin-bottom: 0.75rem;
        }

        .artist-role.choreographer {
          color: #E85D04;
        }

        .artist-role.composer {
          color: #6366F1;
        }

        .artist-bio {
          font-size: 0.85rem;
          line-height: 1.6;
          color: var(--text-secondary);
        }

        .piece-count {
          font-family: 'JetBrains Mono', monospace;
          font-size: 0.8rem;
          color: var(--text-muted);
          margin-bottom: 1.5rem;
        }

        @media (max-width: 768px) {
          .group-row {
            grid-template-columns: 1fr;
            gap: 0.5rem;
          }

          .group-time {
            text-align: left;
          }

          .day-header {
            flex-direction: column;
            align-items: flex-start;
            gap: 0.75rem;
          }

          .tabs {
            gap: 0.25rem;
          }

          .tab {
            padding: 0.6rem 0.9rem;
            font-size: 0.8rem;
          }

          .artists-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>

      <header className="page-header">
        <div className="page-badge">🎭 April 24, 2026</div>
        <h1 className="page-title">EVOLUTION Performance</h1>
        <p className="page-subtitle">
          Everything you need for EVOLUTION 2026 — tech schedules, show order, behind-the-scenes coordination, and artist statements.
        </p>
      </header>

      <div className="tabs">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            className={`tab ${activeTab === tab.id ? 'active' : ''}`}
            onClick={() => setActiveTab(tab.id)}
          >
            <span className="tab-icon">{tab.icon}</span>
            {tab.label}
          </button>
        ))}
      </div>

      {activeTab === 'tech-schedule' && (
        <div className="tech-schedule">
          <div className="updated-notice">
            ⚠️ <strong>UPDATED</strong> — Schedule subject to change. Check back for updates.
          </div>
          
          <div className="schedule-container">
            {techSchedule.map((day, dayIndex) => (
              <div key={dayIndex} className="day-card">
                <div className="day-header">
                  <div className="day-date">
                    <span className="day-name">{day.date}</span>
                    <span className="day-full">{day.day}</span>
                  </div>
                  <span className="day-venue">{day.venue}</span>
                </div>
                <div className="day-groups">
                  {day.groups.map((group, groupIndex) => (
                    <div 
                      key={groupIndex} 
                      className={`group-row ${group.group === 'Final Tech' ? 'final' : ''}`}
                    >
                      <div className="group-name">{group.group}</div>
                      <div className="group-members">{group.members.join(' / ')}</div>
                      <div className="group-rehearsal">{group.rehearsal}</div>
                      <div className="group-time">{group.time}</div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {activeTab === 'show-order' && (
        <div className="coming-soon">
          <div className="coming-soon-icon">📋</div>
          <h2 className="coming-soon-title">Show Order</h2>
          <p className="coming-soon-text">
            Performance running order will be posted here once finalized after tech rehearsals.
          </p>
        </div>
      )}

      {activeTab === 'behind-scenes' && (
        <div className="coming-soon">
          <div className="coming-soon-icon">🎬</div>
          <h2 className="coming-soon-title">Behind the Scenes</h2>
          <p className="coming-soon-text">
            Backstage coordination, crew assignments, and production notes will appear here.
          </p>
        </div>
      )}

      {activeTab === 'artist-statement' && (
        <div className="artist-statements">
          <p className="piece-count">{pieces.length} pieces in EVOLUTION 2026</p>
          
          <div className="pieces-container">
            {pieces.map((piece) => (
              <div key={piece.title} className="piece-card">
                <div className="piece-header" onClick={() => togglePiece(piece.title)}>
                  <div className="piece-info">
                    <div className="piece-title">{piece.title}</div>
                    <div className="piece-credits">
                      <span>Choreography:</span> {piece.choreographers.join(' & ')} · <span>Music:</span> {piece.composers.join(' & ')}
                    </div>
                  </div>
                  <span className={`piece-toggle ${expandedPiece === piece.title ? 'open' : ''}`}>▼</span>
                </div>
                
                {expandedPiece === piece.title && (
                  <div className="piece-content">
                    <div className="piece-section">
                      <div className="piece-section-title">Artistic Statement</div>
                      <p className="piece-statement">{piece.artisticStatement}</p>
                    </div>
                    
                    {piece.collaborativeStatement && (
                      <div className="piece-section">
                        <div className="piece-section-title">Collaborative Statement</div>
                        <p className="piece-statement">{piece.collaborativeStatement}</p>
                      </div>
                    )}
                    
                    <div className="piece-section">
                      <div className="piece-section-title">Artists</div>
                      <div className="artists-grid">
                        {piece.artists.map((artist) => (
                          <div key={artist.name} className="artist-card">
                            <div className="artist-name">{artist.name}</div>
                            <div className={`artist-role ${artist.role}`}>{artist.role}</div>
                            <p className="artist-bio">{artist.bio}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
