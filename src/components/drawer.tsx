import * as React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { Image } from '@chakra-ui/react';

const Drawer = () => {
    const drawerData = useStaticQuery(graphql`
    query drawerQuery {
      allFile(filter: { sourceInstanceName: { eq: "assets" }, name: { eq: "drawer" } }) {
        edges {
          node {
            publicURL
          }
        }
      }
    }
    `);

    return <Image src={drawerData.allFile.edges[0].node.publicURL} h="8" alt="Show/Hide Menu" />;
};

export default Drawer;
