import * as React from "react";
import { Box, Center, Flex, Image, Link } from "@chakra-ui/react";
import TitledCard from "./titled-card";
import { LoadWithMD } from "../../md-graphql";
import { graphql, useStaticQuery } from "gatsby";

interface FrontmatterProps {
    title: string;
    image_path: string;
    image_alt: string;
    readmore_uri: string;
}

const ShortAboutCard = () => {
    const mugshotData = useStaticQuery(graphql`
    {
      allFile(filter: { sourceInstanceName: { eq: "assets" }, name: { eq: "smallmugshot" } }) {
        edges {
          node {
            publicURL
          }
        }
      }
    }
    `);

    return LoadWithMD<FrontmatterProps>(
        "short-about.md",
        (html, fm) => (<TitledCard title={fm.title}>
            <Flex direction="row">
                <Center w="32" mr="4">
                    <Image
                        src={mugshotData.allFile.edges[0].node.publicURL}
                        alt={fm.image_alt}
                        w="100%"
                    />
                </Center>
                <Box flex="1">
                    <Box dangerouslySetInnerHTML={{ __html: html }} />
                    <Link color="refcolor" href={fm.readmore_uri}>
                        Read more...
          </Link>
                </Box>
            </Flex>
        </TitledCard>),
    );
}

export default ShortAboutCard;
