import React from 'react'
import UserProfile from '../../components/UserProfile'

const UserDirectory = () => {
    const users = [
        {id: 1, name: 'Lewis Hamiltion', age: 30, rank: 1},
        {id: 2, name: 'Max Vestapen', age: 22, rank:2},
        {id: 3, name: 'Alonso', age: 33, rank:5},
        {id: 4, name: 'Charls', age: 23, rank:6},
        {id: 5, name: 'Charloz', age: 25, rank:7},
    ]
  return (
    <div>
      <h3>User Directory Map Method</h3>
      {users.map((user)=>(
        <UserProfile key={user.id} name={user.name} age={user.age} rank={user.rank}/>
      ))}
    </div>
  )
}

export default UserDirectory
