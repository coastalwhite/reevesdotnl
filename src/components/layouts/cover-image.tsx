import { Box, Flex } from "@chakra-ui/react";
import React from "react";
import Base from "../base";
import CoverImageCard from "../cards/cover-image-card";
import { LinkName } from "../menu";

interface CoverImageLayoutProps {
  pageName: LinkName;
  pageTitle?: string;
  coverImgSrc: string;
  coverImgAlt: string;
  children?: React.ReactNode;
}

const CoverImageLayout = (props: CoverImageLayoutProps) => {
  const {
    pageName,
    pageTitle,
    coverImgSrc,
    coverImgAlt,
    children,
  } = props;

  return (
    <Base pageName={pageName}>
      <Flex direction={["column", "row"]} w="100%">
        <Box flex="1" mr={["0", "4"]} mb={["4", "0"]} w={["100%", "auto"]}>
          <CoverImageCard
            title={pageTitle}
            src={coverImgSrc}
            alt={coverImgAlt}
          />
        </Box>
        <Box w={["100%", "md"]}>
            {children}
        </Box>
      </Flex>
    </Base>
  );
};

export default CoverImageLayout;
