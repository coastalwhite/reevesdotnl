import * as React from "react";
import { Box } from "@chakra-ui/react";
import RelatedLink from "../../components/related-link";
import CoverImageLayout from "../../components/layouts/cover-image";
import TitledCard from "../../components/cards/titled-card";

const text =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris mattis ipsum a massa feugiat, at posuere eros posuere. Aliquam rhoncus lectus at lorem porttitor fringilla. Donec placerat bibendum risus, vitae finibus quam. Sed ipsum nunc, pretium eu fringilla vel, tincidunt et est. Morbi varius tincidunt massa, eu tristique magna feugiat quis. Sed in pellentesque diam, eu vehicula felis. Fusce interdum, orci ut dignissim imperdiet, leo mauris varius ante, eu tincidunt lorem magna et elit. Vivamus diam tellus, commodo sed turpis non, aliquet pretium ligula. Maecenas et ipsum eleifend, blandit sem nec, porttitor nunc. Etiam et dui in magna pulvinar hendrerit nec a nisl.";

const GondwanaCoursePage = () => {
  return (
    <CoverImageLayout
      pageName="gondwana"
      coverImgSrc="/assets/img/animation.gif"
      coverImgAlt="gondwana"
    >
      <TitledCard title="Principles of global tectonics">
        <Box mb="4">
          {text}
        </Box>

        <RelatedLink
          to="/gondwana"
          text="Course Brochure"
        />
        <RelatedLink
          to="/gondwana"
          text="Course notes"
        />
        <RelatedLink to="/gondwana" text="12 Power Presentations" />
      </TitledCard>
    </CoverImageLayout>
  );
};

export default GondwanaCoursePage;
