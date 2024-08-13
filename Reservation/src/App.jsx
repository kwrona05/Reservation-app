import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Nav from "./Nav";
import HomePage from "./HomePage";
import BookingList from "./bookings";
import BookingForm from "./new-booking";

function App() {
  const [bookings, setBookings] = useState([])

  const addBooking = (booking) => {
    setBookings([...bookings, booking])

  }

  return(
    <Router>
      <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/new-booking" element={<BookingForm onSubmit={addBooking} />} />
                <Route path="/bookings" element={<BookingList bookings={bookings} />} />
      </Routes>
    </Router>
  )
}

export default App