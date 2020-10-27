import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import PropTypes from 'prop-types';
import { GlobalStyle } from '../styles/GlobalStyle';
import theme from '../styles/theme';
import Header from './header';
import Footer from './footer';

const StyledContainer = styled.div`
  min-height: 100vh;
  display: flex;
  flex-flow: column;
`;

const StyledMain = styled.main`
  flex: 1 0 auto;
  background: ${({ theme }) => theme.colors.dark};
`;

const Layout = ({ children }) => (
  <ThemeProvider theme={theme}>
    <GlobalStyle />
    <StyledContainer>
      <StyledMain>
        <Header />
        {children}
      </StyledMain>
      <Footer />
    </StyledContainer>
  </ThemeProvider>
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
