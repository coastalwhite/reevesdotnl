import * as React from "react";
import Card from "../card";

import { Box, Flex, Heading, Image } from "@chakra-ui/react";

export interface ImageProps {
  src: string;
  alt: string;
}
interface SideImagesCardProps {
  title?: string;
  images: ImageProps[];
}

const SideImagesCard = (props: SideImagesCardProps) => {
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
        <Box>
          {props.images.map((image, index) =>
            <Image
              key={index}
              src={"/assets/" + image.src}
              alt={image.alt}
              mb="4"
            />
          )}
        </Box>
      </Flex>
    </Card>
  );
};

export default SideImagesCard;
