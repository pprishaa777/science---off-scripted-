/*
  EDIT THIS FILE to update the website.
  You can change text, links, dates, images, buttons, and add/remove conversations.
  Images live in the /assets folder.
*/

const SITE = {
  brand: 'SCIENCE — OFF-SCRIPT',
  nav: [
  { label: 'Home', href: 'index.html' },
  { label: 'Interviews', href: 'interviews.html' },
  { label: 'Discoveries', href: 'discoveries.html' },
  { label: 'Explained', href: 'explained.html' },
  { label: 'Community', href: 'community.html' },
  { label: 'About', href: 'about.html' }
],
  searchLabel: 'Search',
  communityButton: { label: 'Join the Community', href: 'community.html' },

  hero: {
    eyebrow: 'EST 2026',
    title: 'Science — Off-Script.',
    subtitle: 'The conversations behind the discoveries.',
    description: 'We talk to the doctors, researchers, and students shaping what happens next — and ask the questions that don’t make it into the papers.',
    primaryButton: { label: 'Explore Interviews →', href: '#interviews' },
    secondaryButton: { label: 'Ask a Question', href: '#community' },
image:'assets/brain.avif',
    imageAlt: 'Medical X-ray Image',
    badge: ''
  },
  latest: {
    eyebrow: 'LATEST CONVERSATIONS',
    title: 'Real people. Real research.\nReal curiosity.',
    link: { label: 'Explore Interviews →', href: '#interviews' }
  },

  conversations: [
  {
    id: 'conversation-002',
    eyebrow: 'CONVERSATION 002 · AI IN MEDICINE',
    title: 'The doctor who trained an algorithm to notice what she couldn’t',
    description: 'Dr. Noor Kessler on radiology, humility, and building AI that keeps the doctor in the loop.',
    person: 'Dr. Noor Kessler',
    role: 'Clinical Lead, Imaging AI Program, Rivendale University Hospital',
    image: "assets/robot's hand.png",
    imageAlt: 'Robot hand',
    link: 'article.html?id=conversation-002',
    linkLabel: 'Read the Interview ↗'
  },

  {
    id: 'conversation-003',
    eyebrow: 'CONVERSATION 003 · CANCER RESEARCH',
    title: 'Listening to what a single cancer cell is trying to tell you',
    description: 'Dr. Hana Castellani on single-cell sequencing, why the “tumor” is a lie, and the beauty of a stubborn outlier.',
    person: 'Dr. Hana Castellani',
    role: 'Senior Researcher, Cancer Systems Biology, Westgate Cancer Research Centre',
    image: 'assets/micro.avif',
    imageAlt: 'Microscope',
    link: 'article.html?id=conversation-003',
    linkLabel: 'Read the Interview ↗'
  },

  {
    id: 'conversation-004',
    eyebrow: 'CONVERSATION 004 · NEUROSCIENCE',
    title: 'What happens when we look at the brain differently',
    description: 'A conversation about new ways of studying the brain, unexpected patterns, and the questions scientists are still trying to answer.',
    person: 'Dr. Maya Rowan',
    role: 'Neuroscience Researcher',
    image: 'assets/brain.jpg',
    imageAlt: 'Brain research',
    link: 'article.html?id=conversation-004',
    linkLabel: 'Read the Interview ↗'
  }
],

  featured: {
    eyebrow: 'FEATURED CONVERSATION',
    title: 'Behind the discovery.',
    allLink: { label: 'All conversations →', href: '#interviews' },
    eyebrowArticle: 'CONVERSATION 001 · GENE THERAPY',
    articleTitle: 'Rewriting the code of life, one line at a time',
    description: 'A conversation about gene therapy, patience, and what it means to fix a sentence in the human genome.',
    person: 'Dr. Amara Linnaeus',
    role: 'Principal Investigator, Northbrook Institute of Molecular Medicine',
    image: 'assets/vac.avif',
    imageAlt: 'Researcher working in the lab',
    link: 'article.html?id=conversation-001',
    linkLabel: 'Read the Interview ↗'
  },

  footer: {
    communityTitle: 'Have a question for a researcher?',
    communityText: 'Send us the question you wish someone would ask.',
    button: { label: 'Join the Community', href: '#community' },
    copyright: '© 2026 Science — Off-Script.'
  }
};

