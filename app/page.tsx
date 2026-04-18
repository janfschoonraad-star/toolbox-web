"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-black">

      {/* HERO */}
      <section className="text-center py-12 bg-red-600 text-white">
        <h1 className="text-4xl font-bold">TOOLBOX FOR MEN</h1>
        <p className="mt-4 text-xl">“JUST FIX IT”</p>
        <p className="mt-2">Build. Restore. Lead.</p>

        <div className="mt-6 flex justify-center gap-4">
          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLSeaiw9bxaideBvTLHQJatOuylQI5Odzy_WLxhDP37xDwuyVOA/viewform"
            target="_blank"
            className="bg-white text-red-600 px-6 py-3 rounded-xl font-bold"
          >
            Register for Camp
          </a>
        </div>
      </section>

      {/* LOGO */}
      <section className="flex justify-center py-10">
        <Image src="/logo.png" alt="Toolbox Logo" width={250} height={250} />
      </section>

      {/* ABOUT */}
      <section className="px-6 text-center max-w-2xl mx-auto">
        <h2 className="text-2xl font-bold mb-4">About Toolbox</h2>
        <p>
          Toolbox for Men equips men with practical, Bible-based principles to
          grow in identity, authority, integrity, finances, and purpose.
        </p>
      </section>

      {/* FACILITATORS */}
      <section className="py-10 text-center">
        <h2 className="text-2xl font-bold mb-4">Facilitators</h2>
        <div className="flex justify-center">
          <Image
            src="/facilitators.png"
            alt="Facilitators"
            width={600}
            height={400}
          />
        </div>
      </section>

      {/* GALLERY */}
      <section className="py-10 px-6">
        <h2 className="text-2xl font-bold text-center mb-6">Camp Experience</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {[1,2,3,4,5,6].map((i) => (
            <motion.div key={i} whileHover={{ scale: 1.05 }}>
              <Image
                src={`/camp${i}.png`}
                alt={`Camp ${i}`}
                width={400}
                height={300}
                className="rounded-xl"
              />
            </motion.div>
          ))}
        </div>
      </section>

      {/* CONTACT */}
      <section className="py-10 text-center bg-gray-100">
        <h2 className="text-xl font-bold">Connect</h2>
        <div className="mt-4 flex justify-center gap-4 flex-wrap">
          <a href="https://www.toolboxmanne.com" target="_blank">Website</a>
          <a href="https://www.facebook.com" target="_blank">Facebook</a>
          <a href="https://wa.me/27828530613" target="_blank">WhatsApp</a>
        </div>
      </section>

    </main>
  );
}