export const agency = {
  name: "UVT Advertising",
  email: "uvtadvertising@gmail.com",
  location: "Stoke-on-Trent, Staffordshire",
  address: "12 Example Street, Hanley, Stoke-on-Trent, ST1 1AA",
  whatsapp: "+44 7700 900123",
  whatsappHref: "https://wa.me/447700900123",
  hours: "Monday to Friday, 9am – 6pm",
  tagline: "Digital Marketing Agency in Stoke-on-Trent",
  serving: "Serving Businesses Across Staffordshire",
  socials: [
    { label: "Facebook", href: "https://facebook.com/uvtadvertising" },
    { label: "Instagram", href: "https://instagram.com/uvtadvertising" },
    { label: "LinkedIn", href: "https://linkedin.com/company/uvtadvertising" },
  ],
} as const;

export const serviceLinks = [
  { label: "Web Development", href: "/services#web-development" },
  { label: "App Development", href: "/services#app-development" },
  { label: "Graphic Design", href: "/services#graphic-design" },
  { label: "SEO", href: "/services#seo" },
  { label: "Google Ads", href: "/services#google-ads" },
  { label: "Meta Ads", href: "/services#meta-ads" },
  { label: "Microsoft Ads", href: "/services#microsoft-ads" },
] as const;

export const serviceAreas = [
  { label: "Stoke-on-Trent", href: "/stoke-on-trent" },
  { label: "Staffordshire", href: "/staffordshire" },
] as const;

export const promisePoints = [
  "Lower prices than most UK agencies",
  "No compromise on quality — ever",
  "No hidden fees",
  "Clear communication in simple language",
  "Real results that grow your business",
] as const;
