import React, { useState } from 'react';
import {
  Activity,
  Building2,
  CalendarClock,
  ChevronRight,
  Layers,
  Sparkles,
} from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';
import { PROJECTS_DATA, UI_COPY } from '../../data/portfolioData';
import type { ProjectItem } from '../../types/portfolio';
import { ProjectModal } from '../ui/ProjectModal';

export const Projects: React.FC = () => {
  const { language } = useLanguage();
  const t = UI_COPY[language].projects;
  const projects = PROJECTS_DATA[language];

  const [filter, setFilter] = useState<'all' | 'completed' | 'upcoming'>('all');
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);

  const filteredProjects = projects.filter((p) => {
    if (filter === 'all') return true;
    return p.status === filter;
  });

  const renderProjectVisual = (project: ProjectItem) => {
    if (project.id === 'materun') {
      return (
        <div className="relative flex h-44 w-full flex-col justify-between overflow-hidden rounded-2xl border border-g-green/25 bg-gradient-to-br from-[#34A853]/15 via-transparent to-[#4285F4]/15 p-5">
          <div className="flex items-center justify-between">
            <span className="inline-flex items-center gap-1.5 rounded-lg bg-g-green-soft px-2.5 py-1 font-mono text-[11px] font-bold text-g-green">
              <Activity className="h-3.5 w-3.5" />
              TRAIL & MARATHON OS
            </span>
            <span className="font-mono text-xs font-bold text-g-green">10K · 21K · 42K</span>
          </div>
          <div>
            <p className="font-display text-2xl font-extrabold tracking-tight">MateRun</p>
            <p className="font-mono text-xs text-[var(--text-secondary)]">
              Inscripciones · Dorsales · Categorías
            </p>
          </div>
        </div>
      );
    }

    if (project.id === 'matdeps') {
      return (
        <div className="relative flex h-44 w-full flex-col justify-between overflow-hidden rounded-2xl border border-g-blue/25 bg-gradient-to-br from-[#4285F4]/18 via-transparent to-[#34A853]/12 p-5">
          <div className="flex items-center justify-between">
            <span className="inline-flex items-center gap-1.5 rounded-lg bg-g-blue-soft px-2.5 py-1 font-mono text-[11px] font-bold text-g-blue">
              <Building2 className="h-3.5 w-3.5" />
              PROPTECH MANAGEMENT
            </span>
            <span className="font-mono text-xs font-bold text-g-blue">Unidades & Contratos</span>
          </div>
          <div>
            <p className="font-display text-2xl font-extrabold tracking-tight">MatDeps</p>
            <p className="font-mono text-xs text-[var(--text-secondary)]">
              Inquilinos · Alquileres · Estados
            </p>
          </div>
        </div>
      );
    }

    return (
      <div className="relative flex h-44 w-full flex-col justify-between overflow-hidden rounded-2xl border border-g-yellow/30 bg-gradient-to-br from-[#FBBC05]/18 via-transparent to-[#EA4335]/12 p-5">
        <div className="flex items-center justify-between">
          <span className="inline-flex items-center gap-1.5 rounded-lg bg-g-yellow-soft px-2.5 py-1 font-mono text-[11px] font-bold text-g-yellow">
            <CalendarClock className="h-3.5 w-3.5" />
            HEALTHTECH SCHEDULER
          </span>
          <span className="font-mono text-xs font-bold text-g-yellow">RBAC · Security</span>
        </div>
        <div>
          <p className="font-display text-2xl font-extrabold tracking-tight">MatClin</p>
          <p className="font-mono text-xs text-[var(--text-secondary)]">
            Turnos Médicos · Agendas Clínicas
          </p>
        </div>
      </div>
    );
  };

  return (
    <section id="proyectos" className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
      {/* Header */}
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

      {/* Filter Tabs */}
      <div className="mt-8 flex flex-wrap items-center justify-center gap-2">
        {[
          { key: 'all' as const, label: t.filterAll },
          { key: 'completed' as const, label: t.filterCompleted },
          { key: 'upcoming' as const, label: t.filterUpcoming },
        ].map((tab) => (
          <button
            key={tab.key}
            type="button"
            onClick={() => setFilter(tab.key)}
            className={`cursor-pointer rounded-xl px-4 py-2 text-xs font-semibold transition-all ${
              filter === tab.key
                ? 'bg-g-blue text-white shadow-sm dark:text-[#10131A]'
                : 'glass-panel text-[var(--text-secondary)] hover:text-[var(--text-primary)]'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Projects Grid */}
      <div className="mt-10 grid gap-7 lg:grid-cols-3">
        {filteredProjects.map((project) => {
          const isUpcoming = project.status === 'upcoming';
          return (
            <article
              key={project.id}
              className="glass-panel-interactive flex flex-col justify-between rounded-3xl p-6"
            >
              <div>
                {/* Visual Preview Header */}
                {renderProjectVisual(project)}

                {/* Status Badge & Category */}
                <div className="mt-5 flex items-center justify-between gap-2">
                  <span
                    className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1 font-mono text-[11px] font-semibold ${
                      isUpcoming
                        ? 'bg-g-yellow-soft text-g-yellow'
                        : 'bg-g-green-soft text-g-green'
                    }`}
                  >
                    <Sparkles className="h-3 w-3" />
                    {project.statusLabel}
                  </span>
                </div>

                {/* Title & Description */}
                <h3 className="mt-3 font-display text-xl font-extrabold tracking-tight">
                  {project.title}
                </h3>
                <p className="mt-1 text-xs font-semibold text-g-blue">
                  {project.subtitle}
                </p>
                <p className="mt-3 text-xs leading-relaxed text-[var(--text-secondary)] sm:text-sm">
                  {project.shortDescription}
                </p>

                {/* Metrics Mini-Row */}
                <div className="mt-4 grid grid-cols-3 gap-2 rounded-2xl border border-[var(--border-glass)] bg-[var(--bg-glass-subtle)] p-2.5 text-center">
                  {project.metrics.map((m) => (
                    <div key={m.label}>
                      <p className="font-mono text-[10px] text-[var(--text-muted)]">
                        {m.label}
                      </p>
                      <p className="mt-0.5 font-display text-[11px] font-bold">
                        {m.value}
                      </p>
                    </div>
                  ))}
                </div>

                {/* Stack Pills */}
                <div className="mt-4 flex flex-wrap gap-1.5">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-lg border border-[var(--border-glass)] bg-[var(--bg-glass-subtle)] px-2.5 py-1 font-mono text-[11px] font-medium text-[var(--text-secondary)]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Open Case Study Button */}
              <div className="mt-6 border-t border-[var(--border-glass)] pt-4">
                <button
                  type="button"
                  onClick={() => setSelectedProject(project)}
                  className="flex w-full cursor-pointer items-center justify-between rounded-xl bg-g-blue px-4 py-3 text-xs font-bold text-white transition-all hover:opacity-95 dark:text-[#10131A]"
                >
                  <span className="flex items-center gap-2">
                    <Layers className="h-4 w-4" />
                    <span>{t.viewCaseStudy}</span>
                  </span>
                  <ChevronRight className="h-4 w-4" />
                </button>
              </div>
            </article>
          );
        })}
      </div>

      {/* Case Study Glassmorphic Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
};
