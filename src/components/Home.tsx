import { IBlog } from "../core/IBlog";
import useFetch from "../hooks/useFetch";
import BlogList from "./BlogList";

const Home = () => {
  const {
    data: blogs,
    error,
    isPending,
  } = useFetch<IBlog[]>("http://localhost:8000/blogs");

  return (
    <div className="home">
      {error && <div>{error}</div>}
      {!error && isPending && <div>loading...</div>}
      {blogs && <BlogList blogs={blogs} />}
    </div>
  );
};

export default Home;
