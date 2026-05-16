'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';

type Language = 'en' | 'no';

interface Translations {
  [key: string]: {
    en: string;
    no: string;
  };
}

const translations: Translations = {
  // Navbar
  'nav.home': { en: 'Home', no: 'Hjem' },
  'nav.highlights': { en: 'Highlights', no: 'Høydepunkter' },
  'nav.about': { en: 'About', no: 'Om meg' },
  'nav.merch': { en: 'Merch', no: 'Merch' },
  'nav.liveOnTwitch': { en: 'LIVE ON TWITCH', no: 'DIREKTE PÅ TWITCH' },

  // Hero Section
  'hero.subtitle': { en: 'FORTNITE CHAMPION · TWITCH STREAMER', no: 'FORTNITE-MESTER · TWITCH-STREAMER' },
  'hero.watchLive': { en: 'WATCH LIVE', no: 'SE DIREKTE' },
  'hero.visitStore': { en: 'VISIT STORE', no: 'BESØK BUTIKKEN' },

  // Bio Teaser
  'bio.title': { en: 'THE LEGEND BEHIND THE CONTROLLER', no: 'LEGENDEN BAK KONTROLLEREN' },
  'bio.text': { 
    en: "treklovern isn't just a gamer — he's a force of nature in the Fortnite scene. With razor-sharp aim, elite game sense, and an infectious energy on stream, he turns every match into must-watch content. Whether he's dropping hot or making clutch plays in the final circle, treklovern delivers. Join thousands of fans who tune in daily to witness greatness.", 
    no: "treklovern er ikke bare en gamer — han er en naturkraft i Fortnite-miljøet. Med sylskarp sikte, elite spillforståelse og en smittende energi på stream, gjør han hver kamp til innhold du bare må se. Enten han lander i kampens hete eller gjør avgjørende trekk i den siste sirkelen, leverer treklovern. Bli med de tusenvis av fans som følger med daglig for å se storhet."
  },
  'bio.readStory': { en: 'READ FULL STORY', no: 'LES HELE HISTORIEN' },

  // Stream Status
  'stream.isLive': { en: 'is LIVE on Twitch', no: 'er DIREKTE på Twitch' },
  'stream.live': { en: 'LIVE', no: 'DIREKTE' },
  'stream.watchNow': { en: 'WATCH NOW', no: 'SE NÅ' },
  'stream.scheduleDays': { en: 'Mon / Wed / Fri / Sat · 8PM EST', no: 'Man / Ons / Fre / Lør · 20:00 EST' },
  'stream.viewSchedule': { en: 'View Full Schedule →', no: 'Se hele planen →' },

  // Footer
  'footer.builtForStorm': { en: 'Built for the Storm', no: 'Bygget for stormen' },

  // About Page
  'about.storyTitle': { en: 'THE STORY', no: 'HISTORIEN' },
  'about.quote': { en: '"I don\'t just play Fortnite. I live it. Every game is a story. Every win is earned."', no: '"Jeg spiller ikke bare Fortnite. Jeg lever det. Hvert spill er en historie. Hver seier er fortjent."' },
  'about.setupTitle': { en: 'MY SETUP', no: 'MITT OPPSETT' },
  'about.loadoutTitle': { en: 'FAVORITE LOADOUT', no: 'FAVORITT-LOADOUT' },
  'about.journeyTitle': { en: 'THE JOURNEY', no: 'REISEN' },
  'about.weapon': { en: 'Weapon', no: 'Våpen' },
  'about.mobility': { en: 'Mobility', no: 'Mobilitet' },
  'about.healing': { en: 'Healing', no: 'Helbredelse' },
  'about.dropSpot': { en: 'Drop Spot', no: 'Landingssted' },
  'about.journey2021': { en: 'Started streaming on Twitch', no: 'Begynte å streame på Twitch' },
  'about.journey2022': { en: 'Hit first 100 followers', no: 'Nådde de første 100 følgerne' },
  'about.journey2023': { en: 'Reached Twitch Affiliate', no: 'Ble Twitch Affiliate' },
  'about.journey2024': { en: 'Tournament finalist — Top 8 regionally', no: 'Turneringsfinalist — Topp 8 regionalt' },
  'about.journey2025': { en: 'Going Pro. Watch this space.', no: 'Blir profesjonell. Følg med her.' },

  // Highlights Page
  'highlights.title': { en: 'HIGHLIGHT REEL', no: 'HØYDEPUNKTER' },
  'highlights.subtitle': { en: 'The best moments, clutches, and victory royales from klover3.', no: 'De beste øyeblikkene, avgjørende kampene og victory royales fra klover3.' },
  'highlights.watchMore': { en: 'More clips on Twitch →', no: 'Flere klipp på Twitch →' },
  'highlights.views': { en: 'VIEWS', no: 'VISNINGER' },

  // Merch Page
  'merch.title': { en: 'GEAR UP LIKE TREKLOVERN', no: 'KLE DEG SOM TREKLOVERN' },
  'merch.subtitle': { en: 'Rep the treklovern brand. Limited drops. Real quality.', no: 'Vis fram treklovern-merket. Begrensede kolleksjoner. Ekte kvalitet.' },
  'merch.comingSoon': { en: 'COMING SOON', no: 'KOMMER SNART' },
  'merch.buyNow': { en: 'BUY NOW', no: 'KJØP NÅ' },
  'merch.visitStore': { en: 'VISIT THE STORE', no: 'BESØK BUTIKKEN' },
  'merch.proHoodie': { en: 'Pro Hoodie', no: 'Pro-hettegenser' },
  'merch.signatureTee': { en: 'Signature T-Shirt', no: 'Signatur-T-skjorte' },
  'merch.mousepad': { en: 'Gaming Mousepad', no: 'Gaming-musematte' },

  // Schedule Page
  'schedule.title': { en: 'STREAM SCHEDULE', no: 'STREAME-PLAN' },
  'schedule.subtitle': { en: 'All times Eastern. Follow on Twitch for notifications.', no: 'Alle tider er i Eastern Time. Følg på Twitch for varsler.' },
  'schedule.monday': { en: 'Monday', no: 'Mandag' },
  'schedule.tuesday': { en: 'Tuesday', no: 'Tirsdag' },
  'schedule.wednesday': { en: 'Wednesday', no: 'Onsdag' },
  'schedule.thursday': { en: 'Thursday', no: 'Torsdag' },
  'schedule.friday': { en: 'Friday', no: 'Fredag' },
  'schedule.saturday': { en: 'Saturday', no: 'Lørdag' },
  'schedule.sunday': { en: 'Sunday', no: 'Søndag' },
  'schedule.rankedGrind': { en: 'Ranked Grind', no: 'Ranked-klatring' },
  'schedule.offDay': { en: 'OFF — RECHARGING', no: 'FRI — LADER OPP' },
  'schedule.chillSquads': { en: 'Chill Squads / Viewer Games', no: 'Chill Squads / Seerspill' },
  'schedule.tournament': { en: 'Tournament / Competitive', no: 'Turnering / Kompetitiv' },
  'schedule.marathon': { en: 'Marathon Stream + Giveaways', no: 'Maraton-stream + Giveaways' },
};

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguageState] = useState<Language>('en');

  useEffect(() => {
    const savedLang = localStorage.getItem('language') as Language;
    if (savedLang && (savedLang === 'en' || savedLang === 'no')) {
      setLanguageState(savedLang);
    }
  }, []);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem('language', lang);
  };

  const t = (key: string): string => {
    if (!translations[key]) {
      console.warn(`Translation key not found: ${key}`);
      return key;
    }
    return translations[key][language];
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
