import React from 'react';
import Helmet from 'react-helmet';
import { graphql, useStaticQuery } from 'gatsby';
import product from '@/constant/product.json';

type Props = {
  description?: string;
  lang?: string;
  title?: string;
};

const query = graphql`
  query Head {
    site {
      siteMetadata {
        title
        siteUrl
        image
        description
      }
    }
  }
`;

const Head: React.FC<Props> = ({ description, lang = 'zh-TW', title = '' }) => {
  const { site }: HeadQuery = useStaticQuery(query);
  const metaDescription = description || site?.siteMetadata?.description || '';

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={`${title} | ${product.slogan}`}
      meta={[
        {
          name: `description`,
          content: metaDescription,
        },
        {
          property: `og:image`,
          content: `${site?.siteMetadata?.siteUrl}${site?.siteMetadata?.image}`,
        },
        {
          property: `og:title`,
          content: title,
        },
        {
          property: `og:description`,
          content: metaDescription,
        },
        {
          property: `og:type`,
          content: `website`,
        },
        {
          name: `twitter:card`,
          content: `summary`,
        },
        {
          name: `twitter:title`,
          content: title,
        },
        {
          name: `twitter:description`,
          content: metaDescription,
        },
      ]}
    />
  );
};

export default Head;
