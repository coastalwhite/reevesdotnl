import * as React from "react";
import { Box } from "@chakra-ui/react";

interface TwoArticleColumnsProps {
  children?: React.ReactNode;
}

const TwoArticleColumns = (props: TwoArticleColumnsProps) => {
  return (
    <Box
      css={{
        "-webkit-column-count": '2',
        "-moz-column-count": '2',
        "column-count": '2',
        "-webkit-column-width": "20em",
        "-moz-column-width": "20em",
        "column-width": "20em",
      }}
    >
      {props.children}
    </Box>
  );
};

export default TwoArticleColumns;
