import * as React from "react";

import { Box, Flex, Link } from "@chakra-ui/react";
import { graphql, Link as GatsbyLink } from "gatsby";
import TitledCard from "../../components/cards/titled-card";
import SidePicturedLayout from "../../components/layouts/side-pictured";

const Section = (props: { title: string; html: string; pageName: string }) => {
  return (
    <Box w="100%" mb="4">
      <TitledCard title={props.title}>
        <Box dangerouslySetInnerHTML={{ __html: props.html }} />
        <Box>
          <Link color="refcolor" href={"." + props.pageName}>
            Read more...
          </Link>
        </Box>
      </TitledCard>
    </Box>
  );
};

const AboutPage = (props: { data: QueryReturnType }) => {
  const articles = props.data.allMarkdownRemark.edges
    .map((x) => x.node)
    .filter(({ fileAbsolutePath }) => fileAbsolutePath.match(/aboutpage\//))
    .map(({ html, frontmatter: fm }) => ({
      html,
      title: fm.title,
      pageName: fm.readmore_uri,
    }));

  articles.sort(({ title: titA }, { title: titB }) => (titA < titB ? -1 : 0));

  return (
    <SidePicturedLayout
      pageName="about"
      pageTitle="About"
      images={[
        { src: "img/personal.jpg", alt: "news" },
        {
          src: "img/magnetic-anomalies.bmp",
          alt: "animation",
        },
      ]}
    >
      <Flex direction="column" flex="1">
        {articles.map((article, index) => (
          <Section key={index} {...article} />
        ))}
      </Flex>
    </SidePicturedLayout>
  );
};

type QueryReturnType = {
  allMarkdownRemark: {
    edges: {
      node: {
        html: string;
        frontmatter: {
          title: string;
          readmore_uri: string;
        };
        fileAbsolutePath: string;
      };
    }[];
  };
};

export const query = graphql`
  query AboutExcerpts {
    allMarkdownRemark {
      edges {
        node {
          html
          frontmatter {
            title
            readmore_uri
          }
          fileAbsolutePath
        }
      }
    }
  }
`;

export default AboutPage;
