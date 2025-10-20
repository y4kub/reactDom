import { Link } from "react-router-dom";
import { useFetch } from "../hooks/useFetch";
const NoteList = () => {
  const {
    data: posts,
    isLoading,
    errorMessage,
  } = useFetch(`https://jsonplaceholder.typicode.com/posts?_limit=5}`, []);

  return (
    <div>
      <h2>All Posts</h2>
      {isLoading && <h3>Loading Data....</h3>}
      {errorMessage && <h3>{errorMessage}</h3>}
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            <Link to={`/notes/${post.id}`}>{post.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default NoteList;
