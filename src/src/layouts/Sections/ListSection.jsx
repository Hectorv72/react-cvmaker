import React from 'react'

const ListSection = ({ children }) => {
  return (
    <ol class="section--list">
      {children}
    </ol>
  )
}

export default ListSection