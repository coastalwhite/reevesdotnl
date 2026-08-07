import { graphql, useStaticQuery } from 'gatsby';
import * as React from 'react';
import { Box } from "@chakra-ui/react";

const BuildDate = () => {
    const dateTime = new Date(useStaticQuery(graphql`
    {
      site {
        buildTime
      }
    }
    `).site.buildTime).toLocaleString("en-GB", { timeZone: "CET" });
    return <Box m="4">
        <b>Last update at:</b><br />
        <i>{dateTime}</i>
    </Box>
};

export default BuildDate;