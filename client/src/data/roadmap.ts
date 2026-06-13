export type PathId = 'sponsored' | 'integrated' | 'modular' | 'hybrid' | 'future';

export interface Question {
  id: string;
  title: string;
  options: {
    label: string;
    value: string;
    points: Partial<Record<PathId, number>>;
  }[];
}

export interface RoadmapResult {
  id: PathId;
  title: string;
  tagline: string;
  description: string;
  cost: string;
  timeline: string;
  risk: string;
  steps: string[];
  schools: {
    name: string;
    description: string;
  }[];
  watchOut: string;
}

export const roadmapQuestions: Question[] = [
  {
    id: 'age',
    title: 'How old are you?',
    options: [
      { label: 'Under 18', value: 'under18', points: { future: 10 } },
      { label: '18 - 35', value: '18to35', points: { sponsored: 2, integrated: 2, hybrid: 2, modular: 1 } },
      { label: '36 - 50', value: '36to50', points: { modular: 5, integrated: 1 } },
      { label: '51+', value: 'over50', points: { modular: 5 } }
    ]
  },
  {
    id: 'budget',
    title: 'What is your realistic budget or funding capacity?',
    options: [
      { label: 'Less than £10,000', value: 'low', points: { sponsored: 10, hybrid: 1 } },
      { label: '£10,000 - £50,000', value: 'medium', points: { hybrid: 5, modular: 3 } },
      { label: '£50,000 - £90,000', value: 'high', points: { modular: 5, integrated: 1 } },
      { label: '£90,000+', value: 'veryhigh', points: { integrated: 10, modular: 2 } }
    ]
  },
  {
    id: 'time',
    title: 'How much time can you dedicate to training?',
    options: [
      { label: 'Full-time (I can stop working)', value: 'fulltime', points: { integrated: 3, sponsored: 3, hybrid: 3, modular: 1 } },
      { label: 'Part-time (I need to keep my job)', value: 'parttime', points: { modular: 10 } }
    ]
  },
  {
    id: 'education',
    title: 'What is your highest level of education?',
    options: [
      { label: 'No GCSEs / High School equivalent yet', value: 'none', points: { future: 5, modular: 1 } },
      { label: 'GCSEs / High School equivalent', value: 'gcses', points: { modular: 2, integrated: 2, hybrid: 2 } },
      { label: 'A-Levels / Degree', value: 'degree', points: { sponsored: 3, integrated: 2, hybrid: 2, modular: 1 } }
    ]
  },
  {
    id: 'relocation',
    title: 'Are you willing to relocate to Europe for training?',
    options: [
      { label: 'Yes, I will go wherever is cheapest/best', value: 'yes', points: { modular: 3, hybrid: 3 } },
      { label: 'No, I need to stay in the UK', value: 'no', points: { integrated: 2, modular: 1 } }
    ]
  }
];

