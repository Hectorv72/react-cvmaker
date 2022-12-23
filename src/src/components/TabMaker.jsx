import React, { useEffect, useState } from 'react'
import { Tabs, Tab, Form, Button } from 'react-bootstrap'

const TabMaker = ({ tabs: initTabs = [], componentMaker, onChange }) => {

  const [tabs, setTabs] = useState(initTabs)
  const [selected, setSelected] = useState()

  const makeNewTab = () => {
    // const count = update.sidebar.others.length + 1
    const count = tabs.length + 1
    const title = `NewTab-${count}`
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

  useEffect(() => {
    onChange && onChange(tabs)
  }, [tabs])

  return (
    <Tabs defaultActiveKey={tabs[0]?.eventKey || ''} onSelect={handleOnSelect} activeKey={selected} fill>
      {
        tabs.map(
          ({ title, eventKey, component: Component, props, persistent }, index) =>
            <Tab key={'maked-tab-' + index} eventKey={eventKey} title={title || `NewTab-${index + 1}`}>
              <div className='my-2'>
                {
                  !persistent && <Form.Control value={title || ''} name={`newtab-${index}`} placeholder="Title" onChange={handleChangeTitle} />
                }
                <Component {...props} index={index} />
                {
                  !persistent && <Button variant='outline-danger' className='text-center w-100' onClick={() => handleDeleteTab(index)}>Eliminar</Button>
                }
              </div>
            </Tab>
        )
      }
      <Tab eventKey="+" title="+"></Tab>
    </Tabs>
  )
}

export default TabMaker