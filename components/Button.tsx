import React from 'react';
import styled from 'styled-components';

interface Props {
  readonly size?: 'large' | 'small';
  readonly isFull?: boolean;
  disabled?: boolean;
  width?: string;
  height?: string;
  color?: string;
  backgroundColor?: string;
  children: React.ReactNode;
}

const Button = ({ children, ...props }: Props) => {
  return <ButtonStyle {...props}>{children}</ButtonStyle>;
};

export default Button;

const buttonCodeEditor = {
  code: `<Button width={100} height={100}>버튼</Button>`,
  scope: { Button },
};

export { Button, buttonCodeEditor };

const ButtonStyle = styled.button<Partial<Props>>`
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  letter-spacing: -0.04em;
  border-radius: 8px;

  width: ${({ width }) => (width ? `${width}px` : '100px')};
  height: ${({ height }) => (height ? `${height}px` : '100px')};
  color: ${({ color }) => (color ? color : '#000')};
  background-color: ${({ backgroundColor }) =>
    backgroundColor ? backgroundColor : '#fff'};
`;
