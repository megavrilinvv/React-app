import { useEffect, useState } from "react";

function App() {
const [users, setUsers] = useState([]);
const [posts, setPosts] = useState([]);
const [displayPosts, setDisplayPosts] = useState([]);

useEffect(() => {
fetch("https://jsonplaceholder.typicode.com/users")
.then((result) => result.json())
.then((data) => setUsers(data))
.catch((err) => console.log(err));
}, []);
useEffect(() => {
fetch("https://jsonplaceholder.typicode.com/posts")
.then((result) => result.json())
.then((data) => setPosts(data))
.catch((err) => console.log(err));
}, []);

useEffect(() => {
if (posts.length === 0 || users.length === 0) return;

    setDisplayPosts(
      posts.map((post) => {
        const { userId, ...usersWithoutId } = post;
        const user = users.find((user) => user.id === userId);
        const userName = user ? user.name : "noName";
        return {
          ...usersWithoutId,
          userName,
        };
      })
    );

}, [posts, users]);

return (

<div className="">
{displayPosts.map((post) => (
<div>
{post.title} - {post.userName}
</div>
))}{" "}
</div>
);
}

export default App;
