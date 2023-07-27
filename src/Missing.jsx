import { NavLink } from "react-router-dom";

const Missing = () => {
  return (
    <main className="Missing">
      <h2>Post not found</h2>
      <p>Well, that's disapointing!</p>
      <p>
        <NavLink to="/">Visit Our Homepage.</NavLink>
      </p>
    </main>
  );
};

export default Missing;
