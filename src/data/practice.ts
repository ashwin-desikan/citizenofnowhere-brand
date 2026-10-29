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
    slug: "diagnostic",
    name: "First-Party Readiness Diagnostic",
    trigger: "A budget decision on the fan data estate in the next two quarters.",
    output: "A scored roadmap across six dimensions, a retire list with the cost it frees, and the business case.",
    inputs: "Five to eight stakeholder interviews and read access to the system inventory. No fan records leave your systems.",
    format: "Three weeks \u00b7 Starts here",
    items: "Where your fan data actually is, what it is worth, and the two things blocking it. Scored across the six readiness dimensions and delivered as a sequenced roadmap with opportunity sizing. The paid, deeper counterpart to the First-Party Index.",
    situations: ["A new CCO or CTO who needs to know what the fan data estate is worth before committing a budget.","A board asking why the CRM spend has not moved revenue per fan."],
    proof: { label: "The First-Party Index", href: "/readiness" },
  },
  {
    slug: "stack",
    name: "Stack Selection, RFP & Negotiation",
    trigger: "A CDP, CRM or email contract up for renewal or replacement.",
    output: "Requirements, a scripted shortlist, negotiated terms and the exit clauses on your data.",
    inputs: "The current contracts and renewal dates, and one owner on your side.",
    format: "Eight to twelve weeks",
    items: "Requirements, shortlist, commercial terms, and the governance model that has to come with them. I have been on the buying side of every category on the list and I am independent of all of them.",
    situations: ["A CDP or CRM contract up for renewal, three vendors in the room, and no independent voice.","A replatform proposal the board cannot evaluate on its own."],
    proof: { label: "The Stack Decision", href: "#stack" },
  },
  {
    slug: "fractional",
    name: "Fractional Head of Data & Identity",
    trigger: "A head of data gap, or a build that has lost its owner.",
    output: "A roadmap that keeps moving, the vendors managed, and the job description for the permanent hire.",
    inputs: "Two days a week with the leadership team and the delivery leads.",
    format: "Two days a week \u00b7 Embedded",
    items: "Standing in as senior data, identity, or marketing-technology leadership through a build or a transition. For estates that need an operator, not a deck.",
    situations: ["A head of data has left mid-build.","New ownership needs the foundation stood up before the permanent hire."],
    proof: { label: "The full record", href: "/record" },
  },
  {
    slug: "diligence",
    name: "Investor Technical Diligence",
    trigger: "A signing date with a fan data asset inside the price.",
    output: "An investment committee memo: what the asset is and is not, revenue per known fan, stack costs and exit terms, and the cost to fix.",
    inputs: "Data room access and two management sessions.",
    format: "One to two weeks per target",
    items: "What the data asset is, what it is not, and what it will cost to fix. Written for an investment committee, with the limits of the review stated in line rather than smoothed away. Investors pay more for predictability, so the memo shows revenue per known fan and a stack with known costs and exit terms.",
    situations: ["A club or sports-tech target where the fan data is part of the price.","A portfolio company whose data claims need testing before the next round."],
    proof: { label: "The new owner playbook", href: "/clubs#owner" },
  },
  {
    slug: "cleanroom",
    name: "Clean Room & Partner Measurement",
    trigger: "A sponsor renewal that needs proof of return, not a reach number.",
    output: "The collaboration design, the partner measurement model, and the rules for what may leave your walls.",
    inputs: "One partner willing to pilot, and your legal team for the data terms.",
    format: "Project",
    items: "The collaboration architecture that lets you prove activation value to partners and price inventory on data rather than reach alone.",
    situations: ["Sponsors asking for proof of activation value at renewal.","A league or group that must share with partners without moving fan records."],
    proof: { label: "Lift measurement in the Studio", href: "https://rankings.citizenofnowhere.org/studio/measurement" },
  },
  {
    slug: "sprint",
    name: "Sport-to-Enterprise Sprint",
    trigger: "A product that needs a European reference customer that boardrooms recognise.",
    output: "The chosen property, one live use case, and the first enterprise introductions through the club.",
    inputs: "A product lead and a decision-maker on your commercial side.",
    format: "Six to eight weeks",
    items: "For AI and data companies entering European sport, and the investors behind them. Choose the right property, design one fan-scale use case that moves a line the club cares about, build the proof, and set up the activation so the club introduces you to its own commercial partners. Sport is the route to the enterprise buyer, not the end market.",
    situations: ["A strong product with no European reference that boardrooms recognise.","A portfolio company with a sports pilot that never became an enterprise sale."],
    proof: { label: "Sport as the door to enterprise", href: "/approach#vendors" },
  },
  {
    slug: "aibuilder",
    name: "AI Builder Sprint",
    trigger: "A marketing or fan data workflow everyone complains about and nobody owns.",
    output: "The rebuilt workflow in production, before and after cycle times, and the guide your team runs it with.",
    inputs: "One of your marketers for six weeks, and access to the systems the workflow touches.",
    format: "Six weeks \u00b7 Two-person team",
    items: "One workflow in your marketing or fan data team, redesigned before it is automated, then rebuilt with AI by me and one of your marketers working as a two-person team. Built to production rules, with permissions, consent checks and monitoring, and handed over with the operating guide. Measured on cycle time and capacity, not on a demo.",
    situations: ["Campaign or audience requests that take a week and should take a day.","A team that bought AI tools and still works the old way."],
    proof: { label: "The Studio toolkit", href: "https://rankings.citizenofnowhere.org/studio" },
  },
];

