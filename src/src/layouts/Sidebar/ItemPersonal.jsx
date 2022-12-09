import React from 'react'

const ItemPersonal = ({ icon, label, description }) => {
  return (
    <li className="sidebar--item sidebar--item-personal">
      {icon}
      <span className="sidebar--label">{label}</span><br />
      {description}
    </li>
  )
}

export default ItemPersonal