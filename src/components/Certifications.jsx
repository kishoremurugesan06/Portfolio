import React from 'react';
import { portfolioData } from '../data/portfolioData';

export default function Certifications() {
  const { certifications, services } = portfolioData;

  const getCertIcon = (icon) => {
    switch (icon) {
      case 'code':
        return (
          <svg viewBox="0 0 24 24">
            <polyline points="16 18 22 12 16 6" />
            <polyline points="8 6 2 12 8 18" />
          </svg>
        );
      case 'cloud':
        return (
          <svg viewBox="0 0 24 24">
            <path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z" />
          </svg>
        );
      case 'shield':
        return (
          <svg viewBox="0 0 24 24">
            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
          </svg>
        );
      default:
        return (
          <svg viewBox="0 0 24 24">
            <circle cx="12" cy="8" r="6" />
            <path d="M15.477 12.89L17 22l-5-3-5 3 1.523-9.11" />
          </svg>
        );
    }
  };

  const getServiceIcon = (index) => {
    switch (index) {
      case 0:
        return (
          <svg viewBox="0 0 24 24">
            <rect x="3" y="3" width="18" height="18" rx="2" />
            <path d="M9 9h6M9 12h6M9 15h4" />
          </svg>
        );
      case 1:
        return (
          <svg viewBox="0 0 24 24">
            <rect x="2" y="2" width="20" height="8" rx="2" />
            <rect x="2" y="14" width="20" height="8" rx="2" />
            <path d="M6 6h.01M6 18h.01" />
          </svg>
        );
      case 2:
        return (
          <svg viewBox="0 0 24 24">
            <rect x="2" y="3" width="20" height="14" rx="2" />
            <path d="M8 21h8M12 17v4" />
          </svg>
        );
      default:
        return (
          <svg viewBox="0 0 24 24">
            <circle cx="12" cy="12" r="10" />
            <path d="M2 12h20M12 2a15.3 15.3 0 010 20M12 2a15.3 15.3 0 000 20" />
          </svg>
        );
    }
  };

  return (
    <section id="certifications" style={{ background: 'var(--bg-2)' }}>
      <div className="container">
        {/* Certifications Block */}
        <div className="section-head">
          <span className="eyebrow">Certifications</span>
          <h2 className="section-title">
            Verified <em>credentials</em>.
          </h2>
        </div>

        <div className="certs">
          {certifications.map((cert) => (
            <div className="cert" key={cert.id}>
              <div className="cert-icon">{getCertIcon(cert.icon)}</div>
              <div className="cert-info">
                <div className="t">{cert.title}</div>
                <div className="i">{cert.issuer}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Services Block */}
        <div className="services-head section-head">
          <span className="eyebrow">Services</span>
          <h2 className="section-title">
            How I can <em>help</em>.
          </h2>
        </div>

        <div className="services">
          {services.map((srv, idx) => (
            <div className="service" key={srv.id}>
              <div className="service-icon">{getServiceIcon(idx)}</div>
              <div className="service-title">{srv.title}</div>
              <p className="service-desc">{srv.desc}</p>
              <div className="service-tags">
                {srv.tags.map((tag, tIdx) => (
                  <span className="tag" key={tIdx}>
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
