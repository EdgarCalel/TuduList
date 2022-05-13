import React from 'react';
import '../css/todosLoading.css'
import LogoFondo from '../../assets/undraw_mobile_development_re_wwsn.svg'

function TodosLoading({error}) {

 return (
     <>
     <div className='Principal_loading'>
     <div className="LoadingTodo-container">
        <span className="LoadingTodo-completeIcon"></span>
        <i className="fa-solid fa-spinner"></i><p className="LoadingTodo-text">Cargando tareas...</p>
        <span className="LoadingTodo-deleteIcon"></span>
    </div><br />
    <div className='principal-Img'>
    <img className='Principal_loading--img' src={LogoFondo} alt="" />
    </div>
     </div>
     </>
 )
}
export { TodosLoading };