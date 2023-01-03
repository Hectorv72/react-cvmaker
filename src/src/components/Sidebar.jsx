import React, { useContext, useState } from 'react'
import ContentContext from '../context/ContentContext'
import { EmailIcon, FemaleIcon, FlagIcon, GithubIcon, HomeIcon, IdBadgeIcon, LinkedinIcon, MaleIcon, PhoneIcon, UbicationIcon, WebIcon } from '../data/SidebarIcons'
import ItemLabel from '../layouts/Sidebar/ItemLabel'
import ItemPersonal from '../layouts/Sidebar/ItemPersonal'
import SidebarList from '../layouts/Sidebar/SidebarList'
import ModalGuide from './ModalGuide'

const Sidebar = () => {
  const { content, language, setShow } = useContext(ContentContext)
  const { sidebar } = content
  const { personal, others } = sidebar
  const [showGuide, setShowGuide] = useState(false)

  return (
    <>
      <ModalGuide setShow={setShowGuide} show={showGuide} />
      <div className="sidebar--bg"></div>
      <aside className="sidebar">
        <div className='me-3 pt-4 d-print-none'>
          <label className='my-2 w-100 h6 d-flex justify-content-between align-items-center'>
            <div>Print: Ctrl + P</div>
            <div className='btn text-light' onClick={() => setShowGuide(true)}><i className="fa-solid fa-circle-info"></i></div>
          </label>
          <button className='w-100 btn btn-outline-light' onClick={() => setShow(true)}>Modify</button>
        </div>
        <SidebarList title={language.personal_information}>
          {personal?.from && <ItemPersonal icon={UbicationIcon} label={language.from} description={personal.from} />}
          {personal?.house && <ItemPersonal icon={HomeIcon} label={language.house} description={personal.house} />}
          {personal?.nacionality && <ItemPersonal icon={FlagIcon} label={language.nacionality} description={personal.nacionality} />}
          {personal?.email && <ItemPersonal icon={EmailIcon} label={'Email'} description={personal.email} />}
          {personal?.phone && <ItemPersonal icon={PhoneIcon} label={language.phone} description={personal.phone} />}
          {personal?.sex && <ItemPersonal icon={personal?.sex === 'male' ? MaleIcon : FemaleIcon} label={language.sex} description={language.sexs[personal?.sex || 0]} />}
          {personal?.civilstatus && <ItemPersonal icon={IdBadgeIcon} label={language.civilstatus} description={personal.civilstatus} />}
          {personal?.web && <ItemPersonal icon={WebIcon} label={'Web'} description={personal.web} />}
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
        <div className='pt-5 d-print-none'>
          <a href="https://github.com/Hectorv72/react-cvmaker" target="_blank" className='my-2 w-100 text-center link link-light text-decoration-none'><strong>Support the project <i className='fa-solid fa-heart'></i></strong></a>
        </div>
      </aside>
    </>
  )
}

export default Sidebar