import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

const MenuBarCon = styled.div`
  display: flex;
  justify-content: flex-end;
  padding: 20px;
  color: #ffffff;
  text-transform: uppercase;
`
const MenuItem = styled.a`
  padding-left: 30px;
  text-decoration: none;
  color: #ffffff;
`

const MenuBar = () => {
  return (
    <MenuBarCon>
      <NavLink activeClassName="active-page" to={'/'}>
        <MenuItem>Home</MenuItem>
      </NavLink>
      {/* <NavLink activeClassName="active-page" to={'/'}>
        <MenuItem>About</MenuItem>
      </NavLink>
      <NavLink activeClassName="active-page" to={'/'}>
        <MenuItem>Contact</MenuItem>
      </NavLink> */}
      <NavLink activeClassName="active-page" to={'/submit'}>
        <MenuItem>Submit Your Story</MenuItem>
      </NavLink>
      <NavLink activeClassName="active-page" to={'/admin'}>
        <MenuItem>Admin</MenuItem>
      </NavLink>
    </MenuBarCon>
  )
}

export default MenuBar;