/* =========================================================
   AYESHA PORTFOLIO — EDIT TEXT AND PROJECTS HERE
   =========================================================
   - Static designs live in: assets/images/
   - Videos live in: assets/videos/
   - Video thumbnails live in: assets/posters/
   - Project cover collages live in: assets/covers/

   Add or remove a complete project object below. The cards,
   filters and project count update automatically.
*/

window.PORTFOLIO = {
  profile: {
    name: "Ayesha",
    email: "ayeshariaz563@gmail.com",
    availability: "Open to internships and junior creative opportunities",
    roleLine: "Graphic design learner · visual storyteller",
    heroText: "I’m Ayesha, a beginner graphic designer creating brand visuals, promotional layouts and short motion pieces. I mainly use Canva, use Inkscape for beginner vector-logo construction, and use CapCut for basic editing.",
    about: [
      "I enjoy turning a simple idea into a clearer visual through colour, typography, spacing and hierarchy.",
      "My portfolio includes logo and branding practice, café and product advertisements, beauty and fashion layouts, social media designs and short animated studies.",
      "The work shown here is my own portfolio and practice work. I have grouped related pieces into small case studies so an interviewer can see both variety and how I keep a visual direction consistent."
    ],
    contactNote: "For an internship, junior design role or interview, you can contact me directly by email.",
    socials: [
      { name: "LinkedIn", short: "in", url: "", note: "Add later" },
      { name: "Facebook", short: "f", url: "", note: "Add later" },
      { name: "Instagram", short: "ig", url: "", note: "Add later" }
    ]
  },

  rotatingWords: ["clear.", "playful.", "polished.", "memorable."],

  marqueeItems: [
    "Branding", "Social Media", "Advertising", "Logo Practice", "Canva", "Motion Design", "CapCut", "Inkscape"
  ],

  tools: [
    {
      name: "Canva",
      level: "Regularly use",
      description: "Brand visuals, posters, social posts, promotional layouts, presentations and simple animated designs.",
      symbol: "C"
    },
    {
      name: "CapCut",
      level: "Basic editing",
      description: "Short-form edits, text timing, transitions, music timing and simple portfolio videos.",
      symbol: "▶"
    },
    {
      name: "Inkscape",
      level: "Beginner · used in 2 logos",
      description: "Used for the CyberNexa and Sumfect logo construction while learning vector paths, node editing, alignment and shape building.",
      symbol: "I"
    },
    {
      name: "Typography & Layout",
      level: "Developing",
      description: "Practising hierarchy, alignment, spacing, font pairing, contrast and readable compositions.",
      symbol: "Aa"
    }
  ],

  interviewPoints: [
    "How I choose a visual direction, colour palette and font pairing for a project.",
    "How I adapt one identity across a logo, social post, flyer or banner.",
    "How I use spacing, alignment and hierarchy to make a busy layout easier to read.",
    "How I created the CyberNexa and Sumfect logos in Inkscape, and what I am still learning in vector design."
  ],

  process: [
    { number: "01", title: "Understand", text: "Identify the purpose, audience, format and most important message." },
    { number: "02", title: "Collect", text: "Gather references and choose the mood, colours, imagery and type direction." },
    { number: "03", title: "Build", text: "Create the first layout, test hierarchy and arrange the main visual elements." },
    { number: "04", title: "Refine", text: "Check spacing, consistency, readability and small details before presenting it." }
  ],

  projects: [
    {
      id: "cybernexa",
      title: "CyberNexa",
      category: "Branding",
      label: "Technology identity study",
      cover: "assets/covers/cybernexa.webp",
      alt: "CyberNexa cybersecurity branding and promotional design collection",
      description: "A cybersecurity identity exercise extended across a logo, social media post, promotional panel and informational flyer.",
      role: "Brand identity & layout practice",
      tools: "Inkscape (logo) · Canva (campaign layouts)",
      type: "Portfolio practice",
      learning: "Building the logo as a beginner vector exercise, then maintaining one colour system and futuristic visual language across several Canva layouts.",
      palette: ["#061b26", "#26c7ba", "#176a86", "#ffffff"],
      media: [
        { type: "image", src: "assets/images/cyber-logo.webp", alt: "CyberNexa shield logo", caption: "Logo identity" },
        { type: "image", src: "assets/images/cyber-insta.webp", alt: "CyberNexa social media advertisement", caption: "Social media post" },
        { type: "image", src: "assets/images/cyber-panaflex.webp", alt: "CyberNexa promotional panel", caption: "Promotional layout" },
        { type: "image", src: "assets/images/cyber-flyer.webp", alt: "CyberNexa information flyer", caption: "Informational flyer" }
      ]
    },
    {
      id: "brew-bloom",
      title: "Brew & Bloom Café",
      category: "Branding",
      label: "Café identity study",
      cover: "assets/covers/brew-bloom.webp",
      alt: "Brew and Bloom café logo and grand opening poster",
      description: "A soft café identity built around botanical illustration, warm neutral tones and an opening-day promotional poster.",
      role: "Logo & poster design practice",
      tools: "Canva",
      type: "Portfolio practice",
      learning: "Combining illustration, decorative type and promotional information without losing the gentle brand mood.",
      palette: ["#fbf6ed", "#6a351c", "#89916a", "#e9a3a1"],
      media: [
        { type: "image", src: "assets/images/brew-logo.webp", alt: "Brew and Bloom café logo", caption: "Logo concept" },
        { type: "image", src: "assets/images/brew-flyer.webp", alt: "Brew and Bloom grand opening poster", caption: "Grand opening poster" }
      ]
    },
    {
      id: "sumfect",
      title: "Sumfect",
      category: "Branding",
      label: "Appliance brand study",
      cover: "assets/covers/sumfect.webp",
      alt: "Sumfect appliance logo and promotional banner",
      description: "An appliance-brand exercise featuring a bold blue identity and a wide promotional banner for cooling products.",
      role: "Logo & commercial banner practice",
      tools: "Inkscape (logo) · Canva (banner)",
      type: "Portfolio practice",
      learning: "Constructing the logo in Inkscape, then organising several products, benefits and contact details within a wide-format Canva layout.",
      palette: ["#061d4c", "#119bd0", "#8adcf5", "#ffffff"],
      media: [
        { type: "image", src: "assets/images/sumfect-logo.webp", alt: "Sumfect logo", caption: "Logo concept" },
        { type: "image", src: "assets/images/sumfect-banner.webp", alt: "Sumfect cooling products banner", caption: "Product banner" }
      ]
    },
    {
      id: "amora",
      title: "Amora Beauty",
      category: "Advertising",
      label: "Beauty campaign practice",
      cover: "assets/covers/amora.webp",
      alt: "Amora makeup and foundation promotional designs",
      description: "A feminine beauty promotion study using product cut-outs, soft pink tones and offer-focused social media layouts.",
      role: "Promotional design practice",
      tools: "Canva",
      type: "Portfolio practice",
      learning: "Product emphasis, offer hierarchy, cut-out composition and maintaining a soft beauty aesthetic.",
      palette: ["#efa1a5", "#f5c2c7", "#7a312b", "#fff8f4"],
      media: [
        { type: "image", src: "assets/images/amora-collage.webp", alt: "Amora makeup collage poster", caption: "Makeup collage" },
        { type: "image", src: "assets/images/amora-foundation.webp", alt: "Amora foundation discount design", caption: "Foundation offer" }
      ]
    },
    {
      id: "beauty-fashion",
      title: "Beauty & Fashion Posts",
      category: "Social Media",
      label: "Mini design collection",
      cover: "assets/covers/beauty-fashion.webp",
      alt: "Beauty salon, fashion editorial and handbag promotion designs",
      description: "A small collection exploring three visual moods: colourful salon promotion, editorial fashion and product-focused accessories advertising.",
      role: "Social layout practice",
      tools: "Canva",
      type: "Practice collection",
      learning: "Switching between visual styles while keeping each message readable and product-focused.",
      palette: ["#8d2f79", "#7e3c24", "#8f263c", "#f1b2c2"],
      media: [
        { type: "image", src: "assets/images/glow-grace.webp", alt: "Glow and Grace salon promotion", caption: "Salon offer" },
        { type: "image", src: "assets/images/lumera.webp", alt: "Lumera fashion editorial poster", caption: "Fashion editorial" },
        { type: "image", src: "assets/images/new-collection.webp", alt: "New collection handbag post", caption: "Product promotion" }
      ]
    },
    {
      id: "food-cafe",
      title: "Food & Café Collection",
      category: "Advertising",
      label: "Product & logo studies",
      cover: "assets/covers/food-cafe.webp",
      alt: "Matcha, coffee, candy and restaurant design collection",
      description: "A mixed food-and-café collection combining a matcha product ad, coffee promotion and two small logo exercises.",
      role: "Product advertising & logo practice",
      tools: "Canva",
      type: "Practice collection",
      learning: "Food imagery, price and offer hierarchy, product appetite appeal and simple identity construction.",
      palette: ["#34430e", "#6b3518", "#f0b867", "#fff0b1"],
      media: [
        { type: "image", src: "assets/images/matcha.webp", alt: "Icy matcha drink advertisement", caption: "Matcha advertisement" },
        { type: "image", src: "assets/images/coffee-point.webp", alt: "Coffee Point special offer poster", caption: "Coffee offer" },
        { type: "image", src: "assets/images/candie-candh.webp", alt: "Candie Candh candy logo", caption: "Candy logo" },
        { type: "image", src: "assets/images/royal-bites.webp", alt: "Royal Bites restaurant logo", caption: "Restaurant logo" }
      ]
    },
    {
      id: "novasync",
      title: "NovaSync",
      category: "Branding",
      label: "Channel identity study",
      cover: "assets/covers/novasync.webp",
      alt: "NovaSync technology logo and channel banner",
      description: "A technology-channel identity exercise using a simple orbit-inspired logo and a coordinated social banner.",
      role: "Logo & banner practice",
      tools: "Canva",
      type: "Portfolio practice",
      learning: "Translating a logo into a wider channel layout while keeping the blue technology theme consistent.",
      palette: ["#07152f", "#245cff", "#1bb4e7", "#ffffff"],
      media: [
        { type: "image", src: "assets/images/novasync-logo.webp", alt: "NovaSync logo", caption: "Logo concept" },
        { type: "image", src: "assets/images/novasync-banner.webp", alt: "NovaSync channel banner", caption: "Channel banner" }
      ]
    },
    {
      id: "editorial-study",
      title: "Editorial Quote Study",
      category: "Editorial",
      label: "Typography practice",
      cover: "assets/covers/editorial.webp",
      alt: "Red quote card with diamond line illustration",
      description: "A minimal quote-card exercise focused on a restrained palette, line illustration and centred typography.",
      role: "Typography practice",
      tools: "Canva",
      type: "Mini practice piece",
      learning: "Simple composition, script-and-sans pairing and visual balance in a square format.",
      palette: ["#91393b", "#691313", "#d8eef6", "#ffffff"],
      media: [
        { type: "image", src: "assets/images/quote-design.webp", alt: "Success quote design", caption: "Quote card" }
      ]
    },
    {
      id: "four-gates",
      title: "Four Gates Story",
      category: "Motion",
      label: "Editorial motion study",
      cover: "assets/covers/four-gates.webp",
      alt: "Animated editorial video about four gates",
      description: "A short vertical editorial video presenting information about historic gates through image, text and colour changes.",
      role: "Motion layout practice",
      tools: "Canva / basic video editing",
      type: "Practice video",
      learning: "Sequencing information, keeping text readable and creating visual continuity across multiple scenes.",
      palette: ["#5b4b26", "#8d2530", "#e8dfc8", "#ffffff"],
      media: [
        { type: "video", src: "assets/videos/four-gates.mp4", poster: "assets/posters/four-gates.webp", alt: "Four Gates animated video", caption: "Play the complete video" }
      ]
    },
    {
      id: "product-motion",
      title: "Product Motion Collection",
      category: "Motion",
      label: "Short animation studies",
      cover: "assets/covers/motion-products.webp",
      alt: "Collection of beverage and product animation studies",
      description: "A set of short motion exercises for beverages and product promotions, using reveal animations, product movement and quick scene transitions.",
      role: "Basic motion design practice",
      tools: "Canva / CapCut",
      type: "Practice collection",
      learning: "Pacing, product reveals, repeated visual systems and adapting motion to vertical and landscape formats.",
      palette: ["#6e1f2d", "#5f3c26", "#efa431", "#f57f91"],
      media: [
        { type: "video", src: "assets/videos/cans-motion.mp4", poster: "assets/posters/cans-motion.webp", alt: "Animated soft drink cans design", caption: "Soft drink cans" },
        { type: "video", src: "assets/videos/coffee-types.mp4", poster: "assets/posters/coffee-types.webp", alt: "Animated coffee types design", caption: "Coffee collection" },
        { type: "video", src: "assets/videos/mango-juice.mp4", poster: "assets/posters/mango-juice.webp", alt: "Mango juice landscape animation", caption: "Mango juice" },
        { type: "video", src: "assets/videos/strawberry-motion.mp4", poster: "assets/posters/strawberry-motion.webp", alt: "Strawberry ice cream animation", caption: "Strawberry motion" }
      ]
    },
    {
      id: "motion-experiments",
      title: "Digital Motion Experiments",
      category: "Motion",
      label: "Countdown & interface studies",
      cover: "assets/covers/motion-experiments.webp",
      alt: "Timer and smoothie website animation studies",
      description: "Two short experiments exploring an animated countdown and a colourful smoothie website concept.",
      role: "Basic animation practice",
      tools: "Canva / CapCut",
      type: "Practice collection",
      learning: "Loop-friendly timing, colour transitions and simple interface presentation.",
      palette: ["#0a0b12", "#f3c835", "#c52d58", "#f8f3e7"],
      media: [
        { type: "video", src: "assets/videos/timer-motion.mp4", poster: "assets/posters/timer-motion.webp", alt: "Neon countdown animation", caption: "Countdown animation" },
        { type: "video", src: "assets/videos/smoothie-website.mp4", poster: "assets/posters/smoothie-website.webp", alt: "Animated smoothie website concept", caption: "Smoothie website concept" }
      ]
    }
  ]
};
