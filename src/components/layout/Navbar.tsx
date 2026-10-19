import React, { useState } from 'react';
import { Globe, Menu, Moon, Sun, X, MessageSquare } from 'lucide-react';
import { useTheme } from '../../context/ThemeContext';
import { useLanguage } from '../../context/LanguageContext';
import { PERSONAL_INFO, UI_COPY } from '../../data/portfolioData';

export const Navbar: React.FC = () => {
  const { theme, toggleTheme } = useTheme();
  const { language, toggleLanguage } = useLanguage();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const t = UI_COPY[language].nav;

  const navLinks = [
    { href: '#inicio', label: t.about },
    { href: '#stack', label: t.stack },
    { href: '#proyectos', label: t.projects },
    { href: '#servicios', label: t.services },
    { href: '#trayectoria', label: t.trajectory },
    { href: '#contacto', label: t.contact },
  ];

  return (
    <header className="fixed top-0 right-0 left-0 z-40 px-4 pt-4 sm:px-6">
      <nav
        aria-label="Main Navigation"
        className="glass-navbar mx-auto flex max-w-6xl items-center justify-between rounded-2xl px-4 py-3 sm:px-6"
      >
        {/* Brand Logo "ME" */}
        <a
          href="#inicio"
          className="group flex items-center gap-3 focus:outline-none"
          title={PERSONAL_INFO.fullName}
        >
          <div className="relative flex h-10 w-10 items-center justify-center rounded-xl border border-[var(--border-glass-strong)] bg-[var(--bg-glass-hover)] font-display text-base font-extrabold tracking-tight shadow-sm transition-transform duration-200 group-hover:scale-105">
            <span className="text-g-blue">M</span>
            <span>E</span>
            {/* 4 Google Style micro-dots */}
            <span className="absolute -bottom-1 flex gap-0.5">
              <span className="h-1 w-1 rounded-full bg-g-blue" />
              <span className="h-1 w-1 rounded-full bg-g-red" />
              <span className="h-1 w-1 rounded-full bg-g-yellow" />
              <span className="h-1 w-1 rounded-full bg-g-green" />
            </span>
          </div>
          <div className="hidden sm:block">
            <p className="font-display text-sm font-bold tracking-tight">
              {PERSONAL_INFO.shortName}
            </p>
            <p className="font-mono text-[11px] text-[var(--text-muted)]">
              Full Stack · SecOps
            </p>
          </div>
        </a>

        {/* Desktop Links */}
        <ul className="hidden items-center gap-1 md:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="rounded-xl px-3.5 py-2 text-sm font-medium text-[var(--text-secondary)] transition-colors hover:bg-[var(--google-blue-soft)] hover:text-g-blue"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Controls: Language, Theme & CTA */}
        <div className="flex items-center gap-2">
          {/* Language Switcher ES / EN */}
          <button
            type="button"
            onClick={toggleLanguage}
            className="glass-panel flex cursor-pointer items-center gap-1.5 rounded-xl px-3 py-2 font-mono text-xs font-semibold transition-all hover:border-[var(--google-blue)] hover:text-g-blue"
            title={language === 'es' ? 'Switch to English' : 'Cambiar a Español'}
          >
            <Globe className="h-3.5 w-3.5 text-g-blue" />
            <span>{language.toUpperCase()}</span>
          </button>

          {/* Theme Switcher Light / Night Shift (#10131A) */}
          <button
            type="button"
            onClick={toggleTheme}
            className="glass-panel flex h-9 w-9 cursor-pointer items-center justify-center rounded-xl transition-all hover:border-[var(--google-yellow)]"
            title={theme === 'dark' ? t.themeTooltipLight : t.themeTooltipDark}
            aria-label={theme === 'dark' ? t.themeTooltipLight : t.themeTooltipDark}
          >
            {theme === 'dark' ? (
              <Sun className="h-4 w-4 text-g-yellow" />
            ) : (
              <Moon className="h-4 w-4 text-g-blue" />
            )}
          </button>

          {/* Primary CTA */}
          <a
            href="#contacto"
            className="hidden items-center gap-1.5 rounded-xl bg-g-blue px-4 py-2 text-xs font-semibold text-white shadow-sm transition-transform hover:scale-[1.02] active:scale-[0.98] sm:inline-flex dark:text-[#10131A]"
          >
            <MessageSquare className="h-3.5 w-3.5" />
            <span>{t.hireMe}</span>
          </a>

          {/* Mobile Menu Button */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            className="glass-panel flex h-9 w-9 items-center justify-center rounded-xl md:hidden"
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </div>
      </nav>

      {/* Mobile Dropdown Menu */}
      {mobileMenuOpen && (
        <div className="glass-modal mx-auto mt-2 max-w-6xl rounded-2xl p-4 md:hidden">
          <ul className="flex flex-col gap-1">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="block rounded-xl px-4 py-2.5 text-sm font-medium text-[var(--text-secondary)] transition-colors hover:bg-[var(--google-blue-soft)] hover:text-g-blue"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <div className="mt-3 border-t border-[var(--border-glass)] pt-3">
            <a
              href="#contacto"
              onClick={() => setMobileMenuOpen(false)}
              className="flex w-full items-center justify-center gap-2 rounded-xl bg-g-blue py-2.5 text-sm font-semibold text-white dark:text-[#10131A]"
            >
              <MessageSquare className="h-4 w-4" />
              <span>{t.hireMe}</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
