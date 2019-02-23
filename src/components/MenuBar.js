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

const MenuBar = () => {
  return (
    <MenuBarCon>
      <a href="https://www.refugee-stories.com/" activeClassName="active-page" className="menu-item" >
        Home
      </a>
      <NavLink activeClassName="active-page" className="menu-item" to={'/'}>
        Stories
      </NavLink>
      <NavLink activeClassName="active-page" className="menu-item" to={'/submit'}>
        Submit Your Story
      </NavLink>
      <NavLink activeClassName="active-page" className="menu-item" to={'/admin'}>
        Admin
      </NavLink>
    </MenuBarCon>
  )
}

export default MenuBar;