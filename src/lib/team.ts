export type TeamMember = {
  name: string;
  role: string;
  image: string;
  /** Add profile URLs to turn the icons into links. */
  links?: { linkedin?: string; x?: string; dribbble?: string };
};

// Names and roles copied from the Figma design; several roles are placeholders to confirm with the client.
export const team: TeamMember[] = [
  { name: "Abdullah Farooqi", role: "Head Of Projects", image: "/images/about/team-abdullah-farooqi.webp" },
  { name: "Muhammad Usman", role: "Video Editor", image: "/images/about/team-muhammad-usman.webp" },
  { name: "Michael Johnson", role: "Strength and Conditioning Coach", image: "/images/about/team-michael-johnson.webp" },
  { name: "Emily Davis", role: "Yoga and Wellness Instructor", image: "/images/about/team-emily-davis.webp" },
  { name: "Daniel Thompson", role: "Nutrition and Health Coach", image: "/images/about/team-daniel-thompson.webp" },
  { name: "Olivia Brown", role: "Group Fitness Coordinator", image: "/images/about/team-olivia-brown.webp" },
];
