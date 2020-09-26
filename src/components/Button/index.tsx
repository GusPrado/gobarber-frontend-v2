import React, { ButtonHTMLAttributes } from 'react';

import { Container } from './styles';

// if an interface just extends and dont change anything
// could be just a type
type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  loading?: boolean;
};

const Button: React.FC<ButtonProps> = ({ children, loading, ...rest }) => (
  <Container type="button" {...rest}>
    {loading ? 'Carregando' : children}
  </Container>
);

export default Button;
