
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

export default function About() {
  return (
    <main id="about" className="bg-white text-[#10284C]">

      {/* ABOUT SOHOJ */}
      <section className="mx-auto max-w-[1240px] px-5 py-9 sm:px-8 sm:py-11 lg:px-12">
        <header>
          <p className="mb-3 flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.2em] text-[#C90070]">
            <span className="h-px w-7 bg-[#C90070]" />
            About SOHOJ
          </p>

          <h1 className="font-serif text-3xl font-medium leading-[1.12] tracking-tight sm:text-4xl lg:text-[46px]">
            A Small Initiative
            <br />
            for a Better{" "}
            <span className="italic text-[#C90070]">Society.</span>
          </h1>

          <p className="mt-4 text-[10px] font-bold uppercase tracking-[0.13em] text-[#10284C]/55 sm:text-[11px]">
            Society Oriented Helping & Organised Jobs
          </p>
        </header>
      </section>

      {/* VISION & MISSION */}
      <section className="border-y border-[#10284C]/10 bg-[#F8F9FC]">
        <div className="mx-auto max-w-[1240px] px-5 py-9 sm:px-8 sm:py-11 lg:px-12">

          <header className="mb-7">
            <p className="mb-2 flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.2em] text-[#C90070]">
              <span className="h-px w-7 bg-[#C90070]" />
              Our Purpose
            </p>

            <h2 className="font-serif text-2xl font-medium sm:text-3xl">
              Vision & Mission
            </h2>

            <p className="mt-2 text-xs leading-6 text-[#10284C]/55">
              The principles that guide our commitment towards a better and more organised society.
            </p>
          </header>

          <section className="grid gap-8 md:grid-cols-2 md:gap-12">

            {/* VISION */}
            <article className="border-t-2 border-[#C90070] pt-4">
              <header className="flex items-center justify-between">
                <p className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.16em] text-[#C90070]">
                  <Eye size={17} />
                  Our Vision
                </p>

                <span className="font-serif text-2xl text-[#10284C]/15">
                  01
                </span>
              </header>

              <h3 className="mt-3 font-serif text-xl font-medium leading-snug sm:text-2xl">
                Development Through Co-operation
              </h3>

              <p className="mt-2 text-xs leading-6 text-[#10284C]/65 sm:text-[13px]">
                To build a better and more organised society through
                co-operation, collective efforts, local development and
                sustainable opportunities.
              </p>
            </article>

            {/* MISSION */}
            <article className="border-t-2 border-[#C90070] pt-4">
              <header className="flex items-center justify-between">
                <p className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.16em] text-[#C90070]">
                  <Target size={17} />
                  Our Mission
                </p>

                <span className="font-serif text-2xl text-[#10284C]/15">
                  02
                </span>
              </header>

              <h3 className="mt-3 font-serif text-xl font-medium leading-snug sm:text-2xl">
                Connecting People, Creating Opportunities and Serving Society.
              </h3>

              <p className="mt-2 text-xs leading-6 text-[#10284C]/65 sm:text-[13px]">
                Our mission is to create meaningful opportunities, connect
                communities and make essential services more accessible
                through organised efforts.
              </p>
            </article>

          </section>
        </div>
      </section>

      {/* OBJECTIVES */}
      <section className="mx-auto max-w-[1240px] px-5 py-9 sm:px-8 sm:py-11 lg:px-12">

        <header className="mb-6">
          <p className="mb-2 flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.2em] text-[#C90070]">
            <span className="h-px w-7 bg-[#C90070]" />
            What We Stand For
          </p>

          <h2 className="font-serif text-2xl font-medium sm:text-3xl">
            Our Objectives
          </h2>

          <p className="mt-2 text-xs leading-6 text-[#10284C]/55">
            Our commitment towards building a better, organised and opportunity-driven society.
          </p>
        </header>

        <section className="grid gap-x-10 md:grid-cols-2">

          {objectives.map((item) => {
            const Icon = item.icon;

            return (
              <article
                key={item.number}
                className="flex gap-3 border-t border-[#10284C]/10 py-4 transition-colors hover:bg-[#FFF9FC] sm:px-2"
              >
                <span className="pt-0.5 font-serif text-lg font-medium text-[#C90070]">
                  {item.number}
                </span>

                <section className="min-w-0 flex-1">
                  <h3 className="flex items-center gap-2 font-serif text-base font-medium leading-snug sm:text-lg">
                    <Icon
                      size={16}
                      strokeWidth={1.8}
                      className="shrink-0 text-[#C90070]"
                    />
                    {item.title}
                  </h3>

                  <p className="mt-1.5 text-xs leading-5 text-[#10284C]/60">
                    {item.description}
                  </p>
                </section>
              </article>
            );
          })}

        </section>

        {/* CLOSING MESSAGE */}
        <footer className="mt-6 border-l-2 border-[#C90070] py-1 pl-4 sm:pl-6">
          <p className="font-serif text-lg italic sm:text-xl">
            Together, building a better and more organised society.
          </p>

          <p className="mt-1 text-[9px] font-bold uppercase tracking-[0.14em] text-[#10284C]/45">
            One SOHOJ. Multiple Solutions.
          </p>
        </footer>

      </section>
    </main>
  );
}
