import { Link } from "gatsby";
import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const StyledLi = styled.li`
  display: inline-block;
  margin: 1rem;
`;

const StyledLink = styled(Link)`
  color: #e43f5a;
  text-decoration: none;
    :hover {
      border-bottom: 3px solid white;
    }
`;

const ListLink = ({ to, children }) => (
  <ul>
    <StyledLi>
      <StyledLink to={to}>{children}</StyledLink>
    </StyledLi>
  </ul>
);

export default ListLink;

ListLink.defaultProps = {
  to: "",
};

ListLink.propTypes = {
  to: PropTypes.string,
  children: PropTypes.element.isRequired,
};
