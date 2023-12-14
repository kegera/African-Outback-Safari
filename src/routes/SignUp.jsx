import React from "react";
import styled from "styled-components";
import { AiFillInstagram, AiFillTwitterCircle } from "react-icons/ai";
import { BsFacebook } from "react-icons/bs";
import { SiGmail } from "react-icons/si";
import { motion } from "framer-motion";
import bannerImg from "../assets/otherPagesImages/ht-bannerImg.jpg"
import {useRef} from 'react'
import { useState } from "react";
import emailjs from 'emailjs-com'

const ContactUs = () => {
  const form = useRef();
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_vg9iva2', 'template_zua21zm', form.current, 'WKQI1AZALcoUj2hiX')

    form.current.reset();
    setIsFormSubmitted(true);

    // Reset success message after a delay (you can adjust the delay as needed)
    setTimeout(() => {
      setIsFormSubmitted(false);
    }, 6000);
  };

  return (
    <Container>
      <section>
         <div className="banner">
            <img className="bannerImg" src={bannerImg} alt="" />
            <motion.div
            animate={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 200 }}
            transition={{
              duration: 0.7,
              delay: 0.3,
              bounce: 0.3,
              type: "spring",
            }}
            className="details"
            >
                <h1>
                  Book Your Safari Now!
                </h1>
            </motion.div>

            
          </div>

          {/* Contact */}
          <div className="bg-white py-[5rem] page-padding grid grid-cols-2 container gap-10 items-center md1000:grid-cols-1 ">
            {/* Frist column */}
            <div className="md1000:w-[60%] md1000:flex md1000:flex-col md1000:mx-auto min800:w-[90%] min620:w-full ml-[40px]">
              <h2 className="text-black text-[36px] font-bold leading-[1.2]">
                Shape Your Safari with Us! Let's Plan Your Adventure.
              </h2>
              <p className="text-[20px] w-[95%] text-[#646464] font-medium my-[40px]">
                Empowering Journeys, Enchanting Memories - Discover the Heartbeat of East Africa with Us! 🌍✨ Book your safari adventure with African Outback Safaris, where every step resonates with the rhythm of the wild. Unleash the explorer in you and let the enchantment begin! 🦓🌅 #AfricanOutbackSafari #SafariMagic #travelinstyle
              </p>
              <div className="grid grid-cols-2 grid-rows-2 gap-y-20 min620:grid-cols-1 min620:mx-auto">
                <div className="flex flex-col relative">
                  <h3 className="text-[2rem] font-bold mb-10">
                    Our Offices
                  </h3>
                  <span className="bg-[#4FC0D6] w-[50px] h-[4px] absolute top-[40px]"></span>
                  <p className="text-[20px] font-medium text-[#646464]">
                    Nairobi CBD
                    <br /> Nairobi, Kenya
                  </p>
                </div>
                {/*  */}
                <div className="flex flex-col relative">
                  <h3 className="text-[2rem] font-bold mb-10">Operational Hours</h3>
                  <span className="bg-[#4FC0D6] w-[50px] h-[4px] absolute top-[40px]"></span>
                  <div className="text-[20px] font-medium text-[#646464]">
                    <p>Office Hours: 7:30 am — 5:00 pm</p>
                    <p>Website: 24hrs</p>
                  </div>
                </div>
                {/*  */}
                <div className="flex flex-col relative">
                  <h3 className="text-[2rem] font-bold mb-10">Information</h3>
                  <span className="bg-[#4FC0D6] w-[50px] h-[4px] absolute top-[40px]"></span>
                  <div className="text-[17px] font-medium text-[#646464]">
                    <p>+254 123 456 789</p>
                    <p>africanoutbacksafaris@gmail.com</p>
                  </div>
                </div>
                {/*  */}
                <div className="flex flex-col relative">
                  <h3 className="text-[2rem] font-bold mb-10">Follow Us On</h3>
                  <span className="bg-[#4FC0D6] w-[50px] h-[4px] absolute top-[40px]"></span>
                  <div className="text-[18px] font-medium text-black flex gap-5">
                  <a href="https://www.instagram.com/">
                  <AiFillInstagram className="text-[35px] hover:text-[#4FC0D6]"/>
                </a>

                <a href="https://www.instagram.com/">
                  <AiFillTwitterCircle className="text-[35px] hover:text-[#4FC0D6]" />
                </a>
                
                <a href="https://www.instagram.com/">
                  <BsFacebook className="text-[35px] hover:text-[#4FC0D6]" />
                </a>
                
                <a href="https://www.instagram.com/">
                  <SiGmail className="text-[35px] hover:text-[#4FC0D6]" />
                </a>
                  
                  </div>
                </div>
              </div>
            </div>

            {/* second col ---*/}
              <form ref={form} onSubmit={sendEmail} className="flex flex-col pt-[30px] pr-[50px] pb-[50px] pl-[45px] bg-[#f8f8f8] relative md1000:w-[65%] md1000:flex md1000:flex-col md1000:mx-auto md1000:mt-14 min800:w-[90%] min620:w-full mr-[40px]">
                <h3 className="text-[28px] font-bold mb-14">BOOK WITH US NOW! 🥹</h3>
                <span className="bg-[#4FC0D6] w-[50px] h-[4px] absolute top-[77px]"></span>
                <input
                  className="w-full py-[12px] px-[20px] h-[51px] text-[14px] border border-solid border-[#e4e4e4] outline-none mb-8"
                  placeholder="Full Name *"
                  type="text"
                  name="name"
                  required
                ></input>
                <input
                  className="w-full py-[12px] px-[20px] h-[51px] text-[14px] border border-solid border-[#e4e4e4] outline-none mb-8"
                  placeholder="Email Address *"
                  type="email"
                  name="email"
                  required
                ></input>
                <div className="flex mb-8 space-x-4">
                  <label className="flex flex-col">
                    <span className="text-[14px] text-gray-500 mb-2">From</span>
                    <input
                      className="w-full py-[12px] px-[20px] h-[51px] text-[14px] border border-solid border-[#e4e4e4] outline-none"
                      placeholder="Start Date"
                      type="date"
                      name="date-from"
                      required
                    ></input>
                  </label>
                  <label className="flex flex-col">
                    <span className="text-[14px] text-gray-500 mb-2">To</span>
                    <input
                      className="w-full py-[12px] px-[20px] h-[51px] text-[14px] border border-solid border-[#e4e4e4] outline-none"
                      placeholder="End Date"
                      type="date"
                      name="date-to"
                      required
                    ></input>
                  </label>
                </div>
                <input
                  className="w-full py-[12px] px-[20px] h-[51px] text-[14px] border border-solid border-[#e4e4e4] outline-none mb-8"
                  placeholder="Number of Adults"
                  type="number"
                  name="number-adults"
                  min="0"
                  max="10"
                  required
                ></input>
                <input
                  className="w-full py-[12px] px-[20px] h-[51px] text-[14px] border border-solid border-[#e4e4e4] outline-none mb-8"
                  placeholder="Number of Children"
                  type="number"
                  name="number-children"
                  min="0"
                  max="10"
                  required
                ></input>
                <input
                  className="w-full py-[12px] px-[20px] h-[51px] text-[14px] border border-solid border-[#e4e4e4] outline-none mb-8"
                  placeholder="Mobile Phone"
                  type="tel"
                  name="telephone"
                  required
                ></input>
                <select className="w-full py-[12px] px-[20px] h-[51px] text-[14px] border border-solid border-[#e4e4e4] outline-none mb-8" required name="destination">
                  <option>Select Destination</option>
                  <option>Nairobi</option>
                  <option>Mount Kenya</option>
                  <option>Mombasa</option>
                  <option>Diani</option>
                  <option>Massai Mara</option>
                  <option>Amboseli</option>
                  <option>Lake Nakuru</option>
                  <option>Naivasha</option>
                  <option>Daresalaam</option>
                  <option>Dodoma</option>
                  <option>Mt Kilimanjaro</option>
                  <option>Serengeti</option>
                  <option>NgoroNgoro</option>
                  <option>Tarangire</option>
                  <option>Lake Manyara</option>
                  <option>Prison Island</option>
                  <option>Paje Beach </option>
                  <option>Old Slave Market</option>
                  <option>Selous Game Reserve</option>
                  <option>Jozani Forest</option>
                  <option>House of Wonders</option>
                  <option>Spice Market</option>
                  <option>Nakupenda Beach</option>
                  <option>Uganda</option>
                  <option>Ethopia</option>
                  <option>Rwanda</option>
                  <option>Burundi</option>
                  {/* Add more destination options as needed */}
                </select>
                <select className="w-full py-[12px] px-[20px] h-[51px] text-[14px] border border-solid border-[#e4e4e4] outline-none mb-8" required name="holiday-type">
                  <option>Select Holiday Type</option>
                  <option>Honey Moon</option>
                  <option>Group Trip</option>
                  <option>Solo Expedition</option>
                  <option>Luxury Retreat</option>
                  <option>Safari Adventure</option>
                  <option></option>
                  {/* Add more holiday type options as needed */}
                </select>
                <textarea
                  placeholder="If there is any information you feel is left out kindly add at your pleasure 😜"
                  className="w-full py-[12px] px-[20px] h-[140px] text-[17px] border border-solid border-[#e4e4e4] outline-none mb-8" name="message"
                ></textarea>
                <button
                  type="submit"
                  className="text-black bg-[#4FC0D6] w-fit py-[15px] px-[30px] font-bold text-[14px] uppercase self-center mt-6"
                >
                  Book Now
                </button>
              </form>

              {isFormSubmitted && (
                <div className="bg-green-500 p-4 mt-4 rounded-md">
                  <p className="text-white font-bold">You have successfully booked!</p>
                </div>
              )}

          </div>
        </section>
    </Container>
  );
};
const Container = styled.div`
.banner{ 
  .bannerImg {
    width: 100%;
    height: 70vh;
    object-fit: cover;
    position: absolute;
    z-index: -1;
    filter: brightness(0.4);
  }
  .details {
    height: 70vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    h1 {
      color: white;
      font-size: 3em;
      font-weight: 400;
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

export default ContactUs;
