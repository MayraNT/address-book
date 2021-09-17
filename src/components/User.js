import React from 'react';

function User(props) {
  const { email, picture: { thumbnail }, name: { first, last } } = props.person;
  
  return (
    <li key={email}>
      <img src={thumbnail} alt={first} />
      <h3>{first} {last}</h3>
      <button>Show Details</button>
    </li>
  )
}

export default User;