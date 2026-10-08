import React, { useState } from 'react';
import './skills.css';

// React Icons
import {
  FaReact,
  FaNodeJs,
  FaPython,
  FaGitAlt,
  FaDocker,
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaBootstrap
} from 'react-icons/fa';
import {
  SiTypescript,
  SiCplusplus,
  SiPostgresql,
  SiMongodb,
  SiRedis,
  SiMysql,
  SiTailwindcss,
  SiExpress,
  SiVite,
  SiPostman,
  SiJest,
  SiGooglecloud,
  SiLinux,
  SiOpenai,
  SiVercel
} from 'react-icons/si';
import { TbBrandLeetcode } from 'react-icons/tb';
import { BsCpuFill } from 'react-icons/bs';

const SKILLS_DATA = [
  // Languages & CS
  { name: 'C++', category: 'languages', level: 'Advanced', icon: SiCplusplus, color: '#00599c' },
  { name: 'JavaScript (ES6+)', category: 'languages', level: 'Advanced', icon: FaJsSquare, color: '#f7df1e' },
  { name: 'TypeScript', category: 'languages', level: 'Proficient', icon: SiTypescript, color: '#3178c6' },
  { name: 'Python', category: 'languages', level: 'Proficient', icon: FaPython, color: '#3776ab' },
  { name: 'SQL', category: 'languages', level: 'Advanced', icon: SiPostgresql, color: '#336791' },
  { name: 'DSA & Algorithms', category: 'languages', level: '100+ Solved', icon: TbBrandLeetcode, color: '#ffa116' },
  { name: 'OOP & System CS', category: 'languages', level: 'Strong', icon: BsCpuFill, color: '#818cf8' },

  // Frontend
  { name: 'React.js', category: 'frontend', level: 'Advanced', icon: FaReact, color: '#61dafb' },
  { name: 'Vite', category: 'frontend', level: 'Proficient', icon: SiVite, color: '#646cff' },
  { name: 'Tailwind CSS', category: 'frontend', level: 'Advanced', icon: SiTailwindcss, color: '#06b6d4' },
  { name: 'HTML5 & CSS3', category: 'frontend', level: 'Expert', icon: FaHtml5, color: '#e34f26' },
  { name: 'Bootstrap', category: 'frontend', level: 'Proficient', icon: FaBootstrap, color: '#7952b3' },
  { name: 'Responsive UI', category: 'frontend', level: 'Expert', icon: FaCss3Alt, color: '#38bdf8' },

  // Backend & APIs
  { name: 'Node.js', category: 'backend', level: 'Advanced', icon: FaNodeJs, color: '#339933' },
  { name: 'Express.js', category: 'backend', level: 'Advanced', icon: SiExpress, color: '#f1f5f9' },
  { name: 'RESTful API Design', category: 'backend', level: 'Advanced', icon: SiPostman, color: '#ff6c37' },
  { name: 'Clerk & JWT Auth', category: 'backend', level: 'Proficient', icon: FaNodeJs, color: '#6366f1' },
  { name: 'Row Locks & Concurrency', category: 'backend', level: 'Skilled', icon: SiPostgresql, color: '#38bdf8' },

  // Databases & Caching
  { name: 'PostgreSQL (Neon)', category: 'databases', level: 'Advanced', icon: SiPostgresql, color: '#336791' },
  { name: 'MongoDB', category: 'databases', level: 'Advanced', icon: SiMongodb, color: '#47a248' },
  { name: 'Redis Caching', category: 'databases', level: 'Proficient', icon: SiRedis, color: '#dc382d' },
  { name: 'MySQL', category: 'databases', level: 'Proficient', icon: SiMysql, color: '#4479a1' },

  // AI & Testing & DevOps
  { name: 'Google Gemini API', category: 'ai-tools', level: 'Advanced', icon: SiGooglecloud, color: '#4285f4' },
  { name: 'OpenAI & Prompt Eng.', category: 'ai-tools', level: 'Proficient', icon: SiOpenai, color: '#10a37f' },
  { name: 'Jest & SuperTest', category: 'ai-tools', level: 'Proficient', icon: SiJest, color: '#c21325' },
  { name: 'Postman & QA Testing', category: 'ai-tools', level: 'Advanced', icon: SiPostman, color: '#ff6c37' },
  { name: 'Docker & Compose', category: 'ai-tools', level: 'Proficient', icon: FaDocker, color: '#2496ed' },
  { name: 'Git & GitHub', category: 'ai-tools', level: 'Advanced', icon: FaGitAlt, color: '#f05032' },
  { name: 'Linux / Bash', category: 'ai-tools', level: 'Proficient', icon: SiLinux, color: '#fcc624' }
];

const CATEGORIES = [
  { id: 'all', label: 'All Skills' },
  { id: 'languages', label: 'Languages & CS' },
  { id: 'frontend', label: 'Frontend' },
  { id: 'backend', label: 'Backend & APIs' },
  { id: 'databases', label: 'Databases & Cache' },
  { id: 'ai-tools', label: 'AI, QA & DevOps' }
];

function Skills() {
  const [activeTab, setActiveTab] = useState('all');

  const filteredSkills =
    activeTab === 'all'
      ? SKILLS_DATA
      : SKILLS_DATA.filter((skill) => skill.category === activeTab);

  return (
    <section id="skills">
      <div className="section_header">
        <span className="section_tag">04 // TECH STACK</span>
        <h2 className="section_title">
          Technical <span>Skills</span>
        </h2>
        <p className="section_subtitle">
          Comprehensive arsenal spanning full-stack frameworks, distributed databases, generative AI, and quality engineering.
        </p>
      </div>

      <div className="container skills_container">
        {/* Category Tabs Filter */}
        <div className="skills_tabs_wrapper">
          {CATEGORIES.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveTab(cat.id)}
              className={`skills_tab_btn ${activeTab === cat.id ? 'active' : ''}`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Skills Cards Grid */}
        <div className="skills_grid">
          {filteredSkills.map((skill, index) => {
            const Icon = skill.icon;
            return (
              <div key={index} className="skill_card glass-card">
                <div
                  className="skill_icon_wrap"
                  style={{ backgroundColor: `${skill.color}15`, color: skill.color }}
                >
                  <Icon className="skill_icon" />
                </div>
                <div className="skill_info">
                  <h4 className="skill_name">{skill.name}</h4>
                  <span className="skill_level_badge">{skill.level}</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Skills;
