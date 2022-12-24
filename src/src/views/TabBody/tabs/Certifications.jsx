import React, { useContext } from 'react'
import ContentContext from '../../../context/ContentContext'
import TabMaker from '../../../components/TabMaker'
import CertificationItem from '../components/CertificationItem'

const Certifications = () => {
  const { update, content, setUpdate } = useContext(ContentContext)

  const tabs = content.body.certifications.map(
    (props, index) => ({
      eventKey: `certification-${index + 1}`, title: props.title || `CertificationTab-${index + 1}`, component: CertificationItem, props
    })
  )

  const handleUpdateItems = (listTabs) => {
    const newUpdate = { ...update }
    const filter = listTabs.filter(tab => !tab.persistent)
    const certifications = filter.map(
      ({ props }) => ({ ...props })
    )
    newUpdate.body.certifications = certifications
    setUpdate(newUpdate)
  }

  return (
    <TabMaker tabs={tabs} componentMaker={CertificationItem} onChange={handleUpdateItems} header={false} tabLabel={'CertificationTab'} />
  )
}

export default Certifications