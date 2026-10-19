import React from 'react';
import { Database, Layout, Server, Shield, CheckCircle2 } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';
import { SKILL_CATEGORIES, UI_COPY } from '../../data/portfolioData';
import type { GoogleColor, SkillCategory } from '../../types/portfolio';

export const TechStack: React.FC = () => {
  const { language } = useLanguage();
  const t = UI_COPY[language].stack;
  const categories = SKILL_CATEGORIES[language];

  const renderIcon = (iconName: SkillCategory['iconName']) => {
    switch (iconName) {
      case 'layout':
        return <Layout className="h-5 w-5" />;
      case 'server':
        return <Server className="h-5 w-5" />;
      case 'database':
        return <Database className="h-5 w-5" />;
      case 'shield':
        return <Shield className="h-5 w-5" />;
    }
  };

  const colorStyles: Record<
    GoogleColor,
    {
      iconBox: string;
      badge: string;
      borderAccent: string;
      dot: string;
    }
  > = {
    blue: {
      iconBox: 'bg-g-blue-soft text-g-blue',
      badge: 'border-g-blue/35 bg-g-blue-soft text-g-blue',
      borderAccent: 'hover:border-g-blue/50',
      dot: 'bg-g-blue',
    },
    green: {
      iconBox: 'bg-g-green-soft text-g-green',
      badge: 'border-g-green/35 bg-g-green-soft text-g-green',
      borderAccent: 'hover:border-g-green/50',
      dot: 'bg-g-green',
    },
    yellow: {
      iconBox: 'bg-g-yellow-soft text-g-yellow',
      badge: 'border-g-yellow/35 bg-g-yellow-soft text-g-yellow',
      borderAccent: 'hover:border-g-yellow/50',
      dot: 'bg-g-yellow',
    },
    red: {
      iconBox: 'bg-g-red-soft text-g-red',
      badge: 'border-g-red/35 bg-g-red-soft text-g-red',
      borderAccent: 'hover:border-g-red/50',
      dot: 'bg-g-red',
    },
  };

  return (
    <section id="stack" className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
      {/* Section Header */}
      <div className="mx-auto max-w-3xl text-center">
        <span className="font-mono text-xs font-bold tracking-widest uppercase text-g-blue">
          {t.eyebrow}
        </span>
        <h2 className="mt-2 font-display text-3xl font-extrabold tracking-tight sm:text-4xl">
          {t.title}
        </h2>
        <p className="mt-4 text-sm leading-relaxed text-[var(--text-secondary)] sm:text-base">
          {t.subtitle}
        </p>
      </div>

      {/* Quick Tech Pill Strip */}
      <div className="mt-10 flex flex-wrap items-center justify-center gap-2.5">
        {[
          { name: 'React', color: 'blue' as GoogleColor },
          { name: 'TypeScript', color: 'blue' as GoogleColor },
          { name: 'JavaScript', color: 'yellow' as GoogleColor },
          { name: 'Tailwind CSS', color: 'blue' as GoogleColor },
          { name: 'Node.js', color: 'green' as GoogleColor },
          { name: 'Express.js', color: 'green' as GoogleColor },
          { name: 'Python', color: 'yellow' as GoogleColor },
          { name: 'FastAPI', color: 'green' as GoogleColor },
          { name: 'Django', color: 'green' as GoogleColor },
          { name: 'MongoDB', color: 'green' as GoogleColor },
          { name: 'PostgreSQL', color: 'blue' as GoogleColor },
          { name: 'Cybersecurity', color: 'red' as GoogleColor },
        ].map((tech) => (
          <span
            key={tech.name}
            className={`glass-panel inline-flex items-center gap-2 rounded-full px-3.5 py-1.5 font-mono text-xs font-medium`}
          >
            <span className={`h-2 w-2 rounded-full ${colorStyles[tech.color].dot}`} />
            <span>{tech.name}</span>
          </span>
        ))}
      </div>

      {/* 4-Pillar Bento Grid */}
      <div className="mt-10 grid gap-6 md:grid-cols-2">
        {categories.map((cat) => {
          const style = colorStyles[cat.color];
          return (
            <div
              key={cat.id}
              className={`glass-panel-interactive flex flex-col justify-between rounded-3xl p-6 sm:p-7 ${style.borderAccent}`}
            >
              <div>
                <div className="flex items-center gap-3.5">
                  <div
                    className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl ${style.iconBox}`}
                  >
                    {renderIcon(cat.iconName)}
                  </div>
                  <div>
                    <h3 className="font-display text-lg font-bold tracking-tight sm:text-xl">
                      {cat.title}
                    </h3>
                    <p className="mt-0.5 text-xs text-[var(--text-secondary)]">
                      {cat.subtitle}
                    </p>
                  </div>
                </div>

                {/* Skills List */}
                <div className="mt-6 space-y-3">
                  {cat.skills.map((skill) => (
                    <div
                      key={skill.name}
                      className="flex items-start justify-between gap-3 rounded-2xl border border-[var(--border-glass)] bg-[var(--bg-glass-subtle)] px-4 py-3"
                    >
                      <div className="flex items-start gap-2.5">
                        <CheckCircle2
                          className={`mt-0.5 h-4 w-4 shrink-0 ${
                            cat.color === 'blue'
                              ? 'text-g-blue'
                              : cat.color === 'green'
                              ? 'text-g-green'
                              : cat.color === 'yellow'
                              ? 'text-g-yellow'
                              : 'text-g-red'
                          }`}
                        />
                        <div>
                          <div className="flex items-center gap-2">
                            <span className="font-display text-sm font-bold">
                              {skill.name}
                            </span>
                            {skill.highlight && (
                              <span
                                className={`rounded-md border px-1.5 py-0.2 font-mono text-[10px] font-semibold ${style.badge}`}
                              >
                                Core
                              </span>
                            )}
                          </div>
                          <p className="mt-0.5 text-xs text-[var(--text-secondary)]">
                            {skill.level}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
