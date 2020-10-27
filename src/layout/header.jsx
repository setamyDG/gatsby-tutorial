// flex-shrink: 0;

import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import SocialMediaIcons from '../components/misc/social-media-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowAltCircleUp } from '@fortawesome/free-solid-svg-icons';

const Container = styled.div`
  background: transparent;
  height: 75px;
  width: 100%;
  flex-shrink: 0;
  position: sticky;
  top: 0;
  z-index: 9999;
  transition: 0.5s all ease-in-out;

  ${({ isWindowScroll, theme }) =>
    isWindowScroll &&
    `
  top: 0;
  background: ${theme.colors.white};
  box-shadow: 0px 10px 20px 0px rgba(0,0,0,0.1);
`}
`;

const LogoContainer = styled.div`
  position: absolute;
  left: 150px;
  top: 50%;
  transform: translateY(-50%);
  display: flex;
`;

const DContainerSymbol = styled(LogoContainer)`
  left: 70px;
  background: white;
  padding: 0px 20px;
  transition: 0.5s all ease-in-out;
  ${({ isWindowScroll, theme }) =>
    isWindowScroll &&
    `
  background: ${theme.colors.dark};
`}
`;

const Symbol = styled.p`
  font-size: 1.7rem;
  color: #212121;
  transition: 0.5s all ease-in-out;
  ${({ isWindowScroll, theme }) =>
    isWindowScroll &&
    `
  color: ${theme.colors.white};
`}
`;

const StyledName = styled.p`
  color: white;
  font-size: 1.2rem;
  transition: 0.5s all ease-in-out;
  ${({ isWindowScroll, theme }) =>
    isWindowScroll &&
    `
  color: ${theme.colors.dark};
`}
`;

const ScrollToTop = styled.div`
  position: absolute;
  top: 50%;
  right: 65px;
  transform: translateY(-50%);
  display: none;
  transition: 0.5s all ease-in-out;
  ${({ isWindowScroll }) =>
    isWindowScroll &&
    `
  display: block;
`}

  :hover {
    cursor: pointer;
  }
`;

const ScrollToTopIcon = styled(FontAwesomeIcon)`
  font-size: 20px;
  color: ${({ theme }) => theme.colors.dark};
`;

const Header = () => {
  const [yPosition, setYposition] = useState(0);

  useEffect(() => {
    window.addEventListener('scroll', handleWindowScroll);
    return () => {
      window.removeEventListener('scroll', handleWindowScroll);
    };
  }, []);

  const handleWindowScroll = () => {
    setYposition(window.scrollY);
  };

  const handleBackToTop = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth',
    });
  };

  return (
    <Container isWindowScroll={yPosition > 0}>
      <DContainerSymbol isWindowScroll={yPosition > 0}>
        <Symbol isWindowScroll={yPosition > 0}>Ð</Symbol>
      </DContainerSymbol>
      <LogoContainer>
        <StyledName isWindowScroll={yPosition > 0}>Daniel Gola</StyledName>
      </LogoContainer>
      <SocialMediaIcons position isWindowScroll={yPosition > 0} />
      <ScrollToTop isWindowScroll={yPosition > 150} onClick={handleBackToTop}>
        <ScrollToTopIcon icon={faArrowAltCircleUp} />
      </ScrollToTop>
    </Container>
  );
};

export default Header;
