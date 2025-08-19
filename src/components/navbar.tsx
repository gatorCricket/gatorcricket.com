"use client";

import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-uf-blue text-white">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
        <Link href="/" className="text-xl font-bold tracking-wide">
          Gator Cricket
        </Link>
        <div className="flex items-center gap-5 text-sm">
          <Link href="/" className="hover:text-uf-orange">Home</Link>
          <Link href="/tournament" className="hover:text-uf-orange">Tournament</Link>
          <Link href="/clubs" className="hover:text-uf-orange">Clubs</Link>
          <Link href="/hall-of-fame" className="hover:text-uf-orange">Hall of Fame</Link>
        </div>
      </div>
    </nav>
  );
}
