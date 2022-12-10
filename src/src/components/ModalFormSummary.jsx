import React, { useContext } from 'react'
import { Col, Form, FormLabel, Row } from 'react-bootstrap'
import ContentContext from '../context/ContentContext'

const ModalFormSummary = () => {
  const { update, setUpdate } = useContext(ContentContext)
  const { body } = update

  const handleOnChange = ({ target }) => {
    const { name, value } = target
    const newUpdate = { ...update }
    newUpdate.body.summary[name] = value
    setUpdate(newUpdate)
  }
  return (
    <div className=''>
      <div className='m-3'>
        <Row className='gap-3'>
          {/* <Col xs={12}>
            <FormLabel id='form-name'>Name</FormLabel>
            <Form.Control defaultValue={body?.name || ''} id='form-name' name='name' onChange={(e) => console.log(e.target.name)} />
          </Col> */}
          <Col xs={12}>
            <FormLabel id='form-summary-title'>Title</FormLabel>
            <Form.Control value={body?.summary?.title || ''} id='form-summary-title' name='title' onChange={handleOnChange} />
          </Col>
          <Col xs={12}>
            <FormLabel id='form-summary-subtitle'>Subtitle</FormLabel>
            <Form.Control value={body?.summary?.subtitle || ''} id='form-summary-subtitle' name='subtitle' onChange={handleOnChange} />
          </Col>
          <Col xs={12}>
            <FormLabel id='form-summary-description'>Description</FormLabel>
            <Form.Control value={body?.summary?.description || ''} as="textarea" rows={5} id='form-summary-description' name='description' onChange={handleOnChange} />
          </Col>
        </Row>
      </div>
    </div>
  )
}

export default ModalFormSummary