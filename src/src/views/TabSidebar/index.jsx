import React, { useContext } from 'react'
import Personal from './tabs/Personal'
import TabMaker from '../../components/TabMaker'
import ContentItems from './tabs/ContentItems'
import ContentContext from '../../context/ContentContext'

const TabSidebar = () => {
  const { update, setUpdate } = useContext(ContentContext)

  const prevTabs = update.sidebar.others.map(
    ({ title, items }) => ({
      eventKey: title.toLowerCase(), title, component: ContentItems, props: { items }
    })
  )

  const tabs = [
    { eventKey: 'personal', title: 'Personal', component: Personal, persistent: true },
    ...prevTabs
  ]


  const handleUpdateItems = (listTabs) => {
    const newUpdate = { ...update }
    const filter = listTabs.filter(tab => !tab.persistent)
    const others = filter.map(
      ({ title, props }) => ({ title, items: props?.items || [] })
    )
    newUpdate.sidebar.others = others
    setUpdate(newUpdate)
  }

  return (
    <TabMaker tabs={tabs} componentMaker={ContentItems} onChange={handleUpdateItems} />
  )
}

export default TabSidebar