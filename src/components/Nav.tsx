import React from 'react';
import styled from 'styled-components';

import { Grid, Col, Row } from 'react-styled-flexboxgrid';
import product from '@/constant/product.json';
import { graphql, useStaticQuery } from 'gatsby';

const StyledNav = styled(Grid)`
  z-index: 2;
  background-color: #fff;
  box-shadow: 0px 1px 2px 0px #eee;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  padding-top: 20px;
  padding-bottom: 12px;
`;

const StyledImage = styled.img`
  width: 27px;
`;

const NavTitle = styled.span`
  display: inline-block;
  font-size: 24px;
  margin-left: 10px;
  color: rgb(28, 42, 77);
`;

const A = styled.a`
  margin-left: 34px;
  color: #000;
  font-size: 20px;
  text-decoration: none;
`;

const CenteredCol = styled(Col)`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const AlignEndCol = styled(Col)`
  text-align: end;
`;

const query = graphql`
  query Nav {
    allMdx(sort: { order: ASC, fields: frontmatter___index }) {
      nodes {
        fields {
          slug
        }
      }
    }
  }
`;

export default () => {
  const {
    allMdx: { nodes },
  }: NavQuery = useStaticQuery(query);
  const documentUrl =
    nodes.length > 0 && nodes[0].fields && nodes[0].fields.slug
      ? nodes[0].fields.slug
      : '#';
  return (
    <>
      <StyledNav fluid>
        <Row between="xs" style={{ width: '100%' }}>
          <CenteredCol>
            <a href="/">
              <StyledImage src={product.logoImage} alt="logo" />
              <NavTitle>{product.name}</NavTitle>
            </a>
          </CenteredCol>
          <AlignEndCol xs={false} sm={false} md>
            <A href={documentUrl}>文件</A>
            <A href="https://www.visuallylab.com">關於我們</A>
            <A href="#">支援</A>
            <A href="#">註冊</A>
            <A href="#">登入</A>
          </AlignEndCol>
        </Row>
      </StyledNav>
    </>
  );
};
