import "./certificate.css";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import certificate1 from "../../assets/technical/certificate1.jpg";
import certificate2 from "../../assets/technical/certificate2.jpg";
import certificate3 from "../../assets/technical/certificate3.jpg";
import certificate4 from "../../assets/technical/certificate4.jpg";
import certificate5 from "../../assets/technical/certificate5.jpg";
import certificate7 from "../../assets/technical/certificate7.jpg";
import certificate8 from "../../assets/technical/certificate8.jpg";
import certificate9 from "../../assets/technical/certificate9.jpg";
import certificate10 from "../../assets/technical/certificate10.jpg";
import certificate11 from "../../assets/technical/certificate11.jpg";
import certificate12 from "../../assets/technical/certificate12.jpg";
import certificate13 from "../../assets/technical/certificate13.jpg";

const data = [
  {
    certificate: certificate1,
    name: "AI PractitionerAWS Certified Solutions Architect - Associate",
  },
  {
    certificate: certificate2,
    name: "AI Analyze: Customer Reviews",
  },
   {
    certificate: certificate3,
    name: "Document Model",
  },
   {
    certificate: certificate4,
    name: "Cyber Security",
  },
  {
    certificate: certificate5,
    name: "Database Fundamentals",
  },
  {
    certificate: certificate6,
    name: "Solve For Tomorrow (Samsung)",
  },
  {
    certificate: certificate7,
    name: "Connecting to MongoDB in Node.js",
  },
 
  {
    certificate: certificate8,
    name: "Power BI Data Analyst",
  },
 
  {
    certificate: certificate9,
    name: "Introduction to Modern AI",
  }
];

function Certificate() {
  return (
    <section id="certificate">
      <h5>Earned Badges & Certificates</h5>
      <h2>certificates</h2>

      <Swiper
        className="container certificate_container"
        modules={[Pagination]}
        spaceBetween={40}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        {data.map(({ certificate, name }, index) => {
          return (
            <SwiperSlide key={index} className="certificate">
              <div className="client_certificate">
                <img src={certificate} alt={name} />
              </div>
              <h5 className="client_name">{name}</h5>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
}

export default Certificate;
