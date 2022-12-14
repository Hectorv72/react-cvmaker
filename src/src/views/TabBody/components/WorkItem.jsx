import React, { useContext, useEffect, useState } from 'react'
import { Col, Form, FormLabel, Row } from 'react-bootstrap'
import ContentContext from '../../../context/ContentContext'

const WorkItem = ({ date, title, subtitle, content, index }) => {
  const { update, setUpdate } = useContext(ContentContext)
  const [start, end] = date ? date.split(' - ') : (' - ').split(' - ')
  const [form, setForm] = useState({ start, end, title, subtitle, content })

  const handleUpdateForm = ({ target }) => {
    const { name, value } = target
    setForm(prev => ({ ...prev, [name]: value }))
  }

  const FormatForm = () => {
    const { start, end, ...rest } = form
    const date = `${start} - ${end}`
    return ({ date, ...rest })
  }

  useEffect(() => {
    const newUpdate = { ...update }
    newUpdate.body.works[index] = FormatForm()
    setUpdate(newUpdate)
  }, [form])

  return (
    <Row className='mb-3 g-2'>
      <Col xs={6}>
        <FormLabel>Start</FormLabel>
        <Form.Control placeholder='Mar 2010' name='start' value={form?.start || ''} onChange={handleUpdateForm} />
      </Col>
      <Col xs={6}>
        <FormLabel>End</FormLabel>
        <Form.Control placeholder='Dic 2020/Actual' name='end' value={form?.end || ''} onChange={handleUpdateForm} />
      </Col>
      <Col xs={12}>
        <FormLabel>Title</FormLabel>
        <Form.Control name='title' value={form?.title || ''} onChange={handleUpdateForm} />
      </Col>
      <Col xs={12}>
        <FormLabel>Subtitle</FormLabel>
        <Form.Control name='subtitle' value={form?.subtitle || ''} onChange={handleUpdateForm} />
      </Col>
      <Col xs={12}>
        <FormLabel>Content</FormLabel>
        <Form.Control as="textarea" rows={3} name='content' value={form?.content || ''} onChange={handleUpdateForm} />
      </Col>
    </Row>
  )
}

export default WorkItem