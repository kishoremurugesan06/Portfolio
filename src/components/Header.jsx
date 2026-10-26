import React, { useEffect, useState } from 'react';

export default function Header({ isMenuOpen, onToggleMenu }) {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 24);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = (e) => {
    e.preventDefault();
    const top = document.getElementById('top');
    if (top) {
      top.scrollIntoView({ behavior: 'smooth' });
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <header className={`site-header ${isScrolled ? 'is-scrolled' : ''}`} id="siteHeader">
      <div className="header-inner">
        <a
          href="#top"
          onClick={scrollToTop}
          className="brand"
          aria-label="Kishore M — Java Full Stack Developer"
        >
          <span className="brand-name">Kishore M</span>
        </a>

        <button
          className="menu-toggle"
          id="menuToggle"
          aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={isMenuOpen}
          aria-controls="navDrawer"
          onClick={onToggleMenu}
        >
          <span className="menu-text">{isMenuOpen ? 'Close' : 'Menu'}</span>
          <span className="menu-lines" aria-hidden="true">
            <span style={{ transform: isMenuOpen ? 'rotate(45deg) translate(5px, 5px)' : 'none' }}></span>
            <span style={{ opacity: isMenuOpen ? 0 : 1 }}></span>
            <span style={{ transform: isMenuOpen ? 'rotate(-45deg) translate(5px, -5px)' : 'none' }}></span>
          </span>
        </button>
      </div>
    </header>
  );
}
