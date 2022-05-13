import React from 'react'
import { TodoContext } from '../todoContext'
import './css/TodoCounter.css'

function TodoCounter() {
  const {completeTodos, totalTodos} = React.useContext(TodoContext)
  return (
    <div className='Header_titulo'>
      <h2 className='TodoCounter'>Has completado {completeTodos} de {totalTodos} tareas.</h2>
    </div>
  )
}

export default TodoCounter
