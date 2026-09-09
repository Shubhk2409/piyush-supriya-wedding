import React from 'react';

const PageCorners = () => (
  <>
    <div className="corner-ornament corner-tl" />
    <div className="corner-ornament corner-tr" />
    <div className="corner-ornament corner-bl" />
    <div className="corner-ornament corner-br" />
  </>
);

const Footer = () => {
  const particles = Array.from({ length: 10 }, (_, i) => ({
    top: `${8 + Math.random() * 82}%`,
    left: `${4 + Math.random() * 92}%`,
    size: 4 + Math.random() * 4,
    delay: i * 0.7,
    dur: 6 + Math.random() * 5,
  }));

  return (
    <section className="inv-page footer-page page-champagne">
      <PageCorners />

      {/* Floating particles */}
      <div className="footer-particles">
        {particles.map((p, i) => (
          <div
            key={i}
            className="fp"
            style={{
              top: p.top,
              left: p.left,
              width: p.size + 'px',
              height: p.size + 'px',
              animationDelay: p.delay + 's',
              animationDuration: p.dur + 's',
            }}
          />
        ))}
      </div>

      <div className="reveal">
        <div className="footer-msg">
          We Can't Wait<br />to Celebrate<br />With You
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
        <div className="footer-names">
          Piyush <span className="footer-heart">♡</span> Supriya
        </div>
      </div>

      <div className="reveal reveal-d3">
        <div className="footer-love">With Love</div>
      </div>

      <div className="reveal reveal-d4">
        <div className="ornament-floral" style={{ marginTop: '1.5rem' }}>❧</div>
      </div>
    </section>
  );
};

export default Footer;
