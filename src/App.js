import React from "react";
import "./App.css";
import User from "./components/User";
import Post from "./components/Post";
function App() {
  return (
    <div className="App">
      <User name = "Salvage_Dev" language = "JavaScript" jobTitle = "React.JS"/>
      <Post title = "Awesome update" content = "I love NodeJS!"/>
    </div>
  );
}

export default App;
