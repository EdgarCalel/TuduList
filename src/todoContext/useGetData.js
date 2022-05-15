import React, {useState, useEffect} from "react";
import axios from 'axios';
const {
    REACT_APP_SERVER,
  } = process.env;

function useGetData(){
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

  return {
    item,
    loading, 
    error
  }
    }

    export {useGetData}