
"use client";

import { Suspense, useState } from "react";
import type { FormEvent } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import {
  ArrowUpRight,
  Phone,
  Mail,
  MapPin,
  Clock3,
  MessageCircle,
} from "lucide-react";

const BUSINESS_PHONE = "916001353032";
const BUSINESS_EMAIL = "bastabs398@gmail.com";

const services = [
  "Painting Services",
  "Tiffin Services (Home Delivery)",
  "Carpentry Services",
  "Electrician Services",
  "A.C. Repairing & Maintenance",
  "Catering Services",
  "Band Party Services",
  "Sound System Services",
  "Lighting & Decoration Services",
  "Naam Party",
];

const fieldClass =
  "w-full rounded-none border border-[#10284C]/15 bg-white px-4 py-3.5 text-sm text-[#10284C] outline-none placeholder:text-[#10284C]/40 focus:border-[#B58A12]";

function ContactContent() {
  const searchParams = useSearchParams();
  const requestedService = searchParams.get("service");

  const serviceFromUrl =
    services.find(
      (item) =>
        item.toLowerCase() === requestedService?.trim().toLowerCase()
    ) || "";

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [chosenService, setChosenService] = useState("");
  const [message, setMessage] = useState("");

  const selectedService = chosenService || serviceFromUrl;

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (!/^\d{10,15}$/.test(BUSINESS_PHONE)) {
      alert("Please check your WhatsApp business number in Contact.tsx.");
      return;
    }

    const enquiry = [
      "Hello Shohoj! I would like to enquire about your services.",
      "",
      `Name: ${name}`,
      `Customer Phone: ${phone}`,
      `Email: ${email || "Not provided"}`,
      `Service: ${selectedService}`,
      `Requirement: ${message}`,
    ].join("\n");

    const whatsappURL =
      `https://wa.me/${BUSINESS_PHONE}?text=` +
      encodeURIComponent(enquiry);

    window.open(whatsappURL, "_blank", "noopener,noreferrer");
  }

  return (
    <section
      id="contact"
      className="scroll-mt-24 bg-white py-16 text-[#10284C] sm:py-20 lg:py-24"
    >
      <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-14 xl:px-20">
        <div className="mb-12 border-b border-[#10284C]/10 pb-10 sm:mb-16 sm:pb-12">
          <p className="mb-5 flex items-center gap-3 text-[10px] font-bold uppercase tracking-[0.22em] text-[#10284C]/60 sm:text-xs">
            <span className="h-px w-9 bg-[#DCAF24]" />
            Let&apos;s Talk
          </p>

          <div className="grid gap-6 md:grid-cols-[1fr_0.65fr] md:items-end">
            <h2 className="font-serif text-5xl font-normal leading-[0.98] tracking-[-0.05em] sm:text-6xl lg:text-8xl">
              Need a service?
              <br />
              <span className="italic text-[#DCAF24]">
                We&apos;re here to help.
              </span>
            </h2>

            <p className="max-w-md text-sm leading-7 text-[#10284C]/65 sm:text-base">
              No need to search everywhere. Tell us what you need, and let
              সহজ help you explore the right service for your home, daily
              needs or special occasion.
            </p>
          </div>
        </div>

        <div className="grid gap-12 lg:grid-cols-[0.75fr_1.25fr] lg:gap-20">
          <div>
            <h3 className="font-serif text-3xl sm:text-4xl">
              Get in touch
            </h3>

            <p className="mt-4 max-w-sm text-sm leading-7 text-[#10284C]/65">
              Have a question or need more than one service? Contact us and
              share your requirements.
            </p>

            <div className="mt-8 space-y-0 border-t border-[#10284C]/10">
              <div className="flex gap-4 border-b border-[#10284C]/10 py-5">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center bg-[#F5CA35]/20">
                  <MapPin size={20} className="text-[#9A7410]" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold">Our Location</h4>
                  <p className="mt-1 text-sm leading-6 text-[#10284C]/65">
                    Tezpur, Assam, India
                  </p>
                </div>
              </div>

              <div className="flex gap-4 border-b border-[#10284C]/10 py-5">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center bg-[#F5CA35]/20">
                  <Phone size={20} className="text-[#9A7410]" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold">Call Us</h4>
                  <a
                    href={`tel:+${BUSINESS_PHONE}`}
                    className="mt-1 block text-sm text-[#10284C]/65"
                  >
                    +{BUSINESS_PHONE}
                  </a>
                </div>
              </div>

              <div className="flex gap-4 border-b border-[#10284C]/10 py-5">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center bg-[#F5CA35]/20">
                  <Mail size={20} className="text-[#9A7410]" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold">Email Us</h4>
                  <a
                    href={`mailto:${BUSINESS_EMAIL}`}
                    className="mt-1 block break-all text-sm text-[#10284C]/65"
                  >
                    {BUSINESS_EMAIL}
                  </a>
                </div>
              </div>

              <div className="flex gap-4 border-b border-[#10284C]/10 py-5">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center bg-[#F5CA35]/20">
                  <Clock3 size={20} className="text-[#9A7410]" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold">Working Hours</h4>
                  <p className="mt-1 text-sm leading-6 text-[#10284C]/65">
                    Monday – Saturday
                    <br />
                    09:00 AM – 06:00 PM
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-7 flex items-start gap-3 bg-[#F8F7F3] p-5">
              <MessageCircle
                size={20}
                className="mt-0.5 shrink-0 text-[#9A7410]"
              />
              <p className="text-sm leading-6 text-[#10284C]/70">
                <strong className="text-[#10284C]">
                  Simple and convenient.
                </strong>{" "}
                Submit your enquiry and continue the conversation through
                WhatsApp.
              </p>
            </div>
          </div>

          <div className="border border-[#10284C]/10 p-5 sm:p-8 lg:p-10">
            <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#B58A12]">
              Service Enquiry
            </p>

            <h3 className="mt-3 font-serif text-3xl sm:text-4xl">
              How can we help you?
            </h3>

            <p className="mt-3 text-sm leading-6 text-[#10284C]/60">
              Fill in the details below to tell us what you are looking for.
            </p>

            <form onSubmit={handleSubmit} className="mt-8 space-y-5">
              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label
                    htmlFor="contact-name"
                    className="mb-2 block text-sm font-medium"
                  >
                    Your Name *
                  </label>
                  <input
                    id="contact-name"
                    name="name"
                    type="text"
                    autoComplete="name"
                    required
                    value={name}
                    onChange={(event) => setName(event.target.value)}
                    placeholder="Enter your name"
                    className={fieldClass}
                  />
                </div>

                <div>
                  <label
                    htmlFor="contact-phone"
                    className="mb-2 block text-sm font-medium"
                  >
                    Phone Number *
                  </label>
                  <input
                    id="contact-phone"
                    name="phone"
                    type="tel"
                    autoComplete="tel"
                    required
                    value={phone}
                    onChange={(event) => setPhone(event.target.value)}
                    placeholder="Enter your phone number"
                    className={fieldClass}
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="contact-email"
                  className="mb-2 block text-sm font-medium"
                >
                  Email Address
                </label>
                <input
                  id="contact-email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                  placeholder="Enter your email (optional)"
                  className={fieldClass}
                />
              </div>

              <div>
                <label
                  htmlFor="contact-service"
                  className="mb-2 block text-sm font-medium"
                >
                  Which service do you need? *
                </label>
                <select
                  id="contact-service"
                  name="service"
                  value={selectedService}
                  onChange={(event) => setChosenService(event.target.value)}
                  required
                  className={`${fieldClass} cursor-pointer`}
                >
                  <option value="" disabled>
                    Select a service
                  </option>
                  {services.map((item) => (
                    <option key={item} value={item}>
                      {item}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label
                  htmlFor="contact-message"
                  className="mb-2 block text-sm font-medium"
                >
                  Tell Us About Your Requirement *
                </label>
                <textarea
                  id="contact-message"
                  name="message"
                  rows={4}
                  required
                  value={message}
                  onChange={(event) => setMessage(event.target.value)}
                  placeholder="Describe the service you need, location and any other details..."
                  className={`${fieldClass} min-h-[120px] resize-y`}
                />
              </div>

              <button
                type="submit"
                className="flex w-full items-center justify-center gap-3 bg-[#10284C] px-5 py-4 text-sm font-semibold text-white transition hover:bg-[#1B3C68]"
              >
                Send Enquiry on WhatsApp
                <ArrowUpRight size={18} />
              </button>

              <p className="text-center text-xs leading-5 text-[#10284C]/50">
                WhatsApp will open with your enquiry ready to send. You can
                review it before sending.
              </p>
            </form>
          </div>
        </div>

        <div className="mt-16 border-t border-[#10284C]/10 pt-7 sm:mt-20">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#B58A12]">
                সহজ · Shohoj
              </p>

              <h3 className="mt-3 font-serif text-3xl leading-tight sm:text-4xl">
                Less searching.
                <span className="italic text-[#DCAF24]">
                  {" "}More living.
                </span>
              </h3>
            </div>

            <Link
              href="/#services"
              className="inline-flex items-center gap-2 text-sm font-semibold"
            >
              Explore all services
              <ArrowUpRight size={17} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function Contact() {
  return (
    <Suspense
      fallback={
        <section
          id="contact"
          className="min-h-[40vh] bg-white p-8 text-[#10284C]"
        >
          Loading contact form...
        </section>
      }
    >
      <ContactContent />
    </Suspense>
  );
}
