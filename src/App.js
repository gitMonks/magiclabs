import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Link } from '@reach/router';
import styled from 'styled-components';
import Nav from './components/nav';
import Feed from './components/feed';
import Home from './components/home';
import Profile from './components/profile';

const StyledApp = styled.div`
  background-color: #f5f5f5;
  font-family: Helvetica Neue, Helvetica, Arial, sans-serif;
  font-size: 16px;
`;

const App = () => {
  return (
    <StyledApp path="/">
      <Nav />
      <Router>
        <Home path="home" />
        <Feed path="feed" />
        <Profile path="profile" />
      </Router>
    </StyledApp>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
