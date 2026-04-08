'use client';

import { useState, useEffect, useRef } from 'react';
import { ChevronDown, X, Menu, ArrowRight } from 'lucide-react';

const products = [
  {
    name: 'Cypher',
    role: 'For Students',
    roleColor: 'badge-cyan',
    desc: 'Personalized AI learning companion that adapts to each student\'s pace and style.',
    icon: '🎓',
  },
  {
    name: 'Morpheus',
    role: 'For Teachers',
    roleColor: 'badge-purple',
    desc: 'AI teaching agent that automates lesson planning, assessments, and feedback.',
    icon: '🧠',
  },
  {
    name: 'Zion',
    role: 'Tool Suite',
    roleColor: 'badge-pink',
    desc: 'Complete AI creativity and productivity tools suite for the entire school.',
    icon: '⚡',
  },
  {
    name: 'NEO',
    role: 'Innovation Lab',
    roleColor: 'badge-orange',
    desc: 'AI innovation lab where students build, experiment, and launch real AI projects.',
    icon: '🔬',
  },
  {
    name: 'Matrix',
    role: 'Infrastructure',
    roleColor: 'badge-green',
    desc: 'Secure, scalable AI infrastructure purpose-built for school environments.',
    icon: '🏗️',
  },
];

const resources = [
  { label: 'Case Studies', href: '#' },
  { label: 'Whitepapers', href: '#' },
  { label: 'Blog', href: '#' },
  { label: 'Media Coverage', href: '#' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [productsOpen, setProductsOpen] = useState(false);
  const [resourcesOpen, setResourcesOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileProductsOpen, setMobileProductsOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close dropdowns on outside click
  useEffect(() => {
    const handler = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setProductsOpen(false);
        setResourcesOpen(false);
      }
    };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, []);

  return (
    <>
      <nav
        id="navbar"
        ref={dropdownRef}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 1000,
          transition: 'all 0.3s ease',
          background: scrolled
            ? 'rgba(5, 8, 16, 0.92)'
            : 'transparent',
          backdropFilter: scrolled ? 'blur(20px)' : 'none',
          WebkitBackdropFilter: scrolled ? 'blur(20px)' : 'none',
          borderBottom: scrolled ? '1px solid rgba(255,255,255,0.06)' : 'none',
        }}
      >
        <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 24px' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: '72px' }}>

            {/* Logo */}
            <a href="#" id="nav-logo" style={{ display: 'flex', alignItems: 'center', gap: '10px', textDecoration: 'none' }}>
              <div style={{
                width: '36px', height: '36px',
                background: 'linear-gradient(135deg, #e8357a, #7c3aed)',
                borderRadius: '10px',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontSize: '18px',
                boxShadow: '0 0 20px rgba(232,53,122,0.4)',
              }}>
                ✦
              </div>
              <span style={{
                fontFamily: 'Sora, sans-serif',
                fontWeight: 700,
                fontSize: '1.1rem',
                color: 'white',
                letterSpacing: '-0.01em',
              }}>
                AI Ready School
              </span>
            </a>

            {/* Desktop Nav */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }} className="desktop-nav">

              {/* Products Dropdown */}
              <div style={{ position: 'relative' }}>
                <button
                  id="nav-products"
                  onClick={() => { setProductsOpen(!productsOpen); setResourcesOpen(false); }}
                  style={{
                    display: 'flex', alignItems: 'center', gap: '6px',
                    padding: '8px 14px',
                    background: 'transparent',
                    border: 'none',
                    color: productsOpen ? 'white' : 'rgba(240,244,255,0.75)',
                    fontFamily: 'Inter, sans-serif',
                    fontWeight: 500,
                    fontSize: '0.9rem',
                    cursor: 'pointer',
                    borderRadius: '8px',
                    transition: 'all 0.2s',
                  }}
                  onMouseEnter={e => { e.currentTarget.style.color = 'white'; e.currentTarget.style.background = 'rgba(255,255,255,0.06)'; }}
                  onMouseLeave={e => { if (!productsOpen) { e.currentTarget.style.color = 'rgba(240,244,255,0.75)'; e.currentTarget.style.background = 'transparent'; }}}
                >
                  Products
                  <ChevronDown size={14} style={{ transition: 'transform 0.2s', transform: productsOpen ? 'rotate(180deg)' : 'none' }} />
                </button>

                {productsOpen && (
                  <div style={{
                    position: 'absolute',
                    top: 'calc(100% + 12px)',
                    left: '-20px',
                    width: '520px',
                    background: 'rgba(8,12,23,0.96)',
                    border: '1px solid rgba(255,255,255,0.1)',
                    borderRadius: '20px',
                    padding: '16px',
                    backdropFilter: 'blur(20px)',
                    boxShadow: '0 25px 60px rgba(0,0,0,0.6), 0 0 0 1px rgba(232,53,122,0.1)',
                    display: 'grid',
                    gridTemplateColumns: '1fr 1fr',
                    gap: '8px',
                  }}>
                    <div style={{ gridColumn: '1/-1', padding: '4px 8px 8px', borderBottom: '1px solid rgba(255,255,255,0.06)', marginBottom: '4px' }}>
                      <span style={{ fontSize: '0.72rem', fontWeight: 600, fontFamily: 'Sora, sans-serif', color: 'rgba(139,156,200,0.7)', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
                        Our Platform
                      </span>
                    </div>
                    {products.map((p) => (
                      <a
                        key={p.name}
                        href={`#product-${p.name.toLowerCase()}`}
                        id={`nav-product-${p.name.toLowerCase()}`}
                        style={{ textDecoration: 'none', padding: '12px', borderRadius: '12px', transition: 'background 0.2s', display: 'block' }}
                        onMouseEnter={e => e.currentTarget.style.background = 'rgba(255,255,255,0.05)'}
                        onMouseLeave={e => e.currentTarget.style.background = 'transparent'}
                        onClick={() => setProductsOpen(false)}
                      >
                        <div style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
                          <span style={{ fontSize: '20px', lineHeight: 1 }}>{p.icon}</span>
                          <div>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '3px' }}>
                              <span style={{ fontFamily: 'Sora, sans-serif', fontWeight: 600, fontSize: '0.9rem', color: 'white' }}>{p.name}</span>
                              <span className={`badge ${p.roleColor}`} style={{ fontSize: '0.6rem', padding: '2px 8px' }}>{p.role}</span>
                            </div>
                            <p style={{ fontSize: '0.78rem', color: 'rgba(139,156,200,0.8)', lineHeight: 1.4 }}>{p.desc}</p>
                          </div>
                        </div>
                      </a>
                    ))}
                  </div>
                )}
              </div>

              {/* Programs */}
              <a
                href="#programs"
                id="nav-programs"
                style={{
                  padding: '8px 14px',
                  color: 'rgba(240,244,255,0.75)',
                  fontFamily: 'Inter, sans-serif',
                  fontWeight: 500,
                  fontSize: '0.9rem',
                  textDecoration: 'none',
                  borderRadius: '8px',
                  transition: 'all 0.2s',
                }}
                onMouseEnter={e => { e.currentTarget.style.color = 'white'; e.currentTarget.style.background = 'rgba(255,255,255,0.06)'; }}
                onMouseLeave={e => { e.currentTarget.style.color = 'rgba(240,244,255,0.75)'; e.currentTarget.style.background = 'transparent'; }}
              >
                Programs
              </a>

              {/* Resources Dropdown */}
              <div style={{ position: 'relative' }}>
                <button
                  id="nav-resources"
                  onClick={() => { setResourcesOpen(!resourcesOpen); setProductsOpen(false); }}
                  style={{
                    display: 'flex', alignItems: 'center', gap: '6px',
                    padding: '8px 14px',
                    background: 'transparent',
                    border: 'none',
                    color: resourcesOpen ? 'white' : 'rgba(240,244,255,0.75)',
                    fontFamily: 'Inter, sans-serif',
                    fontWeight: 500,
                    fontSize: '0.9rem',
                    cursor: 'pointer',
                    borderRadius: '8px',
                    transition: 'all 0.2s',
                  }}
                  onMouseEnter={e => { e.currentTarget.style.color = 'white'; e.currentTarget.style.background = 'rgba(255,255,255,0.06)'; }}
                  onMouseLeave={e => { if (!resourcesOpen) { e.currentTarget.style.color = 'rgba(240,244,255,0.75)'; e.currentTarget.style.background = 'transparent'; }}}
                >
                  Resources
                  <ChevronDown size={14} style={{ transition: 'transform 0.2s', transform: resourcesOpen ? 'rotate(180deg)' : 'none' }} />
                </button>
                {resourcesOpen && (
                  <div style={{
                    position: 'absolute',
                    top: 'calc(100% + 12px)',
                    right: 0,
                    width: '200px',
                    background: 'rgba(8,12,23,0.96)',
                    border: '1px solid rgba(255,255,255,0.1)',
                    borderRadius: '16px',
                    padding: '8px',
                    backdropFilter: 'blur(20px)',
                    boxShadow: '0 25px 50px rgba(0,0,0,0.5)',
                  }}>
                    {resources.map((r) => (
                      <a
                        key={r.label}
                        href={r.href}
                        id={`nav-resource-${r.label.toLowerCase().replace(/ /g,'-')}`}
                        style={{
                          display: 'block', padding: '10px 14px', borderRadius: '10px',
                          color: 'rgba(240,244,255,0.8)', textDecoration: 'none',
                          fontSize: '0.88rem', fontFamily: 'Inter, sans-serif',
                          transition: 'all 0.2s',
                        }}
                        onMouseEnter={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.06)'; e.currentTarget.style.color = 'white'; }}
                        onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = 'rgba(240,244,255,0.8)'; }}
                        onClick={() => setResourcesOpen(false)}
                      >
                        {r.label}
                      </a>
                    ))}
                  </div>
                )}
              </div>

              {/* About */}
              <a
                href="#about"
                id="nav-about"
                style={{
                  padding: '8px 14px',
                  color: 'rgba(240,244,255,0.75)',
                  fontFamily: 'Inter, sans-serif',
                  fontWeight: 500,
                  fontSize: '0.9rem',
                  textDecoration: 'none',
                  borderRadius: '8px',
                  transition: 'all 0.2s',
                }}
                onMouseEnter={e => { e.currentTarget.style.color = 'white'; e.currentTarget.style.background = 'rgba(255,255,255,0.06)'; }}
                onMouseLeave={e => { e.currentTarget.style.color = 'rgba(240,244,255,0.75)'; e.currentTarget.style.background = 'transparent'; }}
              >
                About
              </a>
            </div>

            {/* CTA Buttons */}
            <div id="nav-ctas" style={{ display: 'flex', alignItems: 'center', gap: '10px' }} className="desktop-nav">
              <a href="#signin" className="btn-secondary" style={{ padding: '9px 20px', fontSize: '0.875rem' }}>
                Sign in
              </a>
              <a href="#schedule" className="btn-primary" style={{ padding: '9px 20px', fontSize: '0.875rem' }}>
                Schedule a Call
                <ArrowRight size={14} />
              </a>
            </div>

            {/* Mobile menu button */}
            <button
              id="mobile-menu-btn"
              onClick={() => setMobileOpen(!mobileOpen)}
              className="mobile-only"
              style={{
                background: 'rgba(255,255,255,0.06)',
                border: '1px solid rgba(255,255,255,0.1)',
                borderRadius: '10px',
                padding: '8px',
                cursor: 'pointer',
                color: 'white',
                display: 'none',
              }}
            >
              {mobileOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileOpen && (
          <div style={{
            borderTop: '1px solid rgba(255,255,255,0.06)',
            background: 'rgba(5,8,16,0.98)',
            backdropFilter: 'blur(20px)',
            padding: '16px 24px 24px',
          }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
              <button
                onClick={() => setMobileProductsOpen(!mobileProductsOpen)}
                style={{
                  display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                  padding: '12px 16px', borderRadius: '10px',
                  background: 'transparent', border: 'none',
                  color: 'rgba(240,244,255,0.8)', fontFamily: 'Inter, sans-serif',
                  fontSize: '0.95rem', cursor: 'pointer', width: '100%',
                }}
              >
                Products
                <ChevronDown size={16} style={{ transform: mobileProductsOpen ? 'rotate(180deg)' : 'none', transition: 'transform 0.2s' }} />
              </button>
              {mobileProductsOpen && (
                <div style={{ paddingLeft: '16px', paddingBottom: '8px' }}>
                  {products.map(p => (
                    <a
                      key={p.name}
                      href={`#product-${p.name.toLowerCase()}`}
                      style={{
                        display: 'flex', alignItems: 'center', gap: '10px',
                        padding: '10px 12px', borderRadius: '8px',
                        color: 'rgba(240,244,255,0.7)', textDecoration: 'none',
                        fontSize: '0.88rem', fontFamily: 'Inter, sans-serif',
                      }}
                      onClick={() => setMobileOpen(false)}
                    >
                      <span>{p.icon}</span>
                      <div>
                        <div style={{ fontWeight: 600, color: 'white', fontSize: '0.9rem' }}>{p.name}</div>
                        <div style={{ fontSize: '0.75rem', color: 'rgba(139,156,200,0.7)' }}>{p.role}</div>
                      </div>
                    </a>
                  ))}
                </div>
              )}
              {['Programs', 'Resources', 'About'].map(item => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  style={{
                    display: 'block', padding: '12px 16px', borderRadius: '10px',
                    color: 'rgba(240,244,255,0.8)', textDecoration: 'none',
                    fontFamily: 'Inter, sans-serif', fontSize: '0.95rem',
                  }}
                  onClick={() => setMobileOpen(false)}
                >
                  {item}
                </a>
              ))}
              <div style={{ borderTop: '1px solid rgba(255,255,255,0.06)', marginTop: '12px', paddingTop: '16px', display: 'flex', flexDirection: 'column', gap: '10px' }}>
                <a href="#signin" className="btn-secondary" style={{ justifyContent: 'center' }}>Sign in</a>
                <a href="#schedule" className="btn-primary" style={{ justifyContent: 'center' }}>
                  Schedule a Call <ArrowRight size={14} />
                </a>
              </div>
            </div>
          </div>
        )}
      </nav>

      <style>{`
        @media (max-width: 900px) {
          .desktop-nav { display: none !important; }
          #mobile-menu-btn { display: flex !important; }
        }
      `}</style>
    </>
  );
}
