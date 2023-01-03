import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import {
  setTodos,
  selectTodosState
} from '../../redux/todoSlice'
import axios from 'axios';
import './styles.css'

const Section = () => {
  const todos = useSelector(selectTodosState)
  const dispatch = useDispatch();

  useEffect(() => {
    const url = 'https://jsonplaceholder.typicode.com/todos'
    axios.get(url)
    .then(res => {
      const toDosData = res.data
      dispatch(setTodos(toDosData))
    })
    .catch(err => {
      console.log(err)
    })
  }, [dispatch])

  useEffect(() => {
    console.log(todos)
  },[todos])

  return (
    <section>Section</section>
  )
}

export default Section