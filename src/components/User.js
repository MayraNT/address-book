import React, { useState } from 'react';

function User(props) {
  const { 
    email, 
    gender,
    cell, 
    picture: { thumbnail }, 
    name: { first, last },  
    dob: { age }, 
    location: { state, country }
  } = props.person;

  const [isHidden, setHidden] = useState(true);

  const handleDetails = () => {
    setHidden(!isHidden)
    console.log('clicked')
  }

  return (
    <li key={email}>
      <img src={thumbnail} alt={first} />
      <h3>{first} {last}</h3>
      <button onClick={() => handleDetails()}>{isHidden ? "Show Details" : "Hide Details"}</button>
      {!isHidden && 
        <div className="user-details">
          {gender}, {age}<br/>
          {state}, {country}<br/>
          email: {email}<br/>
          cell: {cell}
        </div>
      }
    </li>
  )
}

export default User;