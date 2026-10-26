// Content for /clubs: The Club Data Blueprint.
// All copy lives here so the page markup stays thin and the Studio
// configurator (rankings.citizenofnowhere.org/studio/club-blueprint)
// can mirror the same model. No em dashes anywhere in this file.

export const hero = {
  eyebrow: "The Club Data Blueprint",
  title: "Many businesses. One fan in common. Most clubs still cannot see that fan.",
  sub: "A modern football club runs matchday, retail, hospitality, media, attractions, and partnerships. Each line keeps its own record of the same supporter. I design and build the layer that turns those records into one governed fan, and then put that fan to work.",
  accent: "Independent of every vendor. Built by someone who has done it across 62 clubs.",
};

// The failure pattern, generalised. Every club I talk to describes some version of this.
export const symptoms = [
  {
    label: "Disconnected architecture",
    body: "Nightly exports and brittle syncs stand in for integration. The app shows yesterday's fan on today's matchday.",
  },
  {
    label: "No single fan identity",
    body: "One supporter appears as eight or ten records across ticketing, retail, the app, and the OTT service. The ticketing reference number is the de facto ID, and the club does not own it.",
  },
  {
    label: "Manual workarounds",
    body: "Staff reconcile records by hand and absorb every platform gap with a spreadsheet. The cost is real and invisible.",
  },
  {
    label: "Fragmented insight",
    body: "Marketing, ticketing, and service each hold a different truth. No one can say how many fans the club actually has.",
  },
];

export const symptomsLine =
  "The result is always the same: the club cannot recognize, serve, reward, or activate the same fan at every touchpoint.";

// The core argument: separate the jobs.
export const thesis = {
  title: "The decision that matters is not the vendor. It is giving each job to the right layer.",
  body: [
    "Most stalled fan-data programmes ask one tool to do four jobs: know who the fan is, move data between systems, hold what the club knows right now, and explain what it all means. A warehouse is excellent at the last job and poor at the second. A CRM is excellent at the third and poor at the first.",
    "The clubs that break through separate the jobs on purpose. Identity gets an anchor the club owns. Movement gets an event-driven integration layer. The live fan profile becomes the system of context that every channel and every agent reads. The warehouse returns to analytics, where it is strongest.",
  ],
};

// The six-layer reference architecture. Stack-agnostic by design.
export const layers = [
  {
    num: "01",
    name: "Identity anchor",
    job: "Who is this fan?",
    body: "One club-owned login and ID across ticketing, membership, retail, OTT, and the app. Ticketing and retail references become linked keys, not the key.",
    options: ["Okta / Auth0", "SAP Customer Data Cloud", "Sports-platform SSO", "Custom OIDC"],
    kpi: "Records per real fan",
  },
  {
    num: "02",
    name: "Operational integration",
    job: "How does data move?",
    body: "Events flow when they happen, not on an overnight schedule. A scan at the turnstile, a shirt sale, or a cancelled renewal reaches every system that needs it in seconds.",
    options: ["MuleSoft", "Event streaming (Kafka, Kinesis)", "iPaaS", "Reverse ETL for non-urgent flows"],
    kpi: "Signal latency, gate to profile",
  },
  {
    num: "03",
    name: "System of context",
    job: "What do we know right now?",
    body: "The unified, real-time fan profile: contact, preferences, consent, spend, engagement, attribution, and lifetime value. Every channel and every agent reads from it.",
    options: ["Salesforce Data 360", "Adobe Real-Time CDP", "SAP Engagement Cloud", "Sports-native CDP", "Composable profile on the warehouse"],
    kpi: "Known-fan share of total traffic",
  },
  {
    num: "04",
    name: "Analytical layer",
    job: "What does it mean?",
    body: "The warehouse or lakehouse for modelling, finance, and reporting. Lifetime value, churn and propensity models, and the board pack, all on governed data.",
    options: ["Snowflake", "Databricks", "BigQuery", "Microsoft Fabric"],
    kpi: "Time from question to trusted answer",
  },
  {
    num: "05",
    name: "Engagement and agents",
    job: "What do we do about it?",
    body: "Marketing journeys, service, commerce, and hospitality sales, personalised from the same profile. Agents answer, then act, then transact, each step gated by consent and grounded in context.",
    options: ["Marketing and journey orchestration", "Service and contact centre", "Commerce", "Agent platforms"],
    kpi: "Revenue per known fan",
  },
  {
    num: "06",
    name: "Governance and value exchange",
    job: "Who may use it, and for what?",
    body: "Consent by purpose, data contracts between departments, and the rules for sharing with the league, sponsors, and partners. Clean rooms replace file exports.",
    options: ["Consent management platforms", "Data clean rooms", "League data-sharing agreements", "Data contracts"],
    kpi: "Marketable consent rate",
  },
];

