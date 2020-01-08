import React from 'react';
import { Row, Col } from 'react-styled-flexboxgrid';
import styled from 'styled-components';

import Section from '@/components/Section';
import product from '@/constant/product.json';
import { media } from '@/styles';
import productLogo from '@/images/product-logo.svg';
import hero from '@/images/hero.png';

const Hero = styled.img`
  position: absolute;
  top: 240px;
  right: 120px;
  width: 600px;
  ${media.lessThan('md')`
    top: 120px;
    left: 50%;
    right: 50%;
    transform: translateX(-50%);
    width: 240px;
  `}
`;

const Content = styled(Row)`
  position: relative;
  padding-left: 120px;
  ${media.lessThan('md')`
    padding-left: 32px;
  `}
`;

const StyledCol = styled(Col)`
  align-items: flex-start;
  text-align: left;
  ${media.lessThan('md')`
  padding-top: 120px;
  text-align: center;`}
`;

const Logo = styled.img`
  width: 240px;

  ${media.lessThan('md')`
    width: 180px;
  `}
`;

const Name = styled.h1`
  font-size: 50px;
  color: #555;
  ${media.lessThan('md')`
    
    font-size: 40px;
  `}
`;

const Slogan = styled.p`
  font-size: 30px;
  ${media.lessThan('md')`
    text-align: center;
    font-size: 20px;
  `}
`;

const Intro: React.FC = () => (
  <Section fullscreen alignItems="flex-start">
    <Hero src={hero} />
    <Content center="xs">
      <StyledCol>
        <Logo src={productLogo} />
        <Name>{product.name}</Name>
        <Slogan>{product.slogan}</Slogan>
      </StyledCol>
    </Content>
  </Section>
);

export default Intro;
