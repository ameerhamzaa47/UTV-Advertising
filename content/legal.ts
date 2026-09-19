export type LegalSection = {
  heading: string;
  paragraphs: string[];
  bullets?: string[];
};

export type LegalPage = {
  title: string;
  lastUpdated: string;
  intro: string;
  sections: LegalSection[];
};

export const privacyPolicy: LegalPage = {
  title: "Privacy Policy",
  lastUpdated: "19 September 2026",
  intro:
    "This Privacy Policy explains how UVT Advertising Ltd (“UVT”, “we”, “us”) collects, uses, and protects your personal information when you visit our website or engage our services.",
  sections: [
    {
      heading: "1. Who we are",
      paragraphs: [
        "UVT Advertising Ltd is a UK performance marketing and SEO agency. For privacy queries, contact us at uvtadvertising@gmail.com. We are based in London, United Kingdom.",
      ],
    },
    {
      heading: "2. Information we collect",
      paragraphs: [
        "We may collect information you provide directly and information gathered automatically when you use our site.",
      ],
      bullets: [
        "Contact details such as name, email address, company name, and phone number when you enquire or book a call",
        "Project and business information you share for proposals or strategy work",
        "Technical data such as IP address, browser type, device information, and pages visited",
        "Cookie and analytics data as described in our Cookie Policy",
      ],
    },
    {
      heading: "3. How we use your information",
      paragraphs: [
        "We use personal data only where we have a lawful basis to do so, including to:",
      ],
      bullets: [
        "Respond to enquiries and deliver our services",
        "Send proposals, reports, and service-related communications",
        "Improve our website, campaigns, and user experience",
        "Meet legal, accounting, and regulatory obligations",
      ],
    },
    {
      heading: "4. Sharing your information",
      paragraphs: [
        "We do not sell your personal data. We may share it with trusted processors (such as hosting, analytics, CRM, or email tools) who act on our instructions, or where required by law.",
      ],
    },
    {
      heading: "5. Data retention",
      paragraphs: [
        "We keep personal data only for as long as needed for the purposes set out in this policy, including contractual, legal, and legitimate business requirements. When no longer required, we delete or anonymise it.",
      ],
    },
    {
      heading: "6. Your rights",
      paragraphs: [
        "Depending on applicable law (including UK GDPR), you may have rights to access, correct, delete, restrict, or object to processing of your personal data, and to request data portability. To exercise these rights, email uvtadvertising@gmail.com.",
      ],
    },
    {
      heading: "7. Security",
      paragraphs: [
        "We apply appropriate technical and organisational measures to protect personal data. No method of transmission over the internet is fully secure, but we work to prevent unauthorised access, loss, or misuse.",
      ],
    },
    {
      heading: "8. Updates",
      paragraphs: [
        "We may update this Privacy Policy from time to time. The “Last updated” date at the top of this page will change when we do. Continued use of our site after updates means you accept the revised policy.",
      ],
    },
  ],
};

export const termsOfService: LegalPage = {
  title: "Terms of Service",
  lastUpdated: "19 September 2026",
  intro:
    "These Terms of Service govern your use of the UVT Advertising website and, where applicable, form the basis of how we engage clients for marketing services. By using our site you agree to these terms.",
  sections: [
    {
      heading: "1. About UVT",
      paragraphs: [
        "UVT Advertising Ltd provides performance marketing, SEO, paid media, and related digital services. Company details and contact: uvtadvertising@gmail.com, London, United Kingdom.",
      ],
    },
    {
      heading: "2. Website use",
      paragraphs: [
        "You may use this website for lawful purposes only. You must not attempt to disrupt the site, scrape content without permission, or misuse any forms or contact channels.",
      ],
    },
    {
      heading: "3. Services and proposals",
      paragraphs: [
        "Service scope, fees, timelines, and deliverables are defined in a separate proposal, statement of work, or contract. Website content is general information and does not itself create a binding client engagement.",
      ],
    },
    {
      heading: "4. Client responsibilities",
      paragraphs: [
        "Where you engage us, you agree to provide timely access, accurate information, brand assets, and approvals needed for delivery. Delays in providing these may affect timelines and results.",
      ],
    },
    {
      heading: "5. Fees and payment",
      paragraphs: [
        "Fees are as agreed in writing. Media spend is typically billed separately by platforms unless otherwise stated. Late payments may result in paused work until accounts are settled.",
      ],
    },
    {
      heading: "6. Intellectual property",
      paragraphs: [
        "Site content, branding, and materials remain UVT property unless otherwise agreed. Work product created for a client is handled as set out in the relevant contract.",
      ],
    },
    {
      heading: "7. Results disclaimer",
      paragraphs: [
        "Marketing performance depends on many factors outside our sole control. We do not guarantee specific rankings, revenue, or ROI. Case studies and examples are illustrative, not promises of identical outcomes.",
      ],
    },
    {
      heading: "8. Limitation of liability",
      paragraphs: [
        "To the fullest extent permitted by law, UVT is not liable for indirect, incidental, or consequential loss arising from use of this website or our services, except where liability cannot be excluded under UK law.",
      ],
    },
    {
      heading: "9. Governing law",
      paragraphs: [
        "These terms are governed by the laws of England and Wales. Courts of England and Wales have exclusive jurisdiction, unless mandatory consumer protections say otherwise.",
      ],
    },
  ],
};

export const cookiePolicy: LegalPage = {
  title: "Cookie Policy",
  lastUpdated: "19 September 2026",
  intro:
    "This Cookie Policy explains how UVT Advertising Ltd uses cookies and similar technologies on our website, and the choices you have.",
  sections: [
    {
      heading: "1. What are cookies?",
      paragraphs: [
        "Cookies are small text files stored on your device when you visit a website. They help sites function, remember preferences, and understand how pages are used.",
      ],
    },
    {
      heading: "2. How we use cookies",
      paragraphs: [
        "We use cookies and similar tools to operate the site, measure performance, and improve experience. Categories may include:",
      ],
      bullets: [
        "Essential cookies — required for core site functionality and security",
        "Analytics cookies — help us understand traffic and page performance",
        "Preference cookies — remember choices such as consent settings where applicable",
        "Marketing cookies — used only if enabled, to measure or support campaigns",
      ],
    },
    {
      heading: "3. Third-party cookies",
      paragraphs: [
        "Some cookies may be set by third parties (for example analytics or embedded tools). Those providers process data under their own policies. We only use tools that support our legitimate service and measurement needs.",
      ],
    },
    {
      heading: "4. Managing cookies",
      paragraphs: [
        "You can control cookies through your browser settings, including blocking or deleting cookies. Blocking essential cookies may affect how the site works. Where a consent banner is shown, you can also manage non-essential cookies there.",
      ],
    },
    {
      heading: "5. Updates",
      paragraphs: [
        "We may update this Cookie Policy when our tools or legal requirements change. Please check this page periodically for the latest version.",
      ],
    },
    {
      heading: "6. Contact",
      paragraphs: [
        "Questions about cookies or privacy: uvtadvertising@gmail.com.",
      ],
    },
  ],
};
