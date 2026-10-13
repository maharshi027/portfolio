import React, { useState, useEffect } from 'react';
import './nav.css';

// Icons
import {
  FaHome,
  FaUser,
  FaGraduationCap,
  FaBriefcase,
  FaCode,
  FaFolderOpen,
  FaAward,
  FaEnvelope
} from 'react-icons/fa';

const NAV_ITEMS = [
  { href: '#home', label: 'Home', icon: FaHome },
  { href: '#about', label: 'About', icon: FaUser },
  { href: '#education', label: 'Education', icon: FaGraduationCap },
  { href: '#experience', label: 'Experience', icon: FaBriefcase },
  { href: '#skills', label: 'Skills', icon: FaCode },
  { href: '#portfolio', label: 'Projects', icon: FaFolderOpen },
  { href: '#certificates', label: 'Certificates', icon: FaAward },
  { href: '#contact', label: 'Contact', icon: FaEnvelope }
];

function Nav() {
  const [activeNav, setActiveNav] = useState('#home');

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200;

      for (let i = NAV_ITEMS.length - 1; i >= 0; i--) {
        const item = NAV_ITEMS[i];
        const section = document.querySelector(item.href);
        if (section && section.offsetTop <= scrollPosition) {
          setActiveNav(item.href);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className="floating_dock_nav" aria-label="Main Navigation">
      <div className="nav_dock_inner glass-card">
        {NAV_ITEMS.map((item) => {
          const Icon = item.icon;
          const isActive = activeNav === item.href;
          return (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setActiveNav(item.href)}
              className={`nav_dock_link ${isActive ? 'active' : ''}`}
              title={item.label}
              aria-label={item.label}
            >
              <Icon className="nav_dock_icon" />
              <span className="nav_dock_tooltip">{item.label}</span>
            </a>
          );
        })}
      </div>
    </nav>
  );
}

export default Nav;
