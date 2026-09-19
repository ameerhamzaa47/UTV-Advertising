import type { Metadata } from "next";
import { LegalDocument } from "@/components/layout/legal-document";
import { privacyPolicy } from "@/content/legal";

export const metadata: Metadata = {
  title: "Privacy Policy | UVT Advertising",
  description:
    "How UVT Advertising collects, uses, and protects your personal information.",
};

export default function PrivacyPage() {
  return <LegalDocument page={privacyPolicy} />;
}
