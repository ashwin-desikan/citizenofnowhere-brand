// The public record: what MLB, the NFL, and their partners have said publicly
// about the fan data and martech programmes Ashwin worked on.
// "Before I joined" is context on the platform he inherited.
// "During my tenure" means the work described was done while Ashwin was
// there, even if the publication came later. "Built on since" means work
// done after he left, on the foundations laid. No em dashes. Do not add links to first-person bylines
// by individual executives; cite company, vendor, or independent sources.

export type RecordItem = {
  date: string;
  publisher: string;
  title: string;
  url: string;
  kind: "Press release" | "Vendor case study" | "Conference session" | "Trade press";
  phase: "Before I joined" | "During my tenure" | "Built on since";
  facts: string[];
  link: string; // how it connects to the work
};

export const recordIntro = {
  title: "On the public record",
  sub: "League platforms are announced long after the foundations are poured. These are the public statements, press releases, and conference sessions about the MLB and NFL fan data programmes I worked on, during my time there and since.",
  note: "Facts are quoted from the sources linked. Statements and results belong to the leagues and their partners; my role is described on the work page.",
};

export const mlbRecord: RecordItem[] = [
  {
    date: "Feb 2023",
    publisher: "Adobe Experience League",
    title: "Adobe Summit 2023: How MLB is revolutionizing fan personalization at scale",
    url: "https://experienceleaguecommunities.adobe.com/adobe-journey-optimizer-15/adobe-summit-2023-ajo-session-how-mlb-is-revolutionizing-fan-personalization-at-scale-14437",
    kind: "Conference session",
    phase: "Before I joined",
    facts: [
      "Adobe Experience Platform applications implemented across all 30 clubs.",
      "Segmentation moved from a seven-day technical process to self-serve in less than a day.",
      "Real-time in-park offers triggered by fan behaviour.",
    ],
    link: "The foundation I inherited and extended: one platform for 30 clubs and self-serve segmentation.",
  },
  {
    date: "Apr 2023",
    publisher: "No Jitter",
    title: "Why MLB turned to Adobe to revolutionize fan personalization",
    url: "https://www.nojitter.com/customer-experience/why-mlb-turned-adobe-revolutionize-fan-personalization",
    kind: "Trade press",
    phase: "Before I joined",
    facts: [
      "One View, an internal fan-profile data product, became the foundational layer for segmentation.",
      "Ticket-scan journeys: a fan scans in and receives a personalised message in real time.",
      "About 7,000 hours saved; 175 million fans and 100 million tickets a year in scope.",
    ],
    link: "The foundation I inherited and extended: the unified fan profile and scan-triggered journeys, which became the Mets push pilot.",
  },
  {
    date: "Feb 2025",
    publisher: "Adobe",
    title: "Adobe Real-Time CDP Collaboration now generally available",
    url: "https://news.adobe.com/news/2025/02/adobe-real-time-cdp-collab-ga",
    kind: "Press release",
    phase: "During my tenure",
    facts: [
      "Major League Baseball named among the advertisers that piloted Adobe's privacy-safe data collaboration product.",
    ],
    link: "The clean-room roadmap for monetising first-party data with sponsorship and media partners.",
  },
  {
    date: "Mar 2025",
    publisher: "Adobe Summit 2025",
    title: "Accelerate journey time to value: how MLB delivers game-day messaging",
    url: "https://business.adobe.com/uk/summit/2025/sessions/accelerate-journey-time-to-value-how-mlb-delivers-s929.html",
    kind: "Conference session",
    phase: "During my tenure",
    facts: [
      "Ten use-case templates for the 30 clubs, more than 180 journeys in 2024, and 15 digital producers trained.",
      "Email plus push converted 40 percent better than email alone in a win-back journey.",
      "At some clubs, up to 60 percent of buyers purchase on game day or within 24 hours.",
    ],
    link: "Club toolkits and templates: adoption as the product in a federated league.",
  },
  {
    date: "Aug 2025",
    publisher: "Marketing Dive",
    title: "How MLB is powering first-party data collaborations with Adobe",
    url: "https://www.marketingdive.com/news/how-mlb-is-powering-first-party-data-collaborations-with-adobe/757849/",
    kind: "Trade press",
    phase: "During my tenure",
    facts: [
      "MLB manages first-party data for the league and supplies data sets to its 30 clubs.",
      "Brand collaboration through private connection requests and audience index scoring.",
    ],
    link: "League-held data, club-level activation, and partner collaboration without file exports.",
  },
  {
    date: "Mar 2026",
    publisher: "Adobe",
    title: "Adobe and Major League Baseball expand partnership",
    url: "https://news.adobe.com/news/2026/03/adobe-major-league-baseball-expand-partnership",
    kind: "Press release",
    phase: "During my tenure",
    facts: [
      "Expanded partnership across all 30 clubs, adding generative content and AI optimisation tools.",
      "MLB.TV reported 19.4 billion minutes watched, up 34 percent; MLB App daily traffic up 18 percent on 2024.",
    ],
    link: "The data and journey foundation now carries content automation on top.",
  },
  {
    date: "Mar 2026",
    publisher: "Adobe Summit 2026",
    title: "MLB's path to Sunny and 75: scaling weather-based fan journeys",
    url: "https://business.adobe.com/summit/2026/sessions/mlbs-path-to-sunny-and-75-scaling-weather-based-fa-s925.html",
    kind: "Conference session",
    phase: "During my tenure",
    facts: [
      "Journeys now launch, measure, and optimise in weeks rather than months, using Journey Optimizer and Customer Journey Analytics.",
    ],
    link: "Test-and-learn delivery on the same journey platform.",
  },
  {
    date: "Mar 2026",
    publisher: "Adobe Summit 2026",
    title: "The agentic workflow: MLB blueprint for fan insights with Google Cloud",
    url: "https://business.adobe.com/summit/2026/sessions/the-agentic-workflow-mlb-blueprint-for-fan-insight-s748.html",
    kind: "Conference session",
    phase: "During my tenure",
    facts: [
      "MLB teams query fan insights in natural language through Adobe's marketing agent and Google Gemini Enterprise.",
    ],
    link: "Agents on a grounded fan profile: the system of context doing its job.",
  },
  {
    date: "Apr 2026",
    publisher: "Marketing Dive",
    title: "How MLB is leveraging automation and data to enhance fan messaging",
    url: "https://www.marketingdive.com/news/how-mlb-is-leveraging-automation-and-data-to-enhance-fan-messaging/816034/",
    kind: "Trade press",
    phase: "During my tenure",
    facts: [
      "Clubs combine the enterprise fan data platform with creative to send personalised email and text.",
    ],
    link: "Fan data platform plus content: the activation layer at club level.",
  },
];