// From the field: an anonymised composite. No club is named and no
// club-confidential detail is used. Each decision is tied to work I have done.
export const fieldNote = {
  eyebrow: "An anonymised composite",
  title: "The venue-led club: one fan, twenty businesses, three decisions",
  disclaimer:
    "This case is a composite. It draws on my own league and platform work and on conversations with technology leaders at top-flight clubs. Names, figures, and vendor choices are generalised so that no club or confidential detail is identifiable.",
  context: [
    "Picture a top-flight club whose stadium works every day of the year. Matchday covers football, international fixtures, concerts, and other major events. Around it sit premium hospitality and conferencing, an online store selling in several countries, a subscription video service, a portfolio of global and regional partners, and visitor attractions inside the venue.",
    "Each of those businesses chose its own platform at a different time. The same supporter exists as eight or ten records. The ticketing provider's customer reference is the de facto fan ID, and the club does not control it. A warehouse built for reporting is also running the nightly syncs between operational systems, so the app, the contact centre, and the turnstile each see a different fan.",
  ],
  decisions: [
    {
      tag: "Integration",
      title: "Give data movement its own layer",
      body: "Events flow through a dedicated, event-driven integration layer when they happen, not on an overnight schedule. The warehouse leaves operational integration and returns to analytics, where it is strongest.",
      read: "The most transferable decision, and the least glamorous. It is job separation in one move.",
      built: "At MLB, scan-triggered journeys needed a fan's gate scan to reach the engagement layer in near real time. That only worked once movement was its own job.",
    },
    {
      tag: "Identity",
      title: "Make the club the identity anchor",
      body: "One club-owned login across ticketing, membership, retail, video, and the app. The ticketing reference and the retail account survive as linked keys inside one trusted token, not as the key.",
      read: "Ownership of the anchor is the precondition for everything else, including every future vendor change.",
      built: "At the NFL I worked on one fan identity across 32 clubs, where most fans touch more than one club. At Samsung I owned a CDP resolving 220 million-plus identities.",
    },
    {
      tag: "System of context",
      title: "Put one live profile at the centre",
      body: "Every interaction lands in one real-time fan profile that sales, service, marketing, commerce, and loyalty all read. The same profile grounds the fan and staff assistants.",
      read: "Agents are the visible product. The grounded profile underneath is the actual asset.",
      built: "At MLB one implementation served all 30 clubs, and the same profile fed scan-triggered game-day journeys and the clean-room roadmap for partners.",
    },
  ],
  takeaways: [
    "Name the jobs before you name the vendors. The three decisions hold on an enterprise suite, a composable stack, or a sports-native platform.",
    "Write the value case for three audiences. Fans get relevant experiences. The club converts anonymous traffic into known profiles. Partners get richer data and the attribution to prove their return.",
    "The hard parts are rarely on the architecture slide: events where a promoter owns the customer, third-party operators inside the venue, consent that must hold across twenty revenue lines, and the cost of real time where daily would do.",
  ],
};

