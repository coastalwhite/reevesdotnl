import * as React from "react";
import { Box, Link, Text } from "@chakra-ui/react";
import RelatedLink from "../../components/related-link";
import CoverImageLayout from "../../components/layouts/cover-image";
import TitledCard from "../../components/cards/titled-card";
import { useStaticQuery, graphql } from "gatsby";
import { LoadWithMD } from "../../md-graphql";

interface FrontmatterProps {
    title: string;
}
const GondwanaPage = () => {

    const data = useStaticQuery(graphql`
        {
          allFile(filter: { extension: { eq: "pdf" } }) {
            edges {
              node {
                publicURL
                name
              }
            }
          }
        }
    `)
    const principles = data.allFile.edges.map(x => x.node).find(x => x.name.match("principles of global"));
    return (LoadWithMD<FrontmatterProps>(
        "gondwana.md",
        (html, fm) => (
            <CoverImageLayout
                pageName="gondwana"
                pageTitle="Gondwana"
                coverImgSrc="/assets/img/gondwana.gif"
                coverImgAlt="Gondwana"
            >
                <Box maxW="100vw">
                    <TitledCard title={fm.title}>
                        <RelatedLink
                            to="http://www.reeves.nl/upload/Preface-2025-large.pdf"
                            text="Preface 2025"
                            absoluteUrl
                        />
                        <RelatedLink
                            to="animations"
                            text="Animations"
                        />
                        <RelatedLink to="updates" text="Research updates" />
                        <RelatedLink to="other-material" text="Appendices" />

                        <Box mt="4" dangerouslySetInnerHTML={{ __html: html }} />
                    </TitledCard>
                </Box>
            </CoverImageLayout>
        )
    ));
};

export default GondwanaPage;
