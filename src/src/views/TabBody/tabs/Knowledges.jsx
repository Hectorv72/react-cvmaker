import React, { useContext } from 'react'
import TagsInput from '../components/TagsInput'
import ContentContext from '../../../context/ContentContext'

const Knowledges = () => {
  const { update, setUpdate, content } = useContext(ContentContext)
  const { knowledges } = content.body

  const handleOnChange = (tags) => {
    const newUpdate = { ...update }
    newUpdate.body.knowledges = tags
    setUpdate(newUpdate)
  }

  return (
    <div>
      <TagsInput tags={knowledges} onChange={handleOnChange} />
    </div>
  )
}

export default Knowledges