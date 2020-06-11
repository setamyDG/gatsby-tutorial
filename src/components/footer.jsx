import React from "react";
import styled from "styled-components";

const StyledFooter = styled.div`
  width: 100vw;
  height: 5rem;
  background: black;
  display: flex;
  flex-flow: row;
  justify-content: center;
  align-items: center;
  text-align: center;
`;

const StyledText = styled.p`
  color: white;
  text-transform: uppercase;
`;
const Footer = (props) => (
  <StyledFooter>
    <StyledText>{props.footerText}</StyledText>
  </StyledFooter>
);

export default Footer;
