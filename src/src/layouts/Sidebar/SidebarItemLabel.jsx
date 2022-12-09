import React from 'react'

const SidebarItemLabel = ({ label }) => {
  return (
    <li className="sidebar--item">
      <span className="sidebar--label">{label}</span>
    </li>
  )
}

export default SidebarItemLabel