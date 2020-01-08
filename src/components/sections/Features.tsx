import React from 'react';

import Section from '@/components/Section';
import { IndexPageSectionId } from '@/constant';
import ParagraphGroup from '../ParagraphGroup';
import indexPage from '@/constant/indexPage.json';

const Features: React.FC = () => {
  return (
    <Section
      title={{
        content: '功能特色',
        id: IndexPageSectionId.Features,
        color: '#333',
      }}
    >
      <ParagraphGroup data={indexPage.features} />
    </Section>
  );
};

export default Features;
