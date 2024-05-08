import React, { useState, useEffect } from 'react';
import axios from 'axios';

const UserList = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/users')
      .then((response) => setUsers(response.data))
      .catch((error) => console.error('Error fetching data:', error));
  }, []);

  const handleDeleteUser = (id) => {
    axios.delete(`https://jsonplaceholder.typicode.com/users/${id}`)
    .then(() => {
      // Remove the user from the list
      const updatedUsers = users.filter((user) => user.id !== id);
      setUsers(updatedUsers);
    })
    .catch((error) => console.error('Error deleting user:', error));
  };

  return (
    <div>
      <h2>User List</h2>
      <ul type="None">
        {
          users.map((user)=>(<li key={user.id}><b>Name: </b>{user.name} ; <b>Email:</b> {user.email} ; <b>Phone:</b> {user.phone} <button onClick={() => handleDeleteUser(user.id)}>Delete</button></li>))
        }
      </ul>
    </div>
  );
};

export default UserList;
