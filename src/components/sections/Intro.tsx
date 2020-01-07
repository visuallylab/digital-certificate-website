import React from 'react';
import { Row, Col } from 'react-styled-flexboxgrid';
import styled from 'styled-components';

import Section from '@/components/Section';
import product from '@/constant/product.json';
import { media } from '@/styles';

const Content = styled(Row)`
  padding-left: 120px;
  ${media.lessThan('md')`
    padding-left: 32px;
  `}
`;

const StyledCol = styled(Col)`
  align-items: flex-start;
  text-align: left;
`;

const Logo = styled.img`
  width: 240px;

  ${media.lessThan('md')`
    width: 180px;
  `}
`;

const Name = styled.h1`
  font-size: 50px;
  ${media.lessThan('md')`
    font-size: 40px;
  `}
`;

const Slogan = styled.p`
  font-size: 30px;
  ${media.lessThan('md')`
    font-size: 20px;
  `}
`;

const Intro: React.FC = () => (
  <Section fullscreen alignItems="flex-start">
    <Content center="xs">
      <StyledCol>
        <Logo src={product.logoImage} />
        <Name>{product.name}</Name>
        <Slogan>{product.slogan}</Slogan>
      </StyledCol>
    </Content>
  </Section>
);

export default Intro;
