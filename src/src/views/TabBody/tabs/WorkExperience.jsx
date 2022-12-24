import React, { useContext } from 'react'
import ContentContext from '../../../context/ContentContext'
import WorkItem from '../components/WorkItem'
import TabMaker from '../../../components/TabMaker'

const WorkExperience = () => {
  const { update, content, setUpdate } = useContext(ContentContext)

  const tabs = content.body.works.map(
    (props, index) => ({
      eventKey: `work-${index + 1}`, title: props.title || `WorkTab-${index + 1}`, component: WorkItem, props
    })
  )

  const handleUpdateItems = (listTabs) => {
    const newUpdate = { ...update }
    const filter = listTabs.filter(tab => !tab.persistent)
    const works = filter.map(
      ({ props }) => ({ ...props })
    )
    newUpdate.body.works = works
    setUpdate(newUpdate)
  }

  return (
    <TabMaker tabs={tabs} componentMaker={WorkItem} onChange={handleUpdateItems} header={false} tabLabel={'WorkTab'} />
  )
}

export default WorkExperience