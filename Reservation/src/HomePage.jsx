import React from "react";
import Nav from "./Nav";
import './App.css';


const HomePage = () => {
  return(
    <div className="main">
      <h1>Welcome on our website</h1>
      <p>Please go to booking form below</p>
      <Nav />
    </div>
  )
}

export default HomePage