import { useState } from "react";

function UsersList({ users, updateUser }) {
  const [editedUserId, setEditedUserId] = useState(-1);
  const [currentUser, setCurrentUser] = useState({
    name: "",
    city: "",
    state: "",
  });

  function handleEdit(id, user) {
    setEditedUserId(id);
    setCurrentUser({
      name: user.name,
      city: user.location.city,
      state: user.location.state,
    });
  }

  function handleInput(e) {
    const { name, value } = e.target;
    setCurrentUser({
      ...currentUser,
      [name]: value,
    });
  }

  function handleSubmit(e) {
    e.preventDefault;
    updateUser(editedUserId, currentUser);
    setEditedUserId(-1);
  }

  return (
    <div className="users-list">
      {users.map((user) => {
        return (
          <div className="user-row" key={user.id}>
            {editedUserId === user.id ? (
              <div>
                <form onSubmit={handleSubmit}>
                  <input
                    type="text"
                    name="name"
                    value={currentUser.name}
                    onChange={handleInput}
                  />
                  <input
                    type="text"
                    name="city"
                    value={currentUser.city}
                    onChange={handleInput}
                  />
                  <input
                    type="text"
                    name="state"
                    value={currentUser.state}
                    onChange={handleInput}
                  />
                  <button type="submit">Save</button>
                </form>
              </div>
            ) : (
              <>
                <span>{user.name}</span>
                <span>{user.location.city}</span>
                <span>{user.location.state}</span>
                <button onClick={() => handleEdit(user.id, user)}>Edit</button>
              </>
            )}
          </div>
        );
      })}
    </div>
  );
}

export default UsersList;
