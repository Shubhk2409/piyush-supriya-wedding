import React, { useState, useCallback } from 'react';

const Envelope = ({ onOpen }) => {
  const [phase, setPhase] = useState('closed'); // closed | opening | exiting

  const handleTap = useCallback(() => {
    if (phase !== 'closed') return;
    setPhase('opening');

    // Zoom forward and fade out to reveal the next step (Ganesh Ji)
    setTimeout(() => setPhase('exiting'), 1200);
    setTimeout(() => onOpen(), 2200);
  }, [phase, onOpen]);

  const cls = [
    'envelope-screen',
    phase === 'opening' && 'is-opening',
    phase === 'exiting' && 'is-exiting',
  ].filter(Boolean).join(' ');

  return (
    <div className={cls} onClick={handleTap}>
      <div className="card-image-wrapper">
        <img 
          src="/media/Card Image.png" 
          alt="Wedding Invitation Card" 
          className="real-card-image"
        />
        
        {phase === 'closed' && (
          <div className="tap-prompt">
            <span className="tap-prompt-line" />
            <span className="tap-prompt-text">TAP TO OPEN</span>
          </div>
        )}
      </div>
    </div>
  );
};

export default Envelope;
