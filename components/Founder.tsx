"use client";

import Image from "next/image";
import type { ReactNode } from "react";
import {
  Quote,
  GraduationCap,
  Code2,
  BriefcaseBusiness,
  Share2,
  Wallet,
} from "lucide-react";

const hrResponsibilities = [
  "Human resource planning and development.",
  "Associate and service-partner coordination.",
  "Training and development.",
  "Organisational structure and team development.",
];

const itResponsibilities = [
  "SOHOJ website design and development.",
  "Website maintenance and updates.",
  "Digital platform development.",
  "Technical support for SOHOJ's online presence.",
];

const digitalMediaResponsibilities = [
  "Management of the official SOHOJ Facebook page.",
  "Management of the official SOHOJ Instagram account.",
  "Creation and management of the SOHOJ YouTube channel.",
  "Video production, editing and promotional content.",
  "Digital brand promotion and audience engagement.",
  "Social media advertising and campaign coordination.",
  "Monitoring followers, views, subscribers and customer enquiries.",
  "Monthly digital marketing performance reports.",
];

const financeResponsibilities = [
  "Maintaining daily income and expenditure records.",
  "Managing cashbook and bank transactions.",
  "Maintaining service-partner payment records.",
  "Preparing monthly financial statements.",
  "Budgeting and financial planning.",
  "Maintaining bills, invoices and vouchers.",
  "Coordinating with external accountants for tax and compliance matters.",
];

function Responsibilities({ items }: { items: string[] }) {
  return (
    <ol className="mt-5 grid gap-x-8 gap-y-3 sm:grid-cols-2">
      {items.map((item, index) => (
        <li key={index} className="flex items-start gap-3">
          <span className="flex h-7 w-8 shrink-0 items-center justify-center bg-[#C90070]/10 text-[10px] font-bold text-[#C90070]">
            {String(index + 1).padStart(2, "0")}
          </span>
          <span className="pt-0.5 text-sm leading-7 text-[#61718A]">
            {item}
          </span>
        </li>
      ))}
    </ol>
  );
}

function EducationHeading() {
  return (
    <div className="flex items-center gap-2">
      <GraduationCap size={19} className="shrink-0 text-[#C90070]" />
      <h4 className="text-[11px] font-bold uppercase tracking-[0.16em]">
        Educational Background
      </h4>
    </div>
  );
}

function EducationCard({
  level,
  qualification,
  institution,
}: {
  level: string;
  qualification: string;
  institution?: string;
}) {
  return (
    <div className="border border-[#10284C]/10 bg-white p-4">
      <p className="text-[9px] font-bold uppercase tracking-wider text-[#C90070]">
        {level}
      </p>
      <p className="mt-2 text-sm font-semibold leading-6 text-[#10284C]">
        {qualification}
      </p>
      {institution && (
        <p className="mt-1 text-xs leading-5 text-[#61718A]">{institution}</p>
      )}
    </div>
  );
}

