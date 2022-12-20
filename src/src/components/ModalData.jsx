import React, { useContext } from 'react'
import { Modal, Tabs, Tab, Button } from 'react-bootstrap'
import ContentContext from '../context/ContentContext'
import TabsBody from '../layouts/TabsBody'
import TabsSidebar from '../layouts/TabsSidebar'
import ModalFormGeneral from './ModalFormGeneral'

const ModalData = () => {
  const { show, setShow, handleSaveUpdates, handleCancelUpdates } = useContext(ContentContext)

  const handleClickCancel = () => {
    handleCancelUpdates()
    setShow(false)
  }

  const handleClickSave = () => {
    handleSaveUpdates()
    setShow(false)
  }

  return (
    <Modal show={show} onHide={() => setShow(false)}>
      <Modal.Body className='p-0'>
        <Tabs defaultActiveKey="general">
          <Tab eventKey="general" title="General">
            <div className='px-4'>
              <ModalFormGeneral />
            </div>
          </Tab>
          <Tab eventKey="sidebar" title="Sidebar">
            <div className='px-4'>
              <TabsSidebar />
            </div>
          </Tab>
          <Tab eventKey="body" title="Body">
            <div className='px-4'>
              <TabsBody />
            </div>
          </Tab>
        </Tabs>
      </Modal.Body>
      <Modal.Footer className='d-flex justify-content-center'>
        <Button variant='danger' onClick={handleClickCancel}>Cancelar</Button>
        <Button variant='primary' onClick={handleClickSave}>Guardar</Button>
      </Modal.Footer>
    </Modal>
  )
}

export default ModalData