import React from 'react'
import styled from 'styled-components'

function Navbar() {
  return (
    <NavbarContainer>
      <div className='logo'>
        <img src='/logo.svg' alt='logo' />
      </div>
      <div className='lists'>
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Menu</li>
          <li>Reviews</li>
          <li>Contact</li>
        </ul>
      </div>
    </NavbarContainer>
  )
}

export default Navbar

const NavbarContainer = styled.div`
  min-height: 100px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 14px;
  position: relative;

  padding-left: 80px;
  padding-right: 80px;

  .lists {
    ul {
      display: flex;
      gap: 24px;
      list-style: none;
      margin: 0;
      padding: 0;
    }

    li {
      cursor: pointer;
      font-size: 20px;
      color: white;
    }
    li:hover {
      text-decoration: underline;
      text-decoration-thickness: 0.2em;
      text-underline-offset: 0.1em;
      text-decoration-color: tomato;
    }
  }
`
