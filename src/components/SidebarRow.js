import React, { useState } from 'react';
import styled from 'styled-components';

// Material UI c

function SidebarRow({ title, Icon, selected }) {
  return (
    <Container className={` ${selected && 'selected'}`}>
      <Icon
        style={{
          padding: '10px 20px',
          color: '#606060',
        }}
      />
      <Title className={`${selected && 'selected'}`}>{title}</Title>
    </Container>
  );
}

export default SidebarRow;

const Container = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  &.selected {
    background-color: lightgray;
    font-weight: bold;
  }
  &:hover {
    font-weight: bold;
    background-color: gray;
  }
`;

const Title = styled.h1`
  display: flex;
  flex: 1;
  margin-left: 20px;
  font-weight: 500;
  font-size: 12px;
  color: gray;
  &.selected {
    font-weight: bold;
  }
  &:hover {
    font-weight: bold;
  }
`;
