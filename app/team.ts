// To add a team member: drop a headshot in /public and add an entry below.
// To remove someone: delete their entry.

export type TeamMember = {
  name: string;
  title: string;
  /** One or two sentences. Optional. */
  bio?: string;
  /** Path in /public. Leave out to show an initials placeholder. */
  image?: string;
  /** Instagram handle without the @. */
  instagram?: string;
  /** X (Twitter) handle without the @. */
  x?: string;
  email?: string;
};

export const team: TeamMember[] = [
  {
    name: "Jaylin Jackson",
    title: "Chief Executive Officer",
    bio: "Leads the agency's strategy, athlete relationships, and brand partnerships.",
    image: "/team-jaylin-jackson.jpg",
    instagram: "Jaylinjackk_",
  },
  {
    name: "Tyrus Burton",
    title: "Chief Financial Officer",
    bio: "Oversees finance, accounting, and financial planning for the agency.",
    image: "/team-tyrus-burton.jpg",
    instagram: "findtyrus",
  },
  {
    name: "Chancelor Burks",
    title: "Chief Relations Officer",
    bio: "Primary point of contact for athletes and families, managing communication from first conversation to signed deal.",
    image: "/team-chancelor-burks.jpg",
    instagram: "chancelor.b6",
  },
  {
    name: "Caleb Williams",
    title: "Director of Coach Relations",
    bio: "Builds relationships with coaches and programs, getting our athletes in front of the right staffs.",
    image: "/team-caleb-williams.jpg",
    instagram: "jayknowpaid",
  },
  {
    name: "Peyton Rochell",
    title: "Vice President of Scouting & Recruitment",
    bio: "Scouts talent, brings new athletes into the SixStar family, and goes on visits with them.",
    image: "/team-peyton-rochell.jpg",
    instagram: "rochellpayton",
  },
  {
    name: "Zeke Breil",
    title: "Vice President of Scouting & Recruitment",
    bio: "Scouts talent, brings new athletes into the SixStar family, and goes on visits with them.",
    image: "/team-zeke-breil.jpg",
  },
];
