import { Link as GatsbyLink } from "gatsby";
import { Box, Link } from "@chakra-ui/react";
import React from "react";

const RelatedLink = (props: { to: string; text: string, absoluteUrl?: boolean }) => {
    return (
        <Box borderBottomColor="seperatorcolor" borderBottomWidth="thin">
            { !props.absoluteUrl &&
                <GatsbyLink to={props.to}>
                    <Link color="refcolor" fontSize="xl">{props.text}</Link>
                </GatsbyLink>
            }
            { props.absoluteUrl &&
                <Link color="refcolor" fontSize="xl" href={props.to}>{props.text}</Link>
            }
        </Box>
    );
};

export default RelatedLink;
