import * as React from "react";
import { Box, Center, Flex, Heading } from "@chakra-ui/react";
import Card from "../card";
import LoadedImage from "../loaded-image";

interface CoverImageCardProps {
  title?: string;
  src: string;
  alt: string;
}
const CoverImageCard = (props: CoverImageCardProps) => {
  return (
    <Card w="100%">
      <Flex direction="column">
        {props.title &&
          <Box
            w="100%"
            borderBottomColor="seperatorcolor"
            borderBottomWidth="thin"
            mb="4"
          >
            <Heading fontFamily="heading" size="lg">
              {props.title}
            </Heading>
          </Box>}
        <Box color="contentcolor">
          <Center>
            <LoadedImage
              src={props.src}
              alt={props.alt}
              width={["100%", "max(30vh, 100%)"]}
            />
          </Center>
        </Box>
      </Flex>
    </Card>
  );
};

export default CoverImageCard;
