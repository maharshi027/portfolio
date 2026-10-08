import React, { useState } from 'react';
import './portfolio.css';

// Project Images
import FLASHSALE_IMG from '../../assets/flashsale_preview.jpg';
import GENAXIS_IMG from '../../assets/project2.png';
import RECIPE_IMG from '../../assets/project3.png';
import INSTITUTE_IMG from '../../assets/student.jpg';

// Icons
import { FaGithub, FaExternalLinkAlt, FaLayerGroup } from 'react-icons/fa';
import { HiSparkles, HiCheckCircle } from 'react-icons/hi2';
import { BiGitBranch } from 'react-icons/bi';

const PROJECTS_DATA = [
  {
    id: 1,
    title: 'Flash-Sale Order System (Amazon-Style)',
    subtitle: 'High-Concurrency Atomic Inventory Engine',
    category: 'systems',
    categoryLabel: 'Distributed Systems',
    status: 'In Progress',
    badge: 'High Concurrency',
    period: 'Oct 2026 – Present',
    image: FLASHSALE_IMG,
    description:
      'Engineered a transactional order-cancellation and inventory engine that prevents race conditions and overselling during sudden traffic spikes.',
    architectureBullets: [
      'Row-level locks (SELECT FOR UPDATE) ensure concurrent cancel requests restock atomically exactly once.',
      '19 integration tests (Jest, SuperTest) against real PostgreSQL & Redis testing race conditions and rollback.',
      'Built a load simulator auditing inventory after N concurrent buyer bursts; containerized with Docker Compose.'
    ],
    techStack: ['Node.js', 'Express.js', 'PostgreSQL', 'Redis', 'Docker Compose', 'Jest', 'SuperTest'],
    github: 'https://github.com/maharshi027/flash-sale-order-system',
    demo: null
  },
  {
    id: 2,
    title: 'Gen-Axis: Multi-Modal Generative AI Platform',
    subtitle: 'End-to-End AI Workspace & Creative Suite',
    category: 'ai',
    categoryLabel: 'Gen AI & Full-Stack',
    status: 'Live & Shipped',
    badge: 'Featured AI',
    period: 'Jul 2026 – Sep 2026',
    image: GENAXIS_IMG,
    description:
      'Full-stack AI SaaS platform offering multi-tool generative workflows including resume scoring, background removal, and AI image generation with community sharing.',
    architectureBullets: [
      'Multi-modal API pipelines connecting React frontend to Google Gemini endpoints and PostgreSQL (Neon).',
      'Integrated Clerk authentication, Cloudinary media optimization, and token usage rate limiting.',
      'Public community showcase with reactive prompt cards and AI-generated outputs.'
    ],
    techStack: ['React.js', 'Vite', 'Node.js', 'Express.js', 'PostgreSQL (Neon)', 'Gemini API', 'Clerk', 'Cloudinary'],
    github: 'https://github.com/maharshi027/Gen-Axis',
    demo: 'https://gen-axiss.vercel.app/'
  },
  {
    id: 3,
    title: 'AI Culinary Intelligence & Recommendation Engine',
    subtitle: 'Smart Recipe Generator & Nutrition Planner',
    category: 'ai',
    categoryLabel: 'Gen AI & Full-Stack',
    status: 'Live & Shipped',
    badge: 'Gemini LLM',
    period: 'May 2026 – Jun 2026',
    image: RECIPE_IMG,
    description:
      'AI-powered recipe recommendation platform creating bespoke culinary instructions tailored to pantry ingredients, dietary restrictions, and dynamic serving scales.',
    architectureBullets: [
      'Enforced schema-validated JSON outputs from Google Gemini LLM to eliminate hallucinations and ensure accurate cook times.',
      'Refined few-shot prompt templates across pantry constraints, calorie goals, and dietary exclusions.',
      'Instant pantry ingredient tracking and interactive step-by-step cooking guide.'
    ],
    techStack: ['React.js', 'Google Gemini API', 'Tailwind CSS', 'Node.js', 'PostgreSQL'],
    github: 'https://github.com/maharshi027/AI-Recipe-Generator',
    demo: 'https://ai-recipe-kitchen.vercel.app/'
  },
  {
    id: 4,
    title: 'Enterprise Institute Management & Analytics System',
    subtitle: 'Academic Workflow & Financial Tracking Platform',
    category: 'web',
    categoryLabel: 'Enterprise Full-Stack',
    status: 'Live & Shipped',
    badge: 'MERN Stack',
    period: 'Nov 2025 – Jan 2026',
    image: INSTITUTE_IMG,
    description:
      'Full-stack ERP solution streamlining student enrollment, attendance monitoring, curriculum progress, and fee transaction tracking.',
    architectureBullets: [
      'Real-time transaction tracking and receipt generation with strict cross-collection data consistency.',
      'Role-based access control (RBAC) separating administrative powers, instructors, and student records.',
      'Optimized MongoDB indexing resulting in sub-100ms analytics querying.'
    ],
    techStack: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'REST APIs', 'Tailwind CSS'],
    github: 'https://github.com/maharshi027/institute-management',
    demo: 'https://dinesh-classes.vercel.app/'
  }
];

