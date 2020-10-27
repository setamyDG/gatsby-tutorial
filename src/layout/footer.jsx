import React from 'react';
import styled from 'styled-components';
import SocialMediaIcons from '../components/misc/social-media-icons';

const Container = styled.div`
  background: ${({ theme }) => theme.colors.dark};
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 35px;
  color: white;
  flex-flow: column;
  border-top: 1px solid #ddd;
`;

const StyledLogo = styled.p`
  font-size: 1.3rem;
  margin-bottom: 25px;
`;

const StyledSocialMediaIcons = styled(SocialMediaIcons)``;

const TextContainer = styled.div`
  margin-top: 20px;
  text-align: center;
`;

const Footer = () => (
  <Container>
    <StyledLogo>D - G</StyledLogo>
    <StyledSocialMediaIcons />
    <TextContainer>
      <p>Privacy policy</p>
      <p>© 2020 Daniel Gola. All rights reserved</p>
    </TextContainer>
  </Container>
);

export default Footer;
