export const SITE_INFO = {
  name: 'Brits Business Hub',
  phone: '+447348070442',
  email: 'info@britsbusinesshub.net',
  whatsapp: 'https://wa.me/447348070442',
};

export const NAV_LINKS = [
  { label: 'Home', href: '#home' },
  { label: 'Card Machines', href: '#card-machines' },
  { label: 'EPOS Systems', href: '#epos-systems' },
  { label: 'About Us', href: '#about' },
  { label: 'Contact Us', href: '#contact' },
];

export const HERO = {
  eyebrow: 'CARD MACHINES & EPOS FOR UK BUSINESSES',
  headline: 'Take Payments Faster. Pay Less. Run Your Business Smarter.',
  subtext:
    'Find a card machine, EPOS system or integrated payment setup built around the way your business operates.',
  subtextSecondary:
    'Already using another provider? We can also help you review your current setup and explore more competitive options.',
  benefits: [
    '£0 upfront options available*',
    '£0 line rental options available*',
    'Competitive transaction rates*',
    'Countertop, portable & mobile terminals',
    'Integrated EPOS options',
    'Free, no-obligation consultation',
  ],
  primaryCTA: 'Get My Free Quote',
  secondaryCTA: 'Review My Current Provider',
  reassurance: 'Takes less than 60 seconds • No obligation • UK business support',
};

export const FORM_STEPS = {
  step1: {
    question: 'What are you looking for?',
    options: [
      'Card Machine',
      'EPOS System',
      'Card Machine + EPOS',
      'Switch Current Provider',
    ],
  },
  step2: {
    question: 'What type of business do you run?',
    options: [
      'Restaurant / Café',
      'Retail',
      'Salon / Barber',
      'Pub / Bar',
      'Trades / Mobile Business',
      'Other',
    ],
  },
};

export const TRUST_STRIP = {
  rating: 5,
  reviewCount: 150,
  indicators: [
    'UK business support',
    'Transparent consultation',
    'No-obligation quote',
    'Multiple payment and EPOS options',
  ],
};

export const PAIN_POINTS = [
  {
    icon: '💰',
    title: 'Paying Too Much?',
    description:
      'High transaction charges and monthly costs can reduce your margins.',
    cta: 'Review My Fees →',
    context: { service: 'Review Transaction Fees' },
  },
  {
    icon: '💳',
    title: 'Paying Upfront for Equipment?',
    description:
      'Large hardware costs can make upgrading harder than it needs to be.',
    cta: 'See £0 Upfront Options →',
    context: { service: '£0 Upfront Options' },
  },
  {
    icon: '📡',
    title: 'Paying Line Rental?',
    description:
      'Modern payment solutions may remove the need for traditional line-rental charges.',
    cta: 'Compare My Setup →',
    context: { service: 'Compare Line Rental' },
  },
  {
    icon: '🔄',
    title: 'Entering Payments Twice?',
    description:
      'Typing the sale into your till and then entering the same amount into the terminal wastes time and increases the risk of mistakes.',
    cta: 'Explore Integrated EPOS →',
    context: { service: 'Integrated EPOS' },
  },
];

export const SOLUTIONS = [
  {
    id: 'card-machines',
    title: 'CARD MACHINES',
    subtitle: 'Simple, Reliable Payments Wherever You Trade',
    description:
      'Choose a terminal based on how and where your customers pay.',
    features: [
      'Countertop',
      'Portable',
      'Mobile',
      'Contactless payments',
      'Apple Pay & Google Pay',
      'Wi-Fi / 4G options',
    ],
    cta: 'Find My Card Machine',
  },
  {
    id: 'epos-systems',
    title: 'EPOS SYSTEMS',
    subtitle: 'More Than a Till.',
    description:
      'Bring sales, payments, reporting, stock and staff management together.',
    features: [
      'Integrated payments',
      'Sales reporting',
      'Stock management',
      'Staff permissions',
      'Multi-terminal options',
      'Business insights',
    ],
    cta: 'Find My EPOS System',
  },
  {
    id: 'integrated',
    title: 'CARD MACHINE + EPOS',
    subtitle: 'One Connected Checkout',
    description:
      'Enter the sale once. The payment amount is sent directly to the terminal and the transaction is recorded automatically. Less manual entry. Fewer mistakes. Faster checkout.',
    features: [],
    cta: 'Build My Setup',
  },
];

