import React, { useEffect, useState } from 'react'
import Buttons from '../components/Menu/Buttons'
import Cards from '../components/Menu/Cards'
import Header from '../components/Menu/Header'
import styled from 'styled-components'

export const BASE_URL = 'http://localhost:9000'

function Menu() {
  const [data, setData] = useState(null)
  const [filterData, setFilterData] = useState(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  const [selectBtn, setSelectBtn] = useState('fastfood') // Fastfood selected by default

  useEffect(() => {
    const fetchFoodData = async () => {
      setLoading(true)
      try {
        const response = await fetch(BASE_URL)
        const json = await response.json()
        setData(json)

        // Apply the fastfood filter when data is first fetched
        const filteredFastFood = json.filter(
          (item) => item.type.toLowerCase() === 'fastfood'
        )
        setFilterData(filteredFastFood) // Show fastfood by default

        setLoading(false)
      } catch (error) {
        setError('Data not found')
      }
    }
    fetchFoodData()
  }, [])

  if (error) {
    return <div>{error}</div>
  }

  if (loading) {
    return <div>Loading....</div>
  }

  return (
    <>
      <Container>
        <Header setFilterData={setFilterData} data={data} />
        <Buttons
          setFilterData={setFilterData}
          data={data}
          setSelectBtn={setSelectBtn}
        />
      </Container>
      <Cards data={filterData} />
    </>
  )
}

export default Menu

export const Container = styled.div`
  /* max-width: 1200px;
  margin: 0 auto; */
`
