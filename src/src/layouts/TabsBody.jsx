import React from 'react'
import { Tabs, Tab } from 'react-bootstrap'
import ModalFormSummary from '../components/ModalFormSummary'


const TabsBody = () => {
  return (
    <Tabs defaultActiveKey="summary">
      <Tab eventKey="summary" title="Summary">
        <ModalFormSummary />
      </Tab>
    </Tabs>
  )
}

export default TabsBody