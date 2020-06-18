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
const postComponents = posts.map((post) => )
function App() {
  return (
    <div className="App">
      {
        users.map((user, i) => <User name = {user.nmae} language = {user.language} jobTitle = {user.jobTitle}/>)
      }
      {

      }
    </div>
  );
}

export default App;
