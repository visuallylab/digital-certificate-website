import React from 'react';
import GlobalStyles from '../styles';
import styled from 'styled-components';

const Container = styled.div`
  position: relative;
`;

const Content = styled.main``;

const Layout: React.FC = ({ children }) => {
  return (
    <Container>
      <Content>{children}</Content>
      <GlobalStyles />
    </Container>
  );
};

export default Layout;
