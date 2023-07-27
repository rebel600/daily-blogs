import { NavLink, useNavigate, useParams } from "react-router-dom";
import { useStoreState, useStoreActions } from "easy-peasy";

const PostPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const deletePost = useStoreActions((actions) => actions.deletePost);
  const getPostById = useStoreState((state) => state.getPostById);

  const post = getPostById(id);

  const handleDelete = async (id) => {
    await deletePost(id);
    navigate("/");
  };

  return (
    <main className="PostPage">
      <article className="post">
        {post && (
          <>
            <h2>{post.title}</h2>
            <p className="postDate">{post.dateTime}</p>
            <p className="postBody">{post.body}</p>
            <NavLink to={`/edit/${post.id}`}>
              <button className="editButton">Edit Post</button>
            </NavLink>
            <button
              className="deleteButton"
              onClick={() => handleDelete(post.id)}
            >
              Delete Post
            </button>
          </>
        )}
        {!post && (
          <>
            <h2>Post not found</h2>
            <p>Well, that's disapointing!</p>
            <p>
              <NavLink to="/">Visit Our Homepage.</NavLink>
            </p>
          </>
        )}
      </article>
    </main>
  );
};

export default PostPage;
