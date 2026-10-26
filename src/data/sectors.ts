// Who I work with: the seven kinds of organisation the practice serves, and the
// role families for the full-time search. Shown on /sectors and /hiring.
// No em dashes anywhere in this file. Every proof line must trace to the CV or
// to claude/factual_corrections in the Job Search project.

export type Sector = {
  id: string;
  name: string;
  short: string;
  examples: string;
  where: string;
  problem: string;
  bring: string[];
  start: { label: string; href: string }[];
  proof: { label: string; href: string };
};

export const sectors: Sector[] = [
  {
    id: "leagues",
    name: "Leagues, federations and governing bodies",
    short: "Leagues",
    examples: "Major leagues, national federations, tours and new competitions",
    where: "North America, the UK and Europe",
    problem: "The league needs one view of the fan across clubs that compete with each other, and the clubs need a reason to share.",
    bring: [
      "Ran data governance and martech products across all 32 NFL clubs: the federated model, consent and data standards, club toolkits and executive readouts.",
      "Led marketing technology across 30 MLB clubs from the league office: the Adobe Experience Platform rollout (20 percent engagement lift), the league-wide email RFP and bringing LiveRamp into the league.",
      "Both models from the inside: a central league that holds digital rights, and a federation where clubs keep their own data.",
    ],
    start: [
      { label: "Multi-Club & League Data Model", href: "/clubs/services" },
      { label: "Clean Room & Partner Measurement", href: "/practice?engagement=cleanroom#offer-cleanroom" },
      { label: "Fractional Head of Data & Identity", href: "/practice?engagement=fractional#offer-fractional" },
    ],
    proof: { label: "One fan, thirty-two clubs", href: "/federated" },
  },
  {
    id: "clubs",
    name: "Clubs, teams and franchises",
    short: "Clubs",
    examples: "Football clubs, US franchises, venue operators and women's teams",
    where: "Europe, the UK and North America",
    problem: "A dozen businesses share one fan, and each keeps its own record of that fan.",
    bring: [
      "The Club Data Blueprint: six layers, one sequence, implementation plans by club type.",
      "Club-side adoption at league scale: the toolkits and journeys that 62 NFL and MLB clubs used.",
      "A live reference build in the Studio: identity, consent, audiences, activation and measurement on synthetic fans.",
    ],
    start: [
      { label: "First-Party Readiness Diagnostic", href: "/practice?engagement=diagnostic#offer-diagnostic" },
      { label: "Stack Selection, RFP & Negotiation", href: "/practice?engagement=stack#offer-stack" },
    ],
    proof: { label: "The Club Data Blueprint", href: "/clubs" },
  },
  {
    id: "owners",
    name: "Owners, investors and multi-club groups",
    short: "Owners and investors",
    examples: "Private equity, family offices, single-owner multi-club groups, new owners",
    where: "US capital investing in Europe, and the reverse",
    problem: "The fan data is part of the price, and nobody has looked at it properly before signing.",
    bring: [
      "Technical diligence written for an investment committee: what the asset is and is not, revenue per known fan, stack costs and exit terms.",
      "A 100-day plan for the data foundation after completion, run locally rather than from a deck written in another city.",
      "The group model: one core data model, per-club configuration, consent by jurisdiction.",
    ],
    start: [
      { label: "Investor Technical Diligence", href: "/practice?engagement=diligence#offer-diligence" },
      { label: "Fractional Head of Data & Identity", href: "/practice?engagement=fractional#offer-fractional" },
    ],
    proof: { label: "The new owner playbook", href: "/clubs/for/owner" },
  },
  {
    id: "media",
    name: "Media owners, streamers and platforms",
    short: "Media and platforms",
    examples: "Broadcasters, streamers, audio, publishers, commerce and retail media networks",
    where: "US, UK and EMEA",
    problem: "The first-party audience is the asset on the slide, and the commercial team still cannot package it, prove it or sell it to a partner.",
    bring: [
      "Spotify: global audience measurement and monetisation frameworks across a 500-plus person sales organisation, contributing to a 40 percent year-on-year rise in audience-targeted revenue.",
      "Amazon Ads: clean rooms, Connected Identity and measurement on Amazon Marketing Cloud for 30-plus Tier 1 advertisers.",
      "Adform: product director and commercial owner of the DMP across 200-plus partners, and the European data consultancy built from zero.",
    ],
    start: [
      { label: "Clean Room & Partner Measurement", href: "/practice?engagement=cleanroom#offer-cleanroom" },
      { label: "Stack Selection, RFP & Negotiation", href: "/practice?engagement=stack#offer-stack" },
    ],
    proof: { label: "The full record", href: "/work" },
  },
  {
    id: "agencies",
    name: "Agencies and holding companies",
    short: "Agencies",
    examples: "Media, data and sports-marketing agencies, holding-company data practices",
    where: "London, New York and 58 EMEA markets",
    problem: "Clients want identity, clean rooms and AI built into the offer, and the pitch needs someone who has run it on the client side.",
    bring: [
      "Digitas and Publicis: product owner of Samsung's identity-linked CDP, 220 million-plus identities, leading a 20-plus person data team.",
      "Annalect and Omnicom: the identity and measurement product suite rolled out across 58 EMEA markets.",
      "GroupM: primary data lead on five holding-company pitches, and the deployment of Signet Jewellers' identity-linked CDP.",
    ],
    start: [
      { label: "Fractional Head of Data & Identity", href: "/practice?engagement=fractional#offer-fractional" },
      { label: "AI Builder Sprint", href: "/practice?engagement=aibuilder#offer-aibuilder" },
    ],
    proof: { label: "Platforms and holding companies", href: "/about#platforms" },
  },
  {
    id: "brands",
    name: "Brands and sponsors",
    short: "Brands and sponsors",
    examples: "Sponsors, consumer brands and their measurement teams",
    where: "Anywhere a rights deal needs proof",
    problem: "The sponsorship renews on reach, and nobody can show what it did for the business.",
    bring: [
      "Advertiser-side measurement inside clean rooms: the analytical question first, then the aggregation that survives privacy rules.",
      "Measurement frameworks with MMM and multi-touch attribution side by side, built for Facebook Workplace.",
      "The rights-holder side of the same trade, so the measurement design works for both parties.",
    ],
    start: [
      { label: "Clean Room & Partner Measurement", href: "/practice?engagement=cleanroom#offer-cleanroom" },
    ],
    proof: { label: "Lift measurement in the Studio", href: "https://rankings.citizenofnowhere.org/studio/measurement" },
  },
  {
    id: "vendors",
    name: "AI, data and martech companies",
    short: "Vendors",
    examples: "AI companies, CDPs, clean rooms, fan engagement and sports data platforms",
    where: "Entering sport in Europe or North America",
    problem: "A strong product with no reference customer that boardrooms recognise, and a sales motion built for a market that works differently.",
    bring: [
      "The buyer's view: I sat on the procurement side at MLB and the NFL, where vendors pitched the league and the clubs every week.",
      "Product leadership on the vendor side at Adform, Skimlinks and VisualDNA.",
      "A rule I keep: when I work for a vendor, I do not advise any property on a choice where that vendor is in the running.",
    ],
    start: [
      { label: "Sport-to-Enterprise Sprint", href: "/practice?engagement=sprint#offer-sprint" },
    ],
    proof: { label: "For AI and data companies", href: "/approach#vendors" },
  },
];

