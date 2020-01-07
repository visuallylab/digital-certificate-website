import React from 'react';
import { FaLink, FaFacebookF, FaMediumM } from 'react-icons/fa';
import styled from 'styled-components';
import { Row, Col } from 'react-styled-flexboxgrid';
import company from '@/constant/company.json';
import { media } from '@/styles';

type MediaProps = {
  uri?: string | null;
};

const StyledA = styled.a`
  opacity: 0.6;
  transition: 0.2s;
  font-size: 16px;

  &:hover {
    opacity: 1;
  }
`;

const MediaLink: React.FC<MediaProps> = ({ uri, children }) =>
  uri ? <StyledA href={uri}>{children}</StyledA> : null;

const MediaLinkWrapper = styled(Row)`
  display: flex;
  justify-content: space-between;
  width: 120px;
  margin-bottom: 32px;
  ${media.lessThan('md')`justify-content: center;`}
`;

const MediaLinksRow = () => (
  <Row center="xs">
    <Col>
      <MediaLinkWrapper>
        <MediaLink uri={company.websiteUrl}>
          <FaLink color="#333" />
        </MediaLink>
        <MediaLink uri={company.facebookUrl}>
          <FaFacebookF color="#333" />
        </MediaLink>
        <MediaLink uri={company.mediumUrl}>
          <FaMediumM color="#333" />
        </MediaLink>
      </MediaLinkWrapper>
    </Col>
  </Row>
);

export default MediaLinksRow;
