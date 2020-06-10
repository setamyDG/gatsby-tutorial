import React from "react";
import styled from "styled-components";

const StyledFooter = styled.div`
  width: 100vw;
  height: 5rem;
  background: black;
  flex-flow: row;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
`;

const StyledText = styled.p`
  color: #e43f5a;
  text-transform: uppercase;
  font-family: "Russo One";
  margin: 1rem;
`;
const Footer = (props) => (
  <StyledFooter>
    <StyledText>{props.footerText}</StyledText>
  </StyledFooter>
);

export default Footer;
