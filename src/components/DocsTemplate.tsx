import React from 'react';
import { graphql } from 'gatsby';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import Layout from './Layout';
import Head from './Head';
import Nav from './Nav';
import styled from 'styled-components';
import { Grid, Row, Col } from 'react-styled-flexboxgrid';

const Content = styled(Col)`
  overflow: hidden;
  padding: 64px 32px;
`;

const Sidebar = styled(Col)`
  padding: 24px 12px;
`;

const A = styled.a`
  display: block;
  font-size: 16px;
  margin-bottom: 12px;
`;

const PaginationButton = styled.a`
  text-decoration: none;
  color: black;
  font-size: 16px;
  border: 1px solid grey;
  box-sizing: border-box;
  padding: 12px;
  margin-top: 12px;
  display: inline-block;
  margin-right: 12px;
  transition: 0.2s;
  &:hover {
    background-color: silver;
  }
`;

const PageTemplate: React.FC<{ data: DocQuery }> = ({
  data: { mdx, allMdx },
}) => {
  const edges = allMdx.edges || [];
  const indexData = edges
    .filter(
      edge =>
        edge.node.fields &&
        edge.node.fields.slug &&
        edge.node.frontmatter &&
        edge.node.frontmatter.title,
    )
    .map(edge => ({
      slug: edge.node!.fields!.slug!,
      title: edge.node.frontmatter!.title!,
    }));

  const currentEdge = edges.find(edge => edge.node.id === mdx?.id);
  const previousNode =
    currentEdge &&
    currentEdge.previous &&
    currentEdge.previous.fields &&
    currentEdge.previous.fields.slug &&
    currentEdge.previous.frontmatter &&
    currentEdge.previous.frontmatter.title
      ? currentEdge.previous
      : undefined;
  const nextNode =
    currentEdge &&
    currentEdge.next &&
    currentEdge.next.fields &&
    currentEdge.next.fields.slug &&
    currentEdge.next.frontmatter &&
    currentEdge.next.frontmatter.title
      ? currentEdge.next
      : undefined;

  return (
    <Layout>
      <Head />
      <Nav />
      <Grid fluid>
        <Row>
          <Sidebar xs={false} sm={2}>
            <input placeholder="搜尋任何文字..." />
            <h3>文件列表</h3>
            {indexData.map(index => (
              <A key={index.slug} href={index.slug}>
                {index.title}
              </A>
            ))}
          </Sidebar>
          <Content xs={12} sm={10}>
            {mdx?.body && <MDXRenderer>{mdx?.body}</MDXRenderer>}
            {previousNode && (
              <PaginationButton href={previousNode.fields!.slug!}>
                上一章：{previousNode.frontmatter!.title!}
              </PaginationButton>
            )}
            {nextNode && (
              <PaginationButton href={nextNode.fields!.slug!}>
                下一章：{nextNode.frontmatter!.title!}
              </PaginationButton>
            )}
          </Content>
        </Row>
      </Grid>
    </Layout>
  );
};

export const query = graphql`
  query Doc($id: String) {
    allMdx(sort: { order: ASC, fields: frontmatter___index }) {
      edges {
        previous {
          fields {
            slug
          }
          frontmatter {
            title
          }
        }
        next {
          fields {
            slug
          }
          frontmatter {
            title
          }
        }
        node {
          id
          fields {
            slug
          }
          frontmatter {
            title
          }
        }
      }
    }
    mdx(id: { eq: $id }) {
      id
      body
      frontmatter {
        title
      }
    }
  }
`;

export default PageTemplate;
