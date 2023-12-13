import React from "react";
import styled from "styled-components";
import santorini from "../assets/homePageImages/santoriniImg.jpg";
import dubai from "../assets/homePageImages/dubaiImg.jpg";
import maldives from "../assets/homePageImages/maldives.jpg";
import hawaii from "../assets/homePageImages/hawaii.jpg";
import miami from "../assets/homePageImages/miamiImg.jpg";
import ksamil from "../assets/homePageImages/ksamil.png";
import mykonos from "../assets/homePageImages/mykonosImg.webp";
import bali from "../assets/homePageImages/bali.jpg";
import fiveStarIcon from "../assets/homePageImages/5starsIcon.png";
import { Link } from "react-router-dom";

const RecomendedDestinations = () => {
  return (
    <Container>
      <h2 className="title">Recomended Destinations</h2>
      <div className="cards">
        <div className="card">
          <img src={santorini} alt="" />
          <div>
            <h2>Mombasa</h2>
            <h3>South coast</h3>
            <img src={fiveStarIcon} alt="" />
            <p>
              The rare natural beauty of South Coat in Mombasa, the breathtaking caldera,
              the views, the extraordinary volcanic beaches and the lunar
              landscapes are the wondrous results of this eruption that can only
              be admired in Santorini.
            </p>
            <Link to={"/santorini"} className="link-styles">
              <button>LET'S VISIT</button>
            </Link>
          </div>
        </div>
        <div className="card">
          <img src={dubai} alt="" />
          <div>
            <h2>South Kenya</h2>
            <h3>Massai Mara</h3>
            <img src={fiveStarIcon} alt="" />
            <p>
             Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis eum quibusdam cumque incidunt sapiente repellendus, culpa non eligendi, corporis, excepturi distinctio voluptatum! Veniam accusamus sequi voluptate eius ut molestiae repudiandae.
            </p>
            <Link to={"/dubai"} className="link-styles">
              <button>LET'S VISIT</button>
            </Link>
          </div>
        </div>
        <div className="card">
          <img src={maldives} alt="" />
          <div>
            <h2>Nairobi</h2>
            <img src={fiveStarIcon} alt="" />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur iure saepe iusto voluptatibus similique quasi, officia quo incidunt, eligendi sapiente corrupti blanditiis ratione labore quam harum? Eius autem fuga aspernatur?
            </p>
            <button>LET'S VISIT</button>
          </div>
        </div>
        <div className="card">
          <img src={hawaii} alt="" />
          <div>
            <h2>Kisumu</h2>
            <img src={fiveStarIcon} alt="" />
            <p>
             Lorem ipsum dolor sit amet consectetur, adipisicing elit. Autem minima ipsa quia. Ab in fugiat, deleniti porro impedit quisquam est provident corrupti repudiandae sed praesentium veniam, inventore molestiae maiores at!
            </p>
            <button>LET'S VISIT</button>
          </div>
        </div>
        <div className="card">
          <img src={mykonos} alt="" />
          <div>
            <h2>Central Province</h2>
            <h3>Mount Kenya</h3>
            <img src={fiveStarIcon} alt="" />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur, veniam unde provident fugiat eaque qui facere non. Quae velit laborum iusto animi nihil, voluptate asperiores! Maxime nostrum expedita sunt impedit.
            </p>
            <button>LET'S VISIT</button>
          </div>
        </div>
        <div className="card">
          <img src={miami} alt="" />
          <div>
            <h2>Nanyuki</h2>
            {/* <h3>Florida, USA</h3> */}
            <img src={fiveStarIcon} alt="" />
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ullam modi nam, asperiores doloribus veniam provident, suscipit est possimus quibusdam dolor ducimus quas adipisci dolore quos illum natus corporis nihil delectus?
            </p>
            <button>LET'S VISIT</button>
          </div>
        </div>
        <div className="card">
          <img src={ksamil} alt="" />
          <div>
            <h2>Naivasha</h2>
            <h3>Lake Niavasha</h3>
            <img src={fiveStarIcon} alt="" />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus illo tempora nobis veniam ratione quisquam dolorem rerum harum vitae voluptate sit perferendis, ducimus nihil iure, placeat fuga suscipit dignissimos asperiores!
            </p>
            <button>LET'S VISIT</button>
          </div>
        </div>
        <div className="card">
          <img src={bali} alt="" />
          <div>
            <h2>Rift Valley</h2>
            {/* <h3>Indonesia</h3> */}
            <img src={fiveStarIcon} alt="" />
            <p>
             Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque molestiae recusandae non modi error id architecto nobis voluptas nisi! Enim explicabo quaerat sint sapiente mollitia eaque? Eligendi unde illum reprehenderit.
            </p>
            <button>LET'S VISIT</button>
          </div>
        </div>
        <div className="card">
          <Link to={"/destinations"} className="link-styles">
            <div>
              <button>SEE ALL</button>
            </div>
          </Link>
        </div>
      </div>
    </Container>
  );
};
const Container = styled.div`
  padding: 7em 4%;
  .title {
    text-align: center;
    font-size: 2.7em;
    font-weight: 500;
    background: var(--gradientBackground);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
  .cards {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 4em;
    margin-top: 3em;
    .card {
      width: 80vw;
      height: auto;
      max-width: 1200px;
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 2em;
      background: linear-gradient(145deg, #e6e6e6, #ffffff);
      box-shadow: 11px 11px 24px #d1d1d1, -11px -11px 24px #ffffff;
      border-radius: 2em;
      border: 1px solid #e0e0e0;
      position: sticky;
      top: 5em;
      :nth-child(2) {
        top: 7em;
      }
      :nth-child(3) {
        top: 9em;
      }
      :nth-child(4) {
        top: 11em;
      }
      :nth-child(5) {
        top: 13em;
      }
      :nth-child(6) {
        top: 15em;
      }
      :nth-child(7) {
        top: 17em;
      }
      :nth-child(8) {
        top: 19em;
      }
      :nth-child(9) {
        top: 21em;
        background: white;
        height: 400px;
        button {
          font-size: 30px;
          padding: 14px 30px;
        }
      }
      img {
        width: 50%;
        border-radius: 2em 0 0 2em;
      }
      div {
        display: flex;
        flex-direction: column;
        padding-right: 20px;
        align-items: flex-start;
        h2 {
          font-weight: 500;
        }
        h3 {
          font-weight: 400;
          color: gray;
          line-height: 10px;
        }
        img {
          width: 100px;
          margin: 10px 0;
        }
        p {
          color: gray;
        }
        button {
          padding: 10px 14px;
          font-family: "Poppins", sans-serif;
          font-size: 15px;
          border: none;
          background: #333333;
          color: white;
          border-radius: 7px;
          margin-top: 10px;
          :hover {
            background: var(--primaryColorDark);
            transition: 0.3s;
            cursor: pointer;
            :nth-child(2) {
              background-color: var(--secondaryBackgroundColor);
            }
          }
        }
      }
    }
  }
  @media (max-width: 1180px) {
    .cards {
      .card {
        width: 94vw;
      }
    }
  }
  @media (max-width: 1120px) {
    .cards {
      .card {
        p {
          font-size: 14px;
        }
      }
    }
  }
  @media (max-width: 950px) {
    .cards {
      .card {
        div {
          img {
            width: 70px;
          }
          h2 {
            font-size: 20px;
          }
          h3 {
            font-size: 17px;
          }
        }
      }
    }
  }
  @media (max-width: 900px) {
    .cards {
      .card {
        div {
          p {
            height: 40px;
            overflow-y: scroll;
          }
        }
      }
    }
  }
  @media (max-width: 650px) {
    .cards {
      gap: 7em;
      .card {
        flex-direction: column;
        gap: 0px;
        img {
          border-radius: 20px;
          width: 60%;
        }
        div {
          align-items: center;
          padding: 20px;
          p {
            text-align: center;
          }
        }
      }
    }
  }
  @media (max-width: 450px) {
    .cards {
      .card {
        img {
          border-radius: 20px;
          width: 100%;
        }
        div {
          align-items: center;
          padding: 20px;
          p {
            text-align: center;
            height: 40px;
            overflow-y: scroll;
          }
        }
      }
    }
  }
`;

export default RecomendedDestinations;
