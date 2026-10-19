import React, { createContext, useContext, useEffect, useState } from 'react';
import type { Language } from '../types/portfolio';

interface LanguageContextValue {
  language: Language;
  toggleLanguage: () => void;
  setLanguage: (lang: Language) => void;
}

const LanguageContext = createContext<LanguageContextValue | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguageState] = useState<Language>(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('me-portfolio-lang') as Language | null;
      if (saved === 'es' || saved === 'en') {
        return saved;
      }
      const browserLang = navigator.language.toLowerCase();
      return browserLang.startsWith('es') ? 'es' : 'en';
    }
    return 'es';
  });

  useEffect(() => {
    document.documentElement.lang = language;
    localStorage.setItem('me-portfolio-lang', language);
  }, [language]);

  const toggleLanguage = () => {
    setLanguageState((prev) => (prev === 'es' ? 'en' : 'es'));
  };

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, setLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = (): LanguageContextValue => {
  const ctx = useContext(LanguageContext);
  if (!ctx) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return ctx;
};
