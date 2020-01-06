import React from 'react';
import { graphql } from 'gatsby';

import Layout from '@/components/Layout';
import Head from '../components/Head';
import Nav from '@/components/Nav';
import Intro from '@/components/sections/Intro';
import Features from '@/components/sections/Features';
import Scenarios from '@/components/sections/Scenarios';
import HowItWorks from '@/components/sections/HowItWorks';
import Download from '@/components/sections/Download';

const IndexPage: React.FC<{ data: IndexQuery }> = () => (
  <Layout>
    <Head title="Home" />
    <Nav />
    <Intro />
    <Features />
    <Scenarios />
    <HowItWorks />
    <Download />
  </Layout>
);

export const query = graphql`
  query Index {
    allMdx {
      nodes {
        frontmatter {
          title
        }
        fields {
          slug
        }
      }
    }
  }
`;

export default IndexPage;
