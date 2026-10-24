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
  process.env.NEXT_PUBLIC_API_URL ||
  "https://one-stop-backend-sooty.vercel.app/api";

export default function AdminServicesPage() {
  const router = useRouter();

  const [services, setServices] = useState<Service[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [authorized, setAuthorized] = useState(false);
  const [loggingOut, setLoggingOut] = useState(false);

  const loadServices = useCallback(async () => {
    setLoading(true);
    setError("");

    try {
      const response = await fetch(`${API_URL}/services`, {
        method: "GET",
        credentials: "include",
        cache: "no-store",
      });

      if (response.status === 401) {
        router.replace("/admin/login");
        return;
      }

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Unable to load services.");
      }

      setServices(data.services ?? []);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Unable to load services.");
    } finally {
      setLoading(false);
    }
  }, [router]);

  useEffect(() => {
    let cancelled = false;

    async function verifyAdmin() {
      try {
        const response = await fetch(`${API_URL}/auth/me`, {
          method: "GET",
          credentials: "include",
          cache: "no-store",
        });

        if (!response.ok) {
          router.replace("/admin/login");
          return;
        }

        if (!cancelled) {
          setAuthorized(true);
        }
      } catch {
        if (!cancelled) {
          setError("Unable to verify your session. Check your connection.");
          setLoading(false);
        }
      }
    }

    void verifyAdmin();

    return () => {
      cancelled = true;
    };
  }, [router]);

  useEffect(() => {
    if (!authorized) return;

    const controller = new AbortController();

    async function fetchServices() {
      setError("");

      try {
        const response = await fetch(`${API_URL}/services`, {
          method: "GET",
          credentials: "include",
          cache: "no-store",
          signal: controller.signal,
        });

        if (response.status === 401) {
          router.replace("/admin/login");
          return;
        }

        const data = await response.json();

        if (!response.ok) {
          throw new Error(data.message || "Unable to load services.");
        }

        setServices(data.services ?? []);
      } catch (err) {
        if (err instanceof Error && err.name === "AbortError") return;

        setError(
          err instanceof Error ? err.message : "Unable to load services.",
        );
      } finally {
        if (!controller.signal.aborted) {
          setLoading(false);
        }
      }
    }

    void fetchServices();

    return () => {
      controller.abort();
    };
  }, [authorized, router]);

  async function handleLogout() {
    if (loggingOut) return;

    setLoggingOut(true);
    setError("");

    try {
      const response = await fetch(`${API_URL}/auth/logout`, {
        method: "POST",
        credentials: "include",
      });

      if (!response.ok) {
        throw new Error("Logout failed. Please try again.");
      }

      router.replace("/");
      router.refresh();
    } catch (err) {
      setError(err instanceof Error ? err.message : "Unable to log out.");
      setLoggingOut(false);
    }
  }

  async function handleDelete(id: string) {
    if (!window.confirm("Are you sure you want to delete this service?")) {
      return;
    }

    setError("");

    try {
      const response = await fetch(`${API_URL}/services/${id}`, {
        method: "DELETE",
        credentials: "include",
      });

      if (response.status === 401) {
        router.replace("/admin/login");
        return;
      }

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Unable to delete service.");
      }

      await loadServices();
    } catch (err) {
      setError(
        err instanceof Error ? err.message : "Unable to delete service.",
      );
    }
  }

  if (!authorized) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-[#F8F7F3] px-5 text-[#10284C]">
        <div className="text-center">
          <p className="text-sm">{error || "Verifying admin access..."}</p>

          {error && (
            <button
              type="button"
              onClick={() => window.location.reload()}
              className="mt-4 border border-[#10284C]/20 px-4 py-2 text-sm transition hover:bg-white"
            >
              Try Again
            </button>
          )}
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-[#F8F7F3] px-5 py-8 text-[#10284C] sm:px-8">
      <div className="mx-auto max-w-7xl">
        <header className="flex flex-wrap items-center justify-between gap-4 border-b border-[#10284C]/10 pb-6">
          <div>
            <p className="font-serif text-2xl">
              <strong className="font-bold">SOHOJ</strong>
              <span className="text-[#C90070]">.</span>
            </p>
            <p className="text-sm text-[#10284C]/60">Admin Dashboard</p>
          </div>

          <button
            type="button"
            onClick={handleLogout}
            disabled={loggingOut}
            className="border border-[#10284C]/20 px-4 py-2 text-sm transition hover:bg-white disabled:cursor-not-allowed disabled:opacity-60"
          >
            {loggingOut ? "Logging out..." : "Logout"}
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
            type="button"
            onClick={() => router.push("/admin/services/new")}
            className="bg-[#10284C] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#1B3C68]"
          >
            + Add Service
          </button>
        </section>

        {error && (
          <div
            role="alert"
            className="mt-6 flex flex-wrap items-center justify-between gap-3 border border-red-200 bg-red-50 p-4 text-sm text-red-700"
          >
            <p>{error}</p>

            <button
              type="button"
              onClick={() => void loadServices()}
              className="border border-red-200 px-3 py-2 hover:bg-white"
            >
              Retry
            </button>
          </div>
        )}

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
                      type="button"
                      onClick={() =>
                        router.push(`/admin/services/${service._id}/edit`)
                      }
                      className="border border-[#10284C]/20 px-4 py-2 text-sm transition hover:border-[#C90070] hover:text-[#C90070]"
                    >
                      Edit
                    </button>

                    <button
                      type="button"
                      onClick={() => void handleDelete(service._id)}
                      className="border border-red-200 px-4 py-2 text-sm text-red-700 transition hover:bg-red-50"
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
