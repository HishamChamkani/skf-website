export const site = {
  name: "SKF",
  fullName: "Sikandar Khattak Films",
  tagline: "Giving Wings to your Stories",
  description:
    "We are a video production studio built around the belief that strong visuals begin with strong intent.",
  contact: {
    // Copied exactly from the Figma home page footer. Confirm before launch.
    email: "info@skfgmail.com",
    phone: "+92 345 9313393",
    phoneHref: "tel:+923459313393",
    hoursDays: "Mon–Sun",
    hoursTime: "01:00 – 24:00",
    addressLines: ["Karachi Waffles, Street Number 7,", "Cavalry Ground, Lahore"],
  },
};

export const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Work", href: "/work" },
  { label: "Testimonials", href: "/#testimonials" },
] as const;

// Replace "#" with the real profile URLs.
export const socialLinks = [
  { label: "Facebook", href: "#" },
  { label: "LinkedIn", href: "#" },
  { label: "X / Twitter", href: "#" },
  { label: "Instagram", href: "#" },
] as const;
