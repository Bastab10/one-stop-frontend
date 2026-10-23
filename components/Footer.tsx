import Image from "next/image";
import Link from "next/link";
import { Phone, Mail, MapPin, ChevronRight } from "lucide-react";
import { FaFacebookF, FaInstagram, FaWhatsapp } from "react-icons/fa";

const FOOTER_PHONE = "916026936104";
const FOOTER_EMAIL = "sohojservices@gmail.com";

const socialLinks = [
  {
    label: "Facebook",
    href: "https://www.facebook.com/",
    icon: FaFacebookF,
    color: "text-[#1877F2]",
    hoverColor: "hover:bg-[#1877F2]",
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/",
    icon: FaInstagram,
    color: "text-[#E4405F]",
    hoverColor: "hover:bg-[#E4405F]",
  },
  {
    label: "WhatsApp",
    href: `https://wa.me/${FOOTER_PHONE}`,
    icon: FaWhatsapp,
    color: "text-[#25D366]",
    hoverColor: "hover:bg-[#25D366]",
  },
];

const quickLinks = [
  { label: "Home", href: "/" },
  { label: "Our Services", href: "/#services" },
  { label: "About Us", href: "/#about" },
  { label: "Contact Us", href: "/contact" },
  { label: "Become a Partner", href: "/partner" },
];

const footerServices = [
  { label: "AC Repair & Maintenance", href: "/#services" },
  { label: "Electrician Services", href: "/#services" },
  { label: "Carpentry Services", href: "/#services" },
  { label: "Painting Services", href: "/#services" },
  { label: "Tiffin & Catering", href: "/#services" },
  { label: "Events & Decoration", href: "/#services" },
  { label: "Explore All Services", href: "/#services" },
];

const footerLinkClass =
  "group flex items-start gap-2 text-sm leading-6 text-[#10284C]/65 transition-colors duration-200 hover:text-[#C90070]";