export const CARD_MACHINE_TYPES = [
  {
    id: 'countertop',
    title: 'Countertop Card Machine',
    subtitle: 'Best for fixed checkout points',
    description:
      'Ideal for retail stores, cafés, receptions and businesses where customers usually pay at one location.',
    idealFor: [],
    cta: 'See Countertop Options',
  },
  {
    id: 'portable',
    title: 'Portable Card Machine',
    subtitle: 'Take payments around your premises',
    description: null,
    idealFor: ['Restaurants', 'Pubs', 'Salons', 'Hospitality venues'],
    cta: 'See Portable Options',
  },
  {
    id: 'mobile',
    title: 'Mobile Card Machine',
    subtitle: 'Take payments wherever you work',
    description: null,
    idealFor: [
      'Tradespeople',
      'Market sellers',
      'Delivery businesses',
      'Mobile services',
      'Events',
    ],
    cta: 'See Mobile Options',
  },
];

export const INTEGRATED_EPOS = {
  withoutSteps: [
    'Enter order into EPOS',
    'Enter amount manually into terminal',
    'Customer pays',
    'Reconcile systems later',
  ],
  withSteps: [
    'Enter sale once',
    'Payment automatically sent to terminal',
    'Customer pays',
    'Transaction automatically recorded',
  ],
  outcome: 'Faster checkout. Fewer input errors. Easier reconciliation.',
  cta: 'Improve My Checkout',
};

export const KEY_BENEFITS = [
  {
    icon: '⚡',
    title: 'Faster Checkout',
    description: 'Reduce unnecessary steps when customers are ready to pay.',
  },
  {
    icon: '💷',
    title: 'Lower Payment Costs',
    description:
      'Explore competitive transaction-rate options based on your business profile and payment volumes.*',
  },
  {
    icon: '✋',
    title: 'Less Manual Entry',
    description:
      'Integrated EPOS can reduce the need to type payment amounts twice.',
  },
  {
    icon: '📊',
    title: 'Better Sales Visibility',
    description:
      'See what your business is selling and monitor performance more easily.',
  },
  {
    icon: '📦',
    title: 'Better Stock Control',
    description:
      'Track product movement and identify what is selling.',
  },
  {
    icon: '👥',
    title: 'Easier Staff Management',
    description:
      'Control access and monitor sales activity more effectively.',
  },
];

export const INDUSTRIES = [
  {
    id: 'restaurants',
    icon: '🍽️',
    title: 'Restaurants & Cafés',
    description:
      'Portable payments, integrated EPOS and smoother checkout.',
    cta: 'Explore Hospitality Solutions',
  },
  {
    id: 'retail',
    icon: '🛍️',
    title: 'Retail',
    description:
      'Reliable counter payments, sales reporting and stock management.',
    cta: 'Explore Retail Solutions',
  },
  {
    id: 'salons',
    icon: '💇',
    title: 'Salons & Barbers',
    description:
      'Portable payments with simpler sales and staff management.',
    cta: 'Explore Salon Solutions',
  },
  {
    id: 'pubs',
    icon: '🍺',
    title: 'Pubs & Bars',
    description:
      'Fast payments for busy service environments.',
    cta: 'Explore Pub & Bar Solutions',
  },
  {
    id: 'trades',
    icon: '🔧',
    title: 'Trades & Mobile Businesses',
    description:
      'Take payments wherever the work takes you.',
    cta: 'Explore Mobile Payment Solutions',
  },
];

export const SWITCHER_INTRO = {
  headline: 'Already Have a Card Machine or EPOS System?',
  subheadline: 'Before You Renew, Compare Your Options.',
  body: [
    'Your current provider may have been suitable when you first signed up.',
    'But your business may now be:',
  ],
  painList: [
    'Processing more card payments',
    'Paying higher transaction fees than necessary',
    'Paying terminal rental',
    'Paying line-rental charges',
    'Using outdated equipment',
    'Paying expensive EPOS software fees',
    'Entering payments manually',
    'Approaching contract renewal',
  ],
  warning:
    "Don't automatically renew without comparing what else may be available.",
};

