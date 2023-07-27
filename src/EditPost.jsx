import { format } from "date-fns";
import { useEffect } from "react";
import { NavLink, useNavigate, useParams } from "react-router-dom";
import { useStoreActions, useStoreState } from "easy-peasy";

const EditPost = () => {
  const { id } = useParams();

  const editTitle = useStoreState((state) => state.editTitle);
  const editBody = useStoreState((state) => state.editBody);
  const navigate = useNavigate();

  const getPostById = useStoreState((state) => state.getPostById);
  
  const post = getPostById(id);

  const editPost = useStoreActions((actions) => actions.editPost);
  const setEditTitle = useStoreActions((actions) => actions.setEditTitle);
  const setEditBody = useStoreActions((actions) => actions.setEditBody);

  useEffect(() => {
    if (post) {
      setEditTitle(post.title);
      setEditBody(post.body);
    }
  }, [post, setEditTitle, setEditBody]);

  const handleEdit = async (id) => {
    const datetime = format(new Date(), "MMMM dd, yyyy pp");
    const updatePost = { id, title: editTitle, datetime, body: editBody };
    await editPost(updatePost);
    navigate(`/post/${id}`);
  };

  return (
    <main className="NewPost">
      {editTitle && (
        <>
          <h1>Edit Post</h1>
          <form className="newPostForm" onSubmit={(e) => e.preventDefault()}>
            <label htmlFor="editTitle">Title:</label>
            <input
              id="editTitle"
              type="text"
              required
              value={editTitle}
              onChange={(e) => setEditTitle(e.target.value)}
            />
            <label htmlFor="editBody">Post:</label>
            <textarea
              id="editBody"
              type="text"
              required
              value={editBody}
              onChange={(e) => setEditBody(e.target.value)}
            />
            <button type="button" onClick={() => handleEdit(post.id)}>
              Update
            </button>
          </form>
        </>
      )}

      {!editTitle && (
        <>
          <h2>Post not found</h2>
          <p>Well, that's disapointing!</p>
          <p>
            <NavLink to="/">Visit Our Homepage.</NavLink>
          </p>
        </>
      )}
    </main>
  );
};

export default EditPost;
