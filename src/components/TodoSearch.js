import React,{ useState } from 'react'
import { TodoContext } from '../todoContext'
import './css/TodoSearch.css'

function TodoSearch() {
const {search, setSearch}=React.useContext(TodoContext)

const searchI=(e)=>{
 
  setSearch(e.target.value)
}
  
  return (
    <>
    <div className='searchPrincipal'>
 <input className="TodoSearch" 
 placeholder="Search" 
 value={search}
 onChange={searchI}
 />
 </div>
 <h5>Developer = {'() => '}'Edgar Calel' </h5>
    </>
  )
}

export default TodoSearch