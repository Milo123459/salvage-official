import React from "react";
import { Button } from "react-bootstrap"
import { BrowserRouter as Router, Route } from "react-router-dom";
function App() {
  return (
    <Router>
    <div className="App">
      <h1> Welcome to my site! </h1>
      <Button> Hello test </Button>
    </div>
    </Router>
  );
}
export default App;