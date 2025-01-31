import React from 'react'
import { f1Drivers } from '../../data'

const UserDirectory1 = () => {
  return (
    <div>
      <h3>F1 drivers details</h3>
      <table>
        <thead>
            <tr>
                <th>Id</th>
                <th>Name</th>
                <th>Age</th>
                <th>Team</th>
                <th>Rank</th>
            </tr>
        </thead>
        <tbody>
            {f1Drivers.map((driver)=>(
                <tr key={driver.id}>
                    <td>{driver.id}</td>
                    <td>{driver.name}</td>
                    <td>{driver.age}</td>
                    <td>{driver.team}</td>
                    <td>{driver.rank}</td>
                </tr>
            ))}
        </tbody>
      </table>
    </div>
  )
}

export default UserDirectory1
