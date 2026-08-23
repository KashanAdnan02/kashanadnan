export function Stars({ className = "" }: { className?: string }) {
  return (
    <span
      className={`inline-flex items-center gap-0.5 text-gold ${className}`}
      aria-label="5 out of 5 stars"
      role="img"
    >
      {Array.from({ length: 5 }).map((_, index) => (
        <svg
          key={index}
          viewBox="0 0 24 24"
          fill="currentColor"
          className="size-3.5"
          aria-hidden="true"
        >
          <path d="M12 2.6l2.9 6.06 6.6.9-4.8 4.6 1.2 6.54L12 17.6l-5.9 3.1 1.2-6.54-4.8-4.6 6.6-.9L12 2.6Z" />
        </svg>
      ))}
    </span>
  );
}
