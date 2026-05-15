import type { Metadata } from 'next';
import { Orbitron, Rajdhani } from 'next/font/google';
import '../styles/globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { LanguageProvider } from '@/context/LanguageContext';

const orbitron = Orbitron({ 
  subsets: ['latin'], 
  weight: ['400', '500', '600', '700', '800', '900'],
  variable: '--font-orbitron' 
});

const rajdhani = Rajdhani({ 
  subsets: ['latin'], 
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-rajdhani' 
});

export const metadata: Metadata = {
  title: 'TREKLOVERN | Fortnite Champion & Twitch Streamer',
  description: 'The official website of treklovern. Dominating the Storm. One Victory Royale at a Time.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${orbitron.variable} ${rajdhani.variable} font-rajdhani text-text-primary bg-bg-primary`}>
        <LanguageProvider>
          <Navbar />
          <main className="min-h-screen pt-20">
            {children}
          </main>
          <Footer />
        </LanguageProvider>
      </body>
    </html>
  );
}