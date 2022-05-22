import React from 'react';

interface Props {
  children: React.ReactNode;
}

const Header = ({ children }: Props) => {
  return <header>{children}</header>;
};

const headerCodeEditor = {
  code: `<header>헤더</header>`,
  scope: { Header },
};

export { Header, headerCodeEditor };
