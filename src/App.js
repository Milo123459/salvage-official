import React from "react";
import "./App.css";
import User from "./components/User";
import Post from "./components/Post";
const users = [
  {
    name: "Salvage_Dev",
    language: "JavaScript",
    jobTitle: "React.JS dev"
  }
]
const posts = [
  {
    title: "My first programming language",
    content: "My favourite web framework is React.JS"
  }
]
//Components
const postComponents = posts.map((post, key) => <Post key = {key} title = {post.title} content = {post.content}/>)
const userComponents = users.map((user, key) => <User key = {key} name = {user.name} language = {user.language} jobTitle = {user.jobTitle}/>)
function App() {
  return (
    <div className="App">
      <h1>Users</h1>
      {userComponents}
      <h1>Posts</h1>
      {postComponents}
    </div>
  );
}

export default App;