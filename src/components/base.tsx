import * as React from "react";
import Menu, { LinkName } from "./menu";
import { Box, Flex } from "@chakra-ui/react";
import { containerWidths } from "../constants";
import { Helmet } from 'react-helmet';

interface BaseProps {
    pageName: LinkName;
    children: React.ReactNode;
}

const Base = (props: BaseProps) => {
    return (
        <Flex
            direction="column"
            bg="bgcolor"
            minH="100vh"
            maxW="100vw"
            pb={["8", "8", "0"]}
        >
            <Helmet>
                <meta name="keywords" content=" Geophysics, Geological mapping, Southern continents, Gondwana, Geodynamics, Aeromagnetic surveys, Geophysical interpretation, Ocean-floor topography, Paleogeographic reconstructions, Africa, India, Australia, Antarctica, South America, Cretaceous period, Jurassic period, Continental margins, Rifts, Mid-ocean ridges, Dyke swarms, Large igneous provinces, Precambrian terranes" />
                <meta name="author" content="Colin Reeves" />
                <meta name="description" content="Colin Reeves MA MSc PhD. Achterom 41a 2611 PL Delft The Netherlands. +31 611 35 62 72. reeves.earth@planet.nl. Earthworks B.V.. Lange Geer 44" />
                <meta name="google-site-verification" content="MJJ4RwHHjbiqaRbH4r0Bu9P_Md7y8d33DcAWaVlItJo" />
                <title>Reeves.nl / Earthworks</title>
            </Helmet>
            <Menu enabled={props.pageName} />
            <Box w={containerWidths} mx={["0", "auto", "auto"]} mt="4" flex="1">
                {props.children}
            </Box>
        </Flex>
    );
};

export default Base;
