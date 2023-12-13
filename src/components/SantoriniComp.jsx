import React from "react";
import styled from "styled-components";
import santoriniImg from "../assets/homePageImages/santoriniImg.png";
import santoriniPic1 from "../assets/homePageImages/santoriniPic1.webp";
import santoriniPic2 from "../assets/homePageImages/santoriniPic2.jpg";
import santoriniPic3 from "../assets/homePageImages/santoriniPic3.webp";

const SantoriniComp = () => {
  return (
    <Container>
      {/* make a swiper for each place */}
      <img className="bgImg" src={santoriniImg} alt="" />
      <div className="details">
        <h1>
          Let <span>Santorini</span> enchant you, <br /> experience its magic!
        </h1>
        <div className="buttons">
          <button>DISCOVER MORE</button>
          <button>BOOK NOW</button>
        </div>
      </div>
      <div className="otherPics">
        <img src={santoriniPic1} alt="" />
        <img src={santoriniPic2} alt="" />
        <img src={santoriniPic3} alt="" />
      </div>
    </Container>
  );
};
const Container = styled.div`
  position: relative;
  margin-bottom: 7em;
  overflow: visible;
  .bgImg {
    width: 100%;
    object-fit: cover;
    filter: brightness(0.7);
    height: 80vh;
  }
  .details {
    position: absolute;
    top: 18%;
    padding-left: 7%;
    h1 {
      font-size: 3em;
      background: var(--gradientBackground3);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      font-weight: 500;
      span {
        font-weight: 800;
      }
    }
    .buttons {
      display: flex;
      gap: 5px;
      margin-top: 2em;
      button {
        font-family: "Poppins", sans-serif;
        font-size: 15px;
        padding: 10px 14px;
        border: none;
        border-radius: 20px;
        transition: 0.4s;
        cursor: pointer;
        :hover {
          background-color: #afd0f7;
        }
        :nth-child(2) {
          background: #333333;
          color: white;
          :hover {
            background-color: #464646;
          }
        }
      }
    }
  }
  .otherPics {
    display: flex;
    justify-content: center;
    width: 100%;
    bottom: -3em;
    gap: 1.4em;
    margin-top: -3em;
    position: absolute;
    img {
      width: 240px;
      object-fit: cover;
      height: 140px;
      border-radius: 20px;
      border: 1px solid #4b4a4a;
      box-shadow: 0 0 12px 2px #c2c2c2;
    }
  }
  @media (max-width: 960px) {
    .details {
      padding-left: 5%;
      h1 {
        font-size: 2.7em;
      }
    }
  }
  @media (max-width: 700px) {
    .details {
      top: 14%;
      h1 {
        font-size: 2.2em;
      }
      .buttons {
        margin-top: 10px;
      }
    }
    .otherPics {
      padding: 0 3%;
      gap: 14px;
    }
  }
  @media (max-width: 660px) {
    .otherPics {
      flex-wrap: wrap;
      bottom: -7em;
      img {
        width: 200px;
      }
    }
  }
  @media (max-width: 510px) {
    .details {
      h1 {
        font-size: 1.8em;
      }
      .buttons {
        margin-top: 10px;
      }
    }
  }
  @media (max-width: 455px) {
    .otherPics {
      bottom: -22em;
      img {
        width: 90%;
      }
    }
  }
  @media (max-width: 420px) {
    .details {
      top: 12%;
      h1 {
        font-size: 1.6em;
      }
      .buttons {
        margin-top: 10px;
      }
    }
  }
`;

export default SantoriniComp;
