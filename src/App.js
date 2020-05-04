import React from "react";
// import logo from "./logo.svg";
import "./styles/App.scss";
import Nav from "./components/navigation/nav";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <div className="logo">Logo</div>
        <Nav />
      </header>
    </div>
  );
}

export default App;
