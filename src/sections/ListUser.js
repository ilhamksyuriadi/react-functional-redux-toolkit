import React from 'react'
import CardUser from '../components/CardUser'
import { useSelector } from 'react-redux'
import { selectUsersState } from '../redux/userSlice'

const ListUser = () => {
    const users = useSelector(selectUsersState)

    return (
        <div>
            {users?.map((user, index) => {
                return (
                    <CardUser key={index} name={user.name} />
                  
                )
            })}
        </div>
    )
}

export default ListUser