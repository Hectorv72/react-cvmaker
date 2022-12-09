import React from 'react'

const ItemLabel = ({ label }) => {
  return (
    <li className="sidebar--item">
      <span className="sidebar--label">{label}</span>
    </li>
  )
}

export default ItemLabel