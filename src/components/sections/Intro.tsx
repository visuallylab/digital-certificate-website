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
  right: 80px;
  width: 600px;
  ${media.lessThan('lg')`
    width: 400px;
  `}
  ${media.lessThan('md')`
     width: 360px;
  `}
  ${media.lessThan('sm')`
    width: 300px;
    top: 120px;
    left: 50%;
    right: 50%;
    transform: translateX(-50%);
  `}
`;

const Content = styled(Row)`
  position: relative;
  padding-left: 120px;
  width: 100%;
  ${media.lessThan('md')`
    padding-left: 30px;
  `}
  ${media.lessThan('sm')`
    justify-content: center;
  `}
`;

const StyledCol = styled(Col)`
  align-items: flex-start;
  text-align: left;
  ${media.lessThan('sm')`
    padding-top: 100px;
    align-items: center;
    text-align: center;
  `}
`;

const Logo = styled.img`
  width: 240px;

  ${media.lessThan('lg')`
      width: 200px;
  `}
  ${media.lessThan('md')`
    width: 180px;
  `}
`;

const Name = styled.h1`
  font-size: 50px;
  color: #555;
  ${media.lessThan('lg')`
    font-size: 40px;
  `}
`;

const Slogan = styled.p`
  font-size: 24px;
  ${media.lessThan('lg')`
    font-size: 20px;
  `}
`;

const Intro: React.FC = () => (
  <Section fullscreen alignItems="flex-start">
    <Hero src={hero} />
    <Content>
      <StyledCol>
        <Logo src={productLogo} />
        <Name>{product.name}</Name>
        <Slogan>{product.slogan}</Slogan>
      </StyledCol>
    </Content>
  </Section>
);

export default Intro;