export const nflRecord: RecordItem[] = [
  {
    date: "Jul 2024",
    publisher: "AWS for Media & Entertainment",
    title: "Inside the NFL's innovative fan data platform powered by AWS",
    url: "https://aws.amazon.com/blogs/media/inside-the-nfls-innovative-fan-data-platform-powered-by-aws",
    kind: "Vendor case study",
    phase: "Before I joined",
    facts: [
      "A unified fan view across the league and 32 clubs: 90 billion rows of fan data and more than 250 dimensions per fan.",
      "Visibility grew about four times, from 12 million partially viewed individuals to more than 70 million active fans, in 18 months.",
      "Consent signals centralised across internal systems and vendor touchpoints; open rates for segmented campaigns doubled or tripled.",
    ],
    link: "The foundation I inherited and extended: the league-wide fan view and centralised consent across 32 clubs.",
  },
  {
    date: "Jul 2024",
    publisher: "InformationWeek",
    title: "NFL IT leader on how the league uses AI and data analytics",
    url: "https://informationweek.com/machine-learning-ai/nfl-it-leader-on-how-the-league-uses-ai-data-analytics",
    kind: "Trade press",
    phase: "Before I joined",
    facts: [
      "The NFL describes itself as one of the first sports leagues to bring all its fan data together with all 32 clubs, built on permissible use and transparency with fans.",
    ],
    link: "The foundation I inherited and extended: permissible use as the design constraint for league-club data sharing.",
  },
  {
    date: "Mar 2025",
    publisher: "Adobe Summit 2025",
    title: "Scoring big: how the NFL orchestrates exceptional fan engagement journeys",
    url: "https://business.adobe.com/summit/2025/sessions/scoring-big-how-the-nfl-orchestrates-exceptional-s526.html",
    kind: "Conference session",
    phase: "During my tenure",
    facts: [
      "One-to-one, cross-channel journeys with alignment across league departments and franchises.",
    ],
    link: "Cross-club orchestration: who may message which fan, and when.",
  },
  {
    date: "Apr 2025",
    publisher: "Adobe and the NFL",
    title: "NFL and Adobe launch AI-powered fan experience partnership",
    url: "https://news.adobe.com/news/2025/04/nfl-adobe-launch-ai-powered-fan-experience",
    kind: "Press release",
    phase: "During my tenure",
    facts: [
      "Adobe Experience Platform, Journey Optimizer, Customer Journey Analytics, and Workfront for the league and all 32 clubs.",
      "Personalised communication across NFL.com, the NFL App, and NFL OnePass.",
    ],
    link: "The martech product layer modernised for the league and clubs.",
  },
  {
    date: "Sep 2025",
    publisher: "Adobe",
    title: "How the NFL uses Adobe AI to bring fans closer to the game",
    url: "https://business.adobe.com/blog/how-the-nfl-uses-adobe-ai-to-bring-fans-closer-to-the-game",
    kind: "Vendor case study",
    phase: "During my tenure",
    facts: [
      "Real-Time CDP combines behaviour, preferences, and engagement into one fan profile for more than 200 million US fans and 21 international markets.",
      "The NFL's framing: fans do not see silos, they see one NFL.",
    ],
    link: "One fan across 32 clubs and the international markets.",
  },
  {
    date: "2026",
    publisher: "Adobe Summit 2026",
    title: "The future of fan engagement: NFL, PGA Tour, 49ers and Fox on trusted AI",
    url: "https://business.adobe.com/summit/2026/sessions/the-future-of-fan-engagement-nfl-pga-tour-49ers-an-s702.html",
    kind: "Conference session",
    phase: "During my tenure",
    facts: [
      "The NFL's privacy leadership on trusted AI and personalisation: innovation that does not outpace integrity.",
    ],
    link: "Privacy and consent standards as the basis for AI at league scale.",
  },
  {
    date: "May 2026",
    publisher: "NFL, via Adobe",
    title: "How the NFL personalises fan experiences at scale",
    url: "",
    kind: "Vendor case study",
    phase: "During my tenure",
    facts: [
      "A harmonised model connects the NFL's tech stack with those of all 32 clubs.",
      "60 percent of fans overlap across clubs; over-communication fell 30 percent across teams.",
    ],
    link: "The identity problem in one number, and the federated model that answers it.",
  },
  {
    date: "Sep 2026",
    publisher: "Adobe",
    title: "How the NFL scaled its global content engine with Adobe",
    url: "https://business.adobe.com/blog/nfl-global-content-engine",
    kind: "Vendor case study",
    phase: "Built on since",
    facts: [
      "A zero-trust visibility model gives each club only approved league assets and its own content.",
      "Template automation fell from three to five weeks to about 15 minutes.",
    ],
    link: "Club-level access rules: the governance model applied to content.",
  },
  {
    date: "Sep 2026",
    publisher: "Marketing Brew",
    title: "Inside year two of the NFL's AI partnership with Adobe",
    url: "https://www.marketingbrew.com/stories/nfl-adobe-AI-partnership-fan-data",
    kind: "Trade press",
    phase: "Built on since",
    facts: [
      "A proprietary NFL database pulls data from all 32 clubs, begun about four years earlier.",
    ],
    link: "The league-club data foundation, described independently.",
  },
];

// Things the public record surfaces that sharpen the story.
export const recordTakeaways = [
  "Both leagues chose one implementation for every club, not 30 or 32 separate builds. The public results (seven days to under one at MLB, four times the visible fanbase at the NFL) come from that decision.",
  "Both leagues moved from data foundation to collaboration to agents in the same order: unify, govern, activate, collaborate with partners, then put AI on top.",
  "MLB's clean-room path became a named pilot of a privacy-safe collaboration product in 2025. The NFL's consent centralisation became the basis for its trusted-AI position in 2026.",
];
