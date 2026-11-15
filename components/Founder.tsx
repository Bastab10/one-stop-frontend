
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
    description:
      "Make essential services accessible, reliable and organised.",
    icon: Settings2,
  },
  {
    number: "06",
    title: "Build Trusted Partnerships",
    description:
      "Develop a strong network of trusted contractual partners.",
    icon: Handshake,
  },
];

export default function Founder() {
  return (
    <section id="founder" className="bg-white text-[#10284C]">
      <div className="mx-auto max-w-[1440px] px-5 py-16 sm:px-8 lg:px-14 xl:px-20 lg:py-24">
        <div className="grid items-center gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
          <div className="relative mx-auto w-full max-w-md">
            <div className="absolute -left-4 -top-4 h-28 w-28 border-l-2 border-t-2 border-[#C90070]" />

            <div className="relative aspect-[4/4.7] overflow-hidden bg-[#F5F2F4]">
              <img
                src="/images/founder.png"
                alt="Swagata Saikia Borah - Founder of SOHOJ"
                className="h-full w-full object-cover"
              />
            </div>

            <div className="absolute -bottom-4 -right-4 h-24 w-24 border-b-2 border-r-2 border-[#C90070]" />
          </div>

          <div>
            <p className="mb-5 flex items-center gap-3 text-[10px] font-bold uppercase tracking-[0.22em] text-[#C90070] sm:text-xs">
              <span className="h-px w-9 bg-[#C90070]" />
              Meet Our Founder
            </p>

            <h1 className="font-serif text-5xl font-normal leading-[0.98] tracking-[-0.05em] text-[#10284C] sm:text-6xl lg:text-7xl">
              Swagata Saikia Borah
            </h1>

            <p className="mt-5 text-sm font-semibold tracking-wide text-[#C90070] sm:text-base">
              Founder & Social Entrepreneur, SOHOJ
            </p>

            <div className="mt-8 border-l border-[#C90070] pl-5">
              <p className="font-serif text-xl italic leading-relaxed text-[#10284C] sm:text-2xl">
                “I will win, not immediately, but definitely.”
              </p>
            </div>

            <div className="mt-9">
              <h2 className="font-serif text-3xl font-normal leading-tight tracking-[-0.03em] text-[#10284C] sm:text-4xl">
                SOHOJ – A Small Initiative for a Better Society
              </h2>

              <p className="mt-4 text-xs font-bold uppercase tracking-[0.13em] text-[#C90070] sm:text-sm">
                Society Oriented Helping & Organised Jobs
              </p>

              <p className="mt-6 text-sm leading-8 text-[#10284C]/65 sm:text-base">
                I am the founder of SOHOJ, an initiative conceived with the
                vision of connecting people, creating employment opportunities,
                promoting local entrepreneurship and contributing towards the
                sustainable development of society.
              </p>

              <p className="mt-4 text-sm leading-8 text-[#10284C]/65 sm:text-base">
                My objective is to transform a simple concept into an organised
                service network that benefits customers, skilled and unskilled
                workers, local entrepreneurs and the community as a whole.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="border-y border-[#10284C]/10 bg-[#FAFAFC]">
        <div className="mx-auto max-w-[1440px] px-5 py-20 sm:px-8 lg:px-14 xl:px-20 lg:py-24">
          <div className="grid gap-14 md:grid-cols-2 md:gap-16">
            <div className="md:border-r md:border-[#10284C]/10 md:pr-12">
              <div className="mb-7 flex items-center gap-4">
                <div className="flex h-11 w-11 items-center justify-center bg-[#C90070]/10">
                  <Eye className="h-5 w-5 text-[#C90070]" />
                </div>

                <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-[#C90070] sm:text-xs">
                  Our Vision
                </p>
              </div>

              <h2 className="font-serif text-4xl font-normal leading-[1.08] tracking-[-0.04em] text-[#10284C] sm:text-5xl">
                Development Through Co-operation
              </h2>

              <div className="mt-7 h-px w-16 bg-[#C90070]" />

              <p className="mt-7 max-w-lg text-sm leading-8 text-[#10284C]/65 sm:text-base">
                To build a better and more organised society through
                co-operation, collective efforts, local development and
                sustainable opportunities.
              </p>
            </div>

            <div>
              <div className="mb-7 flex items-center gap-4">
                <div className="flex h-11 w-11 items-center justify-center bg-[#C90070]/10">
                  <Target className="h-5 w-5 text-[#C90070]" />
                </div>

                <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-[#C90070] sm:text-xs">
                  Our Mission
                </p>
              </div>

              <h2 className="font-serif text-4xl font-normal leading-[1.08] tracking-[-0.04em] text-[#10284C] sm:text-5xl">
                Connecting People, Creating Opportunities and Serving Society.
              </h2>

              <div className="mt-7 h-px w-16 bg-[#C90070]" />

              <p className="mt-7 max-w-lg text-sm leading-8 text-[#10284C]/65 sm:text-base">
                Our mission is to create meaningful opportunities, connect
                communities and make essential services more accessible through
                organised efforts.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-[1440px] px-5 py-20 sm:px-8 lg:px-14 xl:px-20 lg:py-28">
        <div className="mb-14 max-w-2xl">
          <p className="mb-5 flex items-center gap-3 text-[10px] font-bold uppercase tracking-[0.22em] text-[#C90070] sm:text-xs">
            <span className="h-px w-9 bg-[#C90070]" />
            What We Stand For
          </p>

          <h2 className="font-serif text-5xl font-normal leading-none tracking-[-0.05em] text-[#10284C] sm:text-6xl">
            Our Objectives
          </h2>

          <div className="mt-7 h-px w-16 bg-[#C90070]" />

          <p className="mt-6 max-w-xl text-sm leading-8 text-[#10284C]/60 sm:text-base">
            Our commitment towards building a better, organised and
            opportunity-driven society.
          </p>
        </div>

        <div className="border-b border-[#10284C]/10">
          {objectives.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.number}
                className="group grid gap-4 border-t border-[#10284C]/10 py-7 transition-colors duration-300 hover:bg-[#FFF9FC] sm:grid-cols-[70px_1fr_1.1fr] sm:items-center sm:gap-7 sm:px-4"
              >
                <span className="font-serif text-3xl font-normal tracking-tight text-[#C90070]">
                  {item.number}
                </span>

                <div className="flex items-center gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center bg-[#C90070]/10 transition-colors group-hover:bg-[#C90070]">
                    <Icon className="h-5 w-5 text-[#C90070] transition-colors group-hover:text-white" />
                  </div>

                  <h3 className="font-serif text-xl font-normal leading-snug tracking-[-0.02em] text-[#10284C] sm:text-2xl">
                    {item.title}
                  </h3>
                </div>

                <p className="text-sm leading-7 text-[#10284C]/60 sm:text-base sm:pl-2">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>

      <div className="border-t border-[#10284C]/10 bg-white">
        <div className="mx-auto max-w-[1440px] px-5 py-16 sm:px-8 lg:px-14 xl:px-20 lg:py-24">
          <div className="max-w-3xl">
            <p className="mb-5 flex items-center gap-3 text-[10px] font-bold uppercase tracking-[0.22em] text-[#C90070] sm:text-xs">
              <span className="h-px w-9 bg-[#C90070]" />
              Our Commitment
            </p>

            <h2 className="font-serif text-5xl font-normal leading-[0.98] tracking-[-0.05em] text-[#10284C] sm:text-6xl lg:text-7xl">
              Together We Can Make a Difference.
            </h2>

            <p className="mt-7 font-serif text-xl italic text-[#C90070] sm:text-2xl">
              A Small Initiative. A Better Society.
            </p>

            <p className="mt-7 max-w-2xl text-sm leading-8 text-[#10284C]/65 sm:text-base">
              SOHOJ aims to grow as a platform that connects people, supports
              local businesses, creates opportunities and contributes to a
              brighter and better future.
            </p>

            <div className="mt-10 h-px w-16 bg-[#C90070]" />

            <div className="mt-7">
              <h3 className="font-serif text-3xl font-normal tracking-[-0.03em] text-[#10284C] sm:text-4xl">
                Swagata Saikia Borah
              </h3>

              <p className="mt-3 text-xs font-semibold uppercase tracking-[0.12em] text-[#10284C]/55 sm:text-sm">
                Founder & Social Entrepreneur, SOHOJ
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
