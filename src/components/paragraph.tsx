import * as React from "react";
import { Box, Heading } from "@chakra-ui/react";

interface ParagraphProps {
  heading?: string;
  children?: React.ReactNode;
}

const Paragraph = (props: ParagraphProps) => {
  const { heading, children } = props;
  return (
    <Box mb="4">
      {heading &&
        <Heading size="md" fontFamily="heading">
          {heading}
        </Heading>}
      {children}
    </Box>
  );
};

export default Paragraph;
