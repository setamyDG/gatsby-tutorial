import React from "react";
import { graphql } from "gatsby";
import styled from "styled-components";
import Layout from "../components/layout";
import Footer from "../components/footer";
import SEO from "../components/seo";
import media from "../utils/media";

const PostContentContainer = styled.div`
  height: 65vh;
  width: 100vw;
  z-index: 1;
  margin-top: 25rem;
  text-align: center;
`;

const StyledTitle = styled.h1`
  color: #e43f5a;;
  text-transform: uppercase;
  font-family: "Russo One";
  margin-top: 200px;
  ${media.tablet`
  margin-top: 10px;
  margin-bottom: 10px;
  `}
  ${media.mobile`
  font-size: 30px;
  margin-top: -10px;
  `}
`;

const StyledContentSlug = styled.div`
  flex-flow: column;
  width: 100vw;
  justify-content: center;
  z-index: -1;
  > div {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 100px;
  text-align: justify;
  }
`;

const StyledDiv = styled.div`
  margin: 3rem;
  text-align: justify;
  display: flex;
  align-items: center;
  flex-flow: column;
  justify-content: center;
  ${media.tablet`
  margin-top: 0px;
  margin-bottom: 10px;
  `}
  ${media.mobile`
  margin-top: -15px;
  `}
`;


export default function BlogPost({ data }) {
  const post = data.markdownRemark;
  return (
    <Layout bg="https://images8.alphacoders.com/679/679478.jpg">
      <PostContentContainer>
        <StyledContentSlug>
          <StyledTitle>Local data page</StyledTitle>
          <SEO title={post.frontmatter.title} description={post.excerpt} />
          <StyledDiv dangerouslySetInnerHTML={{ __html: post.html }} />
        </StyledContentSlug>
      </PostContentContainer>
      <Footer footerText="Hello" />
    </Layout>
  );
}

export const query = graphql`
    query($slug: String!) {
        markdownRemark(fields: { slug: { eq: $slug } }) {
            html
            frontmatter {
                title
            }
            excerpt
        }
    }
`;
