import React, { useState } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { FaStar, FaArrowLeft, FaArrowRight } from 'react-icons/fa'
import person1 from '../images/Group2(1).png'
import person2 from '../images/Group2(2).png'
import person3 from '../images/Group2.png'
import person4 from '../images/Group2(3).png'
import person5 from '../images/Group2(4).png'

import '../components/css/Reviews.css'

const Reviews = () => {
  const [activeIndex, setActiveIndex] = useState(2) // Default active review in the center

  const reviews = [
    { img: person1, name: 'Romeena De Silva', position: 'Janet Cosmetics' },
    { img: person2, name: 'Alex Brown', position: 'Digital Marketer' },
    { img: person3, name: 'Imran Khan', position: 'Software Engineer' },
    { img: person4, name: 'Sophia White', position: 'Freelancer' },
    { img: person5, name: 'John Doe', position: 'Entrepreneur' },
  ]

  const handlePrev = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === 0 ? reviews.length - 1 : prevIndex - 1
    )
  }

  const handleNext = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === reviews.length - 1 ? 0 : prevIndex + 1
    )
  }

  return (
    <Container className=' py-5 review-contain '>
      <div>
        <h1
          style={{
            textAlign: 'center',
            fontSize: '40px',
            fontWeight: 'bold',
          }}
        >
          CUSTOMER'S <span style={{ color: 'tomato' }}>REVIEW</span>
        </h1>
      </div>
      <div className='carousel-wrapper d-flex'>
        <div
          className='Icons prev-icon'
          onClick={handlePrev}
          style={{ marginLeft: '1.5rem' }}
        >
          <FaArrowLeft style={{ color: 'white', fontSize: '1.5rem' }} />
        </div>
        <Row className='d-flex no-gutters'>
          {reviews.map((review, index) => (
            <Col
              key={index}
              md={2}
              className={`review-col text-center ${
                index === activeIndex ? 'active-review' : ''
              }`}
            >
              <img
                src={review.img}
                alt={`Person ${index + 1}`}
                className={`rounded-circle ${
                  index === activeIndex ? 'bright-img' : ''
                }`}
                width={index === activeIndex ? '250' : '200'}
                height={index === activeIndex ? '250' : '200'}
                style={{ objectFit: 'cover' }}
              />
              <div className='my-2 stats'>
                <FaStar color='gold' />
                <FaStar color='gold' />
                <FaStar color='gold' />
                <FaStar color='gold' />
                <FaStar color='gold' />
              </div>
              <p
                className={index === activeIndex ? 'highlightedparagraph' : ''}
              >
                {review.name}
              </p>
              <p className={index === activeIndex ? 'paragraph' : ''}>
                {review.position}
              </p>
            </Col>
          ))}
        </Row>
        <div
          className='Icons next-icon'
          onClick={handleNext}
          style={{ marginRight: '1.5rem' }}
        >
          <FaArrowRight style={{ color: 'white', fontSize: '1.5rem' }} />
        </div>
      </div>
    </Container>
  )
}

export default Reviews
