import React, { useState, useEffect, useRef, useCallback } from 'react';
import Envelope from './components/Envelope';
import GaneshJi from './components/GaneshJi';
import Hero from './components/Hero';
import Kirtan from './components/Kirtan';
import EventCard from './components/EventCard';
import Countdown from './components/Countdown';
import Gallery from './components/Gallery';
import FinalImage from './components/FinalImage';
import AudioPlayer from './components/AudioPlayer';
import './index.css';

/* ========== WEDDING EVENT DATA ========== */
const events = [
  {
    title: 'Engagement',
    subtitle: 'TWO HEARTS • ONE JOURNEY',
    date: '08th December 2026',
    day: 'Tuesday',
    time: '7 PM onwards',
    venue: 'The Messina Banquet',
    mapUrl: 'https://maps.google.com/?q=The+Messina+Banquet',
    pageClass: 'page-cream',
    video: '/media/Enangment PS.mp4',
  },
  {
    title: 'Mehendi',
    subtitle: 'COLOURS OF LOVE',
    date: '10th December 2026',
    day: 'Thursday',
    time: '6 PM onwards',
    venue: 'At Residence',
    address: 'RZ-B-1/81, Vijay Enclave',
    mapUrl: 'https://maps.google.com',
    pageClass: 'page-sage',
    video: '/media/Mehendi PS.mp4',
  },
  {
    title: 'Wedding',
    subtitle: 'TOGETHER, WE BEGIN FOREVER',
    date: '12th December 2026',
    day: 'Saturday',
    time: '7 PM onwards',
    venue: 'The Messina Banquet',
    mapUrl: 'https://maps.google.com',
    pageClass: 'page-champagne',
    video: '/media/wedding 2.mp4',
  }
];

function App() {
  const [step, setStep] = useState('card'); // card | ganesh | main
  const [navVisible, setNavVisible] = useState(false);
  const scrollRef = useRef(null);

  /* ---- Scroll-reveal observer ---- */
  const handleScroll = useCallback(() => {
    const box = scrollRef.current;
    if (!box) return;

    const els = box.querySelectorAll('.reveal, .reveal-zoom');
    const trigger = box.getBoundingClientRect().top + box.clientHeight * 0.88;

    els.forEach((el) => {
      if (el.getBoundingClientRect().top < trigger) {
        el.classList.add('visible');
      }
    });

    setNavVisible(box.scrollTop > 250);
  }, []);

  useEffect(() => {
    const box = scrollRef.current;
    if (!box || step !== 'main') return;
    box.addEventListener('scroll', handleScroll, { passive: true });
    // Initial trigger
    const t = setTimeout(handleScroll, 150);
    return () => { box.removeEventListener('scroll', handleScroll); clearTimeout(t); };
  }, [step, handleScroll]);

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="app-shell">
      <AudioPlayer forcePlay={step !== 'card'} />
      
      {/* Step 1: Closed envelope */}
      {step === 'card' && (
        <Envelope onOpen={() => setStep('ganesh')} />
      )}

      {/* Step 2: Devotional Opening Screen */}
      {step === 'ganesh' && (
        <GaneshJi onComplete={() => setStep('main')} />
      )}

      {/* Step 3: Main invitation pages */}
      {step === 'main' && (
        <div className="main-scroll" ref={scrollRef}>
          <Hero />
          <Kirtan />
          {events.map((evt, i) => <EventCard key={i} {...evt} />)}
          <Countdown />
          <FinalImage />
        </div>
      )}

      {/* Floating nav — minimal, elegant */}
      {step === 'main' && navVisible && (
        <nav className="float-nav">
          <button onClick={() => scrollTo('home')}>HOME</button>
          <button onClick={() => scrollTo('engagement')}>EVENTS</button>
        </nav>
      )}
    </div>
  );
}

export default App;
