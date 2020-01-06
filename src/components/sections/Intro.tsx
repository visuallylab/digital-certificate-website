import React from 'react';
import { Row, Col } from 'react-styled-flexboxgrid';
import styled from 'styled-components';

import Section from '@/components/Section';
import product from '@/constant/product.json';

const Content = styled(Row)`
  padding-top: 140px;
  align-items: space-around;
`;

const Intro: React.FC = () => (
  <Section fullscreen alignItems="center">
    <Content center="xs">
      <Col>
        <h1 style={{ textAlign: 'center' }}>{product.name}</h1>
        <p style={{ textAlign: 'center' }}>{product.slogan}</p>
      </Col>
    </Content>
  </Section>
);

export default Intro;
