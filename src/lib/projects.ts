export const workCategories = [
  "Long-Form Video Editing",
  "Short-Form Video Editing",
  "Thumbnail Design",
  "Motion Graphics",
  "Content Repurposing",
  "App/Software Promo Video",
] as const;

export type WorkCategory = (typeof workCategories)[number];

export type Project = {
  title: string;
  /** Small label shown at the right of the card caption. */
  label: string;
  /** Filter tabs this project appears under on the Work page. */
  categories: WorkCategory[];
  image: string;
  alt: string;
  href: string;
};

const mockups = {
  mobile: { image: "/images/works/mobile.webp", alt: "Phone mockup on a green stage" },
  laptop: { image: "/images/works/laptop.webp", alt: "Laptop mockup with a statue and blue screen" },
  card: { image: "/images/works/card.webp", alt: "Red ID card mockup on a lanyard" },
  text: { image: "/images/works/text.webp", alt: "Dark typographic screen mockup" },
};

/**
 * PLACEHOLDER PROJECTS copied from the Figma design ("Solstice" / "Web design").
 * Replace with real SKF projects. The categories below are placeholders so the
 * filter tabs can be tested.
 */
export const projects: Project[] = [
  { title: "Solstice", label: "Web design", categories: ["Long-Form Video Editing", "Motion Graphics"], ...mockups.mobile, href: "/work" },
  { title: "Solstice", label: "Web design", categories: ["Short-Form Video Editing", "App/Software Promo Video"], ...mockups.laptop, href: "/work" },
  { title: "Solstice", label: "Web design", categories: ["Thumbnail Design", "Content Repurposing"], ...mockups.card, href: "/work" },
  { title: "Solstice", label: "Web design", categories: ["Motion Graphics", "Long-Form Video Editing"], ...mockups.text, href: "/work" },
  { title: "Solstice", label: "Web design", categories: ["Content Repurposing", "Short-Form Video Editing"], ...mockups.mobile, href: "/work" },
  { title: "Solstice", label: "Web design", categories: ["App/Software Promo Video", "Thumbnail Design"], ...mockups.laptop, href: "/work" },
  { title: "Solstice", label: "Web design", categories: ["Long-Form Video Editing", "Content Repurposing"], ...mockups.card, href: "/work" },
];
