import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {
    return(
    <nav>
        <ul className="ulList">
            <li className="liTile"><Link to="/" className="link">Home</Link></li>
            <li className="liTile"><Link to="/bookings" className="link">Bookings</Link></li>
            <li className="liTile"><Link to="/new-booking" className="link">New Booking</Link></li>
        </ul>
    </nav>
    )
}

export default Nav