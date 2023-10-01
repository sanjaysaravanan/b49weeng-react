
// Import JSON Data as an Object or Array

import { useState } from 'react';
import User from './components/User';
import usersData from './data.json';


function UsersPage() {

  const [likes, setLikes] = useState(0);

  const handleSubmit = (e) => {
    console.log(e);
    e.preventDefault();
    alert('You have submitted the form, Thanks!');
  }

  const increseLikeVal = () => {
    setLikes(likes + 1);
  }

  const decreaseLikeVal = () => {
    setLikes(likes - 1);
  }


  return (
    <>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            required
          />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            required
          />
        </div>
        <div>
          <button type="submit">Submit</button>
        </div>
      </form>
      <h1>Like: {likes}</h1>
      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
        }}
      >
        {usersData.map((user) => (
          <User
            imageUrl={user.avatar}
            fullName={`${user.first_name} ${user.last_name}`}
            email={user.email}
            isSingle={user.isSingle}
            increseLikeVal={increseLikeVal}
            decreaseLikeVal={decreaseLikeVal}
            key={user.id}
          />
        ))}
      </div>
    </>
  )
}

export default UsersPage;