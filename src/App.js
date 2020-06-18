import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route } from "react-router-dom";
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