import React from 'react';
import styled from 'styled-components';
import BlogSection from './blog-section';
import CustomButton from '../misc/custom-button';
import Line from '../../static/line.svg';
import OnlyLine from '../../static/lineOnly.svg';

const Container = styled.div`
  width: 100%;
  height: calc(100vh - 75px);
  display: flex;
  align-items: center;
  position: relative;
`;

const ContentContainer = styled.p`
  padding: 0px 300px;
  margin-top: -100px;
  display: flex;
  flex-wrap: wrap;
  flex-flow: column;
`;

const BottomInformation = styled.div`
  position: absolute;
  bottom: 0px;
  left: 50%;
  transform: translateX(-50%);
  :hover {
    cursor: pointer;
  }
`;

const HelloOrName = styled.p`
  font-size: 7rem;
  color: white;
  letter-spacing: 0.2em;
`;

const SubTitleContainer = styled.div`
  display: flex;
  align-items: center;
  margin-top: -20px;
`;

const Subtitle = styled.p`
  color: white;
  margin-left: 20px;
  font-size: 1.3rem;
`;

const HomeContent = () => {
  const scrollPage = () => {
    window.scrollBy({
      top: 1000,
      behavior: 'smooth',
    });
  };

  return (
    <>
      <Container>
        <ContentContainer>
          <HelloOrName>Hello</HelloOrName>
          <SubTitleContainer>
            <OnlyLine />
            <Subtitle>Front-end Developer</Subtitle>
          </SubTitleContainer>
          <CustomButton>Check my blog</CustomButton>
        </ContentContainer>
        <BottomInformation onClick={scrollPage}>
          <Line />
        </BottomInformation>
      </Container>
      <BlogSection />
    </>
  );
};

export default HomeContent;
