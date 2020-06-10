import { Link } from "gatsby";
import React from "react";
import styled from "styled-components";

const StyledLi = styled.li`
  display: inline-block;
  margin: 1rem;
  font-family: "Russo One";
`;

const StyledLink = styled(Link)`
  color: #e43f5a;;
  font-size: 15px;
  text-decoration: none;
  :hover {
  border-bottom: 1px solid white
  }
`;

const ListLink = (props) => (
  <StyledLi>
    <StyledLink to={props.to}>{props.children}</StyledLink>
  </StyledLi>
);

export default ListLink;
