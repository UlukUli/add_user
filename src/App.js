import React, { useEffect, useState } from "react";
import AddUser from "./components/AddUser";
import UserList from "./components/UserList";

function App() {
  const [users, setUsers] = useState([]);

  // Загрузка из localStorage
  useEffect(() => {
  try {
    const savedUsers = JSON.parse(localStorage.getItem("users"));
    if (savedUsers && Array.isArray(savedUsers)) {
      setUsers(savedUsers);
    }
  } catch (error) {
    console.log("Error loading users:", error);
  }
}, []);

useEffect(() => {
  localStorage.setItem("users", JSON.stringify(users));
}, [users]);

  const addUserHandler = (user) => {
    setUsers((prev) => [...prev, { ...user, id: Math.random().toString() }]);
  };

  const deleteUserHandler = (id) => {
    setUsers((prev) => prev.filter((user) => user.id !== id));
  };

  return (
    <div className="container">
      <h1>User add</h1>
      <AddUser onAddUser={addUserHandler} />
      <UserList users={users} onDelete={deleteUserHandler} />
    </div>
  );
}

export default App;