import { agency, serviceAreas, serviceLinks } from "@/content/agency";

export const footerBrand = {
  name: agency.name,
  description: `${agency.tagline}. ${agency.serving}.`,
  email: agency.email,
  location: agency.location,
  address: agency.address,
  whatsapp: agency.whatsapp,
  whatsappHref: agency.whatsappHref,
  socials: agency.socials,
} as const;

export const footerServices = serviceLinks;

export const footerCompany = [
  { label: "About Us", href: "/about" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "FAQ", href: "/faq" },
  { label: "Contact", href: "/contact" },
  ...serviceAreas,
] as const;

export const footerLegal = [
  { label: "Privacy Policy", href: "/privacy" },
  { label: "Terms of Service", href: "/terms" },
  { label: "Cookie Policy", href: "/cookies" },
] as const;
