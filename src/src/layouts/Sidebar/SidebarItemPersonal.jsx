import React from 'react'

const defaultIcon =
  <svg className="sidebar--item-icon" fill="#000000" height="24" viewBox="0 0 24 24" width="24"
    xmlns="http://www.w3.org/2000/svg">
    <path
      d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z">
    </path>
    <path d="M0 0h24v24H0z" fill="none"></path>
  </svg>

const SidebarItemPersonal = ({ icon = defaultIcon, label, description }) => {
  return (
    <li className="sidebar--item sidebar--item-personal">
      {icon}
      <span className="sidebar--label">{label}</span><br />
      {description}
    </li>
  )
}

export default SidebarItemPersonal