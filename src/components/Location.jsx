import React from 'react';

const PageCorners = () => (
  <>
    <div className="corner-ornament corner-tl" />
    <div className="corner-ornament corner-tr" />
    <div className="corner-ornament corner-bl" />
    <div className="corner-ornament corner-br" />
  </>
);

const Location = () => {
  const mapUrl = 'https://maps.google.com/?q=The+Messina+Banquet';

  return (
    <section className="inv-page page-cream" id="location">
      <PageCorners />

      <div className="reveal">
        <div className="location-heading">
          Find Your Way<br />to the Celebration
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
        <div className="location-venue-name">The Messina Banquet</div>
        <div className="location-address">
          Wedding Venue<br />
          New Delhi, India
        </div>
      </div>

      <div className="reveal reveal-d3">
        <div className="location-map-preview">
          📍 Map Preview
        </div>
      </div>

      <div className="reveal reveal-d4">
        <div className="location-buttons">
          <a href={mapUrl} target="_blank" rel="noopener noreferrer" className="location-btn location-btn-primary">
            📍 OPEN IN GOOGLE MAPS
          </a>
          <a href={mapUrl} target="_blank" rel="noopener noreferrer" className="location-btn">
            🧭 GET DIRECTIONS
          </a>
        </div>
      </div>
    </section>
  );
};

export default Location;
