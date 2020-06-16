import React from "react";
import styled from "styled-components";
import { Link } from "gatsby";
import GlobalStyle from "../golbalStyle/style";

const StyledContainer = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: url("https://images8.alphacoders.com/679/679478.jpg") center center no-repeat;
  background-size: cover;
  flex-flow: column;
`;

const StyledTitle = styled.main`
  color: white;
  font-size: 72px;
  margin-top: -350px;
  border-bottom: 1px solid white;
`;
const StyledNumber = styled(StyledTitle)`
  font-size: 450px;
  color: black;
  opacity: .3;
  backdrop-filter: blur(0px);
  border-bottom: 0;
  margin-top: -350px;
`;

const StyledLinkContainer = styled.div`
  height: 100px;
  width: 270px;
  display: flex;
  align-items: center;
  margin-top: 100px;
  justify-content: center;
  text-align: center;
  background: transparent;
  border: 1px solid #e43f5a;
  backdrop-filter: blur(5px);
    :hover {
     cursor:pointer;
     box-shadow: 0 4px 5px rgba(0,0,0, .3);
  }
`;

const StyledLink = styled(Link)`
  color: #e43f5a;;
  font-size: 35px;
  text-decoration: none;
  
`;

export default function NoPage() {
  return (
    <>
      <GlobalStyle />
      <StyledContainer>
        <StyledNumber>404</StyledNumber>
        <StyledTitle>PAGE NOT FOUND</StyledTitle>
        <StyledLinkContainer>
          <StyledLink to="/">HOME</StyledLink>
        </StyledLinkContainer>
      </StyledContainer>
    </>
  );
}
