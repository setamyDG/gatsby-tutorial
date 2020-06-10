import React from "react";
import { graphql } from "gatsby";
import styled from "styled-components";
import Layout from "../components/layout";

const StyledHomeContent = styled.div`
  width: 100vw;
  height: 60vh;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  flex-flow: column;
  background: white;
`;
const StyledInfo = styled.p`
  color: black;
  font-family: Georgia;
  text-transform: uppercase;
  border-bottom: 1px solid black;
`;

const StyledBottomContainer = styled.div`
  height: 30vh;
  width: 100vw;
  display:flex;
`;

const StyledBottomLeft = styled.div`
  width: 50vw;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-flow: column;
  border-right: 2px solid black;
`;

const StyledBottomRight = styled(StyledBottomLeft)`
border-right: none
`;

const StyledPostTitle = styled.h1`
 font-width: bold;
 text-transform: uppercase;
 font-family: "Apple Braille";
 font-size: 35px;
 border-bottom: 1px solid black;
`;

const StyledPostDescription = styled.p`
  text-justify: auto;
  font-family: Helvetica;
  font-weight: bold;
  font-size: 10px;
  margin-bottom: 60px;
  text-transform: uppercase;
`;

const StyledCustomButton = styled.div`
  width: 350px;
  height: 70px;
  background: blue;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-family: "Comic Sans MS";
  :hover{
    cursor: pointer;
  }
`;

export default function Home({ data }) {
  return (
    <Layout>
      <StyledHomeContent>
        <StyledInfo>
          Hello.
          <br />
          {" "}
          This section presents a content with some query data.
        </StyledInfo>
        <p>
          {data.allMarkdownRemark.totalCount}
          {" "}
          Posts have been loaded
        </p>
        <StyledBottomContainer>
          <StyledBottomLeft>
            {data.allMarkdownRemark.edges.map(({ node }) => (
              <div key={node.id}>
                <StyledPostTitle>{node.frontmatter.title}</StyledPostTitle>
                <p>{node.frontmatter.date}</p>
                <StyledPostDescription>{node.excerpt}</StyledPostDescription>
              </div>
            ))}
          </StyledBottomLeft>
          <StyledBottomRight>
            <StyledPostTitle>Click here to learn more.</StyledPostTitle>
            <StyledCustomButton>GATSBY DOC</StyledCustomButton>
          </StyledBottomRight>
        </StyledBottomContainer>
      </StyledHomeContent>
    </Layout>
  );
}

export const query = graphql`
 query {
     allMarkdownRemark (sort: { fields: [frontmatter___date], order: DESC }){
         totalCount
         edges{
             node{
                 id
                 frontmatter {
                     title
                     date(formatString: "DD MMMM, YYYY")
                 }
                 excerpt
             }
         }
     }
 }
`;
