"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  {
    name: "home",
    path: "/",
  },
  // {
  //   name: "services",
  //   path: "/services",
  // },
  {
    name: "resume",
    path: "/resume",
  },
  {
    name: "projects",
    path: "/projects",
  },
  {
    name: "contact",
    path: "/contact",
  },
];

const Nav = () => {
  const pathname = usePathname();
  return (
    <nav className="flex gap-8">
      {links.map((link, index) => {
        return (
          <Link
            href={link.path}
            key={index}
            className={`${
              link.path === pathname && "text-black font-bold bg-white border px-4 py-0.5 border-accent"
            } capitalize font-medium hover:text-accent transition-all rounded-md px-3 py-1 text-center`}
          >
            {link.name}
          </Link>
        );
      })}
    </nav>
  );
};

export default Nav;
