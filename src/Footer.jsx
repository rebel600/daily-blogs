import { useStoreState } from "easy-peasy";
import React from "react";

const Footer = () => {
  // const today = new Date();
  const postCount = useStoreState((state) => state.postCount);
  return (
    <footer className="Footer">
      {/* <p>Copyright &copy; {today.getFullYear()}</p> */}
      <p> {postCount} Blog Posts</p>
    </footer>
  );
};

export default Footer;
