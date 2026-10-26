import React, { useEffect } from 'react';
import { portfolioData } from '../data/portfolioData';

export default function NavDrawer({ isOpen, onClose, onOpenResume }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };

    if (isOpen) {
      document.body.classList.add('menu-open');
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.classList.remove('menu-open');
    }

    return () => {
      document.body.classList.remove('menu-open');
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  const navItems = [
    { label: 'Home', href: '#top' },
    { label: 'About', href: '#about' },
    { label: 'Education', href: '#education' },
    { label: 'Skills', href: '#skills' },
    { label: 'Experience', href: '#experience' },
    { label: 'Projects', href: '#projects' },
    { label: 'Certifications & Services', href: '#certifications' },
    { label: 'Enquiry / Hire Me', href: '#contact' }
  ];

  const handleNavClick = (e, href) => {
    e.preventDefault();
    onClose();
    const id = href.replace('#', '');
    const target = document.getElementById(id);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <div
        className={`nav-backdrop ${isOpen ? 'open' : ''}`}
        id="navBackdrop"
        aria-hidden={!isOpen}
        onClick={onClose}
      />
      <nav
        className={`nav-drawer ${isOpen ? 'open' : ''}`}
        id="navDrawer"
        aria-label="Main navigation"
        aria-hidden={!isOpen}
      >
        <span className="drawer-eyebrow">MENU</span>
        <ul className="drawer-links" id="drawerLinks">
          {navItems.map((item, idx) => (
            <li key={idx}>
              <a
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
              >
                <span className="txt">{item.label}</span>
              </a>
            </li>
          ))}
        </ul>

        <div className="mt-6 pt-4 border-t border-[rgba(10,10,20,0.08)] flex flex-col gap-3">
          <button
            onClick={() => {
              onClose();
              onOpenResume();
            }}
            className="w-full text-left py-2 px-3 rounded-lg font-mono text-xs uppercase tracking-wider text-red-600 hover:bg-red-50 flex items-center justify-between font-semibold"
          >
            <span>View Full Resume</span>
            <span>→</span>
          </button>
          
          <div className="text-[11px] font-mono text-ink-mute px-3">
            {portfolioData.personal.email} · {portfolioData.personal.phoneFormatted}
          </div>
        </div>
      </nav>
    </>
  );
}
