import React, { useRef, useEffect, useState, useCallback } from 'react';

const PageCorners = () => (
  <>
    <div className="corner-ornament corner-tl" />
    <div className="corner-ornament corner-tr" />
    <div className="corner-ornament corner-bl" />
    <div className="corner-ornament corner-br" />
  </>
);

const ScratchCard = () => {
  const canvasRef = useRef(null);
  const [revealed, setRevealed] = useState(false);
  const drawing = useRef(false);

  const initCanvas = useCallback(() => {
    const c = canvasRef.current;
    if (!c) return;
    const ctx = c.getContext('2d');
    const r = c.getBoundingClientRect();
    c.width = r.width;
    c.height = r.height;

    // Scratch surface
    ctx.fillStyle = '#EAE2D6';
    ctx.fillRect(0, 0, c.width, c.height);

    // Texture dots
    ctx.fillStyle = 'rgba(198,166,100,0.06)';
    for (let i = 0; i < 300; i++) {
      ctx.fillRect(Math.random() * c.width, Math.random() * c.height, 1.5, 1.5);
    }

    // Label text
    ctx.fillStyle = '#A58543';
    ctx.font = '600 9px Cinzel, serif';
    ctx.textAlign = 'center';
    ctx.fillText('SCRATCH TO REVEAL', c.width / 2, c.height / 2 - 8);
    ctx.font = 'italic 11px Cormorant Garamond, serif';
    ctx.fillStyle = '#8A8480';
    ctx.fillText('✦   ✦   ✦', c.width / 2, c.height / 2 + 12);
  }, []);

  useEffect(() => { initCanvas(); }, [initCanvas]);

  const scratch = useCallback((x, y) => {
    const c = canvasRef.current;
    if (!c) return;
    const ctx = c.getContext('2d');
    ctx.globalCompositeOperation = 'destination-out';
    ctx.beginPath();
    ctx.arc(x, y, 24, 0, Math.PI * 2);
    ctx.fill();

    // Check if enough scratched
    const d = ctx.getImageData(0, 0, c.width, c.height);
    let t = 0;
    for (let i = 3; i < d.data.length; i += 4) {
      if (d.data[i] === 0) t++;
    }
    if (t / (d.data.length / 4) > 0.4) setRevealed(true);
  }, []);

  const pos = (e) => {
    const r = canvasRef.current.getBoundingClientRect();
    const p = e.touches ? e.touches[0] : e;
    return { x: p.clientX - r.left, y: p.clientY - r.top };
  };

  const onStart = (e) => { e.preventDefault(); drawing.current = true; const p = pos(e); scratch(p.x, p.y); };
  const onMove = (e) => { e.preventDefault(); if (!drawing.current) return; const p = pos(e); scratch(p.x, p.y); };
  const onEnd = () => { drawing.current = false; };

  return (
    <section className="inv-page page-ivory">
      <PageCorners />

      <div className="reveal">
        <div className="scratch-label">A SPECIAL MESSAGE FOR YOU</div>
      </div>

      <div className="reveal reveal-d1">
        <div className="scratch-wrapper">
          <div className="scratch-under">
            <div className="scratch-msg">
              "Your presence will make<br />our celebration even<br />more special."
            </div>
            <div className="scratch-msg-names">Piyush & Supriya</div>
          </div>
          {!revealed && (
            <canvas
              ref={canvasRef}
              className="scratch-canvas"
              onMouseDown={onStart}
              onMouseMove={onMove}
              onMouseUp={onEnd}
              onMouseLeave={onEnd}
              onTouchStart={onStart}
              onTouchMove={onMove}
              onTouchEnd={onEnd}
            />
          )}
        </div>
        {!revealed && <div className="scratch-hint">Use your finger to scratch ✨</div>}
      </div>
    </section>
  );
};

export default ScratchCard;
