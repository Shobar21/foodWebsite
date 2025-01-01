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
          <li>
            <a href='#home'>Home</a>
          </li>
          <li>
            <a href='#menu'>Menu</a>
          </li>
          <li>
            <a href='#about'>About</a>
          </li>
          <li>
            <a href='#reviews'>Reviews</a>
          </li>
          <li>
            <a href='#contact'>Contact</a>
          </li>
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
  position: sticky; /* Keeps navbar visible while scrolling */
  top: 0;
  background: #000; /* Add a background color for better visibility */
  z-index: 1000;

  padding-left: 80px;
  padding-right: 80px;

  .lists {
    ul {
      display: flex;
      gap: 50px;
      list-style: none;
      margin: 0;
      padding: 0;
    }

    li {
      cursor: pointer;
      font-size: 20px;
    }

    a {
      text-decoration: none;
      color: white;
      transition: all 0.3s;
    }

    a:hover {
      text-decoration: underline;
      text-decoration-thickness: 0.2em;
      text-underline-offset: 0.1em;
      text-decoration-color: tomato;
    }
  }
`
