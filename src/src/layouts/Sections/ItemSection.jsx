import React from 'react'

const ItemSection = ({ date, title, subtitle, content }) => {
  return (
    <li class="section--item">
      <div class="section--time-line">
        <svg class="section--time-line-dot">
          <circle cx="4" cy="4" r="3" stroke="black" stroke-width="1" fill="white"></circle>
        </svg>
      </div>
      <div class="section--time-line-hide-overlay"></div>
      <div class="section--heading-group">
        <div class="section--date">{date}</div>
        <div class="section--heading">
          <h3>
            {title}
          </h3>
        </div>
        <div class="section--sub-heading">{subtitle}</div>
      </div>
      {
        content &&
        <div class="section--content">
          <p>
            {content}
          </p>
        </div>
      }
    </li>
  )
}

export default ItemSection