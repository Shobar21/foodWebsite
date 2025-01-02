import React, { useState } from 'react'
import styled from 'styled-components'

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <NavbarContainer>
      <div className='logo'>
        <img src='/logo.svg' alt='logo' />
      </div>
      <div
        className={`lists ${menuOpen ? 'open' : ''}`}
        onClick={() => setMenuOpen(!menuOpen)}
      >
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
      <div className='toggle-button' onClick={() => setMenuOpen(!menuOpen)}>
        ☰
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
  top: 0;
  background: #000;
  z-index: 1000;
  padding-left: 80px;
  padding-right: 80px;
  .toggle-button {
    display: none;
  }

  .logo {
    img {
      max-width: 180px;
    }
  }

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

  @media (max-width: 768px) {
    padding-left: 20px;
    padding-right: 20px;
    .logo {
      img {
        max-width: 180px;
      }
    }

    .lists {
      ul {
        flex-direction: column;
        gap: 20px;
        position: absolute;
        top: 100px;
        right: 20px;
        background: rgba(0, 0, 0, 0.9);
        border-radius: 8px;
        padding: 20px;
        display: none;
      }

      &.open ul {
        display: flex;
      }
    }

    .toggle-button {
      display: block;
      cursor: pointer;
      font-size: 28px;
      color: white;
    }
  }

  @media (max-width: 480px) {
    .logo img {
      max-width: 90px;
    }

    .lists ul li {
      font-size: 18px;
    }
  }
`
