import Link from "next/link";

export default function Home() {
  return (
    <section className="min-h-screen flex items-center justify-center px-6 pt-20">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-5xl md:text-7xl font-semibold tracking-tight mb-6">
          Fiony
        </h1>
        <p className="text-xl md:text-2xl text-secondary mb-12 max-w-2xl mx-auto">
          Artist & Creator exploring digital mediums and visual storytelling
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/portfolio"
            className="inline-flex items-center justify-center px-8 py-3 bg-primary text-white hover:bg-secondary transition-colors"
          >
            View Portfolio
          </Link>
          <Link
            href="/about"
            className="inline-flex items-center justify-center px-8 py-3 border border-primary hover:bg-accent transition-colors"
          >
            About Me
          </Link>
        </div>
      </div>
    </section>
  );
}
