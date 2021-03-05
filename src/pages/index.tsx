import { Box, Flex } from "@chakra-ui/react";
import * as React from "react";
import LatestUpdateCard from "../components/cards/latest-update";
import ShortAboutCard from "../components/cards/short-about";
import CoverImageLayout from "../components/layouts/cover-image";

const IndexPage = () => {
  return (
    <CoverImageLayout
      pageName="homepage"
      coverImgSrc="/assets/img/homepage.gif"
      coverImgAlt="Gondwana"
    >
      <Flex direction="column">
        <Box mb="4">
          <ShortAboutCard />
        </Box>
        <Box>
          <LatestUpdateCard />
        </Box>
      </Flex>
    </CoverImageLayout>
  );
};

export default IndexPage;
