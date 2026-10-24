
import type { MetadataRoute } from "next";

const BASE_URL = "https://www.sohojservices.in";

const API_URL =
  process.env.NEXT_PUBLIC_API_URL ||
  "https://one-stop-backend-sooty.vercel.app/api";

type Service = {
  _id: string;
  title: string;
  active: boolean;
};

function slugify(value: string) {
  return value
    .normalize("NFKD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const pages: MetadataRoute.Sitemap = [
    {
      url: `${BASE_URL}/`,
      changeFrequency: "weekly",
      priority: 1,
    },
  ];

  try {
    const response = await fetch(
      `${API_URL.replace(/\/+$/, "")}/services`,
      {
        next: { revalidate: 3600 },
      },
    );

    if (!response.ok) {
      throw new Error(`Services API returned ${response.status}`);
    }

    const data = await response.json();

    const services: Service[] = Array.isArray(data.services)
      ? data.services
      : [];

    const servicePages: MetadataRoute.Sitemap = services
      .filter(
        (service) =>
          service.active &&
          service._id &&
          service.title?.trim(),
      )
      .map((service) => ({
        url: `${BASE_URL}/services/${slugify(service.title)}`,
        changeFrequency: "weekly" as const,
        priority: 0.8,
      }));

    return [...pages, ...servicePages];
  } catch (error) {
    console.error("Failed to generate service sitemap:", error);
    return pages;
  }
}
