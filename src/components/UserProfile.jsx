import React from 'react'

const UserProfile = (props) => {
  return (
    <div style={{ border: '1px solid #ccc', padding: '10px', margin: '10px' }}>
        <h3>Name: {props.name}</h3>
        <h3>Age : {props.age}</h3>
        <h3>Rank : {props.rank}</h3>
    </div>
  )
}

export default UserProfile
