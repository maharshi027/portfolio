import React from 'react';
import './about.css';
import ME from '../../assets/me.jpeg';
import CV from '../../assets/technical/Resume.pdf';
import { FaGraduationCap, FaBriefcase, FaCode, FaAward } from 'react-icons/fa';
import { FiDownload, FiMail, FiMapPin } from 'react-icons/fi';
import { BsCheckCircleFill } from 'react-icons/bs';

function About() {
  return (
    <section id="about">
      <div className="section_header">
        <span className="section_tag">01 // PROFILE</span>
        <h2 className="section_title">
          About <span>Me</span>
        </h2>
        <p className="section_subtitle">
          Passionate B.Tech CSE (AI) undergraduate bridging full-stack web engineering, distributed backend systems, and modern AI.
        </p>
      </div>

      <div className="container about_container">
        {/* Left Column: Profile Card with Harshit's Photo */}
        <div className="about_left">
          <div className="about_image_card glass-card">
            <div className="about_image_wrapper">
              <img src={ME} alt="Harshit" className="about_avatar" />
            </div>
            <div className="about_image_footer">
              <h4>Harshit</h4>
              <p className="about_role_badge">Full-Stack Developer & SDE Intern</p>
              <div className="about_location_tag">
                <FiMapPin /> <span>Ghaziabad / Delhi-NCR, India</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Dynamic Highlights & Concise Story */}
        <div className="about_right">
          {/* 4 Feature Stat Cards */}
          <div className="about_cards_grid">
            <div className="about_feature_card glass-card">
              <FaGraduationCap className="about_feature_icon" />
              <h5>Academics</h5>
              <strong>7.96 CGPA (80%)</strong>
              <small>KIET (AKTU) • 2023–27</small>
            </div>

            <div className="about_feature_card glass-card">
              <FaBriefcase className="about_feature_icon" />
              <h5>Experience</h5>
              <strong>2 Internships</strong>
              <small>ASpireLyfX & Dream Girl</small>
            </div>

            <div className="about_feature_card glass-card">
              <FaCode className="about_feature_icon" />
              <h5>DSA Solved</h5>
              <strong>100+ Challenges</strong>
              <small>LeetCode & GeeksforGeeks</small>
            </div>

            <div className="about_feature_card glass-card">
              <FaAward className="about_feature_icon" />
              <h5>Recognitions</h5>
              <strong>Samsung SFT</strong>
              <small>Shortlisted in Round 1</small>
            </div>
          </div>

          {/* Quick Value Points (concise, scannable, NOT heavy blocks of words!) */}
          <div className="about_highlights_list glass-card">
            <div className="highlight_item">
              <BsCheckCircleFill className="check_icon" />
              <div>
                <strong>Full-Stack Architecture:</strong>
                <span> Hands-on in React.js, Node.js, Express, PostgreSQL, MongoDB, and Tailwind CSS.</span>
              </div>
            </div>

            <div className="highlight_item">
              <BsCheckCircleFill className="check_icon" />
              <div>
                <strong>High-Concurrency & Systems:</strong>
                <span> Engineered transactional inventory systems with order-level row locks, Redis caching, and Docker.</span>
              </div>
            </div>

            <div className="highlight_item">
              <BsCheckCircleFill className="check_icon" />
              <div>
                <strong>Generative AI & LLMs:</strong>
                <span> Built multi-modal web platforms integrating Google Gemini API with schema-validated JSON outputs.</span>
              </div>
            </div>
          </div>

          {/* Action Row */}
          <div className="about_cta_row">
            <a href={CV} download="Harshit_Resume.pdf" className="btn btn-primary">
              <FiDownload /> Download Resume
            </a>
            <a href="#contact" className="btn">
              <FiMail /> Let's Connect
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
