'use client';

import { useState } from 'react';
import { ArrowRight, Users, Brain, Zap, FlaskConical, Server } from 'lucide-react';

const products = [
  {
    id: 'cypher',
    name: 'Cypher',
    tagline: 'Student Learning Companion',
    role: 'For Students',
    roleBadge: 'badge-cyan',
    icon: Users,
    iconColor: '#00d4ff',
    iconBg: 'rgba(0,212,255,0.12)',
    description:
      'An adaptive AI companion that learns alongside each student. Cypher personalizes every lesson, answers questions in real time, identifies learning gaps before they become problems, and keeps students genuinely engaged — not just screen-time occupied.',
    features: [
      'Adaptive learning paths per child',
      'Real-time doubt resolution in 12+ languages',
      'Progress insights for parents & teachers',
      'Gamified milestones and rewards',
    ],
    color: '#00d4ff',
    gradient: 'linear-gradient(135deg, rgba(0,212,255,0.15) 0%, rgba(0,212,255,0.03) 100%)',
    borderGlow: 'rgba(0,212,255,0.3)',
  },
  {
    id: 'morpheus',
    name: 'Morpheus',
    tagline: 'AI Teaching Agent',
    role: 'For Teachers',
    roleBadge: 'badge-purple',
    icon: Brain,
    iconColor: '#a78bfa',
    iconBg: 'rgba(124,58,237,0.15)',
    description:
      'Morpheus gives every teacher a professional AI co-teacher. It automates lesson planning, generates assessments against curriculum standards, grades assignments, and provides pedagogical suggestions — freeing teachers to do what only humans can: inspire.',
    features: [
      'Auto-generate lesson plans & worksheets',
      'Student performance analytics dashboard',
      'Curriculum-aligned assessment builder',
      'AI co-pilot during live instruction',
    ],
    color: '#a78bfa',
    gradient: 'linear-gradient(135deg, rgba(124,58,237,0.15) 0%, rgba(124,58,237,0.03) 100%)',
    borderGlow: 'rgba(124,58,237,0.35)',
  },
  {
    id: 'zion',
    name: 'Zion',
    tagline: 'AI Tool Suite',
    role: 'For Everyone',
    roleBadge: 'badge-pink',
    icon: Zap,
    iconColor: '#ff4d93',
    iconBg: 'rgba(232,53,122,0.12)',
    description:
      'A curated suite of 50+ AI tools for creativity, communication, and productivity — purpose-built for school contexts. From AI art and music generation to essay writing assistants and data analysis tools, Zion brings AI as a creative medium to every department.',
    features: [
      '50+ AI creative & productivity tools',
      'Safe, school-appropriate content filters',
      'Cross-subject integration templates',
      'Student portfolio showcase system',
    ],
    color: '#ff4d93',
    gradient: 'linear-gradient(135deg, rgba(232,53,122,0.15) 0%, rgba(232,53,122,0.03) 100%)',
    borderGlow: 'rgba(232,53,122,0.35)',
  },
  {
    id: 'neo',
    name: 'NEO',
    tagline: 'AI Innovation Lab',
    role: 'Innovation',
    roleBadge: 'badge-orange',
    icon: FlaskConical,
    iconColor: '#fb923c',
    iconBg: 'rgba(251,146,60,0.12)',
    description:
      'NEO is an immersive AI innovation lab environment where students don\'t just learn about AI — they build with it. From designing chatbots to training image classifiers and building real-world AI projects, NEO creates the next generation of AI builders.',
    features: [
      'No-code & low-code AI project builder',
      'Real datasets and model training sandbox',
      'National AI competition preparation',
      'Mentorship from AI industry professionals',
    ],
    color: '#fb923c',
    gradient: 'linear-gradient(135deg, rgba(251,146,60,0.15) 0%, rgba(251,146,60,0.03) 100%)',
    borderGlow: 'rgba(251,146,60,0.35)',
  },
  {
    id: 'matrix',
    name: 'Matrix',
    tagline: 'AI Infrastructure',
    role: 'For Schools',
    roleBadge: 'badge-green',
    icon: Server,
    iconColor: '#34d399',
    iconBg: 'rgba(16,185,129,0.12)',
    description:
      'The secure foundation all other products run on. Matrix provides school-grade AI infrastructure: data privacy compliance, role-based access for students, teachers, and admins, usage monitoring, and seamless integration with existing school management systems.',
    features: [
      'FERPA & DPDP Act compliant data handling',
      'Role-based access for all stakeholders',
      'Single sign-on with existing school systems',
      'Real-time usage and safety dashboard',
    ],
    color: '#34d399',
    gradient: 'linear-gradient(135deg, rgba(16,185,129,0.15) 0%, rgba(16,185,129,0.03) 100%)',
    borderGlow: 'rgba(16,185,129,0.35)',
  },
];

