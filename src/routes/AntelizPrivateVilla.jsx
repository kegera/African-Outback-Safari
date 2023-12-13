import React, { useEffect } from "react";
import styled from "styled-components";
import { Pagination, Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { motion } from "framer-motion";

const AntelizPrivateVilla = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <Container>
      <Swiper
        speed={600}
        parallax={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="swiper"
      >
        <SwiperSlide className="slide">
          <img
            src="https://assets.hotelwize.com/site-media/261/trg_5630.jpg?format=jpg&mode=crop&crop=0,623,5940,3964&width=1920&height=1080"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide className="slide">
          <img
            src="https://assets.hotelwize.com/site-media/261/trg_1577.jpg?format=jpg&mode=crop&crop=0,583,6217,4080&width=1920&height=1080"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide className="slide">
          <img
            src="https://assets.hotelwize.com/site-media/261/trg_1808.jpg?format=jpg&mode=crop&crop=0,658,6828,4499&width=1920&height=1080"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide className="slide">
          <img
            src="https://assets.hotelwize.com/site-media/261/trg_1780.jpg?format=jpg&mode=crop&crop=0,771,7360,4911&width=1920&height=1080"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide className="slide">
          <img
            src="https://assets.hotelwize.com/site-media/261/trg_1838.jpg?format=jpg&width=1920&height=1080&mode=crop"
            alt=""
          />
        </SwiperSlide>
        <motion.div
          animate={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -700 }}
          transition={{
            duration: 0.9,
            delay: 0.3,
            bounce: 0.3,
            type: "spring",
          }}
          className="details"
        >
          <h2>Accommodation</h2>
          <h1>Anteliz Private Villa</h1>
        </motion.div>
      </Swiper>
      <div className="services">
        <div className="left">
          <h2>Amenities & Services</h2>
          <ul>
            <li>- Mini-bar</li>
            <li>- WI-FI</li>
            <li>- Air-conditioning</li>
            <li>- Bathroom</li>
            <li>- Bathroom Amenities</li>
            <li>- Coffee/Tea Maker</li>
            <li>- Heating</li>
            <li>- Refrigerator</li>
            <li>- Hair Dryer</li>
            <li>- TV</li>
          </ul>
        </div>
        <img
          src="https://assets.hotelwize.com/site-media/261/trg_5208.jpg?format=jpg&mode=crop&crop=13,1268,5477,3260&width=1920&height=700"
          alt=""
        />
      </div>
      <Swiper
        speed={600}
        parallax={true}
        navigation={true}
        modules={[Navigation]}
        className="swiper2"
      >
        <SwiperSlide className="slide">
          <img
            src="https://assets.hotelwize.com/site-media/261/trg_5208.jpg?format=jpg&mode=crop&crop=13,1268,5477,3260&width=1920&height=700"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide className="slide">
          <img
            src="https://assets.hotelwize.com/site-media/261/trg_1756.jpg?format=jpg&mode=crop&crop=0,1725,6081,3942&width=1920&height=700"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide className="slide">
          <img
            src="https://assets.hotelwize.com/site-media/261/trg_8827.jpg?format=jpg&mode=crop&crop=0,958,5351,2908&width=1920&height=700"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide className="slide">
          <img
            src="https://assets.hotelwize.com/site-media/261/trg_1787.jpg?format=jpg&mode=crop&crop=0,2024,7246,4665&width=1920&height=700"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide className="slide">
          <img
            src="https://assets.hotelwize.com/site-media/261/trg_1569.jpg?format=jpg&mode=crop&crop=0,1603,6585,4004&width=1920&height=700"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide className="slide">
          <img
            src="https://assets.hotelwize.com/site-media/261/trg_1797.jpg?format=jpg&mode=crop&crop=0,803,6391,3133&width=1920&height=700"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide className="slide">
          <img
            src="https://assets.hotelwize.com/site-media/261/trg_1762.jpg?format=jpg&mode=crop&crop=0,2162,7143,4766&width=1920&height=700"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide className="slide">
          <img
            src="https://assets.hotelwize.com/site-media/261/trg_8836.jpg?format=jpg&mode=crop&crop=0,1780,5878,3923&width=1920&height=700"
            alt=""
          />
        </SwiperSlide>
        <div className="details">
          <h1>Gallery</h1>
        </div>
      </Swiper>
      <div className="text">
        <h1>Anteliz Private Villa</h1>
        <h2>3 Bedroom Villa | In the heart of the Fira city cetner</h2>
        <p>
          This enchanting beauty of Santorini is reflected by Villa Fortaleza,
          rising peacefully in the heart of the Fira city cetner. Minutes away
          from the main hotel location, the Anteliz Private Villa seems to have
          lived through the ages unhindered since 1767, boldly observing the
          Theran landscape as it changes through the seasons. <br /> <br /> The
          cycladic architecture composed in the pure tradition of Santorinian
          Captain Houses, with domes and cave structures punctuating the
          dazzling white and Aegean sun, combined with the impeccable views of
          the Caldera compose a harmonious and serene picture. <br />
          <br /> Once its door is pushed open, the vastness of this villa with 3
          bedrooms with en suite bathrooms, gives way to delightful luxury,
          blending periods and styles in a mix of modernism and tradition. A
          monastery table gathers the guests in the large living room, and
          authentic Aegean cuisine can be enhanced by the Solis Occasum's
          offerings and wines - all this coming with a terrace with pool and an
          uncluttered view of Theran archipelago and the church of Saint
          Stylianos. <br /> <br /> Rather than mere bedrooms, the villa's in
          house suites are genuine living spaces, inviting contemplation of the
          timeless character of the surrounding landscapes in a calm and
          intimate atmosphere.
        </p>
      </div>
    </Container>
  );
};
const Container = styled.div`
  .swiper {
    height: 98vh;
    .slide {
      height: auto;
      img {
        filter: brightness(0.8);
        width: 100%;
        object-fit: cover;
        height: 100%;
        border-radius: 0 0 2em 2em;
      }
    }
    .details {
      position: absolute;
      top: 70vh;
      z-index: 99;
      color: white;
      padding-left: 7%;
      h2 {
        font-weight: 300;
      }
      h1 {
        font-size: 3.4em;
        font-weight: 400;
      }
    }
  }
  .services {
    padding: 7em 4%;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 8%;
    .left {
      h2 {
        font-weight: 300;
      }
      ul {
        li {
          font-size: 2em;
          list-style-type: none;
        }
      }
    }
    img {
      box-shadow: 10px 10px 24px #b5b5b5, -17px -17px 24px #ffffff96;
      width: 30%;
      height: 40vh;
      object-fit: cover;
    }
  }
  .swiper2 {
    .slide {
      filter: brightness(0.4);
    }
  }
  .text {
    text-align: center;
    padding: 7em 10%;
    h1 {
      font-weight: 500;
    }
    h2 {
      font-weight: 300;
      margin-bottom: 1em;
    }
  }
  @media (max-width: 800px) {
    .swiper2 {
      height: 40vh;
      .details {
        top: 27vh;
      }
      .slide {
        img {
          border-radius: 0;
        }
      }
    }
  }
  @media (max-width: 580px) {
    .swiper {
      .details {
        padding-left: 2%;
        h1 {
          font-size: 3em;
        }
      }
    }
  }
  @media (max-width: 680px) {
    .services {
      flex-direction: column;
      img {
        width: 90%;
        height: auto;
      }
    }
  }
  @media (max-width: 480px) {
    .swiper {
      .details {
        padding-left: 2%;
        h1 {
          font-size: 2em;
        }
      }
    }
    .services {
      gap: 3em;
      .left {
        ul {
          li {
            font-size: 1.4em;
          }
        }
      }
    }
  }
`;

export default AntelizPrivateVilla;
