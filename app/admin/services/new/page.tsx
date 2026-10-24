
"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

const API_URL =
  process.env.NEXT_PUBLIC_API_URL ||
  "https://one-stop-backend-sooty.vercel.app/api";

export default function NewServicePage() {
  const router = useRouter();

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [details, setDetails] = useState("");
  const [image, setImage] = useState<File | null>(null);
  const [preview, setPreview] = useState("");
  const [loading, setLoading] = useState(true);
  const [authorized, setAuthorized] = useState(false);
  const [error, setError] = useState("");

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
          setError("Unable to verify your session. Please try again.");
        }
      } finally {
        if (!cancelled) {
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
    return () => {
      if (preview) {
        URL.revokeObjectURL(preview);
      }
    };
  }, [preview]);

  function handleImageChange(file: File | null) {
    if (file && !["image/jpeg", "image/png", "image/webp"].includes(file.type)) {
      setError("Only JPG, PNG or WebP images are allowed.");
      return;
    }

    if (file && file.size > 5 * 1024 * 1024) {
      setError("Image size must be 5 MB or less.");
      return;
    }

    setError("");
    setImage(file);
    setPreview(file ? URL.createObjectURL(file) : "");
  }

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError("");

    if (!title.trim() || !description.trim()) {
      setError("Service name and description are required.");
      return;
    }

    if (!image) {
      setError("Please select a service image.");
      return;
    }

    if (!["image/jpeg", "image/png", "image/webp"].includes(image.type)) {
      setError("Only JPG, PNG or WebP images are allowed.");
      return;
    }

    if (image.size > 5 * 1024 * 1024) {
      setError("Image size must be 5 MB or less.");
      return;
    }

    setLoading(true);

    try {
      const authResponse = await fetch(`${API_URL}/auth/me`, {
        method: "GET",
        credentials: "include",
        cache: "no-store",
      });

      if (!authResponse.ok) {
        router.replace("/admin/login");
        return;
      }

      const formData = new FormData();
      formData.append("image", image);

      const uploadResponse = await fetch(`${API_URL}/upload`, {
        method: "POST",
        credentials: "include",
        body: formData,
      });

      const uploadData = await uploadResponse.json();

      if (!uploadResponse.ok || !uploadData.image) {
        if (uploadResponse.status === 401) {
          router.replace("/admin/login");
          return;
        }

        throw new Error(uploadData.message || "Image upload failed.");
      }

      const serviceResponse = await fetch(`${API_URL}/services`, {
        method: "POST",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          title: title.trim(),
          description: description.trim(),
          details: details.trim(),
          image: uploadData.image,
        }),
      });

      const serviceData = await serviceResponse.json();

      if (!serviceResponse.ok) {
        if (serviceResponse.status === 401) {
          router.replace("/admin/login");
          return;
        }

        throw new Error(serviceData.message || "Unable to save service.");
      }

      router.replace("/admin/services");
      router.refresh();
    } catch (err) {
      setError(
        err instanceof Error ? err.message : "Something went wrong."
      );
    } finally {
      setLoading(false);
    }
  }

  if (!authorized) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-[#FDF2F8] px-5 text-[#10284C]">
        <div className="text-center">
          <p className="text-sm">
            {error || "Verifying admin access..."}
          </p>

          {error && (
            <button
              type="button"
              onClick={() => window.location.reload()}
              className="mt-4 border border-[#C90070]/30 px-4 py-2 text-sm transition-colors hover:bg-[#FCE7F3]"
            >
              Retry
            </button>
          )}
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-[#FDF2F8] px-5 py-8 text-[#10284C] sm:px-8">
      <div className="mx-auto max-w-3xl">
        <header className="flex items-center justify-between border-b border-[#10284C]/10 pb-6">
          <div>
            <p className="font-serif text-2xl">
              SOHOJ<span className="text-[#C90070]">.</span>
            </p>
            <p className="text-sm text-[#10284C]/60">
              Admin Dashboard
            </p>
          </div>

          <button
            type="button"
            onClick={() => router.push("/admin/services")}
            className="border border-[#C90070]/30 px-4 py-2 text-sm transition-colors hover:bg-[#FCE7F3]"
          >
            Back
          </button>
        </header>

        <section className="mt-8">
          <p className="text-xs font-bold uppercase tracking-widest text-[#C90070]">
            Service Management
          </p>

          <h1 className="mt-2 font-serif text-4xl">
            Add New Service
          </h1>

          <p className="mt-2 text-sm text-[#10284C]/60">
            Add the name, descriptions and image for your service.
          </p>
        </section>

        <form
          onSubmit={handleSubmit}
          className="mt-8 space-y-6 border border-[#10284C]/10 bg-white p-6 sm:p-8"
        >
          <div>
            <label
              htmlFor="title"
              className="mb-2 block text-sm font-semibold"
            >
              Service Name
            </label>

            <input
              id="title"
              type="text"
              value={title}
              onChange={(event) => setTitle(event.target.value)}
              placeholder="e.g. AC Repairing & Maintenance"
              maxLength={100}
              required
              className="w-full border border-[#10284C]/20 px-4 py-3 outline-none transition-colors focus:border-[#C90070] focus:ring-1 focus:ring-[#C90070]/20"
            />
          </div>

          <div>
            <label
              htmlFor="description"
              className="mb-2 block text-sm font-semibold"
            >
              Short Description
            </label>

            <textarea
              id="description"
              value={description}
              onChange={(event) => setDescription(event.target.value)}
              placeholder="A short description for the service card..."
              rows={3}
              maxLength={300}
              required
              className="w-full resize-y border border-[#10284C]/20 px-4 py-3 outline-none transition-colors focus:border-[#C90070] focus:ring-1 focus:ring-[#C90070]/20"
            />

            <p className="mt-1 text-right text-xs text-[#10284C]/50">
              {description.length}/300 characters
            </p>
          </div>

          <div>
            <label
              htmlFor="details"
              className="mb-2 block text-sm font-semibold"
            >
              Detailed Information
            </label>

            <textarea
              id="details"
              value={details}
              onChange={(event) => setDetails(event.target.value)}
              placeholder="Explain the service, what's included, who it's for and any other useful information..."
              rows={7}
              maxLength={5000}
              className="w-full resize-y border border-[#10284C]/20 px-4 py-3 outline-none transition-colors focus:border-[#C90070] focus:ring-1 focus:ring-[#C90070]/20"
            />

            <p className="mt-1 text-right text-xs text-[#10284C]/50">
              {details.length}/5000 characters
            </p>
          </div>

          <div>
            <label
              htmlFor="image"
              className="mb-2 block text-sm font-semibold"
            >
              Service Image
            </label>

            <input
              id="image"
              type="file"
              accept="image/jpeg,image/png,image/webp"
              required
              onChange={(event) =>
                handleImageChange(event.target.files?.[0] ?? null)
              }
              className="block w-full border border-[#10284C]/20 p-3 text-sm file:mr-4 file:cursor-pointer file:border-0 file:bg-[#C90070] file:px-4 file:py-2 file:font-medium file:text-white file:transition-colors hover:file:bg-[#A8005D]"
            />

            <p className="mt-2 text-xs text-[#10284C]/60">
              JPG, PNG or WebP. Maximum size: 5 MB.
            </p>

            {preview && (
              <div className="mt-4">
                <p className="mb-2 text-sm font-medium">
                  Image Preview
                </p>

                <img
                  src={preview}
                  alt="Selected service preview"
                  className="h-56 w-full rounded border border-[#C90070]/15 object-cover sm:w-80"
                />
              </div>
            )}
          </div>

          {error && (
            <p
              role="alert"
              className="border border-red-200 bg-red-50 p-3 text-sm text-red-700"
            >
              {error}
            </p>
          )}

          <div className="flex flex-wrap gap-3 border-t border-[#10284C]/10 pt-5">
            <button
              type="submit"
              disabled={loading}
              className="bg-[#C90070] px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#A8005D] disabled:cursor-not-allowed disabled:opacity-60"
            >
              {loading ? "Uploading & Saving..." : "Save Service"}
            </button>

            <button
              type="button"
              onClick={() => router.push("/admin/services")}
              disabled={loading}
              className="border border-[#C90070]/30 px-6 py-3 text-sm transition-colors hover:bg-[#FCE7F3] disabled:opacity-60"
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </main>
  );
}
