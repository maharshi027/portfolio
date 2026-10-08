import React, { useState } from 'react';
import './certificate.css';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';

import certificate1 from '../../assets/technical/certificate1.jpg';
import certificate2 from '../../assets/technical/certificate2.jpg';
import certificate3 from '../../assets/technical/certificate3.jpg';
import certificate4 from '../../assets/technical/certificate4.jpg';
import certificate5 from '../../assets/technical/certificate5.jpg';
import certificate6 from '../../assets/technical/certificate6.jpg';
import certificate7 from '../../assets/technical/certificate7.jpg';
import certificate8 from '../../assets/technical/certificate8.jpg';
import certificate9 from '../../assets/technical/certificate9.jpg';
import networkingBasics from '../../assets/technical/NetworkingBasics.jpg';
import internPeCert from '../../assets/technical/HARSHIT.png';

// Icons
import { FaAward, FaTrophy, FaTimes, FaExternalLinkAlt } from 'react-icons/fa';
import { SiAmazonwebservices, SiCisco, SiSamsung, SiMongodb } from 'react-icons/si';
import { TbBrandLeetcode } from 'react-icons/tb';
import { HiSparkles } from 'react-icons/hi2';

const ACHIEVEMENTS = [
  {
    icon: TbBrandLeetcode,
    title: '100+ DSA Solved',
    platform: 'LeetCode & GeeksforGeeks',
    desc: 'Demonstrated strong analytical reasoning, space/time complexity optimization, and algorithmic proficiency.'
  },
  {
    icon: SiSamsung,
    title: 'Samsung Solve for Tomorrow',
    platform: 'National Innovator',
    desc: 'Shortlisted in Round 1 with an end-to-end encrypted, sandbox-isolated data-sync architecture for enterprise security.'
  },
  {
    icon: FaTrophy,
    title: 'Nation Building Case Study',
    platform: 'Competition 2026',
    desc: 'Solved complex real-world problem statements on Preventive Healthcare through multiple rigorous competitive rounds.'
  }
];

const CERTIFICATES_DATA = [
  {
    id: 1,
    name: 'AWS Solutions Architect - Associate',
    issuer: 'Amazon Web Services (AWS)',
    category: 'Cloud Architecture',
    image: certificate1
  },
  {
    id: 2,
    name: 'Networking Basics',
    issuer: 'Cisco Networking Academy',
    category: 'Networking & Protocols',
    image: networkingBasics
  },
  {
    id: 3,
    name: 'AI Foundation & Prompt Systems',
    issuer: 'Infosys Springboard',
    category: 'Artificial Intelligence',
    image: certificate9
  },
  {
    id: 4,
    name: 'Solve for Tomorrow Shortlist',
    issuer: 'Samsung India',
    category: 'Innovation & Architecture',
    image: certificate6
  },
  {
    id: 5,
    name: 'Web Development Internship',
    issuer: 'InternPe (AICTE / MSME)',
    category: 'Industry Experience',
    image: internPeCert
  },
  {
    id: 6,
    name: 'Connecting to MongoDB in Node.js',
    issuer: 'MongoDB University',
    category: 'Database Integration',
    image: certificate7
  },
  {
    id: 7,
    name: 'Database Fundamentals',
    issuer: 'Database Authority',
    category: 'Relational DBMS',
    image: certificate5
  },
  {
    id: 8,
    name: 'Cyber Security Essentials',
    issuer: 'Security Institute',
    category: 'Information Security',
    image: certificate4
  },
  {
    id: 9,
    name: 'Document Model & Schema Design',
    issuer: 'Database Concepts',
    category: 'NoSQL Databases',
    image: certificate3
  },
  {
    id: 10,
    name: 'AI Customer Sentiment Analysis',
    issuer: 'AI Analytics Institute',
    category: 'NLP & Insights',
    image: certificate2
  },
  {
    id: 11,
    name: 'Power BI Data Analyst',
    issuer: 'Business Analytics',
    category: 'Data Visualization',
    image: certificate8
  }
];

function Certificate() {
  const [selectedCert, setSelectedCert] = useState(null);

  return (
    <section id="certificates">
      <div className="section_header">
        <span className="section_tag">06 // CREDENTIALS & MERIT</span>
        <h2 className="section_title">
          Certificates & <span>Achievements</span>
        </h2>
        <p className="section_subtitle">
          Verified industry credentials, competitive milestones, and national innovation recognitions.
        </p>
      </div>

      <div className="container certificates_container">
        {/* Achievements Strip */}
        <div className="achievements_grid">
          {ACHIEVEMENTS.map((ach, index) => {
            const Icon = ach.icon;
            return (
              <div key={index} className="achievement_card glass-card">
                <div className="ach_icon_wrap">
                  <Icon className="ach_icon" />
                </div>
                <div className="ach_content">
                  <span className="ach_platform">{ach.platform}</span>
                  <h4 className="ach_title">{ach.title}</h4>
                  <p className="ach_desc">{ach.desc}</p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Certificate Swiper Carousel */}
        <div className="certificates_carousel_wrapper glass-card">
          <div className="carousel_top_bar">
            <div className="carousel_title_group">
              <FaAward className="award_badge_icon" />
              <h4>Verified Industry Certifications</h4>
            </div>
            <span className="swipe_hint">Swipe / Slide to explore • Click to inspect</span>
          </div>

          <Swiper
            className="certificate_swiper"
            modules={[Pagination, Autoplay]}
            spaceBetween={30}
            slidesPerView={1}
            breakpoints={{
              640: { slidesPerView: 2 },
              1024: { slidesPerView: 3 }
            }}
            pagination={{ clickable: true }}
            autoplay={{ delay: 3500, disableOnInteraction: false }}
          >
            {CERTIFICATES_DATA.map((item) => (
              <SwiperSlide key={item.id} className="cert_slide">
                <div
                  className="cert_slide_card"
                  onClick={() => setSelectedCert(item)}
                  title="Click to view certificate"
                >
                  <div className="cert_img_frame">
                    <img src={item.image} alt={item.name} className="cert_img" />
                    <div className="cert_hover_overlay">
                      <FaExternalLinkAlt /> <span>View Full</span>
                    </div>
                  </div>
                  <div className="cert_meta">
                    <span className="cert_cat_badge">{item.category}</span>
                    <h5 className="cert_name">{item.name}</h5>
                    <p className="cert_issuer">{item.issuer}</p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>

      {/* Modal for viewing certificate */}
      {selectedCert && (
        <div className="cert_modal_backdrop" onClick={() => setSelectedCert(null)}>
          <div className="cert_modal_box glass-card" onClick={(e) => e.stopPropagation()}>
            <button
              className="cert_modal_close_btn"
              onClick={() => setSelectedCert(null)}
              aria-label="Close modal"
            >
              <FaTimes />
            </button>
            <div className="cert_modal_content">
              <img
                src={selectedCert.image}
                alt={selectedCert.name}
                className="cert_modal_img"
              />
              <div className="cert_modal_info">
                <h3>{selectedCert.name}</h3>
                <p>Issued by <strong>{selectedCert.issuer}</strong> • {selectedCert.category}</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

export default Certificate;