// Implementation by organisation type. This is the core of the plan.
export const archetypes = [
  {
    id: "venue",
    name: "The venue-led elite club",
    example: "A top-flight club whose stadium is a 365-day business: international fixtures, concerts, attractions, hospitality.",
    problem: "Twenty-plus revenue lines, many with their own platform and some with a third party who owns the customer.",
    build: [
      "Club-owned identity anchor and SSO first, with ticketing and retail keys linked.",
      "A real-time integration layer separate from the warehouse.",
      "An enterprise system of context, often one suite, with strict cost governance on profile and event volumes.",
      "Event-by-event data agreements with promoters and venue operators.",
    ],
    horizon: "18 to 24 months",
    firstMove: "The identity anchor and a source inventory of every system that touches a fan.",
    evidence: "One Premier League club has described publicly merging 35-plus source systems into one fan record, having found eight to ten versions of the same fan before it started. (ITPro and diginomica, Sept 2026)",
  },
  {
    id: "established",
    name: "The established top-flight club",
    example: "A Premier League or European top-division club without a large venue business.",
    problem: "Good ticketing and retail data, a CRM that is mostly an email tool, and a small team asked to do everything.",
    build: [
      "Single sign-on across ticketing, app, and retail, usually from the ticketing or sports-platform provider.",
      "A sports-native CDP or a composable profile on the existing warehouse, not a full enterprise suite.",
      "Three or four high-value journeys: renewal, matchday, retail, and membership.",
      "Consent redesigned around purposes fans understand, with prompts triggered by behaviour.",
    ],
    horizon: "9 to 12 months",
    firstMove: "A fan census: how many real people sit behind your records, and how many you can legally market to.",
    evidence: "The Premier League reported an 81 percent uplift in opt-in from behaviour-triggered consent prompts, and 200 million-plus personalised communications in 2025/26. (Adobe, Sept 2026)",
  },
  {
    id: "lean",
    name: "The lean club",
    example: "Championship, EFL, second-tier European, and women's professional clubs.",
    problem: "One or two people in CRM, no data engineer, and a ticketing vendor that holds most of the data.",
    build: [
      "CRM before CDP. Get one clean, consented supporter list and keep it clean.",
      "Use the identity your ticketing or club-platform provider already offers, and write down the exit terms.",
      "Shared services through the league or a group of clubs where possible.",
      "A 90-day plan with three measurable outcomes, not a three-year transformation.",
    ],
    horizon: "90 days, then quarterly",
    firstMove: "A one-page data map and the three journeys that pay for the next step.",
    evidence: "41 percent of 27 women's professional clubs surveyed have no CRM at all. (Ready Sport Global snapSHOT, 2026)",
  },
  {
    id: "mco",
    name: "The multi-club ownership group",
    example: "A group that owns clubs in several countries and leagues.",
    problem: "Different stacks, different consent laws, and fans who must stay separate per club while the group needs one view of performance.",
    build: [
      "One core data model with per-club configuration outside it, so club eight costs what club two cost.",
      "Per-club tenancy for fan data, with consent rules set by jurisdiction.",
      "Group-level analytics on aggregated or pseudonymised data, not shared fan records.",
      "A shared playbook and toolkit, so each new acquisition onboards in weeks.",
    ],
    horizon: "6 months to the template, then per acquisition",
    firstMove: "Who can mandate it. A single controlling owner can; a fund-led or holding-company structure needs a named board sponsor first. Then the shared data model and the data-sharing rules between clubs.",
    evidence: "Precedent for separated tenancy on a shared platform: the Belgian Pro League put 16 clubs on one CRM with each club's data kept apart. (Green 4 Solutions and Edam)",
  },
  {
    id: "league",
    name: "The league or federation",
    example: "A league that holds central fan relationships, such as fantasy, central apps, and OTT, alongside its member clubs. Where the league already supplies club apps, websites or approved technology partners, the league is the buyer and the clubs follow.",
    problem: "Clubs that compete with each other must share fan data with the league and, sometimes, with each other. Vendors want access too.",
    build: [
      "A federated model: central identity and data standards, with club-owned activation.",
      "Opt-in sharing between league and clubs that fans can understand and control.",
      "A clean room for cross-club and partner collaboration in place of file exchange.",
      "Rights and data-sharing rules written into club and vendor agreements.",
    ],
    horizon: "12 to 24 months, with governance first",
    firstMove: "The governance charter: what a fan record is, who owns it, and who may act on it.",
    link: { href: "/federated", label: "Case study: one fan, thirty-two clubs" },
    evidence: "The NFL has stated publicly that 60 percent of its fans overlap across its 32 clubs, and that its harmonised model cut over-communication by 30 percent. (Adobe, May 2026)",
  },
  {
    id: "owner",
    name: "The new owner or investor",
    example: "Private capital, often from the US, acquiring or investing in a European club or league asset.",
    problem: "The fan data asset is part of the valuation, and nobody has looked at it properly.",
    build: [
      "Technical and commercial diligence on the fan data estate before signing.",
      "A 100-day plan for the identity and data foundation after completion.",
      "Board-level KPIs that track the asset, not the activity.",
      "A local operating plan. A playbook written in New York or London rarely transfers to Milan or Seville unchanged.",
    ],
    horizon: "One to two weeks for diligence, then 100 days",
    firstMove: "A diligence memo that states what the asset is, what it is not, and what it will cost to fix.",
    evidence: "Record counts are not fan counts. The same league reported a 60 percent overlap across its clubs, so a diligence that adds up club databases overstates the asset. (Adobe, May 2026)",
  },
];

