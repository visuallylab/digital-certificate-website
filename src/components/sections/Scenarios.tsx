import React from 'react';
import { Row } from 'react-styled-flexboxgrid';

import Section from '@/components/Section';
import Scenario from '@/components/Scenario';
import { IndexPageSectionId, indexPage } from '@/constant';

const Scenarios: React.FC = () => (
  <Section
    title={{
      content: 'Application Scenarios',
      id: IndexPageSectionId.scenarios,
    }}
  >
    <Row style={{ width: '100%' }} between="xs">
      {indexPage.scenarios.map(s => (
        <Scenario key={s.title} {...s} />
      ))}
    </Row>
  </Section>
);

export default Scenarios;
