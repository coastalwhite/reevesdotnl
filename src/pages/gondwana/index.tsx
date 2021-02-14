import * as React from "react";
import { Box, Link } from "@chakra-ui/react";
import RelatedLink from "../../components/related-link";
import CoverImageLayout from "../../components/layouts/cover-image";
import TitledCard from "../../components/cards/titled-card";

const text =
  "Follow the links below to discover everything from the basic principles of global tectonics to the latest research on the dispersal of Gondwana, complete with animations. The work part of the IGCP Project 628, the Geological Map of Gondwana: ";

const GondwanaPage = () => {
  return (
    <CoverImageLayout
      pageName="gondwana"
      pageTitle="Gondwana"
      coverImgSrc="/assets/img/animation.gif"
      coverImgAlt="gondwana"
    >
        <TitledCard title="Links">
      <Box mb="4">
        {text}
        <Link
          color="refcolor"
          href="http://www.gondwana.geologia.ufrj.br/en/"
          isExternal
        >
          http://www.gondwana.geologia.ufrj.br/en/
        </Link>
      </Box>

      <RelatedLink
        to="/gondwana/course"
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
