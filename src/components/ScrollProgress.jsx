import React, { useEffect, useState } from 'react';

export default function ScrollProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const maxScroll = Math.max(1, document.documentElement.scrollHeight - window.innerHeight);
      const p = Math.min(1, Math.max(0, window.scrollY / maxScroll));
      setProgress(p);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div id="scroll-bar" aria-hidden="true">
      <div
        className="scroll-fill"
        style={{ transform: `scaleX(${progress})` }}
      />
    </div>
  );
}
