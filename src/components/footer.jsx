import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const StyledFooter = styled.footer`
  width: 100vw;
  height: 100px;
  background: ${({ theme }) => theme.colors.black};
  display: flex;
  flex-flow: row;
  justify-content: center;
  align-items: center;
`;

const StyledText = styled.p`
  color: ${({ theme }) => theme.colors.white};
  text-transform: uppercase;
`;

const Footer = ({ footerText }) => (
  <StyledFooter>
    <StyledText>{footerText}</StyledText>
  </StyledFooter>
);

export default Footer;

Footer.defaultProps = {
  footerText: "Gatsby.js Tutorial",
};

Footer.propTypes = {
  footerText: PropTypes.string,
};