// Article content is also editable here.
const ARTICLES = {
  'conversation-001': {
    date: 'FEB 2026',
    eyebrow: 'CONVERSATION 001 · GENE THERAPY',
    title: 'Rewriting the code of life, one line at a time',
    intro: 'A conversation about gene therapy, patience, and what it means to fix a sentence in the human genome.',
    person: 'Dr. Amara Linnaeus',
    role: 'Principal Investigator, Northbrook Institute of Molecular Medicine',
    image: 'assets/image4.png',
    body: [
      { heading: 'Start here.', text: 'Replace this paragraph with the opening of your interview. You can edit or add as many sections as you like.' },
      { heading: 'The question behind the research', text: 'Add the interview, story, quotes, links, references, or other material here.' }
    ]
  },
  'conversation-002': {
    date: 'FEB 2026',
    eyebrow: 'CONVERSATION 002 · AI IN MEDICINE',
    title: 'The doctor who trained an algorithm to notice what she couldn’t',
    intro: 'Dr. Noor Kessler on radiology, humility, and building AI that keeps the doctor in the loop.',
    person: 'Dr. Noor Kessler',
    role: 'Clinical Lead, Imaging AI Program, Rivendale University Hospital',
    image: 'assets/image2.png',
    body: [
      { heading: 'Start here.', text: 'Replace this paragraph with your interview introduction.' },
      { heading: 'What the algorithm sees', text: 'Write your story here. This page is intentionally data-driven so you can update the article without touching the layout.' }
    ]
  },
  'conversation-003': {
    date: 'FEB 2026',
    eyebrow: 'CONVERSATION 003 · CANCER RESEARCH',
    title: 'Listening to what a single cancer cell is trying to tell you',
    intro: 'Dr. Hana Castellani on single-cell sequencing, why the “tumor” is a lie, and the beauty of a stubborn outlier.',
    person: 'Dr. Hana Castellani',
    role: 'Senior Researcher, Cancer Systems Biology, Westgate Cancer Research Centre',
    image: 'assets/image3.png',
    body: [
      { heading: 'Start here.', text: 'Replace this paragraph with your interview introduction.' },
      { heading: 'One cell at a time', text: 'Add your article text, images, links, embeds, and other content here.' }
    ]
  },
  'conversation-004': {
  date: '2026',
  eyebrow: 'CONVERSATION 004 · NEUROSCIENCE',
  title: 'What happens when we look at the brain differently',
  intro: 'A conversation about new ways of studying the brain, unexpected patterns, and the questions scientists are still trying to answer.',
  person: 'Dr. Maya Rowan',
  role: 'Neuroscience Researcher',
  image: 'assets/brain.jpg',
  body: [
    {
      heading: 'Start here.',
      text: 'Replace this paragraph with your interview introduction.'
    },
    {
      heading: 'Seeing the brain differently',
      text: 'Add your interview, research, quotes, references, and other material here.'
    }
  ]
},
};

// Pages below are also editable here.

