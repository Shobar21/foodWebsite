import React from 'react'
import styled from 'styled-components'
function Header() {
  return (
    <TopContainer>
      <div>
        <img src='/logo.svg' alt='' />
      </div>
      <div className='search'>
        <input type='text' placeholder='Search Food' />
      </div>
    </TopContainer>
  )
}

export default Header
const TopContainer = styled.div`
  background-color: #323334;
`
