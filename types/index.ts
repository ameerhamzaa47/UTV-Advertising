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

export type WorkItem = {
  id: string;
  title: string;
  client: string;
  category: string;
  slug: string;
  image: string;
};
