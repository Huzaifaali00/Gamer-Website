'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { HiMenuAlt3, HiX } from 'react-icons/hi';
import { useLanguage } from '@/context/LanguageContext';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const { t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 80);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: t('nav.home'), href: '/' },
    { name: t('nav.highlights'), href: '/highlights' },
    { name: t('nav.about'), href: '/about' },
    { name: t('nav.merch'), href: '/merch' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'py-2 bg-bg-secondary/70 backdrop-blur-md' : 'py-4 bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 md:px-8 flex items-center justify-between">
        <Link href="/" className="font-orbitron font-bold text-2xl tracking-widest bg-clip-text text-transparent bg-gradient-to-r from-accent-1 to-accent-2">
          TREKLOVERN
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          <ul className="flex items-center gap-6">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className={`font-rajdhani font-semibold text-lg transition-colors pb-1 border-b-2 ${
                      isActive
                        ? 'text-accent-1 border-accent-1 [box-shadow:0_2px_10px_rgba(124,58,237,0.5)]'
                        : 'text-text-primary hover:text-accent-2 border-transparent'
                    }`}
                  >
                    {link.name}
                  </Link>
                </li>
              );
            })}
          </ul>
          
          <a
            href="https://www.twitch.tv/klover3_live"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-red-500/10 text-red-500 px-4 py-2 rounded-full border border-red-500/30 font-orbitron text-sm uppercase tracking-wider font-bold animate-[pulse-live_1.5s_infinite]"
          >
            <span className="w-2 h-2 rounded-full bg-red-500" />
            {t('nav.liveOnTwitch')}
          </a>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-3xl text-text-primary"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <HiX /> : <HiMenuAlt3 />}
        </button>
      </div>

      {/* Mobile Menu Drawer */}
      {isMobileMenuOpen && (
        <div className="absolute top-full left-0 w-full bg-bg-primary/95 backdrop-blur-lg border-b border-white/10 md:hidden flex flex-col p-6 gap-6 shadow-xl">
          <ul className="flex flex-col gap-4">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={`block font-rajdhani font-semibold text-xl transition-colors ${
                      isActive ? 'text-accent-1' : 'text-text-primary'
                    }`}
                  >
                    {link.name}
                  </Link>
                </li>
              );
            })}
          </ul>
          <a
            href="https://twitch.tv/treklovern"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setIsMobileMenuOpen(false)}
            className="flex items-center justify-center gap-2 bg-red-500/20 text-red-400 px-6 py-3 rounded-lg border border-red-500/50 font-orbitron text-sm uppercase tracking-wider font-bold"
          >
            <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
            {t('nav.liveOnTwitch')}
          </a>
        </div>
      )}
    </nav>
  );
}