import React from 'react'
import './css/CreateTodoButton.css'

function CreateTodoButton(props) {
  const agregar=()=>props.setOpenModal(prevState => !prevState)
  return (
    <>
  <button className="CreateTodoButton"
  onClick={agregar}
  >+</button>

    </>
  )
}

export default CreateTodoButton