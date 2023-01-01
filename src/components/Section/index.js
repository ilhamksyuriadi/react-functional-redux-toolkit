import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import {
  selectTodosState,
  getTodosAsync
} from '../../redux/todoSlice'
import './styles.css'

const Section = () => {
  const todos = useSelector(selectTodosState)
  const dispatch = useDispatch()
  dispatch(getTodosAsync)

  useEffect(() => {
    dispatch(getTodosAsync())
  }, [])

  useEffect(() => {
    console.log(todos)
  }, [todos])

  return (
    <section>Section</section>
  )
}

export default Section