import React from 'react';
import './service.css';
import { FaLaptopCode, FaBrain, FaServer, FaCheckCircle, FaVial } from 'react-icons/fa';

const SERVICES_DATA = [
  {
    icon: FaLaptopCode,
    title: 'Full-Stack Web Engineering',
    tagline: 'Modern, reactive & accessible applications',
    bullets: [
      'Engineered interactive React & Vite interfaces with fluid micro-interactions.',
      'Component-driven architecture using TypeScript, Tailwind CSS & clean design systems.',
      'Seamless state management, responsive layouts, and cross-browser performance.'
    ]
  },
  {
    icon: FaBrain,
    title: 'Generative AI & LLM Integration',
    tagline: 'Multi-modal intelligent workflows',
    bullets: [
      'Connecting LLM models (Google Gemini API, OpenAI) with strict schema validation.',
      'Few-shot prompt engineering, context parsing, and dynamic parameter scaling.',
      'AI-powered document scoring, CV parsing, and generative content pipelines.'
    ]
  },
  {
    icon: FaServer,
    title: 'Backend & High-Concurrency APIs',
    tagline: 'Resilient transactional services',
    bullets: [
      'RESTful API architecture using Node.js, Express.js, and Clerk/JWT auth.',
      'Relational schema design, query optimization, and row-level locking in PostgreSQL.',
      'In-memory Redis caching, queueing, and containerization with Docker Compose.'
    ]
  },
  {
    icon: FaVial,
    title: 'Testing & Quality Engineering',
    tagline: 'Zero-regression test suites',
    bullets: [
      'Comprehensive integration testing with Jest and SuperTest against real DBs.',
      'End-to-end API validation, Postman mock collections, and edge-case handling.',
      'Rigorous race-condition defenses, idempotent replays, and rollback guarantees.'
    ]
  }
];

function Service() {
  return (
    <section id="services">
      <div className="section_header">
        <span className="section_tag">07 // EXPERTISE IN ACTION</span>
        <h2 className="section_title">
          Engineering <span>Services</span>
        </h2>
        <p className="section_subtitle">
          Specialized technical solutions tailored for production-grade software and high-impact web products.
        </p>
      </div>

      <div className="container services_container">
        <div className="services_grid">
          {SERVICES_DATA.map((srv, index) => {
            const Icon = srv.icon;
            return (
              <article key={index} className="service_card glass-card">
                <div className="service_icon_badge">
                  <Icon className="service_icon" />
                </div>
                <h3 className="service_title">{srv.title}</h3>
                <p className="service_tagline">{srv.tagline}</p>

                <ul className="service_list">
                  {srv.bullets.map((bullet, bIdx) => (
                    <li key={bIdx}>
                      <FaCheckCircle className="service_check_icon" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Service;
