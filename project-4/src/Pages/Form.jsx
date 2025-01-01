import React, { useState } from 'react'
import { MdMessage } from 'react-icons/md'
import { FaPhoneAlt } from 'react-icons/fa'
import { HiMail } from 'react-icons/hi'
import img from '../images/image.png'
import Button from '../components/Button/Button.jsx'
import { Container } from 'react-bootstrap'
import styled from 'styled-components'

function Form() {
  // Declare state for name, email, and text inputs
  const [name, setName] = useState('ani')
  const [email, setEmail] = useState('')
  const [text, setText] = useState('')

  // State to hold submitted values
  const [submittedData, setSubmittedData] = useState({})

  // Handle form submission
  const onSubmit = (e) => {
    e.preventDefault()

    // Update state based on form input values
    const formData = {
      name: e.target.name.value,
      email: e.target.email.value,
      text: e.target.text.value,
    }
    setSubmittedData(formData)

    // Reset form inputs (optional)
    setName('')
    setEmail('')
    setText('')
  }

  return (
    <Container>
      <div>
        <h1
          style={{
            textAlign: 'center',
            fontSize: '40px',
            fontWeight: 'bold',
            marginTop: '6rem',
            color: 'tomato',
          }}
        >
          CONTACT <span style={{ color: '#fff' }}>US</span>
        </h1>
      </div>

      <div className='containers'>
        <div className='Form'>
          <div className='top-btn'>
            <Button
              text='VIA SUPPORT CHAT'
              icon={<MdMessage fontSize='24px' />}
            />
            <Button text='VIA CALL' icon={<FaPhoneAlt fontSize='24px' />} />
          </div>
          <Button
            isOutline={true}
            text='VIA EMAIL FORM'
            icon={<HiMail fontSize='24px' />}
          />

          <form onSubmit={onSubmit}>
            <div className='form_container'>
              <label htmlFor='name'>Name</label>
              <input
                type='text'
                name='name'
                value={name}
                onChange={(e) => setName(e.target.value)} // Update name on input change
              />
            </div>
            <div className='form_container'>
              <label htmlFor='email'>Email</label>
              <input
                type='email'
                name='email'
                value={email}
                onChange={(e) => setEmail(e.target.value)} // Update email on input change
              />
            </div>
            <div className='form_container c:\Users\hp\Desktop\React Projects\ContactUs\project2\src\images\image.png'>
              <label htmlFor='text'>Text</label>
              <textarea
                name='text'
                rows='8'
                value={text}
                onChange={(e) => setText(e.target.value)} // Update text on input change
              />
            </div>
            <div style={{ display: 'flex', justifyContent: 'end' }}>
              <Button text='Submit Button' />
            </div>
          </form>
        </div>
        <ImageWrapper>
          <img src={img} alt='Shirt' />
        </ImageWrapper>
      </div>
    </Container>
  )
}

export default Form
const ImageWrapper = styled.div`
  img {
    filter: hue-rotate(-550deg) saturate(200%);
    transition: filter 0.2s;
  }
`
