"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";

export default function BioTeaser() {
  const { t } = useLanguage();

  return (
    <section className="py-24 bg-bg-secondary relative">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-24">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="w-full lg:w-1/2 flex justify-center relative"
          >
            <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full p-2 bg-gradient-to-r from-accent-1 via-accent-2 to-accent-1 [background-size:200%_auto] animate-[gradientBorder_3s_ease_infinite]">
              <div className="w-full h-full relative rounded-full overflow-hidden bg-bg-primary">
                <Image
                  src="/images/treklovern.jpg"
                  alt="treklovern Avatar"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="w-full lg:w-1/2 flex flex-col items-center lg:items-start text-center lg:text-left"
          >
            <h2 className="font-orbitron text-3xl md:text-5xl font-black uppercase tracking-widest text-white mb-6 leading-tight">
              {t('bio.title')}
            </h2>
            <p className="font-rajdhani text-text-muted text-lg md:text-xl mb-8 leading-relaxed">
              {t('bio.text')}
            </p>
            <Link
              href="/about"
              className="inline-block bg-transparent border-2 border-accent-1 text-accent-1 font-orbitron font-bold tracking-widest px-8 py-3 rounded-lg hover:bg-accent-1 hover:text-white transition-all duration-300 shadow-[var(--glow-purple)] hover:shadow-[0_0_32px_rgba(124,58,237,0.8)]"
            >
              {t('bio.readStory')}
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
