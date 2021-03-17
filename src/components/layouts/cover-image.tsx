import { Box, Flex } from "@chakra-ui/react";
import { useStaticQuery, graphql } from "gatsby";
import React from "react";
import Base from "../base";
import CoverImageCard from "../cards/cover-image-card";
import { LinkName } from "../menu";

interface CoverImageLayoutProps {
    pageName: LinkName;
    pageTitle?: string;
    coverImgSrc: string;
    coverImgAlt: string;
    children?: React.ReactNode;
}

const CoverImageLayout = (props: CoverImageLayoutProps) => {
    const {
        pageName,
        pageTitle,
        coverImgSrc,
        coverImgAlt,
        children,
    } = props;

    const coverImgFetch = useStaticQuery(graphql`
    query CoverImages {
      allFile(filter: { sourceInstanceName: { eq: "assets" } }) {
        edges {
          node {
            publicURL
            absolutePath
          }
        }
      }
    }
    `);

    const coverImg = coverImgFetch.allFile.edges.map(x => x.node).find(x => x.absolutePath.match(coverImgSrc));

    return (
        <Base pageName={pageName}>
            <Flex direction={["column", "column", "row"]} w="100%">
                <Box flex="2" mr={["0", "0", "4"]} mb={["4", "4", "0"]} w={["100%", "auto", "auto"]}>
                    <CoverImageCard
                        title={pageTitle}
                        src={coverImg.publicURL}
                        alt={coverImgAlt}
                    />
                </Box>
                <Box flex="1" minW="md">
                    {children}
                </Box>
            </Flex>
        </Base>
    );
};

export default CoverImageLayout;
