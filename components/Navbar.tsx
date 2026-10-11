
"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowUpRight,
  Menu,
  X,
  Phone,
  Mail,
} from "lucide-react";

const navLinks = [
  { label: "Home", href: "/#home" },
  { label: "Services", href: "/#services" },
  { label: "About", href: "/#about" },
  { label: "Contact", href: "/#contact" },
];

const BUSINESS_PHONE = "916001353032";
const CONTACT_EMAIL = "bastabs398@gmail.com";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-[#10294C]/10 bg-white/95 backdrop-blur-md">
      <nav className="mx-auto flex h-[68px] max-w-[1600px] items-center justify-between gap-3 px-4 sm:h-[74px] sm:px-6 lg:h-[80px] lg:gap-5 lg:px-10">
        <Link
          href="/#home"
          aria-label="সহজ — Home"
          onClick={() => setMenuOpen(false)}
          className="relative block h-[54px] w-[165px] shrink-0 sm:h-[60px] sm:w-[200px] lg:h-[66px] lg:w-[230px]"
        >
          <Image
            src="/images/shohoj-logoo.png"
            alt="সহজ — One Stop Service Solutions"
            fill
            priority
            sizes="(max-width: 640px) 165px, (max-width: 1024px) 200px, 230px"
            className="object-contain object-left"
          />
        </Link>

        <div className="hidden items-center gap-5 lg:flex xl:gap-7">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="text-[11px] font-bold uppercase tracking-[0.07em] text-[#10294C] transition-colors hover:text-[#B88A00] xl:text-xs"
            >
              {link.label}
            </Link>
          ))}
        </div>

        <div className="hidden shrink-0 items-center gap-2 lg:flex xl:gap-3">
          <a
            href={`tel:+${BUSINESS_PHONE}`}
            className="inline-flex items-center justify-center gap-2 rounded-lg border border-[#10294C]/15 bg-white px-3 py-2.5 text-xs font-bold text-[#10294C] transition hover:border-[#DCAF24] hover:bg-[#FFFAEA] xl:px-4 xl:text-sm"
          >
            <Phone size={15} />
            Call Now
          </a>

          <a
            href={`mailto:${CONTACT_EMAIL}`}
            className="inline-flex items-center justify-center gap-2 rounded-lg border border-[#10294C]/15 bg-white px-3 py-2.5 text-xs font-bold text-[#10294C] transition hover:border-[#DCAF24] hover:bg-[#FFFAEA] xl:px-4 xl:text-sm"
          >
            <Mail size={15} />
            Email Us
          </a>

          <Link
            href="/#contact"
            className="inline-flex items-center justify-center gap-2 rounded-lg bg-[#10294C] px-3 py-2.5 text-xs font-bold text-white transition hover:bg-[#1B3C68] xl:px-4 xl:text-sm"
          >
            Book a Service
            <ArrowUpRight size={15} />
          </Link>
        </div>

        <button
          type="button"
          onClick={() => setMenuOpen((prev) => !prev)}
          aria-label={menuOpen ? "Close navigation" : "Open navigation"}
          aria-expanded={menuOpen}
          className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-[#10294C]/15 text-[#10294C] transition hover:border-[#DCAF24] hover:bg-[#FFF1C2] lg:hidden"
        >
          {menuOpen ? <X size={21} /> : <Menu size={21} />}
        </button>
      </nav>

      {menuOpen && (
        <div className="border-t border-[#10294C]/10 bg-white px-5 py-4 sm:px-6 lg:hidden">
          <div className="flex flex-col">
            {navLinks.map((link, index) => (
              <Link
                key={link.label}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="flex items-center justify-between border-b border-[#10294C]/10 py-3.5 text-sm font-bold text-[#10294C] transition-colors last:border-0 hover:text-[#B88A00]"
              >
                <span>{link.label}</span>
                <span className="text-xs tracking-widest text-[#10294C]/40">
                  0{index + 1}
                </span>
              </Link>
            ))}

            <div className="mt-4 grid grid-cols-2 gap-2">
              <a
                href={`tel:+${BUSINESS_PHONE}`}
                onClick={() => setMenuOpen(false)}
                className="flex items-center justify-center gap-2 rounded-lg border border-[#10294C]/15 bg-white px-3 py-3 text-xs font-bold text-[#10294C] transition hover:bg-[#FFFAEA]"
              >
                <Phone size={15} />
                Call Now
              </a>

              <a
                href={`mailto:${CONTACT_EMAIL}`}
                onClick={() => setMenuOpen(false)}
                className="flex items-center justify-center gap-2 rounded-lg border border-[#10294C]/15 bg-white px-3 py-3 text-xs font-bold text-[#10294C] transition hover:bg-[#FFFAEA]"
              >
                <Mail size={15} />
                Email Us
              </a>

              <Link
                href="/#contact"
                onClick={() => setMenuOpen(false)}
                className="col-span-2 flex items-center justify-center gap-2 rounded-lg bg-[#10294C] px-3 py-3 text-xs font-bold text-white transition hover:bg-[#1B3C68]"
              >
                Book a Service
                <ArrowUpRight size={15} />
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
