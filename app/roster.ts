// To add a player: drop the photo in /public and add an entry below.
// To remove a player: delete their entry.
// `group` drives the roster filter buttons (OL, DL, LB, DB, Skill).

export type PositionGroup = "OL" | "DL" | "LB" | "DB" | "Skill";

export type Athlete = {
  name: string;
  position?: string;
  group?: PositionGroup;
  /** Short facts shown as chips: size, school, stats, honors. */
  details: string[];
  /** X (Twitter) handle without the @. */
  x?: string;
  /** Path in /public. Leave out to show a placeholder until a photo is available. */
  image?: string;
};

export const groups: { id: PositionGroup; label: string }[] = [
  { id: "OL", label: "Offensive Line" },
  { id: "DL", label: "Defensive Line" },
  { id: "LB", label: "Linebackers" },
  { id: "DB", label: "Defensive Backs" },
  { id: "Skill", label: "Skill" },
];

export const roster: Athlete[] = [
  {
    name: "Ruben Smith",
    position: "OG / OT",
    group: "OL",
    details: ["6'6\"", "315 lbs", "Tyler Junior College"],
    x: "ThunderSmith76",
    image: "/athlete-ruben-smith.png",
  },
  {
    name: "Winner Ndjibu",
    position: "OT / OG",
    group: "OL",
    details: ["6'5\"", "312 lbs", "Iowa Western CC", "NJCAA '25 national champ", "3-star"],
    x: "ndjibu_winner",
    image: "/IMG_9563.JPG",
  },
  {
    name: "Dieme Lipanda",
    position: "IOL / OG",
    group: "OL",
    details: ["Iowa Western CC", "NJCAA '25 national champ"],
    x: "dieme_lipanda",
    image: "/IMG_9564.jpeg",
  },
  {
    name: "Noah Juliussen",
    position: "OT / C",
    group: "OL",
    details: ["6'5\"", "300 lbs", "Sophomore"],
    x: "noahjuliussen",
    image: "/athlete-noah-juliussen.jpg",
  },
  {
    name: "Caleb Bryant",
    position: "DT / Edge",
    group: "DL",
    details: ["6'3\"", "290 lbs", "Bounce back from Mississippi State"],
    x: "Calebb_45",
    image: "/athlete-caleb-bryant.png",
  },
  {
    name: "Ehigie Aliu-Otokiti",
    position: "DL",
    group: "DL",
    details: ["6'2\"", "285 lbs"],
    x: "EhigieAO",
    image: "/athlete-ehigie-aliu-otokiti.png",
  },
  {
    name: "Deondre Cunningham",
    position: "Edge Rusher",
    group: "DL",
    details: ["6'3\"", "250 lbs"],
    x: "Deondrec22",
    image: "/athlete-deondre-cunningham.png",
  },
  {
    name: "Mekhi Brown",
    position: "LB",
    group: "LB",
    details: ["6'3\"", "205 lbs", "168 career tackles", "26 TFLs", "17 sacks", "2 INTs"],
    x: "__mekhiiii__",
    image: "/athlete-mekhi-brown.png",
  },
  {
    name: "Marlos Walker",
    position: "MLB",
    group: "LB",
    details: ["6'0\"", "220 lbs", "Co-Lin"],
    x: "marloswalker32",
    image: "/athlete-marlos-walker.jpg",
  },
  {
    name: "Eli Bertrand",
    position: "LB",
    group: "LB",
    details: ["6'0\"", "190 lbs", "2025 Sun Conference LB of the Year", "17 tackles in one game"],
    x: "Elidag0at21",
    image: "/athlete-eli-bertrand.png",
  },
  {
    name: "Brady Nowlan",
    position: "LB",
    group: "LB",
    details: ["6'2\"", "230 lbs", "3x All-Conference", "Junior", "Southeastern Fire"],
    image: "/athlete-brady-nowlan.jpg",
  },
  {
    name: "Glendarious Ford",
    position: "CB / S",
    group: "DB",
    details: ["6'1\"", "180 lbs", "Southwest CC"],
    x: "glendarixus",
    image: "/athlete-glendarious-ford.png",
  },
  {
    name: "Damion Miller",
    position: "CB",
    group: "DB",
    details: ["6'3\"", "200 lbs", "Southwest CC"],
    x: "DamionM2005",
    image: "/athlete-damion-miller.png",
  },
  {
    name: "AJ Howard",
    position: "DB",
    group: "DB",
    details: ["40 tackles", "27 solo", "2 TFL", "1 FF", "10 PBUs"],
    x: "MrLocksmith__",
    image: "/athlete-aj-howard.png",
  },
  {
    name: "Allen Sieni",
    position: "DB",
    group: "DB",
    details: [],
    x: "siene_allen",
    image: "/athlete-allen-sieni.png",
  },
  {
    name: "Jaiden Hicks",
    position: "Safety",
    group: "DB",
    details: ["6'2\"", "200 lbs", "Highland CC"],
    x: "Jaidenhicks8",
    image: "/IMG_9571.JPG",
  },
  {
    name: "Jermaine Tyler Jr.",
    position: "DB",
    group: "DB",
    details: ["6'1\"", "180 lbs", "All-Conference", "Southeastern Fire"],
    image: "/athlete-jermaine-tyler-jr.jpg",
  },
  {
    name: "Elijah Hunter",
    position: "DB",
    group: "DB",
    details: ["6'1\"", "195 lbs", "Hinds CC", "Middle Tennessee bounce back"],
    x: "CatchUnoo",
    image: "/athlete-elijah-hunter.jpg",
  },
  {
    name: "Aden Willis",
    position: "DB",
    group: "DB",
    details: ["5'10\"", "185 lbs", "Iowa Central CC"],
    x: "ADWillis7",
    image: "/athlete-aden-willis.jpg",
  },
  {
    name: "Jerron Blakely",
    position: "DB",
    group: "DB",
    details: ["6'0\"", "185 lbs", "Junior", "31 tackles", "2 INTs"],
    x: "JerronBlakely4",
    image: "/athlete-jerron-blakely.jpg",
  },
  {
    name: "Jabari Murphy",
    position: "RB",
    group: "Skill",
    details: ["6'2\"", "225 lbs"],
    x: "JabariMurphy",
    image: "/athlete-jabari-murphy.png",
  },
  {
    name: "Ryan Whitwell",
    position: "RB",
    group: "Skill",
    details: ["6'1\"", "215 lbs", "Senior", "129 att · 1,042 yds · 15 TD", "12 rec · 76 yds"],
    x: "RyanWhitwell3",
    image: "/athlete-ryan-whitwell.jpg",
  },
  {
    name: "Amani Elfadil",
    position: "TE",
    group: "Skill",
    details: ["6'4\"", "235 lbs"],
    x: "amani_elfadil",
    image: "/athlete-amani-elfadil.png",
  },
  {
    name: "David Wacenske",
    position: "WR",
    group: "Skill",
    details: ["6'4\"", "210 lbs", "Junior"],
    image: "/athlete-david-wacenske.jpg",
  },
  {
    name: "Omar Mejia",
    position: "WR",
    group: "Skill",
    details: ["6'0\"", "180 lbs", "Redshirt Freshman"],
    image: "/athlete-omar-mejia.jpg",
  },
  {
    name: "Jashawn Wyckoff",
    position: "WR",
    group: "Skill",
    details: ["6'0\"", "180 lbs", "Cleveland, Ohio", "47 rec · 800 yds · 10 TD"],
    x: "bigsgshiner",
    image: "/athlete-jashawn-wyckoff.jpg",
  },
  {
    name: "Curtis Kimmons Jr.",
    position: "All-Purpose Back",
    group: "Skill",
    details: ["6'0\"", "220 lbs", "4.48 40", "NAIA grad transfer", "Committed to UMass"],
    x: "curtis_kimmons",
    image: "/athlete-curtis-kimmons.jpg",
  },
  {
    name: "Caleb Williams",
    details: ["Junior", "Southern Miss"],
    x: "IamCW_",
    image: "/athlete-caleb-williams.png",
  },
  {
    name: "MJ Campbell",
    position: "DL",
    group: "DL",
    details: ["6'1\"", "280 lbs", "NC Central (D1 FCS)", "Bounce back from Louisville"],
    image: "/athlete-mj-campbell.jpg",
  },
];
