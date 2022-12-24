import React, { useContext, useState } from 'react'
import { Col, Form, FormLabel, Row } from 'react-bootstrap'
import ContentContext from '../../context/ContentContext'

const TabGeneral = () => {
  const { update, setUpdate, content } = useContext(ContentContext)
  const [message, setMessage] = useState(null)
  const { language } = update
  const { body } = update
  const reader = new FileReader()

  const handleChangeLanguage = ({ target }) => {
    const { value } = target
    const newUpdate = { ...update }
    newUpdate.language = value
    setUpdate(newUpdate)
  }

  const handleOnChange = ({ target }) => {
    const { name, value } = target
    const newUpdate = { ...update }
    newUpdate.body[name] = value
    setUpdate(newUpdate)
  }

  const onProcessJson = () => {
    setMessage('Se importaron los datos exitosamente!')
    setUpdate(JSON.parse(reader.result))
  }

  const handleProcessJson = ({ target }) => {
    const { files } = target
    reader.onloadend = onProcessJson
    reader.readAsText(files[0])
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
          <Form.Switch value="english" label="English" checked={language === 'english'} onChange={handleChangeLanguage} />
          <Form.Switch value="spanish" label="Spanish" checked={language === 'spanish'} onChange={handleChangeLanguage} />
        </Col>
        <Col xs={12}>
          <div className='d-flex flex-row justify-content-between'>
            <div className='w-100'>
              <FormLabel className='btn btn-outline-primary w-100' htmlFor='import'>Import</FormLabel>
              <Form.Control type="file" accept='.json' id='import' hidden onChange={handleProcessJson} onClick={() => setMessage(null)} />
            </div>
            <div className='w-100'>
              <a className='btn btn-outline-primary w-100' href={`data:text/json;charset=utf-8,${encodeURIComponent(JSON.stringify(content))}`} download="cv-data.json">
                Exportar
              </a>
            </div>
          </div>
          <div>
            {message && <div className='alert alert-success text-center p-2'>{message}</div>}
          </div>
        </Col>
      </Row>
    </div>
  )
}

export default TabGeneral