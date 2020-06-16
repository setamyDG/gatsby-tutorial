import React from "react";
import { createGlobalStyle } from "styled-components";

const StyledGlobalStyle = createGlobalStyle`
  *{
    box-sizing: border-box;
  }
  html{
    overflow: hidden;
  }
  body {
    font-family: "Russo One";   //mimo że nadałem font-family globalnie to i tak w każdym "StyledTitle/StyledSubtitle" musiałem to nadpisać bo inaczej nie działało / dodatkowo jest plugin google-fotns
    top:0;
    left: 0;
    margin: 0;
    padding: 0;
    font-size: 16px;
  }
`;

const GlobalStyle = () => (
  <StyledGlobalStyle />
);
export default GlobalStyle;
