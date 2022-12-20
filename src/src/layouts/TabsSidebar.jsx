import React from 'react'
import { Tabs, Tab } from 'react-bootstrap'
import ModalFormPersonal from '../components/ModalFormPersonal'

const TabsSidebar = () => {
  return (
    <Tabs defaultActiveKey="basic">
      <Tab eventKey="basic" title="Basic">
        <ModalFormPersonal />
      </Tab>
      {/* <Tab eventKey="summary" title="Summary">
        <ModalFormSummary />
      </Tab> */}
    </Tabs>
  )
}

export default TabsSidebar