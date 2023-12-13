import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { motion } from "framer-motion";

const SignUp = () => {
  return (
    <Container>
      <motion.form
        animate={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -300 }}
        transition={{
          duration: 0.7,
          delay: 0.3,
          bounce: 0.3,
          type: "spring",
        }}
      >
        <h2>Sign Up</h2>
        <input type="text" name="name" placeholder="Enter Your Name Here..." />
        <input
          type="email"
          name="email"
          placeholder="Enter Your Email Here..."
        />
        <input
          type="password"
          name="password"
          placeholder="Enter Your Password Here"
        />
        <input
          type="password"
          name="confirmPassword"
          placeholder="Confirm Your Password Here"
        />
        <button>SUBMIT</button>
        <p>
          Already have an account?{" "}
          <Link to={"/log-in"} className="link-styles">
            <span>Log In</span>
          </Link>
        </p>
      </motion.form>
    </Container>
  );
};
const Container = styled.div`
  padding: 7%;
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  form {
    background: var(--backgroundGradient2);
    width: 40%;
    max-width: 600px;
    max-height: 700px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 1em;
    border-radius: 20px;
    box-shadow: 0 0 10px 2px gray;
    padding: 6%;
    h2 {
      font-weight: 400;
      text-align: center;
    }
    input {
      width: 100%;
      background: none;
      border: none;
      border-bottom: 1px solid var(--fontPrimaryColor);
      font-size: 16px;
      padding: 7px;
      font-family: "Poppins", sans-serif;
      outline: none;
      :focus {
        color: var(--fontPrimaryColor);
      }
    }
    button {
      padding: 10px 14px;
      font-family: "Poppins", sans-serif;
      font-size: 15px;
      border: none;
      background: #1d1d1d;
      color: white;
      border-radius: 7px;
      cursor: pointer;
      :hover {
        background: var(--primaryColor);
        transition: 0.3s;
      }
    }
    p {
      color: gray;
      font-weight: 300;
    }
  }
  @media (max-width: 1600px) {
    form {
      width: 500px;
    }
  }
  @media (max-width: 900px) {
    margin-top: 3em;
    form {
      width: 100%;
    }
  }
`;

export default SignUp;
