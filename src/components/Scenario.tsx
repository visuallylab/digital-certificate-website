import React from 'react';
import { Col } from 'react-styled-flexboxgrid';
import styled from 'styled-components';
import { media } from '@/styles';
import Image from './Image';

const Container = styled(Col)`
  display: flex;
  flex-direction: column;
  text-align: center;
`;

const Title = styled(Col)`
  color: #333;
  font-size: 24px;
  margin-top: 56px;
  margin-bottom: 30px;
  ${media.lessThan('md')`
   font-size: 16px;
   font-weight: 300;
   margin-bottom: 12px;
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
