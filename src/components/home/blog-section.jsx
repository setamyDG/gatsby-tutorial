import React, { useEffect } from 'react';
import styled from 'styled-components';
import { media } from '../../utils';
import { useStaticQuery, graphql } from 'gatsby';
import CustomButton from '../misc/custom-button';

const Container = styled.section`
  padding: 125px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-flow: column;
  ${media.tablet`
    display: block;
    padding: 0;
  `}
  > h3 {
    color: white;
    padding: 50px;
  }
`;

const Blog = styled.div`
  display: flex;
  padding: 50px;
  margin-bottom: 20px;
  transition: 0.5s all ease-in-all;
  :nth-of-type(even) {
    flex-direction: row-reverse;
  }
  :hover {
    cursor: pointer;
    background: #2e2e2e;
  }
`;

const BlogTextContainer = styled.div`
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-flow: column;
`;

const BlogImageContainer = styled.div`
  margin-left: 50px;
  margin-right: 50px;
  width: 50%;
  height: 100%;
  display: flex;
  flex-flow: column;
  align-items: center;
  justify-content: center;
`;

const StyledImage = styled.img`
  width: 100%;
  height: 100%;
  border: 2px solid white;
  object-fit: cover;
`;

const BlogTitle = styled.h3`
  color: white;
  margin-bottom: 20px;
`;

const BlogDescription = styled.p`
  color: white;
`;

const FlexContainer = styled.div`
  display: flex;
`;

const BlogSection = () => {
  const data = useStaticQuery(graphql`
    {
      posts: allDatoCmsPost(
        filter: { author: { name: { eq: "Daniel Gola" } } }
      ) {
        edges {
          node {
            id
            title
            excerpt
            featuredImage {
              url
            }
          }
        }
      }
    }
  `);

  return (
    <Container>
      <h3 onClick={() => console.log(data.posts.edges)}>Publications</h3>
      {data.posts.edges.map((post, index) => {
        console.log(post);
        return (
          <Blog key={index}>
            <BlogTextContainer>
              <BlogTitle>{post.node.title}</BlogTitle>
              <BlogDescription>{post.node.excerpt}</BlogDescription>
              <FlexContainer>
                <CustomButton>Read More</CustomButton>
                <CustomButton>See Code</CustomButton>
              </FlexContainer>
            </BlogTextContainer>
            <BlogImageContainer>
              <StyledImage src={post.node.featuredImage.url} />
            </BlogImageContainer>
          </Blog>
        );
      })}
    </Container>
  );
};

export default BlogSection;
