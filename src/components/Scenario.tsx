import React from 'react';
import { Col } from 'react-styled-flexboxgrid';
import styled from 'styled-components';
import { media } from '@/styles';
import Image from './Image';

const Container = styled(Col)`
  display: flex !important;
  flex-direction: column;
  align-items: center;
  text-align: center;
  justify-content: center;
  padding-bottom: 32px;
  & .gatsby-image-wrapper {
    width: 120px !important;
    height: 120px !important;
    display: flex !important;
    justify-content: center !important;
    align-items: center !important;
    overflow: hidden !important;
    picture {
      flex-shrink: 0 !important;
      min-width: 100% !important;
      min-height: 100% !important;
    }
  }
`;

const Title = styled(Col)`
  color: #333;
  font-size: 24px;
  margin-top: 56px;
  margin-bottom: 30px;

  ${media.lessThan('md')`
   font-size: 15px;
   font-weight: 300;
   margin-bottom: 18px;
   margin-top: 0px;
  `}
`;

const Scenario: React.FC<{
  title: string;
  icon: string;
}> = props => {
  return (
    <Container xs={6} sm={4} md={3} {...props}>
      <Title>{props.title}</Title>
      <Image src={props.icon} />
    </Container>
  );
};

export default Scenario;
