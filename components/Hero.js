'use client';

import { useEffect, useRef, useState } from 'react';
import { ArrowRight, Play, ChevronDown } from 'lucide-react';

function Counter({ target, suffix = '', duration = 2000 }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const started = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          const start = Date.now();
          const tick = () => {
            const progress = Math.min((Date.now() - start) / duration, 1);
            const ease = 1 - Math.pow(1 - progress, 3);
            setCount(Math.floor(ease * target));
            if (progress < 1) requestAnimationFrame(tick);
          };
          requestAnimationFrame(tick);
        }
      },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [target, duration]);

  return <span ref={ref}>{count}{suffix}</span>;
}

const stats = [
  { value: 50, suffix: '+', label: 'Schools Transformed' },
  { value: 25000, suffix: '+', label: 'Students Impacted' },
  { value: 5, suffix: '', label: 'Integrated AI Products' },
  { value: 98, suffix: '%', label: 'Principal Satisfaction' },
];

// Floating particle
function Particle({ style }) {
  return (
    <div style={{
      position: 'absolute',
      width: '3px',
      height: '3px',
      borderRadius: '50%',
      background: 'rgba(232,53,122,0.6)',
      ...style,
    }} />
  );
}

export default function Hero() {
  const [videoOpen, setVideoOpen] = useState(false);

  // Animated particles positions (static to avoid SSR mismatch)
  const particles = [
    { top: '20%', left: '10%', animation: 'float 5s ease-in-out infinite' },
    { top: '60%', left: '5%', animation: 'float 7s ease-in-out infinite 1s' },
    { top: '35%', right: '8%', animation: 'float 6s ease-in-out infinite 0.5s' },
    { top: '75%', right: '15%', animation: 'float 8s ease-in-out infinite 2s' },
    { top: '15%', left: '45%', animation: 'float 5.5s ease-in-out infinite 1.5s' },
  ];

  return (
    <section
      id="hero"
      style={{
        position: 'relative',
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden',
        padding: '120px 24px 80px',
      }}
    >
      {/* Grid background */}
      <div className="grid-bg" style={{ position: 'absolute', inset: 0, opacity: 0.6 }} />

      {/* Glow orbs */}
      <div className="glow-orb glow-orb-pink animate-pulse-glow" style={{ width: '600px', height: '600px', top: '-100px', left: '-150px' }} />
      <div className="glow-orb glow-orb-cyan animate-pulse-glow" style={{ width: '500px', height: '500px', top: '30%', right: '-200px', animationDelay: '1.5s' }} />
      <div className="glow-orb glow-orb-purple" style={{ width: '400px', height: '400px', bottom: '0', left: '40%' }} />

      {/* Floating particles */}
      {particles.map((p, i) => <Particle key={i} style={p} />)}

      {/* Content */}
      <div style={{ position: 'relative', zIndex: 10, maxWidth: '900px', textAlign: 'center' }}>

        {/* Eyebrow badge */}
        <div style={{ marginBottom: '28px', display: 'flex', justifyContent: 'center' }}>
          <span className="badge badge-pink" style={{ fontSize: '0.72rem' }}>
            <span style={{ display: 'inline-block', width: '6px', height: '6px', borderRadius: '50%', background: '#e8357a', boxShadow: '0 0 8px #e8357a' }} />
            India's First Complete AI Ecosystem for K-12
          </span>
        </div>

        {/* Main headline */}
        <h1 style={{
          fontSize: 'clamp(2.5rem, 7vw, 5.5rem)',
          marginBottom: '24px',
          letterSpacing: '-0.03em',
          lineHeight: 1.08,
        }}>
          Every Student.
          <br />
          Every Teacher.
          <br />
          <span className="gradient-text">Every School — AI-Ready.</span>
        </h1>

        {/* Sub-headline */}
        <p style={{
          fontSize: 'clamp(1rem, 2.5vw, 1.2rem)',
          color: 'var(--text-secondary)',
          lineHeight: 1.7,
          maxWidth: '680px',
          margin: '0 auto 40px',
          fontWeight: 400,
        }}>
          Give your school a complete, responsible AI ecosystem — from personalized student learning companions 
          to intelligent teacher tools and enterprise-grade infrastructure. Built for K-12.
        </p>

        {/* CTA buttons */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '14px', flexWrap: 'wrap', marginBottom: '60px' }}>
          <a
            href="#schedule"
            id="hero-cta-primary"
            className="btn-primary"
            style={{ fontSize: '1rem', padding: '16px 32px' }}
          >
            Schedule a Free Demo
            <ArrowRight size={16} />
          </a>
          <button
            id="hero-cta-video"
            className="btn-secondary"
            onClick={() => setVideoOpen(true)}
            style={{
              display: 'flex', alignItems: 'center', gap: '10px',
              fontSize: '1rem', padding: '16px 28px',
              border: '1px solid rgba(255,255,255,0.12)',
            }}
          >
            <div style={{
              width: '28px', height: '28px',
              background: 'rgba(255,255,255,0.1)',
              borderRadius: '50%',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
            }}>
              <Play size={12} fill="white" />
            </div>
            See How It Works
          </button>
        </div>

        {/* Trust signals */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '8px',
          color: 'var(--text-secondary)',
          fontSize: '0.82rem',
          flexWrap: 'wrap',
        }}>
          {['No lock-in contracts', 'Dedicated onboarding support', 'CBSE & ICSE aligned'].map((item, i) => (
            <span key={item} style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
              {i > 0 && <span style={{ color: 'var(--text-muted)', fontSize: '0.7rem' }}>·</span>}
              <span style={{ color: '#34d399', fontSize: '10px' }}>✓</span>
              {item}
            </span>
          ))}
        </div>
      </div>

      {/* Stats strip */}
      <div id="hero-stats" style={{
        position: 'relative',
        zIndex: 10,
        marginTop: '80px',
        width: '100%',
        maxWidth: '900px',
        display: 'grid',
        gridTemplateColumns: 'repeat(4, 1fr)',
        gap: '1px',
        background: 'rgba(255,255,255,0.06)',
        borderRadius: '20px',
        overflow: 'hidden',
        border: '1px solid rgba(255,255,255,0.06)',
      }}>
        {stats.map((s) => (
          <div
            key={s.label}
            style={{
              padding: '28px 20px',
              background: 'rgba(13,20,40,0.8)',
              textAlign: 'center',
              backdropFilter: 'blur(10px)',
              transition: 'background 0.3s',
            }}
            onMouseEnter={e => e.currentTarget.style.background = 'rgba(232,53,122,0.08)'}
            onMouseLeave={e => e.currentTarget.style.background = 'rgba(13,20,40,0.8)'}
          >
            <div className="stat-number" style={{ marginBottom: '6px' }}>
              <Counter target={s.value} suffix={s.suffix} />
            </div>
            <div style={{ color: 'var(--text-secondary)', fontSize: '0.82rem', fontFamily: 'Inter, sans-serif' }}>
              {s.label}
            </div>
          </div>
        ))}
      </div>

      {/* Scroll indicator */}
      <div style={{
        position: 'absolute',
        bottom: '32px',
        left: '50%',
        transform: 'translateX(-50%)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '6px',
        color: 'var(--text-muted)',
        fontSize: '0.72rem',
        fontFamily: 'Inter, sans-serif',
        letterSpacing: '0.08em',
        textTransform: 'uppercase',
        zIndex: 10,
      }}>
        Scroll to explore
        <ChevronDown size={16} style={{ animation: 'float 2s ease-in-out infinite' }} />
      </div>

      {/* Video Modal */}
      {videoOpen && (
        <div
          onClick={() => setVideoOpen(false)}
          style={{
            position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.85)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            zIndex: 9999, backdropFilter: 'blur(10px)',
          }}
        >
          <div
            onClick={e => e.stopPropagation()}
            style={{
              background: 'var(--bg-card)', borderRadius: '20px',
              overflow: 'hidden', width: '90%', maxWidth: '800px',
              border: '1px solid rgba(255,255,255,0.1)',
              boxShadow: '0 25px 80px rgba(0,0,0,0.7)',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '16px 20px', borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
              <span style={{ fontFamily: 'Sora, sans-serif', fontWeight: 600, fontSize: '0.95rem' }}>AI Ready School — Platform Overview</span>
              <button onClick={() => setVideoOpen(false)} style={{ background: 'transparent', border: 'none', color: 'var(--text-secondary)', cursor: 'pointer', padding: '4px' }}>✕</button>
            </div>
            <div style={{ padding: '0', aspectRatio: '16/9', background: 'rgba(0,0,0,0.5)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <div style={{ textAlign: 'center', color: 'var(--text-secondary)' }}>
                <Play size={48} style={{ marginBottom: '12px', opacity: 0.4 }} />
                <p style={{ fontSize: '0.9rem' }}>Video demo coming soon</p>
              </div>
            </div>
          </div>
        </div>
      )}

      <style>{`
        @media (max-width: 600px) {
          #hero-stats { grid-template-columns: repeat(2, 1fr); }
        }
      `}</style>
    </section>
  );
}
