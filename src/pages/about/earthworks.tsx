import * as React from "react";
import PDFViewLayout from "../../components/layouts/pdf-view";
import Paragraph from "../../components/paragraph";
import TwoArticleColumns from "../../components/two-article-columns";
import { Image } from "@chakra-ui/react";

const AboutEarthworksPage = () => {
  return (
    <PDFViewLayout pageName="about" pageTitle="About Earthworks">
      <TwoArticleColumns>
        <Paragraph heading="Motivation">
          Systematic resource exploration starts with geological reconnaissance.
          Geological mapping was therefore a priority in many countries during
          the colonial era, underpinned by heroic campaigns of field mapping,
          supported in due course by the interpretation of aerial photography
          and satellite imagery. The sheer size of areas still to be covered is
          daunting and the problems of tedious land access are compounded by the
          paucity of bedrock exposure over large parts of most continents. The
          continental margins offer virtually no exposure. Since about 1950,
          airborne magnetometer surveys have shown their ability to offer fast
          geological reconnaissance of large areas at low cost, regardless of
          surface conditions. Such surveys evolved in their sophistication and
          were joined by high resolution gamma-ray spectrometry by the 1990s.
          Airborne gravity is also gaining its place amongst the most pertinent
          technologies. The economic importance of extending geological mapping
          into these areas without outcrop – and into the third dimension
          everywhere – is probably still underestimated by the wider earth
          science community.
        </Paragraph>
        <Paragraph>
          Our approach has been to face up to this challenge squarely, starting
          with the initial forays into the geology below the sands of the
          Kalahari in Botswana, and focusing on the key role of national
          geological surveys in collating, understanding and disseminating basic
          geological knowledge for their territories in support of economic
          exploration. A better appreciation of the broader features of
          continental geology for all Africa, in turn, allows the continent to
          be fitted more elegantly into larger Precambrian entities like
          Gondwana, Pangea and Rodinia. Further, applying the thought processes
          of global tectonics helps unravel exactly how the present continents
          and their margins have evolved over geological time. Within the
          continuum of geological knowledge from the scale of a map sheet to
          that of the whole earth, regional geophysical surveys afford an
          important bridge. Thorough, intelligent and informed inventory of
          solid mineral and hydrocarbon prospectivity on land and at sea is
          essential both to the commercial resource sector and to national and
          international authorities. Despite their key economic role in this,
          many national geological surveys - in Africa particularly - are still
          starved of resources. Aid programmes attempting to compensate for
          decades of under-performance have routinely turned to airborne
          geophysical surveys to accelerate the national resource mapping
          process and provide pre-competitive baseline data to the exploration
          sector. Wherever possible within these programmes, Earthworks has
          sought to assist in institutional strengthening and capacity building.
          We argue that this process starts with a management strategy at the
          top of the organization that is prepared to cope with the changing
          working environment that results from having modern information and
          communications technology (ICT) at the core of an effective
          organisation. We have used management consultants versed in the
          ‘management of change’ to help achieve this. Re-orienting national
          geological surveys into the advantages of ICT for the archiving,
          managing and dissemination of national geo-data via internet is a
          fundamental change that has revolutionized the business of national
          surveys. The need, in many cases, is to transform out-dated
          bureaucracies into modern, pro-active knowledge companies that seek
          success in retailing geological data in appropriate formats to all
          those concerned with decision-making in the resource sector.
        </Paragraph>
        <Paragraph>
          In our scientific assignments, integration of cartographic
          capabilities in global tectonics with geophysical mapping and geology
          offers new clarity to the processes of earth-resource generation. This
          involves paleo-reconstructions, digital geological cartography and
          data-mining together with the added value of interpretation of
          regional geophysical mapping. The aim is to deliver dividends in
          commercial exploration strategies and in national resource
          inventories. Priority is now being given to research activities and
          supporting the new Geological Map of Gondwana (IGCP-628). Earlier
          contributions to basic research have included, for example, the
          Magnetic Anomaly Map of the World, two scientific encyclopaedias and
          many workshops and training programmes. We are now particularly
          interested in cooperating with others with expertise, experience and
          non-confidential data (particularly in Africa) that can be shared with
          the wider earth science community.
        </Paragraph>
        <i>2021 January 27.</i>
        <Image
          src="/assets/img/about/earthworks/pic1.jpg"
          alt="National gravity survey of Botswana"
          my="4"
          w="100%"
        />
      </TwoArticleColumns>
    </PDFViewLayout>
  );
};

const _x = <p>
  <Image
    src="/assets/img/about/earthworks/pic2.jpg"
    alt="Aeromagnetic Surveys"
    my="4"
    w="100%"
  />
  <Image
    src="/assets/img/about/earthworks/pic3.jpg"
    alt="The global thinker"
    my="4"
    w="100%"
  />
</p>;

export default AboutEarthworksPage;