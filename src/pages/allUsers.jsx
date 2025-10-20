import { useFetch } from "../hooks/useFetch";
const UserList = () => {
  const {
    data: users,
    isLoading,
    errorMessage,
  } = useFetch(`https://jsonplaceholder.typicode.com/users?_limit=10}`, []);
  console.log(users, "Fetched data");
  return (
    <div>
      <h2>All Users</h2>
      {isLoading && <h3>Loading Data....</h3>}
      {errorMessage && <h3>{errorMessage}</h3>}
      <ul>
        {users.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </div>
  );
};
export default UserList;
