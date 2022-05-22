import React from 'react';
import styled from 'styled-components';

interface Props {
  readonly size?: 'large' | 'small';
  readonly isFull?: boolean;
  disabled?: boolean;
  width?: string;
  height?: string;
  children: React.ReactNode;
}

const Button = ({ width, height, children, ...props }: Props) => {
  return (
    <ButtonStyle width={width} height={height} {...props}>
      {children}
    </ButtonStyle>
  );
};

export default Button;

const buttonCodeEditor = {
  code: `<Button>버튼</Button>`,
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
  width: ${({ width }) => width && `${width}px`};
  height: ${({ height }) => height && `${height}px`};
`;
