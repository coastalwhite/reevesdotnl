import * as React from "react";
import Base from "../../components/base";

import { Box, Flex, Link } from "@chakra-ui/react";
import { Link as GatsbyLink } from "gatsby";
import TitledCard from "../../components/cards/titled-card";
import SideImagesCard from "../../components/cards/side-images-card";
import SidePicturedLayout from "../../components/layouts/side-pictured";

const ArticlePreview = (
  props: { title: string; text: string; pageName: string },
) => {
  return (
    <Box w="100%" mb="4">
      <TitledCard title={props.title}>
        <Box>
          {props.text}
        </Box>
        <Box>
          <GatsbyLink to={"/news/" + props.pageName}>
            <Link color="refcolor">
              Read more...
            </Link>
          </GatsbyLink>
        </Box>
      </TitledCard>
    </Box>
  );
};

const newsText =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris mattis ipsum a massa feugiat, at posuere eros posuere. Aliquam rhoncus lectus at lorem porttitor fringilla. Donec placerat bibendum risus, vitae finibus quam. Sed ipsum nunc, pretium eu fringilla vel, tincidunt et est. Morbi varius tincidunt massa, eu tristique magna feugiat quis. Sed in pellentesque diam, eu vehicula felis. Fusce interdum, orci ut dignissim imperdiet, leo mauris varius ante, eu tincidunt lorem magna et elit. Vivamus diam tellus, commodo sed turpis non, aliquet pretium ligula. Maecenas et ipsum eleifend, blandit sem nec, porttitor nunc. Etiam et dui in magna pulvinar hendrerit nec a nisl.";

const NewsPage = () => {
  const articles = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((index) => ({
    title: "Article " + index,
    text: newsText,
    pageName: "",
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
        {articles.map((article) => <ArticlePreview {...article} />)}
      </Flex>
    </SidePicturedLayout>
  );
};

export default NewsPage;
