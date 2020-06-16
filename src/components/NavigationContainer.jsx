import React from "react";
import styled from "styled-components";
import media from "../utils/media";
import logo from "../assets/images/gatsby-logo.png";
import ListLink from "./ListLink";

const StyledNavigationContainer = styled.nav`
  width: 750px;
  height: 7vh;
  top:0;
  background: ${({ theme }) => theme.colors.black};
  border-bottom-left-radius: 35px;
  border-bottom-right-radius: 35px;
  box-shadow: 0 5px 25px rgba(0,0,0, .5);
  z-index: 1;
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: center;
  :hover{
  cursor: pointer;
  }
  ${media.tablet`
    width: 100%;
    border-bottom-left-radius: 0;
    border-bottom-right-radius: 0;
    background: transparent;
    backdrop-filter: blur(5px);
  `}
`;

const StyledImage = styled.img`
  width: 50px; 
  height: 50px; 
  margin: 0 .5rem 0 0;
  ${media.mobile`
    display: none
  `}
 `;

const NavigationContainer = () => (
  <StyledNavigationContainer>
    <a href="https://www.gatsbyjs.org/" target="_blank">
      <StyledImage src={logo} alt="" />
    </a>
    <ListLink to="/">HOME</ListLink>
    <ListLink to="/contact">CONTACT</ListLink>
    <ListLink to="/about">ABOUT</ListLink>
    <ListLink to="/my-files">FILES</ListLink>
    <ListLink to="/slug">SLUG</ListLink>
  </StyledNavigationContainer>
);

export default NavigationContainer;
