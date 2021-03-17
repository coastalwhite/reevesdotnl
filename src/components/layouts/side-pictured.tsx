import * as React from "react";
import Base from "../../components/base";

import { Box, Flex } from "@chakra-ui/react";
import SideImagesCard, {
    ImageProps,
} from "../../components/cards/side-images-card";
import { LinkName } from "../menu";
import { graphql, useStaticQuery } from "gatsby";

interface SidePicturedLayoutProps {
    pageName: LinkName;
    pageTitle?: string;
    images: ImageProps[];
    children?: React.ReactNode;
}

const SidePicturedLayout = (props: SidePicturedLayoutProps) => {
    const { pageName, pageTitle, images, children } = props;

    const imageData = useStaticQuery(graphql`
      query imageQuery {
          allFile(filter: { sourceInstanceName: { eq: "assets" }}) {
            edges {
              node {
                absolutePath
                publicURL
              }
            }
          }
        }`);

    const nodes = imageData.allFile.edges.map(x => x.node);
    const transformedImages = images.map(({ src, alt }) => ({ src: nodes.find(x => x.absolutePath.includes(src)).publicURL, alt }));

    return (
        <Base pageName={pageName}>
            <Flex direction={["column", "column", "row"]} w="100%">
                <Box
                    mr={["0", "0", "4"]}
                    mb={["4", "4", "0"]}
                    w={["100%", "100%", "sm"]}
                >
                    <SideImagesCard
                        title={pageTitle}
                        images={transformedImages}
                    />
                </Box>

                <Box flex="1">
                    {children}
                </Box>
            </Flex>
        </Base>
    );
};

export default SidePicturedLayout;
