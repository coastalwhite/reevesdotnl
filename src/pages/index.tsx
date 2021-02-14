import { Box, Flex } from "@chakra-ui/react";
import * as React from "react";
import ShortAboutCard from "../components/cards/short-about";
import TitledCard from "../components/cards/titled-card";
import CoverImageLayout from "../components/layouts/cover-image";

const IndexPage = () => {
  return (
    <CoverImageLayout
      pageName="homepage"
      coverImgSrc="/assets/img/animation.gif"
      coverImgAlt="Gondwana"
    >
      <Flex direction="column">
        <Box mb="4">
          <ShortAboutCard />
        </Box>
        <Box>
          <TitledCard title="Latest Update">
            This is the latest update...
          </TitledCard>
        </Box>
      </Flex>
    </CoverImageLayout>
  );
};

export default IndexPage;
