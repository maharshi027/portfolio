import React from 'react';
import './education.css';
import { FaGraduationCap, FaUniversity, FaSchool, FaAward, FaCalendarAlt } from 'react-icons/fa';
import { HiCheckBadge } from 'react-icons/hi2';

const EDUCATION_DATA = [
  {
    level: 'Bachelor of Technology',
    degree: 'B.Tech in CSE (Artificial Intelligence)',
    institution: 'KIET Group of Institutions (AKTU)',
    boardUniversity: 'Dr. A.P.J. Abdul Kalam Technical University (AKTU)',
    period: 'Sep 2023 – Jun 2027 (Expected)',
    status: 'Final Year / Current',
    scoreType: 'CGPA',
    score: '7.96 / 10',
    percentage: '80%',
    badgeColor: '#10b981',
    icon: FaUniversity,
    description:
      'Pursuing specialized engineering in Artificial Intelligence and Computer Science with hands-on labs in Distributed Systems, Full-Stack Development, and Advanced Algorithms.',
    highlights: [
      'Data Structures & Algorithms (100+ Solved)',
      'Database Management Systems & SQL',
      'Operating Systems & Computer Networks',
      'Generative AI & LLM Prompting'
    ]
  },
  {
    level: 'Class XII (Senior Secondary)',
    degree: 'Intermediate (12th Grade) - Science / PCM',
    institution: 'SSN Inter College, Mahoba',
    boardUniversity: 'Uttar Pradesh State Board (U.P. Board)',
    period: 'Completed: Jul 2021',
    status: 'Graduated',
    scoreType: 'Percentage',
    score: '85%',
    percentage: '85%',
    badgeColor: '#38bdf8',
    icon: FaSchool,
    description:
      'Rigorous foundational study in Physics, Chemistry, and Advanced Mathematics with distinction.',
    highlights: [
      'Physics, Chemistry & Mathematics',
      'First Division with 85%',
      'Strong Analytical & Mathematical Aptitude'
    ]
  },
  {
    level: 'Class X (Secondary School)',
    degree: 'High School (10th Grade)',
    institution: 'SSN Inter College, Mahoba',
    boardUniversity: 'Uttar Pradesh State Board (U.P. Board)',
    period: 'Completed: Apr 2019',
    status: 'Graduated',
    scoreType: 'Percentage',
    score: '90%',
    percentage: '90%',
    badgeColor: '#a855f7',
    icon: FaAward,
    description:
      'Graduated with stellar academic performance achieving 90% across core science, mathematics, and humanities subjects.',
    highlights: [
      'Top Tier Academic Merit (90%)',
      'Distinction in Science & Mathematics',
      'Exemplary Academic Record'
    ]
  }
];

function Education() {
  return (
    <section id="education">
      <div className="section_header">
        <span className="section_tag">02 // ACADEMIC BACKGROUND</span>
        <h2 className="section_title">
          Education & <span>Qualifications</span>
        </h2>
        <p className="section_subtitle">
          My complete academic trajectory from school excellence to B.Tech in Artificial Intelligence.
        </p>
      </div>

      <div className="container education_container">
        <div className="education_timeline">
          {EDUCATION_DATA.map((item, index) => {
            const Icon = item.icon;
            return (
              <div key={index} className="education_card glass-card">
                {/* Header row with degree & period */}
                <div className="education_card_header">
                  <div className="education_icon_badge">
                    <Icon className="edu_icon" />
                  </div>
                  <div className="education_title_block">
                    <span className="edu_level_pill">{item.level}</span>
                    <h3 className="edu_degree">{item.degree}</h3>
                    <h4 className="edu_institution">{item.institution}</h4>
                    <p className="edu_board">{item.boardUniversity}</p>
                  </div>

                  <div className="education_score_badge">
                    <span className="score_title">{item.scoreType}</span>
                    <span className="score_value">{item.score}</span>
                    <span className="score_sub">({item.percentage})</span>
                  </div>
                </div>

                <div className="edu_period_bar">
                  <span className="edu_period">
                    <FaCalendarAlt /> {item.period}
                  </span>
                  <span className="edu_status_pill">{item.status}</span>
                </div>

                <p className="edu_desc">{item.description}</p>

                {/* Coursework & highlight chips */}
                <div className="edu_highlights_chips">
                  {item.highlights.map((highlight, hIndex) => (
                    <div key={hIndex} className="edu_chip">
                      <HiCheckBadge className="chip_check" />
                      <span>{highlight}</span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Education;
