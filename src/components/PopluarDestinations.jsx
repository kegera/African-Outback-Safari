import React, { useEffect, useState } from "react";
import styled from "styled-components";
import santorini from "../assets/homePageImages/santorini.webp";
import dubai from "../assets/homePageImages/dubai.jpg";
import thailand from "../assets/homePageImages/thailand.jpg";
import hawaii from "../assets/homePageImages/hawaii.jpg";
import { AiTwotoneStar } from "react-icons/ai";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useAnimation } from "framer-motion";

const PopluarDestinations = () => {
  const { ref, inView } = useInView();
  const animation = useAnimation();
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    if (inView && !hasAnimated) {
      animation.start({
        opacity: 1,
        transition: { duration: 0.7, delay: 0.2 },
        y: 0,
      });
      setHasAnimated(true);
    }
    if (!inView && !hasAnimated) {
      animation.start({ opacity: 0, y: 100 });
    }
  }, [inView, hasAnimated, animation]);
  return (
    <Container>
      <h1>Popluar Destinations</h1>
      <div className="items" ref={ref}>
        <Link to={"/santorini"} className="link-styles">
          <motion.div animate={animation} className="item">
            <img src={santorini} alt="" />
            <h2>Tanzania</h2>
            <span>
              <h3>
                <span>550+</span> VISITS
              </h3>
              <h4>
                4.9 <AiTwotoneStar className="icon" />
              </h4>
            </span>
          </motion.div>
        </Link>
        <Link to={"/dubai"} className="link-styles">
          <motion.div animate={animation} className="item">
            <img src={dubai} alt="" />
            <h2>Coast</h2>
            <span>
              <h3>
                <span>610+</span> VISITS
              </h3>
              <h4>
                4.9 <AiTwotoneStar className="icon" />
              </h4>
            </span>
          </motion.div>
        </Link>

        <motion.div animate={animation} className="item">
          <img src={thailand} alt="" />
          <h2>Mount Kenya</h2>
          <span>
            <h3>
              <span>570+</span> VISITS
            </h3>
            <h4>
              4.8 <AiTwotoneStar className="icon" />
            </h4>
          </span>
        </motion.div>
        <motion.div animate={animation} className="item">
          <img src={hawaii} alt="" />
          <h2>Masaai Mara</h2>
          <span>
            <h3>
              <span>540+</span> VISITS
            </h3>
            <h4>
              4.7 <AiTwotoneStar className="icon" />
            </h4>
          </span>
        </motion.div>
      </div>
    </Container>
  );
};
const Container = styled.div`
  padding: 7em 4%;
  background: var(--backgroundGradient4);
  h1 {
    text-align: center;
    font-size: 2.7em;
    color: gray;
    font-weight: 500;
    font-family: "Montserrat";
    background: var(--gradientBackground);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
  .items {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 2em;
    margin-top: 2em;
    flex-wrap: wrap;
    .item {
      img {
        width: 250px;
        object-fit: cover;
        border-radius: 20px;
        box-shadow: 10px 10px 24px #b5b5b5, -17px -17px 24px #ffffff96;
        cursor: pointer;
        transition: 0.4s;
        :hover {
          transform: scale(1.04);
        }
      }
      h2 {
        font-size: 18px;
        font-weight: 500;
        text-align: center;
        margin-top: 7px;
      }
      span {
        display: flex;
        justify-content: space-between;
        margin-top: 4px;
        align-items: center;
        h3 {
          display: flex;
          font-weight: 500;
          align-items: flex-end;
          gap: 7px;
          color: gray;
          span {
            color: var(--primaryColor);
          }
        }
        h4 {
          font-size: 18px;
          color: gray;
          display: flex;
          align-items: center;
          gap: 7px;
          .icon {
            color: #ffbb00;
          }
        }
      }
    }
  }
  @media (max-width: 580px) {
    h1 {
      font-size: 1.8em;
    }
    .items {
      .item {
        span {
          justify-content: space-around;
          h3 {
            font-size: 15px;
          }
        }
        img {
          width: 210px;
        }
      }
    }
  }
  @media (max-width: 500px) {
    h1 {
      font-size: 1.6em;
    }
    .items {
      gap: 1.4em 10px;
      .item {
        img {
          width: 200px;
        }
      }
    }
  }
  @media (max-width: 450px) {
    .items {
      gap: 1.4em 10px;
      .item {
        img {
          width: 180px;
        }
      }
    }
  }
  @media (max-width: 410px) {
    padding: 7em 7%;
    .items {
      gap: 1.4em 10px;
      align-items: center;
      .item {
        img {
          width: 100%;
        }
      }
    }
  }
`;

export default PopluarDestinations;
