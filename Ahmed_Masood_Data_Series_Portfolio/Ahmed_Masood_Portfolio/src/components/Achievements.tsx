import { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { achievements, certifications } from '../data/portfolio';
import { EASE, SectionHeading, Tilt } from './fx';
import { RailButtons } from './Rail';

function Laurel({ side }: { side: 'l' | 'r' }) {
  return (
    <svg viewBox="0 0 30 64" className={`h-14 w-auto text-[#d9b46a] ${side === 'r' ? '-scale-x-100' : ''}`} aria-hidden>
      <path d="M26 62C10 52 4 36 8 4" fill="none" stroke="currentColor" strokeWidth="1.4" />
      {[10, 18, 26, 34, 42, 50].map((y, i) => (
        <ellipse key={y} cx={i < 2 ? 9 : 8 + i * 1.6} cy={y} rx="5" ry="2.2" fill="currentColor" opacity="0.85" transform={`rotate(-40 ${8 + i * 1.6} ${y})`} />
      ))}
    </svg>
  );
}

export default function Achievements() {
  const rail = useRef<HTMLDivElement>(null);
  const [filter, setFilter] = useState('All');
  const documents = certifications.filter((c) => filter === 'All' || c.kind === filter);

  return (
    <>
      <SectionHeading kicker="Practical experience" title="Internship Experience" />

      <div className="gutter grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 [perspective:1400px]">
        {achievements.map((a, i) => (
          <motion.div
            key={a.id}
            initial={{ opacity: 0, y: 50, rotateX: 18 }}
            whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
            viewport={{ once: true, margin: '-8% 0px' }}
            transition={{ duration: 0.9, delay: i * 0.08, ease: EASE }}
          >
            <Tilt max={8} className="group h-full rounded-2xl">
              <article className="relative flex h-full min-h-[340px] flex-col items-center overflow-hidden rounded-2xl bg-[radial-gradient(120%_80%_at_50%_0%,#2a1f10,#0d0b08_60%,#07070a)] px-5 pb-6 pt-8 text-center ring-1 ring-[#d9b46a]/20 transition duration-500 group-hover:ring-[#d9b46a]/60">
                <div aria-hidden className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#d9b46a]/70 to-transparent" />
                <div aria-hidden className="absolute -top-24 left-1/2 h-48 w-48 -translate-x-1/2 rounded-full bg-[#d9b46a]/10 blur-3xl transition duration-700 group-hover:bg-[#d9b46a]/25" />
                <div className="relative flex items-center gap-1">
                  <Laurel side="l" />
                  <div className="px-1">
                    <p className="text-[9px] font-bold uppercase leading-tight tracking-[0.24em] text-[#d9b46a]">{a.laurel}</p>
                  </div>
                  <Laurel side="r" />
                </div>
                <h3 className="relative mt-6 font-display text-[2.1rem] leading-[0.92] tracking-wide text-bone">{a.title}</h3>
                <p className="relative mt-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#d9b46a]">{a.org}</p>
                <p className="relative mt-4 text-[13px] leading-relaxed text-bone/70">{a.detail}</p>
                {a.link && (
                  <a
                    href={a.link}
                    target="_blank"
                    rel="noreferrer"
                    data-cursor="link"
                    className="relative mt-auto inline-flex min-h-10 items-center gap-1 pt-5 text-xs font-semibold tracking-wide text-bone underline decoration-[#d9b46a]/60 underline-offset-4 hover:decoration-[#d9b46a]"
                  >
                    View details ↗
                  </a>
                )}
              </article>
            </Tilt>
          </motion.div>
        ))}
      </div>

      <div className="mt-16" id="certificates">
        <div className="gutter mb-6 flex flex-wrap items-end justify-between gap-5">
          <div>
            <p className="mb-2 text-[10px] font-bold uppercase tracking-[0.24em] text-crimson-2">Documents behind the journey</p>
            <h3 className="font-sans text-xl font-semibold text-bone sm:text-3xl">Certificates & Letters <span className="text-sm text-mist">· {certifications.length} documents</span></h3>
          </div>
          <div className="flex flex-wrap gap-2" role="group" aria-label="Filter documents">
            {['All', 'Certificates', 'Letters', 'Reports'].map((kind) => (
              <button type="button" key={kind} aria-pressed={filter === kind} onClick={() => { setFilter(kind); rail.current?.scrollTo({ left: 0 }); }} className={`min-h-11 rounded-full border px-4 text-xs transition ${filter === kind ? 'border-crimson bg-crimson text-white' : 'border-white/15 text-mist hover:border-white/40 hover:text-bone'}`}>{kind}</button>
            ))}
          </div>
        </div>
        <p className="gutter text-xs text-smoke" aria-live="polite">Showing {documents.length} documents · Select a preview to open its PDF</p>
        <div className="group/rail relative">
          <div ref={rail} className="rail gutter flex snap-x gap-4 overflow-x-auto py-5">
            {documents.map((c) => (
              <a key={c.link} href={c.link} target="_blank" rel="noopener noreferrer" data-cursor="link" aria-label={`Open ${c.issuer}: ${c.name} (PDF, new tab)`} className="group flex w-[280px] shrink-0 snap-start flex-col overflow-hidden rounded-xl bg-ink-2 ring-1 ring-white/10 transition hover:-translate-y-1 hover:ring-white/40 sm:w-[320px]">
                <div className="flex h-56 items-center justify-center bg-white/95 p-3">
                  <img src={c.preview} alt={`${c.issuer} — ${c.name}`} loading="lazy" decoding="async" width="760" height="950" className="h-full w-full object-contain" />
                </div>
                <div className="flex flex-1 flex-col p-5">
                  <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-crimson-2">{c.issuer}</p>
                  <h4 className="mb-4 mt-2 text-sm font-semibold leading-snug text-bone">{c.name}</h4>
                  <div className="mt-auto flex items-center justify-between gap-2 border-t border-white/10 pt-3 text-xs text-mist"><span>{c.date}</span><span className="text-bone">Open PDF ↗</span></div>
                </div>
              </a>
            ))}
          </div>
          <RailButtons rail={rail} />
        </div>
      </div>
    </>
  );
}
