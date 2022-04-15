import React from 'react'

function Clients(props) {
  // console.log(props)
  return (
    <div>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Role</th>
              <th>Urgency</th>
              <th>Quantity</th>
              <th>Skills Needed</th>
              <th>Candidate</th>
              <th>Email</th>
            </tr>
          </thead>
        <tbody>
        {props.clients.map((client) => {
          return ( 
              <tr key={client.id}>
                <td>{client.name}</td>
                <td>{client.role}</td>
                <td>{client.urgency}</td>
                <td>{client.quantity}</td>
                <td>{client.skills_needed}</td>
                <td>{client.candidate}</td>
                <td>{client.email}</td>
              </tr>
        )
        })}
        </tbody>
       </table>
    </div>

  )
}

export default Clients


/**
<div key={client.id}>

<ul>
 <li> <h2>{client.name} ➡ {client.role},  Urgency: {client.urgency} </h2>
    <p>Quantity: {client.quantity}, Skiils Needed: {client.skills_needed}</p>
    <p>Candidate: {client.candidate}, email: {client.email}</p>
  </li>
</ul>
</div>
*/