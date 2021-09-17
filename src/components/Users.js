import React from 'react';

function Users(props) {
  return (
    <ul>
      {props.people.map((person) => (
        <li key={person.email}>{person.name.first} {person.name.last}</li>
      ))}
    </ul>
  )
}

export default Users;