// The delivery sequence. Each phase pays for the next.
export const roadmap = [
  { phase: "00", name: "Diagnose", time: "Weeks 0 to 3", body: "Source inventory, fan census, consent audit, and the target architecture. A business case the board can sign." },
  { phase: "01", name: "Anchor", time: "Months 1 to 4", body: "Club-owned identity and single sign-on. Ticketing and retail keys linked. Consent model rebuilt by purpose." },
  { phase: "02", name: "Connect", time: "Months 3 to 8", body: "Real-time integration for the signals that matter: turnstile, point of sale, retail, renewals, app events." },
  { phase: "03", name: "Contextualise", time: "Months 6 to 12", body: "The unified fan profile goes live as the system of context, with lifetime value and propensity models from the warehouse." },
  { phase: "04", name: "Activate", time: "Months 9 to 15", body: "Journeys, service, commerce, and hospitality sales run from one profile. Over-communication falls. Revenue per known fan rises." },
  { phase: "05", name: "Agents and partners", time: "Months 12 to 18", body: "Grounded agents for fans and staff. Clean-room measurement and audience products for sponsors and partners." },
];

// The scoreboard. Measure the asset, not the activity.
export const kpis = [
  { name: "Records per real fan", why: "How many duplicate profiles hide one supporter. At venue-led clubs it is commonly eight or ten before consolidation." },
  { name: "Known-fan share", why: "The share of digital traffic and transactions tied to a known, consented person." },
  { name: "Marketable consent rate", why: "Known is not enough. Behaviour-triggered prompts have lifted opt-in by 81 percent at the Premier League." },
  { name: "Time to audience", why: "How long a commercial team waits for a segment. A week is common. Self-serve inside a day is the standard to hold the stack to." },
  { name: "Over-communication rate", why: "How often one fan hears from several departments at once. The NFL has reported a 30 percent reduction across clubs." },
  { name: "Partner-attributed revenue", why: "The sponsorship and media value you can prove with data, not just reach." },
];

// Two data estates in one club. Where sporting operations platforms fit.
export const twoEstates = {
  title: "One club, two data estates",
  body: "Fan data is half of the club's data problem. The other half lives in football operations: recruitment, performance, medical, academy, and contracts. New platforms such as ClubOS, built in Amsterdam with design-partner clubs in the Netherlands, Portugal, and Italy, are doing for the sporting side what CDPs did for the commercial side: one connected operating system in place of spreadsheets, messaging threads, and decks.",
  points: [
    {
      t: "Separate records, shared rules",
      d: "Fan records and player records must never merge. They must share one governance model, one access policy, and one definition of who may see what.",
    },
    {
      t: "Special-category data",
      d: "Medical and wellbeing data on players is special-category data under GDPR. The consent and access discipline built for fans transfers directly, and the stakes are higher.",
    },
    {
      t: "Where the estates meet",
      d: "A signing, a contract extension, or an academy graduate is a commercial event as well as a sporting one. The best clubs route that signal to retail, content, and partnerships the same day.",
    },
  ],
};

