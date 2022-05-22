import React from 'react';

const Header = ({ children }) => {
  return <header>{children}</header>;
};

const headerCodeEditor = {
  code: `<header>헤더</header>`,
  scope: { Header },
};

export { Header, headerCodeEditor };
