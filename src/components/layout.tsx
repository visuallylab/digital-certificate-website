import React from 'react';
import GlobalStyles, { HEADER_HEIGHT } from '../styles';
import styled from 'styled-components';
import Footer from './Footer';

const Container = styled.div`
  position: relative;
  height: 100%;
`;

const Content = styled.main`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding-top: ${HEADER_HEIGHT};
`;

const Layout: React.FC = ({ children }) => {
  return (
    <Container>
      <Content>
        <div>{children}</div>
        <Footer />
      </Content>
      <GlobalStyles />
    </Container>
  );
};

export default Layout;
