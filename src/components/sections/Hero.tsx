import React, { useState } from 'react';
import {
  ArrowRight,
  Check,
  Copy,
  Download,
  ExternalLink,
  Github,
  Linkedin,
  Mail,
  MessageCircle,
  ShieldCheck,
  Terminal,
  Sparkles,
} from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';
import { PERSONAL_INFO, UI_COPY } from '../../data/portfolioData';

export const Hero: React.FC = () => {
  const { language } = useLanguage();
  const t = UI_COPY[language].hero;
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(PERSONAL_INFO.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2600);
    } catch {
      window.location.href = `mailto:${PERSONAL_INFO.email}`;
    }
  };

  const statColorClasses = {
    blue: 'border-g-blue/30 bg-g-blue-soft text-g-blue',
    green: 'border-g-green/30 bg-g-green-soft text-g-green',
    yellow: 'border-g-yellow/30 bg-g-yellow-soft text-g-yellow',
    red: 'border-g-red/30 bg-g-red-soft text-g-red',
  };

  return (
    <section
      id="inicio"
      className="relative mx-auto max-w-6xl px-4 pt-32 pb-20 sm:px-6 lg:pt-36 lg:pb-24"
    >
      <div className="grid items-center gap-12 lg:grid-cols-12">
        {/* Left Column: Main Value Proposition */}
        <div className="lg:col-span-7">
          {/* Availability Pill (Google Green) */}
          <div className="glass-panel mb-6 inline-flex items-center gap-2.5 rounded-full px-4 py-1.5">
            <span className="relative flex h-2.5 w-2.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-g-green opacity-75" />
              <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-g-green" />
            </span>
            <span className="text-xs font-medium text-[var(--text-secondary)]">
              {t.availabilityBadge}
            </span>
          </div>

          {/* Greeting & Role */}
          <div className="mb-3 flex flex-wrap items-center gap-2 font-mono text-xs font-semibold tracking-wider uppercase text-g-blue">
            <span>{t.greeting}</span>
            <span className="text-[var(--text-muted)]">•</span>
            <span className="rounded-md bg-g-blue-soft px-2 py-0.5 text-[11px]">
              {PERSONAL_INFO.brand}
            </span>
          </div>

          {/* Main Headline */}
          <h1 className="font-display text-3xl leading-[1.15] font-extrabold tracking-tight sm:text-5xl lg:text-[52px]">
            {t.headlinePart1}
            <span className="bg-gradient-to-r from-[var(--google-blue)] via-[var(--google-green)] to-[var(--google-yellow)] bg-clip-text text-transparent">
              {t.headlineHighlight}
            </span>
            {t.headlinePart2}
          </h1>

          {/* Subtitle */}
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-[var(--text-secondary)] sm:text-lg">
            {t.description}
          </p>

          {/* Cybersecurity Differential Banner */}
          <div className="glass-panel mt-5 flex items-start gap-3.5 rounded-2xl border-l-4 border-l-[var(--google-red)] p-4">
            <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-g-red-soft text-g-red">
              <ShieldCheck className="h-5 w-5" />
            </div>
            <p className="text-xs leading-relaxed text-[var(--text-secondary)] sm:text-sm">
              {t.securityNote}
            </p>
          </div>

          {/* Primary & Secondary CTAs */}
          <div className="mt-8 flex flex-wrap items-center gap-3.5">
            <a
              href="#proyectos"
              className="inline-flex items-center gap-2 rounded-xl bg-g-blue px-6 py-3.5 text-sm font-bold text-white shadow-md transition-all hover:scale-[1.02] hover:opacity-95 active:scale-[0.98] dark:text-[#10131A]"
            >
              <span>{t.ctaProjects}</span>
              <ArrowRight className="h-4 w-4" />
            </a>

            <a
              href={PERSONAL_INFO.cvUrl[language]}
              download
              className="glass-panel-interactive inline-flex items-center gap-2 rounded-xl px-5 py-3.5 text-sm font-semibold"
            >
              <Download className="h-4 w-4 text-g-blue" />
              <span>{t.ctaDownloadCv}</span>
            </a>
          </div>

          {/* Direct Social & Contact Quick Bar */}
          <div className="mt-8 flex flex-wrap items-center gap-2.5">
            <a
              href={PERSONAL_INFO.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="glass-panel-interactive inline-flex items-center gap-2 rounded-xl px-3.5 py-2 text-xs font-medium text-[var(--text-secondary)] hover:text-[var(--text-primary)]"
            >
              <Github className="h-4 w-4" />
              <span>GitHub</span>
              <ExternalLink className="h-3 w-3 opacity-60" />
            </a>

            <a
              href={PERSONAL_INFO.linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="glass-panel-interactive inline-flex items-center gap-2 rounded-xl px-3.5 py-2 text-xs font-medium text-[var(--text-secondary)] hover:text-g-blue"
            >
              <Linkedin className="h-4 w-4 text-g-blue" />
              <span>LinkedIn</span>
              <ExternalLink className="h-3 w-3 opacity-60" />
            </a>

            <a
              href={PERSONAL_INFO.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="glass-panel-interactive inline-flex items-center gap-2 rounded-xl px-3.5 py-2 text-xs font-medium text-[var(--text-secondary)] hover:text-g-green"
            >
              <MessageCircle className="h-4 w-4 text-g-green" />
              <span>WhatsApp</span>
            </a>

            <button
              type="button"
              onClick={handleCopyEmail}
              className={`glass-panel-interactive inline-flex cursor-pointer items-center gap-2 rounded-xl px-3.5 py-2 text-xs font-medium transition-colors ${
                copied
                  ? 'border-g-green bg-g-green-soft text-g-green'
                  : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)]'
              }`}
            >
              {copied ? (
                <>
                  <Check className="h-3.5 w-3.5 text-g-green" />
                  <span>{UI_COPY[language].contact.copiedEmail}</span>
                </>
              ) : (
                <>
                  <Mail className="h-3.5 w-3.5 text-g-yellow" />
                  <span>{PERSONAL_INFO.email}</span>
                  <Copy className="h-3 w-3 opacity-60" />
                </>
              )}
            </button>
          </div>
        </div>

        {/* Right Column: Interactive Glass Developer Architecture Card */}
        <div className="lg:col-span-5">
          <div className="glass-panel relative overflow-hidden rounded-3xl p-6 sm:p-7">
            {/* Top Window Bar with Google Colors */}
            <div className="mb-5 flex items-center justify-between border-b border-[var(--border-glass)] pb-4">
              <div className="flex items-center gap-2">
                <span className="h-3 w-3 rounded-full bg-g-red" />
                <span className="h-3 w-3 rounded-full bg-g-yellow" />
                <span className="h-3 w-3 rounded-full bg-g-green" />
                <span className="h-3 w-3 rounded-full bg-g-blue" />
              </div>
              <div className="flex items-center gap-1.5 font-mono text-xs text-[var(--text-muted)]">
                <Terminal className="h-3.5 w-3.5 text-g-blue" />
                <span>me-profile.ts</span>
              </div>
            </div>

            {/* Code-style Profile Summary */}
            <div className="space-y-3 font-mono text-xs leading-relaxed sm:text-[13px]">
              <div>
                <span className="text-g-blue">const</span>{' '}
                <span className="font-semibold text-[var(--text-primary)]">developer</span> = {'{'}
              </div>
              <div className="pl-4">
                <span className="text-[var(--text-muted)]">brand:</span>{' '}
                <span className="text-g-yellow">"{PERSONAL_INFO.brand}"</span>,
              </div>
              <div className="pl-4">
                <span className="text-[var(--text-muted)]">name:</span>{' '}
                <span className="text-g-green">"{PERSONAL_INFO.fullName}"</span>,
              </div>
              <div className="pl-4">
                <span className="text-[var(--text-muted)]">frontend:</span> [
                <span className="text-g-blue">"React"</span>,{' '}
                <span className="text-g-blue">"TypeScript"</span>,{' '}
                <span className="text-g-blue">"Tailwind"</span>],
              </div>
              <div className="pl-4">
                <span className="text-[var(--text-muted)]">backend:</span> [
                <span className="text-g-green">"Node.js"</span>,{' '}
                <span className="text-g-green">"Express"</span>,{' '}
                <span className="text-g-green">"Python"</span>,{' '}
                <span className="text-g-green">"FastAPI"</span>,{' '}
                <span className="text-g-green">"Django"</span>],
              </div>
              <div className="pl-4">
                <span className="text-[var(--text-muted)]">databases:</span> [
                <span className="text-g-yellow">"MongoDB"</span>,{' '}
                <span className="text-g-yellow">"PostgreSQL"</span>],
              </div>
              <div className="pl-4">
                <span className="text-[var(--text-muted)]">systems:</span> [
                <span className="text-g-green">"MateRun"</span>,{' '}
                <span className="text-g-blue">"MatDeps"</span>,{' '}
                <span className="text-g-yellow">"MatClin"</span>],
              </div>
              <div className="pl-4">
                <span className="text-[var(--text-muted)]">security:</span>{' '}
                <span className="text-g-red">"Cybersecurity Degree (In Progress)"</span>
              </div>
              <div>{'}'};</div>
            </div>

            {/* 4 Key Stats Grid with Google Palette */}
            <div className="mt-6 grid grid-cols-2 gap-3 border-t border-[var(--border-glass)] pt-5">
              {t.stats.map((stat) => (
                <div
                  key={stat.label}
                  className={`rounded-2xl border p-3 ${statColorClasses[stat.color]}`}
                >
                  <div className="flex items-center gap-1.5 font-display text-sm font-extrabold sm:text-base">
                    <Sparkles className="h-3.5 w-3.5 shrink-0" />
                    <span>{stat.value}</span>
                  </div>
                  <p className="mt-0.5 text-[11px] opacity-85">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
