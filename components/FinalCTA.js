'use client';

import { ArrowRight, Calendar } from 'lucide-react';

export default function FinalCTA() {
  return (
    <section id="schedule" className="section-padding" style={{ position: 'relative', overflow: 'hidden' }}>
      {/* Gradient background */}
      <div style={{
        position: 'absolute', inset: 0,
        background: 'linear-gradient(180deg, var(--bg-primary) 0%, rgba(13,20,40,0.6) 50%, var(--bg-primary) 100%)',
      }} />
      <div style={{
        position: 'absolute', inset: 0,
        background: 'radial-gradient(ellipse 70% 60% at 50% 50%, rgba(232,53,122,0.12) 0%, transparent 60%)',
      }} />

      {/* Grid */}
      <div className="grid-bg" style={{ position: 'absolute', inset: 0, opacity: 0.4 }} />

      <div style={{ maxWidth: '860px', margin: '0 auto', padding: '0 24px', position: 'relative', zIndex: 1, textAlign: 'center' }}>

        {/* Badge */}
        <span className="badge badge-pink" style={{ marginBottom: '28px', display: 'inline-flex' }}>
          Let's Talk
        </span>

        <h2 style={{
          fontSize: 'clamp(2rem, 5vw, 3.5rem)',
          marginBottom: '20px',
          lineHeight: 1.1,
        }}>
          Ready to make your school{' '}
          <span className="gradient-text">AI-ready?</span>
        </h2>

        <p style={{
          color: 'var(--text-secondary)',
          fontSize: '1.1rem',
          lineHeight: 1.7,
          marginBottom: '44px',
          maxWidth: '580px',
          margin: '0 auto 44px',
        }}>
          Book a 30-minute call with an education specialist. We'll understand your school's needs 
          and walk you through exactly which products make sense for you — no pressure, no pitch deck.
        </p>

        {/* CTA actions */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '16px', flexWrap: 'wrap', marginBottom: '48px' }}>
          <a
            href="https://aireadyschool.com"
            id="final-cta-schedule"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
            style={{ fontSize: '1.05rem', padding: '18px 36px' }}
          >
            <Calendar size={18} />
            Schedule a Free Call
          </a>
          <a
            href="https://aireadyschool.com"
            id="final-cta-learn"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary"
            style={{ fontSize: '1.05rem', padding: '18px 32px' }}
          >
            Learn More
            <ArrowRight size={16} />
          </a>
        </div>

        {/* Reassurances */}
        <div style={{
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          gap: '32px', flexWrap: 'wrap',
          color: 'var(--text-muted)',
          fontSize: '0.82rem',
          fontFamily: 'Inter, sans-serif',
        }}>
          {[
            { icon: '🔒', text: 'No commitment required' },
            { icon: '⚡', text: 'Onboard in 11 days' },
            { icon: '🎓', text: 'Free pilot for qualifying schools' },
          ].map(({ icon, text }) => (
            <span key={text} style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <span>{icon}</span>
              {text}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
