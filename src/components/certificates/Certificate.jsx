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
import certificate6 from "../../assets/technical/certificate6.jpg";
import certificate7 from "../../assets/technical/certificate7.jpg";
import certificate8 from "../../assets/technical/certificate8.jpg";
import certificate9 from "../../assets/technical/certificate9.jpg";
import certificate10 from "../../assets/technical/certificate10.jpg";
import certificate11 from "../../assets/technical/certificate11.jpg";

const data = [
  {
    certificate: certificate1,
    name: "",
  },
  {
    certificate: certificate2,
    name: "",
  },
  {
    certificate: certificate3,
    name: "",
  },
  {
    certificate: certificate4,
    name: "",
  },
  {
    certificate: certificate5,
    name: "",
  },
  {
    certificate: certificate6,
    name: "",
  },
  {
    certificate: certificate7,
    name: "",
  },
  {
    certificate: certificate8,
    name: "",
  },
  {
    certificate: certificate9,
    name: "",
  },
  {
    certificate: certificate10,
    name: "",
  },
  {
    certificate: certificate11,
    name: "",
  },
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

//               <div
//                 data-iframe-width="150"
//                 data-iframe-height="270"
//                 data-share-badge-id="b55f1909-9870-42bf-80b8-c886483cdb6b"
//                 data-share-badge-host="https://www.credly.com">
//               </div>
//               <script
//                 type="text/javascript"
//                 async
//                 src="//cdn.credly.com/assets/utilities/embed.js"
//               </script>
//               <div
//                 data-iframe-width="150"
//                 data-iframe-height="270"
//                 data-share-badge-id="4428f048-2687-4b07-82bc-f58d460f5412"
//                 data-share-badge-host="https://www.credly.com">
//               </div>
//               <script
//                 type="text/javascript"
//                 async
//                 src="//cdn.credly.com/assets/utilities/embed.js">
//               </script>

export default Certificate;
