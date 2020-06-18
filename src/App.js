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
const userComponents = users.map((user, key) => <User key = {key} name = {user.nmae} language = {user.language} jobTitle = {user.jobTitle}/>)
function App() {
  return (
    <div className="App">
      {userComponents}
      {postComponents}
    </div>
  );
}

export default App;