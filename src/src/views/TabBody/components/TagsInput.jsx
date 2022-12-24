import React, { useState, useEffect } from 'react'
import { WithContext as ReactTags } from 'react-tag-input'
import '../styles/taginput_styles.css'

const TagsInput = ({ tags: initTags = [], keyDelimiters = [188, 190, 13], onChange = () => { } }) => {

  const [tags, setTags] = useState(initTags.map(tag => ({ id: tag, text: tag })))

  const handleDelete = i => {
    setTags(tags.filter((tag, index) => index !== i));
  };

  const handleDrag = (tag, currPos, newPos) => {
    const newTags = tags.slice();
    newTags.splice(currPos, 1);
    newTags.splice(newPos, 0, tag);
    setTags(newTags);
  };

  const handleAdd = tag => {
    setTags([...tags, tag]);
  };

  useEffect(() => {
    onChange(tags.map(tag => tag.text))
    return () => { }
  }, [tags])


  // const handleTagClick = index => {
  //   console.log('The tag at index ' + index + ' was clicked');
  // };

  return (
    <div className='m-3'>
      <ReactTags
        classNames={{
          tag: 'badge col-5 tag-font bg-primary p-2 d-flex flex-row justify-content-between',
          selected: 'row mt-2 gap-2 d-flex flex-row justify-content-center',
          tagInputField: 'form-control',
        }}
        placeholder='Add knowledge'
        tags={tags}
        // allowDragDrop={false}
        // suggestions={suggestions}
        delimiters={keyDelimiters}
        handleDelete={handleDelete}
        handleAddition={handleAdd}
        inputFieldPosition="top"
        handleDrag={handleDrag}
        // handleTagClick={handleTagClick}
        autocomplete
      />
    </div>
  )
}

export default TagsInput