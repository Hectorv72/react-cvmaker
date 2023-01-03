import React, { useContext } from 'react'
import { Col, Form, FormLabel, InputGroup, Row, Tab, Tabs } from 'react-bootstrap'
import ContentContext from '../../../context/ContentContext'

const Personal = () => {
  const { update, setUpdate, language } = useContext(ContentContext)
  const { sidebar } = update

  const handleOnChange = ({ target }) => {
    const { name, value } = target
    const newUpdate = { ...update }
    newUpdate.sidebar.personal[name] = value
    if (name === 'sex') {
      if (value === 'null') {
        newUpdate.sidebar.personal[name] = null
      }
    }
    setUpdate(newUpdate)
    console.log(update)
  }

  return (
    <Tabs defaultActiveKey='information' fill>
      <Tab title='Information' eventKey='information'>
        <Row className='gap-3 my-2'>
          <Col xs={12}>
            <FormLabel id='form-personal-from'>{language.from}</FormLabel>
            <InputGroup>
              <InputGroup.Text>
                <i className="fa-solid fa-location-dot"></i>
              </InputGroup.Text>
              <Form.Control value={sidebar?.personal?.from || ''} id='form-personal-from' name='from' onChange={handleOnChange} />
            </InputGroup>
          </Col>
          <Col xs={12}>
            <FormLabel id='form-personal-house'>{language.house}</FormLabel>
            <InputGroup>
              <InputGroup.Text>
                <i className="fa-solid fa-home"></i>
              </InputGroup.Text>
              <Form.Control value={sidebar?.personal?.house || ''} id='form-personal-house' name='house' onChange={handleOnChange} />
            </InputGroup>
          </Col>
          <Col xs={12}>
            <FormLabel id='form-personal-nacionality'>{language.nacionality}</FormLabel>
            <InputGroup>
              <InputGroup.Text>
                <i className="fa-solid fa-flag"></i>
              </InputGroup.Text>
              <Form.Control value={sidebar?.personal?.nacionality || ''} id='form-personal-nacionality' name='nacionality' onChange={handleOnChange} />
            </InputGroup>
          </Col>
          <Col xs={12}>
            <FormLabel id='form-personal-civilstatus'>{language.civilstatus}</FormLabel>
            <InputGroup>
              <InputGroup.Text>
                <i className="fa-solid fa-id-badge"></i>
              </InputGroup.Text>
              <Form.Control value={sidebar?.personal?.civilstatus || ''} id='form-personal-civilstatus' name='civilstatus' onChange={handleOnChange} />
            </InputGroup>
          </Col>
          <Col xs={12}>
            <FormLabel id='form-personal-sex'>{language.sex}</FormLabel>
            <InputGroup>
              <InputGroup.Text>
                <i className={`fa-solid ${sidebar?.personal?.sex === 'male' ? 'fa-person' : 'fa-person-dress'}`}></i>
              </InputGroup.Text>
              <Form.Select value={sidebar?.personal?.sex || ''} id='form-personal-sex' name='sex' onChange={handleOnChange} >
                <option value="null">not selected</option>
                <option value='male'>{language.sexs.male}</option>
                <option value='female'>{language.sexs.female}</option>
              </Form.Select>
            </InputGroup>
          </Col>
        </Row>
      </Tab>
      <Tab title='Contact' eventKey='contact'>
        <Row className='gap-3 my-2'>
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
            <FormLabel id='form-personal-phone'>{language.phone}</FormLabel>
            <InputGroup>
              <InputGroup.Text>
                <i className="fa-solid fa-phone"></i>
              </InputGroup.Text>
              <Form.Control value={sidebar?.personal?.phone || ''} id='form-personal-phone' name='phone' onChange={handleOnChange} />
            </InputGroup>
          </Col>
          <Col xs={12}>
            <FormLabel id='form-personal-web'>Web</FormLabel>
            <InputGroup>
              <InputGroup.Text>
                <i className="fa-solid fa-globe"></i>
              </InputGroup.Text>
              <Form.Control value={sidebar?.personal?.web || ''} id='form-personal-web' name='web' onChange={handleOnChange} />
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
      </Tab>
    </Tabs>

  )
}

export default Personal