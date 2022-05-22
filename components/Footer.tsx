import React from 'react';

const Footer = ({ children }) => {
  return <footer>{children}</footer>;
};

const footerCodeEditor = {
  code: `<footer>푸터</footer>`,
  scope: { Footer },
};

export { Footer, footerCodeEditor };
