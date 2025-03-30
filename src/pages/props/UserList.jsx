import React from 'react'
import UserProfile from '../../components/UserProfile'


const UserList = () => {
  return (
    <div className='border bg-green-400'>
      <UserProfile name = "Lewis Hamilton" age = {30} rank = {1} />
      <UserProfile name = "Max Vestapen" age = {22} rank = {2} />
    </div>
  )
}

export default UserList
