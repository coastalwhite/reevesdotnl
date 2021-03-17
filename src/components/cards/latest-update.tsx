import * as React from "react";
import TitledCard from "./titled-card";
import { LoadWithMD } from "../../md-graphql";
import { Box } from "@chakra-ui/react";

interface FrontmatterProps {
    title: string;
}

const LatestUpdateCard = () => (LoadWithMD<FrontmatterProps>(
    "latest-update.md",
    (html, fm) =>
        <TitledCard title={fm.title}>
            <Box dangerouslySetInnerHTML={{ __html: html }} />
        </TitledCard>,
));

export default LatestUpdateCard;
