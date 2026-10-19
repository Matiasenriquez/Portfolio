import React from 'react';
import {
  CheckCircle2,
  Code2,
  Cpu,
  Database,
  MessageCircle,
  ShieldCheck,
} from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';
import { PERSONAL_INFO, SERVICES_DATA, UI_COPY } from '../../data/portfolioData';
import type { GoogleColor, ServiceItem } from '../../types/portfolio';

export const Services: React.FC = () => {
  const { language } = useLanguage();
  const t = UI_COPY[language].services;
  const services = SERVICES_DATA[language];

  const renderIcon = (iconName: ServiceItem['iconName']) => {
    switch (iconName) {
      case 'code':
        return <Code2 className="h-5 w-5" />;
      case 'cpu':
        return <Cpu className="h-5 w-5" />;
      case 'database':
        return <Database className="h-5 w-5" />;
      case 'shieldCheck':
        return <ShieldCheck className="h-5 w-5" />;
    }
  };

  const colorMap: Record<
    GoogleColor,
    { iconBg: string; checkColor: string; hoverBorder: string }
  > = {
    blue: {
      iconBg: 'bg-g-blue-soft text-g-blue',
      checkColor: 'text-g-blue',
      hoverBorder: 'hover:border-g-blue/45',
    },
    green: {
      iconBg: 'bg-g-green-soft text-g-green',
      checkColor: 'text-g-green',
      hoverBorder: 'hover:border-g-green/45',
    },
    yellow: {
      iconBg: 'bg-g-yellow-soft text-g-yellow',
      checkColor: 'text-g-yellow',
      hoverBorder: 'hover:border-g-yellow/45',
    },
    red: {
      iconBg: 'bg-g-red-soft text-g-red',
      checkColor: 'text-g-red',
      hoverBorder: 'hover:border-g-red/45',
    },
  };

  return (
    <section id="servicios" className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
      {/* Header */}
      <div className="mx-auto max-w-3xl text-center">
        <span className="font-mono text-xs font-bold tracking-widest uppercase text-g-green">
          {t.eyebrow}
        </span>
        <h2 className="mt-2 font-display text-3xl font-extrabold tracking-tight sm:text-4xl">
          {t.title}
        </h2>
        <p className="mt-4 text-sm leading-relaxed text-[var(--text-secondary)] sm:text-base">
          {t.subtitle}
        </p>
      </div>

      {/* Services Grid */}
      <div className="mt-10 grid gap-6 md:grid-cols-2">
        {services.map((service) => {
          const style = colorMap[service.color];
          return (
            <div
              key={service.id}
              className={`glass-panel-interactive flex flex-col justify-between rounded-3xl p-6 sm:p-7 ${style.hoverBorder}`}
            >
              <div>
                <div className="flex items-start gap-4">
                  <div
                    className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl ${style.iconBg}`}
                  >
                    {renderIcon(service.iconName)}
                  </div>
                  <div>
                    <h3 className="font-display text-lg font-bold tracking-tight sm:text-xl">
                      {service.title}
                    </h3>
                    <p className="mt-2 text-xs leading-relaxed text-[var(--text-secondary)] sm:text-sm">
                      {service.description}
                    </p>
                  </div>
                </div>

                {/* Deliverables */}
                <div className="mt-6 rounded-2xl border border-[var(--border-glass)] bg-[var(--bg-glass-subtle)] p-4">
                  <p className="font-mono text-[11px] font-bold uppercase tracking-wider text-[var(--text-muted)]">
                    {t.deliverablesLabel}
                  </p>
                  <ul className="mt-2.5 space-y-2">
                    {service.deliverables.map((item, idx) => (
                      <li
                        key={idx}
                        className="flex items-start gap-2.5 text-xs text-[var(--text-secondary)]"
                      >
                        <CheckCircle2
                          className={`mt-0.5 h-3.5 w-3.5 shrink-0 ${style.checkColor}`}
                        />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Direct WhatsApp Inquiry CTA */}
              <div className="mt-5 pt-2">
                <a
                  href={PERSONAL_INFO.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 font-mono text-xs font-semibold text-g-blue transition-opacity hover:opacity-80"
                >
                  <MessageCircle className="h-4 w-4 text-g-green" />
                  <span>{t.ctaConsult}</span>
                </a>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