// The ecosystem. Vendor-neutral map of the market.
export const ecosystem = [
  { cat: "Enterprise clouds", names: "Salesforce, Adobe, Microsoft, SAP", note: "League and elite-club references. Strongest where one suite runs sales, service, and marketing." },
  { cat: "Warehouse-native and composable", names: "Snowflake, Databricks, BigQuery, Hightouch, Segment", note: "Full ownership and the lowest marginal cost. You buy an engineering capability, not a product." },
  { cat: "Sports-native fan platforms", names: "Cortex, Incrowd, Fanbase, Arenametrix, Two Circles", note: "Fast time to value for clubs without a data team. Check the exit terms on the data." },
  { cat: "Football operations platforms", names: "ClubOS and the performance-analysis tools", note: "The sporting estate. Different data, same governance questions." },
  { cat: "Identity, consent, and ticketing", names: "Okta and Auth0, SAP Customer Data Cloud, OneTrust, Didomi, Ticketmaster, SECUTIX", note: "Where the identity anchor and the consent model actually live." },
  { cat: "Clean rooms and partner data", names: "AWS Clean Rooms, Snowflake, InfoSum, LiveRamp", note: "How sponsors and media partners measure without receiving your fan file." },
];

// What I deliver, productised for clubs.
export const offers = [
  {
    name: "Club Data Blueprint",
    format: "Three weeks · Starts here",
    body: "Source inventory, fan census, consent audit, and a target architecture with the jobs separated. A sequenced 18-month roadmap and a board-ready business case.",
  },
  {
    name: "Identity Anchor Sprint",
    format: "Eight to twelve weeks",
    body: "Design and delivery oversight for club-owned identity and single sign-on: linking ticketing and retail keys, the consent model, the migration plan, and the fan communications.",
  },
  {
    name: "Stack Selection & RFP",
    format: "Eight to twelve weeks",
    body: "Requirements, shortlist, scripted demos, commercial terms, and exit terms on the data. I have sat on the buying side of every category on the market map.",
  },
  {
    name: "Fractional Head of Fan Data",
    format: "Two days a week · Embedded",
    body: "Senior ownership of the fan-data roadmap, the vendors, and the internal adoption through a build, without the full-time overhead.",
  },
  {
    name: "Partner Value & Clean Rooms",
    format: "Project",
    body: "The collaboration model that lets sponsors and media partners prove their return on your fan data, and lets you price on data rather than reach alone.",
  },
  {
    name: "Agent Readiness Sprint",
    format: "Six weeks",
    body: "What your fan and staff agents may read, say, and do. Grounding, consent by purpose, evaluation sets, human handover, and the path from answer to action to transaction.",
  },
  {
    name: "Multi-Club & League Data Model",
    format: "Project",
    body: "One core model with per-club configuration, consent by jurisdiction, and the data-sharing charter between clubs, league, and partners.",
  },
  {
    name: "Ownership Diligence",
    format: "One to two weeks per target",
    body: "The fan data estate as an investment committee needs to see it: what the asset is, what it is not, and what it will cost to fix.",
  },
];

