import React from 'react'
import { Tabs, Tab } from 'react-bootstrap'
import ModalFormBasic from '../components/ModalFormBasic'
import ModalFormSummary from '../components/ModalFormSummary'


const TabsBody = () => {
  return (
    <Tabs defaultActiveKey="basic">
      <Tab eventKey="basic" title="Basic">
        <ModalFormBasic />
      </Tab>
      <Tab eventKey="summary" title="Summary">
        <ModalFormSummary />
      </Tab>
    </Tabs>
  )
}

export default TabsBody