const CATEGORIES = [
  { id: 'all', label: 'All Projects' },
  { id: 'ai', label: 'Generative AI' },
  { id: 'systems', label: 'Distributed Systems' },
  { id: 'web', label: 'Enterprise Web' }
];

function Portfolio() {
  const [filter, setFilter] = useState('all');

  const filteredProjects =
    filter === 'all'
      ? PROJECTS_DATA
      : PROJECTS_DATA.filter((p) => p.category === filter);

  return (
    <section id="portfolio">
      <div className="section_header">
        <span className="section_tag">05 // WORK SHOWCASE</span>
        <h2 className="section_title">
          Featured <span>Projects</span>
        </h2>
        <p className="section_subtitle">
          Real-world products engineered with precision, from high-concurrency order systems to multi-modal generative AI.
        </p>
      </div>

      <div className="container portfolio_container">
        {/* Filter Tabs */}
        <div className="project_filter_tabs">
          {CATEGORIES.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setFilter(cat.id)}
              className={`project_tab_btn ${filter === cat.id ? 'active' : ''}`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Project Cards Grid */}
        <div className="projects_grid">
          {filteredProjects.map((project) => (
            <article key={project.id} className="project_card glass-card">
              {/* Image Preview Container */}
              <div className="project_image_wrapper">
                <img src={project.image} alt={project.title} className="project_img" />
                <div className="project_image_overlay">
                  <span className="project_badge_pill">{project.badge}</span>
                  <span className="project_period_pill">{project.period}</span>
                </div>
              </div>

              {/* Card Body */}
              <div className="project_body">
                <div className="project_meta_row">
                  <span className="project_cat_tag">{project.categoryLabel}</span>
                  <span className="project_status_text">{project.status}</span>
                </div>

                <h3 className="project_title">{project.title}</h3>
                <h4 className="project_subtitle">{project.subtitle}</h4>
                <p className="project_desc">{project.description}</p>

                {/* Architecture Highlights */}
                <div className="project_highlights_box">
                  {project.architectureBullets.map((bullet, idx) => (
                    <div key={idx} className="project_bullet_item">
                      <HiCheckCircle className="proj_check_icon" />
                      <span>{bullet}</span>
                    </div>
                  ))}
                </div>

                {/* Tech Stack Pills */}
                <div className="project_tech_pills">
                  {project.techStack.map((tech, tIdx) => (
                    <span key={tIdx} className="tech_pill">
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Action CTA Buttons */}
                <div className="project_actions_row">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="btn btn-sm"
                  >
                    <FaGithub /> GitHub
                  </a>
                  {project.demo ? (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noreferrer"
                      className="btn btn-sm btn-primary"
                    >
                      <FaExternalLinkAlt /> Live Demo
                    </a>
                  ) : (
                    <span className="btn btn-sm btn-disabled" title="Backend Core Architecture">
                      <BiGitBranch /> Engine Core
                    </span>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Portfolio;
