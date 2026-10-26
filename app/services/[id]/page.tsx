
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

type SEOConfig = {
  title: string;
  description: string;
  keywords: string[];
};

const SEO_BY_SLUG: Record<string, SEOConfig> = {
  "ac-cleaning-maintenance": {
    title: "AC Servicing, Cleaning & Maintenance in Tezpur",
    description:
      "Looking for AC servicing in Tezpur? Contact SOHOJ for AC cleaning and maintenance services in Tezpur, Assam.",
    keywords: [
      "AC servicing in Tezpur",
      "AC maintenance in Tezpur",
      "AC cleaning in Tezpur",
      "air conditioner service Tezpur",
    ],
  },
  "electrician-services": {
    title: "Electrician Services in Tezpur",
    description:
      "Find electrician services in Tezpur, Assam through SOHOJ for your electrical service needs.",
    keywords: [
      "electrician in Tezpur",
      "electrical repair Tezpur",
      "electrician services Tezpur",
    ],
  },
  "painting-services": {
    title: "Painting Services in Tezpur",
    description:
      "Looking for painting services in Tezpur? Explore home and property painting services through SOHOJ.",
    keywords: [
      "painting services in Tezpur",
      "house painter Tezpur",
      "home painting Tezpur",
    ],
  },
  "carpentry-services": {
    title: "Carpenter Services in Tezpur",
    description:
      "Explore carpenter and carpentry services in Tezpur, Assam through SOHOJ.",
    keywords: [
      "carpenter in Tezpur",
      "carpentry services Tezpur",
      "furniture repair Tezpur",
    ],
  },
  "plumbing-services": {
    title: "Plumbing Services in Tezpur",
    description:
      "Find plumbing services in Tezpur, Assam through SOHOJ for your plumbing needs.",
    keywords: [
      "plumber in Tezpur",
      "plumbing services Tezpur",
      "plumbing repair Tezpur",
    ],
  },
  "masonry-construction-services": {
    title: "Construction & Masonry Services in Tezpur",
    description:
      "Explore masonry and construction services in Tezpur, Assam through SOHOJ.",
    keywords: [
      "construction services in Tezpur",
      "mason in Tezpur",
      "masonry services Tezpur",
    ],
  },
  "catering-services": {
    title: "Catering Services in Tezpur",
    description:
      "Looking for catering services in Tezpur? Explore catering options for events and occasions through SOHOJ.",
    keywords: [
      "catering services in Tezpur",
      "caterers in Tezpur",
      "event catering Tezpur",
    ],
  },
  "event-decoration-services": {
    title: "Event Decoration Services in Tezpur",
    description:
      "Explore event and party decoration services in Tezpur, Assam through SOHOJ.",
    keywords: [
      "event decoration in Tezpur",
      "event decorators Tezpur",
      "party decoration Tezpur",
    ],
  },
  "sound-system-services": {
    title: "Sound System Services in Tezpur",
    description:
      "Explore sound system services for events and occasions in Tezpur through SOHOJ.",
    keywords: [
      "sound system in Tezpur",
      "sound system rental Tezpur",
      "event sound services Tezpur",
    ],
  },
  "lighting-services": {
    title: "Lighting & Decoration Services in Tezpur",
    description:
      "Explore lighting and decoration services for events in Tezpur, Assam through SOHOJ.",
    keywords: [
      "lighting services in Tezpur",
      "event lighting Tezpur",
      "decoration lights Tezpur",
    ],
  },
  "band-party-services": {
    title: "Band Party Services in Tezpur",
    description:
      "Find band party services for weddings and celebrations in Tezpur through SOHOJ.",
    keywords: [
      "band party in Tezpur",
      "wedding band Tezpur",
      "marriage band party Tezpur",
    ],
  },
  "refrigerator-servicing-repairing": {
    title: "Refrigerator Repair Services in Tezpur",
    description:
      "Looking for refrigerator repair in Tezpur? Explore fridge servicing and repair options through SOHOJ.",
    keywords: [
      "refrigerator repair in Tezpur",
      "fridge repair Tezpur",
      "refrigerator servicing Tezpur",
    ],
  },
  "negara-naam-party": {
    title: "Naam Party Services in Tezpur",
    description:
      "Explore Negara Naam Party services for cultural and religious occasions in Tezpur through SOHOJ.",
    keywords: [
      "naam party in Tezpur",
      "Negara Naam Party Tezpur",
      "traditional naam party Assam",
    ],
  },
  "tiffin-service": {
    title: "Tiffin Service in Tezpur",
    description:
      "Looking for tiffin service in Tezpur? Explore daily meal service options through SOHOJ.",
    keywords: [
      "tiffin service in Tezpur",
      "daily meal service Tezpur",
      "tiffin provider Tezpur",
    ],
  },
  "toilet-cleaning-services": {
    title: "Toilet Cleaning Services in Tezpur",
    description:
      "Explore toilet and bathroom cleaning services in Tezpur, Assam through SOHOJ.",
    keywords: [
      "toilet cleaning in Tezpur",
      "bathroom cleaning Tezpur",
      "toilet cleaning services Tezpur",
    ],
  },
  "birthday-party-arrangement-services": {
    title: "Birthday Party Arrangement in Tezpur",
    description:
      "Plan a birthday celebration with party arrangement and decoration services in Tezpur through SOHOJ.",
    keywords: [
      "birthday party planner in Tezpur",
      "birthday decoration Tezpur",
      "birthday party arrangement Tezpur",
    ],
  },
  "car-rental-services": {
    title: "Car Rental Services in Tezpur",
    description:
      "Looking for car rental in Tezpur? Explore vehicle rental options through SOHOJ.",
    keywords: [
      "car rental in Tezpur",
      "car hire Tezpur",
      "rental car Tezpur",
    ],
  },
    "House Lifting Service": {
  title: "House Lifting Service in Tezpur & Assam | SOHOJ",
  description:
    "Looking for house lifting services in Tezpur or anywhere in Assam? SOHOJ provides house lifting and building raising solutions across Tezpur and all Assam.",
  keywords: [
    "house lifting service in Tezpur",
    "house lifting service in Assam",
    "house lifting services across Assam",
    "house raising service in Tezpur",
    "house raising service in Assam",
    "building lifting service in Tezpur",
    "building lifting service in Assam",
    "old house lifting in Assam",
    "house lifting contractor in Tezpur",
    "house lifting contractor in Assam",
  ],
},
};

async function getServices(): Promise<Service[]> {
  try {
    const response = await fetch(
      `${API_URL.replace(/\/+$/, "")}/services`,
      { cache: "no-store" },
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
  const customSEO = SEO_BY_SLUG[slug];

  const title = customSEO
    ? `${customSEO.title} | SOHOJ`
    : `${service.title} in Tezpur, Assam | SOHOJ`;

  const description = (
    customSEO?.description ||
    `${service.description} Contact SOHOJ for ${service.title} in Tezpur, Assam. Enquire today.`
  )
    .replace(/\s+/g, " ")
    .slice(0, 160);

  const keywords = customSEO?.keywords || [
    `${service.title} in Tezpur`,
    `${service.title} services in Tezpur`,
    `${service.title} Assam`,
  ];

  return {
    title,
    description,
    keywords,
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title,
      description,
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
