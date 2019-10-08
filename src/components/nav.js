import React from 'react';
import { Link } from '@reach/router';
import styled from 'styled-components';

const StyledNav = styled.div`
  ul {
    display: flex;
    list-style: none;
  }
  li {
    padding: 20px;
  }
`;

const Nav = props => (
  <StyledNav>
    <ul>
      <li>
        <Link to="home">Home</Link>
      </li>
      <li>
        <Link to="feed">Feed</Link>
      </li>
      <li>
        <Link to="profile">Profile</Link>
      </li>
    </ul>
  </StyledNav>
);

export default Nav;
