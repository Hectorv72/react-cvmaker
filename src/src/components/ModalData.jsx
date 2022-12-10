import React, { useContext } from 'react'
import { Modal, Tabs, Tab, Button } from 'react-bootstrap'
import ContentContext from '../context/ContentContext'
import ModalFormSummary from './ModalFormSummary'

const ModalData = () => {
  const { show, setShow, handleSaveUpdates, update } = useContext(ContentContext)

  const handleClickSave = () => {
    handleSaveUpdates()
    setShow(false)
  }

  return (
    <Modal show={show} onHide={() => setShow(false)}>
      {/* <Modal.Header closeButton></Modal.Header> */}
      <Modal.Body className='p-0'>
        <Tabs defaultActiveKey="summary">
          <Tab eventKey="summary" title="Summary">
            <ModalFormSummary />
          </Tab>
        </Tabs>
      </Modal.Body>
      <Modal.Footer className='d-flex justify-content-center'>
        <Button variant='danger' onClick={() => setShow(false)}>Salir</Button>
        <Button variant='primary' onClick={handleClickSave}>Guardar</Button>
      </Modal.Footer>
    </Modal>
  )
}

export default ModalData