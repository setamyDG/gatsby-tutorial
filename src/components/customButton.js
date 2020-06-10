import React from "react";
import styled from "styled-components";

const Button = styled.button`
  font-size: 1em;
  font-family: "Russo One";
  margin: 1em;
  padding: 0.25em 1em;
  background: #e43f5a;
  border-radius: 3px;
  color: white;
  border: 2px solid #e43f5a;
  :hover{
  cursor:pointer;
  box-shadow: 0 4px 5px rgba(0,0,0, .3);
  }
`;

const CustomButton = (props) => (
  <a href="https://www.gatsbyjs.org/" target="_blank">
    <Button primary>LEARN MORE</Button>
  </a>
);

export default CustomButton;
