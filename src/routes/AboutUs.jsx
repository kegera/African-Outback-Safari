import React from "react";
import { useState } from 'react';
import styled from "styled-components";
import logo from "../assets/traveloLogo.png";
import { motion } from "framer-motion";
import { FaPlus } from "react-icons/fa6";
import { FaMinus } from "react-icons/fa6";




const AboutUs = () => {
  const [openFAQs, setOpenFAQs] = useState(new Array(8).fill(false));

  const toggleFAQ = (index) => {
    const newOpenFAQs = [...openFAQs];
    newOpenFAQs[index] = !newOpenFAQs[index];
    setOpenFAQs(newOpenFAQs);
  };

  const faqContent = [
    {
      question: " What makes East Africa a unique travel destination?",
      answer:
        "East Africa boasts breathtaking landscapes, diverse wildlife, and vibrant cultures. From the iconic Serengeti to the stunning beaches of Zanzibar, the region offers a rich and unparalleled travel experience.",
    },
    {
      question: "What types of tours do you offer",
      answer:
        "We offer a variety of tours, including wildlife safaris, cultural excursions, trekking adventures, and beach getaways. Whether you're a nature enthusiast or a history buff, we have the perfect itinerary for you.",
    },
    {
      question: " What is the best time to visit East Africa?",
      answer:
        "The best time varies by region, but generally, the dry seasons (June to September and January to February) are ideal for wildlife viewing. However, each season has its unique charm, so we can tailor your trip based on your preferences.",
    },
    {
      question: "Do you provide customized travel packages?",
      answer:
        "Absolutely! We specialize in crafting personalized itineraries to suit your interests, budget, and schedule. Let us know your preferences, and we'll create a tailor-made adventure just for you",
    },
    {
      question: " What should I pack for a safari in East Africa?",
      answer:
        "Light, neutral-colored clothing, a wide-brimmed hat, sunscreen, insect repellent, and sturdy walking shoes are essential. We'll provide you with a detailed packing list upon booking to ensure you're well-prepared for your safari.",
    },
    {
      question: " What transportation methods are available",
      answer:
        "Road travel is the preferred method for a full safari experience. While air travel is an option, the road provides a more immersive journey, allowing you to soak in the diverse landscapes and wildlife along the way.",
    },
    {
      question: "What accommodations do you provide for travelers ",
      answer:
        "We offer a range of accommodations to suit your preferences and budget. Options include hotels, camping experiences for the adventurous, and lodges that provide a comfortable stay amidst nature. The choice is yours based on the level of comfort you desire.",
    },
    {
      question: "How is the security situation for Clients",
      answer:
        "Security is a top priority for our clients. While the overall safety level is high, we recommend keeping valuables secure, as interactions with local residents are likely. Our team ensures that all recommended precautions are taken to make your experience safe and enjoyable.",
    },
  ];

  return (
    <Container>
      <motion.img
        animate={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: -300 }}
        transition={{
          duration: 0.7,
          delay: 0.3,
          bounce: 0.3,
          type: "spring",
        }}
        src={logo}
        alt=""
      />
      <div className="items">
        <div className="item">
          <h2>Welcome to Travelo</h2>
          <p>
            At Travelo, we are passionate about curating extraordinary travel
            experiences that leave lasting impressions. Our mission is to
            inspire and empower travelers to explore the world, fostering
            connections with diverse cultures and landscapes. With a deep-rooted
            love for wanderlust, we believe that every journey is an opportunity
            for growth and transformation.
          </p>
        </div>
        <div className="item">
          <h2>Our Journey</h2>
          <p>
            Founded in 2018, Travelo has been dedicated to crafting personalized
            journeys that cater to your aspirations and dreams. Over the years,
            we have earned the trust and loyalty of countless travelers by
            delivering exceptional service and unforgettable adventures.
          </p>
        </div>
        <div className="item">
          <h2>Why Choose Us</h2>
          <ol>
            <li>
              <span>Expertise and Experience:</span> Our team of seasoned travel
              experts brings extensive knowledge and hands-on experience to
              curate seamless travel itineraries. We have explored the
              destinations we offer, ensuring you receive insider insights and
              hidden gems along the way.
            </li>
            <li>
              <span>Tailored Experiences:</span> We understand that every
              traveler is unique. That's why we design each itinerary with
              meticulous attention to detail, taking into account your
              preferences, interests, and budget. Your journey is crafted to be
              as special as you are.
            </li>
            <li>
              <span>Global Partnerships:</span> Through our extensive network of
              partners worldwide, we secure exclusive access to top-notch
              accommodations, transportation, and immersive experiences. You get
              to indulge in the finest offerings each destination has to offer.
            </li>
            <li>
              <span>Customer-Centric Approach:</span> Your satisfaction is at
              the heart of everything we do. Our dedicated team is committed to
              providing prompt and personalized support, making your travel
              planning effortless and stress-free.
            </li>
            <li>
              <span>Sustainable Travel:</span> We believe in responsible travel
              that contributes positively to the places we visit. Our commitment
              to sustainable practices ensures that your adventures have a
              positive impact on local communities and the environment.
            </li>
          </ol>
        </div>
        <div className="item">
          <h2>Our Promise</h2>
          <p>
            When you choose Travelo, you embark on a journey that goes beyond
            the ordinary. Whether you're a seasoned explorer or a first-time
            traveler, we strive to create meaningful and transformative
            experiences that stay with you long after you return home.
          </p>
        </div>
        <div className="item">
          <h2>Let's Create Your Perfect Journey</h2>
          <p>
            Your wanderlust awaits, and we are here to make your dreams a
            reality. Discover the world with Travelo and let's create memories
            that will last a lifetime. Reach out to our dedicated team and let
            the adventure begin!
          </p>
        </div>
        
        <section className="faqs">
        <h2 className="text-4xl font-bold text-center mt-8 mb-12">Frequently Asked Questions</h2>

          <div className="container faqs__container">
            {faqContent.map((faq, index) => (
              <article
                key={index}
                className={`faq ${openFAQs[index] ? "open" : ""}`}
                onClick={() => toggleFAQ(index)}
              >
                <div className="faq__icon">
                  <i>{openFAQs[index] ? <FaMinus /> : <FaPlus />}</i>
                </div>
                <div className="question__answer">
                  <h4 className="font-bold">{faq.question}</h4>
                  <p>{faq.answer}</p>
                </div>
              </article>
            ))}
          </div>
        </section>
      </div>
    </Container>
  );
};
const Container = styled.div`
  padding: 7em 12%;
  background: var(--backgroundGradient2);
  img {
    width: 40%;
    margin: auto;
    display: flex;
    margin-bottom: 3em;
  }
  .items {
    display: flex;
    flex-direction: column;
    gap: 4em;
    .item {
      display: flex;
      flex-direction: column;
      gap: 1em;
      ol {
        margin-left: 14px;
        span {
          color: black;
          font-weight: 500;
        }
      }
    }
  }

  .faqs{
    
}

.faqs__container{
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 1rem;
}

.faq{
    padding: 2rem;
    display: flex;
    align-items: center;
    gap: 1.4rem;
    height: fit-content;
    cursor: pointer;
}

.faq h4{
    font-size: 1rem;
    line-height: 2.2;

}

.faq__icon{
    align-self: flex-start;
    font-size: 1.2rem;
}

.faq p{
    margin-top: 0.8rem;
    display: none;
}

.faq.open p{
    display: block;
}


  @media (min-width: 1300px) {
    padding: 7em 18%;
  }
  @media (max-width: 500px) {
    padding: 7em 3%;
    img {
      width: 90%;
    }
  }
`;

export default AboutUs;
