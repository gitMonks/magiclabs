import React from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';
import Feed from './components/feed';

const StyledApp = styled.div`
  background-color: #f5f5f5;
  font-family: Helvetica Neue, Helvetica, Arial, sans-serif;
  font-size: 16px;
`;

const App = () => {
  return (
    <StyledApp>
      <Feed />
    </StyledApp>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
