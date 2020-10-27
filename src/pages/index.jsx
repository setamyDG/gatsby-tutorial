import React from 'react';
import styled from 'styled-components';
import SEO from '../components/misc/seo';
import CustomButton from '../components/misc/custom-button';
import LineSvg from '../static/line.svg';
import OnlyLine from '../static/lineOnly.svg';
import { useStaticQuery, graphql } from 'gatsby';
import HomeContent from '../components/home';

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

const Line = styled(LineSvg)`
  color: white;
  height: 180px;
`;

const Home = () => {
  const data = useStaticQuery(graphql`
    {
      posts: allDatoCmsPost(
        filter: { author: { name: { eq: "Daniel Gola" } } }
      ) {
        edges {
          node {
            id
            title
          }
        }
      }
    }
  `);

  const asd = () => {
    const posts = data.posts.edges.map((post) => {
      console.log(post.node.title);
      return posts;
    });
  };

  return (
    <>
      <SEO />
      <HomeContent />
    </>
  );
};

export default Home;
