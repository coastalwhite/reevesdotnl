import * as React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { Image } from '@chakra-ui/react';

const Logo = () => {
    const logoData = useStaticQuery(graphql`
    query logoQuery {
      allFile(filter: { sourceInstanceName: { eq: "assets" }, name: { eq: "logo-earthworks" } }) {
        edges {
          node {
            publicURL
          }
        }
      }
    }
    `);

    return <Image
        h="32"
        maxW="100%"
        px="2"
        mx={["auto", "auto", "0"]}
        src={logoData.allFile.edges[0].node.publicURL}
        alt="Logo Earthworks"
    />;
};

export default Logo;
