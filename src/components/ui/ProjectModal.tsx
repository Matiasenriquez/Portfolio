import React, { useEffect } from 'react';
import {
  AlertTriangle,
  CheckCircle2,
  Cpu,
  Database,
  ExternalLink,
  Github,
  Layers,
  Layout,
  Server,
  ShieldCheck,
  Sparkles,
  X,
} from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';
import { UI_COPY } from '../../data/portfolioData';
import type { ProjectItem } from '../../types/portfolio';

interface ProjectModalProps {
  project: ProjectItem | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  const { language } = useLanguage();
  const t = UI_COPY[language].projects;

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (project) {
      document.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [project, onClose]);

  if (!project) return null;

  const isUpcoming = project.status === 'upcoming';

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6"
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-project-title"
    >
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/60 backdrop-blur-md transition-opacity"
        onClick={onClose}
      />

      {/* Modal Container */}
      <div className="glass-modal relative z-10 max-h-[90vh] w-full max-w-4xl overflow-y-auto rounded-3xl p-6 sm:p-8">
        {/* Sticky Top Header */}
        <div className="flex items-start justify-between gap-4 border-b border-[var(--border-glass)] pb-5">
          <div>
            <div className="flex flex-wrap items-center gap-2">
              <span
                className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1 font-mono text-xs font-semibold ${
                  isUpcoming
                    ? 'bg-g-yellow-soft text-g-yellow'
                    : 'bg-g-green-soft text-g-green'
                }`}
              >
                <span
                  className={`h-2 w-2 rounded-full ${
                    isUpcoming ? 'bg-g-yellow' : 'bg-g-green'
                  }`}
                />
                {project.statusLabel}
              </span>
              <span className="font-mono text-xs text-[var(--text-muted)]">
                {project.category}
              </span>
            </div>

            <h2
              id="modal-project-title"
              className="mt-2 font-display text-2xl font-extrabold tracking-tight sm:text-3xl"
            >
              {project.title}
            </h2>
            <p className="mt-1 text-sm font-medium text-[var(--text-secondary)]">
              {project.subtitle}
            </p>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="glass-panel flex h-10 w-10 shrink-0 cursor-pointer items-center justify-center rounded-xl transition-colors hover:border-g-red hover:text-g-red"
            aria-label={t.modal.close}
            title={t.modal.close}
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Stack Pills */}
        <div className="mt-5 flex flex-wrap items-center gap-2">
          <span className="mr-1 font-mono text-xs font-semibold text-[var(--text-muted)]">
            {t.stackUsedLabel}:
          </span>
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="rounded-lg border border-g-blue/30 bg-g-blue-soft px-2.5 py-1 font-mono text-xs font-semibold text-g-blue"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Problem Statement */}
        <div className="mt-6 rounded-2xl border border-[var(--border-glass)] bg-[var(--bg-glass-subtle)] p-5">
          <h3 className="flex items-center gap-2 font-display text-base font-bold text-g-blue">
            <Layers className="h-4 w-4" />
            <span>{t.modal.problemTitle}</span>
          </h3>
          <p className="mt-2 text-sm leading-relaxed text-[var(--text-secondary)]">
            {project.caseStudy.problem}
          </p>
        </div>

        {/* Technical Architecture Breakdown (4 Cards using Google Palette) */}
        <div className="mt-6">
          <h3 className="flex items-center gap-2 font-display text-base font-bold">
            <Cpu className="h-4 w-4 text-g-blue" />
            <span>{t.modal.architectureTitle}</span>
          </h3>
          <p className="mt-1 text-xs text-[var(--text-secondary)]">
            {project.caseStudy.architectureOverview}
          </p>

          <div className="mt-4 grid gap-3.5 sm:grid-cols-2">
            {/* Frontend — Google Blue */}
            <div className="rounded-2xl border border-g-blue/25 bg-g-blue-soft p-4">
              <div className="flex items-center gap-2 font-display text-xs font-bold uppercase tracking-wider text-g-blue">
                <Layout className="h-4 w-4" />
                <span>{t.modal.frontendLabel}</span>
              </div>
              <p className="mt-2 text-xs leading-relaxed text-[var(--text-primary)] opacity-90">
                {project.caseStudy.frontendDetails}
              </p>
            </div>

            {/* Backend — Google Green */}
            <div className="rounded-2xl border border-g-green/25 bg-g-green-soft p-4">
              <div className="flex items-center gap-2 font-display text-xs font-bold uppercase tracking-wider text-g-green">
                <Server className="h-4 w-4" />
                <span>{t.modal.backendLabel}</span>
              </div>
              <p className="mt-2 text-xs leading-relaxed text-[var(--text-primary)] opacity-90">
                {project.caseStudy.backendDetails}
              </p>
            </div>

            {/* Database — Google Yellow */}
            <div className="rounded-2xl border border-g-yellow/25 bg-g-yellow-soft p-4">
              <div className="flex items-center gap-2 font-display text-xs font-bold uppercase tracking-wider text-g-yellow">
                <Database className="h-4 w-4" />
                <span>{t.modal.databaseLabel}</span>
              </div>
              <p className="mt-2 text-xs leading-relaxed text-[var(--text-primary)] opacity-90">
                {project.caseStudy.databaseDetails}
              </p>
            </div>

            {/* Security — Google Red */}
            <div className="rounded-2xl border border-g-red/25 bg-g-red-soft p-4">
              <div className="flex items-center gap-2 font-display text-xs font-bold uppercase tracking-wider text-g-red">
                <ShieldCheck className="h-4 w-4" />
                <span>{t.modal.securityLabel}</span>
              </div>
              <p className="mt-2 text-xs leading-relaxed text-[var(--text-primary)] opacity-90">
                {project.caseStudy.securityHighlights}
              </p>
            </div>
          </div>
        </div>

        {/* Challenges (Google Red) vs Solutions (Google Green) */}
        <div className="mt-6 grid gap-4 md:grid-cols-2">
          {/* Challenges */}
          <div className="rounded-2xl border border-[var(--border-glass)] bg-[var(--bg-glass-subtle)] p-5">
            <h4 className="flex items-center gap-2 font-display text-sm font-bold text-g-red">
              <AlertTriangle className="h-4 w-4 shrink-0" />
              <span>{t.modal.challengesTitle}</span>
            </h4>
            <ul className="mt-3 space-y-2.5">
              {project.caseStudy.challenges.map((challenge, idx) => (
                <li
                  key={idx}
                  className="flex items-start gap-2.5 text-xs leading-relaxed text-[var(--text-secondary)]"
                >
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-g-red" />
                  <span>{challenge}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Solutions */}
          <div className="rounded-2xl border border-[var(--border-glass)] bg-[var(--bg-glass-subtle)] p-5">
            <h4 className="flex items-center gap-2 font-display text-sm font-bold text-g-green">
              <CheckCircle2 className="h-4 w-4 shrink-0" />
              <span>{t.modal.solutionsTitle}</span>
            </h4>
            <ul className="mt-3 space-y-2.5">
              {project.caseStudy.solutions.map((solution, idx) => (
                <li
                  key={idx}
                  className="flex items-start gap-2.5 text-xs leading-relaxed text-[var(--text-secondary)]"
                >
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-g-green" />
                  <span>{solution}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Key System Modules */}
        <div className="mt-6 rounded-2xl border border-[var(--border-glass)] bg-[var(--bg-glass-subtle)] p-5">
          <h4 className="flex items-center gap-2 font-display text-sm font-bold text-g-yellow">
            <Sparkles className="h-4 w-4 shrink-0" />
            <span>{t.modal.featuresTitle}</span>
          </h4>
          <div className="mt-3 grid gap-2.5 sm:grid-cols-2">
            {project.caseStudy.keyFeatures.map((feature, idx) => (
              <div
                key={idx}
                className="flex items-center gap-2 rounded-xl border border-[var(--border-glass)] px-3 py-2 text-xs text-[var(--text-secondary)]"
              >
                <CheckCircle2 className="h-3.5 w-3.5 shrink-0 text-g-blue" />
                <span>{feature}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Actions */}
        <div className="mt-6 flex flex-wrap items-center justify-between gap-3 border-t border-[var(--border-glass)] pt-5">
          <div className="flex flex-wrap items-center gap-3">
            {project.demoUrl ? (
              <a
                href={project.demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-xl bg-g-blue px-4 py-2.5 text-xs font-bold text-white dark:text-[#10131A]"
              >
                <ExternalLink className="h-3.5 w-3.5" />
                <span>{t.liveDemo}</span>
              </a>
            ) : null}

            {project.repoUrl ? (
              <a
                href={project.repoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="glass-panel inline-flex items-center gap-2 rounded-xl px-4 py-2.5 text-xs font-semibold"
              >
                <Github className="h-3.5 w-3.5" />
                <span>{t.sourceCode}</span>
              </a>
            ) : null}

            {!project.demoUrl && !project.repoUrl && (
              <span className="font-mono text-xs text-[var(--text-muted)]">
                • {t.linksPending}
              </span>
            )}
          </div>

          <button
            type="button"
            onClick={onClose}
            className="cursor-pointer rounded-xl bg-g-blue px-5 py-2.5 text-xs font-bold text-white transition-opacity hover:opacity-90 dark:text-[#10131A]"
          >
            {t.modal.close}
          </button>
        </div>
      </div>
    </div>
  );
};
