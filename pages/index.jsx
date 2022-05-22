import { useState } from 'react';
import styled from 'styled-components';

import { COMPONENTS } from '../constants/components';
import { buttonCodeEditor } from '../components/Button';
import { headerCodeEditor } from '../components/Header';
import { footerCodeEditor } from '../components/Footer';
import LiveEdit from '../components/LiveEdit';

const Home = () => {
  const [codeComponent, setCodeComponent] = useState(buttonCodeEditor);
  const [selectedComponent, setSelectedComponent] = useState('button');

  const handleClick = (event, key) => {
    setSelectedComponent(key);

    switch (key) {
      case 'button':
        setCodeComponent(buttonCodeEditor);
        break;
      case 'header':
        setCodeComponent(headerCodeEditor);
        break;
      case 'footer':
        setCodeComponent(footerCodeEditor);
        break;
    }
  };

  return (
    <CodeEditorLayout>
      <Components>
        {COMPONENTS.map(({ key, name }) => (
          <Component
            key={key}
            isSelected={key === selectedComponent}
            onClick={(event) => handleClick(event, key)}
          >
            {name}.tsx
          </Component>
        ))}
      </Components>
      <CodeEditor>
        {COMPONENTS.map(
          ({ key }) =>
            selectedComponent === key && (
              <LiveEdit
                key={key}
                code={codeComponent.code}
                scope={codeComponent.scope}
                noInline={codeComponent.noInline || false}
              />
            )
        )}
      </CodeEditor>
    </CodeEditorLayout>
  );
};

export default Home;

const CodeEditorLayout = styled.section`
  display: flex;
`;

const CodeEditor = styled.div`
  width: 100%;
  padding: 20px;
`;

const Components = styled.div`
  width: 300px;
  height: 100vh;
  border: 1px solid #000;
  padding: 20px;
`;

const Component = styled.button`
  display: flex;
  border: none;
  background-color: #fff;
  padding: 10px;
  cursor: pointer;
  color: ${({ isSelected }) => (isSelected ? '#ff0000' : '#000')};

  &:hover {
    text-decoration: underline;
  }
`;
