import React from "react";
import styled from "styled-components";
import { HiLocationMarker } from "react-icons/hi";
import { BsFillTelephoneFill } from "react-icons/bs";
/* import { MdEmail } from "react-icons/md"; */
import { AiFillPrinter } from "react-icons/ai";

const ContactUsComp = () => {
  return (
    <Container>
      <div className="items">
        <div className="item">
          <HiLocationMarker className="icon" />
          <h3>OUR MAIN OFFICE</h3>
          <p>
            P.O Box 50997 <br />
            Nairobi Kenya
          </p>
        </div>
        <div className="item">
          <BsFillTelephoneFill className="icon" />
          <h3>PHONE NUMBER</h3>
          <p>+1 123 123 1234</p>
        </div>
       {/*  <div className="item">
          <MdEmail className="icon" />
          <h3>FAX</h3>
          <p>1-123-456-7890</p>
        </div> */}
        <div className="item">
          <AiFillPrinter className="icon" />
          <h3>EMAIL</h3>
          <p>amirisites@gmail.com</p>
        </div>
      </div>
      <form>
        <h2>CONTACT US</h2>
        <input type="text" placeholder="Ener Your Name..." />
        <input type="email" placeholder="Ener Your Email..." />
        <textarea
          cols="30"
          rows="10"
          placeholder="Enter Your Message or concern..."
        ></textarea>
        <button>SUBMIT</button>
      </form>
    </Container>
  );
};
const Container = styled.div`
  padding: 7em 5%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: var(--backgroundGradient3);
  .items {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    gap: 1em;
    max-width: 440px;
    .item {
      width: 200px;
      height: 170px;
      background: none;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      text-align: center;
      border: none;
      box-shadow: 7px 7px 12px #a8a8a8, -7px -7px 12px #ffffff;
      gap: 7px;
      border-radius: 20px;
      .icon {
        font-size: 3em;
        color: var(--primaryColor);
      }
      h3 {
        color: #5c5c5c;
      }
      p {
        color: gray;
      }
    }
  }
  form {
    width: 500px;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    height: 480px;
    padding: 30px;
    h2 {
      font-size: 2em;
      font-weight: 400;
      margin-top: 1em;
      color: #575757;
    }
    input {
      margin-top: 12px;
      border-radius: 20px;
      border: 2px solid transparent;
      padding: 14px 20px;
      font-family: "Poppins", sans-serif;
      outline: none;
      font-size: 16px;
      width: 100%;
      box-shadow: 7px 7px 12px #a8a8a8, -4px -4px 12px #ffffff;
    }
    textarea {
      margin-top: 12px;
      border-radius: 20px;
      border: 2px solid transparent;
      box-shadow: 7px 7px 12px #a8a8a8, -7px -7px 12px #ffffff;
      padding: 14px 20px;
      font-family: "Poppins", sans-serif;
      outline: none;
      font-size: 16px;
      width: 100%;
    }
    button {
      margin-top: 20px;
      padding: 10px 14px;
      font-family: "Poppins", sans-serif;
      font-size: 17px;
      border: none;
      background: #333333;
      color: white;
      border-radius: 7px;
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
  @media (max-width: 870px) {
    padding: 7em 3%;
    .items {
      max-width: 400px;
      .item {
        width: 180px;
        height: 140px;
        .icon {
          font-size: 2em;
        }
        h3 {
          font-size: 17px;
        }
        p {
          font-size: 14px;
        }
      }
    }
    form {
      padding: 10px;
    }
  }
  @media (max-width: 740px) {
    flex-direction: column;
  }
  @media (max-width: 530px) {
    padding: 7em 1%;
    form {
      width: 100%;
    }
    .items {
      max-width: 3870px;
      gap: 7px;
      .item {
        width: 170px;
        height: 140px;
        .icon {
          font-size: 2em;
        }
        h3 {
          font-size: 17px;
        }
        p {
          font-size: 14px;
        }
      }
    }
  }
`;

export default ContactUsComp;
