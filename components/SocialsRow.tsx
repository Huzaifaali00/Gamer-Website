'use client';

import { motion } from 'framer-motion';
import { FaTwitch, FaTwitter, FaSteam } from 'react-icons/fa';
import { SiRiotgames } from 'react-icons/si';

const socials = [
  { icon: FaTwitch, href: "https://www.twitch.tv/klover3_live", color: "hover:text-[#9146FF]", shadow: "hover:shadow-[0_0_24px_rgba(145,70,255,0.6)]" },
  { icon: FaTwitter, href: "https://x.com/klovas", color: "hover:text-[#1DA1F2]", shadow: "hover:shadow-[0_0_24px_rgba(29,161,242,0.6)]" },
  { icon: FaSteam, href: "https://steamcommunity.com/id/799987028526886/", color: "hover:text-[#66C0F4]", shadow: "hover:shadow-[0_0_24px_rgba(102,192,244,0.6)]" },
  { icon: SiRiotgames, href: "#riot", color: "hover:text-[#D13639]", shadow: "hover:shadow-[0_0_24px_rgba(209,54,57,0.6)]" },
];

export default function SocialsRow() {
  return (
    <section className="py-16 bg-bg-secondary border-t border-white/5">
      <div className="container mx-auto px-4 flex justify-center items-center gap-6 md:gap-10">
        {socials.map((social, index) => {
          const Icon = social.icon;
          return (
            <motion.a
              key={index}
              href={social.href}
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`glass-card w-14 h-14 md:w-16 md:h-16 flex items-center justify-center rounded-full text-text-muted transition-all duration-300 hover:scale-110 hover:border-transparent ${social.color} ${social.shadow}`}
            >
              <Icon className="text-2xl md:text-3xl" />
            </motion.a>
          );
        })}
      </div>
    </section>
  );
}