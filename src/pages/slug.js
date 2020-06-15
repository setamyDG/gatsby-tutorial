import React from "react";
import { Link, graphql } from "gatsby";
import styled from "styled-components";
import Layout from "../components/layout";
import media from "../utils/media";
import Footer from "../components/footer";
import SEO from "../components/seo"

const TestContent = styled.div`
  height: 65vh;
  width: 100vw;
  z-index: 1;
  margin-top: 25rem;
  display: flex;
  justify-content: center;
  flex-flow: column;
  align-items: center;
`;

const StyledTitle = styled.h1`
  color: #e43f5a;;
  text-transform: uppercase;
  margin-top: 45px;
  font-size: 25px;
  font-family: "Russo One";;
  ${media.tablet`
  margin-top: -50px;
  margin-bottom: 45px;
  `}
  ${media.mobile`
  margin-top: -60px;
  font-size: 24px;
  `}
`;

const StyledSubtitle = styled.p`
  font-size: 20px;
  color: #e43f5a;
  ${media.tablet`
  margin-top: -35px;
  font-size: 18px;
  `}
  ${media.mobile`
  font-size: 18px;
  `}
`;

const PostContainer = styled.div`
   box-shadow: 0 5px 25px rgba(0,0,0, .5);
   margin: 1rem;
`;

const LinkToSlug = styled(Link)`
  text-decoration: none;
`;

const PostTitleText = styled.p`
    color: black;
    margin: 1rem;
`;
const PostDateText = styled.span`
    color: #e43f5a; ;
`;

export default function Home({ data }) {
  return (
    <Layout bg="https://images8.alphacoders.com/679/679478.jpg">
      <SEO title="Slug" />
      <TestContent>
        <StyledTitle>
          Click on post and redirect to
          <br />
          {" "}
          local .md file page!
        </StyledTitle>
        <StyledSubtitle>
          {data.allMarkdownRemark.totalCount}
          {" "}
          Posts are available
        </StyledSubtitle>
        {data.allMarkdownRemark.edges.map(({ node }) => (
          <PostContainer key={node.id}>
            <LinkToSlug
              to={node.fields.slug}
            >
              <PostTitleText>
                {node.frontmatter.title}
                {" "}
                <PostDateText>
                  —
                  {" "}
                  {node.frontmatter.date}
                </PostDateText>
              </PostTitleText>
              <PostTitleText>{node.excerpt}</PostTitleText>
            </LinkToSlug>
          </PostContainer>
        ))}
      </TestContent>
      <Footer footerText="this looks pretty simple" />
    </Layout>
  );
}

export const query = graphql`
    query {
        allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
            totalCount
            edges {
                node {
                    id
                    frontmatter {
                        title
                        date(formatString: "DD MMMM, YYYY")
                    }
                    fields {
                        slug
                    }
                    excerpt
                }
            }
        }
    }
`;
