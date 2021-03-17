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
        </Box >
    );
};

const NewsPage = (props: { data: QueryReturnType }) => {
    const articles = props.data.allMdx.edges.map((x) => x.node)
        .sort(({ frontmatter: a }, { frontmatter: b }) => (a.date == b.date ? 0 : (a.date < b.date ? 1 : -1))).map(({ excerpt, slug, frontmatter: fm }) => ({
            html: excerpt,
            title: fm.title,
            pageName: slug,
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
    allMdx: {
        edges: {
            node: {
                excerpt: string;
                slug: string;
                frontmatter: {
                    date: string;
                    title: string;
                };
            };
        }[];
    };
};

export const query = graphql`
    query NewsArticles {
        allMdx(filter: {slug: {regex: "/news/"}}) {
            edges {
              node {
                frontmatter {
                  title
                  date
                }
                excerpt(pruneLength: 400)
                slug
              }
            }
          }
    }
`;

export default NewsPage;
