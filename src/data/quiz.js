// Nine questions, three per pillar: g = governance, i = investability, s = scale.
export const QUESTIONS = [
  { p: 'g', t: 'If you stepped away for a month, would the business keep running smoothly?' },
  { p: 'g', t: 'Is it written down who can approve spending, hiring and contracts, and up to what amount?' },
  { p: 'g', t: 'Do you get warned about compliance deadlines automatically, rather than relying on someone remembering?' },
  { p: 'i', t: 'Do you know which products, customers or locations make money and which lose it?' },
  { p: 'i', t: 'Could you show an investor a forecast with base, upside and downside cases this week?' },
  { p: 'i', t: 'Would your financial records pass an investor’s due diligence without a clean-up first?' },
  { p: 's', t: 'Do you have a clear plan for where the next big step of growth will come from?' },
  { p: 's', t: 'When you launch something new, does a team run it to milestones and deadlines?' },
  { p: 's', t: 'Could you enter a new market or country without the founder leading it personally?' },
]

export const OPTIONS = [['Yes, clearly', 2], ['Partly', 1], ['Not yet', 0]]

export const PILLAR_ORDER = ['g', 'i', 's']
export const PILLAR_NAMES = { g: 'Institutionalise', i: 'Make it Investable', s: 'Scale' }
export const PILLAR_LINKS = { g: '#institutionalise', i: '#investable', s: '#scale' }

// Max score per pillar: three questions x 2 points.
export const PILLAR_MAX = 6
