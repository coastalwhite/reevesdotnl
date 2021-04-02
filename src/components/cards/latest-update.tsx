import * as React from "react";
import TitledCard from "./titled-card";
import { LoadWithMD } from "../../md-graphql";
import { Box, Link } from "@chakra-ui/react";

interface FrontmatterProps {
    title: string;
    readmore_uri: string;
}

const LatestUpdateCard = () => (LoadWithMD<FrontmatterProps>(
    "latest-update.md",
    (html, fm) =>
        <TitledCard title={fm.title}>
            <Box dangerouslySetInnerHTML={{ __html: html }} />
            <Link color="refcolor" href={fm.readmore_uri}>
                Read more...
          </Link>

        </TitledCard>,
));

export default LatestUpdateCard;
