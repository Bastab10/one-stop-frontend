
import Link from "next/link";
import {
  ArrowUpRight,
  Users,
  MapPin,
  ShieldCheck,
} from "lucide-react";

const BUSINESS_PHONE = "91XXXXXXXXXX";

const servicePhotos = [
  {
    src: "https://www.prodestravaux.com/public/assets/uploads/peinture-salon.jpg",
    alt: "Painting and home improvement service",
    label: "PAINTING & HOME CARE",
  },
  {
    src: "https://www.tiffyy.com/images/blog-choose-tiffin.jpg",
    alt: "Freshly prepared tiffin and home food",
    label: "TIFFIN & COOKING",
  },
  {
    src: "https://koala.sh/api/image/v2-o7y9v-umnfd.jpg?dream=&height=832&width=1216",
    alt: "Catering and event arrangement",
    label: "CATERING & EVENTS",
  },
];

export default function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden bg-white text-[#10294C]"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-32 top-24 h-[360px] w-[360px] rounded-full border border-[#DCAF24]/20"
      />

      <div className="mx-auto grid min-h-[calc(100svh-80px)] max-w-[1600px] items-center gap-8 px-5 py-7 sm:px-8 sm:py-10 lg:grid-cols-2 lg:gap-8 lg:px-10 lg:py-8 xl:px-12">
        <div className="relative z-10">
          <div className="mb-4 flex items-center gap-3 sm:mb-5">
            <span className="h-[2px] w-8 bg-[#DCAF24]" />
            <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-[#415775] sm:text-xs">
              Your Local Service Partner
            </p>
          </div>

          <h1 className="max-w-[620px] font-serif text-[3.25rem] font-medium leading-[0.91] tracking-[-0.055em] sm:text-6xl lg:text-[4rem] xl:text-[4.5rem]">
            All Your
            <br />
            Services<span className="text-[#DCAF24]">.</span>
            <br />
            <span className="italic text-[#DCAF24]">One Trusted</span>
            <br />
            Partner<span className="text-[#DCAF24]">.</span>
          </h1>

          <p className="mt-5 max-w-[450px] text-sm leading-6 text-[#415775] sm:mt-6 sm:text-base sm:leading-7">
            From painting, repairs and home cooking to catering,
            creative work and special occasions, সহজ brings your
            everyday service needs together in one place.
          </p>

          <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <Link
              href="/#services"
              className="inline-flex min-h-[48px] items-center justify-center gap-3 rounded-full bg-[#10294C] px-6 py-3 text-sm font-semibold text-white shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#1B3C68]"
            >
              Explore Our Services
              <ArrowUpRight size={17} />
            </Link>

            <a
              href={`tel:+${BUSINESS_PHONE}`}
              className="inline-flex min-h-[48px] items-center justify-center gap-3 rounded-full border border-[#D8D5CC] bg-white px-6 py-3 text-sm font-semibold text-[#10294C] transition-all duration-300 hover:-translate-y-0.5 hover:border-[#DCAF24] hover:bg-[#FFFAEA]"
            >
              Book a Service
              <ArrowUpRight size={17} />
            </a>
          </div>

          <div className="mt-7 grid max-w-[500px] grid-cols-3 border-t border-[#10294C]/10 pt-4 sm:mt-8">
            <div className="pr-2 sm:pr-4">
              <ShieldCheck
                size={19}
                strokeWidth={1.6}
                className="mb-1.5 text-[#DCAF24]"
              />
              <p className="text-xs font-bold sm:text-sm">Reliable</p>
              <p className="mt-1 text-[10px] leading-4 text-[#61718A] sm:text-xs">
                Service support
              </p>
            </div>

            <div className="border-l border-[#10294C]/10 px-3 sm:px-5">
              <Users
                size={19}
                strokeWidth={1.6}
                className="mb-1.5 text-[#DCAF24]"
              />
              <p className="text-xs font-bold sm:text-sm">Convenient</p>
              <p className="mt-1 text-[10px] leading-4 text-[#61718A] sm:text-xs">
                Many services
              </p>
            </div>

            <div className="border-l border-[#10294C]/10 pl-3 sm:pl-5">
              <MapPin
                size={19}
                strokeWidth={1.6}
                className="mb-1.5 text-[#DCAF24]"
              />
              <p className="text-xs font-bold sm:text-sm">Local</p>
              <p className="mt-1 text-[10px] leading-4 text-[#61718A] sm:text-xs">
                Tezpur, Assam
              </p>
            </div>
          </div>
        </div>

        <div className="relative mx-auto mt-2 h-[390px] w-full max-w-[500px] sm:h-[470px] lg:mt-0 lg:h-[450px] xl:h-[490px]">
          <div className="absolute right-[5%] top-[5%] h-[82%] w-[78%] rounded-t-[48%] rounded-b-lg bg-[#F5F1E8]" />

          <div className="absolute right-[8%] top-[8%] h-16 w-16 rounded-full border border-[#DCAF24]/70 sm:h-24 sm:w-24" />

          <div className="absolute left-0 top-[5%] z-10 w-[55%]">
            <div className="aspect-[4/5] overflow-hidden rounded-t-[100px] rounded-b-md bg-[#F1F1EF] shadow-lg shadow-[#10294C]/10">
              <img
                src={servicePhotos[0].src}
                alt={servicePhotos[0].alt}
                className="h-full w-full object-cover"
              />
            </div>
            <p className="mt-2 text-[8px] font-bold tracking-[0.12em] text-[#415775] sm:text-[9px]">
              {servicePhotos[0].label}
            </p>
          </div>

          <div className="absolute right-0 top-[17%] z-20 w-[42%]">
            <div className="aspect-[4/5] overflow-hidden rounded-sm border-4 border-white bg-[#F1F1EF] shadow-xl shadow-[#10294C]/10 sm:border-[6px]">
              <img
                src={servicePhotos[1].src}
                alt={servicePhotos[1].alt}
                className="h-full w-full object-cover"
              />
            </div>
            <p className="mt-2 text-right text-[8px] font-bold tracking-[0.1em] text-[#415775] sm:text-[9px]">
              {servicePhotos[1].label}
            </p>
          </div>

          <div className="absolute bottom-[2%] left-[17%] z-30 w-[60%]">
            <div className="aspect-[16/9] overflow-hidden rounded-sm border-4 border-white bg-[#F1F1EF] shadow-xl shadow-[#10294C]/15 sm:border-[6px]">
              <img
                src={servicePhotos[2].src}
                alt={servicePhotos[2].alt}
                className="h-full w-full object-cover"
              />
            </div>
            <p className="mt-1.5 text-center text-[8px] font-bold tracking-[0.12em] text-[#415775] sm:text-[9px]">
              {servicePhotos[2].label}
            </p>
          </div>

          <div className="absolute bottom-[1%] right-0 z-40 max-w-[115px] rotate-[-5deg] rounded-sm bg-[#DCAF24] px-3 py-2.5 text-center shadow-md sm:bottom-[4%] sm:right-[-1%] sm:max-w-[135px] sm:px-4 sm:py-3">
            <p className="font-serif text-sm italic leading-tight text-[#10294C] sm:text-lg">
              Everyday needs.
              <br />
              Simpler solutions.
            </p>
            <p className="mt-1.5 text-[7px] font-bold uppercase tracking-[0.15em] text-[#10294C]/75">
              — সহজ
            </p>
          </div>

          <div className="absolute left-[3%] top-0 z-30 flex h-10 w-10 items-center justify-center rounded-full bg-[#DCAF24] font-serif text-xl font-bold text-[#10294C] shadow-md sm:h-12 sm:w-12 sm:text-2xl">
            স
          </div>
        </div>
      </div>

      <div className="h-[3px] w-full bg-gradient-to-r from-[#10294C] via-[#DCAF24] to-white" />
    </section>
  );
}
