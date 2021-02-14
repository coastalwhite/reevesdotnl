import * as React from "react";

import { Box, Flex, Link } from "@chakra-ui/react";
import { Link as GatsbyLink } from "gatsby";
import TitledCard from "../../components/cards/titled-card";
import SidePicturedLayout from "../../components/layouts/side-pictured";

const Section = (
  props: { title: string; text: string; pageName: string },
) => {
  return (
    <Box w="100%" mb="4">
      <TitledCard title={props.title}>
        <Box>
          {props.text}
        </Box>
        <Box>
          <GatsbyLink to={"/about/" + props.pageName}>
            <Link color="refcolor">
              Read more...
            </Link>
          </GatsbyLink>
        </Box>
      </TitledCard>
    </Box>
  );
};

const reevesText =
  "Colin Reeves is an earth scientist specialised in geophysical mapping. In a career spanning more than 50 years he has worked primarily in Africa and the southern hemisphere on national airborne survey programmes. For 20 years he was Professor in Exploration Geophysics at ITC in Delft, teaching and supervising graduate students from the region. He then returned to consulting on country-wide aeromagnetic survey programmes designed to explore hidden geology for international agencies supporting governments in Africa. He has been based successively in Botswana, UK, Canada, Australia and The Netherlands. He has lectured widely on regional geophysical exploration, was Association Lecturer for IAGA in 2009, AAPG Distinguished Lecturer in Europe in 2011 and winner of the Best Paper award at the PESGB ‘Africa’ meeting in London in 2015. His publications include ‘Aeromagnetic surveys: principles, practice and interpretation’. Since 2017 he has been a member of the Geological Society’s Stratigraphy Commission. In his retirement he endeavours to share his unique insights and experience to realise their scientific value to studies of Gondwana and its dispersal.";

const earthworksText =
  "Earthworks was founded in 2001 as a vehicle for Colin’s consulting activities. Many projects have involved the supervision and interpretation of airborne geophysical mapping programmes in Uganda, Madagascar, Nigeria and Malawi for the World Bank and other agencies. The company has also consulted for oil majors in regional exploration strategies in Africa and India. Since 2018 the work has concentrated on an integrated study of Gondwana dispersal and its relevance to the energy sector and supporting the new Geological Map of Gondwana (IGCP-628). ’Global thinking in exploration geoscience’ encapsulates the ambition of Earthworks to set exploration projects in their global tectonic context from a scientific standpoint as well as to realise the potential of the earth sciences in the strategic economic development of emerging economies in Africa and elsewhere.";

const AboutPage = () => {
  const articles = [{
    title: "Colin Reeves",
    text: reevesText,
    pageName: "",
  }, {
    title: "Earthworks",
    text: earthworksText,
    pageName: "",
  }];

  return (
    <SidePicturedLayout
      pageName="about"
      pageTitle="About"
      images={[{ src: "img/personal.jpg", alt: "news" }, {
        src: "img/magnetic-anomalies.bmp",
        alt: "animation",
      }]}
    >
      <Flex direction="column" flex="1">
        {articles.map((article) => <Section {...article} />)}
      </Flex>
    </SidePicturedLayout>
  );
};

export default AboutPage;
