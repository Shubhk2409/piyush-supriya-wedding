import React from 'react';

const PageCorners = () => (
  <>
    <div className="corner-ornament corner-tl" />
    <div className="corner-ornament corner-tr" />
    <div className="corner-ornament corner-bl" />
    <div className="corner-ornament corner-br" />
  </>
);

const Family = () => {
  return (
    <section className="inv-page page-ivory" style={{ padding: 0 }}>
      <div className="family-image-wrapper">
        <img 
          src="/images/family-ending.jpg" 
          alt="With the Blessings of Our Families" 
          className="family-animated-img"
        />
        <div className="family-image-overlay" />
      </div>
    </section>
  );
};

export default Family;
