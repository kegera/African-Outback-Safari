import React from "react";
import styled from "styled-components";
/* import { Link } from "react-router-dom"; */
import { motion } from "framer-motion";
import { FaLayerGroup } from "react-icons/fa6";
import { CiSearch } from "react-icons/ci";
import { FaChevronRight } from "react-icons/fa";
import bannerImg from "../assets/otherPagesImages/ht-bannerImg.jpg";
import blog1 from "../assets/blogPageImages/blog1.jpg"



function Blog() {
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
                Blog
              </h1>
          </motion.div>
          
        </div>
        <div className="blog py-[10rem] gap-16 page-padding grid grid-cols-[64fr_35fr] md1000:grid-cols-1 md1000:gap-32">
          {/* BLOG DETAILS */}
          <div className="blog-lists flex flex-col gap-28 ml-10">
            <div className="blog-list">
              <img src={blog1}alt="" />
              <p className="flex font-medium text-[14px] text-[#646464] pt-8 pb-4">
                <FaLayerGroup className="text-[#4FC0D6] text-[16px]"/>
                &nbsp; By <b>Admin</b> | March 11, 2023 | Travel
              </p>
              <h2 className="blog__title text-[3rem] font-bold mb-6">Travel around Kenya</h2>
              <p className="blog__info font-medium text-[16px] text-[#646464] mb-24">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam voluptatum molestias facere rem ea. Excepturi magni vel facilis, fugit, nemo provident veniam laboriosam est voluptatibus facere, labore assumenda corporis officiis.
              </p>
              

            </div>
            
            <div className="blog-list">
              <img src={blog1}alt="" />
              <p className="flex font-medium text-[14px] text-[#646464] pt-8 pb-4">
                <FaLayerGroup className="text-[#4FC0D6] text-[16px]"/>
                &nbsp; By <b>Admin</b> | March 11, 2023 | Travel
              </p>
              <h2 className="blog__title text-[3rem] font-bold mb-6">Travel around Kenya</h2>
              <p className="blog__info font-medium text-[16px] text-[#646464] mb-24">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam voluptatum molestias facere rem ea. Excepturi magni vel facilis, fugit, nemo provident veniam laboriosam est voluptatibus facere, labore assumenda corporis officiis.
              </p>
              

            </div>
            
            <div className="blog-list">
              <img src={blog1}alt="" />
              <p className="flex font-medium text-[14px] text-[#646464] pt-8 pb-4">
                <FaLayerGroup className="text-[#4FC0D6] text-[16px]"/>
                &nbsp; By <b>Admin</b> | March 11, 2023 | Travel
              </p>
              <h2 className="blog__title text-[3rem] font-bold mb-6">Travel around Kenya</h2>
              <p className="blog__info font-medium text-[16px] text-[#646464] mb-24">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam voluptatum molestias facere rem ea. Excepturi magni vel facilis, fugit, nemo provident veniam laboriosam est voluptatibus facere, labore assumenda corporis officiis.
              </p>
              

            </div>
            
            <div className="blog-list">
              <img src={blog1}alt="" />
              <p className="flex font-medium text-[14px] text-[#646464] pt-8 pb-4">
                <FaLayerGroup className="text-[#4FC0D6] text-[16px]"/>
                &nbsp; By <b>Admin</b> | March 11, 2023 | Travel
              </p>
              <h2 className="blog__title text-[3rem] font-bold mb-6">Travel around Kenya</h2>
              <p className="blog__info font-medium text-[16px] text-[#646464] mb-24">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam voluptatum molestias facere rem ea. Excepturi magni vel facilis, fugit, nemo provident veniam laboriosam est voluptatibus facere, labore assumenda corporis officiis.
              </p>
              

            </div>
            
            <div className="blog-list">
              <img src={blog1}alt="" />
              <p className="flex font-medium text-[14px] text-[#646464] pt-8 pb-4">
                <FaLayerGroup className="text-[#4FC0D6] text-[16px]"/>
                &nbsp; By <b>Admin</b> | March 11, 2023 | Travel
              </p>
              <h2 className="blog__title text-[3rem] font-bold mb-6">Travel around Kenya</h2>
              <p className="blog__info font-medium text-[16px] text-[#646464] mb-24">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam voluptatum molestias facere rem ea. Excepturi magni vel facilis, fugit, nemo provident veniam laboriosam est voluptatibus facere, labore assumenda corporis officiis.
              </p>
              

            </div>
            
            <div className="blog-list">
              <img src={blog1}alt="" />
              <p className="flex font-medium text-[14px] text-[#646464] pt-8 pb-4">
                <FaLayerGroup className="text-[#4FC0D6] text-[16px]"/>
                &nbsp; By <b>Admin</b> | March 11, 2023 | Travel
              </p>
              <h2 className="blog__title text-[3rem] font-bold mb-6">Travel around Kenya</h2>
              <p className="blog__info font-medium text-[16px] text-[#646464] mb-24">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam voluptatum molestias facere rem ea. Excepturi magni vel facilis, fugit, nemo provident veniam laboriosam est voluptatibus facere, labore assumenda corporis officiis.
              </p>
              

            </div>
            

          </div>

          {/* SIDE-BAR */}
          <div className="blog__right mr-11">
            {/* FORM */}
            <form action="" className="flex">
              <input className="form__input border-solid border-[1px] text-[#444] text-[16px] font-medium h-[60px] py-[5px] px-[20px] w-full rounded-tl-xl rounded-bl-xl outline-none" type="search" placeholder="Search..." />
              <button type="submit">
                <CiSearch className="search__button text-white text-[23px] h-[60px] w-[60px] rounded-br-xl rounded-tr-xl pt-[18px] bg-[#4FC0D6]"/>
              </button>
            </form>

            {/* CATEGORIES */}
            <div className="flex flex-col bg-[#f8f8f8] my-[35px] p-[30px]"> 
              <p className="text-[18px] text-black font-bold mb-5">
                Categories
              </p>
              
              <span className="w-[40px] h-[3.5px] bg-[#4FC0D6]"></span>
              <ul className="categries__items text-[16px] text-[#7e7e7e] font-medium mt-10">
                <li className="categories__item cursor-pointer flex justify-between border-b border-[#dcd9d9] pb-6  mb-10 hover:text-[#4FC0D6] ease-in duration-200">
                    <p className="flex text-[17px]">
                    <FaChevronRight className="text-[15px]" />
                    &nbsp; Traveling
                    </p>
                  <span>(4)</span>
                </li>
              
                <li className="categories__item cursor-pointer flex justify-between border-b border-[#dcd9d9] pb-6  mb-10 hover:text-[#4FC0D6] ease-in duration-200">
                    <p className="flex text-[17px]">
                    <FaChevronRight className="text-[15px]" />
                    &nbsp; Traveling
                    </p>
                  <span>(4)</span>
                </li>
              
                <li className="categories__item cursor-pointer flex justify-between border-b border-[#dcd9d9] pb-6  mb-10 hover:text-[#4FC0D6] ease-in duration-200">
                    <p className="flex text-[17px]">
                    <FaChevronRight className="text-[15px]" />
                    &nbsp; Traveling
                    </p>
                  <span>(4)</span>
                </li>
              
                <li className="categories__item cursor-pointer flex justify-between border-b border-[#dcd9d9] pb-6  mb-10 hover:text-[#4FC0D6] ease-in duration-200">
                    <p className="flex text-[17px]">
                    <FaChevronRight className="text-[15px]" />
                    &nbsp; Traveling
                    </p>
                  <span>(4)</span>
                </li>
              
                <li className="categories__item cursor-pointer flex justify-between border-b border-[#dcd9d9] pb-6  mb-10 hover:text-[#4FC0D6] ease-in duration-200">
                    <p className="flex text-[17px]">
                    <FaChevronRight className="text-[15px]" />
                    &nbsp; Traveling
                    </p>
                  <span>(4)</span>
                </li>
              
                <li className="categories__item cursor-pointer flex justify-between border-b border-[#dcd9d9] pb-6  mb-10 hover:text-[#4FC0D6] ease-in duration-200">
                    <p className="flex text-[17px]">
                    <FaChevronRight className="text-[15px]" />
                    &nbsp; Traveling
                    </p>
                  <span>(4)</span>
                </li>
              
                
  
              </ul>
            </div>

                {/* RECENT BLOG */}
            <div className="recents flex flex-col bg-[#f8f8f8] my-[35px] p-[30px]">
              <p className="text-[18px] text-black font-bold mb-5">
                Recent post
              </p>
              <span className="w-[40px] h-[3.5px] bg-[#4FC0D6] mb-7"></span>

              <div className="recent__blogs flex flex-col gap-7">

                <div className="recent__blog flex gap-8">
                  <img src="" alt="" className="w-[5rem]"/>
                  <div className="flex flex-col gap-4 justify-center">
                    <p className="recent__date text-[14px] text-[#646464] font-medium">
                      December 5,2023
                    </p>
                    <p className="recent__text text-[16px] text-black hover:text-[#4FC0D6] ease-in duration-200 cursor-pointer font-bold">
                      Traveling made cheaper
                    </p>
                  </div>
                </div>
            
                <div className="recent__blog flex gap-8">
                  <img src="" alt="" className="w-[5rem]"/>
                  <div className="flex flex-col gap-4 justify-center">
                    <p className="recent__date text-[14px] text-[#646464] font-medium">
                      December 5,2023
                    </p>
                    <p className="recent__text text-[16px] text-black hover:text-[#4FC0D6] ease-in duration-200 cursor-pointer font-bold">
                      Traveling made cheaper
                    </p>
                  </div>
                </div>
            
                <div className="recent__blog flex gap-8">
                  <img src="" alt="" className="w-[5rem]"/>
                  <div className="flex flex-col gap-4 justify-center">
                    <p className="recent__date text-[14px] text-[#646464] font-medium">
                      December 5,2023
                    </p>
                    <p className="recent__text text-[16px] text-black hover:text-[#4FC0D6] ease-in duration-200 cursor-pointer font-bold">
                      Traveling made cheaper
                    </p>
                  </div>
                </div>
            
                <div className="recent__blog flex gap-8">
                  <img src="" alt="" className="w-[5rem]"/>
                  <div className="flex flex-col gap-4 justify-center">
                    <p className="recent__date text-[14px] text-[#646464] font-medium">
                      December 5,2023
                    </p>
                    <p className="recent__text text-[16px] text-black hover:text-[#4FC0D6] ease-in duration-200 cursor-pointer font-bold">
                      Traveling made cheaper
                    </p>
                  </div>
                </div>
            
                <div className="recent__blog flex gap-8">
                  <img src="" alt="" className="w-[5rem]"/>
                  <div className="flex flex-col gap-4 justify-center">
                    <p className="recent__date text-[14px] text-[#646464] font-medium">
                      December 5,2023
                    </p>
                    <p className="recent__text text-[16px] text-black hover:text-[#4FC0D6] ease-in duration-200 cursor-pointer font-bold">
                      Traveling made cheaper
                    </p>
                  </div>
                </div>
            
                <div className="recent__blog flex gap-8">
                  <img src="" alt="" className="w-[5rem]"/>
                  <div className="flex flex-col gap-4 justify-center">
                    <p className="recent__date text-[14px] text-[#646464] font-medium">
                      December 5,2023
                    </p>
                    <p className="recent__text text-[16px] text-black hover:text-[#4FC0D6] ease-in duration-200 cursor-pointer font-bold">
                      Traveling made cheaper
                    </p>
                  </div>
                </div>
            
               

              </div>


            </div>


            {/* POPULAR TAGS */}

                 
            <div className="container__popular flex flex-col bg-[#f8f8f8] my-[35px] p-[30px]">
              <p className="text-[18px] text-black font-bold mb-5">
                Popular tags
              </p>
              <span className="w-[40px] h-[3.5px] bg-[#4FC0D6] mb-7"></span>
              <div className="popular__tags flex gap-3 text-[16px] text-[#646464] font-medium flex-wrap">
                <p className="bg-white py-[4px] px-[14px] hover:text-[#4FC0D6] ease-in duration-200 cursor-pointer">
                  #Safari
                </p>

                <p className="bg-white py-[4px] px-[14px] hover:text-[#4FC0D6] ease-in duration-200 cursor-pointer">
                  #Safari
                </p>

                <p className="bg-white py-[4px] px-[14px] hover:text-[#4FC0D6] ease-in duration-200 cursor-pointer">
                  #Safari
                </p>

                <p className="bg-white py-[4px] px-[14px] hover:text-[#4FC0D6] ease-in duration-200 cursor-pointer">
                  #Safari
                </p>

                <p className="bg-white py-[4px] px-[14px] hover:text-[#4FC0D6] ease-in duration-200 cursor-pointer">
                  #Safari
                </p>

                <p className="bg-white py-[4px] px-[14px] hover:text-[#4FC0D6] ease-in duration-200 cursor-pointer">
                  #Safari
                </p>

                <p className="bg-white py-[4px] px-[14px] hover:text-[#4FC0D6] ease-in duration-200 cursor-pointer">
                  #Safari
                </p>

                
              </div>

              {/* BANNER */}
              <div className="discount__banner w-full h-[56rem] relative">
                <p className="absolute text-[34px] font-bold uppercase top-16 left-10 z-[2]">
                  African
                  Outback Safari
                </p>
                <span className="banner-shape top-14 left-0 z-[1] bg-white absolute w-[26rem] h-[60px]"></span>

                <div className="text-black flex flex-col absolute top-[10rem] left-10">
                  <p className="text-[64px] font-bold">34%</p>
                  <p className="text-[20px] font-bold -mt-[10px]">Flat Discount</p>
                </div>
              </div>
            </div>

          </div>

        
       

     


        </div>
      </section>
      
      
    </Container>
  );
}

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
  .blog {
    /* display: flex;
    padding: 5rem 0; */
  }
  .blog-lists {
   /*  flex: 6;
    margin-right: 10%; */
  }
  .blog__right {
    /* flex: 3;
    display: flex;
    flex-direction: column; */
  }
  .banner-shape {
    -webkit-clip-path: polygon(0 0, 100% 0, 88% 100%, 0% 100%);
    clip-path: polygon(0 0, 100% 0, 88% 100%, 0% 100%);
  }
  
`;

export default Blog;
