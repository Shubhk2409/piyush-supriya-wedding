import React, { useState } from 'react';

const PageCorners = () => (
  <>
    <div className="corner-ornament corner-tl" />
    <div className="corner-ornament corner-tr" />
    <div className="corner-ornament corner-bl" />
    <div className="corner-ornament corner-br" />
  </>
);

const RSVP = () => {
  const [name, setName] = useState('');
  const [mobile, setMobile] = useState('');
  const [guests, setGuests] = useState('');
  const [choice, setChoice] = useState(null);
  const [done, setDone] = useState(false);

  const submit = (e) => {
    e.preventDefault();
    console.log({ name, mobile, guests, choice });
    setDone(true);
  };

  return (
    <section className="inv-page page-blush" id="rsvp">
      <PageCorners />

      <div className="reveal">
        <div className="rsvp-heading">
          We Would Love<br />to Celebrate With You
        </div>
      </div>

      <div className="reveal reveal-d1">
        <div className="ornament-divider">
          <span className="ornament-line" />
          <span className="ornament-dot">✦</span>
          <span className="ornament-line" />
        </div>
      </div>

      {!done ? (
        <div className="reveal reveal-d2">
          <form className="rsvp-form" onSubmit={submit}>
            <input
              className="rsvp-input"
              type="text"
              placeholder="Your Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
            <input
              className="rsvp-input"
              type="tel"
              placeholder="Mobile Number"
              value={mobile}
              onChange={(e) => setMobile(e.target.value)}
              required
            />
            <input
              className="rsvp-input"
              type="number"
              placeholder="Number of Guests"
              value={guests}
              onChange={(e) => setGuests(e.target.value)}
              min="1"
              required
            />
            <div className="rsvp-choices">
              <button
                type="button"
                className={`rsvp-choice${choice === 'accept' ? ' active' : ''}`}
                onClick={() => setChoice('accept')}
              >
                JOYFULLY ACCEPT
              </button>
              <button
                type="button"
                className={`rsvp-choice${choice === 'decline' ? ' active' : ''}`}
                onClick={() => setChoice('decline')}
              >
                REGRETFULLY DECLINE
              </button>
            </div>
            <button type="submit" className="rsvp-btn">RSVP</button>
          </form>
        </div>
      ) : (
        <div className="reveal visible">
          <div className="rsvp-thanks">Thank you for your response! ♡</div>
        </div>
      )}
    </section>
  );
};

export default RSVP;
