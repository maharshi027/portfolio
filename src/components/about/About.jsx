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
              <small>B.Tech CSE (AI) • 2023–27</small>
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
              <strong>150+ Challenges</strong>
              <small>LeetCode & GeeksforGeeks</small>
            </div>

            <div className="about_feature_card glass-card">
              <FaAward className="about_feature_icon" />
              <h5>Recognitions</h5>
              <strong>Contata Solutions Hackathon 2026</strong>
              <small>Shortlisted for final Round</small>
            </div>
          </div>

          {/* Key Achievements & Impact Highlights */}
          <div className="about_highlights_list glass-card">
            <div className="highlight_item">
              <BsCheckCircleFill className="check_icon" />
              <div>
                <strong>Solved 150+ DSA problems</strong> on LeetCode and GeeksforGeeks, strengthening algorithmic thinking and optimization skills.
              </div>
            </div>

            <div className="highlight_item">
              <BsCheckCircleFill className="check_icon" />
              <div>
                <strong>Contata Solutions Hackathon 2026 –</strong> Shortlisted for the final round and presented the solution at Contata’s Noida office. Designed and implemented a dependency-aware Kanban workflow using Directed Acyclic Graphs (DAGs) to model task dependencies and provide a distinct alternative to traditional Jira/Trello-style project boards. Result pending.
              </div>
            </div>

            <div className="highlight_item">
              <BsCheckCircleFill className="check_icon" />
              <div>
                <strong>Secured 5th rank in the district</strong> in Class 10 (U.P. Board); felicitated by Hon’ble CM Yogi Adityanath with a cash prize and tablet for academic excellence.
              </div>
            </div>

            <div className="highlight_item">
              <BsCheckCircleFill className="check_icon" />
              <div>
                <strong>Nation Building Case Study Competition 2026 –</strong> Solved a Preventive Healthcare problem statement across multiple rounds.
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
