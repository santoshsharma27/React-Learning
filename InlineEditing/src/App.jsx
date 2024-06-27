import { useEffect, useState } from "react";
import UsersList from "./components/UsersList";
import { initialUsers } from "./utils/constant";

function App() {
  const [users, setUsers] = useState(initialUsers);

  useEffect(() => {
    localStorage.setItem("users", JSON.stringify(users));
  }, [users]);

  function updateUser(id, updatedUser) {
    setUsers(
      users.map((user) => {
        if (user.id === id) {
          return {
            ...user,
            name: updatedUser.name,
            location: {
              ...user.location,
              city: updatedUser.city,
              state: updatedUser.state,
            },
          };
        }
        return user;
      })
    );
  }

  return (
    <>
      <h1>Users List</h1>
      <UsersList users={users} updateUser={updateUser} />
    </>
  );
}

export default App;
