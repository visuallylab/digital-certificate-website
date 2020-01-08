import React from 'react';
import styled from 'styled-components';

import { Col } from 'react-styled-flexboxgrid';
import { media } from '@/styles';
import { graphql, useStaticQuery } from 'gatsby';

export const Icon = styled.img`
  z-index: 1;
  margin-bottom: 15px;
  position: relative;
  width: 240px;
  height: 240px;
  ${media.lessThan('md')`
  width: 180px;
  height: 180px;
  `}
`;

export const Description = styled.p<{ color: string }>`
  display: inline-block;
  color: ${props => props.color};
  font-size: 16px;
  letter-spacing: 0.8px;
  line-height: 28px;
  max-width: 250px;
  margin: 0;
  text-align: left;

  ${media.lessThan('md')`
  max-width: initial;
  font-size: 16px;
  `}
`;

export const Title = styled.h2<{ color: string }>`
  font-weight: 400;
  color: ${props => props.color};
  font-size: 24px;
  margin: 0 0 10px;
  ${media.lessThan('md')` 
   font-size: 20px;
  `}
`;

const Container = styled(Col)`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 0 18px;
  ${media.lessThan('md')` 
    flex: 1;
    min-width: 100%;
    margin-bottom: 40px;
    display:flex;
    flex-direction: row;
    justify-content: flex-start;
  `}
`;

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  ${media.lessThan('md')`
    text-align: left;
    padding-left: 32px;
    align-items: flex-start;
  `}
`;

export interface IParagraph {
  title: string;
  description: string;
  icon?: string;
  color?: string;
  iconStyle?: object;
}

const query = graphql`
  query ParagraphImage {
    allFile {
      nodes {
        publicURL
        name
      }
    }
  }
`;

const Paragraph: React.FC<IParagraph> = ({
  title,
  description,
  icon,
  iconStyle,
  color = '#333',
}) => {
  const { allFile }: ParagraphImageQuery = useStaticQuery(query);
  const imageNode = allFile.nodes.find(node => node.name === icon);
  const imageSource = imageNode?.publicURL as undefined | string;
  return (
    <Container md={3} sm={6} xs={12}>
      {imageSource && <Icon src={imageSource} style={iconStyle} />}
      <ContentWrapper>
        <Title color={color}>{title}</Title>
        <Description color={color}>{description}</Description>
      </ContentWrapper>
    </Container>
  );
};

export default Paragraph;
