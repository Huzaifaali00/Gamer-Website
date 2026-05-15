'use client';

import { motion } from 'framer-motion';
import { FaTwitch } from 'react-icons/fa';
import Link from 'next/link';
import { useLanguage } from '@/context/LanguageContext';

export default function StreamStatus() {
  const { t } = useLanguage();

  return (
    <section className="py-24 bg-bg-primary">
      <div className="container mx-auto px-4 md:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="glass-card max-w-4xl mx-auto p-8 md:p-16 flex flex-col items-center text-center relative overflow-hidden"
        >
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#9146FF] to-transparent opacity-50" />
          
          <FaTwitch className="text-6xl md:text-8xl text-[#9146FF] mb-6 drop-shadow-[0_0_24px_rgba(145,70,255,0.6)] animate-pulse" />
          
          <h2 className="font-orbitron text-3xl md:text-5xl font-black uppercase tracking-widest text-white mb-8">
            klover3 {t('stream.isLive').split('LIVE')[0]} <span className="text-[#ef4444] animate-[pulse-live_1.5s_infinite]">{t('stream.live')}</span> {t('stream.isLive').split('LIVE')[1]}
          </h2>
          
          <a
            href="https://www.twitch.tv/klover3_live"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#9146FF] text-white font-orbitron font-bold tracking-wider px-10 py-4 rounded-xl text-lg md:text-xl shadow-[0_0_24px_rgba(145,70,255,0.6)] hover:scale-105 hover:shadow-[0_0_40px_rgba(145,70,255,0.9)] transition-all duration-300 mb-10"
          >
            {t('stream.watchNow')}
          </a>
          
          <div className="w-full h-px bg-white/10 mb-8" />
          
          <p className="font-rajdhani text-text-muted text-xl uppercase tracking-widest font-semibold mb-4">
            {t('stream.scheduleDays')}
          </p>
          
          <Link href="/schedule" className="font-orbitron text-accent-2 hover:text-white transition-colors tracking-wider text-sm">
            {t('stream.viewSchedule')}
          </Link>
        </motion.div>
      </div>
    </section>
  );
}