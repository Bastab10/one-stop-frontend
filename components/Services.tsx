
"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { ArrowUpRight, Phone } from "lucide-react";

const BUSINESS_PHONE = "916001353032";
const API_URL =
  process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000/api";

type Service = {
  _id: string;
  number: number;
  title: string;
  description: string;
  image: string;
  active: boolean;
};

export default function Services() {
  const [services, setServices] = useState<Service[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const controller = new AbortController();

    async function fetchServices() {
      try {
        const response = await fetch(`${API_URL}/services`, {
          signal: controller.signal,
          cache: "no-store",
        });

        if (!response.ok) {
          throw new Error("Unable to fetch services");
        }

        const data = await response.json();

        setServices(
          (Array.isArray(data.services) ? data.services : []).filter(
            (service: Service) => service.active
          )
        );
      } catch (err) {
        if (err instanceof Error && err.name !== "AbortError") {
          console.error("Failed to load services:", err);
          setError(true);
        }
      } finally {
        if (!controller.signal.aborted) {
          setLoading(false);
        }
      }
    }

    void fetchServices();

    return () => controller.abort();
  }, []);

  return (
    <section
      id="services"
      className="bg-white py-20 text-[#10284C] sm:py-28"
    >
      <div className="mx-auto max-w-[1600px] px-5 sm:px-8 lg:px-14 xl:px-20">
        <div className="mb-12 flex flex-col gap-6 md:flex-row md:items-end md:justify-between lg:mb-16">
          <div>
            <p className="mb-5 flex items-center gap-3 text-[10px] font-bold uppercase tracking-[0.22em] sm:text-xs">
              <span className="h-px w-9 bg-[#DCAF24]" />
              Discover what we do
            </p>

            <h2 className="font-serif text-5xl font-normal leading-[0.95] tracking-[-0.05em] sm:text-7xl lg:text-8xl">
              Services for
              <br />
              <span className="italic text-[#DCAF24]">
                every occasion.
              </span>
            </h2>
          </div>

        
        </div>

        {loading ? (
          <p className="py-10 text-sm text-[#10284C]/65">
            Loading services...
          </p>
        ) : error ? (
          <p className="py-10 text-sm text-red-600">
            Unable to load services. Please try again later.
          </p>
        ) : services.length === 0 ? (
          <p className="py-10 text-sm text-[#10284C]/65">
            No services are available right now.
          </p>
        ) : (
          <div className="grid grid-cols-1 items-stretch gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
            {services.map((service) => (
              <article
                key={service._id}
                className="group flex h-full flex-col overflow-hidden border border-[#10284C]/10 bg-white"
              >
                <Link
                  href={`/services/${service._id}`}
                  aria-label={`View details for ${service.title}`}
                  className="relative block h-56 shrink-0 overflow-hidden bg-white sm:h-60"
                >
                  <img
                    src={service.image}
                    alt={service.title}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />

                  <span className="absolute left-4 top-4 bg-white px-3 py-2 text-[10px] font-bold tracking-widest text-[#10284C]">
                    {String(service.number).padStart(2, "0")}
                  </span>

                  <span className="absolute bottom-4 right-4 flex h-10 w-10 items-center justify-center rounded-full bg-[#F5CA35] text-[#10284C] transition-transform duration-300 group-hover:rotate-45">
                    <ArrowUpRight size={19} />
                  </span>
                </Link>

                <div className="flex flex-1 flex-col p-5 sm:p-6">
                  <Link
                    href={`/services/${service._id}`}
                    className="block"
                  >
                    <h3 className="font-serif text-2xl leading-tight tracking-tight">
                      {service.title}
                    </h3>

                    <p className="mt-2 text-sm leading-6 text-[#10284C]/65">
                      {service.description}
                    </p>
                  </Link>

                  <a
                    href={`tel:+${BUSINESS_PHONE}`}
                    aria-label={`Call for ${service.title}`}
                    className="mt-auto flex items-center justify-between border-t border-[#10284C]/10 pt-4 text-[10px] font-bold uppercase tracking-[0.12em] text-[#B58A12]"
                  >
                    <span className="flex items-center gap-2">
                      <Phone size={13} />
                      Call for Service
                    </span>

                    <ArrowUpRight size={15} />
                  </a>
                </div>
              </article>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
