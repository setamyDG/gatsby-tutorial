import React from "react";
import { graphql } from "gatsby";
import styled from "styled-components";
import Layout from "../components/layout";
import media from "../utils/media";
import CustomButton from "../components/customButton";
import Footer from "../components/footer";

const AboutContent = styled.div`
  height: 60vh;
  width: 100vw;
  z-index: 1;
  margin-top: 25rem;
`;

const StyledTitle = styled.h1`
  color: #e43f5a;
  text-transform: uppercase;
  margin-top: 100px;
  font-family: "Russo One";
  ${media.tablet`
  margin-top: 50px;
  margin-bottom: 55px;
  `}
  ${media.mobile`
  margin-top: 50px;
  font-size: 30px;
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

export default function About({ data }) {
  return (
    <Layout>
      <AboutContent>
        <StyledTitle>{data.site.siteMetadata.title}</StyledTitle>
        <StyledSubtitle>
          {" "}
          I’m good enough, I’m smart enough,
          <br />
          {" "}
          and gosh darn it, people like me!
        </StyledSubtitle>
        <CustomButton />
      </AboutContent>
      <Footer footerText="Click the button and learn more about Gatsby.js" />
    </Layout>
  );
}

export const query = graphql`
    query {
        site {
            siteMetadata {
                title
            }
        }
    }
`;
