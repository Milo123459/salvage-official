import React from "react";
import "./App.css";
import User from "./components/User";
import Post from "./components/Post";
import BrowseTime from "./components/BrowseTime";
import { Route, Router } from "react-router-dom";
import Todo from "./components/Todo";
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


      <footer>
        <BrowseTime />
      </footer>
    </div>
  );
}
export default App;