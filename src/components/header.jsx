import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import { theme } from "../utils/theme";
import media from "../utils/media";

const StyledHeader = styled.div`
  width: 100vw;
  height: 500px;
  background: ${(props) => `url(${props.background}) no-repeat top center`};;
  background-size: cover;
  background-position-y: 55%;
  flex-flow: column;
  display: flex;
  align-items: center;
  z-index: -1;
  position: absolute;
`;

const StyledTitle = styled.h1`
  font-weight: ${({ theme }) => theme.font.bold};
  font-family: "Russo One";
  color: ${({theme}) => theme.colors.white};
  margin-top: 200px;
  border-bottom: 1px solid white;
  font-size: 50px;
  text-transform: uppercase;
`;

const StyledSubtitle = styled.p`
  font-weight: ${({ theme }) => theme.font.normal};
  color: ${({theme}) => theme.colors.white};
  text-transform: uppercase;
  font-size: 20px;
`;

const StyledName = styled(StyledSubtitle)`
  font-size: 16px;
  font-weight: ${({ theme }) => theme.font.normal};
`;

const StyledSvg = styled.svg`
  width: 100vw;
  height: auto;
  display: flex;
  margin-top: 55px;
  ${media.mobile`
    margin-top: 45px;
  `}
  ${media.tablet`
    margin-top: 65px;
  `}
`;

const Header = (props) => (
  <StyledHeader background={props.background}>
    <StyledTitle>{props.title}</StyledTitle>
    <StyledSubtitle>-Codetain tutorial 2020-</StyledSubtitle>
    <StyledName>Daniel Gola</StyledName>
    <div>
      <StyledSvg xmlns={theme.waveInfo.xmlns} viewBox="0 0 1440 185">
        <path fill={theme.waveInfo.waveColor} fillOpacity="1" d={theme.waveInfo.waveTrace} />
      </StyledSvg>
    </div>
  </StyledHeader>
);

export default Header;

Header.defaultProps = {
  title: "Gatsby.js",
  background: "",
};

Header.propTypes = {
  title: PropTypes.string,
  background: PropTypes.string,
};
