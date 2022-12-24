import React from 'react'
import { Tabs, Tab } from 'react-bootstrap'
import Summary from './tabs/Summary'
import WorkExperience from './tabs/WorkExperience'
import Certifications from './tabs/Certifications'
import Knowledges from './tabs/Knowledges'

const TabBody = () => {
  return (
    <Tabs defaultActiveKey="summary">
      <Tab eventKey="summary" title="Summary">
        <Summary />
      </Tab>
      <Tab eventKey="works" title="Work Experience">
        <WorkExperience />
      </Tab>
      <Tab eventKey="certifications" title="Titles and Certifications">
        <Certifications />
      </Tab>
      <Tab eventKey="knowledges" title="Knowledges">
        <Knowledges />
      </Tab>
    </Tabs>
  )
}

export default TabBody