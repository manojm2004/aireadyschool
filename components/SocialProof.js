'use client';

import { useState } from 'react';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const testimonials = [
  {
    quote:
      "Before AI Ready School, our teachers were spending 60% of their time on administrative tasks. Now that time goes back to students. Morpheus has fundamentally changed what teaching looks like at our school.",
    author: "Dr. Priya Menon",
    title: "Principal",
    school: "Greenwood International School, Bengaluru",
    initials: "PM",
    color: '#a78bfa',
    metric: "60% reduction in teacher admin load",
  },
  {
    quote:
      "Our Grade 6–8 students are now building actual AI models. They came into the innovation lab in August not knowing what machine learning meant. By February they had presented at a national competition and placed second.",
    author: "Rahul Sharma",
    title: "Head of Academics",
    school: "Delhi Public School, Noida",
    initials: "RS",
    color: '#00d4ff',
    metric: "National AI competition — 2nd place",
  },
  {
    quote:
      "The thing that set AI Ready School apart was Matrix — the infrastructure layer. We needed to be certain about student data safety before deploying anything. Their compliance team had us fully onboarded in 11 days.",
    author: "Ms. Kavitha Reddy",
    title: "Director, Digital Transformation",
    school: "Podar International School, Mumbai",
    initials: "KR",
    color: '#34d399',
    metric: "11-day full school onboarding",
  },
  {
    quote:
      "Cypher has changed the dynamic between weaker students and their confidence. Students who used to avoid raising their hand now have an AI companion they can ask anything at 10 PM. The results speak for themselves.",
    author: "Anita Srivastava",
    title: "Vice Principal",
    school: "Seth Anandram Jaipuria School, Lucknow",
    initials: "AS",
    color: '#fb923c',
    metric: "35% improvement in remedial student outcomes",
  },
];

const schoolLogos = [
  "DPS", "Podar", "Greenwood", "Jaipuria", "Orchids", "Amity", "Ryan", "VIBGYOR"
];

