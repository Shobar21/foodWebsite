import React from 'react'
import styled from 'styled-components'

function Buttons({ setFilterData, data, setSelectBtn }) {
  const filterFood = (type) => {
    if (type === 'fastfood') {
      // Filter only fastfood items
      const filteredFastFood = data?.filter(
        (food) => food.type.toLowerCase() === 'fastfood'
      )
      setFilterData(filteredFastFood)
      setSelectBtn('fastfood')
      return
    }

    // Filter based on the type (drinks, sweets, salad)
    const filteredData = data?.filter((food) =>
      food.type.toLowerCase().includes(type.toLowerCase())
    )
    setFilterData(filteredData)
    setSelectBtn(type)
  }

  return (
    <FilterContainer>
      <Button onClick={() => filterFood('fastfood')}>FastFood</Button>
      <Button onClick={() => filterFood('drinks')}>Drinks</Button>
      <Button onClick={() => filterFood('sweets')}>Sweets</Button>
      <Button onClick={() => filterFood('salad')}>Salad</Button>
    </FilterContainer>
  )
}

export default Buttons

const FilterContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 12px;
  padding-bottom: 20px;
`

export const Button = styled.button`
  background: #ff4343;
  border-radius: 5px;
  padding: 6px 12px;
  color: white;
  border: none;
  cursor: pointer;
  &:hover {
    background-color: #e43333;
  }
`
