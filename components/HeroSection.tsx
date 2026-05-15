'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import ParticleCanvas from './ParticleCanvas';
import { FaChevronDown, FaGlobe } from 'react-icons/fa';
import Image from 'next/image';
import { useState } from 'react';
import { useLanguage } from '@/context/LanguageContext';

const characters = [
  { name: "Beach Jules",   imageSrc: "/images/beach-jules.png",      emoteClass: "animate-wave",        delay: 0,   initialPos: { x: -200, y: 100 } },
  { name: "Elite Jules",   imageSrc: "/images/elite_jules.png",      emoteClass: "animate-spinOnce",    delay: 0.1, initialPos: { x: -100, y: 50 } },
  { name: "Bruno Mars",    imageSrc: "/images/bruno_mars.png",       emoteClass: "animate-danceBounce", delay: 0.2, initialPos: { x: 0, y: 150 } },
  { name: "Skye",          imageSrc: "/images/skye.png",             emoteClass: "animate-flip",        delay: 0.3, initialPos: { x: 100, y: 50 } },
  { name: "Cassidy Quinn", imageSrc: "/images/cassidy_quinn.png",    emoteClass: "animate-shake",       delay: 0.4, initialPos: { x: 200, y: 100 } },
  { name: "Thor",          imageSrc: "/images/thor.png",             emoteClass: "animate-slam",        delay: 0.5, initialPos: { x: 300, y: 150 } },
];

export default function HeroSection() {
  const { scrollY } = useScroll();
  const [hoveredChar, setHoveredChar] = useState<string | null>(null);
  const { language, setLanguage, t } = useLanguage();

  // Transform for flying away effect
  const flyY = useTransform(scrollY, [0, 500], [0, -1200]);
  const textScale = useTransform(scrollY, [0, 500], [1, 0.8]);
  const textOpacity = useTransform(scrollY, [0, 300], [0.3, 0]);

  return (
    <section className="relative h-[110vh] w-full flex flex-col items-center justify-center overflow-hidden bg-bg-primary">
      <ParticleCanvas />

      {/* Language Toggle */}
      <motion.div 
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 1.5 }}
        className="absolute top-8 right-8 z-[50]"
      >
        <button
          onClick={() => setLanguage(language === 'en' ? 'no' : 'en')}
          className="flex items-center gap-2 bg-black/40 backdrop-blur-md border border-white/10 px-4 py-2 rounded-full font-orbitron text-xs font-bold text-white hover:bg-accent-1/20 transition-all duration-300 group"
        >
          <FaGlobe className="group-hover:rotate-180 transition-transform duration-500 text-accent-2" />
          <span>{language === 'en' ? 'ENGLISH' : 'NORSK'}</span>
        </button>
      </motion.div>
      
      {/* Background Text - Pushed to back */}
      <motion.div 
        style={{ scale: textScale, opacity: textOpacity }}
        className="absolute z-0 pointer-events-none select-none text-center"
      >
        <h1 className="font-orbitron text-[15vw] md:text-[20vw] font-black uppercase tracking-tighter text-white/10 leading-none">
          KLOVER3
        </h1>
      </motion.div>

      {/* Foreground Character Squad - Main Focus */}
      <div className="absolute inset-0 z-10 flex items-center justify-center pt-20">
        <div className="flex items-end justify-center -space-x-12 md:-space-x-24 lg:-space-x-32 w-full max-w-7xl px-4">
          {characters.map((char, index) => {
            return (
              <motion.div
                key={char.name}
                style={{
                  y: flyY,
                }}
                initial={{ opacity: 0, x: char.initialPos.x, y: char.initialPos.y + 200 }}
                animate={{ opacity: 1, x: 0, y: 0 }}
                transition={{ 
                  duration: 1.2, 
                  delay: char.delay, 
                  ease: [0.22, 1, 0.36, 1] 
                }}
                className="pointer-events-auto cursor-pointer flex-shrink-0 relative group"
                onMouseEnter={() => setHoveredChar(char.name)}
                onMouseLeave={() => setHoveredChar(null)}
              >
                {/* Glow Effect behind character on hover */}
                <div className="absolute inset-0 bg-accent-1/20 blur-[60px] opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-full" />
                
                <div className={`relative w-40 h-64 md:w-60 md:h-[450px] lg:w-80 lg:h-[600px] transition-all duration-300 ${hoveredChar === char.name ? char.emoteClass : 'animate-float'}`}>
                  <Image
                    src={char.imageSrc}
                    alt={char.name}
                    fill
                    className="object-contain drop-shadow-[0_20px_50px_rgba(0,0,0,0.5)] group-hover:drop-shadow-[0_0_30px_rgba(124,58,237,0.6)] transition-all duration-500"
                    sizes="(max-width: 768px) 160px, (max-width: 1280px) 240px, 320px"
                    priority
                  />
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-bg-primary/40 via-transparent to-bg-primary pointer-events-none z-[20]" />

      {/* UI Content - Layered over characters */}
      <div className="z-[30] text-center px-4 flex flex-col items-center gap-4 mt-auto mb-20 pointer-events-none">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="flex flex-col items-center gap-2 pointer-events-auto"
        >
          <p className="font-rajdhani text-accent-2 uppercase tracking-[0.4em] text-xs md:text-sm font-bold bg-black/40 backdrop-blur-md px-4 py-1 rounded-full border border-white/10">
            {t('hero.subtitle')}
          </p>
          
          <h2 className="font-orbitron text-4xl md:text-6xl font-black uppercase tracking-widest text-white drop-shadow-2xl">
            KLOVER3
          </h2>

          <div className="flex flex-wrap items-center justify-center gap-4 mt-4">
            <a
              href="https://www.twitch.tv/klover3_live"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-accent-1 text-white font-orbitron font-bold tracking-wider px-8 py-3 rounded-lg shadow-[var(--glow-purple)] hover:scale-105 hover:shadow-[0_0_32px_rgba(124,58,237,0.8)] transition-all duration-300"
            >
              {t('hero.watchLive')}
            </a>
            <a
              href="/merch"
              className="border-2 border-accent-2 text-accent-2 font-orbitron font-bold tracking-wider px-8 py-3 rounded-lg hover:bg-accent-2 hover:text-black hover:shadow-[var(--glow-cyan)] transition-all duration-300"
            >
              {t('hero.visitStore')}
            </a>
          </div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 2 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 animate-bounce text-text-muted text-2xl z-[30]"
      >
        <FaChevronDown />
      </motion.div>
    </section>
  );
}