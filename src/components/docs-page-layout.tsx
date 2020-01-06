import React from 'react';
import { graphql } from 'gatsby';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import { DocQuery } from '../typings/graphqlTypes';

const PageTemplate: React.FC<{ data: DocQuery }> = ({ data: { mdx } }) => {
  return (
    <div style={{ padding: '32px' }}>
      <h1>the doc template</h1>
      <h2>markdown content</h2>
      <div
        style={{
          border: '1px solid  black',
          margin: '32px',
          padding: '24px',
          borderRadius: '12px',
        }}
      >
        <p>{mdx?.frontmatter?.date}</p>
        {mdx?.body && <MDXRenderer>{mdx?.body}</MDXRenderer>}
      </div>
    </div>
  );
};

export const query = graphql`
  query Doc($id: String) {
    mdx(id: { eq: $id }) {
      id
      body
      frontmatter {
        title
        date(formatString: "YYYY年 MM月 DD日")
      }
    }
  }
`;

export default PageTemplate;
