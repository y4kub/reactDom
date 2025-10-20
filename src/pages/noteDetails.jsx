import { useParams } from "react-router-dom";
import { useFetch } from "../hooks/useFetch";
const NoteDetails = () => {
  const { postId } = useParams();
  const {
    data: post,
    isLoading,
    errorMessage,
  } = useFetch(`https://jsonplaceholder.typicode.com/posts/${postId}`, null);
  return (
    <div>
      <h2>Post Details </h2>
      {isLoading && <h3>Loading Data....</h3>}
      {errorMessage && <h3>{errorMessage}</h3>}
      <h2>Id: {postId}</h2>
      <p>Post Title - {post?.title}</p>
      <p>Description - {post?.body}</p>
    </div>
  );
};
export default NoteDetails;