export default function Footer() {
  return (
    <footer className="sohoj-footer relative overflow-hidden border-t border-[#10284C]/10 bg-[#FCFCFA] text-[#10284C]">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-32 top-40 h-80 w-80 rounded-full border border-[#C90070]/15"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-32 bottom-0 h-96 w-96 rounded-full border border-[#C90070]/15"
      />

      <div className="relative mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12 xl:px-16">
        <div className="flex flex-col gap-6 border-b border-[#10284C]/10 py-9 sm:py-11 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="mb-3 flex items-center gap-3 text-[10px] font-bold uppercase tracking-[0.24em] text-[#C90070] sm:text-xs">
              <span className="h-px w-8 bg-[#C90070]" />
              YOUR NEED, OUR SERVICE
            </p>

            <h2 className="font-serif text-3xl font-medium leading-tight tracking-[-0.04em] sm:text-4xl lg:text-5xl">
              Less searching.
              <span className="block italic text-[#C90070] sm:inline">
                {" "}
                More living.
              </span>
            </h2>

            <p className="mt-3 max-w-xl text-sm leading-6 text-[#10284C]/60 sm:text-base">
              Everyday services, trusted professionals, and simpler living — all
              in one place.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-9 py-10 sm:grid-cols-2 sm:gap-x-8 lg:grid-cols-12 lg:gap-0 lg:py-12">
          <div className="sm:col-span-2 lg:col-span-4 lg:pr-10">
            <Link
              href="/"
              aria-label="SOHOJ homepage"
              className="inline-flex items-center"
            >
              <Image
                src="/images/sohoj.png"
                alt="SOHOJ - Your Need, Our Service"
                width={190}
                height={76}
                className="h-auto max-h-[76px] w-auto max-w-[190px] object-contain object-left"
              />
            </Link>

            <p className="mt-5 max-w-sm text-sm leading-7 text-[#10284C]/65">
              From home repairs and maintenance to catering and special
              occasions,{" "}
              <strong className="font-semibold text-[#10284C]">SOHOJ</strong>{" "}
              brings your everyday service needs together in one trusted place.
            </p>

            <div className="mt-6">
              <p className="mb-3 text-xs font-bold uppercase tracking-[0.16em] text-[#10284C]/55">
                Connect with us
              </p>

              <div className="flex flex-wrap gap-2.5">
                {socialLinks.map((social) => {
                  const Icon = social.icon;

                  return (
                    <a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={social.label}
                      className={`flex h-10 w-10 items-center justify-center rounded-full border border-[#10284C]/10 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-transparent ${social.color} ${social.hoverColor} hover:text-white`}
                    >
                      <Icon size={18} aria-hidden="true" />
                    </a>
                  );
                })}
              </div>
            </div>
          </div>

          <div className="border-t border-[#10284C]/10 pt-7 sm:border-t-0 sm:pt-0 lg:col-span-2 lg:border-l lg:px-6 lg:pt-0">
            <h3 className="text-base font-bold tracking-tight sm:text-lg">
              Quick Links
            </h3>

            <span className="mt-3 block h-[3px] w-9 rounded-full bg-[#C90070]" />

            <ul className="mt-5 space-y-3.5">
              {quickLinks.map((item) => (
                <li key={item.label}>
                  <Link href={item.href} className={footerLinkClass}>
                    <ChevronRight
                      size={15}
                      className="mt-1 shrink-0 text-[#C90070] transition-transform group-hover:translate-x-1"
                    />
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="border-t border-[#10284C]/10 pt-7 sm:border-t-0 sm:pt-0 lg:col-span-3 lg:border-l lg:px-7 lg:pt-0">
            <h3 className="text-base font-bold tracking-tight sm:text-lg">
              Our Services
            </h3>

            <span className="mt-3 block h-[3px] w-9 rounded-full bg-[#C90070]" />

            <ul className="mt-5 space-y-3.5">
              {footerServices.map((item) => (
                <li key={item.label}>
                  <Link href={item.href} className={footerLinkClass}>
                    <ChevronRight
                      size={15}
                      className="mt-1 shrink-0 text-[#C90070] transition-transform group-hover:translate-x-1"
                    />
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="border-t border-[#10284C]/10 pt-7 sm:border-t-0 sm:pt-0 lg:col-span-3 lg:border-l lg:pl-7 lg:pt-0">
            <h3 className="text-base font-bold tracking-tight sm:text-lg">
              Contact Us
            </h3>

            <span className="mt-3 block h-[3px] w-9 rounded-full bg-[#C90070]" />

            <div className="mt-6 space-y-5">
              <a
                href={`tel:+${FOOTER_PHONE}`}
                className="group flex items-start gap-3"
              >
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#C90070]/10 text-[#C90070] transition-colors group-hover:bg-[#C90070]/20">
                  <Phone size={18} />
                </span>

                <span className="min-w-0 pt-0.5">
                  <span className="block text-xs font-medium text-[#10284C]/50">
                    Call us
                  </span>
                  <span className="mt-1 block text-sm font-semibold transition-colors group-hover:text-[#C90070]">
                    +91 60269 36104
                  </span>
                </span>
              </a>

              <a
                href={`https://wa.me/${FOOTER_PHONE}`}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-start gap-3"
              >
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#25D366]/10 text-[#25D366] transition-colors group-hover:bg-[#25D366]/20">
                  <FaWhatsapp size={19} />
                </span>

                <span className="min-w-0 pt-0.5">
                  <span className="block text-xs font-medium text-[#10284C]/50">
                    WhatsApp
                  </span>
                  <span className="mt-1 block text-sm font-semibold transition-colors group-hover:text-[#25D366]">
                    Chat with our team
                  </span>
                </span>
              </a>

              <a
                href={`mailto:${FOOTER_EMAIL}`}
                className="group flex items-start gap-3"
              >
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#C90070]/10 text-[#C90070] transition-colors group-hover:bg-[#C90070]/20">
                  <Mail size={18} />
                </span>

                <span className="min-w-0 pt-0.5">
                  <span className="block text-xs font-medium text-[#10284C]/50">
                    Email us
                  </span>
                  <span className="mt-1 block break-all text-sm font-semibold transition-colors group-hover:text-[#C90070]">
                    {FOOTER_EMAIL}
                  </span>
                </span>
              </a>

              <div className="flex items-start gap-3">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#C90070]/10 text-[#C90070]">
                  <MapPin size={19} />
                </span>

                <span className="pt-0.5">
                  <span className="block text-xs font-medium text-[#10284C]/50">
                    Our location
                  </span>
                  <span className="mt-1 block text-sm font-semibold">
                    Tezpur, Assam, India
                  </span>
                  <span className="mt-1 block text-xs leading-5 text-[#10284C]/55">
                    Your local service partner
                  </span>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="relative border-t border-[#10284C]/10 bg-white/80">
        <div className="mx-auto flex max-w-[1440px] flex-col gap-4 px-5 py-5 sm:px-8 md:flex-row md:items-center md:justify-between lg:px-12 xl:px-16">
          <p className="text-xs leading-5 text-[#10284C]/55">
            © 2026 SOHOJ. All rights reserved.
          </p>

          <div className="flex flex-wrap items-center gap-x-3 gap-y-2 text-xs text-[#10284C]/60">
            <Link
              href="/privacy-policy"
              className="transition-colors hover:text-[#C90070]"
            >
              Privacy Policy
            </Link>

            <span aria-hidden="true" className="text-[#C90070]">
              •
            </span>

            <Link
              href="/terms"
              className="transition-colors hover:text-[#C90070]"
            >
              Terms of Service
            </Link>

            <span aria-hidden="true" className="text-[#C90070]">
              •
            </span>

            <Link
              href="/partner"
              className="transition-colors hover:text-[#C90070]"
            >
              Partner With Us
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}