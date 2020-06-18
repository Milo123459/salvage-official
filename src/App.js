import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route } from "react-router-dom";
function App() {
  return (
    <Router>
    <div className="App">
      <h1> Welcome to my site! </h1>
      <button> Hi </button>
    </div>
    </Router>
  );
}
export default App;