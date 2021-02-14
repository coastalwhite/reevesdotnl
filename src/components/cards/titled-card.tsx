import * as React from "react";
import Card from "../card";

import { Box, Flex, Heading } from "@chakra-ui/react";

interface TitledCardProps {
  title: string;
  children: React.ReactNode;
}

const TitledCard = (props: TitledCardProps) => {
  return (
    <Card w="100%" h="100%">
      <Flex direction="column">
        <Box
          w="100%"
          borderBottomColor="seperatorcolor"
          borderBottomWidth="thin"
          mb="4"
        >
          <Heading fontFamily="heading" size="lg">
            {props.title}
          </Heading>
        </Box>
        <Box color="contentcolor">
          {props.children}
        </Box>
      </Flex>
    </Card>
  );
};

export default TitledCard;
