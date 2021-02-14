import * as React from "react";
import { Link } from "gatsby";
import Card from "../components/card";

const NavItem = (
  props: { doDisplay: boolean; enabled: boolean; text: string; path: string },
) => {
  let extraProps = props.enabled ? {
      fontWeight: "bold",
  } : {
      _hover: { textDecoration: "underline" },
      bg: "none",
      boxShadow: "none",
  }
  return (<Link to={props.path}>
    <Card
      p="auto"
      px="4"
      py="2"
      textAlign="center"
      fontFamily="header"
      display={[(props.doDisplay ? "block" : "none"), "block"]}
      w={["100%", "auto"]}
      grow="1"
      { ...extraProps } 
    >
      {props.text}
    </Card>
  </Link>);
};

export default NavItem;
