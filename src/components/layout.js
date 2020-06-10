import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import styled from "styled-components";
import ListLink from "./ListLink";
import logo from "../assets/images/gatsby-logo.png";
import media from "../utils/media";

const StyledContainer = styled.div`
 height: 100vh;
 width: 100%;
 display: flex;
 align-items: center;
 text-align: center;
 flex-flow: column;
`;
const StyledHeader = styled.div`
  width: 100%;
  height: 35vh;
  background: ${(props) => `url(${props.background}) no-repeat top center`};;
  background-size: cover;
  background-position-y: 55%;
  flex-flow: column;
  display: flex;
  align-items: center;
  z-index: -1;
  position: absolute;
`;

const StyledNavigationContainer = styled.div`
  width: 55%;
  height: 7vh;
  top:0;
  background: black;
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

const StyledTitle = styled.h1`
  font-weight: bold;
  color: white;
  font-family: "Russo One";
  margin-top: 8rem;
  border-bottom: 1px solid white;
  font-size: 50px;
  text-transform: uppercase;
`;

const StyledSubtitle = styled.p`
  font-weight: bold;
  color: white;
  text-transform: uppercase;
  font-size: 20px;
  font-family: "Russo One";
`;

const StyledName = styled.p`
  font-size: 16px;
  color: white;
  font-weight: bold;
  text-transform: uppercase;
  font-family: "Russo One";
`;

const StyledImage = styled.img`
  width: 50px; 
  height: 50px; 
  margin: 0rem .5rem 0 0;
 `;

const StyledWaveDiv = styled.div`
width: 100vw;
height: 5rem;
margin-top: 10px;
`;

export default function Layout({ children }, props) {
  const data = useStaticQuery(
    graphql`
        query {
            site {
                siteMetadata {
                    title
                }
            }
        }
    `,
  );

  return (
    <StyledContainer>
      <StyledNavigationContainer>
        <a href="https://www.gatsbyjs.org/" target="_blank">
          <StyledImage src={logo} alt="" />
        </a>
        <ListLink to="/">HOME</ListLink>
        <ListLink to="/contact">CONTACT</ListLink>
        <ListLink to="/about">ABOUT</ListLink>
        <ListLink to="/my-files">FILES</ListLink>
      </StyledNavigationContainer>
      <StyledHeader background="https://images8.alphacoders.com/679/679478.jpg">
        <StyledTitle>{data.site.siteMetadata.title}</StyledTitle>
        <StyledSubtitle>-Codetain tutorial 2020-</StyledSubtitle>
        <StyledName>Daniel Gola</StyledName>
        <StyledWaveDiv>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
            <path fill="#2d112a" fillOpacity="1" d="M0,64L48,90.7C96,117,192,171,288,176C384,181,480,139,576,112C672,85,768,75,864,90.7C960,107,1056,149,1152,160C1248,171,1344,149,1392,138.7L1440,128L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z" />
          </svg>
        </StyledWaveDiv>
      </StyledHeader>
      {children}
    </StyledContainer>
  );
}
