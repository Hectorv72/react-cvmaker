import React from 'react'

const ItemTimeLine = ({ date, title, subtitle, content }) => {
  return (
    <li className="section--item">
      <div className="section--time-line">
        <svg className="section--time-line-dot">
          <circle cx="4" cy="4" r="3" stroke="black" strokeWidth="1" fill="white"></circle>
        </svg>
      </div>
      <div className="section--time-line-hide-overlay"></div>
      <div className="section--heading-group">
        <div className="section--date">{date}</div>
        <div className="section--heading">
          <h3>
            {title}
          </h3>
        </div>
        <div className="section--sub-heading">{subtitle}</div>
      </div>
      {
        content &&
        <div className="section--content">
          <p>
            {content}
          </p>
        </div>
      }
    </li>
  )
}

export default ItemTimeLine