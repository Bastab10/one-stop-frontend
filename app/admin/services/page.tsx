"use client";

import { useCallback, useEffect, useState } from "react";
import { useRouter } from "next/navigation";

type Service = {
  _id: string;
  number: number;
  title: string;
  description: string;
  image: string;
  active: boolean;
};

const API_URL =
  process.env.NEXT_PUBLIC_API_URL || "https://one-stop-backend-sooty.vercel.app.app/api";

export default function AdminServicesPage() {
  const router = useRouter();
  const [services, setServices] = useState<Service[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const loadServices = useCallback(async () => {
    try {
      const response = await fetch(`${API_URL}/services`, {
        credentials: "include",
        cache: "no-store",
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Unable to load services.");
      }

      setServices(data.services ?? []);
      setError("");
    } catch (err) {
      setError(
        err instanceof Error ? err.message : "Unable to load services."
      );
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    let cancelled = false;

    async function fetchServices() {
      try {
        const response = await fetch(`${API_URL}/services`, {
          credentials: "include",
          cache: "no-store",
        });

        const data = await response.json();

        if (!response.ok) {
          throw new Error(data.message || "Unable to load services.");
        }

        if (!cancelled) {
          setServices(data.services ?? []);
          setError("");
        }
      } catch (err) {
        if (!cancelled) {
          setError(
            err instanceof Error ? err.message : "Unable to load services."
          );
        }
      } finally {
        if (!cancelled) {
          setLoading(false);
        }
      }
    }

    void fetchServices();

    return () => {
      cancelled = true;
    };
  }, []);

  async function handleLogout() {
    try {
      await fetch(`${API_URL}/auth/logout`, {
        method: "POST",
        credentials: "include",
      });
    } finally {
      router.replace("/admin/login");
      router.refresh();
    }
  }

  async function handleDelete(id: string) {
    if (!window.confirm("Are you sure you want to delete this service?")) {
      return;
    }

    try {
      const response = await fetch(`${API_URL}/services/${id}`, {
        method: "DELETE",
        credentials: "include",
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Unable to delete service.");
      }

      await loadServices();
    } catch (err) {
      alert(err instanceof Error ? err.message : "Unable to delete service.");
    }
  }

  return (
    <main className="min-h-screen bg-[#F8F7F3] px-5 py-8 text-[#10284C] sm:px-8">
      <div className="mx-auto max-w-7xl">
        <header className="flex flex-wrap items-center justify-between gap-4 border-b border-[#10284C]/10 pb-6">
          <div>
            <p className="font-serif text-2xl"><strong className="font-bold">SOHOJ</strong></p>
            <p className="text-sm text-[#10284C]/60">Admin Dashboard</p>
          </div>

          <button
            onClick={handleLogout}
            className="border border-[#10284C]/20 px-4 py-2 text-sm hover:bg-white"
          >
            Logout
          </button>
        </header>

        <section className="mt-8 flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="text-xs font-bold uppercase tracking-widest text-[#B58A12]">
              Manage your business
            </p>
            <h1 className="mt-2 font-serif text-4xl">Your Services</h1>
            <p className="mt-2 text-sm text-[#10284C]/60">
              Add and manage the services displayed on your website.
            </p>
          </div>

          <button
            onClick={() => router.push("/admin/services/new")}
            className="bg-[#10284C] px-5 py-3 text-sm font-semibold text-white hover:bg-[#1B3C68]"
          >
            + Add Service
          </button>
        </section>

        <section className="mt-8 grid grid-cols-2 gap-4">
          <div className="border border-[#10284C]/10 bg-white p-5">
            <p className="text-sm text-[#10284C]/60">Total Services</p>
            <p className="mt-2 text-3xl font-semibold">{services.length}</p>
          </div>

          <div className="border border-[#10284C]/10 bg-white p-5">
            <p className="text-sm text-[#10284C]/60">Active Services</p>
            <p className="mt-2 text-3xl font-semibold">
              {services.filter((service) => service.active).length}
            </p>
          </div>
        </section>

        <section className="mt-8 border border-[#10284C]/10 bg-white">
          <div className="border-b border-[#10284C]/10 p-5">
            <h2 className="font-serif text-2xl">All Services</h2>
          </div>

          {loading ? (
            <p className="p-8 text-sm">Loading services...</p>
          ) : error ? (
            <div className="p-6">
              <p className="text-sm text-red-700">{error}</p>
              <button
                onClick={() => {
                  setLoading(true);
                  void loadServices();
                }}
                className="mt-3 border px-4 py-2 text-sm"
              >
                Try Again
              </button>
            </div>
          ) : services.length === 0 ? (
            <div className="p-8 text-center">
              <h3 className="font-serif text-2xl">No services yet</h3>
              <p className="mt-2 text-sm text-[#10284C]/60">
                Add your first service to get started.
              </p>
            </div>
          ) : (
            <div className="divide-y divide-[#10284C]/10">
              {services.map((service) => (
                <article
                  key={service._id}
                  className="flex flex-col justify-between gap-4 p-5 sm:flex-row sm:items-center"
                >
                  <div className="flex min-w-0 items-center gap-4">
                    <span className="flex h-12 w-12 shrink-0 items-center justify-center bg-[#F5CA35]/20 font-semibold">
                      {String(service.number).padStart(2, "0")}
                    </span>

                    <div className="min-w-0">
                      <h3 className="font-semibold">{service.title}</h3>
                      <p className="mt-1 text-sm text-[#10284C]/60">
                        {service.description}
                      </p>
                      <p className="mt-1 text-xs text-[#10284C]/50">
                        {service.active ? "Active" : "Inactive"}
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-2">
                    <button
                      onClick={() =>
                        router.push(`/admin/services/${service._id}/edit`)
                      }
                      className="border border-[#10284C]/20 px-4 py-2 text-sm"
                    >
                      Edit
                    </button>

                    <button
                      onClick={() => void handleDelete(service._id)}
                      className="border border-red-200 px-4 py-2 text-sm text-red-700"
                    >
                      Delete
                    </button>
                  </div>
                </article>
              ))}
            </div>
          )}
        </section>
      </div>
    </main>
  );
}