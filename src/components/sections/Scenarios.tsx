import React from 'react';
import { Row } from 'react-styled-flexboxgrid';

import Section from '@/components/Section';
import Scenario from '@/components/Scenario';
import { IndexPageSectionId } from '@/constant';
import indexPage from '@/constant/indexPage.json';
import styled from 'styled-components';

const StyledRow = styled(Row)``;

const Scenarios: React.FC = () => (
  <Section
    title={{
      content: '應用場景',
      id: IndexPageSectionId.scenarios,
    }}
  >
    <StyledRow style={{ width: '100%' }} between="xs">
      {indexPage.scenarios.map(s => (
        <Scenario key={s.title} {...s} />
      ))}
    </StyledRow>
  </Section>
);

export default Scenarios;
