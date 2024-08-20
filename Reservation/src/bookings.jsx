import React from "react"
const BookingList = ({ bookings }) => {
    return(
        <div className="booking-div">
            <h2>Booking List</h2>
            <div className="ul">
                {bookings.map((booking, index) => (
                    <div key={index} className="booking-list">
                        {booking.name} - {booking.date}
                    </div>
                ))}
            </div>
        </div>
    )
}

export default BookingList