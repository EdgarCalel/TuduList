// src/EmptyTodos/index.js
import React from 'react';
import '../css/creaTodo.css'

import LogoCreate from '../../assets/undraw_pie_graph_re_fvol.svg'
function EmptyTodos() {
 return (
     <>
    <div className='Principal_creaTodo--form'>
    <h2>No se encuentra tareas</h2>
    <h4>Crea Uno!</h4>
     <img src={LogoCreate} alt="" center/>
         </div>
    
     </>
 )
}
export { EmptyTodos };