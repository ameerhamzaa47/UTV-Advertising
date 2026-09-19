export const engineeredStats = [
  { value: "8+", label: "Years Experience" },
  { value: "40+", label: "Team Members" },
  { value: "12", label: "Sectors Served" },
] as const;

export const engineeredFeatures = [
  {
    id: "uk-leadership",
    badge: "UK",
    title: "UK Leadership Team",
    description:
      "Strategy, client management and commercial oversight — based in the UK, with direct accountability for every outcome.",
    tone: "light" as const,
  },
  {
    id: "delivery",
    badge: "PK",
    title: "Delivery Specialists",
    description:
      "A highly skilled team of SEO engineers, paid media analysts, and developers. Rigorous hiring standards, senior mentorship, and deep channel expertise.",
    tone: "light" as const,
  },
  {
    id: "partnership",
    badge: "🤝",
    title: "Partnership, not a contract",
    description:
      "We operate as an extension of your team — embedded in your goals, aligned with your outcomes.",
    tone: "dark" as const,
  },
] as const;
