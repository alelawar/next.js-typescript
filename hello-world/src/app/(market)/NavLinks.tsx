"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function NavLinks() {
  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/profile", label: "Profile" },
    { href: "/products", label: "Products" },
    { href: "/articles", label: "Articles" },
    { href: "/photo-feed", label: "Photo Feed" },
    { href: "/dashboard", label: "Dashboard" },
    { href: "/f1", label: "F1" },
  ];

  const pathname = usePathname();
  return (
    <nav>
      <ul className="flex space-x-4">
        {navLinks.map((link) => {
            const isActiveLink = pathname === link.href || (pathname.startsWith(link.href) && link.href !== "/");
          return (
            <li key={link.href}>
              <Link
                href={link.href}
                className={`${
                  isActiveLink ? "font-bold text-white" : "text-slate-300"
                } hover:underline transition-all duration-700 ease-in-out`}
              >
                {link.label}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}