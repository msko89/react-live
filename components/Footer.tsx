import React from 'react';

interface Props {
  children: React.ReactNode;
}

const Footer = ({ children }: Props) => {
  return <footer>{children}</footer>;
};

const footerCodeEditor = {
  code: `<footer>푸터</footer>`,
  scope: { Footer },
};

export { Footer, footerCodeEditor };
