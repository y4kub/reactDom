import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
const NoteDetails = () => {
  const { postId } = useParams();
  const [post, setPost] = useState(null);
  console.log("print ", postId);
  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
      .then((res) => res.json())
      .then((data) => setPost(data));
  }, []);

  return (
    <div>
      <h2>Post Details </h2>
      <h2>Id: {postId}</h2>
      <p>Post Title - {post?.title}</p>
      <p>Description - {post?.body}</p>
    </div>
  );
};
export default NoteDetails;