function TeamSection({
  eyebrow,
  title,
  image,
  imageAlt,
  name,
  designation,
  department,
  education,
  children,
}: {
  eyebrow: string;
  title: string;
  image: string;
  imageAlt: string;
  name: string;
  designation: string;
  department: string;
  education: ReactNode;
  children: ReactNode;
}) {
  return (
    <section className="border-t border-[#10284C]/10">
      <div className="mx-auto max-w-[1240px] px-5 py-12 sm:px-8 sm:py-14 lg:px-12 lg:py-16">
        <header className="mb-8 sm:mb-9">
          <p className="mb-3 text-[10px] font-bold uppercase tracking-[0.24em] text-[#C90070]">
            {eyebrow}
          </p>
          <h2 className="font-serif text-3xl font-medium leading-tight text-[#10284C] sm:text-4xl">
            {title}
          </h2>
        </header>

        <article>
          <div className="grid items-start gap-6 sm:grid-cols-[220px_minmax(0,1fr)] sm:gap-9 lg:grid-cols-[270px_minmax(0,1fr)] lg:gap-12">
            <figure className="mx-auto w-full max-w-[270px] sm:mx-0">
              <div className="overflow-hidden bg-white p-2 shadow-[0_8px_30px_rgba(16,40,76,0.08)]">
                <Image
                  src={image}
                  alt={imageAlt}
                  width={900}
                  height={1100}
                  sizes="(max-width: 640px) 270px, (max-width: 1024px) 220px, 270px"
                  className="aspect-[4/5] w-full object-cover object-center"
                />
              </div>
              <div className="mt-4 h-[3px] w-14 bg-[#C90070]" />
            </figure>

            <div className="min-w-0 sm:pt-1">
              <h3 className="font-serif text-2xl font-medium leading-snug text-[#10284C] sm:text-3xl">
                {name}
              </h3>

              <p className="mt-2 text-sm font-semibold leading-6 text-[#C90070]">
                {designation}
              </p>

              <p className="mt-2 text-xs leading-6 text-[#61718A]">
                <span className="font-semibold text-[#10284C]">
                  Department:
                </span>{" "}
                {department}
              </p>

              <div className="mt-6 border-t border-[#10284C]/10 pt-5">
                {education}
              </div>
            </div>
          </div>

          <div className="mt-7 border-t border-[#10284C]/10 pt-6 sm:mt-8 sm:pt-7">
            {children}
          </div>

          <p className="mt-8 border-t border-[#10284C]/10 pt-5 text-[9px] font-bold uppercase tracking-[0.15em] text-[#10284C]/45">
            {department} · SOHOJ
          </p>
        </article>
      </div>
    </section>
  );
}

