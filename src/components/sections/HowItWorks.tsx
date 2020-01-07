import React from 'react';

import Section from '@/components/Section';
import { IndexPageSectionId } from '@/constant';
import product from '@/constant/product.json';
import ParagraphGroup from '../ParagraphGroup';
import indexPage from '@/constant/indexPage.json';

const HowItWorks: React.FC = () => (
  <Section
    title={{
      content: `${product.name}如何運作？`,
      id: IndexPageSectionId.HowItWork,
    }}
  >
    <ParagraphGroup data={indexPage.howItWorks} />
  </Section>
);

export default HowItWorks;
