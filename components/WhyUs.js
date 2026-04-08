'use client';

import { ShieldCheck, Zap, BookOpen, Globe } from 'lucide-react';

const pillars = [
  {
    icon: ShieldCheck,
    color: '#34d399',
    title: 'Responsible AI by Design',
    desc: 'Every product is built with data privacy, age-appropriateness, and ethical AI use as non-negotiables — not afterthoughts. FERPA and DPDP Act compliant out of the box.',
  },
  {
    icon: Zap,
    color: '#00d4ff',
    title: 'Up and Running in 11 Days',
    desc: 'A dedicated onboarding specialist handles everything — LMS integration, staff training, student accounts, and curriculum mapping. Your school doesn\'t go it alone.',
  },
  {
    icon: BookOpen,
    color: '#a78bfa',
    title: 'Curriculum-Mapped, Not Generic',
    desc: 'Unlike generic AI tools, everything at AI Ready School is aligned to CBSE, ICSE, and IB frameworks. Teachers don\'t have to adapt the platform — the platform adapts.',
  },
  {
    icon: Globe,
    color: '#fb923c',
    title: 'One Platform, Not Five Vendors',
    desc: 'Student AI, teacher tools, creative suite, innovation lab, and infrastructure — all from one provider with one support team. No integration headaches, no blame-shifting.',
  },
];

export default function WhyUs() {
  return (
    <section id="why-us" className="section-padding" style={{ position: 'relative', overflow: 'hidden' }}>
      <div style={{
        position: 'absolute', inset: 0,
        background: 'linear-gradient(180deg, transparent 0%, rgba(8,12,23,0.6) 50%, transparent 100%)',
      }} />

      <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 24px', position: 'relative', zIndex: 1 }}>
        <div style={{ textAlign: 'center', marginBottom: '60px' }}>
          <span className="badge badge-cyan" style={{ marginBottom: '16px', display: 'inline-flex' }}>
            Why Schools Choose Us
          </span>
          <h2 style={{ fontSize: 'clamp(1.8rem, 4vw, 2.8rem)', marginBottom: '16px' }}>
            Built for schools.{' '}
            <span className="gradient-text-cyan">Not adapted for schools.</span>
          </h2>
          <p style={{ color: 'var(--text-secondary)', maxWidth: '540px', margin: '0 auto', fontSize: '1rem', lineHeight: 1.65 }}>
            Most AI tools are built for enterprise and retrofitted for education. 
            AI Ready School was designed from day one for the K-12 context.
          </p>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(2, 1fr)',
          gap: '20px',
        }}
          className="why-grid"
        >
          {pillars.map(({ icon: Icon, color, title, desc }) => (
            <div
              key={title}
              className="glass-card"
              style={{
                padding: '32px',
                transition: 'all 0.3s ease',
                position: 'relative',
                overflow: 'hidden',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.borderColor = `${color}44`;
                e.currentTarget.style.boxShadow = `0 0 40px ${color}15`;
              }}
              onMouseLeave={e => {
                e.currentTarget.style.borderColor = 'rgba(255,255,255,0.06)';
                e.currentTarget.style.boxShadow = 'none';
              }}
            >
              {/* Corner glow */}
              <div style={{
                position: 'absolute', top: '-20px', right: '-20px',
                width: '100px', height: '100px',
                background: `radial-gradient(circle, ${color}20, transparent 70%)`,
                filter: 'blur(20px)',
                pointerEvents: 'none',
              }} />

              <div style={{
                width: '48px', height: '48px',
                background: `${color}18`,
                border: `1px solid ${color}33`,
                borderRadius: '12px',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                marginBottom: '20px',
              }}>
                <Icon size={22} color={color} />
              </div>

              <h3 style={{ fontFamily: 'Sora, sans-serif', fontSize: '1.1rem', fontWeight: 700, marginBottom: '12px', color: 'white' }}>
                {title}
              </h3>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.92rem', lineHeight: 1.7 }}>
                {desc}
              </p>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 640px) {
          .why-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
