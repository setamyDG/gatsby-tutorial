import React from "react";
import styled from "styled-components";

const Button = styled.button`
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  background: ${({ background }) => background};
  font-family: "Russo One";
  border-radius: 3px;
  color: white;
  border: 2px solid #e43f5a;
  :hover{
  cursor:pointer;
  box-shadow: 0 4px 5px rgba(0,0,0, .3);
  }
`;

const CustomButton = () => (
  <a href="https://www.gatsbyjs.org/" target="_blank">
    <Button background="#e43f5a">LEARN MORE</Button>
  </a>
);

export default CustomButton;
