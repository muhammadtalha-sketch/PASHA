/**
 * CONTENT SOURCE OF TRUTH
 * -----------------------
 * ahmedvaseer.com blocks automated fetching (robots.txt), so this file
 * was built from a direct visual read of that site (screenshots), not
 * from an automated scrape. Every biographical line below traces back
 * to that source.
 *
 * A separate earlier draft of this site added specific numbers (team
 * size, project count, a named office expansion, a named partnership)
 * that could not be independently verified against any public source
 * during this round of research. Rather than publish unverified
 * specifics on a campaign site, they've been left out entirely. If
 * they're accurate, add them back in yourself with confidence — don't
 * let this file's caution understate real accomplishments.
 *
 * Fields marked TODO are election-specific details that live nowhere
 * on ahmedvaseer.com (a professional bio site, not a campaign page) —
 * fill these in from the official P@SHA Election Commission notice.
 */

export const candidate = {
  name: "Ahmed Vaseer",
  role: "Founder & CEO, Ingenious Concepts",
  tagline: "Tech Entrepreneur",
  election: "P@SHA Elections 2026",
  // TODO: confirm exact seat/category (e.g. "Associate Seat" or a named CEC seat)
  seatLabel: "Candidate — [Seat / Category to confirm]",
  phone: "+92 321 4044590",
  email: "ahmed@ingeniousc.com",
  linkedin: "linkedin.com/in/ahmedvaseer",
  linkedinUrl: "https://linkedin.com/in/ahmedvaseer",
  // Verified live domain; the specific 2026 elections sub-page was not
  // confirmed, so this links to the association's site rather than a
  // guessed URL.
  officialUrl: "https://www.pasha.org.pk/",
};

export const navLinks = [
  { label: "About", href: "#about" },
  { label: "Focus", href: "#focus" },
  { label: "Track Record", href: "#pillars" },
  { label: "Global", href: "#global" },
  { label: "Vote", href: "#vote" },
];

export const hero = {
  kicker: candidate.election,
  headline:
    "Fifteen years building technology companies. Now building for the industry that makes the next one possible.",
  subhead:
    "I'm Ahmed Vaseer — a technology entrepreneur who has spent the last fifteen years at the intersection of software development, AI automation, and business scaling. I've built and led teams across continents, working with clients from the USA, UK, Canada, Europe, the Middle East, and Australia.",
  ctaPrimary: { label: "Read the Manifesto", href: "#pillars" },
  ctaSecondary: { label: "About Me", href: "#about" },
  snapshot: {
    image: "https://ahmedvaseer.com/wp-content/uploads/2026/01/imgi_2_ahmed-golden-gate-JYaoRqb0.jpg",
    heading: "Campaign snapshot",
    company: "Ingenious Concepts",
    seat: candidate.seatLabel,
    polling: "To confirm — see official notice",
  },
  ticker: [
    "Founder & CEO, Ingenious Concepts",
    "15+ years in software, AI automation & business scaling",
    "ISO 27001 certified",
    "Clients across 6 regions, 7 industries",
  ],
};

export const philosophy = [
  {
    title: "Leadership Philosophy",
    body: "Building great products requires great teams. I believe in creating environments where talented people can do their best work — with clear vision, trust, and the freedom to innovate.",
  },
  {
    title: "Core Values",
    body: "Continuous learning, ethical business practices, scalable architecture, and uncompromising security. These aren't just principles — they're non-negotiable in everything I build.",
  },
  {
    title: "Vision",
    body: "To demonstrate that world-class technology companies can be built anywhere — and that Pakistan has the talent to compete on the global stage.",
  },
];

export const perspective = {
  kicker: "A founder's perspective",
  heading: "What running Ingenious Concepts has actually taught me",
  body: "Fifteen years of leading distributed teams across continents comes down to the same lesson, repeated in every market: talented people do their best work inside clear vision, real trust, and room to innovate — not inside rigid hierarchy. Serving clients under an ISO 27001 standard across North America, Europe, and the Middle East has meant building to one bar everywhere, not a different one for each market. That's the same instinct I'd bring to representing the wider membership.",
};

export const focusAreas = {
  kicker: "Where I focus",
  heading: "The work behind the candidacy",
  intro:
    "Every one of these is a discipline practiced daily at Ingenious Concepts — not a promise written for an election.",
  items: [
    {
      title: "AI Workflow Automation",
      body: "Designing and implementing intelligent systems that automate complex business processes, reduce operational costs, and unlock new capabilities through machine learning and AI-driven decision making.",
    },
    {
      title: "Software Development",
      body: "Full-spectrum development across web, mobile, and game platforms. From enterprise applications to consumer products, building software that performs at scale and delights users.",
    },
    {
      title: "Digital Marketing & Growth",
      body: "Data-driven marketing strategies that connect with audiences and drive measurable results. Combining creative thinking with analytical rigor to build sustainable growth engines.",
    },
    {
      title: "Business Scaling",
      body: "Taking companies from promising startups to market leaders. Strategic planning, process optimization, and operational excellence that enables sustainable growth.",
    },
    {
      title: "Staff Augmentation",
      body: "Building and managing distributed teams across time zones. Connecting global businesses with exceptional talent through proven delivery models and quality frameworks.",
    },
  ],
};

/**
 * Track record vs. commitments. "Already doing" lines are grounded in the
 * verified content above. "Will do" lines are intentionally left as
 * placeholders — a manifesto commitment is a promise, and none has been
 * confirmed yet for this specific seat.
 */
