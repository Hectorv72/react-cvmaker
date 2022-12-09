import React from 'react'
import SectionName from './SectionName'
import SectionSummary from './SectionSummary'
import SectionWork from './SectionWork'

const Sections = () => {
  return (
    <section className="sections">
      <SectionName label="Hector Daniel Valdez" />
      <SectionSummary title="Backend developer" subtitle="5 year of Developer" />
      <SectionWork />
    </section>
  )
}

export default Sections