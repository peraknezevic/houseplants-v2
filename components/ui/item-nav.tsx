"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const NavItem = ({ href, title }: { href: string; title: string }) => {
  const pathname = usePathname();

  return (
    <li>
      <Link
        href={href}
        className={`tracking-wide decoration-2 underline-offset-8 transition-all hover:underline ${
          pathname === href ? "opacity-60" : ""
        }`}
      >
        {title}
      </Link>
    </li>
  );
};

export default NavItem;
