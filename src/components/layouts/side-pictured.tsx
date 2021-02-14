import * as React from "react";
import Base from "../../components/base";

import { Box, Flex } from "@chakra-ui/react";
import SideImagesCard, {
  ImageProps,
} from "../../components/cards/side-images-card";
import { LinkName } from "../menu";

interface SidePicturedLayoutProps {
  pageName: LinkName;
  pageTitle?: string;
  images: ImageProps[];
  children?: React.ReactNode;
}

const SidePicturedLayout = (props: SidePicturedLayoutProps) => {
  const { pageName, pageTitle, images, children } = props;

  return (
    <Base pageName={pageName}>
      <Flex direction={["column", "row"]} w="100%">
        <Box mr={["0", "4"]} mb={["4", "0"]} w={["100%", "sm"]}>
          <SideImagesCard
            title={pageTitle}
            images={images}
          />
        </Box>

        <Box flex="1">
          {children}
        </Box>
      </Flex>
    </Base>
  );
};

export default SidePicturedLayout;
