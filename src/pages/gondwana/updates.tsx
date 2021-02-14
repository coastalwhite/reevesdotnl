import * as React from "react";
import { Box } from "@chakra-ui/react";
import RelatedLink from "../../components/related-link";
import CoverImageLayout from "../../components/layouts/cover-image";
import TitledCard from "../../components/cards/titled-card";

const text =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris mattis ipsum a massa feugiat, at posuere eros posuere. Aliquam rhoncus lectus at lorem porttitor fringilla. Donec placerat bibendum risus.";

const GondwanaUpdatesPage = () => {
  const updates = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((index) => ({
    updateTitle: ("Research update #" + (index + 1)),
    linkTo: "/news",
  }));
  return (
    <CoverImageLayout
      pageName="gondwana"
      coverImgSrc="/assets/img/animation.gif"
      coverImgAlt="gondwana"
    >
      <TitledCard title="Research Updates">
        <Box mb="4">
          {text}
        </Box>

        {updates.map((update) =>
          <RelatedLink
            to={update.linkTo}
            text={update.updateTitle}
          />
        )}
      </TitledCard>
    </CoverImageLayout>
  );
};

export default GondwanaUpdatesPage;
