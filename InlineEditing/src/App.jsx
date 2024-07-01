import { useEffect, useState } from "react";
import UsersList from "./components/UsersList";
import { initialUsers } from "./utils/constant";

function App() {
  const localUser = JSON.parse(localStorage.getItem("users"));
  const [users, setUsers] = useState(localUser || initialUsers);

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
