export const COMPETITION_FIELDS = [
  { name: 'firstName', type: 'text', label: 'First Name', required: false },
  { name: 'lastName', type: 'text', label: 'Last Name', required: false },
  { name: 'email', type: 'email', label: 'Email Address', required: false },
  { name: 'city', type: 'text', label: 'Town/City', required: false },
  { name: 'gender',
    type: 'select',
    label: 'Gender',
    required: false,
    selectOptions: [
      'Select',
      'Male',
      'Female',
    ],
  },
  { name: 'profession',
    type: 'select',
    label: 'Profession',
    required: false,
    selectOptions: [
      'Select',
      'Accountancy, banking and finance',
      'Business, consulting and management',
      'Charity and voluntary work',
      'Creative arts and design',
      'Education',
      'Energy and utilities',
      'Engineering, manufacturing and IT',
      'Healthcare',
      'Hospitality and events management',
      'Law',
      'Public services',
      'Leasure, sport and tourism',
      'Marketing, advertising and PR',
      'Media and internet',
      'Propery and construction',
      'Recruitment and HR',
      'Retail',
      'Sales',
      'Science and pharmeceuticals',
      'Social care',
      'Student',
      'Transport and logisitcs',
      'Other',
    ],
  },
  {
    name: 'age',
    type: 'select',
    label: 'Age',
    required: false,
    selectOptions: [
      'Select',
      '10-20 years',
      '20-30 years',
      '30-40 years',
      '40-50 years',
      '50-60 years',
      '60-70 years',
      '70+ years',
    ],
  },
  { name: 'previous',
    type: 'checkbox',
    label: 'Have you previously purchased mid-century, antique or upcycled furniture online?',
    required: false,
  },
  {
    name: 'prize',
    type: 'select',
    label: 'Which prize would you like to enter to win?',
    selectOptions: [
      'Select', '1 - Vitra Chair', '2 - Mechanist Lamp', '3 - Teak Table',
    ],
  },
  { name: 'antiSpam', type: 'hidden', label: 'antiSpam', required: false },
];

export const DEALER_SIGNUP_FIELDS = [
  { name: 'listingValue',
  type: 'select', label: 'How much would you like to list?', required: true,
  selectOptions: [
    'Select',
    'Up to £2,000 - FREE',
    'Up to £8,000 - £50 per month',
    'Up to £10,000 - £100 per month',
    'Up to £20,000 - £150 per month',
    ' Up to £30,000 - £200 per month',
  ],
},
  { name: 'name', type: 'text', label: 'Your Name', required: true },
  { name: 'businessName', type: 'text', label: 'Business Name', required: false },
  { name: 'website', type: 'text', label: 'Website (if applicable)', required: false },
  { name: 'email', type: 'email', label: 'Email Address', required: true },
  { name: 'city', type: 'text', label: 'Town/City', required: true },
  { name: 'favePlatform',
    type: 'select', label: 'What\'s your preferred platform to sell on?', required: true,
    selectOptions: [
      'Select',
      'eBay',
      'Etsy',
      'Vinterior',
      'Other',
    ],
  },
  { name: 'averagePrice',
    type: 'select', label: 'What\'s the average price of your items?', required: true,
    selectOptions: [
      'Select',
      '£0 - £100',
      '£100 - £300',
      '£300 - £800',
      '£800 - £1500',
      '£1500+',
    ],
  },
  { name: 'shopfront',
    type: 'select', label: 'Would you like a personalised shopfront?', required: true,
    selectOptions: [
      'Select',
      'Yes',
      'No',
    ],
  },
];
