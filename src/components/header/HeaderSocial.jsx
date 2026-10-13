import React from 'react';
import { FaLinkedin, FaGithub, FaEnvelope, FaWhatsapp } from 'react-icons/fa';

function HeaderSocial() {
  return (
    <div className="header_socials">
      <a
        href="https://linkedin.com/in/maharshi027/"
        target="_blank"
        rel="noreferrer"
        aria-label="Harshit LinkedIn Profile"
        title="LinkedIn"
      >
        <FaLinkedin />
      </a>
      <a
        href="https://github.com/maharshi027/"
        target="_blank"
        rel="noreferrer"
        aria-label="Harshit GitHub Profile"
        title="GitHub"
      >
        <FaGithub />
      </a>
      <a
        href="mailto:harshkush15sep@gmail.com"
        aria-label="Email Harshit"
        title="Email"
      >
        <FaEnvelope />
      </a>
      <a
        href="https://wa.me/917398464400"
        target="_blank"
        rel="noreferrer"
        aria-label="Chat on WhatsApp"
        title="WhatsApp"
      >
        <FaWhatsapp />
      </a>
    </div>
  );
}

export default HeaderSocial;
