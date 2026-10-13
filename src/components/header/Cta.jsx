import React from 'react';
import CV from '../../assets/technical/Resume.pdf';
import { FiDownload, FiArrowRight } from 'react-icons/fi';
import { HiOutlineSparkles } from 'react-icons/hi';

function Cta() {
  return (
    <div className="cta">
      <a href={CV} download="Harshit_Resume.pdf" className="btn btn-primary">
        <FiDownload /> Download Resume
      </a>
      <a href="#portfolio" className="btn">
        <HiOutlineSparkles /> View Projects
      </a>
      <a href="#contact" className="btn btn-outline">
        Let's Connect <FiArrowRight />
      </a>
    </div>
  );
}

export default Cta;