export const pillars = {
  kicker: "Where I'll focus",
  heading: "Three pillars. Proven practice, and commitments still to confirm.",
  intro:
    "The left column is what's already true today at Ingenious Concepts. The right column needs your confirmed CEC commitments before publishing — nothing has been invented to fill it in.",
  items: [
    {
      title: "Standards that travel",
      already: [
        "Built Ingenious Concepts to an ISO 27001 information-security standard.",
        "Served clients across North America, Europe, and the Middle East under that same standard.",
      ],
      will: ["TODO — confirm a specific, real commitment on industry standards."],
    },
    {
      title: "Teams over titles",
      already: [
        "Led distributed teams across time zones spanning the USA, UK, Canada, Germany, Australia, and the Middle East.",
        "Built staff-augmentation delivery models connecting global businesses with vetted talent.",
      ],
      will: ["TODO — confirm a specific, real commitment on talent & representation."],
    },
    {
      title: "Applied AI, not just talk of it",
      already: [
        "Designed and shipped AI-driven workflow automation for clients across education technology, fintech, logistics, SaaS, and e-commerce.",
        "Spoken at international technology conferences and procurement expos on AI automation and digital transformation.",
      ],
      will: ["TODO — confirm a specific, real commitment on AI adoption for members."],
    },
  ],
};

export const globalExperience = {
  kicker: "Global experience",
  heading: "Working across borders, before asking to represent one industry",
  regions: [
    "United States",
    "United Kingdom",
    "Canada",
    "Germany",
    "Australia",
    "Middle East",
  ],
  industries: [
    "Education Technology",
    "Insurance & FinTech",
    "Logistics & Supply Chain",
    "SaaS Platforms",
    "E-commerce",
    "Childcare Management",
    "Gaming & Entertainment",
  ],
  thoughtLeadership:
    "Regular speaker at international technology conferences and procurement expos, sharing insights on AI automation, digital transformation, and global delivery models. Contributing perspectives on the future of technology, business scaling, and building world-class teams from emerging markets.",
};

export const presence = {
  kicker: "Around the world",
  heading: "Moments from the industry trail",
  slides: [
    { place: "San Francisco, USA", note: "Tech conference · Official visit", image: "https://ahmedvaseer.com/wp-content/uploads/2026/01/imgi_2_ahmed-golden-gate-JYaoRqb0.jpg", focus: "center 35%" },
    { place: "Islamabad, Pakistan", note: "Industry engagement", image: "https://ahmedvaseer.com/wp-content/uploads/2026/01/WhatsApp-Image-2026-01-26-at-4.50.25-PM.jpeg", focus: "center 15%" },
    { place: "Las Vegas, USA", note: "Industry expo", image: "https://ahmedvaseer.com/wp-content/uploads/2026/01/WhatsApp-Image-2026-01-26-at-4.39.44-PM.jpeg", focus: "center 35%" },
    { place: "UCP, Lahore, Pakistan", note: "Entrepreneurship roadshow", image: "https://ahmedvaseer.com/wp-content/uploads/2026/01/WhatsApp-Image-2026-01-26-at-4.32.15-PM.jpeg", focus: "center 15%" },
    { place: "La Rambla, Barcelona, Spain", note: "Global engagement", image: "https://ahmedvaseer.com/wp-content/uploads/2026/01/WhatsApp-Image-2026-01-26-at-4.41.25-PM.jpeg", focus: "center 15%" },
  ],
};

export const stats = {
  heading: "In numbers",
  items: [
    { value: "15+", label: "Years of experience" },
    { value: "6", label: "Regions served" },
    { value: "7", label: "Industries served" },
    { value: "ISO 27001", label: "Certified" },
  ],
};

export const votingInfo = {
  kicker: "Polling day",
  heading: "What you need to know before you vote",
  intro:
    "Election Day is Thursday, September 17, 2026. Voting is in person by secret ballot, supervised by the Election Commission under the Trade Organizations Act 2013 and Rules 2013.",
  steps: [
    {
      n: "01",
      title: "Who votes",
      body: "Only representatives whose names appear on the Final Voter List. Eligibility follows Rule 15 of the Trade Organizations Rules 2013 and Section 10 of the Trade Organizations Act 2013.",
    },
    {
      n: "02",
      title: "Who represents you",
      body: "Your company's registered authorized representative — proprietor, partner, or director, or a General Manager-level representative for public limited / multinational companies.",
    },
    {
      n: "03",
      title: "How to mark",
      body: "Secret ballot, in person. Postal and proxy voting are not permitted.",
    },
    {
      n: "04",
      title: "Polling time",
      body: "Thursday, September 17, 2026 — polling from 9:00 am to 5:00 pm.",
    },
    {
      n: "05",
      title: "What to bring",
      body: "Your original CNIC. No CNIC, no ballot.",
    },
    {
      n: "06",
      title: "Where to vote",
      body: "Polling takes place simultaneously in Karachi, Lahore & Islamabad.",
    },
  ],
};

export const contact = {
  kicker: "Direct dialogue",
  heading: "Let's talk before you mark the ballot",
  body: "Have a policy priority or a question about the campaign? Reach out directly.",
};

export const footer = {
  disclaimer:
    "This is a personal campaign page and is not published by or on behalf of P@SHA or its Election Commission. Official election material is available at pasha.org.pk.",
};
