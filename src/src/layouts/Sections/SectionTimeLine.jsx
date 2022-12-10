import React from 'react'
import ItemTimeLine from './ItemTimeLine'

const SectionTimeLine = ({ icon, title, list = [] }) => {
  return (
    <div className="section">
      <div className="section--title">
        <h2>
          <i className="section--title-icon work">
            {icon}
          </i>

          {title}
        </h2>
      </div>

      <div className="section--time-line-overlay"></div>
      <ol className="section--list">
        {
          list.map(
            ({ date, title, subtitle, content }, index) => <ItemTimeLine key={'item-timeline' + index} date={date} title={title} subtitle={subtitle} content={content} />
          )
        }
      </ol>
    </div>
  )
}

export default SectionTimeLine