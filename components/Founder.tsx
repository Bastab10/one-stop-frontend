
"use client";

import Image from "next/image";
import { Quote } from "lucide-react";

export default function Founder() {
  return (
    <main className="min-h-[calc(100vh-150px)] bg-[#F8F9FC] text-[#10284C]">
      <section className="mx-auto flex max-w-[1240px] items-center px-5 py-12 sm:px-8 sm:py-16 lg:min-h-[620px] lg:px-12 lg:py-16">
        <div className="grid w-full items-center gap-9 sm:gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-14">

          <figure className="relative mx-auto w-full max-w-[350px] lg:max-w-[370px]">
            <div className="absolute -left-4 -top-4 h-20 w-20 border-l-2 border-t-2 border-[#C90070]" />

            <div className="relative z-10 overflow-hidden bg-white p-2 shadow-[0_12px_45px_rgba(16,40,76,0.09)]">
              <Image
                src="/images/founder-black-coat.png"
                alt="Swagata Saikia Borah - Founder of SOHOJ"
                width={1328}
                height={1184}
                priority
                sizes="(max-width: 768px) 290px, 370px"
                className="h-auto w-full object-contain"
              />
            </div>

            <div className="absolute -bottom-4 -right-4 h-20 w-20 border-b-2 border-r-2 border-[#C90070]" />

            <figcaption className="mt-6 text-center text-[10px] font-bold uppercase tracking-[0.22em] text-[#C90070]">
              Founder of SOHOJ
            </figcaption>
          </figure>

          <article className="flex flex-col justify-center lg:pl-2">

            <div className="mb-5 flex items-center gap-3">
              <span className="h-[2px] w-10 bg-[#C90070]" />
              <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-[#C90070]">
                Meet Our Founder
              </p>
            </div>

            <h1 className="font-serif text-2xl font-medium leading-tight tracking-tight sm:text-3xl lg:text-[38px]">
              Swagata Saikia Borah
            </h1>

            <div className="my-6 h-px w-full max-w-[500px] bg-[#10284C]/10" />

            <blockquote className="relative max-w-[580px] border-l-[3px] border-[#C90070] py-3 pl-5 sm:pl-7">
              <Quote className="mb-3 h-7 w-7 text-[#C90070]" />

              <p className="font-serif text-xl font-semibold italic leading-relaxed text-[#10284C] sm:text-2xl lg:text-[27px]">
                “I will win, not immediately, but definitely.”
              </p>

              <span className="mt-4 block h-[2px] w-12 bg-[#C90070]" />
            </blockquote>

            <div className="mt-7 flex items-center gap-3">
              <span className="h-1.5 w-1.5 rounded-full bg-[#C90070]" />
              <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#10284C]/50 sm:text-[11px]">
                SOHOJ · One Stop Service Solutions
              </p>
            </div>

          </article>
        </div>
      </section>
    </main>
  );
}
