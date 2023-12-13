import React, { useEffect } from "react";
import styled from "styled-components";
import bannerImg from "../assets/otherPagesImages/antelizSuitesBannerImg.jpg";
import { Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import data from "../components/AntelizRoomsData";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const AntelizHotel = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <Container>
      <div className="banner">
        <img className="bannerImg" src={bannerImg} alt="" />
        <motion.h1
          animate={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -700 }}
          transition={{
            duration: 0.9,
            delay: 0.3,
            bounce: 0.3,
            type: "spring",
          }}
        >
          Anteliz Suites
        </motion.h1>
        <p>Comfort and luxury in a unique Cycladic resort</p>
      </div>
      <div className="availability">
        <div className="item">
          <h3>Check In</h3>
          <input type="date" />
        </div>
        <div className="item">
          <h3>Check Out</h3>
          <input type="date" />
        </div>
        <div className="item">
          <h3>Guests</h3>
          <select>
            <option>1 Guest</option>
            <option>2 Guests</option>
            <option>3 Guests</option>
            <option>5+ Guests</option>
            <option>10+ Guests</option>
            <option>Custom Options</option>
          </select>
        </div>
        <div className="item">
          <button>Check Availability</button>
        </div>
      </div>
      <div className="wcu">
        <div className="left">
          <h3>- Comfort and luxury in a unique Cycladic resort</h3>
          <h3>
            - Exquisite gastronomy and special cocktails with spectacular views
          </h3>
          <h3>- Ideal location near the city center of Fira</h3>
        </div>
        <img
          src="https://santorinidave.com/wp-content/uploads/2021/01/santorini-best-hotel-anteliz-suites.jpeg"
          alt=""
        />
      </div>
      <Swiper
        speed={600}
        parallax={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination]}
        className="swiper"
      >
        {data.map((item) => (
          <SwiperSlide className="slide">
            <img src={item.img} alt="" />
            <div className="details">
              <h2 className="ras">Rooms & Suites</h2>
              <h1>{item.roomType}</h1>
              <p>{item.description}</p>
              <span>
                From <h2>{item.price}€</h2>
              </span>
              <div className="btns">
                <Link to={`${item.link}`} className="link-styles">
                  <button>DISCOVER</button>
                </Link>
                <button>BOOK NOW</button>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </Container>
  );
};
const Container = styled.div`
  .banner {
    height: 80vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    h1 {
      padding-left: 8%;
      color: white;
      font-size: 3em;
      font-weight: 500;
    }
    p {
      color: #cccccc;
      padding-left: 8%;
    }
  }
  .bannerImg {
    width: 100%;
    height: 94vh;
    object-fit: cover;
    position: absolute;
    z-index: -1;
    filter: brightness(0.7);
  }
  .availability {
    margin: 7em auto;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 80%;
    height: 100px;
    max-width: 800px;
    box-shadow: 0 0 10px 2px #9b9b9b;
    border-radius: 20px;
    .item {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      width: 25%;
      border-right: 1px solid #cfcfcf;
      padding: 10px;
      height: 100%;
      h3 {
        font-weight: 400;
      }
      input {
        font-size: 15px;
        border: 1px solid #cfcfcf;
        font-family: "Poppins", sans-serif;
        border-radius: 10px;
        ::-webkit-datetime-edit {
          padding: 7px;
        }
        ::-webkit-datetime-edit-text {
          padding: 0 4px;
        }
      }
      select {
        font-size: 15px;
        border: 1px solid #cfcfcf;
        font-family: "Poppins", sans-serif;
        border-radius: 10px;
        padding: 7px;
        outline: none;
      }
      button {
        margin-top: 10px;
        padding: 10px 14px;
        font-family: "Poppins", sans-serif;
        font-size: 15px;
        border: none;
        background: #333333;
        color: white;
        border-radius: 7px;
        :hover {
          background: var(--primaryColorDark);
          transition: 0.3s;
          cursor: pointer;
        }
      }
    }
  }
  .wcu {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 2em;
    padding: 7em 7%;
    img {
      width: 40%;
      box-shadow: 25px 25px 51px #c2c2c2, -25px -25px 51px #ffffff7d;
      border-radius: 30px;
    }
    .left {
      display: flex;
      flex-direction: column;
      gap: 2em;
      h3 {
        font-weight: 400;
      }
    }
  }
  .swiper {
    margin: 8em 0;
    height: 74vh;
    .slide {
      height: 70vh;
      display: flex;
      align-items: center;
      padding: 0 4%;
      gap: 2em;
      img {
        width: 55%;
        height: auto;
        max-height: 400px;
        object-fit: cover;
      }
      .details {
        .ras {
          font-size: 18px;
          font-weight: 300;
          color: gray;
        }
        h1 {
          font-weight: 500;
          font-size: 2.8em;
          color: var(--primaryColor);
        }
        p {
          margin-left: 7%;
          color: gray;
          font-weight: 300;
        }
        span {
          margin-left: 7%;
          display: flex;
          align-items: center;
          gap: 7px;
          h2 {
            font-weight: 500;
            font-size: 2em;
          }
        }
        .btns {
          display: flex;
          gap: 1em;
          margin-left: 7%;
          button {
            margin-top: 10px;
            padding: 14px 18px;
            font-family: "Poppins", sans-serif;
            font-size: 17px;
            border: none;
            background: #333333;
            color: white;
            :hover {
              background: var(--primaryColorDark);
              transition: 0.3s;
              cursor: pointer;
            }
            :nth-child(1) {
              color: black;
              background: none;
              padding: 10px 18px;
              border-bottom: 2px solid black;
              :hover {
                background: #e6e6e6;
              }
            }
          }
        }
      }
    }
  }
  @media (max-width: 940px) {
    .swiper {
      .slide {
        .details {
          h1 {
            font-size: 1.8em;
          }
        }
      }
    }
  }
  @media (max-width: 840px) {
    .availability {
      width: 98%;
    }
  }
  @media (max-width: 770px) {
    .swiper {
      height: auto;
      .slide {
        justify-content: center;
        align-items: center;
        height: auto;
        flex-direction: column;
        img {
          width: 90%;
        }
        .details {
          padding: 20px;
          text-align: center;
          display: flex;
          flex-direction: column;
          align-items: center;
        }
      }
    }
  }
  @media (max-width: 680px) {
    .availability {
      flex-direction: column;
      height: auto;
      margin: 7em 3%;
      width: 94%;
      .item {
        width: 80%;
        border-right: 0;
        border-top: 1px solid #cccccc;
      }
    }
  }
  @media (max-width: 780px) {
    .wcu {
      flex-direction: column;
      align-items: center;
      img {
        width: 80%;
      }
    }
  }
`;

export default AntelizHotel;
