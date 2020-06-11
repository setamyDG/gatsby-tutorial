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
  font-family: "Russo One";   //mimo że nadałem font-family globalnie to i tak w każdym "StyledTitle/StyledSubtitle" musiałem to nadpisać bo inaczej nie działało ;/
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

export default function Layout({ children }) {
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
          <Header title={data.site.siteMetadata.title} background="https://images8.alphacoders.com/679/679478.jpg" />
          {children}
        </StyledContainer>
      </>
    </ThemeProvider>
  );
}
