import { Box, Link } from "@chakra-ui/react";
import React from "react";

const RelatedLink = (props: { to: string; text: string }) => {
  return (
    <Box borderBottomColor="seperatorcolor" borderBottomWidth="thin">
      <Link color="refcolor" fontSize="xl" href={props.to}>{props.text}</Link>
    </Box>
  );
};

export default RelatedLink;
