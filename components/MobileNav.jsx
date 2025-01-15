"use client";
import React, { useState } from 'react';
import { Sheet, SheetContent, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { CiMenuFries } from "react-icons/ci";

const links = [
  {
    name: "home",
    path: "/",
  },
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

const MobileNav = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const pathname = usePathname();

  const handleLinkClick = () => {
    setIsNavOpen(false);
  };



  return (
    <Sheet open={isNavOpen} onOpenChange={setIsNavOpen}>
      <SheetTrigger asChild className="flex justify-center items-center">
        <CiMenuFries onClick={() => setIsNavOpen(!isNavOpen)} className="text-[32px] text-accent">
          {isNavOpen ? 'Close' : 'Open'} Menu
        </CiMenuFries>
      </SheetTrigger>
      <SheetContent className={`fixed top-0 right-0 h-full w-full flex flex-col transition-transform duration-2000 ${isNavOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        {/* logo */}
        <div className="mt-32 mb-10 text-center text-2xl">
          <Link href="/">
            <SheetTitle>
              Menu
            </SheetTitle>
            <h1 className="text-4xl font-semibold">
              ugwe<span className="text-accent">.</span>
            </h1>
          </Link>
        </div>
        {/* nav */}
        <nav className="flex flex-col justify-center items-center gap-4">
          {links.map((link, index) => {
            return (
              <Link
                href={link.path}
                key={index}
                className={`${
                  link.path === pathname &&
                  "text-black font-bold bg-white border px-20 py-0.5 border-accent"
                } capitalize font-medium hover:text-accent transition-all rounded-md px-3 py-1 text-center`}
                onClick={handleLinkClick}
              >
                {link.name}
              </Link>
            );
          })}
        </nav>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;
