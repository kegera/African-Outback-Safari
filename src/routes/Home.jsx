import React, { useEffect } from "react";
import styled from "styled-components";
import Banner from "../components/Banner";
import Blog from "../components/Blog/Blog"
import Statistics from "../components/Statistics";
import PopluarDestinations from "../components/PopluarDestinations";
import OurServices from "../components/OurServices";
import RecomendedDestinations from "../components/RecomendedDestinations";
import Testimonials from "../components/Testimonials";
import ContactUsComp from "../components/ContactUsComp";
import Offers from "../components/Offers";

const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <Container>
      <Banner />
      <Statistics />
      <PopluarDestinations />
      <OurServices />
      <RecomendedDestinations />
      <Offers />
      <Testimonials />
      <Blog/>
      <ContactUsComp />
    </Container>
  );
};
const Container = styled.div`
  width: 100%;
`;

export default Home;
