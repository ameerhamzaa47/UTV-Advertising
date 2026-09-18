export type NavItem = {
  label: string;
  href: string;
};

export type Service = {
  id: string;
  title: string;
  description: string;
  slug: string;
  tags: string[];
  icon: string;
};

export type CaseStudy = {
  id: string;
  category: string;
  client: string;
  challenge: string;
  solution: string;
  results: string[];
  tone: "accent" | "accent-end";
  slug: string;
};

export type WorkItem = {
  id: string;
  title: string;
  client: string;
  category: string;
  slug: string;
  image: string;
};

export type Sector = {
  id: string;
  label: string;
  icon: string;
  title: string;
  description: string;
  points: string[];
};
