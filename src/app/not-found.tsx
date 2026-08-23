import Link from "next/link";

export default function NotFound() {
  return (
    <section className="shell flex min-h-[70vh] flex-col justify-center py-32">
      <p className="eyebrow">404</p>
      <h1 className="display mt-4 text-4xl lg:text-6xl">
        This page doesn&apos;t exist.
      </h1>
      <p className="mt-4 max-w-md text-base text-ink-muted">
        The link may be old or mistyped. The work, background and contact
        details are all on the home page.
      </p>
      <Link
        href="/"
        className="mt-8 w-fit rounded-full bg-ink px-6 py-3.5 text-sm font-medium text-paper transition-opacity hover:opacity-85"
      >
        Back to home
      </Link>
    </section>
  );
}
