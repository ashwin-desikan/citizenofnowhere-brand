// The four buyer segments behind /for/*. One shared layout renders all four.
// No logos, no named properties, no named people: proof points link to the
// Studio and the public record instead.

export type Segment = {
  id: string;
  nav: string;
  title: string;
  headline: string;
  lead: string;
  symptoms: string[];
  seasonOne: { t: string; d: string }[];
  firstMove: string;
  offers: string[]; // tier slugs from data/practice
  proof: { label: string; href: string; external?: boolean }[];
  objection: { q: string; a: string };
  description: string;
};

export const segments: Segment[] = [
  {
    id: "clubs",
    nav: "Clubs",
    title: "For clubs below the top tier",
    headline: "The same fan data problem as the biggest clubs, with none of the suppliers.",
    lead:
      "Ticketing, the app, the shop, the gate and the inbox each hold a version of the same supporter. The commercial team sells sponsors a reach number because that is the only number it has. The firms that fix this at the top of the pyramid price for a board that wants risk transfer, and they do not come down the table.",
    symptoms: [
      "A record count on the slide that nobody in the room believes is a fan count.",
      "Consent captured as one tick box, so the legal answer to any new use is no.",
      "A sponsor asking at renewal which fans the activation reached, and a reach figure in reply.",
      "An email tool, a ticketing export and a spreadsheet standing in for a fan data platform.",
    ],
    seasonOne: [
      { t: "Prove", d: "One supporter across every system you already run, with records per real person as the first number in the board paper. Consent recorded by purpose, so a new use is a check rather than a legal project." },
      { t: "Release", d: "Audiences leave only after the consent, rights and group-size checks run, and they leave through the activation tools you already pay for. Nothing is copied into a new platform." },
      { t: "Measure", d: "One sponsor renewal with a proof report: who was reached, what they did, small groups withheld. The report is the sponsor's board paper as much as yours." },
    ],
    firstMove: "Pick the one sponsor whose renewal is furthest away and most valuable. Season one is built around that renewal, and everything else follows from it.",
    offers: ["diagnostic", "cleanroom", "aibuilder"],
    proof: [
      { label: "The identity graph on a synthetic club", href: "https://rankings.citizenofnowhere.org/studio/identity", external: true },
      { label: "A release checked at the moment it leaves", href: "https://rankings.citizenofnowhere.org/studio/export", external: true },
      { label: "The Club Data Blueprint", href: "/clubs" },
    ],
    objection: { q: "We already have a CRM.", a: "Good. It stays. The platform sits on your own records and uses your CRM and email tools as destinations. The work is identity, consent and proof, and no CRM does those three across a league and a sponsor." },
    description: "Fan identity, consent by purpose and sponsor proof for clubs below the top tier, run inside the systems the club already has. Built around one sponsor renewal in season one.",
  },
  {
    id: "federations",
    nav: "Federations and leagues",
    title: "For federations, leagues and tours",
    headline: "You govern the key. You do not need to hold the fan graph.",
    lead:
      "A league's fans belong to its clubs, its clubs compete with each other, and its sponsors want to buy across all of them. The answer is not a central database the clubs will never feed. It is a shared identity standard, consent by purpose, and a match the league may run and a club may not.",
    symptoms: [
      "Clubs that will not share, and a central team that cannot say what sharing would be for.",
      "A league sponsor sold a league-wide audience that nobody can assemble or prove.",
      "Overlap between clubs that everyone suspects and nobody can measure.",
      "Shared services the smaller clubs need and the larger clubs will not fund.",
    ],
    seasonOne: [
      { t: "Prove", d: "A conformance standard, not a consolidation: the league publishes the key and the purpose taxonomy, each club keeps its records, and the overlap query runs without pooling anything." },
      { t: "Release", d: "A rights matrix between the league, its clubs and their partners decides who may ask which question. A club asking about a rival is refused by the rules, not by a meeting." },
      { t: "Measure", d: "League-wide sponsor reach and outcomes, with small groups withheld, delivered as a report the sponsor and every club can see the same way." },
    ],
    firstMove: "Two pilot clubs and one league sponsor. The rest of the league joins when it can see the overlap number and the proof report, not before.",
    offers: ["diagnostic", "cleanroom", "fractional"],
    proof: [
      { label: "The two-party match refusing a rival club", href: "https://rankings.citizenofnowhere.org/studio/clean-room", external: true },
      { label: "One fan across thirty-two independently owned clubs", href: "/federated" },
      { label: "The league data charter", href: "/approach#sport" },
    ],
    objection: { q: "Our clubs will never agree.", a: "They do not have to agree to share records. They have to agree to a key and a set of purposes, and to let the league run a query whose answer is a count. That is a much smaller ask, and it is the one that worked across thirty-two clubs that compete for everything." },
    description: "A federated fan data model for leagues, federations and tours: one identity standard, consent by purpose, a rights matrix between clubs and partners, and league-wide sponsor proof without pooling records.",
  },
  {
    id: "us-properties",
    nav: "US properties",
    title: "For US mid-market properties",
    headline: "The league office built this for the top of the market. The rest of the market has the same renewal conversation.",
    lead:
      "Minor league, college, tour and venue-led properties sell the same sponsor the same question the majors do, with a fraction of the staff and no central platform behind them. The buying side has been taught by retail media to ask for incrementality. A reach number no longer closes.",
    symptoms: [
      "Ticketing, concessions, retail and the app on four contracts with four fan records.",
      "A multi-property owner with no shared view of the people who attend more than one.",
      "Sponsors with purchase data of their own, asking for a match you cannot run.",
      "A regional media partner selling your fans as an audience you never released.",
    ],
    seasonOne: [
      { t: "Prove", d: "One person across the venue's systems, with bought-but-did-not-attend as its own segment, because the gate scan is the signal most properties already have and never use." },
      { t: "Release", d: "Consent-checked, hashed audiences into the sponsor's own seat or the activation tools already on the books. No new ad network, no new data broker." },
      { t: "Measure", d: "The sponsor's purchase data matched against the fans it reached, with small groups withheld, in a two-party match the sponsor's own analysts can audit." },
    ],
    firstMove: "Start with the sponsor that already has first-party purchase data and a renewal in the next two quarters. That is where proof is cheapest and worth the most.",
    offers: ["diagnostic", "cleanroom", "sprint"],
    proof: [
      { label: "Lift measurement, incrementality not clicks", href: "https://rankings.citizenofnowhere.org/studio/measurement", external: true },
      { label: "Export by purpose in the formats the ad platforms accept", href: "https://rankings.citizenofnowhere.org/studio/export", external: true },
      { label: "The public record from the leagues", href: "/record" },
    ],
    objection: { q: "We are not big enough for a clean room.", a: "You are not buying a clean room. You are buying a match that runs on two tables and returns counts, with a floor on group size. It runs on the cloud account you already have and it is priced per sponsor, not per platform." },
    description: "Fan identity, consent-checked releases and sponsor proof for US minor league, college, tour and venue-led properties, built around the sponsor renewal and priced per sponsor.",
  },
  {
    id: "investors",
    nav: "Investors and vendors",
    title: "For investors, owners and the vendors entering sport",
    headline: "The fan data is part of the price. Find out what it is before you pay for it.",
    lead:
      "New owners inherit a record count and a vendor stack and are told both are assets. Vendors arriving in sport need one reference a boardroom recognises and a route to the club's own partners. Both need an independent view from someone who has bought and built on both sides of the trade and sells neither.",
    symptoms: [
      "A data room with a fan count and no way to know how many people it represents.",
      "A stack whose exit terms nobody read until the sale.",
      "A product with a sports pilot that never became an enterprise sale.",
      "A multi-club thesis with no shared data model to make it true.",
    ],
    seasonOne: [
      { t: "Prove", d: "For an owner: records per real person, revenue per known fan, and the cost to fix, written for an investment committee with the limits of the review stated in line." },
      { t: "Release", d: "For a vendor: one fan-scale use case at one property, designed so the release checks and the club's partners are part of the build, not an afterthought." },
      { t: "Measure", d: "For both: a result the club will repeat in its own words, because the proof report is theirs to show their sponsors." },
    ],
    firstMove: "For a deal, two weeks of diligence before the price is set. For a vendor, choose the property first and the use case second; most do it the other way round.",
    offers: ["diligence", "sprint", "stack"],
    proof: [
      { label: "The new owner playbook", href: "/clubs#owner" },
      { label: "Sport as the door to enterprise", href: "/approach#vendors" },
      { label: "The Studio, built on a real backend", href: "https://rankings.citizenofnowhere.org/studio", external: true },
    ],
    objection: { q: "Why not have the vendor assess the stack?", a: "Because the firm that assesses your stack should not be the firm selling you one. I take no referral fees and no co-selling; where I advise a vendor on its product, it is disclosed in writing on both sides." },
    description: "Independent technical diligence on fan data assets for investors and new owners, and the sport-to-enterprise route for AI and data vendors, from someone who sells no platform.",
  },
];
