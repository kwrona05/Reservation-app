import React from "react"
const BookingList = ({ bookings }) => {
    return(
        <div>
            <h2>Booking List</h2>
            <ul>
                {bookings.map((booking, index) => (
                    <li key={index}>
                        {booking.name} - {booking.date}
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default BookingList