// Case studies from my own record, framed against the blueprint layers.
export const cases = [
  {
    co: "National Football League",
    layer: "Governance and identity across 32 clubs",
    points: [
      "Unified fan identity and data across all 32 clubs into one league-scale operating model.",
      "Authored the governance framework: privacy, consent, data standards, and cross-club integration.",
      "The league has publicly stated that 60 percent of its fans overlap across clubs. That is the identity problem in one number, and the reason a federated model beats 32 separate ones.",
    ],
    maps: ["01", "06"],
  },
  {
    co: "Major League Baseball",
    layer: "One platform for 30 clubs",
    points: [
      "Built the customer data platform for all 30 clubs on Adobe Experience Platform and Journey Optimizer, a 10 million dollar-plus remit across CDP, clean rooms, email, SMS, push, and CTV.",
      "Lifted audience engagement 20 percent across the clubs on the platform, with game-day journey templates any club could clone.",
      "Launched real-time, scan-triggered journeys. The Mets pilot sent 12,000-plus push notifications in a season, and check-in click-through rose from about 4 to 9 percent.",
    ],
    maps: ["02", "03", "05"],
  },
  {
    co: "Amazon Ads",
    layer: "Clean rooms and partner measurement",
    points: [
      "Directed 30-plus Tier 1 client partnerships on Amazon Marketing Cloud: Connected Identity, clean-room architecture, and advanced measurement.",
      "Built repeatable measurement patterns clients could rerun themselves. This is the model for sponsor and partner measurement in sport.",
    ],
    maps: ["06"],
  },
  {
    co: "Digitas for Samsung",
    layer: "Identity at population scale",
    points: [
      "Product owner of an identity-linked CDP resolving 220 million-plus identities on Google Cloud.",
      "Moving from third-party to owned data cut data spend by about 99 percent, roughly 700,000 dollars, while reach grew.",
    ],
    maps: ["01", "03"],
  },
  {
    co: "Annalect EMEA, Omnicom",
    layer: "One product, 58 markets",
    points: [
      "Rolled out one identity and measurement product suite across 58 markets with per-market configuration, not 58 bespoke builds.",
      "The direct template for multi-club ownership groups and leagues.",
    ],
    maps: ["04", "06"],
  },
  {
    co: "Citizen of Nowhere",
    layer: "Built, not described",
    points: [
      "Designed and shipped the Global Metro Power Rankings as an AI-assisted product: 70,000-plus parameters across 4,300-plus metros in 247 countries and territories, with a sports layer covering clubs, venues, and valuations.",
      "Built the Studio, a working fan-data stack with identity, consent, audience building, activation, and lift measurement, plus the configurator for this blueprint.",
      "Product manager and builder in one seat: requirements, data model, agentic tooling, and release, with the same discipline I apply to a club estate.",
    ],
    maps: ["01", "03", "05"],
  },
];

// Builder proof: the Studio mapped to the blueprint.
export const studio = [
  { layer: "01", name: "Identity graph", href: "https://rankings.citizenofnowhere.org/studio/identity", d: "One fan matched across ticketing, app, email, and ad IDs, with provenance kept." },
  { layer: "02", name: "Source registry and pipeline", href: "https://rankings.citizenofnowhere.org/studio/sources", d: "Ticketing, CRM, app, web, and ad feeds connected into one governed foundation." },
  { layer: "03", name: "Fan profile: system of context", href: "https://rankings.citizenofnowhere.org/studio/profile", d: "Seven conflicting records become one live profile, with survivorship rules, consent by purpose, real-time versus batch, and agent grounding." },
  { layer: "05", name: "Audience Builder and activation", href: "https://rankings.citizenofnowhere.org/studio/audience-builder", d: "Cohorts from plain English or 16 dimensions, pushed to Meta, Google, CRM, or a clean room with the consent gate enforced." },
  { layer: "06", name: "Consent and suppression console", href: "https://rankings.citizenofnowhere.org/studio/consent", d: "Consent by purpose, with suppression that always overrides inclusion." },
  { layer: "04", name: "Lift and incrementality", href: "https://rankings.citizenofnowhere.org/studio/measurement", d: "Exposed against holdout on a revenue KPI, so the board sees impact rather than activity." },
];

export const configurator = {
  title: "Configure a blueprint for your club",
  body: "Pick your organisation type and what you run today. The Studio configurator returns the layer-by-layer target, the sequence, and the first move, using the same model as this page.",
  href: "https://rankings.citizenofnowhere.org/studio/club-blueprint",
};

export const faq = [
  {
    q: "Do we need Salesforce or Adobe to do this?",
    a: "No. The six jobs are the same on any stack. An enterprise suite makes sense when one vendor will run sales, service, and marketing. A composable stack makes sense when you have engineers and want to own every layer. A sports-native platform makes sense when you have neither. I am independent of all of them.",
  },
  {
    q: "We already have Snowflake. Is that wasted?",
    a: "Usually the opposite. The warehouse is the right home for analytics and modelling. The problem starts when it is also asked to run real-time operational integration. Separating those jobs makes the warehouse more valuable, not less.",
  },
  {
    q: "We are a lean club with two people in CRM. Is this for us?",
    a: "Yes, in a smaller shape. Start with one clean, consented supporter list, the identity your ticketing provider already offers, and three journeys that pay for the next step. A blueprint for a lean club fits in 90 days.",
  },
  {
    q: "How does this work with the league?",
    a: "Leagues increasingly hold central fan relationships through fantasy, apps, and OTT, and share opt-in data with clubs. The club blueprint must plug into that federation, not compete with it. I have built that model from the league side.",
  },
  {
    q: "Where does AI come in?",
    a: "After the system of context, not before. An agent on top of unresolved identity gives faster wrong answers. Once the profile is grounded and consent is by purpose, agents move from answering to acting to transacting, one gate at a time.",
  },
  {
    q: "What about privacy law?",
    a: "UK GDPR, the EU GDPR, PECR, and the Data (Use and Access) Act 2025 all shape consent, cookies, and sharing. I design the consent and governance model with your counsel, and I build it so the rules are enforced in the system, not in a policy document.",
  },
];

