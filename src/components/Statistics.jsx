import React from "react";
import styled from "styled-components";

const Statistics = () => {
  return (
    <Container>
      <div className="item">
        <h3>30+</h3>
        <h4>YEARS OF EXPERIENCE</h4>
      </div>
      <div className="item">
        <h3>100+</h3>
        <h4>DESTINATIONS</h4>
      </div>
      <div className="item">
        <h3>5 STAR</h3>
        <h4>CUSTOMER REVIEWS</h4>
      </div>
      <div className="item">
        <h3>100+</h3>
        <h4>EXCLUSIVE DEALS</h4>
      </div>
    </Container>
  );
};
const Container = styled.div`
  padding: 2em 4%;
  display: flex;
  justify-content: center;
  gap: 3em;
  flex-wrap: wrap;
  .item {
    display: flex;
    gap: 10px;
    align-items: center;
    h3 {
      color: var(--primaryColor);
    }
    h4 {
      font-weight: 500;
      color: gray;
    }
  }
`;

export default Statistics;
