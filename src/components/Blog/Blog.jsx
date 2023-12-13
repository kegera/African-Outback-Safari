import React from "react";
import styled from "styled-components";
import BlogBox from "./BlogBox";

const BlogContainer = styled.section`
  background-color: white;
`;

const BlogContent = styled.div`
  padding: 10rem 5%;
  display: flex;
  flex-direction: column;
  align-items: center;

  .title {
    text-align: center;
    font-size: 3.4rem;
    font-weight: bold;
    margin-bottom: 2rem;
  }
  .header{
    text-align: center;
    font-size: 4rem;
  }

  .description {
    text-align: center;
    color: #646464;
    font-size: 15px;
    font-weight: medium;
    margin-bottom: 4rem;
  }

  .blog-boxes {
    display: flex;
    gap: 2rem;
    width: 100%;
    justify-content: center;

    @media (max-width: 1200px) {
      justify-content: center;
    }
  }
`;

const Blog = () => {
  return (
    <BlogContainer id="blog">
      <BlogContent className="container page-padding py-[10rem]">
        <div className="flex flex-col text-center relative items-center">
          <p className="header text-black relative z-10 text-[15px] uppercase font-bold mb-8">
            latest blog
          </p>
          <h2 className="title text-[3.4rem] font-bold mb-4">Our Recent News</h2>
          <p className="description">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque, ducimus!
            <br />Lorem ipsum dolor sit amet consectetur.
          </p>
        </div>

        <div className="blog-boxes md1200:justify-center">
          <BlogBox
            bgClass="box1Bg"
            date="20.09.2023"
            title="Yoga For Everyone in 2023"
            description="This is a program designed to make the practice of yoga beneficial for people of all ages, abilities, and backgrounds."
          />
          <BlogBox
            bgClass="box2Bg"
            date="13.09.2023"
            title="Getting Back Into CrossFit After Vacation"
            description="Learn how to ease back into your CrossFit routine after a vacation with tips and strategies for success."
          />
          <BlogBox
            bgClass="box3Bg"
            date="28.10.2023"
            title="Meet Fitness Ambassador Grace"
            description="Get to know Grace, a fitness enthusiast and dedicated ambassador who is passionate about helping others reach their fitness goals."
          />
        </div>
      </BlogContent>
    </BlogContainer>
  );
};

export default Blog;




