// Shared content for the practice pages (/practice, /approach, /about).
// Edit copy here; the pages only lay it out. No em dashes anywhere in this file.

export const proof = [
  "NFL",
  "MLB",
  "Amazon",
  "Spotify",
  "Publicis · Digitas",
  "Omnicom · Annalect",
  "GroupM",
];

export const pillars = [
  {
    num: "01",
    title: "Connected Identity & Data Foundations",
    desc: "The plumbing everything else depends on, built for a privacy-first world.",
    tags: ["Identity resolution", "CDP architecture", "Clean rooms", "Consent & governance"],
  },
  {
    num: "02",
    title: "Audience, Activation & Commerce Media",
    desc: "Turning first-party audiences into addressable, measurable revenue.",
    tags: ["Audience strategy", "Cross-channel activation", "Retail & commerce media", "Measurement"],
  },
  {
    num: "03",
    title: "AI-Enabled Marketing & Operating Models",
    desc: "Where applied AI meets the commercial and org design to actually ship it.",
    tags: ["Applied AI", "Commercial model design", "Operating-model design", "Tier 1 client partnership"],
  },
  {
    num: "04",
    title: "Sports & Media Business",
    desc: "Rights-adjacent data strategy and stakeholder work, league to club.",
    tags: ["League & club strategy", "Partnership negotiation", "Live-event data"],
  },
];

export const whom = [
  { seg: "Leagues & rights holders", promise: "One governed view of the fan across every club and channel, and the clean-room models to monetize it." },
  { seg: "Media owners & publishers", promise: "A first-party identity and measurement spine that turns audience into durable ad and subscription revenue." },
  { seg: "Holding companies & Tier 1 clients", promise: "Connected identity and commercial models that translate client strategy into measurable growth." },
  { seg: "Sponsors, brands & agencies", promise: "Audience and clean-room infrastructure to choose markets and prove activation value partners can trust." },
  { seg: "Growth-stage AdTech / MarTech", promise: "Product and data foundations, and a go-to-market a buyer will believe." },
  { seg: "Investors", promise: "Technical diligence on AdTech, MarTech, and data targets, from a practitioner who has built the stack." },
];

export const tiers = [
  {
    name: "First-Party Readiness Diagnostic",
    format: "Three weeks \u00b7 Starts here",
    items: "Where your fan data actually is, what it is worth, and the two things blocking it. Scored across the six readiness dimensions and delivered as a sequenced roadmap with opportunity sizing. The paid, deeper counterpart to the First-Party Index.",
    situations: ["A new CCO or CTO who needs to know what the fan data estate is worth before committing a budget.","A board asking why the CRM spend has not moved revenue per fan."],
    proof: { label: "The First-Party Index", href: "/readiness" },
  },
  {
    name: "Stack Selection, RFP & Negotiation",
    format: "Eight to twelve weeks",
    items: "Requirements, shortlist, commercial terms, and the governance model that has to come with them. I have been on the buying side of every category on the list and I am independent of all of them.",
    situations: ["A CDP or CRM contract up for renewal, three vendors in the room, and no independent voice.","A replatform proposal the board cannot evaluate on its own."],
    proof: { label: "The Stack Decision", href: "#stack" },
  },
  {
    name: "Fractional Head of Data & Identity",
    format: "Two days a week \u00b7 Embedded",
    items: "Standing in as senior data, identity, or marketing-technology leadership through a build or a transition. For estates that need an operator, not a deck.",
    situations: ["A head of data has left mid-build.","New ownership needs the foundation stood up before the permanent hire."],
    proof: { label: "The full record", href: "/record" },
  },
  {
    name: "Investor Technical Diligence",
    format: "One to two weeks per target",
    items: "What the data asset is, what it is not, and what it will cost to fix. Written for an investment committee, with the limits of the review stated in line rather than smoothed away.",
    situations: ["A club or sports-tech target where the fan data is part of the price.","A portfolio company whose data claims need testing before the next round."],
    proof: { label: "The new owner playbook", href: "/clubs#owner" },
  },
  {
    name: "Clean Room & Partner Measurement",
    format: "Project",
    items: "The collaboration architecture that lets you prove activation value to partners and price inventory on data rather than reach alone.",
    situations: ["Sponsors asking for proof of activation value at renewal.","A league or group that must share with partners without moving fan records."],
    proof: { label: "Lift measurement in the Studio", href: "https://rankings.citizenofnowhere.org/studio/measurement" },
  },
  {
    name: "Enablement & workshops",
    format: "Fixed engagement",
    items: "Governance design, team enablement, keynotes and board workshops that leave the capability inside the building.",
    situations: ["A team that has bought the platform and now needs the operating model.","A board that wants to understand AI and data risk before the budget vote."],
    proof: { label: "The field view", href: "/perspective" },
  },
];

