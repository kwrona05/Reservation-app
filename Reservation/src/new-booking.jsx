import React from "react";
import { useState } from "react";

const BookingForm = ({ onSubmit }) => {
    const [name, setName] = useState('')
    const [date, setDate] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        onSubmit({ name, date })
        setName('')
        setDate('')
    }

    return(
        <form onSubmit = {handleSubmit}>
            <label>
                Name:
                <input type="text" value={name} onChange={(e) => setName(e.target.value)} required></input>
            </label>
            <label>
                Date:
                <input type="date" value={date} onChange={(e) => setDate(e.target.value)} required></input>
            </label>
            <button type="submit">Book</button>
        </form>
    )
}

export default BookingForm