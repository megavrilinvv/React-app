import React, { useState } from "react";
import Events from "./Components/Events";
import "./Sass/App.scss";
import Counter from "./Components/Counter";
import PostList from "./Components/PostList";
import MyButton from "./Components/button/MyButton";
import MyInput from "./Components/input/MyInput";

function App() {
  const [posts, setPosts] = useState([
    { id: 1, title: "js", body: "description" },
  ]);

  const [title, setTitle] = useState("");
  const newPost = () => {};
  return (
    <>
      <div className="app">
        <Events />
        <Counter />
        <form>
          <MyInput
            value={title}
            onChange={(event) => setTitle(event.target.value)}
            type="text"
            placeholder="Название"
          />
          <MyInput type="text" placeholder="Описание" />
          <MyButton onClick={newPost}>Создать пост</MyButton>
        </form>
        <PostList posts={posts} />
      </div>
    </>
  );
}

export default App;
