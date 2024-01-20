import React from 'react';
import { StyledButton } from './ButtonStyles';

const Button = ({ onLoadMore }) => {
  return <StyledButton onClick={onLoadMore}>Load more</StyledButton>;
};

export default Button;
