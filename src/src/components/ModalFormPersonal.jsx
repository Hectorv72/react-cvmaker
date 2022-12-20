import React, { useContext } from 'react'
import { Col, Form, FormLabel, InputGroup, Row } from 'react-bootstrap'
import ContentContext from '../context/ContentContext'
// import { UbicationIcon } from '../data/SidebarIcons'

const ModalFormPersonal = () => {
  const { update, setUpdate } = useContext(ContentContext)
  const { sidebar } = update
  console.log(sidebar)

  const handleOnChange = ({ target }) => {
    const { name, value } = target
    const newUpdate = { ...update }
    newUpdate.sidebar.personal[name] = value
    setUpdate(newUpdate)
  }

  return (
    <div className='m-3'>
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
      </Row>
    </div>
  )
}

export default ModalFormPersonal