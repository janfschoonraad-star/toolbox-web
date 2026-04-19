"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { CalendarDays, CheckCircle2, Mail, MessageCircle, Phone, Quote, Users } from "lucide-react";

const CAMP_FORM_URL = "https://docs.google.com/forms/d/e/1FAIpQLSeaiw9bxaideBvTLHQJatOuylQI5Odzy_WLxhDP37xDwuyVOA/viewform?usp=dialog";
const WHATSAPP_URL = "https://wa.me/27828530613";
const WEBSITE_URL = "https://www.toolboxmanne.com";
const FACEBOOK_URL = "https://www.facebook.com/toolboxvirmanne/";

const campImages = [
  "/camp1.png",
  "/camp2.png",
  "/camp3.png",
  "/camp4.png",
  "/camp5.png",
  "/camp6.png",
];

const pillars = [
  "Identity",
  "Authority",
  "Integrity",
  "Blessings",
  "Kingdom",
  "Marriage",
  "Finances",
  "Calling",
];

const testimonies = [
  "A weekend that helped me return home with renewed purpose and strength.",
  "Practical biblical truth that speaks directly to family, work, and leadership.",
  "More than a camp — a turning point for men who want real change.",
];

export default function Home() {
  return (
    <main className="min-h-screen bg-neutral-950 text-white">
      <section className="relative overflow-hidden border-b border-white/10 bg-red-600">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.12),transparent_28%),radial-gradient(circle_at_bottom_left,rgba(0,0,0,0.18),transparent_35%)]" />
        <div className="relative mx-auto max-w-6xl px-6 py-16 sm:px-8 lg:px-10 lg:py-20">
          <div className="grid items-center gap-10 lg:grid-cols-[1.15fr_0.85fr]">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-white/80">Toolbox for Men</p>
              <h1 className="mt-4 text-5xl font-black tracking-tight sm:text-6xl">JUST FIX IT</h1>
              <p className="mt-5 max-w-2xl text-lg leading-8 text-white/90">
                A practical Christian movement equipping men with biblical tools to build stronger lives,
                stronger families, and lasting legacy.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a
                  href={CAMP_FORM_URL}
                  target="_blank"
                  className="inline-flex h-12 items-center justify-center rounded-2xl bg-white px-6 font-bold text-red-600 transition hover:bg-neutral-100"
                >
                  Register for Camp
                </a>
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  className="inline-flex h-12 items-center justify-center rounded-2xl border border-white/30 px-6 font-semibold text-white transition hover:bg-white/10"
                >
                  Enquire on WhatsApp
                </a>
              </div>
            </div>

            <div className="rounded-[28px] border border-white/15 bg-white/10 p-6 backdrop-blur">
              <div className="flex justify-center">
                <Image src="/logo.png" alt="Toolbox for Men logo" width={280} height={280} className="h-auto w-auto max-h-[280px]" />
              </div>
              <div className="mt-5 grid grid-cols-2 gap-3">
                {[
                  ["Weekend Camps", "Life-changing breakaways"],
                  ["Biblical Tools", "Practical truth for real life"],
                  ["Brotherhood", "Men growing together"],
                  ["Kingdom Living", "Faith with purpose"],
                ].map(([title, text]) => (
                  <div key={title} className="rounded-2xl bg-black/15 p-4">
                    <p className="font-semibold">{title}</p>
                    <p className="mt-1 text-sm text-white/75">{text}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-14 sm:px-8 lg:px-10">
        <div className="grid gap-6 lg:grid-cols-[1fr_1fr]">
          <div className="rounded-[30px] border border-white/10 bg-white p-8 text-neutral-900 shadow-xl">
            <h2 className="text-3xl font-bold">About Toolbox</h2>
            <p className="mt-4 text-base leading-8 text-neutral-700">
              Toolbox for Men equips men with practical, Bible-based principles to grow in identity,
              authority, integrity, finances, marriage, and purpose. It is designed to move men from
              inspiration to action.
            </p>
            <div className="mt-6 grid gap-3">
              {[
                "Practical biblical principles",
                "Weekend camps and ministry sessions",
                "Corporate, church, and community relevance",
              ].map((item) => (
                <div key={item} className="flex items-start gap-3 rounded-2xl bg-neutral-100 p-4">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-red-600" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-[30px] border border-white/10 bg-white/5 p-8">
            <h2 className="text-3xl font-bold">Core Life Tools</h2>
            <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-3">
              {pillars.map((pillar) => (
                <div key={pillar} className="rounded-2xl border border-white/10 bg-neutral-900 p-4 text-center font-semibold">
                  {pillar}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-white/10 bg-white/5">
        <div className="mx-auto max-w-6xl px-6 py-14 sm:px-8 lg:px-10">
          <div className="grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
            <div className="rounded-[30px] border border-white/10 bg-neutral-950 p-8">
              <div className="flex items-center gap-3">
                <Users className="h-6 w-6 text-red-500" />
                <h2 className="text-3xl font-bold">Facilitators</h2>
              </div>
              <div className="mt-6 overflow-hidden rounded-[24px] border border-white/10">
                <Image src="/facilitators.png" alt="Toolbox facilitators" width={1200} height={700} className="h-auto w-full object-cover" />
              </div>
            </div>

            <div className="rounded-[30px] border border-white/10 bg-white p-8 text-neutral-900 shadow-xl">
              <div className="flex items-center gap-3">
                <CalendarDays className="h-6 w-6 text-red-600" />
                <h2 className="text-3xl font-bold">Camp Experience</h2>
              </div>
              <p className="mt-4 text-base leading-8 text-neutral-700">
                Real men. Real conversations. Real transformation. Toolbox camps create space for
                reflection, truth, brotherhood, and practical next steps.
              </p>
              <div className="mt-6 grid grid-cols-2 gap-4">
                {campImages.map((src, index) => (
                  <motion.div key={src} whileHover={{ scale: 1.02 }} className="overflow-hidden rounded-[22px] bg-neutral-100">
                    <Image
                      src={src}
                      alt={`Camp photo ${index + 1}`}
                      width={800}
                      height={600}
                      className="h-48 w-full object-cover"
                    />
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-14 sm:px-8 lg:px-10">
        <div className="grid gap-6 lg:grid-cols-[1fr_1fr]">
          <div className="rounded-[30px] border border-white/10 bg-white p-8 text-neutral-900 shadow-xl">
            <div className="flex items-center gap-3">
              <Quote className="h-6 w-6 text-red-600" />
              <h2 className="text-3xl font-bold">Testimonies</h2>
            </div>
            <div className="mt-6 grid gap-4">
              {testimonies.map((item) => (
                <div key={item} className="rounded-2xl bg-neutral-100 p-5 text-base leading-7 text-neutral-700">
                  “{item}”
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-[30px] border border-white/10 bg-white/5 p-8">
            <h2 className="text-3xl font-bold">Connect</h2>
            <p className="mt-4 max-w-xl text-base leading-8 text-white/80">
              Ready to join a camp, invite Toolbox to your church or business, or make contact directly?
              Use the links below.
            </p>
            <div className="mt-6 grid gap-3">
              <a href={CAMP_FORM_URL} target="_blank" className="inline-flex h-12 items-center justify-center rounded-2xl bg-red-600 px-6 font-bold text-white transition hover:bg-red-500">
                Register for Camp
              </a>
              <a href={WHATSAPP_URL} target="_blank" className="inline-flex h-12 items-center justify-center gap-2 rounded-2xl border border-white/15 px-6 font-semibold text-white transition hover:bg-white/5">
                <MessageCircle className="h-4 w-4" /> WhatsApp
              </a>
              <a href="mailto:toolboxmanne@gmail.com" className="inline-flex h-12 items-center justify-center gap-2 rounded-2xl border border-white/15 px-6 font-semibold text-white transition hover:bg-white/5">
                <Mail className="h-4 w-4" /> toolboxmanne@gmail.com
              </a>
              <a href="tel:+27828530613" className="inline-flex h-12 items-center justify-center gap-2 rounded-2xl border border-white/15 px-6 font-semibold text-white transition hover:bg-white/5">
                <Phone className="h-4 w-4" /> 082 853 0613
              </a>
              <div className="grid grid-cols-2 gap-3">
                <a href={WEBSITE_URL} target="_blank" className="inline-flex h-12 items-center justify-center rounded-2xl border border-white/15 px-6 font-semibold text-white transition hover:bg-white/5">
                  Website
                </a>
                <a href={FACEBOOK_URL} target="_blank" className="inline-flex h-12 items-center justify-center rounded-2xl border border-white/15 px-6 font-semibold text-white transition hover:bg-white/5">
                  Facebook
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { CalendarDays, CheckCircle2, Mail, MessageCircle, Phone, Quote, Users } from "lucide-react";

const CAMP_FORM_URL = "https://docs.google.com/forms/d/e/1FAIpQLSeaiw9bxaideBvTLHQJatOuylQI5Odzy_WLxhDP37xDwuyVOA/viewform?usp=dialog";
const WHATSAPP_URL = "https://wa.me/27828530613";
const WEBSITE_URL = "https://www.toolboxmanne.com";
const FACEBOOK_URL = "https://www.facebook.com/toolboxvirmanne/";

const campImages = [
  "/camp1.png",
  "/camp2.png",
  "/camp3.png",
  "/camp4.png",
  "/camp5.png",
  "/camp6.png",
];

const pillars = [
  "Identity",
  "Authority",
  "Integrity",
  "Blessings",
  "Kingdom",
  "Marriage",
  "Finances",
  "Calling",
];

const testimonies = [
  "A weekend that helped me return home with renewed purpose and strength.",
  "Practical biblical truth that speaks directly to family, work, and leadership.",
  "More than a camp — a turning point for men who want real change.",
];

export default function Home() {
  return (
    <main className="min-h-screen bg-neutral-950 text-white">
      <section className="relative overflow-hidden border-b border-white/10 bg-red-600">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.12),transparent_28%),radial-gradient(circle_at_bottom_left,rgba(0,0,0,0.18),transparent_35%)]" />
        <div className="relative mx-auto max-w-6xl px-6 py-16 sm:px-8 lg:px-10 lg:py-20">
          <div className="grid items-center gap-10 lg:grid-cols-[1.15fr_0.85fr]">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-white/80">Toolbox for Men</p>
              <h1 className="mt-4 text-5xl font-black tracking-tight sm:text-6xl">JUST FIX IT</h1>
              <p className="mt-5 max-w-2xl text-lg leading-8 text-white/90">
                A practical Christian movement equipping men with biblical tools to build stronger lives,
                stronger families, and lasting legacy.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a
                  href={CAMP_FORM_URL}
                  target="_blank"
                  className="inline-flex h-12 items-center justify-center rounded-2xl bg-white px-6 font-bold text-red-600 transition hover:bg-neutral-100"
                >
                  Register for Camp
                </a>
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  className="inline-flex h-12 items-center justify-center rounded-2xl border border-white/30 px-6 font-semibold text-white transition hover:bg-white/10"
                >
                  Enquire on WhatsApp
                </a>
              </div>
            </div>

            <div className="rounded-[28px] border border-white/15 bg-white/10 p-6 backdrop-blur">
              <div className="flex justify-center">
                <Image src="/logo.png" alt="Toolbox for Men logo" width={280} height={280} className="h-auto w-auto max-h-[280px]" />
              </div>
              <div className="mt-5 grid grid-cols-2 gap-3">
                {[
                  ["Weekend Camps", "Life-changing breakaways"],
                  ["Biblical Tools", "Practical truth for real life"],
                  ["Brotherhood", "Men growing together"],
                  ["Kingdom Living", "Faith with purpose"],
                ].map(([title, text]) => (
                  <div key={title} className="rounded-2xl bg-black/15 p-4">
                    <p className="font-semibold">{title}</p>
                    <p className="mt-1 text-sm text-white/75">{text}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-14 sm:px-8 lg:px-10">
        <div className="grid gap-6 lg:grid-cols-[1fr_1fr]">
          <div className="rounded-[30px] border border-white/10 bg-white p-8 text-neutral-900 shadow-xl">
            <h2 className="text-3xl font-bold">About Toolbox</h2>
            <p className="mt-4 text-base leading-8 text-neutral-700">
              Toolbox for Men equips men with practical, Bible-based principles to grow in identity,
              authority, integrity, finances, marriage, and purpose. It is designed to move men from
              inspiration to action.
            </p>
            <div className="mt-6 grid gap-3">
              {[
                "Practical biblical principles",
                "Weekend camps and ministry sessions",
                "Corporate, church, and community relevance",
              ].map((item) => (
                <div key={item} className="flex items-start gap-3 rounded-2xl bg-neutral-100 p-4">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-red-600" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-[30px] border border-white/10 bg-white/5 p-8">
            <h2 className="text-3xl font-bold">Core Life Tools</h2>
            <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-3">
              {pillars.map((pillar) => (
                <div key={pillar} className="rounded-2xl border border-white/10 bg-neutral-900 p-4 text-center font-semibold">
                  {pillar}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-white/10 bg-white/5">
        <div className="mx-auto max-w-6xl px-6 py-14 sm:px-8 lg:px-10">
          <div className="grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
            <div className="rounded-[30px] border border-white/10 bg-neutral-950 p-8">
              <div className="flex items-center gap-3">
                <Users className="h-6 w-6 text-red-500" />
                <h2 className="text-3xl font-bold">Facilitators</h2>
              </div>
              <div className="mt-6 overflow-hidden rounded-[24px] border border-white/10">
                <Image src="/facilitators.png" alt="Toolbox facilitators" width={1200} height={700} className="h-auto w-full object-cover" />
              </div>
            </div>

            <div className="rounded-[30px] border border-white/10 bg-white p-8 text-neutral-900 shadow-xl">
              <div className="flex items-center gap-3">
                <CalendarDays className="h-6 w-6 text-red-600" />
                <h2 className="text-3xl font-bold">Camp Experience</h2>
              </div>
              <p className="mt-4 text-base leading-8 text-neutral-700">
                Real men. Real conversations. Real transformation. Toolbox camps create space for
                reflection, truth, brotherhood, and practical next steps.
              </p>
              <div className="mt-6 grid grid-cols-2 gap-4">
                {campImages.map((src, index) => (
                  <motion.div key={src} whileHover={{ scale: 1.02 }} className="overflow-hidden rounded-[22px] bg-neutral-100">
                    <Image
                      src={src}
                      alt={`Camp photo ${index + 1}`}
                      width={800}
                      height={600}
                      className="h-48 w-full object-cover"
                    />
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-14 sm:px-8 lg:px-10">
        <div className="grid gap-6 lg:grid-cols-[1fr_1fr]">
          <div className="rounded-[30px] border border-white/10 bg-white p-8 text-neutral-900 shadow-xl">
            <div className="flex items-center gap-3">
              <Quote className="h-6 w-6 text-red-600" />
              <h2 className="text-3xl font-bold">Testimonies</h2>
            </div>
            <div className="mt-6 grid gap-4">
              {testimonies.map((item) => (
                <div key={item} className="rounded-2xl bg-neutral-100 p-5 text-base leading-7 text-neutral-700">
                  “{item}”
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-[30px] border border-white/10 bg-white/5 p-8">
            <h2 className="text-3xl font-bold">Connect</h2>
            <p className="mt-4 max-w-xl text-base leading-8 text-white/80">
              Ready to join a camp, invite Toolbox to your church or business, or make contact directly?
              Use the links below.
            </p>
            <div className="mt-6 grid gap-3">
              <a href={CAMP_FORM_URL} target="_blank" className="inline-flex h-12 items-center justify-center rounded-2xl bg-red-600 px-6 font-bold text-white transition hover:bg-red-500">
                Register for Camp
              </a>
              <a href={WHATSAPP_URL} target="_blank" className="inline-flex h-12 items-center justify-center gap-2 rounded-2xl border border-white/15 px-6 font-semibold text-white transition hover:bg-white/5">
                <MessageCircle className="h-4 w-4" /> WhatsApp
              </a>
              <a href="mailto:toolboxmanne@gmail.com" className="inline-flex h-12 items-center justify-center gap-2 rounded-2xl border border-white/15 px-6 font-semibold text-white transition hover:bg-white/5">
                <Mail className="h-4 w-4" /> toolboxmanne@gmail.com
              </a>
              <a href="tel:+27828530613" className="inline-flex h-12 items-center justify-center gap-2 rounded-2xl border border-white/15 px-6 font-semibold text-white transition hover:bg-white/5">
                <Phone className="h-4 w-4" /> 082 853 0613
              </a>
              <div className="grid grid-cols-2 gap-3">
                <a href={WEBSITE_URL} target="_blank" className="inline-flex h-12 items-center justify-center rounded-2xl border border-white/15 px-6 font-semibold text-white transition hover:bg-white/5">
                  Website
                </a>
                <a href={FACEBOOK_URL} target="_blank" className="inline-flex h-12 items-center justify-center rounded-2xl border border-white/15 px-6 font-semibold text-white transition hover:bg-white/5">
                  Facebook
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
