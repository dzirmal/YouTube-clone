import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import styled from 'styled-components';

// components
import Header from './components/Header';
import RecommendedVideos from './components/RecommendedVideos';
import SearchPage from './components/SearchPage';
import Sidebar from './components/Sidebar';

function App() {
  return (
    <Container className='App'>
      <Router>
        <Header />
        <Switch>
          <Route path='/search/:searchTerm'>
            <AppPage>
              <Sidebar />
              <SearchPage />
            </AppPage>
          </Route>
          <Route path='/'>
            <AppPage>
              <Sidebar />
              <RecommendedVideos />
            </AppPage>
          </Route>
        </Switch>
      </Router>
    </Container>
  );
}

export default App;

const Container = styled.div``;

const AppPage = styled.div`
  display: flex;
`;
