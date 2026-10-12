
"use client";

import { Suspense, useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";

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

export default function EditServicePage() {
  return (
    <Suspense
      fallback={
        <main className="min-h-screen bg-[#F8F7F3] p-8 text-[#10284C]">
          Loading edit page...
        </main>
      }
    >
      <EditServiceContent />
    </Suspense>
  );
}

function EditServiceContent() {
  const params = useParams<{ id: string }>();
  const id = params.id;
  const router = useRouter();

  const [service, setService] = useState<Service | null>(null);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [details, setDetails] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [active, setActive] = useState(true);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    let cancelled = false;

    async function loadService() {
      try {
        const response = await fetch(`${API_URL}/services`, {
          credentials: "include",
          cache: "no-store",
        });

        const data = await response.json();

        if (!response.ok) {
          throw new Error(data.message || "Unable to load services.");
        }

        const found: Service | undefined = (data.services ?? []).find(
          (item: Service) => item._id === id
        );

        if (!found) {
          throw new Error("Service not found.");
        }

        if (!cancelled) {
          setService(found);
          setTitle(found.title);
          setDescription(found.description);
          setDetails(found.details ?? "");
          setImageUrl(found.image);
          setActive(found.active);
        }
      } catch (err) {
        if (!cancelled) {
          setError(
            err instanceof Error ? err.message : "Unable to load service."
          );
        }
      } finally {
        if (!cancelled) {
          setLoading(false);
        }
      }
    }

    if (id) {
      void loadService();
    }

    return () => {
      cancelled = true;
    };
  }, [id]);

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSaving(true);
    setError("");

    if (imageFile) {
      if (!["image/jpeg", "image/png", "image/webp"].includes(imageFile.type)) {
        setError("Only JPG, PNG or WebP images are allowed.");
        setSaving(false);
        return;
      }

      if (imageFile.size > 5 * 1024 * 1024) {
        setError("Image size must be 5 MB or less.");
        setSaving(false);
        return;
      }
    }

    try {
      let finalImage = imageUrl;

      if (imageFile) {
        const formData = new FormData();
        formData.append("image", imageFile);

        const uploadResponse = await fetch(`${API_URL}/upload`, {
          method: "POST",
          credentials: "include",
          body: formData,
        });

        const uploadData = await uploadResponse.json();

        if (!uploadResponse.ok || !uploadData.image) {
          throw new Error(uploadData.message || "Image upload failed.");
        }

        finalImage = uploadData.image;
      }

      const response = await fetch(`${API_URL}/services/${id}`, {
        method: "PATCH",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          title: title.trim(),
          description: description.trim(),
          details: details.trim(),
          image: finalImage,
          active,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Unable to update service.");
      }

      router.push("/admin/services");
      router.refresh();
    } catch (err) {
      setError(
        err instanceof Error ? err.message : "Unable to update service."
      );
    } finally {
      setSaving(false);
    }
  }

  if (loading) {
    return (
      <main className="min-h-screen bg-[#F8F7F3] p-8 text-[#10284C]">
        Loading service...
      </main>
    );
  }

  if (!service) {
    return (
      <main className="min-h-screen bg-[#F8F7F3] p-8 text-[#10284C]">
        <p role="alert" className="text-red-700">
          {error || "Service not found."}
        </p>
        <button
          type="button"
          onClick={() => router.push("/admin/services")}
          className="mt-4 border px-4 py-2"
        >
          Back to Services
        </button>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-[#F8F7F3] px-5 py-8 text-[#10284C] sm:px-8">
      <div className="mx-auto max-w-3xl">
        <header className="flex items-center justify-between border-b border-[#10284C]/10 pb-6">
          <div>
            <p className="font-serif text-2xl">SAHAJ</p>
            <p className="text-sm text-[#10284C]/60">Edit Service</p>
          </div>
          <button
            type="button"
            onClick={() => router.push("/admin/services")}
            className="border px-4 py-2 text-sm"
          >
            Back
          </button>
        </header>

        <h1 className="mt-8 font-serif text-4xl">Edit Service</h1>
        <p className="mt-2 text-sm text-[#10284C]/60">
          Service No. {service.number}
        </p>

        <form
          onSubmit={handleSubmit}
          className="mt-8 space-y-6 border border-[#10284C]/10 bg-white p-6 sm:p-8"
        >
          <div>
            <label htmlFor="title" className="mb-2 block text-sm font-semibold">
              Service Name
            </label>
            <input
              id="title"
              value={title}
              onChange={(event) => setTitle(event.target.value)}
              maxLength={100}
              required
              className="w-full border px-4 py-3 outline-none focus:border-[#B58A12]"
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
              rows={3}
              maxLength={300}
              required
              className="w-full resize-y border px-4 py-3 outline-none focus:border-[#B58A12]"
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
              rows={7}
              maxLength={5000}
              placeholder="Describe the service in detail..."
              className="w-full resize-y border px-4 py-3 outline-none focus:border-[#B58A12]"
            />
            <p className="mt-1 text-right text-xs text-[#10284C]/50">
              {details.length}/5000 characters
            </p>
          </div>

          <div>
            <p className="mb-2 text-sm font-semibold">Current Image</p>
            <img
              src={imageUrl}
              alt={title}
              className="mb-4 h-48 w-full rounded object-cover sm:w-80"
            />

            <label htmlFor="image" className="mb-2 block text-sm font-semibold">
              Replace Image (Optional)
            </label>
            <input
              id="image"
              type="file"
              accept="image/jpeg,image/png,image/webp"
              onChange={(event) => {
                const file = event.target.files?.[0] ?? null;

                if (file && file.size > 5 * 1024 * 1024) {
                  setError("Image size must be 5 MB or less.");
                  event.target.value = "";
                  setImageFile(null);
                  return;
                }

                setError("");
                setImageFile(file);
              }}
              className="w-full border p-3 text-sm"
            />
            <p className="mt-2 text-xs text-[#10284C]/60">
              JPG, PNG or WebP. Maximum size: 5 MB.
            </p>
          </div>

          <label className="flex items-center gap-3 text-sm">
            <input
              type="checkbox"
              checked={active}
              onChange={(event) => setActive(event.target.checked)}
              className="h-4 w-4"
            />
            Active — show this service on the website
          </label>

          {error && (
            <p role="alert" className="bg-red-50 p-3 text-sm text-red-700">
              {error}
            </p>
          )}

          <button
            type="submit"
            disabled={saving}
            className="bg-[#10284C] px-6 py-3 text-sm font-semibold text-white hover:bg-[#1B3C68] disabled:opacity-60"
          >
            {saving ? "Saving Changes..." : "Update Service"}
          </button>
        </form>
      </div>
    </main>
  );
}
