'use client';

import { motion } from 'framer-motion';
import { useLanguage } from '@/context/LanguageContext';

const clips = [
  { 
    id: "HumbleRamshackleGoatHassanChop-qswXV0mDFiD4Fkqv", 
    title: "Legendary Clip 1", 
    views: "2.4K" 
  },
  { 
    id: "GeniusBumblingPenguinYee-8BO3OwnG4RQTXDVz", 
    title: "Legendary Clip 2", 
    views: "1.8K" 
  },
  { 
    id: "CuriousDirtyCobblerChefFrank-tKkUJkleJF1_HZ_c", 
    title: "Legendary Clip 3", 
    views: "3.2K" 
  },
  { 
    id: "OptimisticCrazyPuddingAsianGlow-_s6sq4atTUYw-a3T", 
    title: "Legendary Clip 4", 
    views: "2.9K" 
  }
];

export default function Highlights() {
  const { t } = useLanguage();
  const parentDomain = typeof window !== 'undefined' ? window.location.hostname : 'localhost';

  return (
    <div className="min-h-screen bg-bg-primary pt-24 pb-16">
      <div className="container mx-auto px-4 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="font-orbitron text-5xl md:text-6xl font-black uppercase tracking-widest bg-clip-text text-transparent bg-gradient-to-r from-accent-1 to-accent-2 mb-4 drop-shadow-[0_0_24px_rgba(124,58,237,0.4)]">
            {t('highlights.title')}
          </h1>
          <p className="font-rajdhani text-text-muted text-xl">
            {t('highlights.subtitle')}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {clips.map((clip, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.2 }}
              className="glass-card overflow-hidden"
            >
              <div className="aspect-video w-full">
                <iframe
                  src={`https://clips.twitch.tv/embed?clip=${clip.id}&parent=${parentDomain}&autoplay=false`}
                  height="100%"
                  width="100%"
                  allowFullScreen
                ></iframe>
              </div>
              <div className="p-6">
                <h3 className="font-orbitron font-bold text-white text-xl mb-2">{clip.title}</h3>
                <p className="font-rajdhani text-accent-2 font-bold uppercase tracking-wider">{clip.views} {t('highlights.views')}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="mt-16 text-center"
        >
          <a
            href="https://www.twitch.tv/klover3_live"
            target="_blank"
            rel="noopener noreferrer"
            className="font-orbitron text-accent-1 hover:text-white transition-colors tracking-widest text-lg font-bold border-b-2 border-accent-1 pb-1 hover:shadow-[0_4px_12px_rgba(124,58,237,0.5)]"
          >
            {t('highlights.watchMore')}
          </a>
        </motion.div>
      </div>
    </div>
  );
}