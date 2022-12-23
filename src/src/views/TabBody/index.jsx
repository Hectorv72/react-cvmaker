import React from 'react'
import { Tabs, Tab } from 'react-bootstrap'
import Summary from './tabs/Summary'

const TabBody = () => {
  return (
    <Tabs defaultActiveKey="summary">
      <Tab eventKey="summary" title="Summary">
        <Summary />
      </Tab>
    </Tabs>
  )
}

export default TabBody