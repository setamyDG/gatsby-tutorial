import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import styled, { createGlobalStyle, ThemeProvider } from "styled-components";
import NavigationContainer from "./NavigationContainer";
import Header from "./header";
import { theme } from "../utils/theme";

const GlobalStyle = createGlobalStyle`
  html{
  overflow: hidden;
  }
  body {
  font-family: "Russo One";   //mimo że nadałem font-family globalnie to i tak w każdym "StyledTitle/StyledSubtitle" musiałem to nadpisać bo inaczej nie działało / dodatkowo jest plugin google-fotns
  top:0;
  left: 0;
  margin: 0;
  padding: 0;
  }
`;

const StyledContainer = styled.div`
 height: 100vh;
 width: 100%;
 display: flex;
 align-items: center;
 text-align: center;
 flex-flow: column;
`;

export default function Layout({ children, bg }) {
  const data = useStaticQuery(
    graphql`
        query {
            site {
                siteMetadata {
                    title
                }
            }
        }
    `,
  );

  return (
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyle />
        <StyledContainer>
          <NavigationContainer />
          <Header title={data.site.siteMetadata.title} background={bg} />
          {children}
        </StyledContainer>
      </>
    </ThemeProvider>
  );
}
