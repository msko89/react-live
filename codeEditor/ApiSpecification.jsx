import React from 'react';
import styled from 'styled-components';

const ApiSpecification = ({ documents }) => {
  return (
    <>
      <h2>API Specification</h2>
      <ul>
        {documents.map(({ name, type, defaultValue, description }) => (
          <Li key={name}>
            <Span>{name}</Span>
            <Span>{type}</Span>
            <Span>{defaultValue}</Span>
            <Span>{description}</Span>
          </Li>
        ))}
      </ul>
    </>
  );
};

export default ApiSpecification;

const Li = styled.li`
  display: flex;
  list-style: none;
`;

const Span = styled.span`
  min-width: 200px;
  padding: 10px;
  margin-right: 20px;
`;
