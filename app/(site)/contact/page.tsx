import type { Metadata } from "next";
import { ContactPageView } from "@/components/sections/contact-page-view";

export const metadata: Metadata = {
  title: "Contact | UVT Advertising",
  description:
    "Get a free, no-obligation quote from UVT Advertising in Stoke-on-Trent. We reply within 24 hours.",
};

export default function ContactPage() {
  return <ContactPageView />;
}
