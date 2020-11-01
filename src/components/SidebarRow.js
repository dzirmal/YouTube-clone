import React from 'react';
import styled from 'styled-components';

// Material UI c

function SidebarRow({ title, Icon, selected }) {
  return (
    <Container className={`'sidebarRow__icon' ${selected && 'selected'}`}>
      <Icon
        style={{
          padding: '10px 20px',
          color: '#606060',
          hover: { color: 'red' },
        }}
      />
      <Title>{title}</Title>
    </Container>
  );
}

export default SidebarRow;

const Container = styled.div`
  display: flex;
  display: flex;
  align-items: center;
  &.selected {
    background-color: 'lightgray';
  }
  &:hover {
    background-color: 'gray';
    font-weight: bold;
    cursor: pointer;
  }
`;

const Title = styled.h1`
  display: flex;
  flex: 1;
  margin-left: 20px;
  font-weight: 500;
  font-size: 12px;
  color: 'gray';
  &:hover {
  }
`;
