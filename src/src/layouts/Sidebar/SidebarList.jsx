import React from 'react'

const SidebarList = ({ title, children }) => {
  return (
    <div className="sidebar--data">
      <h2 className="sidebar--title">
        <span>{title}</span>
      </h2>
      <ul className="sidebar--list">
        {children}
      </ul>
    </div>
  )
}

export default SidebarList