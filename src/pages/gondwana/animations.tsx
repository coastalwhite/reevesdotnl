import * as React from "react";
import { Box } from "@chakra-ui/react";
import RelatedLink from "../../components/related-link";
import CoverImageLayout from "../../components/layouts/cover-image";
import TitledCard from "../../components/cards/titled-card";

const text =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris mattis ipsum a massa feugiat, at posuere eros posuere. Aliquam rhoncus lectus at lorem porttitor fringilla. Donec placerat bibendum risus.";

const GondwanaCoursePage = () => {
  const animations = [
    { title: "Indian Ocean", linkTo: "/gondwana" },
    { title: "South Atlantic Ocean", linkTo: "/gondwana" },
    { title: "Bouvet triple junction", linkTo: "/gondwana" },
    { title: "India Madagaskar Africa", linkTo: "/gondwana" },
    { title: "Mantle plume reference frame", linkTo: "/gondwana" },
  ];
  return (
    <CoverImageLayout
      pageName="gondwana"
      coverImgSrc="/assets/img/animation.gif"
      coverImgAlt="gondwana"
    >
      <TitledCard title="Selected Animations">
        <Box mb="4">
          {text}
        </Box>

        {animations.map((animation) =>
          <RelatedLink
            to={animation.linkTo}
            text={animation.title}
          />
        )}
      </TitledCard>
    </CoverImageLayout>
  );
};

export default GondwanaCoursePage;
