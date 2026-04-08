'use client';

import { ArrowRight, ExternalLink } from 'lucide-react';

// Simple SVG social icons since lucide-react social icons vary by version
function InstagramIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
    </svg>
  );
}
function LinkedinIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
      <rect x="2" y="9" width="4" height="12"/>
      <circle cx="4" cy="4" r="2"/>
    </svg>
  );
}
function YoutubeIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-1.96C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 1.96A29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58A2.78 2.78 0 0 0 3.4 19.54C5.12 20 12 20 12 20s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-1.96A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z"/>
      <polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02"/>
    </svg>
  );
}

const footerLinks = {
  'Platform': [
    { label: 'Cypher — Student AI', href: '#product-cypher' },
    { label: 'Morpheus — Teacher AI', href: '#product-morpheus' },
    { label: 'Zion — Tool Suite', href: '#product-zion' },
    { label: 'NEO — Innovation Lab', href: '#product-neo' },
    { label: 'Matrix — Infrastructure', href: '#product-matrix' },
  ],
  'Company': [
    { label: 'About Us', href: '#about' },
    { label: 'Philosophy', href: '#' },
    { label: 'Careers', href: '#' },
    { label: 'Media Kit', href: '#' },
  ],
  'Resources': [
    { label: 'Blog', href: '#' },
    { label: 'Case Studies', href: '#' },
    { label: 'Whitepapers', href: '#' },
    { label: 'AI for Schools Guide', href: '#' },
  ],
};

export default function Footer() {
  return (
    <footer id="footer" style={{
      position: 'relative',
      background: 'rgba(5,8,16,0.9)',
      borderTop: '1px solid rgba(255,255,255,0.06)',
    }}>
      <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '64px 24px 32px' }}>

        {/* Top row */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: '2fr repeat(3, 1fr)',
          gap: '48px',
          marginBottom: '48px',
        }}
          className="footer-grid"
        >
          {/* Brand */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '16px' }}>
              <div style={{
                width: '36px', height: '36px',
                background: 'linear-gradient(135deg, #e8357a, #7c3aed)',
                borderRadius: '10px',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontSize: '18px',
              }}>✦</div>
              <span style={{ fontFamily: 'Sora, sans-serif', fontWeight: 700, fontSize: '1.05rem', color: 'white' }}>
                AI Ready School
              </span>
            </div>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.88rem', lineHeight: 1.7, maxWidth: '280px', marginBottom: '24px' }}>
              India's first complete AI ecosystem for K-12 schools. Helping every school adopt AI responsibly and effectively.
            </p>
            {/* Newsletter */}
            <div style={{ marginBottom: '24px' }}>
              <p style={{ fontSize: '0.78rem', color: 'var(--text-muted)', fontFamily: 'Sora, sans-serif', textTransform: 'uppercase', letterSpacing: '0.06em', fontWeight: 600, marginBottom: '10px' }}>
                AI in Education Newsletter
              </p>
              <div style={{ display: 'flex', gap: '8px' }}>
                <input
                  id="footer-email"
                  type="email"
                  placeholder="Your school email"
                  style={{
                    flex: 1,
                    padding: '10px 14px',
                    background: 'rgba(255,255,255,0.05)',
                    border: '1px solid rgba(255,255,255,0.1)',
                    borderRadius: '10px',
                    color: 'white',
                    fontFamily: 'Inter, sans-serif',
                    fontSize: '0.85rem',
                    outline: 'none',
                  }}
                />
                <button
                  id="footer-subscribe"
                  className="btn-primary"
                  style={{ padding: '10px 14px', borderRadius: '10px' }}
                >
                  <ArrowRight size={16} />
                </button>
              </div>
            </div>
            {/* Social */}
            <div style={{ display: 'flex', gap: '10px' }}>
              {[
                { Icon: InstagramIcon, href: '#', id: 'footer-instagram' },
                { Icon: LinkedinIcon, href: '#', id: 'footer-linkedin' },
                { Icon: YoutubeIcon, href: '#', id: 'footer-youtube' },
              ].map(({ Icon, href, id }) => (
                <a
                  key={id}
                  href={href}
                  id={id}
                  style={{
                    width: '36px', height: '36px',
                    background: 'rgba(255,255,255,0.06)',
                    border: '1px solid rgba(255,255,255,0.08)',
                    borderRadius: '10px',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    color: 'var(--text-secondary)',
                    transition: 'all 0.2s',
                  }}
                  onMouseEnter={e => { e.currentTarget.style.background = 'rgba(232,53,122,0.15)'; e.currentTarget.style.color = '#e8357a'; e.currentTarget.style.borderColor = 'rgba(232,53,122,0.3)'; }}
                  onMouseLeave={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.06)'; e.currentTarget.style.color = 'var(--text-secondary)'; e.currentTarget.style.borderColor = 'rgba(255,255,255,0.08)'; }}
                >
                  <Icon />
                </a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([section, links]) => (
            <div key={section}>
              <h4 style={{
                fontFamily: 'Sora, sans-serif',
                fontWeight: 600,
                fontSize: '0.82rem',
                color: 'var(--text-muted)',
                textTransform: 'uppercase',
                letterSpacing: '0.08em',
                marginBottom: '16px',
              }}>
                {section}
              </h4>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '10px' }}>
                {links.map(({ label, href }) => (
                  <li key={label}>
                    <a
                      href={href}
                      style={{
                        color: 'var(--text-secondary)',
                        textDecoration: 'none',
                        fontSize: '0.875rem',
                        fontFamily: 'Inter, sans-serif',
                        transition: 'color 0.2s',
                        lineHeight: 1.4,
                      }}
                      onMouseEnter={e => e.currentTarget.style.color = 'white'}
                      onMouseLeave={e => e.currentTarget.style.color = 'var(--text-secondary)'}
                    >
                      {label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Divider */}
        <div className="divider" style={{ marginBottom: '24px' }} />

        {/* Bottom row */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '12px' }}>
          <p style={{ color: 'var(--text-muted)', fontSize: '0.8rem', fontFamily: 'Inter, sans-serif' }}>
            © 2025 AI Ready School. All rights reserved.
          </p>
          <div style={{ display: 'flex', gap: '20px' }}>
            {['Privacy Policy', 'Terms of Service', 'Responsible AI Charter'].map((item) => (
              <a
                key={item}
                href="#"
                style={{
                  color: 'var(--text-muted)',
                  fontSize: '0.8rem',
                  fontFamily: 'Inter, sans-serif',
                  textDecoration: 'none',
                  transition: 'color 0.2s',
                }}
                onMouseEnter={e => e.currentTarget.style.color = 'var(--text-secondary)'}
                onMouseLeave={e => e.currentTarget.style.color = 'var(--text-muted)'}
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .footer-grid { grid-template-columns: 1fr 1fr !important; }
        }
        @media (max-width: 480px) {
          .footer-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </footer>
  );
}
