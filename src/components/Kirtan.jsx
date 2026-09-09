import React from 'react';

const Kirtan = () => {
  return (
    <section className="inv-page kirtan-page" style={{ padding: 0 }}>
      <div className="kirtan-bg-wrapper">
        <img 
          src="/media/Kirtan.png" 
          alt="Kirtan" 
          className="kirtan-bg-image"
        />
        <div className="kirtan-bg-overlay" />
      </div>

      {/* Floating golden particles */}
      <div className="petal" style={{top: '10%', left: '20%'}}/>
      <div className="petal" style={{top: '50%', right: '10%'}}/>
      <div className="petal" style={{bottom: '30%', left: '40%'}}/>

      <div className="kirtan-content">
        <div className="reveal">
          <div className="kirtan-heading" style={{ color: '#fff', fontFamily: 'var(--font-script)', fontSize: '2.5rem', textShadow: '0 2px 6px rgba(0,0,0,0.6)' }}>
            With Divine Blessings
          </div>
        </div>

        <div className="reveal reveal-d2">
          <div className="kirtan-text" style={{ color: 'rgba(255,255,255,0.9)', fontFamily: 'var(--font-serif)', fontSize: '1.1rem', fontStyle: 'italic', marginTop: '1rem', textShadow: '0 1px 4px rgba(0,0,0,0.6)', padding: '0 2rem', lineHeight: '1.6' }}>
            "May every step of this beautiful journey be blessed with love, happiness and togetherness."
          </div>
        </div>
      </div>
    </section>
  );
};

export default Kirtan;
