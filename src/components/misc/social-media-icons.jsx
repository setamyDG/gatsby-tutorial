import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { bool } from 'prop-types';
import {
  faFacebookSquare,
  faInstagramSquare,
  faLinkedin,
} from '@fortawesome/free-brands-svg-icons';

const IconsContainer = styled.nav`
  position: ${({ position }) => (position ? 'absolute' : null)};
  right: 100px;
  top: 50%;
  transform: translateY(-50%);
  display: flex;
`;

const IconContainer = styled.div`
  padding: 0px 20px;
`;

const StyledIcon = styled(FontAwesomeIcon)`
  color: white;
  font-size: 20px;
  transition: 0.5s all ease-in-out;
  ${({ isWindowScroll, theme }) =>
    isWindowScroll &&
    `
  color: ${theme.colors.dark};
`}
`;

const SocialMediaIcons = ({ position, isWindowScroll }) => {
  return (
    <IconsContainer position={position}>
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="http://your_url_here.html"
      >
        <IconContainer>
          <StyledIcon icon={faFacebookSquare} isWindowScroll={isWindowScroll} />
        </IconContainer>
      </a>
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="http://your_url_here.html"
      >
        <IconContainer>
          <StyledIcon
            icon={faInstagramSquare}
            isWindowScroll={isWindowScroll}
          />
        </IconContainer>
      </a>
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="http://your_url_here.html"
      >
        <IconContainer>
          <StyledIcon icon={faLinkedin} isWindowScroll={isWindowScroll} />
        </IconContainer>
      </a>
    </IconsContainer>
  );
};

export default SocialMediaIcons;

SocialMediaIcons.propTypes = {
  position: bool,
  isWindowScroll: bool,
};
