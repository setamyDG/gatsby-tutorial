import React from "react";
import { graphql } from "gatsby";
import styled from "styled-components";
import Layout from "../components/layout";
import media from "../utils/media";
import Footer from "../components/footer";
import SEO from "../components/seo";

const FilesContent = styled.div`
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
  margin-top: 150px;
  ${media.tablet`
  margin-top: 0px;
  margin-bottom: 45px;
  `}
  ${media.mobile`
  margin-top: 0px;
  font-size: 30px;
  `}

`;
const StyledSubtitle = styled.p`
  font-size: 20px;
  margin-top: -10px;
  color: #e43f5a;
  ${media.tablet`
  margin-top: -35px;
  font-size: 18px;
  `}
  ${media.mobile`
  font-size: 18px;
  `}
`;

const StyledTableContainer = styled.div`
  width: 80vw;
  height: 250px;
  overflow: auto;
  justify-content: center;
  text-justify: auto;
  display: flex;
`;

const StyledTh = styled.th`
  color: #e43f5a;
  text-transform: uppercase;
  border-bottom: 1px solid black;
`;

const StyledTd = styled.td`
  color: #e43f5a;
  text-transform: uppercase;
  border-bottom: 1px solid black;
`;

export default function MyFiles({ data }) {
  return (
    <Layout bg="https://images8.alphacoders.com/679/679478.jpg">
      <SEO title="Files" />
      <FilesContent>
        <StyledTitle>Project structure</StyledTitle>
        <StyledSubtitle>This page shows all project files</StyledSubtitle>
        <StyledTableContainer>
          <table>
            <thead>
              <tr>
                <StyledTh>relative Path</StyledTh>
                <StyledTh>pretty Size</StyledTh>
                <StyledTh>extension</StyledTh>
                <StyledTh>birth Time</StyledTh>
              </tr>
            </thead>
            <tbody>
              {data.allFile.edges.map(({ node }, index) => (
                <tr key={index}>
                  <StyledTd>{node.relativePath}</StyledTd>
                  <StyledTd>{node.prettySize}</StyledTd>
                  <StyledTd>{node.extension}</StyledTd>
                  <StyledTd>{node.birthTime}</StyledTd>
                </tr>
              ))}
            </tbody>
          </table>
        </StyledTableContainer>
      </FilesContent>
      <Footer footerText="project files" />
    </Layout>
  );
}

export const query = graphql`
    query {
        allFile {
            edges {
                node {
                    relativePath
                    prettySize
                    extension
                    birthTime(fromNow: true)
                }
            }
        }
    }
`;
