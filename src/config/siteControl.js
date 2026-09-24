/**
 * ═══════════════════════════════════════════════════════════════════════════
 * SINGLE CONTROL FILE — edit this file to update the whole website.
 * ═══════════════════════════════════════════════════════════════════════════
 *
 * MUSIC: Add your MP3 to `public/music/` (e.g. public/music/our-song.mp3) and set
 *        music.src to "/music/our-song.mp3". Browsers block autoplay; the visitor
 *        taps "Play" once — then it can play across all pages while navigating.
 *
 * IMAGES: Replace any `src` URL with your own links or files in `public/`
 *         (e.g. "/photos/samreen.jpg").
 *
 * THEME / COLOURS: Bright light romantic palettes in `src/index.css`.
 *                  Set `ui.theme` to `default` | `swan` | `golden` | `lilac`.
 *
 * PROPOSAL: Copy, whispers, and images live in `proposal` — route `/proposal`; nav link is styled apart from other items.
 *
 * HOME: `home.proposalInvite` asks her to open `/proposal`. `letter` drives the old-style letter block (date, salutation, sign-off).
 *
 * SPLASH: `splash` — full-screen welcome on load (`SplashScreen`); timing + lines editable here.
 */

export const siteControl = {
  /**
   * Global look — ties to `[data-theme]` in index.css (colours + gradients).
   */
  ui: {
    theme: 'default',
  },

  meta: {
    siteTitle: 'Nimra — with appreciation',
    description: 'A small place on the web for Nimra, from Roshaan.',
  },

  /**
   * First-visit full-screen welcome — shows a few seconds while the app mounts.
   * Names come from `people` unless you override below.
   */
  splash: {
    /** Total time before overlay removes (ms). Fade starts slightly earlier. */
    durationMs: 7000,
    /** Fade-out animation length (ms) */
    fadeMs: 900,
    eyebrow: 'For a wonderful friend',
    line: 'A little world of petals, verses, and shared memories — just for you.',
    subline: 'Opening…',
  },

  /** Main people — used across the site */
  people: {
    her: {
      fullName: 'Nimra',
      /** Shown on home and headers */
      shortName: 'Nimra',
      /** e.g. "24 September 2006" — display only */
      birthDate: '24 September 2006',
      /** Optional ISO for future use (birthday surprises, age display) */
      birthIso: '2006-02-13',
    },
    him: {
      fullName: 'Roshaan Haider',
      shortName: 'Roshaan',
    },
  },

  /** Home page hero */
  home: {
    eyebrow: 'For you',
    headline: 'Nimra',
    subline: 'Every page here is a quiet thank-you for being such a great friend.',
    quote:
      'True friends feel like home long before you find the words — your friendship is truly valued.',
    /**
     * Shown on Home — asks her to open the full Friendship/Message page (`/proposal`).
     */
    proposalInvite: {
      eyebrow: 'Please read',
      title: 'A message for a true friend',
      lines: [
        'Nimra— I have set aside a page dedicated to our friendship: words of genuine appreciation I wanted to share.',
        'When you are ready, I ask you kindly to open it, read it slowly, and take your time. No rush, no pressure — only warm friendship and goodwill, line by line.',
      ],
      ctaLabel: 'Read my message',
      ctaHint: 'You will find the rest on the next page — written for a valued friend.',
    },
  },

  /**
   * Home — classic letter block (old-fashioned salutation, date, signature).
   * Edit lines here; styling lives in `index.css` (`.site-home-letter`).
   */
  letter: {
    title: 'Letter',
    dateLine: '19 April 2026',
    salutation: 'My dear friend Nimra,',
    paragraphs: [
      'If letters still mean anything in a world of quick messages, let this one carry a warm greeting: you are spoken of here with respect, admiration, and genuine appreciation as a true friend.',
      'Your warmth and wonderful spirit bring light into the room — the softness of your laugh, your gentle presence, your kindness that makes people feel truly valued after they have met you. I see you — as a genuine, wonderful person and a friend I deeply treasure.',
      'Good friendships are built on mutual respect, understanding, and kindness. I am always thankful for your presence in my life and for the steady, honest friendship we share across every season.',
    ],
    closingPhrase: 'Warmest regards and friendship,',
    signature: 'Roshaan',
  },

  /** Timeline-style cards (Home) */
  moments: [
    {
      title: 'A September soul',
      detail: '24 September 2006 — winter softness and spring hope in one.',
    },
    {
      title: 'Rawalakot',
      detail: 'Your favourite cities in order — old Lahore first, then the cool hills of Rawalakot.',
    },
    {
      title: 'Words & petals',
      detail: 'Urdu on your tongue, flowers in your imagination — beauty doubled.',
    },
  ],

  closingLine: 'Always your friend — Roshaan.',

  /**
   * Swan — her favourite bird. Edit all copy here; hero image URL too.
   */
  swan: {
    title: 'The Swan',
    subtitle: 'For Nimra — grace, printed in feathers and glass-clear water.',
    /** Wikimedia Commons — reliable hotlink; swap for your own file in public/ if you prefer */
    heroImage:
      'https://upload.wikimedia.org/wikipedia/commons/3/35/Mute_swan_Vrhnika.jpg',
    heroImageAlt: 'Mute swan on water — Cygnus olor',
    lead:
      'They say the swan is all curve and calm — a line of light moving where the water forgets to ripple. You have always loved them; this page holds words meant to honor that grace.',
    sections: [
      {
        heading: 'Still water, long thoughts',
        paragraphs: [
          'A swan does not hurry the lake. It trusts the surface to carry it — and somehow the whole scene becomes gentler. That is how I think of the way you move through your days: unshowy, grounded, quietly unforgettable.',
          'If I could give you a reflection for every hard hour, it would look like this: white plumage on soft blue, the world hushed enough to hear your own heart.',
        ],
      },
      {
        heading: 'Pair bonds and loyalty',
        paragraphs: [
          'Swans are known for staying — for choosing a steady path across the water. Not loud gestures, but the kind of trust that shows up in small, repeated kindnesses. That is the sort of steady friendship I wish toward you, in every season.',
        ],
      },
      {
        heading: 'Written for you',
        paragraphs: [
          'Your favourite bird is not an accident. It is elegance without performance, strength without sharp edges — a reminder of the peace and poise you bring into the world.',
          'From Roshaan — knowing you carry Lahore and Rawalakot in your chest, trips to Rawalakot monuments in your memory, Urdu on your tongue, and flowers in your imagination. The swan is one more gentle mirror for all of that beauty.',
        ],
      },
    ],
    quote:
      'May you always find water calm enough to see yourself clearly — and good friends beside you who always celebrate your journey.',
    signOff: 'Your friend — Roshaan',
  },

  /**
   * Flower gallery — swap `src` for your favourite images.
   * Use high-resolution links; keep `alt` kind and accurate.
   */
  flowers: {
    intro:
      'A garden picked for you — roses, peonies, and colours that feel like your kind of gentle spirit.',
    /** All Wikimedia Commons direct file URLs (stable). Replace with /public/... if you like. */
    items: [
      {
        src: 'https://plus.unsplash.com/premium_photo-1669997826684-785d9039f547?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8cm9zZXN8ZW58MHx8MHx8fDA%3D',
        alt: 'Deep pink rose in bloom',
        caption: 'Roses — classic, bold, and gentle all at once.',
      },
      {
        src: 'https://upload.wikimedia.org/wikipedia/commons/1/1d/Peony_Pink.jpg',
        alt: 'Pink peony with water droplets',
        caption: 'Peonies — cheerful petals bringing brightness.',
      },
      {
        src: 'https://upload.wikimedia.org/wikipedia/commons/5/53/Tulipan_%28Tulipa%29.jpg',
        alt: 'Red tulip flower',
        caption: 'Tulips — bright lines against the sky.',
      },
      {
        src: 'https://images.unsplash.com/photo-1582794543139-8ac9cb0f7b11?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Zmxvd2Vyc3xlbnwwfHwwfHx8MA%3D%3D',
        alt: 'Cherry blossom flowers',
        caption: 'Blossoms — short seasons, long memories.',
      },
      {
        src: 'https://upload.wikimedia.org/wikipedia/commons/a/ab/Daffodil_%281%29.jpg',
        alt: 'Yellow daffodil flowers',
        caption: 'Sunlit blooms — warmth you can almost hold.',
      },
      {
        src: 'https://media.istockphoto.com/id/2196545732/photo/cosmos-blooming-in-a-park.webp?a=1&b=1&s=612x612&w=0&k=20&c=cUwf4sKUDDFI3UCK-lsmJK9jjqFhtuKvuC5PmuEE9eM=',
        alt: 'Colourful wildflower meadow',
        caption: 'Wildflowers — free, honest, and quietly brave.',
      },
    ],
  },

  /**
   * Cities — order is her favourites: 1) Lahore 2) Abbottabad.
   * Image URLs are direct Wikimedia Commons files (stable). Galleries hold extra views.
   * `islamabadLove` on Lahore: monuments in the capital she loves (historical / iconic).
   */
  cities: [
    {
      slug: 'lahore',
      name: 'Lahore',
      tagline: 'Androon shehr, Badshahi walls, and lanes that remember every footstep.',
      description:
        'Lahore is the city you put first — Walled City light, Mughal stone, food smoke at midnight, and the hush inside the Badshahi courtyard. Androon Lahore is not just “old town”; it is layers of history you can walk through with your hands on the same doorframes generations touched before you.',
      image:
        'https://letstravel.pk/wp-content/uploads/2022/11/badshahi-mosque-main-courtyard.jpeg',
      imageAlt: 'Badshahi Mosque, Lahore — red sandstone and domes against the sky',
      highlights: [
        'Androon Lahore & the Walled City — Delhi Gate, spice, and stories',
        'Badshahi Mosque & Lahore Fort — Mughal heart of the city',
        'Wazir Khan Mosque — frescoes and the lane-life of the old quarter',
      ],
      gallery: [
        {
          src: 'https://upload.wikimedia.org/wikipedia/commons/b/ba/Wazir_Khan_Mosque%2C_Lahore.jpg',
          alt: 'Wazir Khan Mosque facade with intricate tilework',
          caption: 'Wazir Khan Mosque — Androon Lahore, where every tile holds a colour.',
        },
        {
          src: 'https://upload.wikimedia.org/wikipedia/commons/9/92/Lahore_Fort.jpg',
          alt: 'Lahore Fort walls and gate',
          caption: 'Lahore Fort (Shahi Qila) — power and poetry in one skyline.',
        },
        {
          src: 'https://upload.wikimedia.org/wikipedia/commons/1/1b/Delhi_Gate%2C_Lahore.jpg',
          alt: 'Delhi Gate of the Walled City of Lahore',
          caption: 'Delhi Gate — stepping into the Walled City and its narrow, living lanes.',
        },
      ],
      islamabadLove: {
        title: 'Islamabad — trips to the capital',
        intro:
          'You love historical places and clean horizons; Islamabad is where the hills meet mosques and monuments — not “old” like Androon, but part of how you read Pakistan’s story.',
        images: [
          {
            src: 'https://upload.wikimedia.org/wikipedia/commons/4/40/Faisal_Mosque%2C_Islamabad%2C_Pakistan.jpg',
            alt: 'Faisal Mosque Islamabad against the Margalla hills',
            caption: 'Faisal Mosque — white geometry against the Margallas.',
          },
          {
            src: 'https://upload.wikimedia.org/wikipedia/commons/0/09/Pakistan_Monument%2C_Islamabad.jpg',
            alt: 'Pakistan Monument petals at dusk',
            caption: 'Pakistan Monument — the country’s story cast in stone.',
          },
        ],
      },
    },
    {
      slug: 'Rawalakot',
      name: 'Rawalakot',
      tagline: 'Pine air, Ilyasi hill, and the Hazara sky opening wide.',
      description:
        'Your second favourite city sits softer and higher — Hazara District’s green belt, cooler evenings, and the famous Ilyasi Mosque above the town. It is the kind of place that feels like a deep breath after the plain’s heat: mountains in the distance, chai that cools with the breeze.',
      image:
        'https://images.unsplash.com/photo-1660810265253-57e60ee14907?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGFib3R0YWJhZHxlbnwwfHwwfHx8MA%3D%3D',
      imageAlt: 'Ilyasi Mosque, Rawalakot, stone and trees on a ridge',
      highlights: [
        'Ilyasi Mosque — the ridge-top jamaat khana the city is known for',
        'Views over Rawalakot and the surrounding hills',
        'Roads toward Nathia Gali & the Galiyat — weekend air in the pines',
      ],
      gallery: [
        {
          src: 'https://upload.wikimedia.org/wikipedia/commons/5/5c/ABBOTTABAD_VIEW_FROM_ILYASI_MOSQUE.JPG',
          alt: 'Panoramic view of Abbottabad from Ilyasi',
          caption: 'City and hills — the view everyone climbs up for.',
        },
        {
          src: 'https://upload.wikimedia.org/wikipedia/commons/3/32/Ilyasi_Mosque%2C_Abbottabad%2C_Pakistan.jpg',
          alt: 'Ilyasi Mosque architecture close view',
          caption: 'Ilyasi Mosque — stone, trees, and the call to prayer over the valley.',
        },
      ],
    },
  ],

  /**
   * Urdu poetry — lines many readers know; swap for your favourites.
   * `urdu` uses proper script; `roman` helps readers who read Latin script.
   */
  poetry: {
    intro:
      'Urdu holds feeling in a single line. Here are a few verses to sit with — replace them in this file with the shayari that sounds like you two.',
    verses: [
      {
        urdu: 'ہزاروں خواہشیں ایسی کہ ہر خواہش پہ دم نکلے',
        roman: 'Hazaaron khwahishen aisi ke har khwahish pe dam nikle',
        poet: 'مرزا اسد اللہ خان غالب',
        note: 'A heartbeat of longing — Ghalib in one unforgettable line.',
      },
      {
        urdu: 'دِل ہی تو ہے نہ سنگ و خشت، درد سے بھر نہ آئے کیوں',
        roman: 'Dil hi to hai na sang-o-khisht, dard se bhar na aaye kyun',
        poet: 'مرزا اسد اللہ خان غالب',
        note: 'The heart is not stone — why should it not feel deeply?',
      },
      {
        urdu: 'تم سے پہلے بھی دنیا بہت خوبصورت تھی، تم آئے تو اور بھی ہو گئی',
        roman: 'Tum se pehle bhi duniya bohat khoobsurat thi, tum aaye to aur bhi ho gayi',
        poet: 'پروین شاکر',
        note: 'A gentle truth — the world was lovely; your presence makes it lovelier.',
      },
      {
        urdu: 'رَنج سے خو گزار ہو گئے لوگ',
        roman: 'Ranj se khoo-guzaar ho gaye log',
        poet: 'احمد فراز',
        note: 'Patience and reflection in times of quiet — Faraz.',
      },
      {
        urdu: 'بول، کہ لَب آزاد ہیں تیرے',
        roman: 'Bol, ke lab azaad hain tere',
        poet: 'فیض احمد فیض',
        note: 'Speak — your lips are free. A line that still opens rooms.',
      },
    ],
  },

  /** Virtual “gifts” — edit text; add `href` for real links (playlist, map, etc.) */
  gifts: [
    {
      title: 'This website',
      description: 'Hand-built pages you can revisit any time — change everything from one control file.',
      icon: '💝',
      href: null,
    },
    {
      title: 'A playlist in waiting',
      description: 'Add a Spotify/YouTube link in siteControl when you are ready.',
      icon: '🎵',
      href: null,
    },
    {
      title: 'Lahore sunset',
      description: 'A future evening with friends in the city you love — chai, rooftop, no rush.',
      icon: '🌆',
      href: null,
    },
    {
      title: 'Rawalakot hills',
      description: 'Pine breeze, Ilyasi above the town, good music playing on the road.',
      icon: '🚗',
      href: null,
    },
    {
      title: 'Poetry night',
      description: 'Urdu verses, soft light, and bright conversations between friends.',
      icon: '📖',
      href: null,
    },
    {
      title: 'Flowers, real ones',
      description: 'Because screens are pretty — but real blossoms bring genuine smile.',
      icon: '🌹',
      href: null,
    },
  ],

  /**
   * Friendship page — dedicated to honest appreciation and steady goodwill among friends.
   * Edit copy here; swap `images[].src` for your own photos or CC-licensed anime art you love.
   */
  proposal: {
    /** Shown in the nav — stands out from other links */
    navLabel: 'Message',
    navHint: '♥',
    eyebrow: 'For Nimra',
    title: 'A note of appreciation for a true friend.',
    subtitle:
      'A place for warmth — for celebrating a genuine friendship, and honoring who you are.',
    lead:
      'Nimra — thank you for being such a wonderful friend. Your presence, kindness, and humor make the world brighter, and I am glad to share this friendship with you.',

    sections: [
      {
        heading: 'The value of true friendship',
        paragraphs: [
          'Good friends make life lighter and conversations richer. It is a gift to have someone in your life who listens, shares a laugh, and offers genuine kindness without expecting anything in return.',
          'What stays constant: my high regard for you, my gratitude for your friendship, and my appreciation for the great memories we build together.',
        ],
      },
      {
        heading: 'Qualities that make you special',
        paragraphs: [
          'I admire your cheerful spirit — the genuine, warm, and uplifting energy you bring around your friends.',
          'I admire your humor — the small gestures, quick wit, and bright smiles that make every conversation memorable.',
          'I admire your kindness — the thoughtful way you care for people, making everyone around you feel comfortable and valued.',
        ],
      },
      {
        heading: 'A lasting bond of respect',
        paragraphs: [
          'Friendship is about walking along life’s path with mutual respect and shared joy. Like the calm swans moving across quiet waters, true friends bring stability and goodwill through every season.',
          'Feel free to customize the images below with art or moments that reflect the stories and worlds you enjoy!',
        ],
      },
    ],

    /**
     * Gallery images — direct Wikimedia + Unsplash URLs (stable hotlinks; no Pixabay CDN — it often 403s hotlinks).
     * Put your own files in `public/proposal/` and use e.g. `/proposal/my-art.png` anytime.
     */
    images: [
      {
        src: 'https://upload.wikimedia.org/wikipedia/commons/1/1d/Peony_Pink.jpg',
        alt: 'Pink peony in bloom — soft petals',
        caption: 'Soft blooms — carrying a sense of peace and warm friendship.',
      },
      {
        src: 'https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?w=1200&q=85&fm=jpg&fit=max',
        alt: 'Anime figures and art books — colourful, cosy shelf',
        caption: 'Anime colours and stories — for the worlds you love, and the joy you share with friends.',
      },
      {
        src: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=1200&q=85&fm=jpg&fit=max',
        alt: 'Two hands forming a heart shape',
        caption: 'A friendly gesture — simple, cheerful, and sincere.',
      },
    ],

    quote:
      'A true friend is someone who enriches your life just by being in it. Thank you for your continued warmth and friendship.',

    closingLine: 'Always your friend in kindness and truth — Roshaan.',

    /** Tiny floating affirmations (shown as chips) */
    whispers: [
      'Warm laughter',
      'Kindness first',
      'A true friend',
      'Steady support',
    ],
  },

  /**
   * Global background music — plays site-wide after the visitor presses Play once.
   * Leave src empty until you add a file under public/music/
   */
  music: {
    src: '/music/bran.mpeg',
    title: 'Our song',
    artist: '',
    /** 0–1 */
    volume: 0.45,
    loop: true,
  },

  /** Footer / small print */
  footer: {
    line: 'Made with appreciation for Nimra — Roshaan Haider.',
  },
}

export default siteControl