const PAGES = {

  discoveries: {
  eyebrow: 'DISCOVERIES',
  title: 'Discoveries worth talking about.',
  description: 'New findings, unexpected breakthroughs, and the science changing what we know about the world.',

  sectionEyebrow: 'LATEST DISCOVERIES',
  sectionTitle: 'What scientists are finding now.',

  stories: [
  {
    eyebrow: 'DISCOVERY 001',
    title: 'A new way of looking at the brain',
    description: 'Replace this with the first science story you want to feature.',
    image: 'assets/brain.jpg',
    imageAlt: 'Scientific research',
    link: 'article.html?id=conversation-001',
    linkLabel: 'Read the story →'
  },

  {
    eyebrow: 'DISCOVERY 002',
    title: 'When medicine meets artificial intelligence',
    description: 'Replace this with the second science story you want to feature.',
    image: 'assets/image2.png',
    imageAlt: 'Medical research',
    link: 'article.html?id=conversation-002',
    linkLabel: 'Read the story →'
  },

  {
    eyebrow: 'DISCOVERY 003',
    title: 'What a single cell can reveal',
    description: 'Replace this with the third science story you want to feature.',
    image: 'assets/image3.png',
    imageAlt: 'Cancer research',
    link: 'article.html?id=conversation-003',
    linkLabel: 'Read the story →'
  },

  {
    eyebrow: 'DISCOVERY 004',
    title: 'The next question scientists are asking',
    description: 'Replace this with the fourth science story you want to feature.',
    image: 'assets/brain.avif',
    imageAlt: 'Science research',
    link: 'article.html?id=conversation-004',
    linkLabel: 'Read the story →'
  }
]
},


  explained: {
  eyebrow: 'EXPLAINED',
  title: 'Science, without the jargon.',
  description: 'Complicated ideas, research, and discoveries explained clearly — without losing what makes the science interesting.',

  sectionEyebrow: 'LATEST EXPLAINERS',
  sectionTitle: 'The science behind the story.',

  stories: [
    {
      eyebrow: 'EXPLAINED 001',
      title: 'What happens when we rewrite a gene?',
      description: 'A clear introduction to gene therapy and how scientists are learning to edit the instructions inside our cells.',
      image: 'assets/brain.jpg',
      imageAlt: 'Brain research',
      link: 'article.html?id=conversation-001',
      linkLabel: 'Read the explanation →'
    },
    {
      eyebrow: 'EXPLAINED 002',
      title: 'How does medical AI actually work?',
      description: 'An accessible look at how algorithms can help doctors find patterns in medical images.',
      image: 'assets/image2.png',
      imageAlt: 'Medical research',
      link: 'article.html?id=conversation-002',
      linkLabel: 'Read the explanation →'
    },
    {
      eyebrow: 'EXPLAINED 003',
      title: 'Why does studying one cell matter?',
      description: 'Understanding single cells can reveal details about diseases that disappear when we only look at an entire tumour.',
      image: 'assets/image3.png',
      imageAlt: 'Cancer research',
      link: 'article.html?id=conversation-003',
      linkLabel: 'Read the explanation →'
    }
  ]
},


  community: {
  eyebrow: 'COMMUNITY',
  title: 'Have a question for a researcher?',
  description: 'Send us the question you wish someone would ask. The questions that make you curious, challenge assumptions, or simply make you wonder “why?”',

  formTitle: 'What would you ask?',
  formText: 'We’re building a community around curiosity. Tell us what you want to know and your question could become part of a future conversation.'
},


  about: {
  eyebrow: 'ABOUT SCIENCE — OFF-SCRIPT',
  title: 'Science is more than the final paper.',
  description: 'Science — Off-Script is a space for the conversations, questions, discoveries, and ideas that happen behind the published research.',

  whyEyebrow: 'WHY WE’RE HERE',
  whyTitle: 'Behind every discovery is a person.',
  whyText: [
    'Research is often reduced to a headline, a result, or a number. But science is a human process.',
    'There are questions, failures, unexpected results, long nights, stubborn problems, and moments when something finally makes sense.',
    'Science — Off-Script is about those stories.'
  ],

  coverageEyebrow: 'WHAT WE COVER',
  coverageTitle: 'Curiosity first.',
  coverageText: [
    'We talk to researchers, doctors, students, and scientists about the work they’re doing and the questions they’re still trying to answer.',
    'From medicine and biology to technology and the unexpected discoveries that change how we see the world.'
  ]
}

};
