import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import User from "./components/User";
import Post from "./components/Post";
import BrowseTime from "./components/BrowseTime";
import { BrowserRouter as Router, Route } from "react-router-dom";
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
    <Router>
    <div className="App">
      <h1>Hey there! Welcome to my site.</h1>
      Click me to go to the <a href = "/todo">todo</a> page
      <footer>
        <BrowseTime />
      </footer>
    </div>
    <Route path = "/todo" component = {Todo}/>
    </Router>
  );
}
export default App;