import React from 'react';
import { Row, Col } from 'react-styled-flexboxgrid';

import Section from '@/components/Section';
import { IndexPageSectionId } from '@/constant';
import indexPage from '@/constant/indexPage.json';
import styled from 'styled-components';

const StyledA = styled.a`
  text-decoration: none;
  color: #333;
  font-size: 24px;
  font-weight: 600;
  border: 1px solid silver;
  padding: 12px 32px;
  border-radius: 4px;

  :hover {
    background-color: #eee;
  }
`;

const Download: React.FC = () => (
  <Section
    background="transparent"
    title={{
      content: indexPage.callToDownload,
      id: IndexPageSectionId.Download,
    }}
  >
    <Row center="xs">
      <Col>
        <Row center="xs">
          <StyledA href="#">免費試用</StyledA>
        </Row>
      </Col>
    </Row>
  </Section>
);

export default Download;
