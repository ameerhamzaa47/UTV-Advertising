import Link from "next/link";
import {
  footerBrand,
  footerCompany,
  footerIndustries,
  footerLegal,
  footerServices,
} from "@/content/footer";

function MailIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 16 16" fill="none" aria-hidden>
      <path
        d="M2 4.5h12v7H2v-7zm0 0l6 4.5 6-4.5"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function PinIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 16 16" fill="none" aria-hidden>
      <path
        d="M8 14s5-4.2 5-7.5A5 5 0 003 6.5C3 9.8 8 14 8 14z"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinejoin="round"
      />
      <circle cx="8" cy="6.5" r="1.6" stroke="currentColor" strokeWidth="1.4" />
    </svg>
  );
}

function FooterLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <Link
      href={href}
      className="text-sm text-muted transition-colors hover:text-accent"
    >
      {children}
    </Link>
  );
}

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-card-border bg-background">
      <div className="mx-auto max-w-7xl px-5 py-14 md:px-8 md:py-16 lg:px-16">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
          <div className="sm:col-span-2 lg:col-span-1">
            <Link href="/" className="inline-flex items-center gap-2.5">
              <span className="flex size-9 items-center justify-center rounded-lg bg-gradient-to-br from-accent to-accent-end text-[11px] font-extrabold tracking-wide text-white">
                UVT
              </span>
              <span className="text-base font-bold tracking-tight text-accent">
                {footerBrand.name}
              </span>
            </Link>

            <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted">
              {footerBrand.description}
            </p>

            <div className="mt-5 space-y-2.5">
              <a
                href={`mailto:${footerBrand.email}`}
                className="flex items-center gap-2.5 text-sm text-muted transition-colors hover:text-accent"
              >
                <MailIcon className="size-4 shrink-0 text-accent/80" />
                {footerBrand.email}
              </a>
              <p className="flex items-center gap-2.5 text-sm text-muted">
                <PinIcon className="size-4 shrink-0 text-accent/80" />
                {footerBrand.location}
              </p>
            </div>
          </div>

          <div>
            <h3 className="text-sm font-bold tracking-tight text-foreground">
              Services
            </h3>
            <ul className="mt-4 space-y-2.5">
              {footerServices.map((item) => (
                <li key={item.label}>
                  <FooterLink href={item.href}>{item.label}</FooterLink>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-bold tracking-tight text-foreground">
              Company
            </h3>
            <ul className="mt-4 space-y-2.5">
              {footerCompany.map((item) => (
                <li key={item.label}>
                  <FooterLink href={item.href}>{item.label}</FooterLink>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-bold tracking-tight text-foreground">
              Industries
            </h3>
            <ul className="mt-4 space-y-2.5">
              {footerIndustries.map((item) => (
                <li key={item.label}>
                  <FooterLink href={item.href}>{item.label}</FooterLink>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-4 border-t border-card-border pt-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs leading-relaxed text-muted sm:text-[13px]">
            © {year} UVT Advertising Ltd. All rights reserved. Company
            registered in England &amp; Wales.
          </p>
          <div className="flex flex-wrap gap-x-5 gap-y-2">
            {footerLegal.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="text-xs text-muted transition-colors hover:text-accent sm:text-[13px]"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