export const metrics = [
  { fig: "62", label: "Clubs unified", context: "League-scale identity and customer data platforms across every NFL and MLB club." },
  { fig: "220M+", label: "Identities resolved", context: "Product owner of Samsung's identity-linked CDP on Google Cloud." },
  { fig: "~99%", label: "Data spend cut", context: "Shifting Samsung from third-party to owned data, roughly 700,000 dollars out, while expanding reach." },
  { fig: "+20%", label: "Engagement lift", context: "The Adobe Experience Platform rollout across MLB's 30 clubs." },
  { fig: "+40%", label: "YoY audience revenue", context: "Audience-targeted revenue on Spotify's free tier, across a 500-person sales organization." },
  { fig: "58", label: "Markets activated", context: "Rolling out Annalect's identity and measurement product suite across EMEA." },
];

export const heard = [
  {
    label: "Identity",
    quote:
      "We spend heavily to acquire fans and customers, but once they are in we cannot recognize the same person across ticketing, the app, and email. We are marketing to ghosts.",
  },
  {
    label: "Governance",
    quote:
      "Every market and every team built their own data setup. Legal, marketing, and analytics each work from a different version of the truth, and our consent is a patchwork we could not defend.",
  },
  {
    label: "Monetization",
    quote:
      "Our first-party data is obviously an asset, but when a partner asks to collaborate in a clean room we cannot say what we can offer, what to charge, or what we are allowed to share.",
  },
  {
    label: "AI & operating model",
    quote:
      "We piloted AI in marketing and it demoed well, but nothing shipped, because the data underneath it and the operating model around it were not ready.",
  },
];

export const highlights = [
  {
    co: "Amazon Ads",
    title: "Clean rooms and Connected Identity for 30+ global advertisers",
    blurb:
      "Directed more than 30 Tier 1 client partnerships architecting Connected Identity, clean-room, and advanced-measurement solutions on Amazon Marketing Cloud, driving cross-platform data collaboration and multi-million-dollar revenue growth.",
  },
  {
    co: "Spotify",
    title: "Turning first-party audio data into ad revenue",
    blurb:
      "Built the global audience-measurement and monetization frameworks used across a 500-person sales organization, partnering with 40-plus agencies and contributing to a 40 percent year-over-year increase in audience-targeted revenue on the free tier.",
  },
  {
    co: "Digitas, Publicis Groupe",
    title: "Samsung's customer data platform, built at population scale",
    blurb:
      "As VP of Data Strategy on Samsung's US account, led a multi-capability team of 20-plus as product owner of an identity-linked CDP resolving 220 million-plus identities on Google Cloud. The shift from third-party to owned data cut spend by roughly 700,000 dollars, about 99 percent, while expanding addressable reach.",
  },
  {
    co: "Annalect, Omnicom Media Group",
    title: "Identity-linked data products across 58 markets",
    blurb:
      "Led data science, analytics, and insight for Annalect EMEA, architecting and rolling out the suite of identity and measurement products, attribution, custom audiences, lookalike modeling, media-mix and TV attribution, across 58 markets.",
  },
];

export const stack = [
  {
    cat: "Sports-native activation platforms",
    good: "Speed to market, brand demand already attached, and signals built for sport.",
    breaks: "You are activating on somebody else's graph, and the fan relationship stays theirs.",
  },
  {
    cat: "Enterprise CDP suites",
    good: "Journey orchestration, mature consent tooling, and support a board recognizes.",
    breaks: "The cost curve at profile scale, and slow to model a federated club estate.",
  },
  {
    cat: "Warehouse-native stacks",
    good: "Full ownership, the lowest marginal cost, and no vendor lock on the data layer.",
    breaks: "You are buying an engineering team, not a product.",
  },
  {
    cat: "Commercial intelligence & agentic layers",
    good: "Fast operational wins and strong internal demand.",
    breaks: "An agent layer over unresolved identity produces faster wrong answers.",
  },
];

