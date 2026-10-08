import React, { useState, useEffect } from 'react';
import './header.css';
import Cta from './Cta';
import ME from '../../assets/about_me.png';
import ME_PHOTO from '../../assets/me.jpeg';
import HeaderSocial from './HeaderSocial';
import { FaReact, FaNodeJs } from 'react-icons/fa';
import { SiPostgresql, SiGooglecloud } from 'react-icons/si';
import { BsArrowDownShort } from 'react-icons/bs';

const ROLES = [
  'Full-Stack Developer (MERN)',
  'Gen AI & LLM Integration Specialist',
  'Distributed Backend & API Engineer',
  'Problem Solver • 100+ DSA Solved'
];

function Header() {
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const fullText = ROLES[currentRoleIndex];
    const typingSpeed = isDeleting ? 40 : 80;

    const timer = setTimeout(() => {
      if (!isDeleting) {
        if (displayText.length < fullText.length) {
          setDisplayText(fullText.slice(0, displayText.length + 1));
        } else {
          setTimeout(() => setIsDeleting(true), 1800);
        }
      } else {
        if (displayText.length > 0) {
          setDisplayText(fullText.slice(0, displayText.length - 1));
        } else {
          setIsDeleting(false);
          setCurrentRoleIndex((prev) => (prev + 1) % ROLES.length);
        }
      }
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [displayText, isDeleting, currentRoleIndex]);

  return (
    <header id="home">
      <div className="container header_container">
        {/* Availability Pill */}
        <div className="status_badge">
          <span className="status_dot"></span>
          <span>Open to SDE & Full-Stack Opportunities • 2026/2027</span>
        </div>

        {/* Intro Text */}
        <div className="header_intro">
          <p className="greeting_text">Hello, my name is</p>
          <h1 className="header_name">
            Harshit<span className="accent_dot">.</span>
          </h1>
          <div className="role_typewriter">
            <span className="typewriter_prefix">I build </span>
            <span className="typewriter_text">{displayText}</span>
            <span className="typewriter_cursor">|</span>
          </div>
          <p className="header_bio">
            B.Tech CSE (Artificial Intelligence) student at <strong>KIET Group of Institutions</strong> (CGPA: <strong>7.96</strong>). Passionate about high-concurrency transactional systems, MERN stack, and multi-modal generative AI pipelines.
          </p>
        </div>

        {/* Action Buttons */}
        <Cta />

        {/* Social Links on Left Side */}
        <HeaderSocial />

        {/* Main Hero Visual Card */}
        <div className="hero_visual_wrapper">
          <div className="hero_glow_aura"></div>
          
          <div className="me_frame">
            <img src={ME} alt="Harshit - Full Stack Developer" className="me_img" />
          </div>

          {/* Floating Skill Badges */}
          <div className="floating_chip chip_top_left">
            <FaReact className="chip_icon icon_react" />
            <span>React.js</span>
          </div>

          <div className="floating_chip chip_top_right">
            <FaNodeJs className="chip_icon icon_node" />
            <span>Node & Express</span>
          </div>

          <div className="floating_chip chip_bottom_left">
            <SiPostgresql className="chip_icon icon_pg" />
            <span>PostgreSQL & Redis</span>
          </div>

          <div className="floating_chip chip_bottom_right">
            <SiGooglecloud className="chip_icon icon_ai" />
            <span>Gemini AI</span>
          </div>

          {/* Experience highlight tag */}
          <div className="hero_experience_tag">
            <strong>2+</strong>
            <span>Internships Done</span>
          </div>
        </div>

        {/* Quick Stats Bar */}
        <div className="hero_stats_strip glass-card">
          <div className="stat_box">
            <span className="stat_number">7.96</span>
            <span className="stat_label">B.Tech CGPA (80%)</span>
          </div>
          <div className="stat_divider"></div>
          <div className="stat_box">
            <span className="stat_number">100+</span>
            <span className="stat_label">DSA Challenges Solved</span>
          </div>
          <div className="stat_divider"></div>
          <div className="stat_box">
            <span className="stat_number">500+</span>
            <span className="stat_label">Live Donor Txns Handled</span>
          </div>
          <div className="stat_divider"></div>
          <div className="stat_box">
            <span className="stat_number">4+</span>
            <span className="stat_label">Full-Stack AI Projects</span>
          </div>
        </div>

        {/* Scroll Indicator */}
        <a href="#about" className="scroll_down_btn" aria-label="Scroll down to About section">
          <span>Scroll Down</span>
          <BsArrowDownShort className="scroll_arrow" />
        </a>
      </div>
    </header>
  );
}

export default Header;
