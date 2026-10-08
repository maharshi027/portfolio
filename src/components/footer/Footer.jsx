import React from 'react';
import './footer.css';

// Icons
import { FaLinkedin, FaGithub, FaInstagram, FaWhatsapp, FaEnvelope, FaArrowUp } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer_section">
      <div className="container footer_container">
        {/* Brand */}
        <div className="footer_brand">
          <a href="#home" className="footer_logo">
            Harshit<span>.dev</span>
          </a>
          <p className="footer_tagline">
            B.Tech CSE (AI) • KIET '27 | Full-Stack & Generative AI Software Engineer
          </p>
        </div>

        {/* Navigation Permalinks */}
        <ul className="footer_permalinks">
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#education">Education</a></li>
          <li><a href="#experience">Experience</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#portfolio">Projects</a></li>
          <li><a href="#certificates">Certificates</a></li>
          <li><a href="#services">Services</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>

        {/* Social Icons */}
        <div className="footer_socials">
          <a
            href="https://linkedin.com/in/maharshi027/"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://github.com/maharshi027/"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
          >
            <FaGithub />
          </a>
          <a
            href="https://wa.me/917398464400"
            target="_blank"
            rel="noreferrer"
            aria-label="WhatsApp"
          >
            <FaWhatsapp />
          </a>
          <a
            href="mailto:harshkush15sep@gmail.com"
            aria-label="Email"
          >
            <FaEnvelope />
          </a>
          <a
            href="https://instagram.com/maharshi027/"
            target="_blank"
            rel="noreferrer"
            aria-label="Instagram"
          >
            <FaInstagram />
          </a>
        </div>

        {/* Bottom bar with Back to Top */}
        <div className="footer_bottom">
          <p className="footer_copyright">
            &copy; {currentYear} Harshit. Crafted with React 19 & Vanilla CSS. All rights reserved.
          </p>
          <a href="#home" className="back_to_top_btn" aria-label="Back to top of page">
            <span>Back to Top</span>
            <FaArrowUp />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
