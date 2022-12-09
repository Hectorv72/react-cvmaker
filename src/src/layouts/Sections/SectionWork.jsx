import React from 'react'
import ItemSection from './ItemSection'
import ListSection from './ListSection'

const SectionWork = ({ }) => {
  return (
    <div class="section">
      <div class="section--title">
        <h2>
          <i class="section--title-icon work">
            <svg fill="#000000" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
              <path d="M0 0h24v24H0zm10 5h4v2h-4zm0 0h4v2h-4z" fill="none"></path>
              <path
                d="M10 16v-1H3.01L3 19c0 1.11.89 2 2 2h14c1.11 0 2-.89 2-2v-4h-7v1h-4zm10-9h-4.01V5l-2-2h-4l-2 2v2H4c-1.1 0-2 .9-2 2v3c0 1.11.89 2 2 2h6v-2h4v2h6c1.1 0 2-.9 2-2V9c0-1.1-.9-2-2-2zm-6 0h-4V5h4v2z">
              </path>
            </svg>
          </i>

          Work experience
        </h2>
      </div>

      <div class="section--time-line-overlay"></div>
      <ListSection >
        <ItemSection date="2022-actual" title="Data analisist" subtitle="Developer" />
      </ListSection>
    </div>
  )
}

export default SectionWork