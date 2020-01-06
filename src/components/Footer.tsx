import React from 'react';
import { Grid, Col, Row } from 'react-styled-flexboxgrid';
import { colors, media } from '@/styles';
import { Link } from 'gatsby';
import styled from 'styled-components';
import { FaLink, FaFacebookF, FaTwitter, FaMediumM } from 'react-icons/fa';
import company from '@/constant/company.json';

type MediaProps = {
  uri?: string | null;
};

const StyledA = styled(Link)`
  margin-right: 16px;
  opacity: 0.6;
  transition: 0.2s;

  &:hover {
    opacity: 1;
  }
`;

const MediaLink: React.FC<MediaProps> = ({ uri, children }) =>
  uri ? <StyledA to={uri}>{children}</StyledA> : null;

const MediaLinkWrapper = styled(Row)`
  display: flex;
  justify-content: flex-end;
  ${media.lessThan('md')`justify-content: center;`}
`;

const Logo = styled.img`
  width: 150px;
  ${media.lessThan('md')`
    width: 80px;
    margin-bottom: 20px;`}
`;

const Container = styled(Grid)`
  padding: 32px 20px 14px;
  width: 100%;
  box-sizing: border-box;
`;

const CopyRight = styled.p`
  text-align: center;
  opacity: 0.5;
  margin-top: 40px;
  color: #fff;
  font-size: 18px;
  font-weight: lighter;
  ${media.lessThan('md')` 
  margin-top: 32px;
  font-size: 16px;`}
`;

const Footer: React.FC = () => {
  return (
    <Container
      fluid
      style={{
        backgroundColor: colors.primary,
      }}
    >
      <Row center="xs" style={{ marginBottom: '12px' }}>
        <Col>
          <Logo style={{ marginRight: '12px' }} src={company.logoImage} />
        </Col>
      </Row>
      <Row center="xs">
        <Col>
          <MediaLinkWrapper>
            <MediaLink uri={company.websiteUrl}>
              <FaLink color="#fff" />
            </MediaLink>
            <MediaLink uri={company.facebookUrl}>
              <FaFacebookF color="#fff" />
            </MediaLink>
            <MediaLink uri={company.twitterUrl}>
              <FaTwitter color="#fff" />
            </MediaLink>
            <MediaLink uri={company.mediumUrl}>
              <FaMediumM color="#fff" />
            </MediaLink>
          </MediaLinkWrapper>
        </Col>
      </Row>
      <CopyRight>
        © {new Date().getFullYear()}, Built with {company.name}
      </CopyRight>
    </Container>
  );
};

export default Footer;