// Role families for the full-time search. Shown on /hiring.
export const roleFamilies = [
  {
    who: "Leagues, rights holders and clubs",
    titles: "Chief Data Officer, VP or Head of Data, Identity or Marketing Technology, Head of Fan Data",
    own: "The fan record, the governance that clubs and partners accept, the martech roadmap and the vendor contracts behind it.",
    proof: "NFL, 32 clubs. MLB, 30 clubs.",
  },
  {
    who: "Agencies and holding companies",
    titles: "SVP or EVP Data and Identity, Head of Data Strategy, sports and entertainment data lead",
    own: "The data and identity proposition, the client builds that prove it, and the pitches that sell it.",
    proof: "Digitas and Samsung, Annalect across 58 EMEA markets, GroupM pitches.",
  },
  {
    who: "Media owners, platforms and commerce media",
    titles: "Head of Audience or Data Products, Director of Measurement, partnerships leadership",
    own: "Turning a first-party audience into products partners pay for, with measurement they trust.",
    proof: "Spotify, Amazon Ads, Adform.",
  },
  {
    who: "Sports tech and AI companies",
    titles: "Head of Product, founding product lead, VP Partnerships or Solutions",
    own: "The product that a league or club can adopt, and the route from pilot to enterprise contract.",
    proof: "Adform, Skimlinks, VisualDNA product roles, and the Studio I built.",
  },
];
