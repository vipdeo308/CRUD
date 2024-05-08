import React, { useState } from 'react';
import axios from 'axios';

const UserForm = () => {
  const [user, setUser] = useState({ name: '', email: '', phone: '' });

  const handleAddUser = () => {
    if (user.name.trim()) {
      axios.post('https://jsonplaceholder.typicode.com/users', user)
        .then(() => {
          // Handle success (e.g., show a message)
          setUser({ name: '', email: '', phone: '' });
        })
        .catch((error) => console.error('Error adding user:', error));
      
    }
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Enter user name"
        value={user.name}
        onChange={(e) => setUser({ ...user, name: e.target.value })}
      />
      <input
        type="email"
        placeholder="Enter e-mail"
        value={user.email}
        onChange={(e) => setUser({ ...user, email: e.target.value })}
      />
      <input
        type="number"
        placeholder="Enter phone"
        value={user.phone}
        onChange={(e) => setUser({ ...user, phone: e.target.value })}
      />
      <button onClick={handleAddUser}>Add User</button>
    </div>
  );
};

export default UserForm;
