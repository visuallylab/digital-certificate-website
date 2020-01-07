import React, { useState } from 'react';
import styled from 'styled-components';

import { Grid, Col, Row } from 'react-styled-flexboxgrid';
import product from '@/constant/product.json';
import { graphql, useStaticQuery, Link } from 'gatsby';
import MenuButton from './MenuButton';
import { media } from '@/styles';

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
  width: 48px;
`;

const NavTitle = styled.span`
  display: inline-block;
  font-size: 16px;
  font-weight: 400;
  margin-left: 10px;
  color: #333;
`;

const InternalLink = styled(Link)`
  margin: 0 16px;
  color: #333;
  font-size: 16px;
  font-weight: 400;
  text-decoration: none;
`;

const ExternalLink = styled.a`
  margin: 0 16px;
  color: #333;
  font-size: 16px;
  font-weight: 400;
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

const MobileMenu = styled.div`
  position: fixed;
  display: none;
  top: 0;
  left: 0;
  flex-direction: column;
  height: 360px;
  justify-content: space-around;
  align-items: center;
  background-color: white;
  width: 100%;
  border-bottom: 1px solid #ccc;

  ${media.lessThan('md')`
    display: flex;
  `}
`;

const StyledLink = styled(Link)`
  display: flex;
  align-items: center;
  text-decoration: none;
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
  const [isMenuActive, setMenuActive] = useState(false);
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
        <MenuButton
          toggleMenu={() => setMenuActive(prev => !prev)}
          isActive={isMenuActive}
        />
        <Row between="xs" style={{ width: '100%' }} middle="xs">
          <CenteredCol>
            <StyledLink to="/">
              <StyledImage src={product.logoImage} alt="logo" />
              <NavTitle>{product.name}</NavTitle>
            </StyledLink>
          </CenteredCol>
          <AlignEndCol xs={false} sm={false} md>
            <InternalLink to={documentUrl}>文件</InternalLink>
            <ExternalLink href="https://www.visuallylab.com">
              關於我們
            </ExternalLink>
            <InternalLink to="#">支援</InternalLink>
            <InternalLink to="#">註冊</InternalLink>
            <InternalLink to="#">登入</InternalLink>
          </AlignEndCol>
        </Row>
        {isMenuActive && (
          <MobileMenu>
            <InternalLink to={documentUrl}>文件</InternalLink>
            <ExternalLink href="https://www.visuallylab.com">
              關於我們
            </ExternalLink>
            <InternalLink to="#">支援</InternalLink>
            <InternalLink to="#">註冊</InternalLink>
            <InternalLink to="#">登入</InternalLink>
          </MobileMenu>
        )}
      </StyledNav>
    </>
  );
};
