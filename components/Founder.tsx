
"use client";

import Image from "next/image";
import { Quote, GraduationCap } from "lucide-react";

const hrResponsibilities = [
  "Human resource planning and development.",
  "Associate and service-partner coordination.",
  "Training and development.",
  "Organisational structure and team development.",
];

const itResponsibilities = [
  "SOHOJ website design and development.",
  "Website maintenance and updates.",
  "Digital platform development.",
  "Technical support for SOHOJ's online presence.",
];

export default function Founder() {
  return (
    <main className="bg-[#F8F9FC] text-[#10284C]">
      <section className="mx-auto max-w-[1240px] px-5 py-12 sm:px-8 sm:py-14 lg:px-12 lg:py-16">
        <header className="mb-9">
          <p className="mb-3 text-[11px] font-bold uppercase tracking-[0.22em] text-[#C90070]">
            Leadership · SOHOJ
          </p>
          <h2 className="font-serif text-3xl font-medium sm:text-4xl">
            Meet Our Founder
          </h2>
        </header>

        <article className="grid items-center gap-8 sm:grid-cols-[230px_1fr] sm:gap-10 lg:grid-cols-[255px_1fr] lg:gap-12">
          <figure className="mx-auto w-full max-w-[255px] sm:mx-0">
            <Image
              src="/images/founder-black-coat.png"
              alt="Swagata Saikia Borah - Founder of SOHOJ"
              width={1328}
              height={1184}
              priority
              sizes="(max-width: 640px) 255px, 255px"
              className="h-auto w-full bg-white p-1.5 shadow-md"
            />
          </figure>

          <section>
            <h3 className="font-serif text-xl font-medium sm:text-2xl">
              Swagata Saikia Borah
            </h3>

            <p className="mt-1 text-xs font-semibold text-[#C90070]">
              Founder · SOHOJ
            </p>

            <hr className="my-5 border-[#10284C]/10" />

            <blockquote className="flex items-start gap-3">
              <Quote
                size={25}
                className="mt-1 shrink-0 text-[#C90070]"
              />
              <p className="font-serif text-2xl font-semibold italic leading-snug sm:text-3xl lg:text-[34px]">
                “I will win, not immediately, but definitely.”
              </p>
            </blockquote>

            <p className="mt-6 text-[10px] font-bold uppercase tracking-[0.16em] text-[#10284C]/50">
              SOHOJ · One Stop Service Solutions
            </p>
          </section>
        </article>
      </section>

      <hr className="border-[#10284C]/10" />

      <section className="mx-auto max-w-[1240px] px-5 py-12 sm:px-8 sm:py-14 lg:px-12 lg:py-16">
        <header className="mb-9">
          <p className="mb-3 text-[11px] font-bold uppercase tracking-[0.22em] text-[#C90070]">
            Our Team · Human Resources
          </p>
          <h2 className="font-serif text-3xl font-medium sm:text-4xl">
            Meet Our Associate
          </h2>
        </header>

        <article className="grid items-start gap-8 sm:grid-cols-[230px_1fr] sm:gap-10 lg:grid-cols-[255px_1fr] lg:gap-12">
          <figure className="mx-auto w-full max-w-[255px] sm:mx-0">
            <Image
              src="/images/aparna-barua.jpeg"
              alt="Aparna Barua - Associate, Human Resources Development"
              width={900}
              height={1100}
              sizes="(max-width: 640px) 255px, 255px"
              className="aspect-[4/5] w-full object-cover shadow-md"
            />
          </figure>

          <section>
            <h3 className="font-serif text-xl font-medium sm:text-2xl">
              Aparna Barua
            </h3>

            <p className="mt-1 text-xs font-semibold text-[#C90070]">
              Associate – Human Resources Development (HRD)
            </p>

            <p className="mt-2 text-[11px] text-[#61718A]">
              Department: Human Resources & Organisational Development
            </p>

            <hr className="my-5 border-[#10284C]/10" />

            <p className="text-sm leading-7 text-[#61718A]">
              A Civil Engineering graduate from Tezpur University and MBA
              graduate from NIT Silchar, Aparna Barua contributes to human
              resource planning, organisational development and professional
              coordination at SOHOJ.
            </p>

            <h4 className="mb-3 mt-6 text-[10px] font-bold uppercase tracking-[0.18em] text-[#C90070]">
              Educational Background
            </h4>

            <ul className="space-y-2 text-xs text-[#61718A]">
              <li className="flex items-center gap-2">
                <GraduationCap size={15} className="shrink-0 text-[#C90070]" />
                Civil Engineering – Tezpur University
              </li>
              <li className="flex items-center gap-2">
                <GraduationCap size={15} className="shrink-0 text-[#C90070]" />
                MBA – NIT Silchar
              </li>
            </ul>

            <h4 className="mb-3 mt-6 text-[10px] font-bold uppercase tracking-[0.18em] text-[#C90070]">
              Key Responsibilities
            </h4>

            <ol className="space-y-2">
              {hrResponsibilities.map((item, index) => (
                <li
                  key={index}
                  className="flex gap-3 text-xs leading-5 text-[#61718A]"
                >
                  <span className="shrink-0 font-bold text-[#C90070]">
                    0{index + 1}.
                  </span>
                  {item}
                </li>
              ))}
            </ol>

            <p className="mt-6 border-t border-[#10284C]/10 pt-4 text-[9px] font-semibold uppercase tracking-[0.14em] text-[#10284C]/50">
              Human Resources & Organisational Development · SOHOJ
            </p>
          </section>
        </article>
      </section>

      <hr className="border-[#10284C]/10" />

      <section className="mx-auto max-w-[1240px] px-5 py-12 sm:px-8 sm:py-14 lg:px-12 lg:py-16">
        <header className="mb-9">
          <p className="mb-3 text-[11px] font-bold uppercase tracking-[0.22em] text-[#C90070]">
            Our Team · Information Technology
          </p>
          <h2 className="font-serif text-3xl font-medium sm:text-4xl">
            Meet Our Associate
          </h2>
        </header>

        <article className="grid items-start gap-8 sm:grid-cols-[230px_1fr] sm:gap-10 lg:grid-cols-[255px_1fr] lg:gap-12">
          <figure className="mx-auto w-full max-w-[255px] sm:mx-0">
            <Image
              src="/images/bastab.png"
              alt="Bastab Saikia - Associate, Website Design and Development"
              width={900}
              height={1100}
              sizes="(max-width: 640px) 255px, 255px"
              className="aspect-[4/5] w-full object-cover shadow-md"
            />
          </figure>

          <section>
            <h3 className="font-serif text-xl font-medium sm:text-2xl">
              Bastab Saikia
            </h3>

            <p className="mt-1 text-xs font-semibold text-[#C90070]">
              Associate – Website Design & Development
            </p>

            <p className="mt-2 text-[11px] text-[#61718A]">
              Department: Information Technology & Digital Development
            </p>

            <hr className="my-5 border-[#10284C]/10" />

            <h4 className="mb-3 text-[10px] font-bold uppercase tracking-[0.18em] text-[#C90070]">
              Key Responsibilities
            </h4>

            <ol className="space-y-2">
              {itResponsibilities.map((item, index) => (
                <li
                  key={index}
                  className="flex gap-3 text-xs leading-5 text-[#61718A]"
                >
                  <span className="shrink-0 font-bold text-[#C90070]">
                    0{index + 1}.
                  </span>
                  {item}
                </li>
              ))}
            </ol>

            <p className="mt-6 border-t border-[#10284C]/10 pt-4 text-[9px] font-semibold uppercase tracking-[0.14em] text-[#10284C]/50">
              Information Technology & Digital Development · SOHOJ
            </p>
          </section>
        </article>
      </section>
    </main>
  );
}
