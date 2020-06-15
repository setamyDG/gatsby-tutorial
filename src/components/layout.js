import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import styled, { ThemeProvider } from "styled-components";
import NavigationContainer from "./NavigationContainer";
import Header from "./header";
import { theme } from "../utils/theme";
import GlobalStyle from "../golbalStyle/style";

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
