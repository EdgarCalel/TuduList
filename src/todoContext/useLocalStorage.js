import React, {useState, useEffect} from "react";
import axios from 'axios';
const {
    REACT_APP_SERVER,
  } = process.env;

function useLocalStorage(){
    const [loading, setloading] = useState(true)
    const [error, setError] = useState(false)
    const [item, setItem] = useState([])
  useEffect(()=>{
    getData()
  },[] )
  
  const getData =async ()=>{
    try {
  const {data}=  await  axios.get(`${REACT_APP_SERVER}/todoList`)
        setItem(data)
      setloading(false)
    } catch (error) {
      setError(error)
    }
  }
    //guardamos los datos en el localstorage. para persistencia de datos
    const saveItem=(newItem)=>{
     try {
      const stringifiedItem = JSON.stringify(newItem);
   
      setItem(newItem)
     } catch (error) {
       setError(error)
     }
      }
  return {
    item,
    saveItem,
    loading, 
    error
  }
    }

    export {useLocalStorage}