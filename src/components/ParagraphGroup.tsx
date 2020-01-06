import React from 'react';
import { Row } from 'react-styled-flexboxgrid';
import Paragraph, { IParagraph } from './Paragraph';
import styled from 'styled-components';
import { media } from '@/styles';

const StyledRow = styled(Row)`
  width: 100%;
  padding: 40px 0 30px;
  ${media.lessThan('md')`
    padding: 12px 0 20px;
  `}
`;

const ParagraphGroup: React.FC<{ data: IParagraph[] }> = ({ data }) => (
  <StyledRow>
    {data.map(p => (
      <Paragraph
        color={p.color}
        key={p.title}
        icon={p.icon || undefined}
        title={p.title}
        description={p.description}
      />
    ))}
  </StyledRow>
);

export default ParagraphGroup;
