import React, { useContext } from 'react'
import ContentContext from '../context/ContentContext'
import { EmailIcon, GithubIcon, LinkedinIcon, PhoneIcon, UbicationIcon } from '../data/SidebarIcons'
import ItemLabel from '../layouts/Sidebar/ItemLabel'
import ItemPersonal from '../layouts/Sidebar/ItemPersonal'
import SidebarList from '../layouts/Sidebar/SidebarList'

const Sidebar = () => {
  const { content, language, setShow } = useContext(ContentContext)
  const { sidebar } = content
  const { personal, others } = sidebar
  return (
    <>
      <div className="sidebar--bg"></div>
      <aside className="sidebar">
        <div className='me-3 pt-4 d-print-none'>
          <button className='w-100 btn btn-outline-light' onClick={() => setShow(true)}>Modificar</button>
        </div>
        <SidebarList title={language.personal_information}>
          {personal?.from && <ItemPersonal icon={UbicationIcon} label={language.from} description={personal.from} />}
          {personal?.email && <ItemPersonal icon={EmailIcon} label={'Email'} description={personal.email} />}
          {personal?.phone && <ItemPersonal icon={PhoneIcon} label={language.phone} description={personal.phone} />}
          {personal?.github && <ItemPersonal icon={GithubIcon} label={'Github'} description={personal.github} />}
          {personal?.linkedin && <ItemPersonal icon={LinkedinIcon} label={'Linkedin'} description={personal.linkedin} />}
        </SidebarList>
        {
          others &&
          others.map(
            ({ title, items }, index) =>
              <SidebarList key={'sidebar-item-list' + index} title={title}>
                {
                  items.map(
                    (item, id) =>
                      <ItemLabel key={'sidebar-item-label' + id} label={item} />
                  )
                }
              </SidebarList>
          )
        }
      </aside>
    </>
  )
}

export default Sidebar