export const SWITCH_PAIN_POINTS = [
  {
    title: 'High Transaction Charges',
    problem:
      'A small difference in transaction rates can become a meaningful cost when you process thousands of pounds every month.',
    solution:
      'Explore competitive transaction-rate options based on your business profile.*',
    cta: 'Review My Transaction Fees',
    context: { reason: 'High transaction fees' },
  },
  {
    title: 'High Upfront Hardware Costs',
    problem:
      'Some businesses pay significant amounts just to replace or upgrade their equipment.',
    solution: '£0 upfront hardware options available*',
    cta: 'Check My Eligibility',
    context: { reason: 'Upfront hardware costs' },
  },
  {
    title: 'Paying Line Rental',
    problem:
      'Some older terminal setups include additional connectivity or line-rental costs.',
    solution: '£0 line rental options available*',
    cta: 'Compare My Current Setup',
    context: { reason: 'Line rental costs' },
  },
  {
    title: 'High Monthly EPOS Costs',
    problem:
      'Software subscriptions, terminal charges, support fees and add-ons can quickly increase the real cost of an EPOS system.',
    solution:
      'Compare the overall cost of your setup, not only the headline monthly price.',
    cta: 'Review My EPOS Costs',
    context: { reason: 'EPOS software costs' },
  },
];

export const PROVIDER_COMPARISON = [
  { current: 'High transaction charges', alternative: 'Competitive transaction-rate options*' },
  { current: 'Upfront hardware fees', alternative: '£0 upfront options*' },
  { current: 'Line-rental charges', alternative: '£0 line-rental options*' },
  { current: 'Separate EPOS + terminal', alternative: 'Integrated checkout' },
  { current: 'Manual payment entry', alternative: 'Automatic payment transfer' },
  { current: 'Old terminal', alternative: 'Modern portable/mobile options' },
  { current: 'Limited reporting', alternative: 'EPOS reporting tools' },
  { current: 'High monthly software costs', alternative: 'Alternative EPOS packages' },
];

export const SWITCHER_FUNNEL = {
  headline: 'Could Your Current Provider Be Costing You More Than You Think?',
  subtext: 'Answer a few quick questions.',
  step3: {
    question: 'Who is your current provider?',
    options: [
      'Worldpay',
      'Barclaycard',
      'PayPal Zettle',
      'Square',
      'SumUp',
      'Tyl by NatWest',
      'Dojo',
      'Takepayments',
      'Lloyds Bank Cardnet',
      'Handepay',
      'Other',
    ],
  },
  step4: {
    question: 'Approximate monthly card turnover?',
    options: [
      'Under £5,000',
      '£5,000–£10,000',
      '£10,000–£25,000',
      '£25,000–£50,000',
      '£50,000+',
    ],
  },
  step5: {
    question: 'What would you most like to improve?',
    options: [
      'Lower transaction charges',
      'Remove upfront costs',
      'Reduce monthly fees',
      'Better card machine',
      'Better EPOS',
      'Integrated payments',
      'Unsure — review everything',
    ],
  },
};

export const CASE_STUDIES = [
  {
    location: 'Birmingham',
    businessType: 'Café',
    challenge:
      'The café relied on one fixed payment point during busy periods, creating unnecessary movement between customers and the counter.',
    solution:
      'A portable card-payment setup allowed staff to take payments closer to customers.',
    outcome:
      'A smoother checkout experience during busy trading periods and less dependence on one fixed terminal.',
    cta: 'Find a Setup for My Café',
  },
  {
    location: 'Manchester',
    businessType: 'Restaurant',
    challenge:
      'Staff entered orders into the till and manually entered the total again into the card terminal.',
    solution:
      'An integrated EPOS and card-payment setup connected the two systems.',
    outcome:
      'Less duplicate entry, a smoother payment process and easier end-of-day reconciliation.',
    cta: 'Improve My Restaurant Checkout',
  },
  {
    location: 'Leeds',
    businessType: 'Retailer',
    challenge:
      'The business wanted better visibility of sales and stock while reducing the number of disconnected systems it managed.',
    solution:
      'An EPOS setup brought payments, products and sales reporting into one workflow.',
    outcome:
      'A clearer view of everyday sales activity and simpler product management.',
    cta: 'Find My Retail EPOS Setup',
  },
];

export const COMMERCIAL_OFFERS = [
  {
    title: 'Card Machines',
    features: [
      '£0 upfront hardware*',
      '£0 line rental*',
      'Competitive transaction rates*',
      'Portable / mobile / countertop terminals',
      'Contactless payments',
      'Integrated EPOS options',
    ],
    cta: 'Get Card Machine Pricing',
  },
  {
    title: 'EPOS Systems',
    features: [
      'EPOS hardware',
      'Software',
      'Integrated payments',
      'Stock management',
      'Sales reporting',
      'Staff controls',
      'Ongoing support',
    ],
    cta: 'Get My EPOS Quote',
  },
];

