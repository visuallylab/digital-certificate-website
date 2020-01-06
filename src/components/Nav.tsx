import React from 'react';
import styled from 'styled-components';

import { Grid, Col, Row } from 'react-styled-flexboxgrid';
import product from '@/constant/product.json';

const StyledNav = styled(Grid)`
  z-index: 2;
  background-color: #fff;
  box-shadow: 0px 1px 2px 0px #eee;
  position: absolute;
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

export default () => (
  <>
    <StyledNav fluid>
      <Row between="xs" style={{ width: '100%' }}>
        <CenteredCol>
          <StyledImage src={product.logoImage} alt="logo" />
          <NavTitle>{product.name}</NavTitle>
        </CenteredCol>
        <AlignEndCol xs={false} sm={false} md>
          <A href="#">文件</A>
          <A href="#">關於我們</A>
          <A href="#">支援</A>
          <A href="#">註冊</A>
          <A href="#">登入</A>
        </AlignEndCol>
      </Row>
    </StyledNav>
  </>
);
