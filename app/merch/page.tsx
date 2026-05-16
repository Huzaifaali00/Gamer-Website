'use client';

import { motion } from 'framer-motion';
import { useLanguage } from '@/context/LanguageContext';
import Image from 'next/image';

export default function Merch() {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-bg-secondary pt-24 pb-16 flex flex-col items-center justify-center text-center">
      <div className="container mx-auto px-4 md:px-8">
        <motion.h1 
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          className="font-orbitron text-5xl md:text-7xl font-black uppercase tracking-widest text-white mb-6 drop-shadow-[0_0_24px_rgba(245,158,11,0.5)]"
        >
          {t('merch.title').split('TREKLOVERN')[0]} <br className="md:hidden" />
          <span className="text-accent-3">TREKLOVERN</span> {t('merch.title').split('TREKLOVERN')[1]}
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="font-rajdhani text-text-muted text-xl md:text-2xl mb-16 max-w-2xl mx-auto"
        >
          {t('merch.subtitle')}
        </motion.p>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mb-16 max-w-5xl mx-auto">
          {[
            { 
              name: t('merch.proHoodie'), 
              image: "/images/hoodie.png",
              link: "https://klover3-live-shop.fourthwall.com/products/kloever3-club-suit-tie-dye-hoodie"
            },
            { 
              name: t('merch.signatureTee'), 
              image: "/images/shirt.png",
              link: "https://klover3-live-shop.fourthwall.com/products/kloever3-club-symbol-t-shirt-only-dark-color"
            },
            { 
              name: t('merch.mousepad'), 
              image: "/images/pad.png",
              link: "https://klover3-live-shop.fourthwall.com/products/sleek-gamers-essential-mouse-pad"
            }
          ].map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.4 + index * 0.1 }}
              className="glass-card aspect-[3/4] flex flex-col items-center justify-center relative group overflow-hidden"
            >
              <div className="absolute inset-4 rounded-xl flex items-center justify-center overflow-hidden">
                <Image 
                  src={item.image} 
                  alt={item.name}
                  fill
                  className="object-contain group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <a 
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="absolute inset-0 bg-black/60 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity z-20"
              >
                <span className="bg-accent-3 text-black font-orbitron font-bold px-4 py-2 rounded-full uppercase tracking-wider text-sm mb-4">
                  {t('merch.buyNow')}
                </span>
              </a>
              <h3 className="absolute bottom-8 font-orbitron font-bold text-white z-10 text-lg uppercase tracking-wider bg-black/40 backdrop-blur-sm px-4 py-1 rounded-md">
                {item.name}
              </h3>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
        >
          <a
            href="https://klover3-live-shop.fourthwall.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-accent-3 text-black font-orbitron font-black tracking-widest text-xl px-12 py-5 rounded-xl hover:scale-105 transition-transform shadow-[0_0_32px_rgba(245,158,11,0.6)]"
          >
            {t('merch.visitStore')}
          </a>
        </motion.div>
      </div>
    </div>
  );
}