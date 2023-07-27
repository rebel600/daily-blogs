import Nav from "./Nav";
import Home from "./Home";
import About from "./About";
import Header from "./Header";
import Footer from "./Footer";
import NewPost from "./NewPost";
import Missing from "./Missing";
import PostPage from "./PostPage";
import EditPost from "./EditPost";
import { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import useAxiosFetch from "./hooks/useAxiosFetch";
import { useStoreActions } from "easy-peasy";

const dataUrl = `http://localhost:3500/posts`;

const App = () => {
  const { data, fetchError, isLoading } = useAxiosFetch(dataUrl);
  const setPosts = useStoreActions((actions) => actions.setPosts);

  useEffect(() => {
    setPosts(data);
  }, [data, setPosts]);

  return (
    <div className="App">
      <Header title="Daily Blogs" />
      <Nav />
      <Routes>
        <Route
          exact
          path="/"
          element={<Home fetchError={fetchError} isLoading={isLoading} />}
        />
        <Route exact path="/post" element={<NewPost />} />
        <Route path="/edit/:id" element={<EditPost />} />
        <Route path="/post/:id" element={<PostPage />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<Missing />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
