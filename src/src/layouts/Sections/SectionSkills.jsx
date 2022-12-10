import React, { useEffect } from 'react'
import fragmentList from '../../helpers/fragmentList'

const SectionSkills = ({ icon, title, list = [] }) => {
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
      <ol className="section--list skills">
        {
          (fragmentList([...list], 2)).map(
            (items, index) =>
              <li key={'item-skills-' + index} className="section--item skills">
                <div style={{ flexDirection: 'row' }}>
                  {
                    items.map(
                      (item, i) =>
                        <div key={'item-skill-' + i} className="skills--label">
                          <h3>{item}</h3>
                        </div>
                    )
                  }
                </div>
              </li>
          )
        }
      </ol>
    </div>
  )
}

export default SectionSkills