import React, { useState } from 'react';
import {
  Check,
  Copy,
  Download,
  ExternalLink,
  Github,
  Linkedin,
  Mail,
  MessageCircle,
} from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';
import { PERSONAL_INFO, UI_COPY } from '../../data/portfolioData';

export const Contact: React.FC = () => {
  const { language } = useLanguage();
  const t = UI_COPY[language].contact;
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(PERSONAL_INFO.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 3000);
    } catch {
      window.location.href = `mailto:${PERSONAL_INFO.email}`;
    }
  };

  return (
    <footer id="contacto" className="mx-auto max-w-6xl px-4 pt-20 pb-14 sm:px-6">
      <div className="glass-panel rounded-3xl p-6 sm:p-10">
        {/* Header */}
        <div className="mx-auto max-w-3xl text-center">
          <span className="font-mono text-xs font-bold tracking-widest uppercase text-g-blue">
            {t.eyebrow}
          </span>
          <h2 className="mt-2 font-display text-2xl font-extrabold tracking-tight sm:text-4xl">
            {t.title}
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-[var(--text-secondary)] sm:text-base">
            {t.subtitle}
          </p>
        </div>

        {/* Main Contact Cards Grid */}
        <div className="mt-10 grid gap-5 md:grid-cols-2">
          {/* Email Copy Card */}
          <div className="rounded-2xl border border-[var(--border-glass)] bg-[var(--bg-glass-subtle)] p-6">
            <div className="flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-g-blue-soft text-g-blue">
                <Mail className="h-5 w-5" />
              </div>
              <div>
                <p className="font-mono text-xs text-[var(--text-muted)]">
                  {t.emailLabel}
                </p>
                <p className="font-mono text-sm font-bold sm:text-base">
                  {PERSONAL_INFO.email}
                </p>
              </div>
            </div>

            <div className="mt-5 flex flex-wrap items-center gap-3">
              <button
                type="button"
                onClick={handleCopyEmail}
                className={`inline-flex cursor-pointer items-center gap-2 rounded-xl px-4 py-2.5 text-xs font-bold transition-all ${
                  copied
                    ? 'bg-g-green text-white dark:text-[#10131A]'
                    : 'bg-g-blue text-white hover:opacity-95 dark:text-[#10131A]'
                }`}
              >
                {copied ? (
                  <>
                    <Check className="h-4 w-4" />
                    <span>{t.copiedEmail}</span>
                  </>
                ) : (
                  <>
                    <Copy className="h-4 w-4" />
                    <span>{t.copyEmail}</span>
                  </>
                )}
              </button>

              <a
                href={`mailto:${PERSONAL_INFO.email}`}
                className="glass-panel inline-flex items-center gap-1.5 rounded-xl px-4 py-2.5 text-xs font-semibold"
              >
                <span>Abrir cliente de correo</span>
                <ExternalLink className="h-3.5 w-3.5" />
              </a>
            </div>
          </div>

          {/* WhatsApp Direct Card */}
          <div className="rounded-2xl border border-[var(--border-glass)] bg-[var(--bg-glass-subtle)] p-6">
            <div className="flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-g-green-soft text-g-green">
                <MessageCircle className="h-5 w-5" />
              </div>
              <div>
                <p className="font-mono text-xs text-[var(--text-muted)]">
                  {t.whatsappTitle}
                </p>
                <p className="font-mono text-sm font-bold sm:text-base">
                  {PERSONAL_INFO.whatsappNumber}
                </p>
              </div>
            </div>
            <p className="mt-2 text-xs text-[var(--text-secondary)]">
              {t.whatsappDesc}
            </p>
            <div className="mt-4">
              <a
                href={PERSONAL_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-xl bg-g-green px-4 py-2.5 text-xs font-bold text-white transition-opacity hover:opacity-95 dark:text-[#10131A]"
              >
                <MessageCircle className="h-4 w-4" />
                <span>{t.whatsappBtn}</span>
                <ExternalLink className="h-3.5 w-3.5" />
              </a>
            </div>
          </div>
        </div>

        {/* Secondary Row: LinkedIn, GitHub & CV Download */}
        <div className="mt-5 grid gap-5 md:grid-cols-3">
          {/* LinkedIn */}
          <a
            href={PERSONAL_INFO.linkedinUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="glass-panel-interactive flex flex-col justify-between rounded-2xl p-5"
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2.5">
                <Linkedin className="h-5 w-5 text-g-blue" />
                <span className="font-display text-base font-bold">LinkedIn</span>
              </div>
              <ExternalLink className="h-4 w-4 text-[var(--text-muted)]" />
            </div>
            <p className="mt-2 text-xs text-[var(--text-secondary)]">
              {t.linkedinDesc}
            </p>
          </a>

          {/* GitHub */}
          <a
            href={PERSONAL_INFO.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="glass-panel-interactive flex flex-col justify-between rounded-2xl p-5"
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2.5">
                <Github className="h-5 w-5" />
                <span className="font-display text-base font-bold">GitHub</span>
              </div>
              <ExternalLink className="h-4 w-4 text-[var(--text-muted)]" />
            </div>
            <p className="mt-2 text-xs text-[var(--text-secondary)]">
              {t.githubDesc}
            </p>
          </a>

          {/* CV Download */}
          <a
            href={PERSONAL_INFO.cvUrl[language]}
            download
            className="glass-panel-interactive flex flex-col justify-between rounded-2xl border-g-yellow/35 p-5"
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2.5">
                <Download className="h-5 w-5 text-g-yellow" />
                <span className="font-display text-base font-bold">
                  {t.cvCardTitle}
                </span>
              </div>
              <span className="rounded-md bg-g-yellow-soft px-2 py-0.5 font-mono text-[10px] font-bold text-g-yellow">
                PDF · {language.toUpperCase()}
              </span>
            </div>
            <p className="mt-2 text-xs text-[var(--text-secondary)]">
              {t.cvCardBtn}
            </p>
          </a>
        </div>
      </div>

      {/* Bottom Copyright Bar */}
      <div className="mt-10 flex flex-col items-center justify-between gap-4 border-t border-[var(--border-glass)] pt-6 text-center sm:flex-row sm:text-left">
        <div className="flex items-center gap-2.5">
          <span className="inline-flex h-7 w-7 items-center justify-center rounded-lg border border-[var(--border-glass-strong)] font-display text-xs font-extrabold">
            <span className="text-g-blue">M</span>E
          </span>
          <span className="text-xs text-[var(--text-secondary)]">
            © {new Date().getFullYear()} {PERSONAL_INFO.fullName}. {t.footerRights}
          </span>
        </div>
        <p className="font-mono text-[11px] text-[var(--text-muted)]">
          {t.footerBuiltWith}
        </p>
      </div>
    </footer>
  );
};