export const HOW_IT_WORKS = [
  {
    step: '01',
    title: 'Tell Us About Your Business',
    description:
      'Choose what you\'re looking for and tell us a little about how your business takes payments.',
  },
  {
    step: '02',
    title: 'We Review Suitable Options',
    description:
      'We identify card-machine or EPOS options based on your requirements.',
  },
  {
    step: '03',
    title: 'Compare Your Setup',
    description:
      'Review the relevant equipment, pricing and terms.',
  },
  {
    step: '04',
    title: 'Get Set Up',
    description:
      'If you\'re happy to proceed, the selected provider arranges approval, equipment and installation or delivery.',
  },
];

export const WHY_CHOOSE_US = [
  {
    icon: '🎯',
    title: 'Business-Focused Recommendations',
    description: 'Start with the way your business actually operates.',
  },
  {
    icon: '💳',
    title: 'Card Machines + EPOS',
    description:
      'Get help with standalone terminals, complete EPOS systems or integrated setups.',
  },
  {
    icon: '🔍',
    title: 'Provider Comparison',
    description:
      'Already using another provider? Compare alternative options before renewing.',
  },
  {
    icon: '📋',
    title: 'Clear Cost Discussion',
    description:
      'Understand the main fees, equipment costs and contract details before making a decision.',
  },
  {
    icon: '🇬🇧',
    title: 'UK Business Support',
    description: 'Solutions designed around the needs of UK businesses.',
  },
];

export const FAQS = [
  {
    q: 'Can I switch card-machine provider?',
    a: 'Yes. Available options depend on your current contract, provider and business requirements.',
  },
  {
    q: 'Can you help me compare my current transaction charges?',
    a: 'Yes. Tell us about your existing setup and transaction profile and suitable alternatives can be explored.',
  },
  {
    q: 'Do you offer £0 upfront card machines?',
    a: '£0 upfront options may be available subject to eligibility, provider terms and the solution selected.',
  },
  {
    q: 'Do you offer £0 line rental?',
    a: '£0 line-rental options may be available depending on the terminal, provider and connectivity setup.',
  },
  {
    q: 'Are lower transaction charges guaranteed?',
    a: 'No. Transaction pricing depends on factors including business type, payment volume, card mix and provider assessment.',
  },
  {
    q: 'Can I use a card machine without EPOS?',
    a: 'Yes. Standalone card machines are available.',
  },
  {
    q: 'Can EPOS connect directly to my card terminal?',
    a: 'Compatible systems can integrate so the payment amount is sent directly to the terminal.',
  },
  {
    q: 'Which terminal is right for me?',
    a: 'Countertop terminals suit fixed checkout locations, portable machines work well around a premises, and mobile terminals suit businesses that trade away from a fixed location.',
  },
  {
    q: 'What happens after I submit the form?',
    a: 'Your requirements are reviewed and you\'ll be contacted to discuss suitable options.',
  },
  {
    q: 'Am I obligated to proceed?',
    a: 'No. The initial consultation is free and there is no obligation to proceed.',
  },
];

export const FINAL_CTA = {
  headline: 'Before You Choose — or Renew — Compare Your Options.',
  options: [
    'Need your first card machine',
    'Want a better EPOS system',
    'Want integrated card payments',
    'Are paying high transaction charges',
    'Want £0 upfront options',
    'Want to review your current provider',
  ],
  primaryCTA: 'Get My Free Quote',
  secondaryCTA: 'Review My Current Provider',
  whatsappCTA: 'WhatsApp Us',
  reassurances: [
    'Free consultation',
    'No obligation',
    'Takes less than 60 seconds',
    'UK business support',
  ],
};

export const FOOTER = {
  policies: [
    { label: 'Privacy Policy', href: '#' },
    { label: 'Cookie Policy', href: '#' },
    { label: 'Terms & Conditions', href: '#' },
    { label: 'Complaints', href: '#' },
  ],
  disclaimer: `Brits Business Hub is a third-party business services introducer and support agent. We do not supply card machines, EPOS systems or business finance directly — these are provided by independent third-party providers under their own agreements. We may receive a commission or fee from providers when a business enters into an agreement with them. Approval, pricing and terms are always subject to the provider's assessment and eligibility criteria. Nothing on this website constitutes financial advice, a guarantee of acceptance or a promise of specific pricing. You should review all provider terms carefully before entering into any agreement.`,
};
