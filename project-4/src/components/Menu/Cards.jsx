import React from 'react'
import styled from 'styled-components'
import { BASE_URL, Container } from '../../Pages/Menu'
import { Button } from './Buttons'

function Cards({ data }) {
  return (
    <FoodContainer>
      <Container>
        <FoodCards>
          {data?.map(({ name, image, text, price }) => (
            <Card key={name}>
              <div className='food_image'>
                <img src={BASE_URL + image} alt='' />
              </div>
              <div className='food_info'>
                <div className='info'>
                  <h3>{name}</h3>
                  <p>{text}</p>
                </div>
                <Button>${price.toFixed(2)}</Button>
              </div>
            </Card>
          ))}
        </FoodCards>
      </Container>
    </FoodContainer>
  )
}

export default Cards
const FoodContainer = styled.div`
  background-image: url('/bg.png');
  background-size: cover;
  background-position: center;
  width: 100vw;
  min-height: 100vh; /* Set min-height instead of fixed height */
  /* top: 32%; */
  margin: 0;
  padding: 0;
  position: absolute;
  left: 0;
  right: 0;
  overflow-x: hidden; /* Prevent horizontal scrolling */
  overflow-y: auto; /* Allow vertical scrolling if content overflows */
`
const FoodCards = styled.div`
  display: flex;
  flex-wrap: wrap;
  row-gap: 32px;
  column-gap: 20px;
  justify-content: center;
  align-items: center;
  padding-top: 45px;
`
const Card = styled.div`
  width: 340px;
  height: 167px;
  border: 0.66px solid;
  border-image-source: radial-gradient(
      80.69% 208.78% at 108.28% 112.58%,
      #eabfff 0%,
      rgba(135, 38, 183, 0) 100%
    ),
    radial-gradient(
      80.38% 222.5% at -13.75% -12.36%,
      #98f9ff 0%,
      rgba(255, 255, 255, 0) 100%
    );
  background: url(.png),
    radial-gradient(
      90.16% 143.01% at 15.32% 21.04%,
      rgba(165, 239, 255, 0.2) 0%,
      rgba(110, 191, 244, 0.0447917) 77.08%,
      rgba(70, 144, 213, 0) 100%
    );
  background-blend-mode: overlay, normal;
  backdrop-filter: blur(13.1842px);
  border-radius: 20px;
  display: flex;
  padding: 8px;

  .food_image {
    width: 120px; /* Set desired width */
    height: 120px; /* Set desired height */
    overflow: hidden; /* Hide overflow to crop the image */
    border-radius: 10px; /* Optional: round the corners of the image */
    img {
      width: 100%;
      height: 100%;
      object-fit: cover; /* Ensures the image fills the container and is cropped if necessary */
    }
  }

  .food_info {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: end;
    h3 {
      margin-top: 8px;
      font-size: 16px;
      font-weight: 500;
    }
    p {
      margin-top: 4px;
      font-size: 12px;
    }
    button {
      font-size: 12px;
    }
  }
`
