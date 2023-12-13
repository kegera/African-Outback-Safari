import React, { useEffect } from "react";
import styled from "styled-components";
import bannerImg from "../assets/destinationsImages/santoriniHeroImg.jpg";
import santoriniImg1 from "../assets/destinationsImages/santoriniPic1.jpg";
import santoriniImg2 from "../assets/destinationsImages/santoriniPic2.jpg";
import santoriniImg3 from "../assets/destinationsImages/santoriniPic3.webp";
import { Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import data from "../components/hotelsData";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const SantoriniPage = () => {
  const { santoriniHotels } = data;
  const { santoriniImages } = data;
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <Container>
      <div className="banner">
        <img className="bannerImg" src={bannerImg} alt="" />
        <motion.div
          animate={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 700 }}
          transition={{
            duration: 0.9,
            delay: 0.3,
            bounce: 0.3,
            type: "spring",
          }}
          className="details"
        >
          <h2>Explore the stunning views of Nairobi</h2>
          <p>An amazing place like Santorini is always worth visiting.</p>
          <button>See the Offers</button>
        </motion.div>
      </div>

      <div className="pics">
        <img src={santoriniImg1} alt="" />
        <img src={santoriniImg2} alt="" />
        <img src={santoriniImg3} alt="" />
      </div>

      <Swiper
        speed={600}
        parallax={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination]}
        className="hotelsSwiper"
      >
        {santoriniHotels.map((item) => (
          <SwiperSlide className="slide">
            <div className="imgs">
              <div className="column">
                <img src={item.colImg1} alt="" />
                <img src={item.colImg2} alt="" />
                <img src={item.colImg3} alt="" />
              </div>
              <div className="mainImg">
                <img src={item.mainImg} alt="" />
              </div>
            </div>
            <div className="details">
              <h2>{item.hotelName}</h2>
              <h3>
                Rating: <span>{item.rate}</span>
              </h3>
              <h3>
                Number of Rooms: <span>{item.rooms}</span>
              </h3>
              <p>{item.description}</p>
              <div className="buttons">
                <button>Book NOW</button>
                <Link to={`${item.link}`} className="btn-link-styles">
                  <button>More Details</button>
                </Link>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="images">
        {santoriniImages.map((item) => (
          <img src={item.img} alt="" />
        ))}
      </div>
    </Container>
  );
};
const Container = styled.div`
  .banner {
    .bannerImg {
      position: absolute;
      z-index: -1;
      width: 100%;
      height: 80vh;
      object-fit: cover;
      filter: brightness(0.6);
    }
    .details {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: flex-end;
      height: 48vh;
      padding: 3%;
      h2 {
        color: white;
        font-size: 2.4em;
        font-weight: 400;
        text-align: right;
      }
      p {
        color: #dadada;
        text-align: right;
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
  .pics {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    gap: 2em;
    margin-top: 8em;
    img {
      height: 150px;
      object-fit: cover;
    }
  }
  .hotelsSwiper {
    margin: 8em 0;
    height: 64vh;
    .slide {
      height: 70vh;
      display: flex;
      align-items: center;
      padding: 0 4%;
      gap: 2em;
      .imgs {
        width: 55%;
        display: flex;
        align-items: center;
        height: 100%;
        gap: 10px;
        .column {
          display: flex;
          flex-direction: column;
          justify-content: center;
          height: 100%;
          gap: 10px;
          img {
            object-fit: cover;
            height: 100px;
            width: 170px;
          }
        }
        .mainImg {
          img {
            height: 320px;
            max-width: 420px;
            object-fit: cover;
            margin-top: 7px;
          }
        }
      }
      .details {
        display: flex;
        flex-direction: column;
        h2 {
          font-weight: 500;
          color: var(--primaryColor);
        }
        h3 {
          font-size: 17px;
          font-weight: 300;
          span {
            font-weight: 500;
          }
        }
        p {
          margin: 10px 0;
          font-weight: 300;
        }
        .buttons {
          display: flex;
          gap: 6px;
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
            :nth-child(2) {
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
  .images {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 2em;
    padding: 0 7%;
    margin-bottom: 3em;
    img {
      vertical-align: middle;
      width: 320px;
      height: 200px;
      object-fit: cover;
    }
  }
  @media (min-width: 1400px) {
    .banner {
      .details {
        h2 {
          font-size: 3.2em;
        }
      }
    }
    .hotelsSwiper {
      .slide {
        .imgs {
          width: 70%;
          .column {
            img {
              height: 130px;
              width: 200px;
            }
          }
          .mainImg {
            img {
              height: 410px;
              max-width: 590px;
            }
          }
        }
      }
    }
  }
  @media (max-width: 1190px) {
    .images {
      padding: 0 4%;
    }
  }
  @media (max-width: 1140px) {
    .images {
      img {
        width: 280px;
      }
    }
    .hotelsSwiper {
      .slide {
        padding: 0 2%;
        .imgs {
          .column {
            img {
              width: 140px;
            }
          }
        }
      }
    }
  }
  @media (max-width: 1040px) {
    .hotelsSwiper {
      .slide {
        padding: 0 2%;
        .imgs {
          .mainImg {
            img {
              max-width: 380px;
            }
          }
        }
      }
    }
  }
  @media (max-width: 984px) {
    .images {
      img {
        width: 40%;
      }
    }
  }
  @media (max-width: 960px) {
    .hotelsSwiper {
      .slide {
        padding: 0 2%;
        .imgs {
          .mainImg {
            img {
              max-width: 350px;
              height: 290px;
            }
          }
        }
      }
    }
  }
  @media (max-width: 900px) {
    .pics {
      padding: 0 3%;
      img {
        height: 140px;
      }
    }
    .hotelsSwiper {
      height: 100vh;
      .slide {
        padding: 0 2%;
        flex-direction: column;
        height: 100vh;
        margin-top: 2em;
        .imgs {
          flex-direction: column;
          gap: 3px;
          width: 100%;
          height: auto;
          .column {
            flex-direction: row;
          }
          .mainImg {
            img {
              max-width: 350px;
              height: 180px;
            }
          }
        }
        .details {
          align-items: center;
          text-align: center;
        }
      }
    }
  }
  @media (max-width: 777px) {
    .banner {
      .details {
        h2 {
          margin-top: 2em;
        }
      }
    }
  }
  @media (max-width: 730px) {
    .pics {
      gap: 10px;
      img {
        height: 120px;
      }
    }
  }
  @media (max-width: 600px) {
    .hotelsSwiper {
      .slide {
        .imgs {
          .column {
            img {
              width: 30%;
            }
          }
          .mainImg {
            img {
              width: 100%;
              height: 180px;
            }
          }
        }
        .details {
          align-items: center;
          text-align: center;
        }
      }
    }
  }
  @media (max-width: 580px) {
    .images {
      img {
        width: 90%;
      }
    }
  }
  @media (max-width: 480px) {
    .banner {
      .details {
        height: 53vh;
        gap: 1em;
        h2 {
          font-size: 2em;
          line-height: 27px;
        }
      }
    }
    .pics {
      gap: 10px;
      img {
        height: 120px;
        width: 140px;
      }
    }
    .hotelsSwiper {
      .slide {
        .details {
          p {
            height: 90px;
            overflow-y: scroll;
          }
          button {
            margin-top: 10px;
          }
        }
      }
    }
  }
  @media (max-width: 350px) {
    .banner {
      .details {
        height: 53vh;
        gap: 1em;
        h2 {
          font-size: 1.7em;
          line-height: 27px;
        }
      }
    }
    .pics {
      img {
        width: 100%;
      }
    }
  }
`;

export default SantoriniPage;
