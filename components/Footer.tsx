'use client';

import Link from 'next/link';
import { FaTwitch, FaTwitter, FaSteam } from 'react-icons/fa';
import { SiRiotgames } from 'react-icons/si';
import { useLanguage } from '@/context/LanguageContext';

export default function Footer() {
  const { t } = useLanguage();

  const navLinks = [
    { name: t('nav.home'), href: '/' },
    { name: t('nav.highlights'), href: '/highlights' },
    { name: t('nav.about'), href: '/about' },
    { name: t('nav.merch'), href: '/merch' },
  ];

  return (
    <footer className="bg-bg-primary py-12 border-t border-white/5 mt-auto">
      <div className="container mx-auto px-4 md:px-8 flex flex-col items-center gap-8">
        
        <Link href="/" className="font-orbitron font-black text-4xl tracking-widest bg-clip-text text-transparent bg-gradient-to-r from-accent-1 to-accent-2">
          TREKLOVERN
        </Link>

        <ul className="flex flex-wrap justify-center gap-6">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link href={link.href} className="font-rajdhani text-text-muted hover:text-white transition-colors text-lg">
                {link.name}
              </Link>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-6">
          <a href="https://www.twitch.tv/klover3_live" target="_blank" rel="noopener noreferrer" className="text-text-muted hover:text-[#9146FF] transition-colors text-2xl hover:scale-110 duration-200">
            <FaTwitch />
          </a>
          <a href="https://x.com/klovas" target="_blank" rel="noopener noreferrer" className="text-text-muted hover:text-[#1DA1F2] transition-colors text-2xl hover:scale-110 duration-200">
            <FaTwitter />
          </a>
          <a href="https://steamcommunity.com/id/799987028526886/" target="_blank" rel="noopener noreferrer" className="text-text-muted hover:text-[#66C0F4] transition-colors text-2xl hover:scale-110 duration-200">
            <FaSteam />
          </a>
          <a href="#riot" title="klover3#4701" className="text-text-muted hover:text-[#D13639] transition-colors text-2xl hover:scale-110 duration-200">
            <SiRiotgames />
          </a>
        </div>

        <p className="font-rajdhani text-text-muted/60 text-sm tracking-wide">
          © {new Date().getFullYear()} treklovern · {t('footer.builtForStorm')}
        </p>
      </div>
    </footer>
  );
}