import React from 'react';
import { Award, Code, GraduationCap, CheckCircle2 } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';
import { TRAJECTORY_DATA, UI_COPY } from '../../data/portfolioData';
import type { GoogleColor, TrajectoryItem } from '../../types/portfolio';

export const Trajectory: React.FC = () => {
  const { language } = useLanguage();
  const t = UI_COPY[language].trajectory;
  const items = TRAJECTORY_DATA[language];

  const renderIcon = (type: TrajectoryItem['type']) => {
    switch (type) {
      case 'product':
        return <Code className="h-5 w-5" />;
      case 'education':
        return <GraduationCap className="h-5 w-5" />;
      case 'certification':
        return <Award className="h-5 w-5" />;
    }
  };

  const colorStyles: Record<
    GoogleColor,
    { badge: string; iconBox: string; check: string; borderLeft: string }
  > = {
    blue: {
      badge: 'bg-g-blue-soft text-g-blue border-g-blue/30',
      iconBox: 'bg-g-blue-soft text-g-blue',
      check: 'text-g-blue',
      borderLeft: 'border-l-[var(--google-blue)]',
    },
    red: {
      badge: 'bg-g-red-soft text-g-red border-g-red/30',
      iconBox: 'bg-g-red-soft text-g-red',
      check: 'text-g-red',
      borderLeft: 'border-l-[var(--google-red)]',
    },
    green: {
      badge: 'bg-g-green-soft text-g-green border-g-green/30',
      iconBox: 'bg-g-green-soft text-g-green',
      check: 'text-g-green',
      borderLeft: 'border-l-[var(--google-green)]',
    },
    yellow: {
      badge: 'bg-g-yellow-soft text-g-yellow border-g-yellow/30',
      iconBox: 'bg-g-yellow-soft text-g-yellow',
      check: 'text-g-yellow',
      borderLeft: 'border-l-[var(--google-yellow)]',
    },
  };

  return (
    <section id="trayectoria" className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
      {/* Header */}
      <div className="mx-auto max-w-3xl text-center">
        <span className="font-mono text-xs font-bold tracking-widest uppercase text-g-yellow">
          {t.eyebrow}
        </span>
        <h2 className="mt-2 font-display text-3xl font-extrabold tracking-tight sm:text-4xl">
          {t.title}
        </h2>
        <p className="mt-4 text-sm leading-relaxed text-[var(--text-secondary)] sm:text-base">
          {t.subtitle}
        </p>
      </div>

      {/* Timeline Cards */}
      <div className="mt-12 space-y-6">
        {items.map((item) => {
          const style = colorStyles[item.color];
          return (
            <div
              key={item.id}
              className={`glass-panel-interactive rounded-3xl border-l-4 p-6 sm:p-8 ${style.borderLeft}`}
            >
              <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-start">
                <div className="flex items-start gap-4">
                  <div
                    className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl ${style.iconBox}`}
                  >
                    {renderIcon(item.type)}
                  </div>
                  <div>
                    <div className="flex flex-wrap items-center gap-2">
                      <span
                        className={`rounded-full border px-3 py-0.5 font-mono text-[11px] font-semibold ${style.badge}`}
                      >
                        {item.badgeText}
                      </span>
                      <span className="font-mono text-xs text-[var(--text-muted)]">
                        • {item.period}
                      </span>
                    </div>
                    <h3 className="mt-2 font-display text-xl font-bold tracking-tight sm:text-2xl">
                      {item.title}
                    </h3>
                    <p className="mt-0.5 text-xs font-semibold text-[var(--text-secondary)] sm:text-sm">
                      {item.organization}
                    </p>
                  </div>
                </div>
              </div>

              <p className="mt-4 text-sm leading-relaxed text-[var(--text-secondary)]">
                {item.description}
              </p>

              {/* Highlights */}
              <ul className="mt-4 space-y-2">
                {item.highlights.map((h, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-2.5 text-xs leading-relaxed text-[var(--text-secondary)] sm:text-sm"
                  >
                    <CheckCircle2
                      className={`mt-0.5 h-4 w-4 shrink-0 ${style.check}`}
                    />
                    <span>{h}</span>
                  </li>
                ))}
              </ul>

              {/* Tags */}
              <div className="mt-5 flex flex-wrap gap-2 border-t border-[var(--border-glass)] pt-4">
                {item.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-lg border border-[var(--border-glass)] bg-[var(--bg-glass-subtle)] px-2.5 py-1 font-mono text-xs font-medium text-[var(--text-secondary)]"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
