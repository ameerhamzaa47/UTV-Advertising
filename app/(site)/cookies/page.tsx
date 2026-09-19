import type { Metadata } from "next";
import { LegalDocument } from "@/components/layout/legal-document";
import { cookiePolicy } from "@/content/legal";

export const metadata: Metadata = {
  title: "Cookie Policy | UVT Advertising",
  description:
    "How UVT Advertising uses cookies and similar technologies on our website.",
};

export default function CookiesPage() {
  return <LegalDocument page={cookiePolicy} />;
}
