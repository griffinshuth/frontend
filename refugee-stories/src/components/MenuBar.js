import React from 'react';
import styled from 'styled-components';

const MenuBarCon = styled.div`
  display: flex;
  justify-content: flex-end;
  padding: 20px;
  color: #ffffff;
  text-transform: uppercase;
`
const MenuItem = styled.a`
  padding-left: 30px;
`

const MenuBar = props => {
  return (
    <MenuBarCon>
      <MenuItem>Home</MenuItem>
      <MenuItem>About</MenuItem>
      <MenuItem>Contact</MenuItem>
      <MenuItem>Submit Your Story</MenuItem>

    </MenuBarCon>
  )
}

export default MenuBar;