import React from 'react';
import { Row, Col } from 'react-styled-flexboxgrid';

import Section from '@/components/Section';
import { IndexPageSectionId, indexPage } from '@/constant';

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
          <button>Try it for free</button>
        </Row>
      </Col>
    </Row>
  </Section>
);

export default Download;
