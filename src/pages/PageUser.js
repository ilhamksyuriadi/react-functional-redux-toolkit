import React, { useEffect } from 'react'
import ListUser from '../sections/ListUser'
import { useDispatch } from 'react-redux';
import { 
    setUsers // ambil action
 } from '../redux/userSlice'
import axios from 'axios';

const PageUser = () => {
    const dispatch = useDispatch()

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/users') // promis, gak bisa di dalam action / reducer
            .then(res => {
                console.log(res)
                const dataUsers = (res.data)
                dispatch(setUsers(dataUsers))
            })
            .catch(e => {
                console.log(e)
            })
    }, [])

    return (
        <div>
            <ListUser />
        </div>
    )
}

export default PageUser