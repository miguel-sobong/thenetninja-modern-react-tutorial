import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { IBlog } from "../core/IBlog";
import useFetch from "../hooks/useFetch";

const BlogDetails = () => {
  const { id } = useParams<"id">();

  const {
    data: blog,
    isPending,
    error,
  } = useFetch<IBlog>(`http://localhost:8000/blogs/${id}`);

  const [isDeleting, setIsDeleting] = useState(false);
  const nav = useNavigate();
  const handleDelete = () => {
    setIsDeleting(true);

    fetch(`http://localhost:8000/blogs/${id}`, { method: "DELETE" })
      .then(() => {
        nav("/");
      })
      .finally(() => {
        setIsDeleting(false);
      });
  };

  return (
    <div className="blog-details">
      {isPending && <div>loading...</div>}
      {error && <div>{error}</div>}
      {blog && (
        <article>
          <h2>{blog.title}</h2>
          <p>Written by {blog.author}</p>
          <div>{blog.body}</div>
          {!isDeleting && <button onClick={handleDelete}>Delete</button>}
          {isDeleting && <button onClick={handleDelete}>Deleting...</button>}
        </article>
      )}
    </div>
  );
};

export default BlogDetails;
