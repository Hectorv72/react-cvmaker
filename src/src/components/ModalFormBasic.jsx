import React, { useContext } from 'react'
import { Col, Form, FormLabel, Row } from 'react-bootstrap'
import ContentContext from '../context/ContentContext'

const ModalFormBasic = () => {
  const { update, setUpdate } = useContext(ContentContext)
  const { body } = update

  const handleOnChange = ({ target }) => {
    const { name, value } = target
    const newUpdate = { ...update }
    newUpdate.body[name] = value
    setUpdate(newUpdate)
  }
  return (
    <div className='m-3'>
      <Row className='gap-3'>
        <Col xs={12}>
          <FormLabel id='form-name'>Name</FormLabel>
          <Form.Control value={body?.name || ''} id='form-name' name='name' onChange={handleOnChange} />
        </Col>
      </Row>
    </div>
  )
}

export default ModalFormBasic