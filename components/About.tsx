
import { Eye, Target } from "lucide-react";

const objectives = [
  {
    number: "01",
    title: "Create Employment Opportunities",
    description:
      "Create employment opportunities for local skilled and unskilled workers.",
  },
  {
    number: "02",
    title: "Connect People with Services",
    description:
      "Connect customers with reliable and trusted service providers.",
  },
  {
    number: "03",
    title: "Promote Local Entrepreneurship",
    description:
      "Encourage local entrepreneurship and support small businesses.",
  },
  {
    number: "04",
    title: "Preserve Assamese Culture",
    description:
      "Preserve Assamese cultural services, traditions and heritage.",
  },
  {
    number: "05",
    title: "Organise Essential Services",
    description:
      "Make essential services accessible, reliable and organised.",
  },
  {
    number: "06",
    title: "Build Trusted Partnerships",
    description:
      "Develop a strong network of trusted contractual partners.",
  },
];

export default function About() {
  return (
    <main id="about" className="bg-white text-[#10284C]">
      <section className="mx-auto max-w-[1440px] px-5 py-10 sm:px-8 sm:py-12 lg:px-14 xl:px-20">
        <header>
          <p className="mb-4 flex items-center gap-3 text-xs font-bold uppercase tracking-[0.22em] text-[#C90070]">
            <span className="h-px w-9 bg-[#C90070]" />
            About SOHOJ
          </p>

          <h1 className="font-serif text-4xl font-normal leading-[1.08] tracking-tight sm:text-5xl lg:text-7xl">
            A Small Initiative
            <br />
            for a Better{" "}
            <span className="italic text-[#C90070]">Society.</span>
          </h1>
        </header>
      </section>

      <section className=" border-[#10284C]/10 ">
        <div className="mx-auto max-w-[1440px] px-5 py-8 sm:px-8 sm:py-10 lg:px-14 xl:px-20">
          <div className="grid gap-7 md:grid-cols-2 md:gap-10">
            <article>
              <p className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.18em] text-[#C90070]">
                Our Vision
              </p>

              <h2 className="mt-3 font-serif text-2xl font-normal leading-snug sm:text-3xl">
                Development Through Co-operation
              </h2>

              <p className="mt-2 text-sm leading-6 text-[#61718A] sm:text-base">
                To build a better and more organised society through
                co-operation, collective efforts, local development
                and sustainable opportunities.
              </p>
            </article>

            <article>
              <p className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.18em] text-[#C90070]">
                Our Mission
              </p>

              <h2 className="mt-3 font-serif text-2xl font-normal leading-snug sm:text-3xl">
                Connecting People, Creating Opportunities and Serving Society
              </h2>

              <p className="mt-2 text-sm leading-6 text-[#61718A] sm:text-base">
                To create meaningful opportunities, connect communities
                and make essential services more accessible through
                organised efforts.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[1440px] px-5 py-8 sm:px-8 sm:py-10 lg:px-14 xl:px-20">
        <header className="mb-5">
          <p className="mb-3 flex items-center gap-3 text-xs font-bold uppercase tracking-[0.22em] text-[#C90070]">
            <span className="h-px w-9 bg-[#C90070]" />
            What We Stand For
          </p>

          <h2 className="font-serif text-3xl font-normal sm:text-4xl">
            Our Objectives
          </h2>
        </header>

        <ol className="grid grid-cols-1 gap-x-8 sm:grid-cols-2 lg:grid-cols-3">
          {objectives.map((item) => (
            <li
              key={item.number}
              className="flex items-start gap-3 border-t border-[#10284C]/10 py-4"
            >
              <span className="pt-0.5 font-serif text-lg text-[#C90070]">
                {item.number}
              </span>

              <div className="min-w-0">
                <h3 className="text-sm font-semibold leading-6 sm:text-base">
                  {item.title}
                </h3>

                <p className="mt-1 text-sm leading-6 text-[#61718A]">
                  {item.description}
                </p>
              </div>
            </li>
          ))}
        </ol>
      </section>
    </main>
  );
}
