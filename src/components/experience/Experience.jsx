import React from 'react';
import './experience.css';
import { FaBriefcase, FaCalendarAlt, FaCheckCircle, FaExternalLinkAlt } from 'react-icons/fa';
import { BsArrowRight } from 'react-icons/bs';

const EXPERIENCES = [
  {
    role: 'Project Management Intern',
    company: 'ASpireLyfX',
    period: 'Oct 2026 – Present',
    type: 'Internship',
    badge: 'Current',
    description:
      'Leading agile task coordination and cross-functional team delivery across a structured development cycle.',
    metrics: [
      { label: 'Program Cycle', value: '45 Days' },
      { label: 'Phases Monitored', value: '5 Stages' },
      { label: 'Delivery Pace', value: 'On-Schedule' }
    ],
    bullets: [
      'Coordinated end-to-end sprint planning, task allocation, milestone tracking, and progress monitoring across 5 structured development phases.',
      'Maintained centralized project trackers, executive status reports, and technical documentation with cross-functional teams to ensure timely release.'
    ],
    skills: ['Agile / Scrum', 'Milestone Tracking', 'Jira / Project Trackers', 'Cross-Functional Leadership']
  },
  {
    role: 'Full-Stack Developer Intern',
    company: 'Dream Girl Foundation',
    period: 'May 2026 – Jul 2026',
    type: 'Internship',
    badge: 'Completed',
    description:
      'Engineered an end-to-end NGO web platform with automated donation processing and custom CMS administration.',
    metrics: [
      { label: 'Donor Transactions', value: '500+' },
      { label: 'Efficiency Gain', value: '+40%' },
      { label: 'Manual Queries Cut', value: '65%' }
    ],
    bullets: [
      'Built a high-availability NGO platform from scratch and integrated secure payment gateways, handling 500+ donor transactions seamlessly.',
      'Improved donation processing efficiency by 40% via automated REST API pipelines and relational schema indexing.',
      'Engineered a custom CMS to manage donor records, payment history, and campaign metrics, eliminating manual spreadsheets.'
    ],
    skills: ['React.js', 'Node.js', 'Express.js', 'Payment Gateways', 'Relational Indexing', 'CMS Architecture']
  },
  {
    role: 'Web Development Intern',
    company: 'InternPe',
    period: 'Dec 2025 – Jan 2026',
    type: 'Internship',
    badge: 'Verified',
    description:
      'Developed responsive full-stack modules and UI components with strict standard compliance and code reviews.',
    metrics: [
      { label: 'Certificate ID', value: 'IPI#68392' },
      { label: 'Modules Shipped', value: 'Production' },
      { label: 'Code Quality', value: 'Approved' }
    ],
    bullets: [
      'Developed responsive front-end layouts and integrated backend REST endpoints with optimized state management.',
      'Completed rigorous internship milestones with high distinction and official AICTE/MSME recognized certification.'
    ],
    skills: ['JavaScript ES6+', 'HTML5/CSS3', 'REST APIs', 'Git / GitHub']
  }
];

function Experience() {
  return (
    <section id="experience">
      <div className="section_header">
        <span className="section_tag">03 // CAREER JOURNEY</span>
        <h2 className="section_title">
          Work <span>Experience</span>
        </h2>
        <p className="section_subtitle">
          Hands-on software development and engineering internships delivering real-world value.
        </p>
      </div>

      <div className="container experience_container">
        <div className="experience_timeline">
          {EXPERIENCES.map((exp, index) => (
            <div key={index} className="experience_card glass-card">
              {/* Card Header */}
              <div className="exp_header_row">
                <div className="exp_role_group">
                  <div className="exp_icon_box">
                    <FaBriefcase className="exp_briefcase_icon" />
                  </div>
                  <div>
                    <h3 className="exp_role_title">{exp.role}</h3>
                    <div className="exp_company_tag">
                      <span className="exp_company_name">{exp.company}</span>
                      <span className="exp_type_dot">•</span>
                      <span className="exp_type_text">{exp.type}</span>
                    </div>
                  </div>
                </div>

                <div className="exp_time_badge">
                  <FaCalendarAlt />
                  <span>{exp.period}</span>
                  <span className={`exp_badge_pill ${exp.badge.toLowerCase()}`}>{exp.badge}</span>
                </div>
              </div>

              {/* Metrics Bar */}
              <div className="exp_metrics_strip">
                {exp.metrics.map((metric, mIndex) => (
                  <div key={mIndex} className="exp_metric_item">
                    <span className="metric_val">{metric.value}</span>
                    <span className="metric_lbl">{metric.label}</span>
                  </div>
                ))}
              </div>

              <p className="exp_summary">{exp.description}</p>

              {/* Key Deliverables */}
              <div className="exp_bullets_list">
                {exp.bullets.map((bullet, bIndex) => (
                  <div key={bIndex} className="exp_bullet_item">
                    <FaCheckCircle className="exp_check_bullet" />
                    <span>{bullet}</span>
                  </div>
                ))}
              </div>

              {/* Skill Tags */}
              <div className="exp_skills_row">
                {exp.skills.map((skill, sIndex) => (
                  <span key={sIndex} className="exp_skill_pill">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Experience;
