import React from 'react';
import { Grid, Col, Row } from 'react-styled-flexboxgrid';
import { media } from '@/styles';
import styled from 'styled-components';
import company from '@/constant/company.json';
import companyLogo from '@/images/company-logo.svg';

const Logo = styled.img`
  width: 160px;
  ${media.lessThan('md')`
    width: 120px;
    margin-bottom: 0px;`}
`;

const Container = styled(Grid)`
  padding: 64px 20px 48px 20px;
  width: 100%;
  box-sizing: border-box;
  border-top: 1px solid #ccc;

  ${media.lessThan('md')`
     padding: 40px 16px 30px 12px;
    `}
`;

const CopyRight = styled.p`
  text-align: center;
  opacity: 0.5;
  color: #333;
  font-size: 14px;
  font-weight: 300;
  ${media.lessThan('md')` 
  font-size: 12px;`}
`;

const LogoRow = styled(Row)`
  margin-bottom: 20px;
  ${media.lessThan('md')` 
  margin-bottom: 0px;`}
`;

const Footer: React.FC = () => {
  return (
    <Container fluid>
      <LogoRow center="xs">
        <Col>
          <Logo src={companyLogo} />
        </Col>
      </LogoRow>
      <CopyRight>
        © {new Date().getFullYear()}, Built with {company.name}
      </CopyRight>
    </Container>
  );
};

export default Footer;
