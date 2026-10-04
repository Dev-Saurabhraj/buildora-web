import { FAQItem, Experience } from '../types';

export const FAQS: FAQItem[] = [
  {
    question: "What's the difference between a subscription and a custom project?",
    answer: "With a subscription, you pay a flat monthly rate and can submit unlimited design requests with fast 48-hour turnarounds, pausing or canceling anytime. A custom project is ideal if you have a fixed scope, set deadline, and one-off budget.",
  },
  {
    question: "How fast is the turnaround?",
    answer: "On average, most design requests are delivered within 48 hours (Monday through Friday). More complex requests such as comprehensive design systems or multi-screen flows are broken down into milestone deliverables.",
  },
  {
    question: "How many requests can I make?",
    answer: "You can submit as many design requests to your queue as you like. They will be worked on one by one in priority order, ensuring each deliverable receives undivided attention and supreme craft.",
  },
  {
    question: "What types of design do you handle?",
    answer: "We specialize in Web & Mobile UI/UX, Design Systems, Pitch Decks, Landing Pages, Brand Identity, Framer Development, 3D Assets, and Micro-interactions for high-growth tech startups.",
  },
  {
    question: "What tools do you use?",
    answer: "We work primarily in Figma, Framer, Spline, Three.js, Illustrator, and Loom. All native design source files are yours to keep.",
  },
  {
    question: "Can I pause the subscription?",
    answer: "Yes, absolutely! We understand work fluctuates. If you only have 10 days of work this month, you can pause your cycle and save the remaining 20 days for whenever you need designs next.",
  },
  {
    question: "Do you offer development too?",
    answer: "Yes, we build pixel-perfect, highly responsive Framer websites, Webflow experiences, and custom React/HTML/CSS applications with silky-smooth micro-animations.",
  },
];

export const EXPERIENCES: Experience[] = [
  { role: 'Design Lead', company: 'Google', period: '2024 → Now' },
  { role: 'Senior Designer', company: 'PayPal', period: '2019 → 2024' },
  { role: 'Product Designer', company: 'Meta', period: '2016 → 2019' },
  { role: 'Art Director', company: 'Independent', period: '2011 → 2016' },
];

export const PRICING_FEATURES = [
  'Unlimited design requests',
  'Fast turnaround (avg. 48 hours)',
  'Fixed monthly rate, zero hidden fees',
  'Pause or cancel anytime',
  'One active request at a time',
  'Native Figma source files included',
  'Direct async communication via Slack & Loom',
];
