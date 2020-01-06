import React from 'react';

import Section from '@/components/Section';
import { IndexPageSectionId, indexPage } from '@/constant';
import product from '@/constant/product.json';
import ParagraphGroup from '../ParagraphGroup';

const HowItWorks: React.FC = () => (
  <Section
    title={{
      content: `How ${product.name} works?`,
      id: IndexPageSectionId.HowItWork,
    }}
  >
    <ParagraphGroup data={indexPage.howItWorks} />
  </Section>
);

export default HowItWorks;
