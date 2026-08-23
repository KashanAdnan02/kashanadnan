import { site, whatsappHref } from "@/lib/content";

const elsewhere = [
  { label: "Fiverr", href: site.fiverr },
  { label: "GitHub", href: site.github },
  { label: "LinkedIn", href: site.linkedin },
  { label: "WhatsApp", href: whatsappHref },
];

export function SiteFooter() {
  return (
    <footer className="border-t border-line py-14">
      <div className="shell flex flex-col gap-10 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="font-serif text-2xl text-ink">
            {site.name}
            <span className="text-accent">.</span>
          </p>
          <p className="mt-2 max-w-sm text-sm text-ink-muted">
            {site.roleLong}. Based in {site.location}, working with clients
            worldwide.
          </p>
        </div>

        <div className="flex flex-wrap gap-x-6 gap-y-3">
          {elsewhere.map((item) => (
            <a
              key={item.label}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-ink-muted underline decoration-line underline-offset-4 transition-colors hover:text-ink hover:decoration-accent"
            >
              {item.label}
            </a>
          ))}
        </div>
      </div>

      <div className="shell mt-10 flex flex-col gap-2 text-xs text-ink-faint sm:flex-row sm:justify-between">
        <p>
          © {new Date().getFullYear()} {site.name}. All rights reserved.
        </p>
        <p>Built with Next.js, Tailwind CSS and GSAP.</p>
      </div>
    </footer>
  );
}
