import { Link } from "react-router-dom";
import styled from "styled-components";

function BlogBox({ date, title, description }) {
  const goTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "none",
    });
  };

  return (
    <Container>
      <div className="blog__info">
        {/* date */}
        <p className="blog__date">
          {date}
        </p>
        {/* title */}
        <h3 className="title__blog">{title}</h3>
        {/* desc */}
        <p className="text-[15px] text-[#646464] font-medium">{description}</p>
        {/* blog cta */}
        <Link
          to="/blog"
          onClick={goTop}
          className="btn__readmore"
        >
          Read more
        </Link>
      </div>
    </Container>
  );
}

const Container = styled.div`
  .blog__date {
    font-size: 15px;
    font-weight: bold;
    color: #323232;
    border: 1px solid #323232;
    border-radius: 30px;
    padding: 5px;
    margin: 0 auto 6px;
    display: inline-block;
  }

  .title__blog {
    font-size: 22px;
    font-weight: bold;
    padding-top: 5px;
    padding-bottom: 5px;
  }

  .btn__readmore {
    text-transform: uppercase;
    font-weight: bold;
    text-decoration: none;
    background-color: lightblue;
    color: black;
    text-align: center;
    font-size: 15px;
    padding: 15px 20px;
    border-radius: 25px;
    margin-top: 20px; /* Adjust the margin-top value as needed to create space */
    display: inline-block; /* Make sure it's a block-level element for the margin-top to work */
    transition: background-color 0.3s, color 0.3s, margin-top 0.3s;
  }

  .btn__readmore:hover {
    background-color: white;
    color: black;
    border: 2.5px solid lightblue;
  }

  .blog__info {
    box-shadow: 0 0 2rem rgba(0, 0, 0, 0.1);
    padding-left: 3rem;
    padding-right: 3rem;
    padding-top: 5rem;
    padding-bottom: 5rem;
  }
`;

export default BlogBox;