export const metrics = [
  { fig: "62", label: "Clubs unified", context: "League-scale identity and customer data platforms across every NFL and MLB club." },
  { fig: "220M+", label: "Identities resolved", context: "Product owner of Samsung's identity-linked CDP on Google Cloud." },
  { fig: "$700K", label: "Data spend cut", context: "Shifting Samsung from third-party to owned data, roughly 700,000 dollars out, while expanding reach." },
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
  { num: "01", name: "Assess", body: "Find out what the fan data estate is worth and what is in the way: records per real person, marketable consent, the systems with no data contract, and the sponsor questions nobody can answer yet. Ends in a scored roadmap and a number the board can hold the programme to." },
  { num: "02", name: "Build", body: "Stand up the pieces the roadmap needs, in the order each pays for the next: the identity spine, consent by purpose, the rights rules between parties, the release checks, and the match that proves a sponsor outcome without moving fan records." },
  { num: "03", name: "Run", body: "Operate it through a season. Releases checked at the moment they leave, the activation tools the club already has doing the carrying, a scoreboard the board reads without a translator, and the proof report at every renewal." },
];

// Which offers sit under which stage on /approach. The offers themselves live
// in `tiers`; this only decides where each one is shown.
export const stageOffers: Record<string, string[]> = {
  Assess: ["diagnostic", "diligence"],
  Build: ["stack", "cleanroom", "aibuilder"],
  Run: ["fractional", "sprint"],
};

// Problem statements routed to the offer that fits. Shown on /approach.
export const router = [
  { problem: "We cannot say how many real fans we have.", label: "First-Party Readiness Diagnostic", href: "/practice?engagement=diagnostic#offer-diagnostic" },
  { problem: "The CDP or email contract renews next quarter and three vendors are pitching.", label: "Stack Selection, RFP & Negotiation", href: "/practice?engagement=stack#offer-stack" },
  { problem: "Our head of data left in the middle of the build.", label: "Fractional Head of Data & Identity", href: "/practice?engagement=fractional#offer-fractional" },
  { problem: "We are buying a club, and the fan data is part of the price.", label: "Investor Technical Diligence", href: "/practice?engagement=diligence#offer-diligence" },
  { problem: "A sponsor wants proof of return before renewing.", label: "Clean Room & Partner Measurement", href: "/practice?engagement=cleanroom#offer-cleanroom" },
  { problem: "Clubs in our league or group will not share fan data.", label: "Multi-Club & League Data Model", href: "/clubs" },
  { problem: "We have an AI product and no European reference customer.", label: "Sport-to-Enterprise Sprint", href: "/practice?engagement=sprint#offer-sprint" },
  { problem: "Campaign and audience requests take a week.", label: "AI Builder Sprint", href: "/practice?engagement=aibuilder#offer-aibuilder" },
  { problem: "We bought AI tools and nothing about the work changed.", label: "AI Builder Sprint", href: "/practice?engagement=aibuilder#offer-aibuilder" },
];

// Who this is for, and who it is not for. Shown on /approach.
export const fit = {
  yes: [
    "A league, club, ownership group, media owner or vendor with one named owner for the decision.",
    "A fan data estate that is worth more than it earns today.",
    "A decision due in the next two quarters: a contract, a hire, a deal or a build.",
    "A willingness to measure the result against a number agreed at the start.",
  ],
  no: [
    "You want a vendor chosen before the requirements exist.",
    "You need a reseller or a referral partner. I am neither.",
    "You want a strategy document with nobody to run it.",
    "You need a full engineering team for a year. I will help you hire one.",
  ],
};

// What I am usually brought in to fix. Shown on /about.
export const broughtIn = [
  "Fan records that do not add up to fans.",
  "A CDP that went live and changed nothing.",
  "Clubs or business units that will not share data.",
  "A sponsor renewal with no proof of return.",
  "A vendor shortlist written by the vendors.",
  "An AI budget with no workflow behind it.",
];

// How I build. Shown on /about.
export const howIBuild = [
  { t: "One or two people per outcome", d: "A small team that owns a workflow end to end moves faster than a squad with handoffs. My engagements run that way, with one person from your side." },
  { t: "Redesign before automating", d: "Putting AI on a broken process only makes the broken process faster. The workflow is redesigned first, then rebuilt." },
  { t: "Prototype in days, production by rule", d: "Anything people depend on gets permissions, consent checks, thresholds and monitoring before it goes live. A prototype and a dependable system are different things." },
  { t: "Built with AI coding agents, reviewed by me", d: "The Studio and the federated clean room were built this way and run on a live backend. The clean room refuses a query a club is not entitled to run." },
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
  { label: "Independent of every vendor", body: "I have written the requirements, run the RFP, negotiated the contract, and then owned the implementation. I resell nothing and take no referral fees. Where I advise a vendor on its product, I disclose it in writing, and I never advise a property on a choice where that vendor is in the running." },
  { label: "Proof you can use", body: "I build in public. The Global Metro Power Rankings and a working MarTech reference implementation are the studio behind the practice." },
  { label: "A network across the ecosystem", body: "A career spent across leagues, holding companies, and platforms shortens every introduction and every deal." },
  { label: "I write and I teach", body: "A public point of view on identity, data, and the AI era, carried through writing, keynotes, and board workshops." },
  { label: "Both sides of the trade", body: "Platforms like Genius FANHub and Elevate EPIC monetize fan identity. I built the side of the trade the rights holder owns, and the demand side at Amazon that buys from it." },
];
