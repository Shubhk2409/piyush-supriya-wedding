import React, { useEffect, useState } from 'react';

const GaneshJi = ({ onComplete }) => {
  const [phase, setPhase] = useState('entering'); // entering | visible | exiting

  useEffect(() => {
    // Sequence:
    // 0ms -> start fade in
    // 500ms -> visible, start slow zoom
    // 3500ms -> start fade out
    // 4500ms -> onComplete (transition to main website)
    
    setTimeout(() => setPhase('visible'), 500);
    setTimeout(() => setPhase('exiting'), 3500);
    setTimeout(() => onComplete(), 4500);
  }, [onComplete]);

  const cls = [
    'ganesh-screen',
    phase === 'entering' && 'is-entering',
    phase === 'visible' && 'is-visible',
    phase === 'exiting' && 'is-exiting'
  ].filter(Boolean).join(' ');

  return (
    <div className={cls}>
      <img 
        src="/media/Ganesh Ji.png" 
        alt="Lord Ganesha" 
        className="ganesh-image"
      />
      <div className="ganesh-overlay">
        <div className="ganesh-text">
          With the blessings of Lord Ganesha
        </div>
      </div>
      
      {/* Subtle floating particles for the divine feel */}
      <div className="petal" style={{top: '20%', left: '10%'}}/>
      <div className="petal" style={{top: '60%', right: '15%'}}/>
      <div className="petal" style={{bottom: '20%', left: '30%'}}/>
    </div>
  );
};

export default GaneshJi;
