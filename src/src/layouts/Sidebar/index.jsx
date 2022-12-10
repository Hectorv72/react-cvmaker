import React from 'react'
import { EmailIcon, GithubIcon, LinkedinIcon, PhoneIcon, UbicationIcon } from '../../data/SidebarIcons'
import ItemLabel from './ItemLabel'
import ItemPersonal from './ItemPersonal'
import SidebarList from './SidebarList'

const Sidebar = () => {
  return (
    <>
      <div className="sidebar--bg"></div>
      <aside className="sidebar">
        <SidebarList title={'personal information'}>
          <ItemPersonal icon={UbicationIcon} label={'From'} description={'Argentina Formosa Formosa'} />
          <ItemPersonal icon={EmailIcon} label={'Email'} description={'hectorvaldezfsa13@gmail.com'} />
          <ItemPersonal icon={PhoneIcon} label={'Phone'} description={'+54 93704037756'} />
          <ItemPersonal icon={GithubIcon} label={'Github'} description={'www.github.com/Hectorv72'} />
          <ItemPersonal icon={LinkedinIcon} label={'Linkedin'} description={'www.linkedin.com/in/hectorv72'} />
        </SidebarList>
        <SidebarList title={'Languages'}>
          <ItemLabel label={'English - Conversational'} />
        </SidebarList>
      </aside>
    </>
  )
}

export default Sidebar