import * as React from "react";
import Base from "../components/base";

import { Box, Flex, Link } from "@chakra-ui/react";
import { Link as GatsbyLink } from "gatsby";

import TitledCard from "../components/cards/titled-card";
import CoverImageCard from "../components/cards/cover-image-card";
import CoverImageLayout from "../components/layouts/cover-image";

const CategoryCard = (
  props: { title: string; text: string; pageName: string },
) => {
  return (
    <Box flex="1" mb="4">
      <TitledCard title={props.title}>
        <Box>{props.text}</Box>
        <GatsbyLink to="pageName">
          <Link color="refcolor"></Link>
        </GatsbyLink>
      </TitledCard>
    </Box>
  );
};

const PublicationsPage = () => {
  const categories = [
    {
      title: "Key Publications",
      text: "An introduction to the publications that stood the test of time",
      pageName: "/publications",
    },
    {
      title: "Comprehensive List",
      text: "A full list of publications since 1970.",
      pageName: "/publications",
    },
    {
      title: "Gondwana publications",
      text:
        "A list of publications relevant to Gondwana research, including the work of students and their theses.",
      pageName: "/publications",
    },
  ];
  return (
    <CoverImageLayout
      pageName="publications"
      pageTitle="Publications"
      coverImgSrc="/assets/img/publications.png"
      coverImgAlt="Gondwana"
    >
      <Box w={["100%", "md"]}>
        <Flex direction="column">
          {categories.map((category) => <CategoryCard {...category} />)}
        </Flex>
      </Box>
    </CoverImageLayout>
  );
};

export default PublicationsPage;
