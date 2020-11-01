import React from 'react';
import styled from 'styled-components';

// components
import Header from './components/Header';
import RecommendedVideos from './components/RecommendedVideos';
import Sidebar from './components/Sidebar';

function App() {
  return (
    <Container className='App'>
      <Header />
      <AppPage>
        <Sidebar />
        <RecommendedVideos />
      </AppPage>
    </Container>
  );
}

export default App;

const Container = styled.div``;

const AppPage = styled.div`
  display: flex;
`;
