'use client';

import { motion } from 'framer-motion';
import { useLanguage } from '@/context/LanguageContext';

export default function Schedule() {
  const { t } = useLanguage();

  const scheduleData = [
    { day: t('schedule.monday'), time: "8PM EST", title: t('schedule.rankedGrind'), active: true },
    { day: t('schedule.tuesday'), time: "-", title: t('schedule.offDay'), active: false },
    { day: t('schedule.wednesday'), time: "8PM EST", title: t('schedule.chillSquads'), active: true },
    { day: t('schedule.thursday'), time: "-", title: t('schedule.offDay'), active: false },
    { day: t('schedule.friday'), time: "8PM EST", title: t('schedule.tournament'), active: true },
    { day: t('schedule.saturday'), time: "6PM EST", title: t('schedule.marathon'), active: true },
    { day: t('schedule.sunday'), time: "-", title: t('schedule.offDay'), active: false },
  ];

  return (
    <div className="min-h-screen bg-bg-primary pt-24 pb-16">
      <div className="container mx-auto px-4 md:px-8 max-w-4xl">
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="font-orbitron text-5xl md:text-6xl font-black uppercase tracking-widest text-white mb-4">
            {t('schedule.title')}
          </h1>
          <p className="font-rajdhani text-text-muted text-xl">
            {t('schedule.subtitle')}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {scheduleData.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className={`glass-card p-6 flex flex-col justify-center ${item.active ? 'border-l-4 border-l-accent-1' : 'opacity-60'}`}
            >
              <div className="flex justify-between items-center mb-2">
                <h3 className={`font-orbitron font-bold text-xl uppercase tracking-wider ${item.active ? 'text-white' : 'text-text-muted'}`}>
                  {item.day}
                </h3>
                {item.active && (
                  <span className="bg-red-500/20 text-red-400 text-xs font-bold px-2 py-1 rounded border border-red-500/30">
                    {t('stream.live')}
                  </span>
                )}
              </div>
              <p className={`font-rajdhani text-lg ${item.active ? 'text-accent-2' : 'text-text-muted/50'}`}>
                {item.time}
              </p>
              <p className="font-rajdhani text-text-primary mt-2 text-lg">
                {item.title}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}