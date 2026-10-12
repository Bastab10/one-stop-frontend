"use client";

import { Suspense, useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, ArrowUpRight, Phone } from "lucide-react";

const BUSINESS_PHONE = "916026936104";
const API_URL =
  process.env.NEXT_PUBLIC_API_URL || "https://one-stop-backend-production.up.railway.app/api";

type Service = {
  _id: string;
  number: number;
  title: string;
  description: string;
  details?: string;
  image: string;
  active: boolean;
};

export default function ServiceDetailsPage() {
  return (
    <Suspense
      fallback={
        <main className="min-h-screen bg-white px-5 py-24 text-center text-[#10284C]">
          Loading service details...
        </main>
      }
    >
      <ServiceDetailsContent />
    </Suspense>
  );
}

function ServiceDetailsContent() {
  const params = useParams<{ id: string }>();
  const id = params.id;

  const [service, setService] = useState<Service | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    if (!id) return;

    const controller = new AbortController();

    async function fetchService() {
      try {
        const response = await fetch(`${API_URL}/services`, {
          signal: controller.signal,
          cache: "no-store",
        });

        if (!response.ok) {
          throw new Error("Unable to fetch services");
        }

        const data = await response.json();
        const services: Service[] = Array.isArray(data.services)
          ? data.services
          : [];

        const found = services.find(
          (item) => item._id === id && item.active
        );

        setService(found ?? null);
      } catch (err) {
        if (err instanceof Error && err.name !== "AbortError") {
          console.error("Failed to load service details:", err);
          setError(true);
        }
      } finally {
        if (!controller.signal.aborted) {
          setLoading(false);
        }
      }
    }

    void fetchService();

    return () => controller.abort();
  }, [id]);

  if (loading) {
    return (
      <main className="min-h-screen bg-white px-5 py-24 text-center text-[#10284C]">
        Loading service details...
      </main>
    );
  }

  if (error || !service) {
    return (
      <main className="flex min-h-screen flex-col items-center justify-center bg-white px-5 text-center text-[#10284C]">
        <h1 className="font-serif text-4xl">
          {error ? "Unable to load service" : "Service not found"}
        </h1>
        <p className="mt-3 text-sm text-[#10284C]/65">
          This service may be unavailable or inactive.
        </p>
        <Link
          href="/#services"
          className="mt-6 inline-flex items-center gap-2 text-sm font-semibold"
        >
          <ArrowLeft size={17} />
          Back to Services
        </Link>
      </main>
    );
  }

  const whatsappMessage = `Hello SAHAJ, I am interested in ${service.title}. Please share more details.`;
  const whatsappUrl = `https://wa.me/${BUSINESS_PHONE}?text=${encodeURIComponent(
    whatsappMessage
  )}`;

  return (
    <main className="min-h-screen bg-white text-[#10284C]">
      <div className="mx-auto max-w-[1400px] px-5 py-10 sm:px-8 sm:py-16 lg:px-14">
        <Link
          href="/#services"
          className="mb-10 inline-flex items-center gap-2 text-sm font-semibold text-[#10284C]/70 transition hover:text-[#B58A12]"
        >
          <ArrowLeft size={17} />
          Back to Services
        </Link>

        <div className="grid items-start gap-10 lg:grid-cols-2 lg:gap-16">
          <div className="relative overflow-hidden bg-[#F8F7F3] lg:sticky lg:top-8">
            <img
              src={service.image}
              alt={service.title}
              className="aspect-[4/3] w-full object-cover"
            />
            <span className="absolute left-5 top-5 bg-white px-4 py-3 text-xs font-bold tracking-widest">
              SERVICE {String(service.number).padStart(2, "0")}
            </span>
          </div>

          <div>
            <p className="mb-6 flex items-center gap-3 text-xs font-bold uppercase tracking-[0.22em]">
              <span className="h-px w-9 bg-[#DCAF24]" />
              Discover what we do
            </p>

            <h1 className="font-serif text-5xl font-normal leading-[1.05] tracking-[-0.04em] sm:text-6xl lg:text-7xl">
              {service.title}
            </h1>

            <p className="mt-7 text-base leading-8 text-[#10284C]/70">
              {service.description}
            </p>

            {service.details?.trim() && (
              <section className="mt-8 border-t border-[#10284C]/10 pt-7">
                <h2 className="font-serif text-3xl">About this service</h2>
                <div className="mt-4 whitespace-pre-line text-sm leading-8 text-[#10284C]/75">
                  {service.details}
                </div>
              </section>
            )}

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <a
                href={`tel:+${BUSINESS_PHONE}`}
                className="inline-flex items-center justify-center gap-3 bg-[#10284C] px-7 py-4 text-sm font-semibold text-white transition hover:bg-[#1B3B69]"
              >
                <Phone size={18} />
                Call for Service
              </a>

              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 border border-[#10284C]/20 px-7 py-4 text-sm font-semibold transition hover:border-[#DCAF24]"
              >
                Enquire on WhatsApp
                <ArrowUpRight size={18} />
              </a>
            </div>

            <p className="mt-6 text-xs leading-6 text-[#10284C]/55">
              Contact{" "}
              <strong className="font-bold">SAHAJ</strong> to discuss your
              requirements and arrange your service in Tezpur, Assam.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}