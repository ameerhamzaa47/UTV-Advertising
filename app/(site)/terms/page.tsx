import type { Metadata } from "next";
import { LegalDocument } from "@/components/layout/legal-document";
import { termsOfService } from "@/content/legal";

export const metadata: Metadata = {
  title: "Terms of Service | UVT Advertising",
  description:
    "Terms governing use of the UVT Advertising website and client engagements.",
};

export default function TermsPage() {
  return <LegalDocument page={termsOfService} />;
}
