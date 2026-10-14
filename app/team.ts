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
    title: "CEO",
    image: "/team-jaylin-jackson.jpg",
    instagram: "jaylinjackk_",
  },
  {
    name: "Chancelor Burks",
    title: "Client Relations",
    bio: "Main point of contact for coaches and families.",
    image: "/team-chancelor-burks.jpg",
  },
  {
    name: "Peyton Rochell",
    title: "Athlete Relations Associate",
    image: "/team-peyton-rochell.jpg",
    instagram: "rochellpayton",
  },
];
