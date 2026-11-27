import React, { useRef, useState } from 'react';
import { portfolioData } from '../data/portfolioData';

export default function Hero({ onOpenResume }) {
  const cardRef = useRef(null);
  const [tilt, setTilt] = useState({ rx: 0, ry: 0 });

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    const rx = -(y / (rect.height / 2)) * 8;
    const ry = (x / (rect.width / 2)) * 8;
    setTilt({ rx, ry });
  };

  const handleMouseLeave = () => {
    setTilt({ rx: 0, ry: 0 });
  };

  const scrollTo = (id) => (e) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const { personal } = portfolioData;

  return (
    <section className="hero" id="top">
      <div className="container">
        <div className="hero-inner">
          {/* Left copy */}
          <div className="hero-copy">
            <div className="hero-eyebrow">
              <span className="dot"></span>
              {personal.availabilityText}
            </div>

            <h1 className="hero-title">
              <span className="line"><span className="line-inner">Full Stack</span></span>
              <span className="line"><span className="line-inner">Developer<span className="accent">.</span></span></span>
            </h1>

            <p className="hero-sub">
              Hi, I'm <strong>{personal.name}</strong> — Java Full Stack Developer building scalable, secure and high-performance web applications with Java, Spring Boot, and modern cloud tooling. Focused on shipping products that solve real problems.
            </p>

            <div className="hero-cta">
              <a className="btn btn-primary" href="#projects" onClick={scrollTo('projects')}>
                View My Work
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" className="w-4 h-4 ml-1">
                  <path d="M5 12h14M13 6l6 6-6 6" />
                </svg>
              </a>

              <a className="btn btn-ghost" href="#contact" onClick={scrollTo('contact')}>
                Get In Touch
              </a>
            </div>
          </div>

          {/* Right visual card with floating chips & user's profile photo */}
          <div className="hero-visual" onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave}>
            <div className="chip chip-1"><span className="d"></span>Open To Work</div>
            <div className="chip chip-3"><span className="d"></span>Ready To Learn</div>
            <div className="chip chip-2"><span className="d"></span>Ready To Build</div>
            <div className="chip chip-4"><span className="d"></span>Develop &amp; Deploy</div>

            <div
              className="hero-card"
              id="heroCard"
              ref={cardRef}
              style={{
                transform: `perspective(900px) rotateX(${tilt.rx}deg) rotateY(${tilt.ry}deg)`,
                transition: tilt.rx === 0 && tilt.ry === 0 ? 'transform 0.5s ease-out' : 'none'
              }}
            >
              <div className="hero-avatar">
                <img
                  src="/images/kishore.jpg"
                  alt={personal.name}
                  className="w-full h-full object-cover object-top"
                  onError={(e) => {
                    e.currentTarget.src = '/images/kishore.svg';
                  }}
                />
              </div>

              <h3>{personal.name}</h3>
              <div className="role">{personal.title}</div>

              <div className="hero-socials">
                {/* Phone */}
                <a
                  href={`tel:${personal.phone.replace(/[^0-9+]/g, '')}`}
                  className="social-btn"
                  aria-label="Call Kishore M"
                  title="Call"
                >
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.09 10.8a19.79 19.79 0 01-3.07-8.67A2 2 0 012 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 14.92z" />
                  </svg>
                </a>

                {/* WhatsApp */}
                <a
                  href={`https://wa.me/${personal.whatsapp}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-btn"
                  aria-label="WhatsApp Kishore M"
                  title="WhatsApp"
                >
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347zM12 0C5.373 0 0 5.373 0 12c0 2.126.553 4.122 1.522 5.855L0 24l6.334-1.491A11.926 11.926 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.886 0-3.65-.516-5.16-1.415l-.37-.219-3.76.886.924-3.65-.24-.382A9.945 9.945 0 012 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z" />
                  </svg>
                </a>

                {/* Email */}
                <a
                  href={`mailto:${personal.email}`}
                  className="social-btn"
                  aria-label="Email Kishore M"
                  title="Email"
                >
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                    <polyline points="22,6 12,13 2,6" />
                  </svg>
                </a>

                {/* LinkedIn */}
                <a
                  href={personal.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-btn"
                  aria-label="LinkedIn Profile"
                  title="LinkedIn"
                >
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z" />
                    <circle cx="4" cy="4" r="2" />
                  </svg>
                </a>

                {/* GitHub */}
                <a
                  href={personal.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-btn"
                  aria-label="GitHub Profile"
                  title="GitHub"
                >
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        className="hero-scroll"
        id="heroScroll"
        onClick={scrollTo('about')}
        role="button"
        tabIndex={0}
      >
        <div className="mouse"></div>
        <span>Scroll</span>
      </div>
    </section>
  );
}
