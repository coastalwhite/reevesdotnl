import * as React from "react";
import Base from "../../components/base";

import { Box, Flex, Link } from "@chakra-ui/react";
import { Link as GatsbyLink } from "gatsby";

import TitledCard from "../../components/cards/titled-card";
import CoverImageCard from "../../components/cards/cover-image-card";
import CoverImageLayout from "../../components/layouts/cover-image";

const CategoryCard = (
    props: { title: string; text: string; pageName: string },
) => {
    return (
        <Box flex="1" mb="4">
            <TitledCard title={props.title}>
                <Box>{props.text}</Box>
                <Link color="refcolor" href={props.pageName}>Read more...</Link>
            </TitledCard>
        </Box>
    );
};

const PublicationsPage = () => {
    const categories = [
        {
            title: "Key Publications",
            text: "An introduction to the publications that stood the test of time",
            pageName: "/publications/key-publications",
        },
        {
            title: "Comprehensive List",
            text: "A full list of publications since 1970.",
            pageName: "/publications/comprehensive-list",
        },
        {
            title: "Gondwana publications",
            text:
                "A list of publications relevant to Gondwana research, including the work of students and their theses.",
            pageName: "/publications/gondwana-publications",
        },
    ];
    return (
        <CoverImageLayout
            pageName="publications"
            pageTitle="Publications"
            coverImgSrc="/assets/img/publications.png"
            coverImgAlt="Gondwana"
        >
            <Flex direction="column" maxW="100vw">
                {categories.map((category, index) =>
                    <CategoryCard key={index} {...category} />
                )}
            </Flex>
        </CoverImageLayout>
    );
};

export default PublicationsPage;
