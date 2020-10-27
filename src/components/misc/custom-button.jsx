import React from 'react';
import styled from 'styled-components';
import { node } from 'prop-types';

const StyledButton = styled.button`
  border: 1px solid white;
  background: transparent;
  color: white;
  width: 200px;
  height: 50px;
  margin: 25px;
  transition: 0.5s all ease-in-out;
  :hover {
    cursor: pointer;
    background: white;
    color: #212121;
  }
  :focus {
    outline: 0;
  }
`;

const CustomButton = ({ children, onClick }) => {
  return <StyledButton onClick={onClick}>{children}</StyledButton>;
};

export default CustomButton;

CustomButton.propTypes = {
  children: node,
};
