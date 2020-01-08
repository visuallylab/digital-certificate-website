import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Img, { FixedObject } from 'gatsby-image';

/*
 * This component is built using `gatsby-image` to automatically serve optimized
 * images with lazy loading and reduced file sizes. The image is loaded using a
 * `useStaticQuery`, which allows us to load the image from directly within this
 * component, rather than having to pass the image data down from pages.
 *
 * For more information, see the docs:
 * - `gatsby-image`: https://gatsby.dev/gatsby-image
 * - `useStaticQuery`: https://www.gatsbyjs.org/docs/use-static-query/
 */

type Props = {
  src: string;
};

const Image: React.FC<Props> = ({ src }) => {
  const { allFile }: ImageQuery = useStaticQuery(graphql`
    query Image {
      allFile {
        nodes {
          name
          childImageSharp {
            fixed(width: 180) {
              ...GatsbyImageSharpFixed
            }
          }
        }
      }
    }
  `);

  const source = allFile.nodes.find(node => node.name === src);

  return source ? (
    <Img
      fixed={source!.childImageSharp!.fixed as FixedObject}
      imgStyle={{
        borderRadius: '50%',
      }}
    />
  ) : null;
};

export default Image;
