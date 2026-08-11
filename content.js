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
    eyebrow: 'ISSUE 001 · FEB 2026',
    title: 'Science — Off-Script.',
    subtitle: 'The conversations behind the discoveries.',
    description: 'We talk to the doctors, researchers, and students shaping what happens next — and ask the questions that don’t make it into the paper.',
    primaryButton: { label: 'Explore Interviews →', href: '#interviews' },
    secondaryButton: { label: 'Ask a Question', href: '#community' },
image: 'assets/busy-laboratory-setting-stockcake.jpg',
    imageAlt: 'Researcher working in a laboratory',
    badge: 'Conversation 001'
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
      image: 'assets/image2.png',
      imageAlt: 'Doctor researching in a laboratory',
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
      image: 'assets/image3.png',
      imageAlt: 'Researcher examining a sample in a laboratory',
      link: 'article.html?id=conversation-003',
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
    image: 'assets/image4.png',
    imageAlt: 'Researcher smiling beside a microscope',
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
  }
};
