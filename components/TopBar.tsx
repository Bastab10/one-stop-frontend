"use client";

import { Mail, Phone } from "lucide-react";

const BUSINESS_PHONE = "916026936104";
const CONTACT_EMAIL = "sohojservices1@gmail.com";

export default function TopBar() {
  return (
    <div className="relative z-[51] bg-[#10294C] text-white">
      <div className="mx-auto flex min-h-[44px] max-w-[1600px] flex-wrap items-center justify-between gap-x-6 gap-y-2 px-4 py-2 sm:px-6 lg:px-10">
        <div className="flex flex-wrap items-center gap-x-5 gap-y-2">
          <a
            href={`tel:+${BUSINESS_PHONE}`}
            className="inline-flex items-center gap-2 text-xs font-medium text-white/85 transition-colors hover:text-[#F472B6] sm:text-sm"
          >
            <Phone size={14} className="text-[#C90070]" />
            <span>+91 60269 36104</span>
          </a>

          <a
            href={`mailto:${CONTACT_EMAIL}`}
            className="inline-flex items-center gap-2 text-xs font-medium text-white/85 transition-colors hover:text-[#F472B6] sm:text-sm"
          >
            <Mail size={15} className="text-[#C90070]" />
            <span>{CONTACT_EMAIL}</span>
          </a>
        </div>

        <div className="flex items-center gap-3">
          <span className="hidden h-6 w-[2px] bg-[#C90070] sm:block" />

          <p className="text-[11px] font-medium leading-relaxed tracking-[0.015em] text-white sm:text-xs lg:text-[13px]">
            <span className="font-semibold text-[#F472B6]">
              অখ্যাত লোকক
            </span>{" "}
            <span className="font-semibold text-white">
              বিখ্যাত কৰাৰ এটি প্ৰয়াস...
            </span>{" "}
          </p>
        </div>
      </div>
    </div>
  );
}