import React, { useEffect } from "react";
import styled from "styled-components";
import bannerImg from "../assets/destinationsPageImages/bannerMapImg.png";
import { BsSearch } from "react-icons/bs";
import data from "../components/destinationsData";
import { AiTwotoneStar } from "react-icons/ai";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Destinations = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const {
    kenyaDestinations,
    tanzaniaDestinations,
    zanzibarDestinations,
    eastAfricaDestinations,
  } = data;
  return (
    <Container>
      <div className="banner">
        <motion.div
          className="left"
          animate={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -500 }}
          transition={{
            duration: 0.7,
            delay: 0.3,
            bounce: 0.3,
            type: "spring",
          }}
        >
          <h1>
            Adventure awaits. <br /> Explore the East Africa with us.
          </h1>
          <p>Choose your favorite from East Africa's top Destinations</p>
          <div>
            <input type="text" placeholder="Choose Your Destination..." />
            <button>
              <BsSearch className="icon" />
            </button>
          </div>
        </motion.div>
        <motion.img
          animate={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 500 }}
          transition={{
            duration: 0.7,
            delay: 0.3,
            bounce: 0.3,
            type: "spring",
          }}
          className="bannerImg"
          src={bannerImg}
          alt=""
        />
      </div>
      <div className="continent">
        <h2 className="title">Kenya</h2>
        <div className="destinations">
          {kenyaDestinations.map((item) => (
            <div className="item">
              <img src={item.img} alt="" />
              <div className="details">
                <h2>
                  {item.city} <span>{item.country}</span>
                </h2>
                <span>
                  <h3>
                    {item.visits}+ <span>Visits</span>
                  </h3>
                  <h4>
                    {item.reviews} <AiTwotoneStar />
                  </h4>
                </span>
              </div>
            </div>
          ))}
        </div>
        {/* <p className="seeAll">See All...</p> */}
      </div>
      <div className="continent">
        <h2 className="title">Tanzania</h2>
        <div className="destinations">
          {tanzaniaDestinations.map((item) => (
            <Link to={`${item.link}`} className="link-styles">
              <div className="item">
                <img src={item.img} alt="" />
                <div className="details">
                  <h2>
                    {item.city} {/* <span>{item.country}</span> */}
                  </h2>
                  <span>
                    <h3>
                      {item.visits}+ <span>Visits</span>
                    </h3>
                    <h4>
                      {item.reviews} <AiTwotoneStar />
                    </h4>
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
        {/* {<p className="seeAll">See All...</p>} */}
      </div>
      <div className="continent">
        <h2 className="title">Zanzibar</h2>
        <div className="destinations">
          {zanzibarDestinations.map((item) => (
            <div className="item">
              <img src={item.img} alt="" />
              <div className="details">
                <h2>
                  {item.city} {/* <span>{item.country}</span> */}
                </h2>
                <span>
                  <h3>
                    {item.visits}+ <span>Visits</span>
                  </h3>
                  <h4>
                    {item.reviews} <AiTwotoneStar />
                  </h4>
                </span>
              </div>
            </div>
          ))}
        </div>
        {/* <p className="seeAll">See All...</p> */}
      </div>
      <div className="continent mb-[60px]">
        <h2 className="title">Rest of East Africa</h2>
        <div className="destinations">
          {eastAfricaDestinations.map((item) => (
            <div className="item">
              <img src={item.img} alt="" />
              <div className="details">
                <h2>
                  {item.city} <span>{item.country}</span>
                </h2>
                <span>
                  <h3>
                    {item.visits}+ <span>Visits</span>
                  </h3>
                  <h4>
                    {item.reviews} <AiTwotoneStar />
                  </h4>
                </span>
              </div>
            </div>
          ))}
        </div>
        {/* <p className="seeAll">See All...</p> */}
      </div>
    </Container>
  );
};
const Container = styled.div`
  .title {
    margin-top: 2.8em;
    text-align: center;
    font-size: 2.3em;
    font-weight: 500;
    background: var(--gradientBackground);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
  .banner {
    margin-top: 5.3em;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 2em;
    padding: 0 2%;
    .left {
      h1 {
        font-size: 3em;
        background: var(--gradientBackground2);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
      }
      p {
        color: gray;
        margin-top: 10px;
      }
      div {
        display: flex;
        margin-top: 1.3em;
        input {
          width: 20em;
          font-size: 17px;
          padding: 15px 20px;
          box-shadow: 10px 10px 34px #b5b5b5, -10px -10px 34px #ffffff;
          border: none;
          border-radius: 20px 0 0 20px;
          outline: none;
        }
        button {
          padding: 0 14px;
          border: none;
          background-color: var(--primaryColor);
          border-radius: 0 20px 20px 0;
          .icon {
            font-size: 1.7em;
            color: white;
          }
        }
      }
    }
    .bannerImg {
      width: 42%;
      max-width: 700px;
    }
  }

  .continent {
    padding: 0 4%;
    .title {
      text-align: left;
      margin-left: 7%;
    }
    .destinations {
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 1.4em;
      flex-wrap: wrap;
      margin-top: 1em;
      .item {
        width: 250px;
        height: 240px;
        img {
          width: 100%;
          height: 170px;
          object-fit: cover;
          border-radius: 20px;
          box-shadow: 10px 10px 24px #b5b5b5, -17px -17px 24px #ffffff96;
          cursor: pointer;
          transition: 0.4s;
          :hover {
            transform: scale(1.04);
          }
        }
        .details {
          display: flex;
          flex-direction: column;
          align-items: center;
          h2 {
            display: flex;
            gap: 7px;
            font-size: 18px;
            font-weight: 400;
            color: gray;
            margin-top: 10px;
            span {
              font-weight: 500;
              color: #575757;
            }
          }
          span {
            width: 100%;
            display: flex;
            justify-content: space-around;
            h3 {
              display: flex;
              gap: 4px;
              font-weight: 400;
              font-size: 17px;
              color: var(--primaryColor);
              span {
                color: gray;
              }
            }
            h4 {
              display: flex;
              align-items: center;
              gap: 7px;
              color: #575757;
              font-weight: 400;
              svg {
                color: #facd50;
              }
            }
          }
        }
      }
    }
    .seeAll {
      text-align: right;
      margin: 1em 7%;
      color: gray;
      cursor: pointer;
      :hover {
        color: black;
      }
    }
  }
  @media (min-width: 1440px) {
    margin-top: 10em;
    .banner {
      .left {
        h1 {
          font-size: 4em;
        }
      }
    }
  }
  @media (max-width: 1048px) {
    .banner {
      margin-top: 7em;
      gap: 1em;
    }
  }
  @media (max-width: 980px) {
    .banner {
      .left {
        h1 {
          font-size: 2.7em;
        }
      }
    }
  }
  @media (max-width: 880px) {
    .banner {
      .left {
        h1 {
          font-size: 2.4em;
        }
      }
    }
  }
  @media (max-width: 788px) {
    .banner {
      .left {
        h1 {
          font-size: 2.4em;
        }
      }
    }
  }
  @media (max-width: 740px) {
    .banner {
      .left {
        h1 {
          font-size: 2.2em;
        }
      }
    }
  }
  @media (max-width: 710px) {
    .banner {
      flex-direction: column;
      padding: 0em 2%;
      gap: 3em;
      margin-top: 5em;
      .left {
        width: 100%;
        text-align: center;
        h1 {
          font-size: 2.2em;
        }
        div {
          margin-left: 20%;
        }
      }
      .bannerImg {
        width: 70%;
      }
    }
  }

  @media (max-width: 655px) {
    .banner {
      .left {
        h1 {
          font-size: 1.8em;
        }
        div {
          margin-left: 14%;
        }
      }
    }
  }
  @media (max-width: 555px) {
    .banner {
      .left {
        div {
          input {
            width: 100%;
          }
          margin-left: 0;
        }
      }
    }
  }
`;

export default Destinations;
