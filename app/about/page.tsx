"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";

export default function About() {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-bg-primary pt-24 pb-16">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex flex-col lg:flex-row gap-16 mb-24">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            className="lg:w-1/3"
          >
            <div className="relative w-full aspect-square rounded-2xl overflow-hidden border-2 border-accent-1 shadow-[0_0_32px_rgba(124,58,237,0.3)]">
              <Image
                src="/images/treklovern.jpg"
                alt="treklovern"
                fill
                className="object-cover"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            className="lg:w-2/3 flex flex-col justify-center"
          >
            <h1 className="font-orbitron text-5xl font-black uppercase tracking-widest text-white mb-6">
              {t('about.storyTitle')}
            </h1>
            <p className="font-rajdhani text-text-muted text-xl leading-relaxed mb-6">
              {t('bio.text')}
            </p>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass-card p-12 text-center mb-24 relative overflow-hidden"
        >
          <div className="absolute top-0 left-0 w-2 h-full bg-accent-2" />
          <h2 className="font-orbitron text-2xl md:text-4xl font-black text-white italic leading-tight">
            {t('about.quote')}
          </h2>
          <p className="mt-6 font-rajdhani text-accent-2 text-xl tracking-widest">
            — treklovern
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-24">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="font-orbitron text-3xl font-bold text-accent-1 mb-8 tracking-widest border-b border-white/10 pb-4">
              {t('about.setupTitle')}
            </h3>
            <ul className="space-y-4 font-rajdhani text-xl text-text-primary">
              <li>
                <span className="text-text-muted mr-2">CPU:</span> Intel
                i9-13900K
              </li>
              <li>
                <span className="text-text-muted mr-2">GPU:</span> RTX 4090
              </li>
              <li>
                <span className="text-text-muted mr-2">RAM:</span> 64GB DDR5
              </li>
              <li>
                <span className="text-text-muted mr-2">Monitor:</span> 240Hz 1ms
              </li>
              <li>
                <span className="text-text-muted mr-2">Headset:</span>{" "}
                SteelSeries Arctis Nova Pro
              </li>
              <li>
                <span className="text-text-muted mr-2">Mouse:</span> Logitech G
                Pro X Superlight
              </li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="font-orbitron text-3xl font-bold text-accent-2 mb-8 tracking-widest border-b border-white/10 pb-4">
              {t('about.loadoutTitle')}
            </h3>
            <ul className="space-y-4 font-rajdhani text-xl text-text-primary">
              <li>
                <span className="text-text-muted mr-2">{t('about.weapon')}:</span> Striker
                Burst
              </li>
              <li>
                <span className="text-text-muted mr-2">{t('about.mobility')}:</span>{" "}
                Shockwave Hammer
              </li>
              <li>
                <span className="text-text-muted mr-2">{t('about.healing')}:</span> Shield
                Fish
              </li>
              <li>
                <span className="text-text-muted mr-2">{t('about.dropSpot')}:</span> Tilted
                Towers
              </li>
            </ul>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass-card p-8"
        >
          <h3 className="font-orbitron text-3xl font-bold text-white mb-8 tracking-widest text-center">
            {t('about.journeyTitle')}
          </h3>
          <div className="max-w-3xl mx-auto space-y-6">
            <div className="flex gap-6 items-start">
              <div className="font-orbitron text-accent-1 text-2xl font-bold min-w-[80px]">
                2021
              </div>
              <div className="font-rajdhani text-xl text-text-muted pt-1">
                {t('about.journey2021')}
              </div>
            </div>
            <div className="flex gap-6 items-start">
              <div className="font-orbitron text-accent-1 text-2xl font-bold min-w-[80px]">
                2022
              </div>
              <div className="font-rajdhani text-xl text-text-muted pt-1">
                {t('about.journey2022')}
              </div>
            </div>
            <div className="flex gap-6 items-start">
              <div className="font-orbitron text-accent-1 text-2xl font-bold min-w-[80px]">
                2023
              </div>
              <div className="font-rajdhani text-xl text-text-muted pt-1">
                {t('about.journey2023')}
              </div>
            </div>
            <div className="flex gap-6 items-start">
              <div className="font-orbitron text-accent-1 text-2xl font-bold min-w-[80px]">
                2024
              </div>
              <div className="font-rajdhani text-xl text-text-muted pt-1">
                {t('about.journey2024')}
              </div>
            </div>
            <div className="flex gap-6 items-start">
              <div className="font-orbitron text-accent-2 text-2xl font-bold min-w-[80px]">
                2025
              </div>
              <div className="font-rajdhani text-xl text-white font-bold pt-1">
                {t('about.journey2025')}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
