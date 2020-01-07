import React from 'react';
import styled from 'styled-components';
import { Grid } from 'react-styled-flexboxgrid';
import Title from '@/components/SectionTitle';
import { media } from '@/styles';
type SectionProps = {
  textAlign?: 'center' | 'left' | 'right';
  alignItems?: 'center' | 'flex-start' | 'flex-end';
  fullscreen?: boolean;
  first?: boolean;
  background?: string;
};

type Title = {
  content: string;
  id: string;
  color?: string;
};

type Props = {
  textAlign?: 'center' | 'left' | 'right';
  alignItems?: 'center' | 'flex-start' | 'flex-end';
  fullscreen?: boolean;
  first?: boolean;
  title?: Title;
  desc?: string[];
  background?: string;
};

const StyledSection = styled(Grid)<SectionProps>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 20px 20px 120px 20px;
  align-items: ${(props: SectionProps) => props.alignItems};
  text-align: ${(props: SectionProps) => props.textAlign};
  height: ${(props: SectionProps) => (props.fullscreen ? '90vh' : 'initial')};
  background: ${(props: SectionProps) => props.background || 'transparent'};
  min-height: 50vh;

  ${media.lessThan('md')`
   padding: 12px 12px 32px 12px;
  `}
`;

const Section: React.FC<Props> = ({
  children,
  fullscreen = false,
  textAlign = 'left',
  first = false,
  alignItems = 'center',
  background,
  title,
}) => (
  <StyledSection
    fluid
    fullscreen={fullscreen}
    textAlign={textAlign}
    first={first}
    alignItems={alignItems}
    background={background}
  >
    {title && (
      <Title id={title.id} color={title.color}>
        {title.content}
      </Title>
    )}
    {children}
  </StyledSection>
);

export default Section;
