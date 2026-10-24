
"use client";

import Link from "next/link";
import { ArrowLeft, ArrowUpRight, Phone } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

const BUSINESS_PHONE = "916026936104";

type Service = {
  _id: string;
  number: number;
  title: string;
  description: string;
  details?: string;
  image: string;
  active: boolean;
};

export default function ServiceDetailsClient({
  service,
}: {
  service: Service;
}) {
  const whatsappMessage = [
    "Hello SOHOJ!",
    "",
    `I am interested in ${service.title}.`,
    `Service details: ${service.description}`,
    "",
    "Please share more details and pricing.",
  ].join("\n");

  const whatsappUrl =
    `https://wa.me/${BUSINESS_PHONE}?text=` +
    encodeURIComponent(whatsappMessage);

  return (
    <main className="min-h-screen bg-white text-[#10284C]">
      <div className="mx-auto max-w-[1400px] px-5 py-10 sm:px-8 sm:py-16 lg:px-14">
        <Link
          href="/#services"
          className="mb-10 inline-flex items-center gap-2 text-sm font-semibold text-[#10284C]/70 transition hover:text-[#C90070]"
        >
          <ArrowLeft size={17} />
          Back to Services
        </Link>

        <div className="grid items-start gap-10 lg:grid-cols-2 lg:gap-16">
          <div className="relative overflow-hidden bg-[#FDF2F8] lg:sticky lg:top-8">
            <img
              src={service.image}
              alt={`${service.title} service by SOHOJ in Tezpur`}
              className="aspect-[4/3] w-full object-cover"
            />

            <span className="absolute left-5 top-5 bg-white px-4 py-3 text-xs font-bold tracking-widest text-[#C90070]">
              SERVICE {String(service.number).padStart(2, "0")}
            </span>
          </div>

          <div>
            <p className="mb-6 flex items-center gap-3 text-xs font-bold uppercase tracking-[0.22em]">
              <span className="h-px w-9 bg-[#C90070]" />
              SOHOJ Services in Tezpur
            </p>

            <h1 className="font-serif text-5xl font-normal leading-[1.05] tracking-[-0.04em] sm:text-6xl lg:text-7xl">
              {service.title}
            </h1>

            <p className="mt-3 text-sm font-medium text-[#C90070]">
              Service available in Tezpur, Assam
            </p>

            <p className="mt-7 text-base leading-8 text-[#10284C]/70">
              {service.description}
            </p>

            {service.details?.trim() && (
              <section className="mt-8 border-t border-[#10284C]/10 pt-7">
                <h2 className="font-serif text-3xl">
                  About {service.title}
                </h2>

                <div className="mt-4 whitespace-pre-line text-sm leading-8 text-[#10284C]/75">
                  {service.details}
                </div>
              </section>
            )}

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <a
                href={`tel:+${BUSINESS_PHONE}`}
                className="inline-flex items-center justify-center gap-3 bg-[#C90070] px-7 py-4 text-sm font-semibold text-white transition duration-300 hover:bg-[#A8005D]"
              >
                <Phone size={18} />
                Call for Service
              </a>

              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Enquire about ${service.title} on WhatsApp`}
                className="group inline-flex items-center justify-center gap-3 rounded-lg border border-[#00A859] bg-[#00A859] px-7 py-4 text-sm font-semibold text-white shadow-lg shadow-green-600/15 transition-all duration-300 hover:-translate-y-0.5 hover:border-[#008F4C] hover:bg-[#008F4C] hover:shadow-xl"
              >
                <FaWhatsapp
                  size={23}
                  aria-hidden="true"
                  className="shrink-0"
                />

                <span>Enquire on WhatsApp</span>

                <ArrowUpRight
                  size={18}
                  aria-hidden="true"
                  className="shrink-0 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                />
              </a>
            </div>

            <p className="mt-6 text-xs leading-6 text-[#10284C]/55">
              Contact <strong>SOHOJ</strong> to discuss your
              requirements and arrange your service in Tezpur, Assam.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
