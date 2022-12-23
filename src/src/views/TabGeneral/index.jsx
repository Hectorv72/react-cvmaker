import React, { useContext } from 'react'
import { Col, Form, FormLabel, Row } from 'react-bootstrap'
import ContentContext from '../../context/ContentContext'

const TabGeneral = () => {
  const { update, setUpdate, changeLanguage, language } = useContext(ContentContext)
  const { languageLabel } = language
  const { body } = update

  const handleChangeLanguage = ({ target }) => {
    const { value } = target
    console.log(value)
    console.log(languageLabel)
    changeLanguage(value)
  }

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
        <Col xs={12}>
          <FormLabel id='form-name'>Language</FormLabel>
          <Form.Switch value="english" label="English" checked={languageLabel === 'english'} onChange={handleChangeLanguage} />
          <Form.Switch value="spanish" label="Spanish" checked={languageLabel === 'spanish'} onChange={handleChangeLanguage} />
        </Col>
      </Row>
    </div>
  )
}

export default TabGeneral