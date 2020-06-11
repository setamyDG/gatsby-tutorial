import React from "react";
import { graphql } from "gatsby";
import styled from "styled-components";
import Layout from "../components/layout";
import media from "../utils/media";
import Footer from "../components/footer";

const HomeContent = styled.div`
  height: 60vh;
  width: 100vw;
  z-index: 1;
  margin-top: 25rem;
`;

const StyledTitle = styled.h1`
  color: #e43f5a;;
  text-transform: uppercase;
  font-family: "Russo One";
  margin-top: 50px;
  ${media.tablet`
  margin-top: -40px;
  margin-bottom: 55px;
  `}
  ${media.mobile`
  font-size: 30px;
  `}

`;
const StyledSubtitle = styled.p`
  font-size: 20px;
  color: #e43f5a;;
  ${media.tablet`
  margin-top: -35px;
  font-size: 18px;
  `}
  ${media.mobile`
  font-size: 18px;
  `}
`;

const StyledDescription = styled.p`
  font-size: 15px;
  color: #e43f5a;
  ${media.tablet`
  font-size: 18px;
  `}
  ${media.mobile`
  font-size: 16px;
  `}
`;

const StyledData = styled(StyledDescription)`
  color: black;
`;

export default function Home({ data }) {
  return (
    <Layout background="https://ak.picdn.net/shutterstock/videos/1027770314/thumb/1.jpg?ip=x480">
      <HomeContent>
        <StyledTitle>HELLO</StyledTitle>
        <StyledSubtitle>This section shows data from graphql query</StyledSubtitle>
        <StyledDescription>
          {data.allMarkdownRemark.totalCount}
          {" "}
          Posts are fetched via graphQL query from local md files.
        </StyledDescription>
        {data.allMarkdownRemark.edges.map(({ node }) => (
          <div key={node.id}>
            <StyledData>
              Title:
              {node.frontmatter.title}
              {" "}
              -
              {node.frontmatter.date}
            </StyledData>
            <StyledData>
              Description:
              {node.excerpt}
            </StyledData>

          </div>
        ))}
      </HomeContent>
      <Footer footerText="HERE WILL BE MY FOOTER" />
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
                    fields{
                        slug
                    }
                    excerpt
                }
            }
        }
    }
`;
