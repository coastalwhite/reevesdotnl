import { Box } from "@chakra-ui/react";
import React from "react";
import Base from "../base";
import TitledCard from "../cards/titled-card";
import { LinkName } from "../menu";

interface PDFViewLayoutProps {
  pageName: LinkName;
  pageTitle?: string;
  children?: React.ReactNode;
}

const PDFViewLayout = (props: PDFViewLayoutProps) => {
  const {
    pageName,
    pageTitle,
    children,
  } = props;

  return (
    <Base pageName={pageName}>
      <Box w="100%">
        <TitledCard title={pageTitle}>
          {children}
        </TitledCard>
      </Box>
    </Base>
  );
};

export default PDFViewLayout;
