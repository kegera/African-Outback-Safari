import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { RiDoubleQuotesR } from "react-icons/ri";
import personPic1 from "../assets/homePageImages/person1Pic.avif";
import personPic2 from "../assets/homePageImages/person2Pic.jpg";
import personPic3 from "../assets/homePageImages/person3Pic.webp";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useAnimation } from "framer-motion";

const Testimonials = () => {
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
      <div className="topSection">
        <h1>What people are saying about us</h1>
        <p>
          At Travelo, client satisfaction is at the heart of everything we do.
          Your happiness and contentment are our top priorities, and we go above
          and beyond to ensure that every aspect of your travel experience is
          exceptional.
        </p>
      </div>
      <div className="bottomSection" ref={ref}>
        <motion.div animate={animation} className="item">
          <RiDoubleQuotesR className="icon" />
          <p>
            I've traveled the globe, but my recent trip with Travelo was
            next-level perfection. They curated a seamless itinerary, blending
            luxury and exploration effortlessly. Each accommodation felt like a
            home away from home, and the exclusive experiences they arranged
            were the cherry on top. Travelo is now my go-to for all things
            travel!"
          </p>
          <div>
            <img src={personPic1} alt="" />
            <span>
              <h2>Steve Jackson</h2>
              <p>Loyal Client</p>
            </span>
          </div>
        </motion.div>

        <motion.div animate={animation} className="item">
          <RiDoubleQuotesR className="icon" />
          <p>
            Immersing myself in new cultures is my passion, and Travelo turned
            my wanderlust into reality. Their in-depth knowledge of local
            traditions and hidden gems led me to authentic experiences I'll
            cherish forever. Thanks to them, I walked the path less traveled and
            discovered the heart and soul of each destination.
          </p>
          <div>
            <img src={personPic3} alt="" />
            <span>
              <h2>Jennifer Harlow</h2>
              <p>Client</p>
            </span>
          </div>
        </motion.div>
        <motion.div animate={animation} className="item">
          <RiDoubleQuotesR className="icon" />
          <p>
            Travelling with kids can be challenging, but Travelo made it a
            breeze! They crafted a family-friendly trip that kept everyone
            entertained and happy. The thoughtful activities, comfortable
            accommodations, and kid-approved dining options exceeded our
            expectations. Our kids are already asking when we can book another
            adventure with Travelo.
          </p>
          <div>
            <img src={personPic2} alt="" />
            <span>
              <h2>Mark Ross</h2>
              <p>Client</p>
            </span>
          </div>
        </motion.div>
      </div>
    </Container>
  );
};
const Container = styled.div`
  padding: 7em 7%;
  background: var(--backgroundGradient2);
  .topSection {
    display: flex;
    justify-content: center;
    gap: 1em;
    h1 {
      font-size: 3em;
      font-weight: 600;
      max-width: 14em;
      background: var(--gradientBackground);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }
    p {
      margin-top: 20px;
      max-width: 30em;
      color: gray;
    }
  }
  .bottomSection {
    flex-wrap: wrap;
    margin-top: 3em;
    display: flex;
    justify-content: center;
    gap: 2em;
    .item {
      width: 30%;
      display: flex;
      flex-direction: column;
      gap: 1.4em;
      .icon {
        font-size: 3em;
        color: var(--fontPrimaryColor);
      }
      p {
        color: gray;
      }
      div {
        display: flex;
        align-items: center;
        gap: 1em;
        img {
          width: 50px;
          height: 50px;
          object-fit: cover;
          border-radius: 50%;
        }
        h2 {
          font-size: 17px;
          font-weight: 400;
        }
        p {
          color: var(--fontSecondaryColor);
          font-size: 14px;
        }
      }
    }
  }
  @media (max-width: 960px) {
    .topSection {
      h1 {
        width: 50%;
      }
      p {
        width: 50%;
      }
    }
  }
  @media (max-width: 940px) {
    padding: 0 3%;
    .bottomSection {
      .item {
        width: 300px;
      }
    }
  }
  @media (max-width: 740px) {
    padding: 0 7%;
    .bottomSection {
      gap: 5em;
      .item {
        width: 100%;
        text-align: center;
        align-items: center;
      }
    }
    .topSection {
      h1 {
        font-size: 2.7em;
      }
    }
  }
  @media (max-width: 672px) {
    .topSection {
      flex-direction: column;
      h1 {
        width: 100%;
      }
      p {
        width: 100%;
      }
    }
  }
  @media (max-width: 430px) {
    .topSection {
      flex-direction: column;
      h1 {
        font-size: 2em;
      }
      p {
        font-size: 14px;
      }
    }
  }
`;

export default Testimonials;
