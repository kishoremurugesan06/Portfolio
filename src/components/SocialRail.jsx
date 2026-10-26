import React from 'react';
import { portfolioData } from '../data/portfolioData';

export default function SocialRail() {
  const { personal } = portfolioData;

  const socialLinks = [
    {
      id: 'whatsapp',
      name: 'WhatsApp',
      url: `https://wa.me/${personal.whatsapp}`,
      target: '_blank',
      rel: 'noopener noreferrer',
      className: 'rail-btn whatsapp',
      icon: (
        <svg viewBox="0 0 24 24" width="24" height="24" fill="none">
          <circle cx="12" cy="12" r="10" fill="#25D366" />
          <path
            d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347zM12 5.5A6.5 6.5 0 0 0 5.5 12c0 1.15.3 2.23.83 3.17L5.5 18.5l3.43-.8a6.5 6.5 0 1 0 3.07-12.2z"
            fill="#ffffff"
          />
        </svg>
      )
    },
    {
      id: 'linkedin',
      name: 'LinkedIn',
      url: personal.linkedin,
      target: '_blank',
      rel: 'noopener noreferrer',
      className: 'rail-btn linkedin',
      icon: (
        <svg viewBox="0 0 24 24" width="24" height="24" fill="none">
          <rect width="20" height="20" x="2" y="2" rx="4.5" fill="#0A66C2" />
          <path
            d="M7.6 9.4H4.8V18h2.8V9.4zM6.2 8.2c1 0 1.6-.7 1.6-1.6 0-.9-.6-1.6-1.6-1.6-1 0-1.6.7-1.6 1.6 0 .9.6 1.6 1.6 1.6zm13 9.8h-2.8v-4.4c0-1.1-.03-2.3-1.4-2.3-1.4 0-1.6 1.1-1.6 2.2V18h-2.8V9.4h2.7v1.2h.04c.38-.7 1.3-1.5 2.7-1.5 2.9 0 3.4 1.9 3.4 4.4V18z"
            fill="#ffffff"
          />
        </svg>
      )
    },
    {
      id: 'github',
      name: 'GitHub',
      url: personal.github,
      target: '_blank',
      rel: 'noopener noreferrer',
      className: 'rail-btn github',
      icon: (
        <svg viewBox="0 0 24 24" width="24" height="24" fill="#181717">
          <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0 0 22 12.017C22 6.484 17.522 2 12 2z" />
        </svg>
      )
    },
    {
      id: 'gmail',
      name: 'Gmail',
      url: `mailto:${personal.email}`,
      target: '_self',
      className: 'rail-btn gmail',
      icon: (
        <svg viewBox="0 0 24 24" width="24" height="24" fill="none">
          <path
            d="M3 6.5C3 5.67 3.67 5 4.5 5h15c.83 0 1.5.67 1.5 1.5v11c0 .83-.67 1.5-1.5 1.5h-15C3.67 19 3 18.33 3 17.5v-11z"
            fill="#ffffff"
          />
          <path
            d="M3.5 6.5L12 13l8.5-6.5"
            stroke="#EA4335"
            strokeWidth="2.2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path d="M3 6.5v11c0 .83.67 1.5 1.5 1.5h2.5V11L3 8V6.5z" fill="#EA4335" />
          <path d="M21 6.5v11c0 .83-.67 1.5-1.5 1.5h-2.5V11L21 8V6.5z" fill="#EA4335" />
        </svg>
      )
    }
  ];

  return (
    <aside className="social-rail" aria-label="Social links rail">
      {socialLinks.map((item) => (
        <a
          key={item.id}
          href={item.url}
          target={item.target || '_blank'}
          rel={item.rel || 'noopener noreferrer'}
          className={item.className}
          aria-label={item.name}
          title={item.name}
        >
          {item.icon}
          <span className="rail-tip">{item.name}</span>
        </a>
      ))}
    </aside>
  );
}
