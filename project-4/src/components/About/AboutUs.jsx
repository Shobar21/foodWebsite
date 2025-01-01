import React from 'react'
import styled from 'styled-components'
import food from '../../images/food.png'

const Section = styled.section`
  margin-top: 35rem;

  color: #fff; /* White text */
  padding: 50px;
  text-align: center;
`

const Title = styled.h2`
  font-size: 36px;
  font-weight: bold;
  color: tomato; /* Yellow color for the title */
  margin-bottom: 30px;
`

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  width: 1100px;
  margin-left: 5rem;
`

const ImageWrapper = styled.div`
  flex: 1;
  max-width: 400px;
  margin-left: -4rem;
  margin-right: 20px;

  img {
    max-width: 100%;
    height: auto;
    border-radius: 10px;
  }
`

const Content = styled.div`
  flex: 1;
  max-width: 600px;
  height: 300px;
  text-align: left;
  margin-left: 3rem;

  h3 {
    margin-top: 1rem;
    font-size: 28px;
    margin-bottom: 20px;
    margin-left: 2rem;
  }

  p {
    font-size: 16px;
    line-height: 1.5;
    margin-left: 2rem;
    margin-bottom: 20px;
  }
`

const Button = styled.button`
  margin-left: 2rem;
  background-color: tomato; /* Yellow button */
  color: #fff; /* Black text */
  border: none;
  padding: 10px 20px;
  font-size: 16px;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: tomato; /* Darker yellow on hover */
  }
`

const AboutUs = () => {
  return (
    <Section>
      <Title>
        ABOUT <span style={{ color: '#fff' }}>US</span>
      </Title>
      <Container>
        <ImageWrapper>
          <img src={food} alt='Food Special' />
        </ImageWrapper>
        <Content>
          <h3>What Makes Our Food Special?</h3>
          <p>
            Lorem Ipsum Dolor Sit Amet Consectetur Adipisicing Elit.
            Voluptatibus Qui Ea Ullam, Enim Tempora Ipsum Fuga Alias Quae
            Ratione A Officiis Id Temporibus Autem? Quod Nemo Facilis
            Cupiditate. Ex, Vel?
          </p>
          <p>
            Lorem Ipsum Dolor Sit Amet Consectetur, Adipisicing Elit. Odit Amet
            Enim Quod Veritatis, Nihil Voluptas Culpa! Neque Consectetur
            Obcaecati Sapiente?
          </p>
          <Button>Learn More</Button>
        </Content>
      </Container>
    </Section>
  )
}

export default AboutUs
