import React, { useState, useEffect } from 'react';

const PageCorners = () => (
  <>
    <div className="corner-ornament corner-tl" />
    <div className="corner-ornament corner-tr" />
    <div className="corner-ornament corner-bl" />
    <div className="corner-ornament corner-br" />
  </>
);

const Countdown = () => {
  const weddingDate = new Date('2026-12-12T19:00:00+05:30').getTime();

  const calc = () => {
    const diff = Math.max(0, weddingDate - Date.now());
    return {
      days: Math.floor(diff / 86400000),
      hours: Math.floor((diff / 3600000) % 24),
      minutes: Math.floor((diff / 60000) % 60),
      seconds: Math.floor((diff / 1000) % 60),
    };
  };

  const [t, setT] = useState(calc());

  useEffect(() => {
    const id = setInterval(() => setT(calc()), 1000);
    return () => clearInterval(id);
  }, []);

  const pad = (n) => String(n).padStart(2, '0');

  return (
    <section className="inv-page page-champagne" id="countdown">
      <div className="reveal">
        <div className="countdown-heading" style={{ color: '#A58543', textTransform: 'uppercase', letterSpacing: '0.15em', fontFamily: 'var(--font-serif)', fontStyle: 'normal', fontSize: '1.4rem' }}>
          COUNTING DOWN<br />TO FOREVER
        </div>
      </div>

      <div className="reveal reveal-d1">
        <div className="ornament-divider">
          <span className="ornament-line" />
          <span className="ornament-dot">✦</span>
          <span className="ornament-line" />
        </div>
      </div>

      <div className="reveal reveal-d2">
        <div className="countdown-grid" style={{ gap: '15px' }}>
          <div className="countdown-box" style={{ background: 'transparent', border: '1px solid rgba(198,166,100,0.3)', width: '70px', height: '85px' }}>
            <div className="countdown-num" style={{ color: '#C6A664', fontSize: '2rem', fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: '400' }}>{pad(t.days)}</div>
            <div className="countdown-label" style={{ color: '#A58543', letterSpacing: '0.2em' }}>DAYS</div>
          </div>
          <div className="countdown-box" style={{ background: 'transparent', border: '1px solid rgba(198,166,100,0.3)', width: '70px', height: '85px' }}>
            <div className="countdown-num" style={{ color: '#C6A664', fontSize: '2rem', fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: '400' }}>{pad(t.hours)}</div>
            <div className="countdown-label" style={{ color: '#A58543', letterSpacing: '0.2em' }}>HOURS</div>
          </div>
          <div className="countdown-box" style={{ background: 'transparent', border: '1px solid rgba(198,166,100,0.3)', width: '70px', height: '85px' }}>
            <div className="countdown-num" style={{ color: '#C6A664', fontSize: '2rem', fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: '400' }}>{pad(t.minutes)}</div>
            <div className="countdown-label" style={{ color: '#A58543', letterSpacing: '0.2em' }}>MINUTES</div>
          </div>
          <div className="countdown-box" style={{ background: 'transparent', border: '1px solid rgba(198,166,100,0.3)', width: '70px', height: '85px' }}>
            <div className="countdown-num" style={{ color: '#C6A664', fontSize: '2rem', fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: '400' }}>{pad(t.seconds)}</div>
            <div className="countdown-label" style={{ color: '#A58543', letterSpacing: '0.2em' }}>SECONDS</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Countdown;
