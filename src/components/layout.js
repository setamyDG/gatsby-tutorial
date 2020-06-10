import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import styled from "styled-components";
import ListLink from "./ListLink";
import logo from "../assets/images/gatsby-logo.png";

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
  height: 40vh;
  background: ${props => `url(${props.background}) no-repeat top center`};;
  background-size: cover;
  background-position-y: 30%;
  flex-flow: column;
  display: flex;
  align-items: center;
`;

const StyledNavigationContainer = styled.div`
  width: 35%;
  height: 5vh;
  top:0;
  background: black;
  border-bottom-left-radius: 35px;
  border-bottom-right-radius: 35px;
  box-shadow: 0 5px 25px rgba(0,0,0, .5);
`;
const StyledTitle = styled.h1`
  font-weight: bold;
  color: white;
  font-family: Georgia;
  margin-top: 5rem;
  border-bottom: 1px solid white;
  font-size: 50px;
  text-transform: uppercase;
`;

const StyledSubtitle = styled.p`
  font-weight: bold;
  color: white;
  text-transform: uppercase;
  font-size: 20px;
`;

const StyledName = styled.p`
  font-size: 16px;
  color: white;
  font-weight: bold;
  text-transform: uppercase;
`;

const StyledCircle = styled.div`
  background: white;
  height: 200px;
  width: 200px;
  border-radius: 100px;
  margin-top: 25rem;
  position: absolute;
`;

const StyledImage = styled.img`
  width: 200px; 
  height: 200px; 
`;

export default function Layout({children}, props) {
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
      <StyledHeader background="https://images8.alphacoders.com/679/679478.jpg">
        <StyledNavigationContainer>
          <ListLink to="/">HOME</ListLink>
          <ListLink to="/contact">CONTACT</ListLink>
          <ListLink to="/about">ABOUT</ListLink>
          <ListLink to="/challange-page">CHALLANGE</ListLink>
        </StyledNavigationContainer>
        <StyledTitle>{data.site.siteMetadata.title}</StyledTitle>
        <StyledSubtitle>-Codetain tutorial 2020-</StyledSubtitle>
        <StyledName>Daniel Gola</StyledName>
      </StyledHeader>
      <StyledCircle>
        <StyledImage src={logo} alt="logo" />
      </StyledCircle>
      {children}
    </StyledContainer>
  );
}
