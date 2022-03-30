import { useState } from "react";
import * as React from "react";
import "./style.css";
import { Header } from "./Components/Header";
import { UsersName } from "./Components/UsersName";
import { UsersPosts } from "./Components/UsersPosts";
import { PostComments } from "./Components/PostComments";

function App() {
  const [users, setUsers] = useState([]);
  const [posts, setPosts] = useState([]);
  const [postComments, setPostComments] = useState([]);

  const fetchUsers = () => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((result) => result.json())
      .then((data) => setUsers(data));
  };

  const takePosts = (userId) => {
    fetch(`https://jsonplaceholder.typicode.com/users/${userId}/posts`)
      .then((result) => result.json())
      .then((data) => setPosts(data));
  };

  const takeComments = (postId) => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${postId}/comments`)
      .then((result) => result.json())
      .then((data) => setPostComments(data));
  };

  const style = {
    width: "100%",
    maxWidth: 360,
    bgcolor: "background.paper",
  };

  return (
    <div className="info">
      <Header fetchUsers={fetchUsers} />
      <div className="container">
        <UsersName users={users} takePosts={takePosts} style={style} />
        <UsersPosts posts={posts} takeComments={takeComments} />
        <PostComments postComments={postComments} />
      </div>
      <button onClick={"https://mui.com/components/trap-focus"}></button>
    </div>
  );
}

export default App;

// const takePosts = (userId) => {
//   fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`)
//     .then((result) => result.json())
//     .then((data) => setPosts(data));
// };
