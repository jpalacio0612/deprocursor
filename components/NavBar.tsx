"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export const NavBar = () => {
  const pathname = usePathname();
  return (
    <nav className="flex gap-6">
      <Link
        href="/"
        className={`hover:text-emerald-900 transition-colors duration-200 ${
          pathname === "/" ? "text-emerald-700 font-bold" : ""
        }`}
      >
        Home
      </Link>
      <Link
        href="/estrategias"
        className={`hover:text-emerald-900 transition-colors duration-200 ${
          pathname === "/estrategias" ? "text-emerald-700 font-bold" : ""
        }`}
      >
        Estrategias
      </Link>
      <Link
        href="/galeria"
        className={`hover:text-emerald-900 transition-colors duration-200 ${
          pathname === "/galeria" ? "text-emerald-700 font-bold" : ""
        }`}
      >
        Galeria
      </Link>
    </nav>
  );
};
