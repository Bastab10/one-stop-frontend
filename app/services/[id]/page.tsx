
import type { Metadata } from "next";
import { cache, Suspense } from "react";
import { notFound, permanentRedirect } from "next/navigation";
import ServiceDetailsClient from "./ServiceDetailsClient";

const API_URL =
  process.env.NEXT_PUBLIC_API_URL ||
  "https://one-stop-backend-sooty.vercel.app/api";

const SITE_URL = "https://www.sohojservices.in";

type Service = {
  _id: string;
  number: number;
  title: string;
  description: string;
  details?: string;
  image: string;
  active: boolean;
};

async function getServices(): Promise<Service[]> {
  try {
    const response = await fetch(
      `${API_URL.replace(/\/+$/, "")}/services`,
      {
        cache: "no-store",
      },
    );

    if (!response.ok) {
      console.error("Services API returned:", response.status);
      return [];
    }

    const data = await response.json();

    return Array.isArray(data.services) ? data.services : [];
  } catch (error) {
    console.error("Failed to fetch services:", error);
    return [];
  }
}

function slugify(value: string) {
  return value
    .normalize("NFKD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}

const getService = cache(async (identifier: string) => {
  const services = await getServices();
  const activeServices = services.filter((service) => service.active);

  return (
    activeServices.find((service) => service._id === identifier) ??
    activeServices.find(
      (service) => slugify(service.title) === identifier,
    )
  );
});

type Props = {
  params: Promise<{ id: string }>;
};

export async function generateMetadata({
  params,
}: Props): Promise<Metadata> {
  const { id } = await params;
  const service = await getService(id);

  if (!service) {
    return {
      title: "Service Not Found | SOHOJ",
      robots: {
        index: false,
        follow: false,
      },
    };
  }

  const slug = slugify(service.title);
  const canonicalUrl = `${SITE_URL}/services/${slug}`;
  const title = `${service.title} in Tezpur, Assam | SOHOJ`;

  const description =
    `${service.description} Contact SOHOJ for ${service.title} ` +
    "in Tezpur, Assam. Enquire today.";

  return {
    title,
    description: description.slice(0, 160),
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title,
      description: description.slice(0, 160),
      url: canonicalUrl,
      siteName: "SOHOJ",
      type: "website",
      images: service.image ? [service.image] : [],
    },
    robots: {
      index: true,
      follow: true,
    },
  };
}

function LoadingService() {
  return (
    <main className="min-h-screen bg-white px-5 py-24 text-center text-[#10284C]">
      Loading service details...
    </main>
  );
}

async function ServiceDetailsContent({ id }: { id: string }) {
  const service = await getService(id);

  if (!service) {
    notFound();
  }

  const slug = slugify(service.title);

  if (id !== slug) {
    permanentRedirect(`/services/${slug}`);
  }

  return <ServiceDetailsClient service={service} />;
}

export default async function ServiceDetailsPage({
  params,
}: Props) {
  const { id } = await params;

  return (
    <Suspense fallback={<LoadingService />}>
      <ServiceDetailsContent id={id} />
    </Suspense>
  );
}
