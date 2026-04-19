import React, { useState } from "react";

const UserList = ({ users, onDelete }) => {
  const [selectedUser, setSelectedUser] = useState(null);

  return (
    <div className="card">
      {users.length === 0 && <p>No users yet</p>}

      {users.map((user) => (
        <div key={user.id} className="user">
          <span>
            {user.name} ({user.age} years)
          </span>
          <button onClick={() => setSelectedUser(user)}>Delete</button>
        </div>
      ))}

      {/*МОДАЛКА */}
      {selectedUser && (
        <div className="backdrop">
          <div className="modal">
            <h2>Are you sure?</h2>
            <p>Do you really want to delete {selectedUser.name}?</p>
            <div className="actions">
              <button
                className="cancel"
                onClick={() => setSelectedUser(null)}
              >
                Cancel
              </button>
              <button
                className="confirm"
                onClick={() => {
                  onDelete(selectedUser.id);
                  setSelectedUser(null);
                }}
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default UserList;