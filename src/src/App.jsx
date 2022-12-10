import { useState } from 'react'
import 'bootstrap'
import './css/style.css'
import './css/fonts.css'
import CvDataInit from './data/CvDataInit'
import ContentContext from './context/ContentContext'
import ContentBody from './components/ContentBody'
import Sidebar from './components/Sidebar'
import ModalData from './components/ModalData'

function App() {
  const init = JSON.stringify(CvDataInit)
  const [content, setContent] = useState(JSON.parse(init))
  const [update, setUpdate] = useState(JSON.parse(init))
  const [show, setShow] = useState(false)

  const handleSaveUpdates = () => {
    const updateStr = JSON.stringify(update)
    setContent(JSON.parse(updateStr))
  }

  const context = {
    content,
    setContent,
    update,
    setUpdate,
    handleSaveUpdates,
    show,
    setShow
  }

  return (
    <div>
      <ContentContext.Provider value={context}>
        <ModalData />
        <Sidebar />
        <ContentBody />
      </ContentContext.Provider>
    </div>
  )
}

export default App
