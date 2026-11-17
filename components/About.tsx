
import Link from "next/link";
import {
  Eye,
  Target,
  BriefcaseBusiness,
  Users,
  Store,
  Music2,
  Settings2,
  Handshake,
  ArrowRight,
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

      <section className="mx-auto max-w-[1320px] px-5 py-10 sm:px-8 sm:py-12 lg:px-12">

        <section className="grid items-center gap-8 lg:grid-cols-2 lg:gap-14">

          <article>
            <p className="mb-4 flex items-center gap-3 text-[10px] font-bold uppercase tracking-[0.2em] text-[#C90070] sm:text-xs">
              <span className="h-px w-8 bg-[#C90070]" />
              About SOHOJ
            </p>

            <h1 className="font-serif text-4xl font-medium leading-[1.08] tracking-tight sm:text-5xl lg:text-[52px]">
              A Small Initiative
              <br />
              for a Better
              <br />
              <span className="italic text-[#C90070]">Society.</span>
            </h1>

            <p className="mt-5 text-[11px] font-bold uppercase tracking-[0.13em] text-[#10284C]/55 sm:text-xs">
              Society Oriented Helping & Organised Jobs
            </p>
          </article>

          <article className="border-l-2 border-[#C90070] py-1 pl-5 sm:pl-7">

            <p className="text-sm leading-7 text-[#10284C]/75 sm:text-[15px]">
              I am the founder of{" "}
              <strong className="text-[#10284C]">SOHOJ</strong>, an initiative
              conceived with the vision of connecting people, creating
              employment opportunities, promoting local entrepreneurship
              and contributing towards the sustainable development of society.
            </p>

            <p className="mt-4 text-sm leading-7 text-[#10284C]/75 sm:text-[15px]">
              My objective is to transform a simple concept into an
              organised service network that benefits customers, skilled
              and unskilled workers, local entrepreneurs and the community
              as a whole.
            </p>

            <p className="mt-5 text-[10px] font-bold uppercase tracking-[0.15em] text-[#C90070]">
              SOHOJ · One Stop Service Solutions
            </p>

          </article>

        </section>

      </section>

      <section className="border-y border-[#10284C]/10 bg-[#F8F9FC]">

        <section className="mx-auto max-w-[1320px] px-5 py-10 sm:px-8 sm:py-12 lg:px-12">

          <header className="mb-7">
            <p className="mb-3 flex items-center gap-3 text-[10px] font-bold uppercase tracking-[0.2em] text-[#C90070] sm:text-xs">
              <span className="h-px w-8 bg-[#C90070]" />
              Our Purpose
            </p>

            <h2 className="font-serif text-3xl font-medium sm:text-4xl">
              Vision & Mission
            </h2>

            <p className="mt-2 text-sm text-[#10284C]/55">
              The principles that guide our commitment towards a better
              and more organised society.
            </p>
          </header>

          <section className="grid gap-8 md:grid-cols-2 md:gap-10">

            <article className="border-t-2 border-[#C90070] pt-5">

              <header className="flex items-center justify-between">
                <p className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.18em] text-[#C90070]">
                  <Eye size={19} />
                  Our Vision
                </p>

                <span className="font-serif text-3xl text-[#10284C]/15">
                  01
                </span>
              </header>

              <h3 className="mt-4 font-serif text-2xl font-medium leading-tight sm:text-3xl">
                Development Through Co-operation
              </h3>

              <p className="mt-3 text-sm leading-7 text-[#10284C]/65">
                To build a better and more organised society through
                co-operation, collective efforts, local development and
                sustainable opportunities.
              </p>

            </article>

            <article className="border-t-2 border-[#C90070] pt-5">

              <header className="flex items-center justify-between">
                <p className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.18em] text-[#C90070]">
                  <Target size={19} />
                  Our Mission
                </p>

                <span className="font-serif text-3xl text-[#10284C]/15">
                  02
                </span>
              </header>

              <h3 className="mt-4 font-serif text-2xl font-medium leading-tight sm:text-3xl">
                Connecting People, Creating Opportunities and Serving Society.
              </h3>

              <p className="mt-3 text-sm leading-7 text-[#10284C]/65">
                Our mission is to create meaningful opportunities, connect
                communities and make essential services more accessible
                through organised efforts.
              </p>

            </article>

          </section>

        </section>

      </section>

      <section className="mx-auto max-w-[1320px] px-5 py-10 sm:px-8 sm:py-12 lg:px-12">

        <header className="mb-7">

          <p className="mb-3 flex items-center gap-3 text-[10px] font-bold uppercase tracking-[0.2em] text-[#C90070] sm:text-xs">
            <span className="h-px w-8 bg-[#C90070]" />
            What We Stand For
          </p>

          <h2 className="font-serif text-3xl font-medium sm:text-4xl">
            Our Objectives
          </h2>

          <p className="mt-2 text-sm leading-6 text-[#10284C]/55">
            Our commitment towards building a better, organised and
            opportunity-driven society.
          </p>

        </header>

        <section className="grid gap-x-12 md:grid-cols-2">

          {objectives.map((item) => {
            const Icon = item.icon;

            return (
              <article
                key={item.number}
                className="flex gap-4 border-t border-[#10284C]/15 py-5 transition-colors hover:bg-[#FFF9FC] sm:gap-5 sm:px-3"
              >

                <p className="pt-1 font-serif text-2xl font-medium text-[#C90070]">
                  {item.number}
                </p>

                <article className="min-w-0 flex-1">

                  <header className="flex items-center gap-3">

                    <Icon
                      size={19}
                      strokeWidth={1.7}
                      className="shrink-0 text-[#C90070]"
                    />

                    <h3 className="font-serif text-lg font-medium leading-snug sm:text-xl">
                      {item.title}
                    </h3>

                  </header>

                  <p className="mt-2 text-sm leading-6 text-[#10284C]/60">
                    {item.description}
                  </p>

                </article>

              </article>
            );
          })}

        </section>

        <footer className="mt-7 flex flex-col justify-between gap-5 border-l-2 border-[#C90070] py-2 pl-5 sm:flex-row sm:items-center sm:pl-7">

          <section>
            <p className="font-serif text-xl italic sm:text-2xl">
              Together, building a better and more organised society.
            </p>

            <p className="mt-1 text-[10px] font-bold uppercase tracking-[0.14em] text-[#10284C]/45">
              One SOHOJ. Multiple Solutions.
            </p>
          </section>

        

        </footer>

      </section>

    </main>
  );
}
