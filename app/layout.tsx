import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import { PageLoader } from "@/components/layout/page-loader";
import "./globals.css";

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "UTV Advertising",
  description:
    "Performance marketing, SEO, paid media and conversion optimization built around measurable business growth.",
  icons: {
    icon: "/Image/favicon.png",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${jakarta.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col font-sans">
        <PageLoader />
        {children}
      </body>
    </html>
  );
}
