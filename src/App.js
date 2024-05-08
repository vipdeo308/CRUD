import React from 'react';
import UserList from './components/UserList';
import UserForm from './components/UserForm';
import './App.css';

const App = () => {
  return (
    <div className="App">
      <h1>CRUD</h1>
      <UserForm />
      <UserList />
    </div>
  );
};

export default App;
