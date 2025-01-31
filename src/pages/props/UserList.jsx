import React from 'react'
import UserProfile from '../../components/UserProfile'


const UserList = () => {
  return (
    <div>
      <UserProfile name = "Lewis Hamilton" age = {30} />
      <UserProfile name = "Max Vestapen" age = {22} />
    </div>
  )
}

export default UserList
