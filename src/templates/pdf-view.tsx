import { Box, Link, Text, Heading, Image } from "@chakra-ui/react";
import { MDXProvider } from "@mdx-js/react";
import { graphql, useStaticQuery } from "gatsby";
import React from "react";
import Base from "../components/base";
import TitledCard from "../components/cards/titled-card";
import { LinkName } from "../components/menu";
import Paragraph from "../components/paragraph";

interface PDFViewLayoutProps {
    children?: React.ReactNode;
    pageContext: {
        frontmatter: {
            title: string,
            date: string,
        }
    }
    path: string;
}

const MONTHS = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December'
]

const PublishDate = (date) => {
    const dateParsed = new Date(date);
    return (props) => {
        const dateString = `${dateParsed.getFullYear()} ${MONTHS[dateParsed.getMonth()]}${!props.noday ? ' ' + dateParsed.getDate() : ''}`;
        let updatedString = ''
        if (props.updated !== undefined) {
            const updatedParsed = new Date(props.updated);
            updatedString = ` (updated ${updatedParsed.getFullYear()} ${MONTHS[updatedParsed.getMonth()]} ${updatedParsed.getDate()})`;
        }

        return (<Text fontStyle="italic">
            {props.prepend || ""}
            {dateString}{updatedString}
            {props.append || ""}
        </Text>);
    };
}

const PDFLink = (props) => <Link color="refcolor" href={props.href}>{props.children}</Link>;
const Header1 = (props) => <Heading as="h1" size="sm" mt="4">{props.children}</Heading>;
const Reference = (props) => <div><Text fontStyle="italic">{props.children} {props.link && <PDFLink href={props.link}>{props.link}</PDFLink>}</Text></div>
const Italic = (props) => <Text fontStyle="italic">{props.children}</Text>;
const Bold = (props) => <Text fontWeight="bold">{props.children}</Text>;

const BlockQuote = (props) => <Box w="full" p="4" bg="bgcolor" color="#555" my="4">{props.children}</Box>;

interface BannerData {
    allFile: {
        edges: {
            node: {
                publicURL: string;
                name: string;
            }
        }[]
    }
}

const PDFViewLayout = (data: PDFViewLayoutProps) => {
    const { children, pageContext, path } = data;
    const bannerData: BannerData = useStaticQuery(graphql`
        {
          allFile(filter: { absolutePath: {regex: "banners/"} }) {
            edges {
              node {
                publicURL
                name
              }
            }
          }
        }
    `);

    const bannerNode = bannerData.allFile.edges.map(x => x.node).find(x => path.includes(x.name));

    const linked = path.substr(1, path.substr(1).indexOf('/')) as LinkName;
    const { title, date } = pageContext.frontmatter;
    const components = {
        PublishDate: PublishDate(date),
        Reference,
        p: Paragraph,
        a: PDFLink,
        h1: Header1,
        i: Italic,
        b: Bold,
        blockquote: BlockQuote,
    };
    return (
        <Base pageName={linked}>
            <Box w="100%">
                <TitledCard title={title}>
                    <MDXProvider components={components}>
                        {bannerNode && <Image src={bannerNode.publicURL} mx="auto" />}
                        {children}
                    </MDXProvider>
                </TitledCard>
            </Box>
        </Base >
    );
};

export default PDFViewLayout;
