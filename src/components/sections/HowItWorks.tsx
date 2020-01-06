import React from 'react';

import Section from '@/components/Section';
import { IndexPageSectionId, indexPage } from '@/constant';
import product from '@/constant/product.json';
import Paragraphs from '../Paragraphs';

const HowItWorks: React.FC = () => (
  <Section
    title={{
      content: `How ${product.name} works?`,
      id: IndexPageSectionId.HowItWork,
    }}
  >
    <Paragraphs data={indexPage.howItWorks} />
  </Section>
);

export default HowItWorks;
