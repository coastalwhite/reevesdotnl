import * as React from "react";

import { Box, Link, Table, Tbody, Td, Tr } from "@chakra-ui/react";
import Card from "../components/card";
import SidePicturedLayout from "../components/layouts/side-pictured";

const Section = (
  props: { title: string; lines: string[]; href?: string },
) => {
  return (
    <Tr>
      <Td>
        {props.title}
      </Td>
      <Td>
        {props.href
          ? <Link href={props.href} color="refcolor">
            {props.lines.map((line, index) => <Box key={index}>{line}</Box>)}
          </Link>
          : props.lines.map((line, index) => <Box key={index}>{line}</Box>)}
      </Td>
    </Tr>
  );
};

const ContactPage = () => {
  const sections = [{
    title: "Postal Address",
    lines: ["Achterom 41a", "2611 PL Delft", "The Netherlands"],
  }, {
    title: "Visiting Address",
    lines: ["Lange Geer 44a", "2611 PW Delft", "The Netherlands"],
  }, {
    title: "Mobile Phone",
    lines: ["+31 611 35 62 72"],
    href: "tel:+31-611-35-62-72",
  }, {
    title: "E-mail",
    lines: ["reeves.earth@planet.nl"],
    href: "mailto:reeves.earth@planet.nl",
  }, {
    title: "Website",
    lines: ["reeves.nl"],
    href: "http://www.reeves.nl/",
  }];
  return (
    <SidePicturedLayout
      pageName="contact"
      pageTitle="Contact"
      images={[{ src: "img/langegeer.jpg", alt: "Lange Geer" }, {
        src: "img/office.jpg",
        alt: "office",
      }]}
    >
      <Card w="100%">
        <Table w="100%" variant="simple">
          <Tbody>
            {sections.map((section, index) =>
              <Section key={index} {...section} />
            )}
          </Tbody>
        </Table>
      </Card>
    </SidePicturedLayout>
  );
};

export default ContactPage;