// One fan event, routed to every team that needs it. Illustrates layers 01 and 02.
export const oneUpdate = {
  title: "One update, five teams",
  body: "A fan renews a season ticket. In most clubs, five teams find out at five different times, and some never do. With an identity anchor and real-time integration, the renewal is entered once and each team gets the part it needs.",
  event: "A fan renews a season ticket for next season",
  signals: [
    { team: "Ticketing", d: "The seat is held and the renewal counts against the target." },
    { team: "Membership and CRM", d: "The fan moves to the renewed segment. The lapse journey stops." },
    { team: "Partnerships", d: "The consented sponsor audience updates the same day." },
    { team: "Retail and content", d: "One renewal offer goes out, not three." },
    { team: "Finance", d: "The revenue is booked and the forecast moves." },
  ],
  close: "Most clubs do this by hand, in five systems, a week apart. The blueprint makes it one entry.",
};

// Who the practice is not for. Stated plainly so the right clubs self-select.
export const notFor = [
  "You want a vendor named in the first meeting. I name one only after the source inventory.",
  "You want a dashboard, not a decision. Every engagement ends on a decision the board can make.",
  "You cannot share the source systems. The blueprint starts from real exports, not from slides.",
  "You need a team to build and run the platform. I design it, select it, and oversee delivery. A delivery partner builds it.",
];

// How every engagement closes.
export const decisionCard = {
  title: "Every engagement ends on one decision card",
  items: ["What I recommend", "Why this one", "What it assumes", "Two alternatives", "The next decision"],
};

export const pageMeta = {
  title: "The Club Data Blueprint | Citizen of Nowhere",
  description:
    "How football clubs, leagues, and ownership groups unify first-party fan data across their martech and adtech stacks. A vendor-neutral blueprint, implementation archetypes, and services from Ashwin Desikan.",
  path: "/clubs",
};

// ---------------------------------------------------------------------------
// Additive exports for the /clubs child pages (front-door branch).
// ---------------------------------------------------------------------------

// Which services fit which archetype. Keys are archetype ids; values are
// titles exactly as they appear in `offers`.
export const archetypeServices: Record<string, string[]> = {
  venue: ["Club Data Blueprint", "Identity Anchor Sprint", "Partner Value & Clean Rooms"],
  established: ["Club Data Blueprint", "Identity Anchor Sprint", "Stack Selection & RFP"],
  lean: ["Club Data Blueprint", "Fractional Head of Fan Data", "Stack Selection & RFP"],
  mco: ["Multi-Club & League Data Model", "Club Data Blueprint", "Identity Anchor Sprint"],
  league: ["Multi-Club & League Data Model", "Partner Value & Clean Rooms", "Club Data Blueprint"],
  owner: ["Ownership Diligence", "Club Data Blueprint", "Fractional Head of Fan Data"],
};

// Counts the words in every string found inside any value (strings, arrays,
// plain objects). Used to feed the reading-time line on the child pages.
export function wordCount(value: unknown): number {
  if (typeof value === "string") {
    const t = value.trim();
    return t ? t.split(/\s+/).length : 0;
  }
  if (Array.isArray(value)) return value.reduce((n: number, v: unknown) => n + wordCount(v), 0);
  if (value && typeof value === "object") {
    return Object.values(value as Record<string, unknown>).reduce((n: number, v: unknown) => n + wordCount(v), 0);
  }
  return 0;
}
