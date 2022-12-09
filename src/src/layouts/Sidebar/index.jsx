import React from 'react'
import SidebarItemPersonal from './SidebarItemPersonal'
import SidebarList from './SidebarList'

const Sidebar = () => {
  return (
    <>
      <div className="sidebar--bg"></div>
      <aside className="sidebar">
        <SidebarList title={'personal information'}>
          <SidebarItemPersonal label={'Nombre'} description={'Hector Valdez'} />
        </SidebarList>
      </aside>
    </>
  )
}

export default Sidebar