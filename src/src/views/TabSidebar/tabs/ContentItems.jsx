import React, { useContext, useState } from 'react'
import { Row, Col, FormLabel, Form, Button } from 'react-bootstrap'
import { List, arrayMove } from 'react-movable'
import ContentContext from '../../../context/ContentContext'

const ContentItems = ({ index }) => {

  const { update, setUpdate } = useContext(ContentContext)
  const [input, setInput] = useState(null)
  // const [items, setItems] = useState(initItems)

  const handleDeleteItem = (id) => {
    const newUpdate = { ...update }
    const prevItems = newUpdate.sidebar.others[index - 1].items
    const newItems = prevItems.filter((_, index) => index !== id)
    newUpdate.sidebar.others[index - 1].items = newItems
    setUpdate(newUpdate)
  }

  const handleAddItem = (event) => {
    event.preventDefault()
    const newUpdate = { ...update }
    const prevItems = newUpdate.sidebar.others[index - 1].items
    newUpdate.sidebar.others[index - 1].items = [...prevItems, input]
    setUpdate(newUpdate)
    setInput(null)
  }

  const handleMoveItem = (oldIndex, newIndex) => {
    const newUpdate = { ...update }
    const items = newUpdate.sidebar.others[index - 1].items
    newUpdate.sidebar.others[index - 1].items = arrayMove(items, oldIndex, newIndex)
    setUpdate(newUpdate)
  }

  // useEffect(() => {
  //   console.log(update.sidebar.others)
  // }, [update])

  // useEffect(() => {
  //   if (initItems.toString() !== items.toString()) {
  //     setItems(initItems)
  //   }
  // }, [initItems])

  const renderItem = ({ value, props, index }) =>
    <li className='form-control d-flex flex-row justify-content-between align-items-center' {...props}>
      <div>{value}</div>
      <div><Button size='sm' variant='outline-danger' onClick={() => handleDeleteItem(index)}><i className='fa-solid fa-trash'></i></Button></div>
    </li>

  // useEffect(() => {
  //   const newUpdate = { ...update }
  //   if (newUpdate.sidebar.others[index - 1]) {
  //     newUpdate.sidebar.others[index - 1].items = items
  //     setUpdate(newUpdate)
  //   }
  // }, [items])

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
            values={update.sidebar.others[index - 1]?.items || ['loading...']}
            onChange={({ oldIndex, newIndex }) => handleMoveItem(oldIndex, newIndex)}
            renderList={({ children, props }) => <div {...props}>{children}</div>}
            renderItem={renderItem}
          />
        </Col>
      </Row>
    </div>
  )
}

export default ContentItems