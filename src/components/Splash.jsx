import React, { useEffect, useState } from 'react';

export default function Splash({ onFinish }) {
  const [percent, setPercent] = useState(0);
  const [isOut, setIsOut] = useState(false);
  const name = "KISHORE M";

  useEffect(() => {
    // Lock body scroll while splash is active
    document.body.classList.add('is-locked');

    const duration = 2000;
    const intervalTime = 30;
    const steps = duration / intervalTime;
    let currentStep = 0;

    const timer = setInterval(() => {
      currentStep++;
      const currentPct = Math.min(100, Math.floor((currentStep / steps) * 100));
      setPercent(currentPct);

      if (currentStep >= steps) {
        clearInterval(timer);
        setTimeout(() => {
          setIsOut(true);
          document.body.classList.remove('is-locked');
          setTimeout(() => {
            onFinish();
          }, 800);
        }, 300);
      }
    }, intervalTime);

    return () => {
      clearInterval(timer);
      document.body.classList.remove('is-locked');
    };
  }, [onFinish]);

  const handleSkip = () => {
    setIsOut(true);
    document.body.classList.remove('is-locked');
    setTimeout(() => {
      onFinish();
    }, 400);
  };

  return (
    <div
      id="splash"
      className={isOut ? 'is-out' : ''}
      role="status"
      aria-label="Loading portfolio"
      onClick={handleSkip}
      title="Click anywhere to skip"
    >
      <div className="splash-ring-bg" />
      
      <div className="splash-stage">
        <div className="splash-ring-1" />
        <div className="splash-ring-2" />
        <div className="splash-ring-3" />
        <div className="splash-photo">
          <img
            src="/images/kishore.jpg"
            alt="Kishore M"
            className="w-full h-full object-cover object-top"
            onError={(e) => {
              e.currentTarget.src = '/images/kishore.svg';
            }}
          />
        </div>
      </div>

      <div className="splash-title" id="splashTitle" aria-hidden="true">
        {name.split('').map((char, index) => (
          <span
            key={index}
            style={{
              animationDelay: `${0.2 + index * 0.08}s`,
              marginRight: char === ' ' ? '0.35em' : '0.02em'
            }}
          >
            {char === ' ' ? '\u00A0' : char}
          </span>
        ))}
        <span
          className="char-caret"
          style={{ '--caret-delay': `${0.2 + name.length * 0.08 + 0.3}s` }}
        />
      </div>

      <div className="splash-pct" id="splashPct">
        {percent}%
      </div>
    </div>
  );
}
