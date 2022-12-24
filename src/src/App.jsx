import { useState } from 'react'
import 'bootstrap'
import './css/style.css'
import './css/fonts.css'
import CvDataInit from './data/CvDataInit'
import ContentContext from './context/ContentContext'
import ContentBody from './components/ContentBody'
import Sidebar from './components/Sidebar'
import ModalData from './components/ModalData'
import spanish from './language/spanish.json'
import english from './language/english.json'

const languages = { english, spanish }

function App() {
  const init = JSON.stringify(CvDataInit)
  const [content, setContent] = useState(JSON.parse(init))
  const [update, setUpdate] = useState(JSON.parse(init))
  const [show, setShow] = useState(false)
  const [language, setLanguage] = useState(spanish)

  const handleCancelUpdates = () => {
    const contentStr = JSON.stringify(content)
    setUpdate(JSON.parse(contentStr))
  }

  const handleChangeLanguage = (language) => {
    setLanguage(languages[language])
  }

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
    handleCancelUpdates,
    language,
    changeLanguage: handleChangeLanguage,
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
