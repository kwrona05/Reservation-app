import React, { useState } from "react";

const Calendar = () => {
    const [currentDate, setCurrentDate] = useState(new Date())

    const renderHeader = () => {
        const monthNames = ["January", "February", "March", "April", "May", "June",
            "July", "August", "September", "October", "November", "December"
        ]

        const currentMonth = currentDate.getMonth()
        const currentYear = currentDate.getFullYear()

        const prevMonth = () => {
            setCurrentDate(new Date(currentYear, currentMonth - 1))
        }

        const nextMonth = () => {
            setCurrentDate(new Date(currentYear, currentMonth + 1))
        }

        return (
            <div className="header">
                <button onClick={prevMonth}>{"<"}</button>
                <div>{`${monthNames[currentMonth]} ${currentYear}`}</div>
                <button onClick={nextMonth}>{">"}</button>
            </div>
        )
    }

    const renderDays = () => {
        const daysOfWeek = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"]
        
        return (
            <div className="days-row">
                {daysOfWeek.map(day => (
                    <div key={day} className="day-name">
                        {day}
                    </div>
                ))}
            </div>
        )
    }

    const renderCells = () => {
        const startOfMonth = new Date(currentDate.getFullYear(), currentDate.getMonth(), 1)
        const endOfMonth = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0)
        const startDayOfWeek = startOfMonth.getDay() === 0 ? 6 : startOfMonth.getDay() - 1
        const dayInMonth = endOfMonth.getDate()

        const cells = []

        for (let i = 0; i < startDayOfWeek; i++) {
            cells.push(<div className="empty-cell" key={`empty-${i}`} />)
        }

        for (let day = 1; day <= dayInMonth; day++) {
            cells.push(
                <div className="date-cell" key={day}>
                    {day}
                </div>
            )
        }

        return <div className="days-grid">{cells}</div>
    }

    return (
        <div className="calendar">
            {renderHeader}
            {renderDays}
            {renderCells}
        </div>
    )
}

export default Calendar