export const approach = [
  { num: "01", name: "Diagnose", body: "Score first-party readiness across the six dimensions and find the gap that matters most. The First-Party Index is the front door." },
  { num: "02", name: "Architect", body: "Design the identity spine, data foundation, and governance the strategy actually needs, sequenced so each step pays for the next." },
  { num: "03", name: "Activate", body: "Turn audiences into real-time, cross-channel action, and stand up the measurement that ties it back to revenue." },
  { num: "04", name: "Monetize & govern", body: "Build the clean-room and partnership models that monetize first-party data, with consent enforced by default." },
];

export const rightsHolder = [
  { t: "Recognize the fan everywhere", d: "One identity resolved across ticketing, the app, email, and the stadium gate, so every message reaches a known person." },
  { t: "Make sponsorship measurable", d: "Clean-room collaboration that proves activation value to partners and lets you price inventory on data, not just reach." },
  { t: "Value rights and catchment", d: "Fan catchment, market selection, and rights valuation grounded in real audience data." },
];

export const building = [
  { t: "Civic Audience Intelligence", d: "Licensable datasets, scoring APIs, and dashboards for choosing markets, planning activations, and valuing rights." },
  { t: "Sports Cartography APIs", d: "Club, venue, league, and metro data joined on a single editorial source of truth, for leagues, agencies, and rights holders." },
];

export const caseStudies = [
  {
    co: "National Football League",
    role: "Director, Business Relationship Management & MarTech Products",
    link: { href: "/federated", label: "Read the case study: the federated model" },
    points: [
      "Unified fan identity and data across all 32 clubs into one league-scale operating model. The hard part was never the technology. It was getting 32 independent commercial entities to agree what a fan is and who may act on that.",
      "Authored the enterprise governance framework: privacy, consent, data standards, and cross-club integration.",
      "Modernized the league's AI, data, and Connected Identity platforms, with club toolkits and executive readouts that accelerated adoption.",
    ],
  },
  {
    co: "Major League Baseball",
    role: "Director, Marketing Tech & Digital Operations",
    link: null as null | { href: string; label: string },
    points: [
      "Built a customer data platform across all 30 clubs, a 10 million dollar-plus remit spanning CDP, clean rooms, email, SMS, push, and CTV.",
      "Drove the Adobe Experience Platform and Journey Optimizer rollout across all 30 clubs that lifted audience engagement 20 percent.",
      "Launched real-time, scan-triggered fan journeys; the Mets pilot deployed 12,000-plus push notifications in a season, with check-in click-through rising from roughly 4 to 9 percent.",
      "Authored the clean-room roadmap to monetize first-party data with sponsorship and media partners.",
    ],
  },
];

export const studioModules = [
  { name: "Sources", href: "https://rankings.citizenofnowhere.org/studio/sources", proves: "the integration map" },
  { name: "Identity graph", href: "https://rankings.citizenofnowhere.org/studio/identity", proves: "four records, one fan" },
  { name: "Consent gate", href: "https://rankings.citizenofnowhere.org/studio/consent", proves: "permission bound to the profile" },
  { name: "Audience builder", href: "https://rankings.citizenofnowhere.org/studio/audience-builder", proves: "segments and reverse ETL" },
  { name: "Lift measurement", href: "https://rankings.citizenofnowhere.org/studio/measurement", proves: "incrementality, not clicks" },
];

export const whyme = [
  { label: "Operator, not commentator", body: "I have run the desk inside the leagues and the platforms, owning the operating model, not advising from the outside." },
  { label: "Independent of every vendor", body: "I have written the requirements, run the RFP, negotiated the contract, and then owned the implementation. I resell nothing and take no referral fees. Where I advise a vendor on its product, I disclose it in writing before you sign anything." },
  { label: "Proof you can use", body: "I build in public. The Global Metro Power Rankings and a working MarTech reference implementation are the studio behind the practice." },
  { label: "A network across the ecosystem", body: "A career spent across leagues, holding companies, and platforms shortens every introduction and every deal." },
  { label: "I write and I teach", body: "A public point of view on identity, data, and the AI era, carried through writing, keynotes, and board workshops." },
  { label: "Both sides of the trade", body: "Platforms like Genius FANHub and Elevate EPIC monetize fan identity. I built the side of the trade the rights holder owns, and the demand side at Amazon that buys from it." },
];
