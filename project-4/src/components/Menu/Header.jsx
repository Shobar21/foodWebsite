import React from 'react'
import styled from 'styled-components'

function Header({ setFilterData, data }) {
  const searchFood = (e) => {
    const searchValue = e.target.value.toLowerCase() // Ensure case-insensitive search

    if (searchValue === '') {
      setFilterData(data)
      return
    }

    // Filter data based on the search value
    const filteredData = data?.filter((food) =>
      food.name.toLowerCase().includes(searchValue)
    )

    setFilterData(filteredData) // Update the filtered data
  }

  return (
    <TopContainer>
      <div>
        <img src='/logo.svg' alt='logo' />
      </div>
      <div className='search'>
        <input onChange={searchFood} type='text' placeholder='Search Food' />
      </div>
    </TopContainer>
  )
}

export default Header

const TopContainer = styled.div`
  min-height: 140px;
  display: flex;
  justify-content: space-between;
  padding: 20px;
  align-items: center;
  .search {
    input {
      background-color: transparent;
      border: 1px solid red;
      color: white;
      border-radius: 5px;
      height: 40px;
      font-size: 16px;
      padding: 0 10px;
    }
  }
`
