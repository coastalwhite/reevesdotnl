import * as React from "react";
import { Box, Flex, Image, Link, Center } from "@chakra-ui/react";
import TitledCard from "./titled-card";
import { Link as GatsbyLink } from "gatsby";

const text = 'Colin Reeves is an earth scientist specialised in geophysical mapping. In a career spanning more than 50 years he has worked primarily in Africa and the southern hemisphere on national airborne survey programmes. In retirement he endeavours to share these unique insights and realise their scientific value to studies of Gondwana and its dispersal.';

const ShortAboutCard = () => {
  return (
    <TitledCard title="Colin Reeves">
      <Flex direction="row">
        <Center w="32" mr="4">
          <Image
            src="/assets/img/smallmugshot.jpg"
            alt="Colin Reeves"
            w="100%"
          />
        </Center>
        <Box flex="1">
          <Box >
            {text}
          </Box>
          <GatsbyLink to="/about">
            <Link color="refcolor">
              Read more...
            </Link>
          </GatsbyLink>
        </Box>
      </Flex>
    </TitledCard>
  );
};

export default ShortAboutCard;
