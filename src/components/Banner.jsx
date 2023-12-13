import React from "react";
import styled from "styled-components";
import bannerImg from "../assets/homePageImages/bannerImg2.png";
import { BsSearch } from "react-icons/bs";
import { motion } from "framer-motion";

const Banner = () => {
  return (
    <Container>
      <motion.div
        animate={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: -500 }}
        transition={{ duration: 0.7, delay: 0.3, bounce: 0.3, type: "spring" }}
        className="leftSide"
      >
        <h1>
          Life is short, and the <br /> world is wide. <br /> Let's safari!
        </h1>
        <p>Travel far, travel wide, and let your soul dance with giraffes. <br />No apologies just wild fun ahead</p>
        {/* <button>LET'S TRAVEL</button> */}
        <div>
          <input type="text" placeholder="Choose Your Destination..." />
          <button>
            <BsSearch className="icon" />
          </button>
        </div>
      </motion.div>
      <motion.img
        animate={{ x: 0 }}
        initial={{ x: 500 }}
        transition={{ duration: 0.7, delay: 0.3, bounce: 0.3, type: "spring" }}
        className="bannerImg"
        src={bannerImg}
        alt=""
      />
    </Container>
  );
};
const Container = styled.div`
  padding: 0 4%;
  margin-top: 5.3em;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2em;
  .leftSide {
    h1 {
      font-size: 3em;
      font-weight: 600;
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
  @media (min-width: 1440px) {
    margin-top: 10em;
    .leftSide {
      h1 {
        font-size: 4em;
      }
    }
  }
  @media (max-width: 1048px) {
    margin-top: 7em;
    gap: 1em;
  }
  @media (max-width: 980px) {
    .leftSide {
      h1 {
        font-size: 2.7em;
      }
    }
  }
  @media (max-width: 880px) {
    .leftSide {
      h1 {
        font-size: 2.4em;
      }
    }
  }
  @media (max-width: 788px) {
    .leftSide {
      h1 {
        font-size: 2.4em;
      }
    }
  }
  @media (max-width: 740px) {
    .leftSide {
      h1 {
        font-size: 2.2em;
      }
    }
  }
  @media (max-width: 710px) {
    flex-direction: column;
    padding: 4em 2%;
    margin-top: 3em;
    gap: 3em;
    .leftSide {
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
  @media (max-width: 655px) {
    .leftSide {
      h1 {
        font-size: 1.8em;
      }
      div {
        margin-left: 14%;
      }
    }
  }
  @media (max-width: 555px) {
    .leftSide {
      div {
        input {
          width: 100%;
        }
        margin-left: 0;
      }
    }
  }
`;

export default Banner;
