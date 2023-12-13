import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { AiFillSchedule } from "react-icons/ai";
import { HiUserGroup } from "react-icons/hi";
import { FiTruck } from "react-icons/fi";
import { FaHotel, FaPlane } from "react-icons/fa";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useAnimation } from "framer-motion";

const OurServices = () => {
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
      <h2 className="title">Our Services</h2>
      <div className="items" ref={ref}>
        <motion.div animate={animation} className="item">
          <AiFillSchedule className="icon" />
          <h2>Trip Planning</h2>
          <p>
            Our travel agency specializes in creating personalized travel
            experiences that cater to your unique preferences, interests, and
            budget.
          </p>
        </motion.div>
        <motion.div animate={animation} className="item">
          <FaPlane className="icon" />
          <h2>Flight Reservations</h2>
          <p>
            Our agency offers a seamless flight booking experience, taking the
            hassle out of finding the best flights for your journey.
          </p>
        </motion.div>
        <motion.div animate={animation} className="item">
          <FaHotel className="icon" />
          <h2>Accommodations</h2>
          <p>
            We offer a wide range of accommodations, including hotels, resorts,
            vacation rentals, and charming bed and breakfasts and most importantly Airbnbs!!!
          </p>
        </motion.div>
        <motion.div animate={animation} className="item">
          <FiTruck className="icon" />
          <h2>Transportation</h2>
          <p>
            Our agency can arrange all your transportation needs, from airport
            transfers to car rentals and train tickets.
          </p>
        </motion.div>
        <motion.div animate={animation} className="item">
          <HiUserGroup className="icon" />
          <h2>Group Travel </h2>
          <p>
            Whether you're planning a corporate event, a family reunion, or a
            destination wedding, we have the expertise to make it a seamless.
          </p>
        </motion.div>
      </div>
    </Container>
  );
};
const Container = styled.div`
  padding: 7em 5%;
  background: var(--backgroundGradient3);
  .title {
    text-align: center;
    font-size: 2.7em;
    font-weight: 500;
    background: var(--gradientBackground);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
  .items {
    margin-top: 2em;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    gap: 1em;
    .item {
      padding: 20px;
      height: 280px;
      max-width: 300px;
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 1em;
      background: linear-gradient(145deg, #e6e6e6, #ffffff);
      box-shadow: 11px 11px 24px #d1d1d1, -11px -11px 24px #ffffff;
      text-align: center;
      border-radius: 2em;
      .icon {
        font-size: 3em;
      }
      h2 {
        color: var(--primaryColor);
        font-weight: 600;
      }
      p {
        color: gray;
      }
    }
  }
  @media (max-width: 700px) {
    .items {
      .item {
        max-width: 100%;
        height: auto;
      }
    }
  }
`;

export default OurServices;
