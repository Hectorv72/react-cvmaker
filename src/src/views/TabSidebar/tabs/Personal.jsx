import React, { useContext } from 'react'
import { Col, Form, FormLabel, InputGroup, Row } from 'react-bootstrap'
import ContentContext from '../../../context/ContentContext'

const Personal = () => {
  const { update, setUpdate } = useContext(ContentContext)
  const { sidebar } = update

  const handleOnChange = ({ target }) => {
    const { name, value } = target
    const newUpdate = { ...update }
    newUpdate.sidebar.personal[name] = value
    setUpdate(newUpdate)
  }

  return (
    <Row className='gap-3'>
      <Col xs={12}>
        <FormLabel id='form-personal-from'>From</FormLabel>
        <InputGroup>
          <InputGroup.Text>
            <i className="fa-solid fa-location-dot"></i>
          </InputGroup.Text>
          <Form.Control value={sidebar?.personal?.from || ''} id='form-personal-from' name='from' onChange={handleOnChange} />
        </InputGroup>
      </Col>
      <Col xs={12}>
        <FormLabel id='form-personal-from'>Email</FormLabel>
        <InputGroup>
          <InputGroup.Text>
            <i className="fa-solid fa-envelope"></i>
          </InputGroup.Text>
          <Form.Control value={sidebar?.personal?.email || ''} id='form-personal-email' name='email' onChange={handleOnChange} />
        </InputGroup>
      </Col>
      <Col xs={12}>
        <FormLabel id='form-personal-phone'>Phone</FormLabel>
        <InputGroup>
          <InputGroup.Text>
            <i className="fa-solid fa-phone"></i>
          </InputGroup.Text>
          <Form.Control value={sidebar?.personal?.phone || ''} id='form-personal-phone' name='phone' onChange={handleOnChange} />
        </InputGroup>
      </Col>
      <Col xs={12}>
        <FormLabel id='form-personal-github'>Github</FormLabel>
        <InputGroup>
          <InputGroup.Text>
            <i className="fa-brands fa-github"></i>
          </InputGroup.Text>
          <Form.Control value={sidebar?.personal?.github || ''} id='form-personal-github' name='github' onChange={handleOnChange} />
        </InputGroup>
      </Col>
      <Col xs={12}>
        <FormLabel id='form-personal-linkedin'>Linkedin</FormLabel>
        <InputGroup>
          <InputGroup.Text>
            <i className="fa-brands fa-linkedin"></i>
          </InputGroup.Text>
          <Form.Control value={sidebar?.personal?.linkedin || ''} id='form-personal-linkedin' name='linkedin' onChange={handleOnChange} />
        </InputGroup>
      </Col>
    </Row>
  )
}

export default Personal