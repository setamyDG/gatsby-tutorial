import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/layout";
import styled from "styled-components";
import Footer from "../components/footer";
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
  margin-top: 60px;
  ${media.tablet`
  margin-top: 10px;
  margin-bottom: 10px;
  `}
  ${media.mobile`
  font-size: 30px;
  `}
`;

const StyledContentSlug = styled.div`
  flex-flow: column;
  width: 100vw;
  justify-content: center;
  z-index: -1;
`;


export default function BlogPost({ data }) {
  const post = data.markdownRemark;
  return (
    <Layout>
      <PostContentContainer>
        <StyledContentSlug>
          <StyledTitle>Local data page</StyledTitle>
            <div dangerouslySetInnerHTML={{ __html: post.html }} />
        </StyledContentSlug>
      </PostContentContainer>
      <Footer footerText='Hello'/>
    </Layout>
  );
}

export const query = graphql`
    query($slug: String!) {
        markdownRemark(fields: { slug: { eq: $slug } }) {
            html
        }
    }
`;
