
"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X, Phone, Mail, LogIn } from "lucide-react";

const navLinks = [
  { label: "Home", href: "/#home" },
  { label: "Services", href: "/#services" },
  { label: "About", href: "/#about" },
  { label: "Contact", href: "/#contact" },
];

const BUSINESS_PHONE = "916026936104";
const CONTACT_EMAIL = "sohojservices@gmail.com";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-[#10294C]/10 bg-white/95 backdrop-blur-md">
      <nav className="mx-auto flex h-[68px] max-w-[1600px] items-center justify-between gap-3 px-4 sm:h-[72px] sm:px-6 lg:h-[76px] lg:gap-5 lg:px-10">
        <Link
          href="/#home"
          aria-label="SOHOJ Home"
          onClick={() => setMenuOpen(false)}
          className="relative block h-[50px] w-[150px] shrink-0 sm:h-[56px] sm:w-[180px] lg:h-[60px] lg:w-[195px]"
        >
          <Image
            src="/images/sohoj.png"
            alt="SOHOJ — One Stop Service Solutions"
            fill
            priority
            sizes="(max-width: 640px) 150px, (max-width: 1024px) 180px, 195px"
            className="object-contain object-left"
          />
        </Link>

        <div className="hidden items-center gap-5 lg:flex xl:gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="group relative py-2 text-[11px] font-bold uppercase tracking-[0.1em] text-[#10294C]/80 transition-colors hover:text-[#C90070] xl:text-xs"
            >
              {link.label}
              <span className="absolute inset-x-0 -bottom-0.5 h-[2px] origin-left scale-x-0 rounded-full bg-[#C90070] transition-transform duration-200 group-hover:scale-x-100" />
            </Link>
          ))}
        </div>

        <div className="hidden shrink-0 items-center gap-2 lg:flex xl:gap-2.5">
          <a
            href={`tel:+${BUSINESS_PHONE}`}
            className="inline-flex h-[42px] items-center justify-center gap-2 border border-[#10294C]/15 bg-white px-3.5 text-sm font-medium text-[#10294C] transition hover:border-[#C90070] hover:bg-[#FDF2F8] hover:text-[#C90070]"
          >
            <Phone size={16} />
            Call Now
          </a>

          <a
            href={`mailto:${CONTACT_EMAIL}`}
            className="inline-flex h-[42px] items-center justify-center gap-2 border border-[#10294C]/15 bg-white px-3.5 text-sm font-medium text-[#10294C] transition hover:border-[#C90070] hover:bg-[#FDF2F8] hover:text-[#C90070]"
          >
            <Mail size={16} />
            Email Us
          </a>

          <Link
            href="/admin/login"
            className="inline-flex h-[42px] items-center justify-center gap-2 border border-[#C90070] bg-[#C90070] px-5 text-sm font-medium text-white transition hover:border-[#A8005D] hover:bg-[#A8005D]"
          >
            <LogIn size={16} />
            Login
          </Link>
        </div>

        <button
          type="button"
          onClick={() => setMenuOpen((prev) => !prev)}
          aria-label={menuOpen ? "Close navigation" : "Open navigation"}
          aria-expanded={menuOpen}
          className="flex h-9 w-9 shrink-0 items-center justify-center border border-[#10294C]/15 bg-white text-[#10294C] transition hover:border-[#C90070] hover:bg-[#FDF2F8] hover:text-[#C90070] lg:hidden"
        >
          {menuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      {menuOpen && (
        <div className="border-t border-[#10294C]/10 bg-white lg:hidden">
          <div className="mx-auto max-w-[1600px] px-5 py-4 sm:px-6">
            <div className="flex flex-col">
              {navLinks.map((link, index) => (
                <Link
                  key={link.label}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="flex items-center justify-between border-b border-[#10294C]/10 py-3.5 text-sm font-semibold text-[#10294C] transition-colors last:border-0 hover:text-[#C90070]"
                >
                  <span>{link.label}</span>
                  <span className="text-xs tracking-widest text-[#10294C]/40">
                    0{index + 1}
                  </span>
                </Link>
              ))}
            </div>

            <div className="mt-4 grid grid-cols-2 gap-2">
              <a
                href={`tel:+${BUSINESS_PHONE}`}
                onClick={() => setMenuOpen(false)}
                className="flex h-[42px] items-center justify-center gap-2 border border-[#10294C]/15 px-2 text-[13px] font-medium text-[#10294C] transition hover:border-[#C90070] hover:bg-[#FDF2F8]"
              >
                <Phone size={15} />
                Call Now
              </a>

              <a
                href={`mailto:${CONTACT_EMAIL}`}
                onClick={() => setMenuOpen(false)}
                className="flex h-[42px] items-center justify-center gap-2 border border-[#10294C]/15 px-2 text-[13px] font-medium text-[#10294C] transition hover:border-[#C90070] hover:bg-[#FDF2F8]"
              >
                <Mail size={15} />
                Email Us
              </a>

              <Link
                href="/admin/login"
                onClick={() => setMenuOpen(false)}
                className="col-span-2 flex h-[42px] items-center justify-center gap-2 border border-[#C90070] bg-[#C90070] px-4 text-sm font-medium text-white transition hover:border-[#A8005D] hover:bg-[#A8005D]"
              >
                <LogIn size={16} />
                Admin Login
              </Link>
            </div>

            <p className="mt-4 text-center text-[10px] tracking-wide text-[#10294C]/45">
              SOHOJ · One Stop Service Solutions
            </p>
          </div>
        </div>
      )}
    </header>
  );
}
