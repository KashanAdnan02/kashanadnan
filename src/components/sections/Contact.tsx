"use client";

import { useState } from "react";
import { Reveal } from "@/components/Reveal";
import { site } from "@/lib/content";

const projectTypes = [
  "Full-stack web app",
  "Business or landing site",
  "AI feature or chatbot",
  "Fix / improve an existing project",
  "Something else",
];

const budgets = ["Under $250", "$250 – $750", "$750 – $2,000", "$2,000+", "Not sure yet"];

export function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    type: projectTypes[0],
    budget: budgets[1],
    message: "",
  });

  function update<K extends keyof typeof form>(key: K, value: string) {
    setForm((current) => ({ ...current, [key]: value }));
  }

  const summary = `Project: ${form.type}
Budget: ${form.budget}
Name: ${form.name || "—"}
Email: ${form.email || "—"}

${form.message}`;

  function sendEmail(event: React.FormEvent) {
    event.preventDefault();
    const subject = `New project enquiry — ${form.type}`;
    window.location.href = `mailto:${site.email}?subject=${encodeURIComponent(
      subject,
    )}&body=${encodeURIComponent(summary)}`;
  }

  function sendWhatsApp() {
    window.open(
      `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(
        `Hi Kashan, project enquiry:\n\n${summary}`,
      )}`,
      "_blank",
      "noopener,noreferrer",
    );
  }

  const fieldClass =
    "mt-2 w-full rounded-xl border border-line bg-paper px-4 py-3 text-sm text-ink placeholder:text-ink-faint focus:border-accent focus:outline-none";
  const labelClass = "block text-sm font-medium text-ink";

  return (
    <section
      id="contact"
      className="scroll-mt-24 border-t border-line bg-paper-raised py-20 lg:py-28"
    >
      <Reveal stagger className="shell grid gap-14 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-5">
          <p data-reveal className="eyebrow">
            Contact
          </p>
          <h2
            data-reveal
            className="display mt-4 text-3xl text-balance sm:text-4xl lg:text-[2.75rem]"
          >
            Tell me what you&apos;re building.
          </h2>
          <p data-reveal className="mt-6 text-base text-ink-muted lg:text-lg">
            Send the details and you&apos;ll get an honest answer — a scope and
            timeline if it&apos;s a fit, a straight no if it isn&apos;t. Fastest
            reply is WhatsApp.
          </p>

          <dl data-reveal className="mt-10 space-y-5 text-sm">
            <div>
              <dt className="eyebrow">WhatsApp</dt>
              <dd className="mt-1.5">
                <a
                  href={`https://wa.me/${site.whatsapp}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-ink underline decoration-line underline-offset-4 transition-colors hover:decoration-accent"
                >
                  {site.phoneDisplay}
                </a>
              </dd>
            </div>
            <div>
              <dt className="eyebrow">Email</dt>
              <dd className="mt-1.5">
                <a
                  href={`mailto:${site.email}`}
                  className="text-ink underline decoration-line underline-offset-4 transition-colors hover:decoration-accent"
                >
                  {site.email}
                </a>
              </dd>
            </div>
            <div>
              <dt className="eyebrow">Elsewhere</dt>
              <dd className="mt-1.5 flex flex-wrap gap-x-5 gap-y-2">
                {[
                  { label: "Fiverr", href: site.fiverr },
                  { label: "GitHub", href: site.github },
                  { label: "LinkedIn", href: site.linkedin },
                ].map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-ink underline decoration-line underline-offset-4 transition-colors hover:decoration-accent"
                  >
                    {item.label}
                  </a>
                ))}
              </dd>
            </div>
            <div>
              <dt className="eyebrow">Based in</dt>
              <dd className="mt-1.5 text-ink">
                {site.location} — {site.timezone}
              </dd>
            </div>
          </dl>
        </div>

        <form
          data-reveal
          onSubmit={sendEmail}
          className="lg:col-span-7 rounded-2xl border border-line bg-paper p-6 lg:p-8"
        >
          <div className="grid gap-5 sm:grid-cols-2">
            <div>
              <label className={labelClass} htmlFor="name">
                Your name
              </label>
              <input
                id="name"
                name="name"
                required
                value={form.name}
                onChange={(event) => update("name", event.target.value)}
                placeholder="Jane Cooper"
                className={fieldClass}
              />
            </div>
            <div>
              <label className={labelClass} htmlFor="email">
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                value={form.email}
                onChange={(event) => update("email", event.target.value)}
                placeholder="jane@company.com"
                className={fieldClass}
              />
            </div>
            <div>
              <label className={labelClass} htmlFor="type">
                What do you need?
              </label>
              <select
                id="type"
                name="type"
                value={form.type}
                onChange={(event) => update("type", event.target.value)}
                className={fieldClass}
              >
                {projectTypes.map((type) => (
                  <option key={type}>{type}</option>
                ))}
              </select>
            </div>
            <div>
              <label className={labelClass} htmlFor="budget">
                Budget range
              </label>
              <select
                id="budget"
                name="budget"
                value={form.budget}
                onChange={(event) => update("budget", event.target.value)}
                className={fieldClass}
              >
                {budgets.map((budget) => (
                  <option key={budget}>{budget}</option>
                ))}
              </select>
            </div>
          </div>

          <div className="mt-5">
            <label className={labelClass} htmlFor="message">
              Project details
            </label>
            <textarea
              id="message"
              name="message"
              required
              rows={5}
              value={form.message}
              onChange={(event) => update("message", event.target.value)}
              placeholder="What are you building, who is it for, and when do you need it live?"
              className={`${fieldClass} resize-y`}
            />
          </div>

          <div className="mt-6 flex flex-wrap items-center gap-3">
            <button
              type="submit"
              className="rounded-full bg-ink px-6 py-3.5 text-sm font-medium text-paper transition-opacity hover:opacity-85"
            >
              Send by email
            </button>
            <button
              type="button"
              onClick={sendWhatsApp}
              className="rounded-full border border-line px-6 py-3.5 text-sm font-medium text-ink transition-colors hover:border-ink"
            >
              Send on WhatsApp
            </button>
          </div>
          <p className="mt-4 text-xs text-ink-faint">
            Both buttons open your own email app or WhatsApp with these details
            filled in — nothing is stored on this site.
          </p>
        </form>
      </Reveal>
    </section>
  );
}
