import React from 'react'

const SectionSummary = ({ title, subtitle, description }) => {
  return (
    <div className="section">
      <div className="section section--summary">
        <div className="section--content">
          <h2>{title}</h2>
          <br />
          <p>
            <span style={{ color: 'rgba(0, 0, 0, 0.9)', marginBottom: '10px' }}>
              {subtitle}
            </span>
          </p>
          <br />
          <p>
            <span style={{ color: 'rgba(0, 0, 0, 0.9)' }}>
              {description}
            </span>
          </p>
        </div>
      </div>
    </div>
  )
}

export default SectionSummary