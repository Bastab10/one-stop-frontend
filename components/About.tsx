
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export default function About() {
  return (
    <section
      id="about"
      className="bg-white py-16 text-[#10284C] sm:py-20 lg:py-24"
    >
      <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-14 xl:px-20">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-20">
          <div>
            <p className="mb-5 flex items-center gap-3 text-[10px] font-bold uppercase tracking-[0.22em] text-[#10284C]/60 sm:text-xs">
              <span className="h-px w-9 bg-[#DCAF24]" />
              About সহজ
            </p>

            <h2 className="font-serif text-5xl font-normal leading-[1.02] tracking-[-0.05em] sm:text-6xl lg:text-7xl">
              Your Need.
              <br />
              Our Service.
              <br />
              <span className="italic text-[#DCAF24]">Always.</span>
            </h2>

            <p className="mt-6 max-w-lg text-base leading-8 text-[#10284C]/70 sm:text-lg">
              সহজ brings the services you need together in one place.
              From everyday home needs to special occasions, we make it
              easier to find the right service without searching everywhere.
            </p>

            <Link
              href="/#services"
              className="mt-8 inline-flex items-center gap-3 bg-[#10284C] px-6 py-4 text-sm font-semibold text-white"
            >
              Discover Our Services
              <ArrowUpRight size={18} />
            </Link>
          </div>

          <div className="border-l-2 border-[#DCAF24] py-3 pl-6 sm:pl-10 lg:py-8">
            <p className="font-serif text-3xl leading-tight tracking-tight sm:text-4xl lg:text-5xl">
              Multiple needs.
              <br />
              Different solutions.
              <br />
              <span className="italic text-[#DCAF24]">One সহজ.</span>
            </p>

            <div className="mt-7 h-px w-full bg-[#10284C]/10" />

            <p className="mt-6 max-w-md text-sm leading-7 text-[#10284C]/60 sm:text-base">
              Painting, carpentry, electrical work, tiffin, catering,
              decoration and more — explore our range of services
              through one convenient destination.
            </p>

            <p className="mt-6 text-xs font-bold uppercase tracking-[0.18em] text-[#10284C]/55">
              সহজ · One Stop Service Solutions
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
