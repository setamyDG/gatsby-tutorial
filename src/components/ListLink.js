import { Link } from "gatsby";
import React from "react";

const ListLink = (props) => (
  <li style={{ display: "inline-block", marginRight: "1rem" }}>
    <Link to={props.to}>{props.children}</Link>
  </li>
);

export default ListLink;