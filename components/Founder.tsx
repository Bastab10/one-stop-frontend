"use client";

import {
  Eye,
  Target,
  BriefcaseBusiness,
  Users,
  Store,
  Music2,
  Settings2,
  Handshake,
  Quote,
} from "lucide-react";

const objectives = [
  {
    number: "01",
    title: "Create Employment Opportunities",
    description:
      "Create employment opportunities for local skilled and unskilled workers.",
    icon: BriefcaseBusiness,
  },
  {
    number: "02",
    title: "Connect People with Services",
    description:
      "Connect customers with reliable and trusted service providers.",
    icon: Users,
  },
  {
    number: "03",
    title: "Promote Local Entrepreneurship",
    description:
      "Encourage local entrepreneurship and support small businesses.",
    icon: Store,
  },
  {
    number: "04",
    title: "Preserve Assamese Culture",
    description:
      "Preserve Assamese cultural services, traditions and heritage.",
    icon: Music2,
  },
  {
    number: "05",
    title: "Organise Essential Services",
    description: "Make essential services accessible, reliable and organised.",
    icon: Settings2,
  },
  {
    number: "06",
    title: "Build Trusted Partnerships",
    description: "Develop a strong network of trusted contractual partners.",
    icon: Handshake,
  },
];

export default function Founder() {
  return (
    <main className="bg-white text-[#10284C]">
      <section className="mx-auto max-w-[1240px] px-5 py-12 sm:px-8 sm:py-16 lg:px-12 lg:py-20">
        <section className="grid items-center gap-10 lg:grid-cols-[0.75fr_1.25fr] lg:gap-16">
          <figure className="relative mx-auto w-full max-w-[290px] lg:mx-0 lg:max-w-[310px]">
            <span className="absolute -left-3 -top-3 h-16 w-16 border-l-2 border-t-2 border-[#C90070]" />

            <img
              src="/images/founder.png"
              alt="Swagata Saikia Borah - Founder of SOHOJ"
              className="relative aspect-[4/4.7] w-full object-cover object-center"
            />

            <span className="absolute -bottom-3 -right-3 h-16 w-16 border-b-2 border-r-2 border-[#C90070]" />

            <figcaption className="mt-5 text-center text-xs font-bold uppercase tracking-[0.18em] text-[#C90070]">
              Founder of SOHOJ
            </figcaption>
          </figure>

          <article>
            <p className="mb-5 flex items-center gap-3 text-[11px] font-bold uppercase tracking-[0.2em] text-[#C90070]">
              <span className="h-px w-9 bg-[#C90070]" />
              Meet Our Founder
            </p>

            <h1 className="font-serif text-4xl font-medium leading-[1.08] tracking-tight sm:text-5xl lg:text-6xl">
              Swagata Saikia Borah
            </h1>

            <p className="mt-4 text-sm font-semibold tracking-wide text-[#C90070] sm:text-base">
              Founder & Social Entrepreneur, SOHOJ
            </p>

            <blockquote className="my-7 flex items-start gap-3 border-l-2 border-[#C90070] pl-5">
              <Quote className="mt-1 h-5 w-5 shrink-0 text-[#C90070]" />
              <p className="font-serif text-xl italic leading-relaxed sm:text-2xl">
                “I will win, not immediately, but definitely.”
              </p>
            </blockquote>

            <h2 className="font-serif text-2xl font-medium leading-snug sm:text-3xl">
              SOHOJ – A Small Initiative for a Better Society
            </h2>

            <p className="mt-2 text-[11px] font-bold uppercase tracking-[0.12em] text-[#C90070] sm:text-xs">
              Society Oriented Helping & Organised Jobs
            </p>

            <p className="mt-5 text-sm leading-7 text-[#10284C]/70 sm:text-base">
              I am the founder of SOHOJ, an initiative conceived with the vision
              of connecting people, creating employment opportunities, promoting
              local entrepreneurship and contributing towards the sustainable
              development of society.
            </p>

            <p className="mt-3 text-sm leading-7 text-[#10284C]/70 sm:text-base">
              My objective is to transform a simple concept into an organised
              service network that benefits customers, skilled and unskilled
              workers, local entrepreneurs and the community as a whole.
            </p>
          </article>
        </section>
      </section>

      <section className="border-y border-[#10284C]/10 bg-[#FAFAFC]">
        <section className="mx-auto max-w-[1240px] px-5 py-14 sm:px-8 sm:py-16 lg:px-12">
          <header className="mb-10">
            <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#C90070]">
              Our Purpose
            </p>

            <h2 className="mt-2 font-serif text-3xl font-medium sm:text-4xl">
              Vision & Mission
            </h2>

            <span className="mt-4 block h-px w-14 bg-[#C90070]" />
          </header>

          <section className="grid gap-10 md:grid-cols-2 md:gap-14">
            <article className="md:border-r md:border-[#10284C]/10 md:pr-10">
              <header className="mb-5 flex items-center gap-3">
                <Eye className="h-6 w-6 text-[#C90070]" />
                <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#C90070]">
                  Our Vision
                </p>
              </header>

              <h3 className="font-serif text-3xl font-medium leading-tight sm:text-4xl">
                Development Through Co-operation
              </h3>

              <span className="mt-6 block h-px w-12 bg-[#C90070]" />

              <p className="mt-5 text-sm leading-8 text-[#10284C]/65 sm:text-base">
                To build a better and more organised society through
                co-operation, collective efforts, local development and
                sustainable opportunities.
              </p>
            </article>

            <article>
              <header className="mb-5 flex items-center gap-3">
                <Target className="h-6 w-6 text-[#C90070]" />
                <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#C90070]">
                  Our Mission
                </p>
              </header>

              <h3 className="font-serif text-3xl font-medium leading-tight sm:text-4xl">
                Connecting People, Creating Opportunities and Serving Society.
              </h3>

              <span className="mt-6 block h-px w-12 bg-[#C90070]" />

              <p className="mt-5 text-sm leading-8 text-[#10284C]/65 sm:text-base">
                Our mission is to create meaningful opportunities, connect
                communities and make essential services more accessible through
                organised efforts.
              </p>
            </article>
          </section>
        </section>
      </section>

      <section className="mx-auto max-w-[1240px] px-5 py-14 sm:px-8 sm:py-20 lg:px-12">
        <header className="mb-10 max-w-2xl">
          <p className="mb-4 flex items-center gap-3 text-[11px] font-bold uppercase tracking-[0.2em] text-[#C90070]">
            <span className="h-px w-9 bg-[#C90070]" />
            What We Stand For
          </p>

          <h2 className="font-serif text-4xl font-medium tracking-tight sm:text-5xl">
            Our Objectives
          </h2>

          <span className="mt-5 block h-px w-14 bg-[#C90070]" />

          <p className="mt-5 max-w-xl text-sm leading-7 text-[#10284C]/60 sm:text-base">
            Our commitment towards building a better, organised and
            opportunity-driven society.
          </p>
        </header>

        <section className="border-b border-[#10284C]/10">
          {objectives.map((item) => {
            const Icon = item.icon;

            return (
              <article
                key={item.number}
                className="group grid gap-3 border-t border-[#10284C]/10 py-6 transition-colors hover:bg-[#FFF9FC] sm:grid-cols-[65px_1fr_1fr] sm:items-center sm:gap-6 sm:px-3"
              >
                <p className="font-serif text-3xl text-[#C90070]">
                  {item.number}
                </p>

                <header className="flex items-center gap-4">
                  <Icon className="h-5 w-5 shrink-0 text-[#C90070]" />

                  <h3 className="font-serif text-xl font-medium leading-snug sm:text-2xl">
                    {item.title}
                  </h3>
                </header>

                <p className="text-sm leading-7 text-[#10284C]/60 sm:pl-3 sm:text-base">
                  {item.description}
                </p>
              </article>
            );
          })}
        </section>
      </section>
    </main>
  );
}
