"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

const API_URL =
  process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000/api";

export default function NewServicePage() {
  const router = useRouter();

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState<File | null>(null);
  const [preview, setPreview] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  function handleImageChange(file: File | null) {
    setImage(file);
    setPreview((current) => {
      if (current) URL.revokeObjectURL(current);
      return file ? URL.createObjectURL(file) : "";
    });
  }

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError("");

    if (!image) {
      setError("Please select a service image.");
      return;
    }

    if (!image.type.startsWith("image/")) {
      setError("Please select a valid image file.");
      return;
    }

    if (image.size > 5 * 1024 * 1024) {
      setError("Image size must be less than 5 MB.");
      return;
    }

    setLoading(true);

    try {
      // Step 1: Upload image to Cloudinary through the backend.
      const formData = new FormData();
      formData.append("image", image);

      const uploadResponse = await fetch(`${API_URL}/upload`, {
        method: "POST",
        credentials: "include",
        body: formData,
      });

      const uploadData = await uploadResponse.json();

      if (!uploadResponse.ok || !uploadData.image) {
        throw new Error(uploadData.message || "Image upload failed.");
      }

      // Step 2: Save service details and image URL in MongoDB.
      const serviceResponse = await fetch(`${API_URL}/services`, {
        method: "POST",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          title: title.trim(),
          description: description.trim(),
          image: uploadData.image,
        }),
      });

      const serviceData = await serviceResponse.json();

      if (!serviceResponse.ok) {
        throw new Error(serviceData.message || "Unable to save service.");
      }

      router.push("/admin/services");
      router.refresh();
    } catch (err) {
      setError(
        err instanceof Error ? err.message : "Something went wrong."
      );
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className="min-h-screen bg-[#F8F7F3] px-5 py-8 text-[#10284C] sm:px-8">
      <div className="mx-auto max-w-3xl">
        <header className="flex items-center justify-between border-b border-[#10284C]/10 pb-6">
          <div>
            <p className="font-serif text-2xl">সহজ · Shohoj</p>
            <p className="text-sm text-[#10284C]/60">Admin Dashboard</p>
          </div>

          <button
            type="button"
            onClick={() => router.push("/admin/services")}
            className="border border-[#10284C]/20 px-4 py-2 text-sm hover:bg-white"
          >
            Back
          </button>
        </header>

        <section className="mt-8">
          <p className="text-xs font-bold uppercase tracking-widest text-[#B58A12]">
            Service Management
          </p>
          <h1 className="mt-2 font-serif text-4xl">Add New Service</h1>
          <p className="mt-2 text-sm text-[#10284C]/60">
            Add the details and image for a service offered by your business.
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
              className="w-full border border-[#10284C]/20 px-4 py-3 outline-none focus:border-[#B58A12]"
            />
          </div>

          <div>
            <label
              htmlFor="description"
              className="mb-2 block text-sm font-semibold"
            >
              Service Description
            </label>
            <textarea
              id="description"
              value={description}
              onChange={(event) => setDescription(event.target.value)}
              placeholder="Describe what this service includes..."
              rows={4}
              maxLength={300}
              required
              className="w-full resize-y border border-[#10284C]/20 px-4 py-3 outline-none focus:border-[#B58A12]"
            />
            <p className="mt-1 text-right text-xs text-[#10284C]/50">
              {description.length}/300 characters
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
              className="block w-full border border-[#10284C]/20 p-3 text-sm file:mr-4 file:border-0 file:bg-[#10284C] file:px-4 file:py-2 file:text-white"
            />
            <p className="mt-2 text-xs text-[#10284C]/60">
              JPG, PNG or WebP. Maximum size: 5 MB.
            </p>

            {preview && (
              <div className="mt-4">
                <p className="mb-2 text-sm font-medium">Image Preview</p>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={preview}
                  alt="Selected service preview"
                  className="h-56 w-full rounded object-cover sm:w-80"
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
              className="bg-[#10284C] px-6 py-3 text-sm font-semibold text-white hover:bg-[#1B3C68] disabled:cursor-not-allowed disabled:opacity-60"
            >
              {loading ? "Uploading & Saving..." : "Save Service"}
            </button>

            <button
              type="button"
              onClick={() => router.push("/admin/services")}
              disabled={loading}
              className="border border-[#10284C]/20 px-6 py-3 text-sm hover:bg-[#F8F7F3] disabled:opacity-60"
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </main>
  );
}