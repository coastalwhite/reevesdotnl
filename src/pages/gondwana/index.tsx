import * as React from "react";
import { Box, Link, Text } from "@chakra-ui/react";
import RelatedLink from "../../components/related-link";
import CoverImageLayout from "../../components/layouts/cover-image";
import TitledCard from "../../components/cards/titled-card";
import { useStaticQuery, graphql } from "gatsby";

const text =
    "How did Gondwana break up exactly?  The southern continents – more than half the world’s land area – share much geological and tectonic history.  The formation of Gondwana as a ‘supercontinent’ was completed at the start of Phanerozoic times, about 540 million years ago (540 Ma). It remained intact as a single large landmass for two-thirds of the time between then and now, eventually starting to fragment in the Jurassic period, about 184 Ma. During Early Cretaceous times, especially in the interval 140-120 Ma, most of the present continental outlines were established and these fragments started moving apart to give the familiar geography of today with almost half of the world’s oceans now separating them. The research presented here has attempted to define step by step the history of this dispersal against the geological time-scale and in geometrical detail. While evidence of all sorts has been used, it is the careful interpretation of the topography of the sea floor, revealed in detail by satellite gravimetry only since about 1997, that has been key to this new understanding. The continental margins formed in the process - and the rifts that have penetrated but not separated the present-day continents - are of immense economic importance.  The links below lead to a large resource of information from the principles of global tectonics by way of graphic animations and published texts to the latest pre-publication research ideas.";

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
    return (
        <CoverImageLayout
            pageName="gondwana"
            pageTitle="Gondwana"
            coverImgSrc="/assets/img/gondwana.gif"
            coverImgAlt="gondwana"
        >
            <TitledCard title="Links">
                <Text mb="4">
                    {text}
                </Text>

                <RelatedLink
                    to={principles.publicURL}
                    text="Principles of global tectonics"
                />
                <RelatedLink
                    to="/gondwana/animations"
                    text="Selected animations"
                />
                <RelatedLink to="/gondwana/updates" text="Research updates" />
                <RelatedLink to="/gondwana" text="Twelve lectures" />
                <RelatedLink to="/gondwana" text="Other material" />
            </TitledCard>
        </CoverImageLayout>
    );
};

export default GondwanaPage;
