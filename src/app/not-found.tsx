import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="flex min-h-[60vh] flex-col items-center justify-center px-4 text-center">
      <h1 className="font-heading text-4xl font-bold uppercase text-text-primary mb-4">Page Not Found</h1>
      <p className="text-lg text-text-primary/70 mb-8">
        Sorry, the page you&apos;re looking for doesn&apos;t exist.
      </p>
      <Link
        href="/"
        className="inline-block rounded bg-accent px-6 py-3 font-heading text-sm font-semibold uppercase tracking-wide text-primary transition-colors duration-300 hover:bg-accent-hover"
      >
        Go Home
      </Link>
    </div>
  );
}
