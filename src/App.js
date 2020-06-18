import React from "react";
import "./App.css";
import Navigation from "./components/navigation";
import RegisterForm from "./components/register-form";
function App() {
  return (
    <div className="App">
      <Navigation></Navigation>
      <RegisterForm></RegisterForm>
    </div>
  );
}

export default App;
