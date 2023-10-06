import React from "react";
import styled from "styled-components";

const StyledWrapper = styled.div`
  display: flex;
  align-items: center;
  height: 80dvh;
  justify-content: center;
  font-size: 3rem;
  font-weight: 700;
`;

const Home = () => {
  const handleClick = () => {
    console.log("Clicked");
  };

  return <StyledWrapper>Home</StyledWrapper>;
};

export default Home;
