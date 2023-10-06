import React from "react";
import styled from "styled-components";
import { useLocation, useNavigate } from "react-router-dom";

const StyledHeader = styled.header`
  background: black;
  color: white;
  height: 5rem;
  font-size: 2rem;
`;

const StyledUl = styled.ul`
  --_gap: 2rem;
  display: flex;
  margin: 0;
  padding: 0;
  list-style: none;
  align-items: center;
  height: 100%;
  justify-content: space-around;
`;

const StyledLI = styled.li.attrs((props) => ({
  isactive: props.isactive,
}))`
  position: relative;
  padding-inline: calc(var(--_gap) / 2);

  &:after {
    content: "";
    position: absolute;
    height: 3px;
    width: 100%;
    left: 0;
    bottom: -0.5rem;
    background: orangered;
    scale: 0 1;
    transition: scale 300ms;
  }

  &:hover:after,
  &:active:after {
    scale: 1 1;
  }

  &:after {
    scale: ${(props) => (props.isactive === "true" ? `1 1` : ``)};
  }

  & a {
    opacity: ${(props) => (props.isactive === "true" ? `1` : `0.7`)};
  }
`;

const StyledAnchor = styled.a`
  opacity: 0.7;
  text-decoration: none;
  text-transform: uppercase;
  font-weight: 700;
  position: relative;
  color: white;

  &:hover,
  &:active,
  &:focus-visible {
    opacity: 1;
    color: white;
    cursor: pointer;
  }

  @media (pointer: fine) {
    &:hover,
    &:active,
    &:focus-visible {
      opacity: 1;
      cursor: pointer;
    }
  }
`;

const DesktopMenu = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const handleClick = (e, route) => {
    navigate(route);
  };

  return (
    <StyledHeader>
      <StyledUl>
        <StyledLI isactive={location.pathname === "/about" ? "true" : "false"}>
          <StyledAnchor onClick={(e) => handleClick(e, "/about")}>
            About
          </StyledAnchor>
        </StyledLI>
        <StyledLI isactive={location.pathname === "/" ? "true" : "false"}>
          <StyledAnchor onClick={(e) => handleClick(e, "/")}>Home</StyledAnchor>
        </StyledLI>
        <StyledLI
          isactive={location.pathname === "/contact" ? "true" : "false"}
        >
          <StyledAnchor onClick={(e) => handleClick(e, "/contact")}>
            Contact Us
          </StyledAnchor>
        </StyledLI>
      </StyledUl>
    </StyledHeader>
  );
};

export default DesktopMenu;
