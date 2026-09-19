import type { Metadata } from "next";
import { ContactSection } from "@/components/sections/contact-section";
import { Faqs } from "@/components/sections/faqs";

export const metadata: Metadata = {
  title: "Contact | UVT Advertising",
  description:
    "Book a free 45-minute strategy call with UVT Advertising. London-based performance marketing and SEO agency.",
};

export default function ContactPage() {
  return (
    <>
      <ContactSection />
      <Faqs />
    </>
  );
}
