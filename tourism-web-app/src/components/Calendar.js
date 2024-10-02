import React, { useState, useEffect } from "react";
import "./Calendar.css";

const Calendar = () => {
  const [days, setDays] = useState([]);

  useEffect(() => {
    const today = new Date();
    const currentMonth = today.getMonth(); // 0 for January, 11 for December
    const currentYear = today.getFullYear();

    // Get the first day of the month
    const firstDayOfMonth = new Date(currentYear, currentMonth, 1).getDay();

    // Get the number of days in the current month
    const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();

    // Create an array to store the days of the month, including empty spaces for alignment
    const daysArray = [];

    // Add empty slots until the first day of the month
    for (let i = 0; i < firstDayOfMonth; i++) {
      daysArray.push(null);
    }

    // Add the actual days of the month
    for (let day = 1; day <= daysInMonth; day++) {
      daysArray.push(day);
    }

    setDays(daysArray);
  }, []);

  // Days of the week
  const daysOfWeek = [
    { en: "Sunday", or: "Dilbata" },
    { en: "Monday", or: "Wiixata" },
    { en: "Tuesday", or: "Kiphxata" },
    { en: "Wednesday", or: "Roobii" },
    { en: "Thursday", or: "Kamisa" },
    { en: "Friday", or: "Jimaata" },
    { en: "Saturday", or: "Sambata" },
  ];

  return (
    <div className="calendar-container">
      <h2>Kaalaandarii Turizimii Oromiyaa</h2>
      <h2>2017 Fulbaana</h2>
      <h4>Oromia Tourism</h4>
      <h3>Calendar</h3>
      <h3>September 2024</h3>

      <div className="calendar-grid">
        {/* Render the day headers with English and Oromia names */}
        {daysOfWeek.map((day) => (
          <div className="day-header" key={day.en}>
            <div>{day.en}</div>
            <div>{day.or}</div>
          </div>
        ))}

        {/* Render the days of the month in alternating rows */}
        {days.map((day, index) => {
          const rowIndex = Math.floor((index + 7) / 7); // Determine the current row index
          const rowClass = rowIndex % 2 === 0 ? "light-green" : "cream"; // Alternate row colors

          return (
            <div className={`day-cell ${rowClass}`} key={index}>
              {day || ""}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Calendar;
