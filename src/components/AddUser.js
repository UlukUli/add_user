import React, { useState } from "react";

const AddUser = ({ onAddUser }) => {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [error, setError] = useState(null);

  const submitHandler = (e) => {
    e.preventDefault();

    if (name.trim() === "" || age.trim() === "") {
      setError("Fields cannot be empty!");
      return;
    }

    if (+age <= 0) {
      setError("Age must be greater than 0");
      return;
    }

    onAddUser({ name, age });

    setName("");
    setAge("");
    setError(null);
  };

  return (
    <form onSubmit={submitHandler} className="card">
      {error && <p className="error">{error}</p>}
      <input
        type="text"
        placeholder="Enter name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="number"
        placeholder="Enter age"
        value={age}
        onChange={(e) => setAge(e.target.value)}
      />
      <button>Add User</button>
    </form>
  );
};

export default AddUser;