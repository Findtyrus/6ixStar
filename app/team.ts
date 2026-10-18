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
    instagram: "jaylinjackk_",
  },
  {
    name: "Tyrus Burton",
    title: "Chief Financial Officer",
    bio: "Oversees finance, accounting, and financial planning for the agency.",
    image: "/team-tyrus-burton.jpg",
  },
  {
    name: "Chancelor Burks",
    title: "Director of Client Relations",
    bio: "Primary point of contact for coaches and families, managing communication from first conversation to signed deal.",
    image: "/team-chancelor-burks.jpg",
  },
  {
    name: "Peyton Rochell",
    title: "Athlete Relations Associate",
    bio: "Supports athlete outreach and day-to-day agency operations.",
    image: "/team-peyton-rochell.jpg",
    instagram: "rochellpayton",
  },
];
