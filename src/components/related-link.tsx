import {Box, Link} from "@chakra-ui/react";
import React from "react";

import { Link as GatsbyLink } from 'gatsby'

const RelatedLink = (props: { to: string; text: string }) => {
  return (
    <Box borderBottomColor="seperatorcolor" borderBottomWidth="thin">
      <GatsbyLink to={props.to}>
        <Link color="refcolor" fontSize="xl">{props.text}</Link>
      </GatsbyLink>
    </Box>
  );
};

export default RelatedLink