export default function Products() {
  const [activeTab, setActiveTab] = useState(0);
  const active = products[activeTab];
  const Icon = active.icon;

  return (
    <section id="products" className="section-padding" style={{ position: 'relative', overflow: 'hidden' }}>
      {/* Background */}
      <div style={{
        position: 'absolute', inset: 0,
        background: 'radial-gradient(ellipse 80% 50% at 50% 50%, rgba(124,58,237,0.06) 0%, transparent 60%)',
      }} />

      <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 24px', position: 'relative', zIndex: 1 }}>

        {/* Section header */}
        <div style={{ textAlign: 'center', marginBottom: '60px' }}>
          <span className="badge badge-purple" style={{ marginBottom: '16px', display: 'inline-flex' }}>
            The Ecosystem
          </span>
          <h2 style={{ fontSize: 'clamp(2rem, 5vw, 3rem)', marginBottom: '16px' }}>
            Five products. One{' '}
            <span className="gradient-text">unified vision.</span>
          </h2>
          <p style={{ color: 'var(--text-secondary)', maxWidth: '580px', margin: '0 auto', fontSize: '1.05rem', lineHeight: 1.65 }}>
            Each product is purpose-built for a specific role — and they work better together. 
            See how every part of your school gets AI-ready.
          </p>
        </div>

        {/* Tab bar */}
        <div id="product-tabs" style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '6px',
          flexWrap: 'wrap',
          marginBottom: '48px',
          padding: '6px',
          background: 'rgba(255,255,255,0.03)',
          borderRadius: '16px',
          border: '1px solid rgba(255,255,255,0.06)',
          width: 'fit-content',
          margin: '0 auto 48px',
        }}>
          {products.map((p, i) => (
            <button
              key={p.id}
              id={`tab-${p.id}`}
              onClick={() => setActiveTab(i)}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                padding: '10px 20px',
                borderRadius: '10px',
                border: 'none',
                cursor: 'pointer',
                fontFamily: 'Sora, sans-serif',
                fontWeight: 600,
                fontSize: '0.875rem',
                transition: 'all 0.25s ease',
                background: activeTab === i ? p.gradient : 'transparent',
                color: activeTab === i ? p.color : 'rgba(139,156,200,0.7)',
                boxShadow: activeTab === i ? `0 0 20px ${p.borderGlow}` : 'none',
                border: activeTab === i ? `1px solid ${p.borderGlow}` : '1px solid transparent',
              }}
            >
              <span style={{ fontSize: '16px' }}>
                {['🎓','🧠','⚡','🔬','🏗️'][i]}
              </span>
              {p.name}
            </button>
          ))}
        </div>

        {/* Active product detail */}
        <div
          id={`product-${active.id}`}
          className="product-detail-grid"
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '48px',
            alignItems: 'center',
            background: active.gradient,
            border: `1px solid ${active.borderGlow}`,
            borderRadius: '24px',
            padding: '48px',
            backdropFilter: 'blur(10px)',
            transition: 'all 0.3s ease',
          }}
        >
          {/* Left: content */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '20px' }}>
              <div style={{
                width: '52px', height: '52px',
                background: active.iconBg,
                borderRadius: '14px',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                border: `1px solid ${active.borderGlow}`,
              }}>
                <Icon size={24} color={active.color} />
              </div>
              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <h3 style={{ fontFamily: 'Sora, sans-serif', fontSize: '1.6rem', color: 'white' }}>{active.name}</h3>
                  <span className={`badge ${active.roleBadge}`} style={{ fontSize: '0.65rem' }}>{active.role}</span>
                </div>
                <p style={{ color: active.color, fontSize: '0.85rem', fontWeight: 500, fontFamily: 'Inter, sans-serif', marginTop: '2px' }}>
                  {active.tagline}
                </p>
              </div>
            </div>

            <p style={{ color: 'rgba(240,244,255,0.8)', lineHeight: 1.75, marginBottom: '28px', fontSize: '0.97rem' }}>
              {active.description}
            </p>

            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '12px', marginBottom: '32px' }}>
              {active.features.map((f) => (
                <li key={f} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', fontSize: '0.92rem', color: 'rgba(240,244,255,0.85)' }}>
                  <span style={{
                    width: '20px', height: '20px', flexShrink: 0,
                    background: active.iconBg,
                    borderRadius: '50%',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    border: `1px solid ${active.borderGlow}`,
                    color: active.color,
                    fontSize: '10px',
                    fontWeight: 700,
                    marginTop: '2px',
                  }}>
                    ✓
                  </span>
                  {f}
                </li>
              ))}
            </ul>

            <a
              href={`#learn-${active.id}`}
              id={`cta-${active.id}`}
              style={{
                display: 'inline-flex', alignItems: 'center', gap: '8px',
                color: active.color,
                fontFamily: 'Sora, sans-serif',
                fontWeight: 600,
                fontSize: '0.9rem',
                textDecoration: 'none',
                padding: '12px 20px',
                background: active.iconBg,
                borderRadius: '10px',
                border: `1px solid ${active.borderGlow}`,
                transition: 'all 0.25s',
              }}
              onMouseEnter={e => { e.currentTarget.style.background = `rgba(${active.color === '#00d4ff' ? '0,212,255' : active.color === '#a78bfa' ? '124,58,237' : active.color === '#ff4d93' ? '232,53,122' : active.color === '#fb923c' ? '251,146,60' : '16,185,129'},0.2)`; }}
              onMouseLeave={e => { e.currentTarget.style.background = active.iconBg; }}
            >
              Learn more about {active.name}
              <ArrowRight size={15} />
            </a>
          </div>

          {/* Right: visual card */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            {/* Mock UI card */}
            <div className="glass-card" style={{
              padding: '24px',
              borderColor: active.borderGlow,
              position: 'relative',
              overflow: 'hidden',
            }}>
              <div style={{
                position: 'absolute', top: '-30px', right: '-30px',
                width: '120px', height: '120px',
                background: `radial-gradient(circle, ${active.iconBg} 0%, transparent 70%)`,
                filter: 'blur(20px)',
              }} />

              {/* Mini product UI mockup */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '16px' }}>
                <div style={{ width: '32px', height: '32px', background: active.iconBg, borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <Icon size={16} color={active.color} />
                </div>
                <span style={{ fontFamily: 'Sora, sans-serif', fontWeight: 600, fontSize: '0.9rem', color: active.color }}>
                  {active.name} Dashboard
                </span>
              </div>

              {/* Mock metric bars */}
              {[
                { label: 'Engagement Rate', value: 94 },
                { label: 'Learning Coverage', value: 87 },
                { label: 'Teacher Efficiency', value: 76 },
              ].map((m, i) => (
                <div key={m.label} style={{ marginBottom: i < 2 ? '12px' : 0 }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '6px' }}>
                    <span style={{ fontSize: '0.78rem', color: 'var(--text-secondary)' }}>{m.label}</span>
                    <span style={{ fontSize: '0.78rem', fontWeight: 600, color: active.color }}>{m.value}%</span>
                  </div>
                  <div style={{ height: '6px', background: 'rgba(255,255,255,0.06)', borderRadius: '3px', overflow: 'hidden' }}>
                    <div style={{
                      height: '100%',
                      width: `${m.value}%`,
                      background: `linear-gradient(90deg, ${active.color}99, ${active.color})`,
                      borderRadius: '3px',
                    }} />
                  </div>
                </div>
              ))}
            </div>

            {/* Quick stats */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
              {[
                { val: '2 weeks', label: 'Avg. setup time' },
                { val: '24/7', label: 'Support included' },
              ].map(s => (
                <div
                  key={s.label}
                  className="glass-card"
                  style={{ padding: '16px', textAlign: 'center', borderColor: active.borderGlow }}
                >
                  <div style={{ fontSize: '1.3rem', fontFamily: 'Sora, sans-serif', fontWeight: 700, color: active.color, marginBottom: '4px' }}>
                    {s.val}
                  </div>
                  <div style={{ fontSize: '0.75rem', color: 'var(--text-secondary)' }}>{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .product-detail-grid { grid-template-columns: 1fr !important; padding: 28px !important; }
        }
      `}</style>
    </section>
  );
}
