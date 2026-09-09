import React from 'react';

const PageCorners = () => (
  <>
    <div className="corner-ornament corner-tl" />
    <div className="corner-ornament corner-tr" />
    <div className="corner-ornament corner-bl" />
    <div className="corner-ornament corner-br" />
  </>
);

const Hero = () => {
  return (
    <section className="inv-page hero-page" id="home">
      <div className="hero-bg-wrapper">
        <img 
          src="/media/Couple Photo.jpeg" 
          alt="Supriya & Piyush" 
          className="hero-bg-image"
        />
        <div className="hero-bg-overlay" />
      </div>

      <div className="reveal">
        <div className="hero-top-label" style={{ color: '#fff', textShadow: '0 2px 4px rgba(0,0,0,0.5)' }}>
          Two Souls,<br />One Beautiful Journey
        </div>
      </div>

      <div className="reveal reveal-d1">
        <div className="ornament-divider">
          <span className="ornament-line" style={{ background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.5), transparent)' }} />
          <span className="ornament-dot" style={{ color: '#fff' }}>✦</span>
          <span className="ornament-line" style={{ background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.5), transparent)' }} />
        </div>
      </div>

      <div className="reveal reveal-d2">
        <div className="hero-names" style={{ textShadow: '0 2px 8px rgba(0,0,0,0.6)' }}>
          <span className="hero-name" style={{ color: '#fff' }}>Supriya</span>
          <span className="hero-heart" style={{ color: '#C6A664' }}>&</span>
          <span className="hero-name" style={{ color: '#fff' }}>Piyush</span>
        </div>
      </div>

      <div className="reveal reveal-d3">
        <div className="hero-tagline" style={{ color: 'rgba(255,255,255,0.9)', letterSpacing: '0.15em', textTransform: 'none', fontStyle: 'italic', fontFamily: 'var(--font-serif)', fontSize: '1rem', textShadow: '0 1px 3px rgba(0,0,0,0.5)' }}>
          Together, we begin a beautiful new chapter.
        </div>
      </div>

      <div className="reveal reveal-d5" style={{ position: 'absolute', bottom: '8%' }}>
        <div className="scroll-hint">
          <span className="scroll-hint-text" style={{ color: 'rgba(255,255,255,0.8)' }}>SCROLL TO EXPLORE</span>
          <span className="scroll-hint-arrow" style={{ color: '#fff' }}>↓</span>
        </div>
      </div>
    </section>
  );
};

export default Hero;
