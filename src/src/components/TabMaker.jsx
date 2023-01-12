import React, { useEffect, useState } from 'react'
import { Tabs, Tab, Form, Button } from 'react-bootstrap'

const TabMaker = ({ tabs: initTabs = [], componentMaker, header = true, tabLabel = 'NewTab', onChange }) => {

  const [tabs, setTabs] = useState(initTabs)
  const [selected, setSelected] = useState()

  const makeNewTab = () => {
    const count = tabs.length + 1
    const title = `${tabLabel}-${count}`
    return { tab: { title, eventKey: `new-tab-${count}`, component: componentMaker, props: {} }, count }
  }

  const handleChangeTitle = ({ target }) => {
    const { name, value } = target
    const index = name.split('-')[1]
    const updateTabs = [...tabs]
    updateTabs[index].title = value
    setTabs(updateTabs)
  }

  const handleDeleteTab = (id) => {
    setTabs(tabs.filter((_, index) => index !== id))
    setSelected(tabs[tabs.length - 2]?.eventKey || '')
  }

  const handleOnClickPlus = () => {
    const { tab, count } = makeNewTab()
    setTabs([...tabs, tab])
    setSelected(`new-tab-${count}`)
  }

  const handleOnSelect = (key) => {
    setSelected(key)
    if (key === '+') {
      handleOnClickPlus()
    }
  }

  const handleChangePosition = (direction, index, tab) => {
    const newTabs = [...tabs]
    const newPos = direction === 'left' ? index - 1 : index + 1
    newTabs.splice(index, 1);
    newTabs.splice(newPos, 0, tab);
    setTabs(newTabs);
  }

  const renderTab = (tab, index) => {
    const { title, eventKey, component: Component, props, persistent } = tab
    const labelTitle = title.length > 15 ? title.substr(0, 14) + '...' : title
    return (
      <Tab key={'maked-tab-' + index} eventKey={eventKey} title={labelTitle || `${tabLabel}-${index + 1}`}>
        <div className='my-2'>
          {
            !persistent &&
            <div className='d-flex flex-row justify-content-center my-2'>
              {
                (tabs[index - 1] !== undefined && !tabs[index - 1]?.persistent) &&
                <Button variant='outline-primary' onClick={() => handleChangePosition('left', index, tab)} >{'<'}</Button>
              }
              {
                (tabs[index + 1] !== undefined && !tabs[index + 1]?.persistent) &&
                <Button variant='outline-primary' onClick={() => handleChangePosition('right', index, tab)} >{'>'}</Button>
              }
            </div>
          }
          {
            header && !persistent && <Form.Control value={title || ''} name={`newtab-${index}`} placeholder="Title" onChange={handleChangeTitle} />
          }
          <Component {...props} index={index} />
          {
            !persistent && <Button className='text-center w-100' onClick={() => handleDeleteTab(index)}>Remove</Button>
          }
        </div>
      </Tab>
    )
  }

  useEffect(() => {
    onChange && onChange(tabs)
  }, [tabs])

  return (
    <Tabs defaultActiveKey={tabs[0]?.eventKey || ''} onSelect={handleOnSelect} activeKey={selected} fill>
      {
        tabs.map(renderTab)
      }
      <Tab eventKey="+" title="+"></Tab>
    </Tabs>
  )
}

export default TabMaker