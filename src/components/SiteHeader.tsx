import Link from "next/link";
import { Button } from "../components/ui/Button.tsx";

export function SiteHeader() {
  return (
    <header className="container flex items-center justify-between py-6">
      <Link href="/" className="text-2xl font-bold tracking-tighter">
        Tejas<span className="text-red-500">.</span>
      </Link>
      <nav className="hidden md:flex items-center gap-8">
        <Link href="/" className="text-sm font-medium">
          Home
        </Link>
        <Link href="/works" className="text-sm font-medium">
          Works
        </Link>
        <Link href="/about" className="text-sm font-medium">
          About
        </Link>
        <Link href="/portfolio" className="text-sm font-medium">
          Portfolio
        </Link>
        <Link href="/services" className="text-sm font-medium">
          Services
        </Link>
      </nav>
      <Button
        variant="outline"
        className="border-red-500 text-red-500 hover:bg-red-50"
      >
        Contact Me
      </Button>
    </header>
  );
}
