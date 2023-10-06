import React from "react";
import styled from "styled-components";
import { useLocation, useNavigate } from "react-router-dom";

const MenuWrapper = styled.div`
  --bar-width: 60px;
  --bar-height: 8px;
  --hanburger-gap: 6px;
  --foreground: #333;
  --background: white;
  --hanburger-margin: 0.75rem;
  --animation-timing: 200ms ease-in-out;
  --hanburger-height: calc(var(--bar-height) * 3 + var(--hanburger-gap) * 2);
  position: absolute;
`;

const HandBurgerMenuLabel = styled.label`
  --x-width: calc(var(--hanburger-height) * 1.4121335);
  display: flex;
  flex-direction: column;
  gap: var(--hanburger-gap);
  width: max-content;
  position: absolute;
  top: var(--hanburger-margin);
  left: var(--hanburger-margin);
  z-index: 2;
  cursor: pointer;
  &::before,
  &::after,
  & input {
    content: "";
    width: var(--bar-width);
    height: var(--bar-height);
    background-color: var(--foreground);
    border-radius: 9999px;
    transition: opacity var(--animation-timing), width var(--animation-timing),
      rotate var(--animation-timing), translate var(--animation-timing);
    transform-origin: left center;
  }
  &:has(input:checked)::before {
    background-color: var(--background);
    rotate: 45deg;
    width: var(--x-width);
    translate: 0 calc(var(--bar-height) / -2);
  }
  &:has(input:checked)::after {
    background-color: var(--background);
    rotate: -45deg;
    width: var(--x-width);
    translate: 0 calc(var(--bar-height) / 2);
  }

  &:has(input:checked) + aside {
    translate: 0px;
  }

  &:has(input:focus-visible)::before,
  &:has(input:focus-visible)::after {
    border: 1px solid var(--background);
    box-shadow: 0 0 0 1px var(--foreground);
  }
`;

const HandBurgerMenuInput = styled.input`
  appearance: none;
  padding: 0px;
  margin: 0px;
  outline: none;
  pointer-events: none;

  &:checked {
    opacity: 0;
    width: 0;
  }

  &:focus-visible {
    border: 1px solid var(--background);
    box-shadow: 0 0 0 1px var(--foreground);
  }
`;

const HandBurgerLine = styled.span``;

const HandBurgerAside = styled.aside`
  transition: translate var(--animation-timing);
  translate: -100%;
  padding-top: calc(var(--hanburger-height) + var(--hanburger-margin) + 1rem);
  background-color: var(--foreground);
  color: var(--background);
  max-width: 10rem;
  height: 100dvh;
`;

const StyledUl = styled.ul`
  --_gap: 2rem;
  display: flex;
  margin: 0;
  padding: 0;
  list-style: none;
  align-items: start;
  height: 100%;
  flex-direction: column;
  padding-top: calc(var(--_gap) * 2);
  gap: calc(var(--_gap) * 2);
}
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

const MobileMenu = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const handleClick = (e, route) => {
    navigate(route);
  };

  return (
    <MenuWrapper>
      <HandBurgerMenuLabel>
        <HandBurgerMenuInput type="checkbox" />
      </HandBurgerMenuLabel>
      <HandBurgerAside>
        <StyledUl>
          <StyledLI
            isactive={location.pathname === "/about" ? "true" : "false"}
          >
            <StyledAnchor onClick={(e) => handleClick(e, "/about")}>
              About
            </StyledAnchor>
          </StyledLI>
          <StyledLI isactive={location.pathname === "/" ? "true" : "false"}>
            <StyledAnchor onClick={(e) => handleClick(e, "/")}>
              Home
            </StyledAnchor>
          </StyledLI>
          <StyledLI
            isactive={location.pathname === "/contact" ? "true" : "false"}
          >
            <StyledAnchor onClick={(e) => handleClick(e, "/contact")}>
              Contact Us
            </StyledAnchor>
          </StyledLI>
        </StyledUl>
      </HandBurgerAside>
    </MenuWrapper>
  );
};

export default MobileMenu;
