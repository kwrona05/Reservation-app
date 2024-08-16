import React from "react";
import Nav from "./Nav";
import './App.css';
import Calendar from "./Calendar"



const HomePage = () => {
  return(
    <div className="main">
      <h1>Welcome on our website</h1>
      <p>Please go to "New Booking" to see booking form.</p>
      <p>You can see all your reservations in "Booking" tile</p>
      <Nav />
      <Calendar />
    </div>
  )
}

export default HomePage