export default function SocialProof() {
  const [active, setActive] = useState(0);

  const prev = () => setActive((a) => (a - 1 + testimonials.length) % testimonials.length);
  const next = () => setActive((a) => (a + 1) % testimonials.length);

  const t = testimonials[active];

  return (
    <section id="social-proof" className="section-padding" style={{ position: 'relative', overflow: 'hidden' }}>
      {/* BG */}
      <div style={{
        position: 'absolute', inset: 0,
        background: 'radial-gradient(ellipse 60% 50% at 50% 50%, rgba(232,53,122,0.05) 0%, transparent 70%)',
      }} />

      <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 24px', position: 'relative', zIndex: 1 }}>

        {/* School logos trust bar */}
        <div style={{ textAlign: 'center', marginBottom: '64px' }}>
          <p style={{
            color: 'var(--text-muted)',
            fontSize: '0.75rem',
            fontFamily: 'Sora, sans-serif',
            fontWeight: 600,
            letterSpacing: '0.1em',
            textTransform: 'uppercase',
            marginBottom: '24px',
          }}>
            Trusted by leading schools across India
          </p>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', flexWrap: 'wrap', gap: '12px' }}>
            {schoolLogos.map((logo) => (
              <div
                key={logo}
                className="glass-card"
                style={{
                  padding: '10px 20px',
                  borderRadius: '100px',
                  fontSize: '0.82rem',
                  fontFamily: 'Sora, sans-serif',
                  fontWeight: 600,
                  color: 'var(--text-secondary)',
                  letterSpacing: '0.02em',
                  transition: 'all 0.25s',
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.borderColor = 'rgba(232,53,122,0.3)';
                  e.currentTarget.style.color = 'white';
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.borderColor = 'rgba(255,255,255,0.06)';
                  e.currentTarget.style.color = 'var(--text-secondary)';
                }}
              >
                {logo}
              </div>
            ))}
            <div style={{ fontSize: '0.82rem', color: 'var(--text-muted)', fontFamily: 'Inter, sans-serif' }}>
              + 40 more
            </div>
          </div>
        </div>

        <div className="divider" style={{ marginBottom: '64px' }} />

        {/* Testimonials */}
        <div style={{ textAlign: 'center', marginBottom: '48px' }}>
          <span className="badge badge-pink" style={{ marginBottom: '16px', display: 'inline-flex' }}>
            From School Leaders
          </span>
          <h2 style={{ fontSize: 'clamp(1.8rem, 4vw, 2.6rem)' }}>
            Principals and teachers{' '}
            <span className="gradient-text">who transformed</span> their schools
          </h2>
        </div>

        {/* Testimonial card */}
        <div style={{ maxWidth: '860px', margin: '0 auto' }}>
          <div
            className="glass-card"
            style={{
              padding: '48px',
              borderColor: `${t.color}33`,
              position: 'relative',
              overflow: 'hidden',
            }}
          >
            {/* Decorative quote */}
            <div style={{
              position: 'absolute', top: '-10px', right: '40px',
              opacity: 0.06,
            }}>
              <Quote size={120} fill={t.color} />
            </div>

            {/* Metric badge */}
            <div style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              padding: '8px 16px',
              background: `${t.color}15`,
              border: `1px solid ${t.color}33`,
              borderRadius: '100px',
              marginBottom: '28px',
              fontSize: '0.78rem',
              fontFamily: 'Sora, sans-serif',
              fontWeight: 600,
              color: t.color,
            }}>
              <span style={{ display: 'inline-block', width: '6px', height: '6px', borderRadius: '50%', background: t.color }} />
              {t.metric}
            </div>

            {/* Quote text */}
            <blockquote style={{
              fontSize: 'clamp(1rem, 2.5vw, 1.25rem)',
              lineHeight: 1.7,
              color: 'rgba(240,244,255,0.9)',
              fontStyle: 'italic',
              marginBottom: '36px',
              fontFamily: 'Inter, sans-serif',
              fontWeight: 300,
              position: 'relative',
            }}>
              "{t.quote}"
            </blockquote>

            {/* Author */}
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '16px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
                {/* Avatar */}
                <div style={{
                  width: '48px', height: '48px',
                  background: `linear-gradient(135deg, ${t.color}44, ${t.color}22)`,
                  border: `2px solid ${t.color}44`,
                  borderRadius: '50%',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontFamily: 'Sora, sans-serif',
                  fontWeight: 700,
                  fontSize: '0.85rem',
                  color: t.color,
                }}>
                  {t.initials}
                </div>
                <div>
                  <div style={{ fontFamily: 'Sora, sans-serif', fontWeight: 700, fontSize: '0.95rem', color: 'white' }}>
                    {t.author}
                  </div>
                  <div style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', marginTop: '2px' }}>
                    {t.title} · {t.school}
                  </div>
                </div>
              </div>

              {/* Navigation */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                {testimonials.map((_, i) => (
                  <button
                    key={i}
                    id={`testimonial-dot-${i}`}
                    onClick={() => setActive(i)}
                    style={{
                      width: i === active ? '24px' : '8px',
                      height: '8px',
                      borderRadius: '4px',
                      background: i === active ? t.color : 'rgba(255,255,255,0.15)',
                      border: 'none',
                      cursor: 'pointer',
                      transition: 'all 0.3s',
                    }}
                  />
                ))}
                <button
                  id="testimonial-prev"
                  onClick={prev}
                  style={{
                    width: '36px', height: '36px',
                    background: 'rgba(255,255,255,0.06)',
                    border: '1px solid rgba(255,255,255,0.1)',
                    borderRadius: '50%',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    cursor: 'pointer',
                    color: 'var(--text-secondary)',
                    marginLeft: '8px',
                    transition: 'all 0.2s',
                  }}
                  onMouseEnter={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.12)'; e.currentTarget.style.color = 'white'; }}
                  onMouseLeave={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.06)'; e.currentTarget.style.color = 'var(--text-secondary)'; }}
                >
                  <ChevronLeft size={16} />
                </button>
                <button
                  id="testimonial-next"
                  onClick={next}
                  style={{
                    width: '36px', height: '36px',
                    background: 'rgba(255,255,255,0.06)',
                    border: '1px solid rgba(255,255,255,0.1)',
                    borderRadius: '50%',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    cursor: 'pointer',
                    color: 'var(--text-secondary)',
                    transition: 'all 0.2s',
                  }}
                  onMouseEnter={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.12)'; e.currentTarget.style.color = 'white'; }}
                  onMouseLeave={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.06)'; e.currentTarget.style.color = 'var(--text-secondary)'; }}
                >
                  <ChevronRight size={16} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
