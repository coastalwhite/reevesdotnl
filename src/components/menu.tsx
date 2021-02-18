import { Box, Center, Flex, Image } from "@chakra-ui/react";
import * as React from "react";
import Card from "./card";
import NavItem from "./navitem";

import { containerWidths } from '../constants';

export type LinkName =
  | "homepage"
  | "gondwana"
  | "news"
  | "publications"
  | "about"
  | "contact";
interface LinkDef {
  name: LinkName;
  text: string;
  path: string;
}

class Menu extends React.Component<
  { enabled: LinkName },
  { enabled: LinkName; drawerExpanded: boolean }
> {
  constructor(props: { enabled: LinkName }) {
    super(props);
    this.state = { enabled: props.enabled, drawerExpanded: false };

    this.handleDrawerClick = this.handleDrawerClick.bind(this);
  }

  links: LinkDef[] = [
    {
      name: "homepage",
      text: "Home",
      path: "/",
    },
    {
      name: "gondwana",
      text: "Gondwana",
      path: "/gondwana",
    },
    {
      name: "news",
      text: "News",
      path: "/news",
    },
    {
      name: "publications",
      text: "Publications",
      path: "/publications",
    },
    {
      name: "about",
      text: "About",
      path: "/about",
    },
    {
      name: "contact",
      text: "Contact",
      path: "/contact",
    },
  ];


  handleDrawerClick() {
    this.setState((state) => ({
      drawerExpanded: !state.drawerExpanded,
    }));
  }

  render() {
    return (
      <Box>
        <Box>
          <Card maxW="100vw" p={["0", "auto", "auto"]}>
            <Box w={containerWidths} mx="auto">
              <Image
                h="32"
                maxW="100%"
                px="2"
                mx={["auto", "auto", "0"]}
                src="/assets/img/logo-earthworks.jpg"
                alt="Logo Earthworks"
              />
            </Box>
          </Card>
        </Box>
        <Flex
          mx="auto"
          w={containerWidths}
          direction={["column", "column", "row"]}
          justifyContent="space-between"
          fontFamily="header"
          maxW="100%"
        >
          <Card
            onClick={this.handleDrawerClick}
            display={["block", "block", "none"]}
          >
            <Center
              w={["100%", "100%", "auto"]}
            >
              <Image src="/assets/svg/drawer.svg" h="8" alt="Show/Hide Menu" />
            </Center>
          </Card>

          {this.links.map((link) =>
            <NavItem
              key={link.name}
              doDisplay={this.state.drawerExpanded}
              enabled={link.name === this.state.enabled}
              text={link.text}
              path={link.path}
            />
          )}
        </Flex>
      </Box>
    );
  }
}

export default Menu;