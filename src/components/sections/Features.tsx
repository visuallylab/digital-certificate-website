import React from 'react';

import Section from '@/components/Section';
import { IndexPageSectionId, indexPage } from '@/constant';
import Paragraphs from '../Paragraphs';

const Features: React.FC = () => (
  <Section
    title={{
      content: 'Features',
      id: IndexPageSectionId.Features,
      color: '#333',
    }}
  >
    <Paragraphs data={indexPage.features} />
  </Section>
);

export default Features;
