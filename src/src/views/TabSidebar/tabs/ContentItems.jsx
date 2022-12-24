import React, { useContext, useEffect, useState } from 'react'
import { Row, Col, FormLabel, Form, Button } from 'react-bootstrap'
import { List, arrayMove } from 'react-movable'
import ContentContext from '../../../context/ContentContext'

const ContentItems = ({ items: initItems = [], index }) => {
  const { update, setUpdate } = useContext(ContentContext)
  const [input, setInput] = useState(null)
  const [items, setItems] = useState(initItems)

  const handleDeleteItem = (id) => setItems(items.filter((_, index) => index !== id))

  const handleAddItem = (event) => {
    event.preventDefault()
    setItems(prev => [...prev, input])
    setInput(null)
  }

  const renderItem = ({ value, props, index }) =>
    <li className='form-control d-flex flex-row justify-content-between align-items-center' {...props}>
      <div>{value}</div>
      <div><Button size='sm' variant='outline-danger' onClick={() => handleDeleteItem(index)}><i className='fa-solid fa-trash'></i></Button></div>
    </li>

  useEffect(() => {
    const newUpdate = { ...update }
    if (newUpdate.sidebar.others[index - 1]) {
      newUpdate.sidebar.others[index - 1].items = items
      setUpdate(newUpdate)
    }
  }, [items])

  return (
    <div className='m-2'>
      <Row className='gap-3'>
        <Col xs={12}>
          <FormLabel id='form-newitem-items'>Items</FormLabel>
          <Form className='d-flex flex-row' onSubmit={handleAddItem}>
            <Form.Control value={input || ''} id='form-newitem-title' onChange={({ target }) => setInput(target.value)} />
            <Button className='ms-2' type='submit'>Add</Button>
          </Form>
        </Col>
        <Col xs={12}>
          <List
            values={items || ['loading...']}
            onChange={({ oldIndex, newIndex }) => setItems(arrayMove(items, oldIndex, newIndex))}
            renderList={({ children, props }) => <div {...props}>{children}</div>}
            renderItem={renderItem}
          />
        </Col>
      </Row>
    </div>
  )
}

export default ContentItems