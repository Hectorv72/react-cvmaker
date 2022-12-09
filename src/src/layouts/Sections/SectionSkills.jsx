import React, { useEffect } from 'react'
import fragmentList from '../../helpers/fragmentList'

const SectionSkills = ({ icon, title, list = [] }) => {
  console.log(list)
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
            (item, index) =>
              <li key={'item-skills-' + index} className="section--item skills">
                <div style={{ flexDirection: 'row' }}>
                  <div className="skills--label">
                    <h3>{item[0]}</h3>
                  </div>
                  <div className="skills--label">
                    <h3>{item[1]}</h3>
                  </div>
                </div>
              </li>
          )
        }
      </ol>
    </div>
  )
}

export default SectionSkills