export const roadmapResults: Record<PathId, RoadmapResult> = {
  sponsored: {
    id: 'sponsored',
    title: 'The Fully Sponsored Cadet',
    tagline: 'The Golden Ticket',
    description: 'Based on your age, academics, and budget, your best shot is aiming for a fully funded airline cadet programme. These are highly competitive (often less than 1% acceptance rates), but they cover the entire £100k+ cost of training. If you don\'t secure a spot, you\'ll need to look at military options or save aggressively for the modular route.',
    cost: '£0 (Airline covers tuition)',
    timeline: '18-24 months',
    risk: 'Low Financial Risk / High Competition',
    steps: [
      'Book a Class 1 Medical to ensure you are eligible before applying.',
      'Research the BA Speedbird, Jet2 FlightPath, and Aer Lingus Future Pilot programmes.',
      'Invest in aptitude testing preparation (e.g., Cut-e, PILAPT).',
      'Gain customer service or leadership experience to boost your non-technical skills.',
      'Create a backup plan (Plan B) in case you don\'t pass the brutal selection process.'
    ],
    schools: [
      { name: 'BA Speedbird Academy', description: 'Fully funded by British Airways. Extremely competitive.' },
      { name: 'Jet2 FlightPath', description: 'Fully funded ATPL with a guaranteed job on the Boeing 737.' },
      { name: 'Royal Air Force (RAF)', description: 'Paid to train, but requires a 12-year military commitment.' }
    ],
    watchOut: 'Do not pay for a PPL just to boost your application. Airlines are testing your aptitude and personality, not your existing flying skills.'
  },
  integrated: {
    id: 'integrated',
    title: 'The Fast-Track Integrated',
    tagline: 'The Direct Route',
    description: 'You have the capital and the time to dedicate fully to your training. The Integrated ATPL route takes you from zero experience to a frozen ATPL in one continuous, highly structured course. It is the most expensive route, but it is fast, focused, and often includes strong airline placement support.',
    cost: '£90,000 - £130,000+',
    timeline: '18-24 months',
    risk: 'High Financial Risk / Fast Completion',
    steps: [
      'Book a Class 1 Medical immediately. Do not spend £100k without knowing you can fly commercially.',
      'Visit at least 3 major integrated flight schools on their open days.',
      'Ask schools for their true placement statistics, not just marketing numbers.',
      'Secure your funding. If using a loan secured against property, understand the risks.',
      'Prepare for the school\'s internal assessment day.'
    ],
    schools: [
      { name: 'CAE Oxford', description: 'Premium global academy with strong airline connections.' },
      { name: 'Skyborne', description: 'Modern UK academy partnered with BA and Jet2.' },
      { name: 'FTEJerez', description: 'All-inclusive campus in Spain, popular with UK cadets.' }
    ],
    watchOut: 'The quoted price rarely includes the Type Rating (£25k-£35k) or living costs. Budget an extra 15% for hidden fees and delays.'
  },
  modular: {
    id: 'modular',
    title: 'The Smart Modular',
    tagline: 'The Flexible Route',
    description: 'You need flexibility, either to keep working, spread the cost, or simply to save money. The Modular route allows you to complete your training step-by-step (PPL, Theory, Hour Building, CPL/IR). It requires immense self-discipline, but you will end up with the exact same licence as an integrated student for £30k-£50k less.',
    cost: '£55,000 - £85,000',
    timeline: '2-4 years (Self-paced)',
    risk: 'Lower Financial Risk / Requires High Discipline',
    steps: [
      'Book a Class 1 Medical to ensure commercial eligibility.',
      'Find a local flying club and start your Private Pilot Licence (PPL).',
      'Enroll in a distance-learning ATPL theory course (e.g., Bristol Groundschool).',
      'Plan your hour building. Consider going to Greece or the US for better weather and cheaper aircraft rental.',
      'Save aggressively. Pay for each module in cash as you go to avoid debt.'
    ],
    schools: [
      { name: 'Bristol Groundschool', description: 'The industry standard for distance-learning ATPL theory.' },
      { name: 'Bartolini Air (Poland)', description: 'Highly respected for modular CPL/IR, partnered with Ryanair.' },
      { name: 'Local UK Aero Clubs', description: 'The best place to start your PPL and build your foundation.' }
    ],
    watchOut: 'Skill decay. If you leave too much time between modules, you will need to pay for extra refresher flights, wiping out your savings.'
  },
  hybrid: {
    id: 'hybrid',
    title: 'The Hybrid / Airline-Bonded',
    tagline: 'The Middle Ground',
    description: 'You have some capital, but not enough for a full £100k course. Your best route is an airline-bonded or pre-financed programme. You pay a smaller upfront fee, and the airline finances the rest, deducting it from your future salary. You are bonded to that airline for several years, but you get a guaranteed job.',
    cost: '£15,000 - £40,000 upfront (Rest deducted from salary)',
    timeline: '18-24 months',
    risk: 'Medium Financial Risk / Bonded to Airline',
    steps: [
      'Book a Class 1 Medical.',
      'Research the Wizz Air Pilot Academy and Ryanair Future Flyer programmes.',
      'Prepare for intense aptitude and psychometric testing (e.g., Cut-e).',
      'Ensure you are comfortable living and working in Eastern/Central Europe, as this is where you will likely be based initially.',
      'Review the bond contracts carefully to understand what happens if you fail training.'
    ],
    schools: [
      { name: 'Wizz Air Pilot Academy', description: 'Requires ~€14k upfront. The rest is deducted from your salary over 5 years.' },
      { name: 'Ryanair Future Flyer', description: 'Mentored programme. You fund the ATPL, but the Type Rating is bonded.' }
    ],
    watchOut: 'If you fail the course or leave the airline before your bond expires, you will be liable for the full remaining cost of the training.'
  },
  future: {
    id: 'future',
    title: 'The Future Aviator',
    tagline: 'Laying the Groundwork',
    description: 'You are too young to start commercial training, which is actually a huge advantage. You have time to build the exact profile airlines are looking for without spending a fortune. Focus on your education, get free flying experience, and start saving.',
    cost: 'Minimal',
    timeline: 'Ongoing until age 18',
    risk: 'Zero Risk',
    steps: [
      'Join the Air Cadets (ATC). It provides incredible aviation exposure, discipline, and often free flying lessons.',
      'Focus on your GCSEs and A-Levels, particularly Maths and Physics.',
      'Start saving money now. Even a part-time job will help fund your initial PPL later.',
      'If you plan to go to University, look into the University Air Squadrons (UAS).',
      'Read books on aviation, understand the industry, and visit local airfields.'
    ],
    schools: [
      { name: 'Air Cadets (RAFAC)', description: 'The best possible start for a UK teenager interested in aviation.' },
      { name: 'University Air Squadrons', description: 'Free military flying training while you complete your degree.' },
      { name: 'The Air League', description: 'Apply for their gliding and flying scholarships.' }
    ],
    watchOut: 'Do not let anyone convince you that you *must* have a degree to be a pilot. You don\'t. But good GCSEs are essential.'
  }
};
