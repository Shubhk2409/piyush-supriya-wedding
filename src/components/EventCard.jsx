import React from 'react';

const PageCorners = () => (
  <>
    <div className="corner-ornament corner-tl" />
    <div className="corner-ornament corner-tr" />
    <div className="corner-ornament corner-bl" />
    <div className="corner-ornament corner-br" />
  </>
);

const EventCard = ({
  title,
  subtitle,
  date,
  day,
  time,
  venue,
  address,
  quote,
  mapUrl,
  pageClass = 'page-ivory',
  video = null,
}) => {
  return (
    <section className={`inv-page ${pageClass}`} id={title.toLowerCase().replace(/\s+/g, '-')}>
      {video && (
        <div className="event-bg-video-wrapper">
          <video 
            className="event-bg-video"
            src={video}
            autoPlay 
            loop 
            muted 
            playsInline
          />
          <div className="event-bg-overlay" />
        </div>
      )}
      
      <PageCorners />

      {mapUrl && (
        <div className="reveal reveal-d4" style={{ position: 'absolute', bottom: '10%', zIndex: 10, width: '100%', textAlign: 'center' }}>
          <a href={mapUrl} target="_blank" rel="noopener noreferrer" className="event-cta" style={{ background: 'rgba(0,0,0,0.6)', border: '1px solid rgba(255,255,255,0.4)', color: '#fff', textShadow: 'none' }}>
            📍 VIEW LOCATION
          </a>
        </div>
      )}
    </section>
  );
};

export default EventCard;
