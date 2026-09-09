import React, { useState } from 'react';

const PageCorners = () => (
  <>
    <div className="corner-ornament corner-tl" />
    <div className="corner-ornament corner-tr" />
    <div className="corner-ornament corner-bl" />
    <div className="corner-ornament corner-br" />
  </>
);

const items = [
  { id: 1, label: 'Moment 1', tall: true },
  { id: 2, label: 'Moment 2' },
  { id: 3, label: 'Moment 3' },
  { id: 4, label: 'Moment 4' },
  { id: 5, label: 'Moment 5', tall: true },
  { id: 6, label: 'Moment 6' },
];

const Gallery = () => {
  const [openIdx, setOpenIdx] = useState(null);

  return (
    <section className="inv-page page-cream" id="gallery" style={{ padding: '3rem 1rem' }}>
      <PageCorners />

      <div className="reveal">
        <div className="gallery-heading">Our Moments</div>
      </div>

      <div className="reveal reveal-d1">
        <div className="ornament-divider">
          <span className="ornament-line" />
          <span className="ornament-dot">✦</span>
          <span className="ornament-line" />
        </div>
      </div>

      <div className="reveal reveal-d2">
        <div className="gallery-grid">
          {items.map((item, i) => (
            <div
              key={item.id}
              className={`gallery-item${item.tall ? ' tall' : ''}`}
              onClick={() => setOpenIdx(i)}
            >
              <div className="gallery-placeholder">{item.label}</div>
            </div>
          ))}
        </div>
      </div>

      {openIdx !== null && (
        <div className="lightbox" onClick={() => setOpenIdx(null)}>
          <button className="lightbox-close" onClick={() => setOpenIdx(null)}>✕</button>
          <div className="lightbox-inner">
            {items[openIdx].label}
          </div>
        </div>
      )}
    </section>
  );
};

export default Gallery;
