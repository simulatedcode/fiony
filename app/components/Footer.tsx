import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-accent py-12">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-center md:text-left">
            <p className="text-sm text-secondary">Fiony</p>
            <p className="text-xs text-secondary mt-1">Artist & Creator</p>
          </div>

          <div className="flex gap-6">
            <Link
              href="#"
              className="text-sm text-secondary hover:text-foreground transition-colors"
            >
              Instagram
            </Link>
            <Link
              href="#"
              className="text-sm text-secondary hover:text-foreground transition-colors"
            >
              Twitter
            </Link>
            <Link
              href="#"
              className="text-sm text-secondary hover:text-foreground transition-colors"
            >
              Email
            </Link>
          </div>

          <p className="text-xs text-secondary">
            © {new Date().getFullYear()} All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
