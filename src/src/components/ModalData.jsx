import React, { useContext } from 'react'
import { Modal, Tabs, Tab, Button } from 'react-bootstrap'
import ContentContext from '../context/ContentContext'
import TabGeneral from '../views/TabGeneral'
import TabSidebar from '../views/TabSidebar'
import TabBody from '../views/TabBody'

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
    <Modal show={show} onHide={() => setShow(false)} backdrop="static" keyboard={false}>
      <Modal.Body className='p-0'>
        <Tabs defaultActiveKey="general" fill>
          <Tab eventKey="general" title="General">
            <div className='px-4'>
              <TabGeneral />
            </div>
          </Tab>
          <Tab eventKey="sidebar" title="Sidebar">
            <div className='px-4'>
              <TabSidebar />
            </div>
          </Tab>
          <Tab eventKey="body" title="Body">
            <div className='px-4'>
              <TabBody />
            </div>
          </Tab>
        </Tabs>
      </Modal.Body>
      <Modal.Footer className='d-flex justify-content-center'>
        <Button variant='outline-danger' onClick={handleClickCancel}>Cancel</Button>
        <Button variant='outline-success' onClick={handleClickSave}>Save</Button>
      </Modal.Footer>
    </Modal>
  )
}

export default ModalData