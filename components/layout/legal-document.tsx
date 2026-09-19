import Link from "next/link";
import type { LegalPage } from "@/content/legal";
import { footerLegal } from "@/content/footer";

export function LegalDocument({ page }: { page: LegalPage }) {
  return (
    <section className="relative overflow-hidden bg-background py-16 md:py-20 lg:py-24">
      <div className="pointer-events-none absolute -left-24 top-20 size-[380px] rounded-full bg-accent/10 blur-[130px]" />
      <div className="pointer-events-none absolute -right-20 bottom-10 size-[320px] rounded-full bg-accent-end/8 blur-[110px]" />

      <div className="relative mx-auto max-w-3xl px-5 md:px-8 lg:px-4">
        <p className="inline-flex items-center gap-2 rounded-full border border-accent/30 bg-accent/10 px-3.5 py-1 text-[11px] font-semibold tracking-[0.14em] text-accent">
          <span className="size-1.5 rounded-full bg-accent shadow-[0_0_8px_var(--accent)]" />
          LEGAL
        </p>

        <h1 className="mt-5 text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl lg:text-[2.75rem]">
          {page.title}
        </h1>
        <p className="mt-3 text-sm text-muted">Last updated: {page.lastUpdated}</p>
        <p className="mt-6 text-base leading-relaxed text-muted sm:text-[17px]">
          {page.intro}
        </p>

        <div className="mt-10 space-y-8">
          {page.sections.map((section) => (
            <article key={section.heading}>
              <h2 className="text-lg font-bold tracking-tight text-foreground sm:text-xl">
                {section.heading}
              </h2>
              <div className="mt-3 space-y-3">
                {section.paragraphs.map((p) => (
                  <p
                    key={p.slice(0, 48)}
                    className="text-sm leading-relaxed text-muted sm:text-[15px]"
                  >
                    {p}
                  </p>
                ))}
              </div>
              {section.bullets && section.bullets.length > 0 && (
                <ul className="mt-3 space-y-2">
                  {section.bullets.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-2.5 text-sm leading-relaxed text-muted sm:text-[15px]"
                    >
                      <span
                        className="mt-2 size-1.5 shrink-0 rounded-full bg-accent"
                        aria-hidden
                      />
                      {item}
                    </li>
                  ))}
                </ul>
              )}
            </article>
          ))}
        </div>

        <nav
          className="mt-14 flex flex-wrap gap-2 border-t border-card-border pt-8"
          aria-label="Other legal pages"
        >
          {footerLegal.map((item) => {
            const isCurrent = item.label === page.title;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={
                  isCurrent
                    ? "rounded-full border border-accent/40 bg-accent/10 px-3.5 py-1.5 text-sm font-semibold text-accent"
                    : "rounded-full border border-card-border px-3.5 py-1.5 text-sm text-muted transition-colors hover:border-accent/30 hover:text-accent"
                }
                aria-current={isCurrent ? "page" : undefined}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>
      </div>
    </section>
  );
}
