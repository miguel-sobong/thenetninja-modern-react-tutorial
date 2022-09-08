import { Link } from "react-router-dom";
import { IBlog } from "../core/IBlog";

interface IProps {
  blogs: IBlog[];
}

const BlogList = (props: IProps) => {
  const { blogs } = props;

  return (
    <div className="blog-list">
      {blogs.map((blog) => {
        const blogId = blog.id;

        return (
          <div className="blog-preview" key={blogId}>
            <Link to={`blogs/${blogId}`}>
              <h2>{blog.title}</h2>
              <p>Written by {blog.author}</p>
            </Link>
          </div>
        );
      })}
    </div>
  );
};

export default BlogList;
