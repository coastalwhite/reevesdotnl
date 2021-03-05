import * as React from "react";

import { Box, Flex, Link } from "@chakra-ui/react";
import { graphql } from "gatsby";
import TitledCard from "../../components/cards/titled-card";
import SidePicturedLayout from "../../components/layouts/side-pictured";

const ArticlePreview = (
  props: { title: string; html: string; pageName: string },
) => {
  return (
    <Box w="100%" mb="4">
      <TitledCard title={props.title}>
        <Box dangerouslySetInnerHTML={{ __html: props.html }} />
        <Box>
          <Link color="refcolor" href={props.pageName}>
            Read more...
          </Link>
        </Box>
      </TitledCard>
    </Box>
  );
};

const NewsPage = (props: { data: QueryReturnType }) => {
  const articles = props.data.allMarkdownRemark.edges.map((x) => x.node).filter(
    (
      { fileAbsolutePath },
    ) => fileAbsolutePath.match(/news\//),
  ).map(({ html, frontmatter: fm }) => ({
    html,
    title: fm.title,
    pageName: fm.readmore_uri,
  }));

  return (
    <SidePicturedLayout
      pageName="news"
      pageTitle="News"
      images={[{ src: "img/news.jpg", alt: "news" }, {
        src: "img/animation.gif",
        alt: "animation",
      }]}
    >
      <Flex direction="column" flex="1">
        {articles.map((article, index) =>
          <ArticlePreview key={index} {...article} />
        )}
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
    query NewsArticles {
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

export default NewsPage;
