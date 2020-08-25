import React, { ButtonHTMLAttributes } from 'react';

import { Container } from './styles';

// if an interface just extends and dont change anything
// could be just a type
type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;

const Button: React.FC<ButtonProps> = ({ children, ...rest }) => (
  <Container type="button" {...rest}>
    {children}
  </Container>
);

export default Button;