export default function Founder() {
  return (
    <main className="overflow-hidden  text-[#10284C]">
      <section className="mx-auto max-w-[1240px] px-5 py-12 sm:px-8 sm:py-14 lg:px-12 lg:py-16">
        <header className="mb-8 sm:mb-9">
          <p className="mb-3 text-[10px] font-bold uppercase tracking-[0.24em] text-[#C90070]">
            Leadership · SOHOJ
          </p>
          <h2 className="font-serif text-3xl font-medium leading-tight text-[#10284C] sm:text-4xl">
            Meet Our Founder
          </h2>
        </header>

        <article>
          <div className="grid items-start gap-7 sm:grid-cols-[250px_minmax(0,1fr)] sm:gap-10 lg:grid-cols-[320px_minmax(0,1fr)] lg:gap-14">
            <figure className="mx-auto w-full max-w-[320px] sm:mx-0">
              <div className="overflow-hidden bg-white p-2 shadow-[0_10px_35px_rgba(16,40,76,0.09)]">
                <Image
                  src="/images/founder-black-coat.png"
                  alt="Swagata Saikia Borah - Founder of SOHOJ"
                  width={1328}
                  height={1184}
                  priority
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 250px, 320px"
                  className="h-auto w-full object-cover object-center"
                />
              </div>
              <div className="mt-4 h-[3px] w-16 bg-[#C90070]" />
            </figure>

            <div className="min-w-0 sm:pt-1">
              <h3 className="font-serif text-2xl font-medium leading-snug text-[#10284C] sm:text-3xl">
                Swagata Saikia Borah
              </h3>

              <p className="mt-2 text-sm font-semibold text-[#C90070]">
                Founder · SOHOJ
              </p>
              <br />

              <blockquote className=" py-1 pl-5 sm:pl-6">
                <Quote size={27} className="mb-3 text-[#C90070]/70" />
                <p className="max-w-2xl font-serif text-2xl font-semibold italic leading-snug text-[#10284C] sm:text-3xl lg:text-[34px]">
                  “I will win, not immediately, but definitely.”
                </p>
              </blockquote>
            </div>
          </div>

          <div className="mt-7 space-y-5  border-[#10284C]/10 pt-6 sm:mt-8 sm:pt-7">
            <p className="text-sm leading-7 text-[#61718A] sm:text-[15px]">
              I am the founder of{" "}
              <strong className="font-semibold text-[#10284C]">SOHOJ</strong>,
              an initiative conceived with the vision of connecting people,
              creating employment opportunities, promoting local
              entrepreneurship and contributing towards the sustainable
              development of society.
            </p>

            <p className="text-sm leading-7 text-[#61718A] sm:text-[15px]">
              My objective is to transform a simple concept into an organised
              service network that benefits customers, skilled and unskilled
              workers, local entrepreneurs and the community as a whole.
            </p>

            <p className="font-serif text-lg font-semibold text-[#10284C]">
              Namaskar! Welcome to SOHOJ.
            </p>

            <p className="text-sm leading-7 text-[#61718A] sm:text-[15px]">
              Based in Tezpur, Assam, SOHOJ aims to make a wide range of
              everyday services easily accessible through one convenient point
              of contact. From electrical work, plumbing, AC maintenance and
              carpentry to catering, event arrangements and other essential
              services, SOHOJ connects customers with suitable service partners.
            </p>

            <p className="text-sm leading-7 text-[#61718A] sm:text-[15px]">
              We are committed to delivering quality services, providing
              reliable support and building lasting relationships with the
              people of Tezpur. Through this initiative, we aspire to empower
              local talent, create sustainable employment opportunities and
              build a well-organised service network that benefits individuals,
              businesses and the community.
            </p>

            <p className="border-l-2 border-[#C90070] py-1 pl-4 text-sm font-bold leading-7 text-[#10284C] sm:text-[15px]">
              SOHOJ — Connecting People, Creating Opportunities, Building a
              Better Community.
            </p>

            <p className="pt-1 text-[10px] font-bold uppercase tracking-[0.18em] text-[#C90070]">
              SOHOJ · One Stop Service Solutions
            </p>
          </div>
        </article>
      </section>

      <TeamSection
        eyebrow="Our Team · Human Resources"
        title="Meet Our Associate"
        image="/images/aparna-barua.jpeg"
        imageAlt="Aparna Barua - Associate, Human Resources Development"
        name="Aparna Barua"
        designation="Associate – Human Resources Development (HRD)"
        department="Human Resources & Organisational Development"
        education={
          <div>
            <EducationHeading />
            <div className="mt-4 grid gap-3 sm:grid-cols-2">
              <EducationCard
                level="Graduation"
                qualification="Civil Engineering"
                institution="Tezpur University"
              />
              <EducationCard
                level="Post Graduation"
                qualification="MBA"
                institution="NIT Silchar"
              />
            </div>
          </div>
        }
      >
        <p className="max-w-5xl text-sm leading-7 text-[#61718A] sm:text-[15px]">
          A Civil Engineering graduate from Tezpur University and MBA graduate
          from NIT Silchar, Aparna Barua contributes to human resource planning,
          organisational development and professional coordination at SOHOJ.
        </p>

        <div className="mt-7">
          <div className="flex items-center gap-2">
            <BriefcaseBusiness size={17} className="shrink-0 text-[#C90070]" />
            <h4 className="text-[11px] font-bold uppercase tracking-[0.16em]">
              Key Responsibilities
            </h4>
          </div>
          <Responsibilities items={hrResponsibilities} />
        </div>
      </TeamSection>

      <TeamSection
        eyebrow="Our Team · Information Technology"
        title="Meet Our Associate"
        image="/images/bastab.png"
        imageAlt="Bastab Saikia - Associate, Website Design and Development"
        name="Bastab Saikia"
        designation="Associate – Website Design & Development"
        department="Information Technology & Digital Development"
        education={
          <div>
            <EducationHeading />
            <div className="mt-4 grid gap-3 sm:grid-cols-2">
              <EducationCard
                level="Graduation"
                qualification="Bachelor of Computer Applications (BCA)"
                institution="North Lakhimpur University"
              />
            </div>
          </div>
        }
      >
        <p className="max-w-5xl text-sm leading-7 text-[#61718A] sm:text-[15px]">
          Responsible for developing and maintaining SOHOJ&apos;s digital
          presence, ensuring a professional online platform and supporting the
          organisation&apos;s technology-driven growth.
        </p>

        <div className="mt-7">
          <div className="flex items-center gap-2">
            <Code2 size={18} className="shrink-0 text-[#C90070]" />
            <h4 className="text-[11px] font-bold uppercase tracking-[0.16em]">
              Key Responsibilities
            </h4>
          </div>
          <Responsibilities items={itResponsibilities} />
        </div>
      </TeamSection>

      <TeamSection
        eyebrow="Our Team · Digital Media"
        title="Meet Our Associate"
        image="/images/deepjyoti-boruah.png"
        imageAlt="Deepjyoti Boruah - Associate, Digital Media and Brand Communications"
        name="Deepjyoti Boruah"
        designation="Associate – Digital Media & Brand Communications"
        department="Digital Media & Brand Communications"
        education={
          <div>
            <EducationHeading />
            <div className="mt-4 grid gap-3 sm:grid-cols-2">
              <EducationCard
                level="Graduation"
                qualification="B.Sc. (Agriculture)"
              />
              <EducationCard
                level="Postgraduate"
                qualification="M.A. in Geography & Political Science"
              />
              <EducationCard
                level="Doctoral"
                qualification="PhD in Fine Arts"
              />
            </div>

            <div className="mt-4 border border-[#10284C]/10 bg-white p-4">
              <p className="text-[9px] font-bold uppercase tracking-[0.16em] text-[#C90070]">
                Operational Title
              </p>
              <p className="mt-2 text-sm font-semibold leading-6 text-[#10284C]">
                Social Media & YouTube Channel Manager
              </p>
            </div>
          </div>
        }
      >
        <p className="max-w-5xl text-sm leading-7 text-[#61718A] sm:text-[15px]">
          Deepjyoti Boruah is responsible for managing SOHOJ&apos;s social media
          platforms and YouTube channel, developing promotional content,
          coordinating digital marketing campaigns and strengthening brand
          visibility. The role also focuses on audience engagement, monitoring
          online performance and managing customer enquiries across digital
          platforms.
        </p>

        <div className="mt-7">
          <div className="flex items-center gap-2">
            <Share2 size={18} className="shrink-0 text-[#C90070]" />
            <h4 className="text-[11px] font-bold uppercase tracking-[0.16em]">
              Key Responsibilities
            </h4>
          </div>
          <Responsibilities items={digitalMediaResponsibilities} />
        </div>
      </TeamSection>

      <TeamSection
        eyebrow="Our Team · Finance & Accounts"
        title="Meet Our Associate"
        image="/images/angaj-mahanta.png"
        imageAlt="Angaj Mahanta - Associate, Finance and Accounts"
        name="Angaj Mahanta"
        designation="Associate – Finance & Accounts"
        department="Finance & Accounts"
        education={
          <div>
            <EducationHeading />
            <div className="mt-4 grid gap-3 sm:grid-cols-2">
              <EducationCard
                level="Graduation"
                qualification="B.A. English Honours"
                institution="Gauhati University"
              />
            </div>
          </div>
        }
      >
        <p className="max-w-5xl text-sm leading-7 text-[#61718A] sm:text-[15px]">
          Angaj Mahanta supports SOHOJ&apos;s financial record management,
          cashbook maintenance, payment coordination and financial reporting.
          The role contributes to organised accounting practices, budget
          planning and coordination with external accountants for tax and
          compliance matters.
        </p>

        <div className="mt-7">
          <div className="flex items-center gap-2">
            <Wallet size={18} className="shrink-0 text-[#C90070]" />
            <h4 className="text-[11px] font-bold uppercase tracking-[0.16em]">
              Key Responsibilities
            </h4>
          </div>
          <Responsibilities items={financeResponsibilities} />
        </div>
      </TeamSection>
    </main>
  );
}
