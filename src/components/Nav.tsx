import React, { useState } from 'react';
import styled from 'styled-components';

import { Grid, Col, Row } from 'react-styled-flexboxgrid';
import product from '@/constant/product.json';
import { Link } from 'gatsby';
import MenuButton from './MenuButton';
import { media } from '@/styles';
import productLogo from '@/images/product-logo.svg';

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

const Links = () => (
  <>
    <ExternalLink href="https://jhihcing.gitbook.io/dcert/">文件</ExternalLink>
    <ExternalLink href="https://forms.gle/wrYMiE7xGpeRR8Ui6">支援</ExternalLink>
    <InternalLink to="#">註冊</InternalLink>
    <InternalLink to="#">登入</InternalLink>
  </>
);

export default () => {
  const [isMenuActive, setMenuActive] = useState(false);

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
              <StyledImage src={productLogo} alt="logo" />
              <NavTitle>{product.name}</NavTitle>
            </StyledLink>
          </CenteredCol>
          <AlignEndCol xs={false} sm={false} md>
            <Links />
          </AlignEndCol>
        </Row>
        {isMenuActive && (
          <MobileMenu>
            <Links />
          </MobileMenu>
        )}
      </StyledNav>
    </>
  );
};
