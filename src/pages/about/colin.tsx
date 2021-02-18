import * as React from "react";
import PDFViewLayout from "../../components/layouts/pdf-view";
import TwoArticleColumns from "../../components/two-article-columns";
import Paragraph from "../../components/paragraph";
import { Image, Link } from "@chakra-ui/react";

const AboutColinPage = () => {
  return (
    <PDFViewLayout pageName="about" pageTitle="About Colin Reeves">
      <TwoArticleColumns>
        <Paragraph>
          <b>
            Colin Reeves&nbsp;
          </b>
          has been involved since 1970 with the application of (airborne)
          geophysical mapping to support geological reconnaissance and resource
          exploration in the developing countries. He holds degrees from
          Cambridge, Birmingham and Leeds universities in England and started
          his professional career with the Geological Survey of Botswana in 1970
          where he planned and executed the first national gravity survey
          coverage over a five-year period. From 1976 to 1983 he lived in
          Canada, working first for Geoterrex Limited in Ottawa and then
          Paterson, Grant and Watson Limited (PGW) in Toronto. He interpreted
          the initial CIDA aeromagnetic coverage of the Kalahari in Botswana
          before spending time on similar projects in Brazil, Ivory Coast, the
          South China Sea, Tanzania, Kenya and Burundi. He became a director of
          PGW and - with Ian MacLeod - co-founded Geosoft® in this period. In
          1983 he moved to Delft, The Netherlands, becoming Professor in
          Exploration Geophysics at the International Institute for Aerial
          Survey and Earth Sciences (ITC). Here he took charge of postgraduate
          and MSc courses in exploration geophysics for students almost
          exclusively from Africa, Asia and Latin America. Some 250 students,
          including over 50 research MScs, passed through his division over 20
          years, many now holding senior positions in their own countries and
          the wider world.
        </Paragraph>
        <Paragraph>
          He continued with consulting work, mainly in Africa and India, as part
          of his ITC duties and then accepted an invitation from the Government
          of Australia to head the geophysical mapping programme of the
          Australian Geological Survey Organisation (now Geoscience Australia)
          during a two-year leave of absence, 1991-3. In Canberra he
          supervised, inter alia, the production of the first magnetic and
          gravity anomaly images of all Australia. He also initiated the digital
          compilation of all aeromagnetic data for the whole of Africa (AMMP),
          Arabia, India and the Middle East (AAIME) from his ITC base,
          1989-1999.
        </Paragraph>
        <Paragraph>
          After returning to the Netherlands in 1993 he was elected as head of
          the Delft Location of ITC and then, in 1996, to the chairmanship of
          the Department of Earth Resources Surveys. He served internationally
          as chairman of Division V (Instruments, Observatories, Surveys and
          Analyses) for the International Association for Geomagnetism and
          Aeronomy (IAGA) from 1995 to 1999. He was for many years an active
          member (including chairman, 1991 to 1995) of IAGA’s working
          group Magnetic Anomalies, Land and Sea, culminating in the first
          edition of the Magnetic Anomaly Map of the World in 2007.  He has
          published widely on geophysical mapping and its contribution to
          understanding geology and regional tectonics. He has hands-on
          experience of most countries in sub-Saharan Africa through visits or
          student projects and has retained active contacts with leading
          geoscientists in India through visits and international projects there
          since 1985. The last intake of students at Delft occurred in September
          1999, leading to his early retirment from ITC in 2004.  He set up
          Earthworks BV as a vehicle for pursuing consulting projects in the
          'emeritus' phase of his career.
        </Paragraph>
          <Image
            my="4"
            src="/assets/img/about/colin/pic1.jpg"
            alt="On gravity survey in the Kalahari"
            w="100%"
          />
        <Paragraph>
          Projects have included contributions to nationwide airborne
          geophysical surveys in Mozambique, Madagascar, Uganda and Nigeria.
          This work concluded in 2018 with a new national coverage of Malawi.
          The supervision of the Nigeria survey, from inception to
          interpretation, involved more than two million line-km of data
          acquisition under World Bank auspices (2004-2010). Making the wealth
          of national geological data accumulated from such surveys readily
          accessible to the user community is, sadly, a challenge that still
          remains.  Many national geological surveys in Africa have yet to
          embrace the use of internet to achieve this.
        </Paragraph>
        <Paragraph>
          He is now devoting his time to research interests in the re-assembly
          of Gondwana and the precise mechanism of its dispersal. In this role
          he is an active team member of the Gondwana Map project (IGCP-628) at
          the State University of Rio de Janeiro. A course of lectures
          entitled&nbsp;
          <b>African Geodynamics</b>&nbsp;
          <Link
            href="http://www.reeves.nl/upload/AfricanGeodynamicsBrochure.pdf"
            color="refcolor"
          >
            (brochure)
          </Link>&nbsp;resulting from this work has now been given 14 times in
          five different continents.  He served as visiting professor at the
          University of the Witwatersrand, Johannesburg 2005-2010.  He has
          delivered numerous talks and lectures at scientific conferences
          including as Association Lecturer at IAGA's 11th Scientific Assembly
          at Sopron, Hungary (2009) and as distinguished lecturer in Europe for
          the AAPG in 2011. Most recently he won the 'Best Oral Paper' award at
          the Petroleum Exploration Society of Great Britain's 'Africa' meeting
          in London in September 2015. Colin still lives in the old centre of
          Delft and works from an independent office nearby.  He became a Dutch
          citizen in 2018.
        </Paragraph>
        <i>2018 June 27</i>.
      </TwoArticleColumns>
    </PDFViewLayout>
  );
};

export default AboutColinPage;