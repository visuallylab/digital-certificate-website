import React from 'react';

import Section from '@/components/Section';
import { IndexPageSectionId, indexPage } from '@/constant';
import ParagraphGroup from '../ParagraphGroup';

const Features: React.FC = () => (
  <Section
    title={{
      content: 'Features',
      id: IndexPageSectionId.Features,
      color: '#333',
    }}
  >
    <ParagraphGroup data={indexPage.features} />
  </Section>
);

export default Features;
