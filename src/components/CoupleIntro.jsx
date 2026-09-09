import React from 'react';

const PageCorners = () => (
  <>
    <div className="corner-ornament corner-tl" />
    <div className="corner-ornament corner-tr" />
    <div className="corner-ornament corner-bl" />
    <div className="corner-ornament corner-br" />
  </>
);

const CoupleIntro = () => {
  return (
    <section className="inv-page page-ivory" id="couple">
      <PageCorners />

      <div className="reveal">
        <div className="couple-heading">
          Two Souls,<br />
          One <em>Beautiful</em> Journey
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
        <div className="couple-grid">
          <div className="couple-card">
            <div className="couple-frame">
              <div className="couple-frame-placeholder">P</div>
            </div>
            <div className="couple-card-name">Piyush</div>
          </div>

          <div className="couple-ampersand">&amp;</div>

          <div className="couple-card">
            <div className="couple-frame">
              <div className="couple-frame-placeholder">S</div>
            </div>
            <div className="couple-card-name">Supriya</div>
          </div>
        </div>
      </div>

      <div className="reveal reveal-d3">
        <div className="ornament-floral">✿</div>
      </div>
    </section>
  );
};

export default CoupleIntro;
