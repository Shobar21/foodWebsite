import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import tamatosoup from '../../images/tamatosoup.png'
import lasagna from '../../images/lasagna.png'
import chickensoup from '../../images/chickensoup.png'
import spaghetti from '../../images/spaghetti.png'
import food from '../../images/food.png'

function MainContainer() {
  const images = [tamatosoup, lasagna, chickensoup, spaghetti, food]
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [previousImageIndex, setPreviousImageIndex] = useState(null)
  const [isTransitioning, setIsTransitioning] = useState(false)

  useEffect(() => {
    const interval = setInterval(() => {
      setPreviousImageIndex(currentImageIndex)
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length)
      setIsTransitioning(true)

      setTimeout(() => {
        setIsTransitioning(false)
      }, 1200)
    }, 3000)

    return () => clearInterval(interval)
  }, [currentImageIndex])

  return (
    <MainWrapper>
      <TextSection>
        <h1>Enjoy Our</h1>
        <h1>Delicious Meal</h1>
        <p>
          Discover the best recipes from around the world
          <br /> and experience the joy of cooking at home. Savor
          <br /> every bite of our delicious offerings.
        </p>
        <button>Order Now</button>
      </TextSection>
      <BigImg>
        {previousImageIndex !== null && (
          <img
            src={images[previousImageIndex]}
            alt='Previous Food'
            className={`image diagonal-out ${isTransitioning ? 'visible' : ''}`}
          />
        )}
        <img
          src={images[currentImageIndex]}
          alt='Current Food'
          className={`image diagonal-in ${isTransitioning ? 'visible' : ''}`}
        />
      </BigImg>
    </MainWrapper>
  )
}

export default MainContainer

// New MainWrapper for centering both sections
const MainWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 90%; /* Increase the width to make the container larger */
  max-width: 1200px; /* Optional: Add a max width to prevent it from stretching too much on larger screens */
  margin: 60px auto; /* Center the container horizontally with margin auto */
  height: auto; /* Let the height adjust automatically based on content */
`

const BigImg = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 40px;
  position: relative;
  width: 60%;
  height: 400px;

  .image {
    max-width: 100%;
    height: auto;
    position: absolute;
    transition: opacity 1.2s ease-in-out, transform 1.2s ease-in-out;
  }

  .diagonal-out {
    opacity: 1;
    transform: scale(1);
  }
  .diagonal-out.visible {
    opacity: 0;
    transform: scale(1.2);
    transition: opacity 1.2s ease-in-out, transform 2s ease;
  }

  .diagonal-in {
    opacity: 0;
    transform: scale(1);
  }
  .diagonal-in.visible {
    opacity: 1;
    transform: scale(1);
    transition: opacity 1.2s ease-in-out;
  }
`
const TextSection = styled.div`
  width: 50%;
  padding: 20px;

  h1 {
    font-size: 3rem;
    color: white;
  }

  p {
    font-size: 1.4rem;
    color: white;
    margin: 10px 0;
    line-height: 1.8;
  }

  button {
    padding: 12px 24px;
    font-size: 1.2rem;
    color: white;
    background-color: tomato;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s ease;

    &:hover {
      background-color: #f13f20;
    }
  }
`
