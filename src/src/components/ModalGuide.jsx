import React, { useState } from 'react'
import { Button, Modal } from 'react-bootstrap'
import pag1 from '../images/pag1.png'
import pag2 from '../images/pag2.png'

const ModalGuide = ({ show, setShow }) => {
  const [pag, setPag] = useState(true)
  return (
    <Modal show={show} onHide={() => setShow(false)}>
      <Modal.Header closeButton><h3>Guide to print correctly</h3></Modal.Header>
      <Modal.Body>
        <div className='text-center'>
          <img src={pag ? pag1 : pag2} />
        </div>
        <div className='text-center mt-2'>
          <Button onClick={() => setPag(!pag)} >{pag ? 'Next' : 'Previous'}</Button>
        </div>
      </Modal.Body>
    </Modal>
  )
}

export default ModalGuide