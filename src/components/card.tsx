import * as React from "react";
import { Box } from "@chakra-ui/react";

const Card = (props: any) => {
  return <Box
    boxShadow="md"
    bg="titlebgcolor"
    fontFamily="content"
    p="4"
    {...props}
  />;
};

export default Card;
