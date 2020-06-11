import React from "react";
import styled from "styled-components";
import { theme } from "../utils/theme";

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

const StyledTitle = styled.h1`
  font-weight: ${({theme}) => theme.font.bold};
  font-family: "Russo One";
  color: white;
  margin-top: 6rem;
  border-bottom: 1px solid white;
  font-size: 50px;
  text-transform: uppercase;
`;

const StyledSubtitle = styled.p`
  font-weight: ${({theme}) => theme.font.normal};
  color: white;
  text-transform: uppercase;
  font-size: 20px;
`;

const StyledName = styled(StyledSubtitle)`
  font-size: 16px;
  font-weight: ${({theme}) => theme.font.normal};
`;

const StyledWaveDiv = styled.div`
width: 100vw;
height: 5rem;
margin-top: -10px;
`;

const Header = (props) => (
  <StyledHeader background={props.background}>
    <StyledTitle>{props.title}</StyledTitle>
    <StyledSubtitle>-Codetain tutorial 2020-</StyledSubtitle>
    <StyledName>Daniel Gola</StyledName>
    <StyledWaveDiv>
      <svg xmlns={theme.waveInfo.xmlns} viewBox="0 0 1440 320">
        <path fill={theme.waveInfo.waveColor} fillOpacity="1" d={theme.waveInfo.waveTrace} />
      </svg>
    </StyledWaveDiv>
  </StyledHeader>
);

export default Header;
