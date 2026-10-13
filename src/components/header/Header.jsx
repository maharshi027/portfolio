import React, { useState, useEffect } from 'react';
import './header.css';
import Cta from './Cta';
import ME from '../../assets/me.jpeg';
import HeaderSocial from './HeaderSocial';
import { FaReact, FaNodeJs, FaAward, FaLaptopCode } from 'react-icons/fa';
import { SiPostgresql, SiGooglecloud, SiAmazonwebservices } from 'react-icons/si';
import { TbBrandLeetcode } from 'react-icons/tb';
import { BsArrowDownShort } from 'react-icons/bs';

const ROLES = [
  'Full-Stack Developer (MERN)',
  'AI-Integrated Web App Engineer',
  'Distributed Backend & API Engineer',
  'Problem Solver • 150+ DSA Solved'
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

        {/* Quick Stats Bar - 4 Stat Rectangles */}
        <div className="hero_stats_strip glass-card">
          <div className="stat_box stat_rectangle">
            <div className="stat_icon_badge icon_dsa">
              <TbBrandLeetcode />
            </div>
            <span className="stat_number">150+</span>
            <span className="stat_label">DSA Problems Solved</span>
          </div>

          <div className="stat_box stat_rectangle">
            <div className="stat_icon_badge icon_ai">
              <FaLaptopCode />
            </div>
            <span className="stat_number">5+</span>
            <span className="stat_label">Full-Stack Projects with AI Integrated</span>
          </div>

          <div className="stat_box stat_rectangle">
            <div className="stat_icon_badge icon_aws">
              <SiAmazonwebservices />
            </div>
            <span className="stat_number">AWS SAA</span>
            <span className="stat_label">Solutions Architect Associate Global Certificate</span>
          </div>

          <div className="stat_box stat_rectangle">
            <div className="stat_icon_badge icon_ssb">
              <FaAward />
            </div>
            <span className="stat_number">5+ Times</span>
            <span className="stat_label">Qualified for SSB Merit</span>
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
