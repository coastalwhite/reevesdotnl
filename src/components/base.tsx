import * as React from "react";
import Menu, { LinkName } from "./menu";
import { Box, Flex } from "@chakra-ui/react";
import { containerWidths } from "../constants";

interface BaseProps {
  pageName: LinkName;
  children: React.ReactNode;
}

const Base = (props: BaseProps) => {
  return (
    <Flex
      direction="column"
      bg="bgcolor"
      minH="100vh"
      maxW="100vw"
      pb={["8", "0"]}
    >
      <Menu enabled={props.pageName} />
      <Box w={containerWidths} mx={["0", "auto"]} mt="4" flex="1">
        {props.children}
      </Box>
    </Flex>
  );
};

export default Base;
