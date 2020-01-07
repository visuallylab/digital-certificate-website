import React from 'react';

import Section from '@/components/Section';
import { IndexPageSectionId } from '@/constant';
import ParagraphGroup from '../ParagraphGroup';
import indexPage from '@/constant/indexPage.json';

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
