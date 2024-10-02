import React from "react";
import styles from "./FilterSection.module.css";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const FilterSection = ({ filters, setFilters }) => {
  const handlePriceChange = (e) => {
    setFilters({ ...filters, priceRange: parseInt(e.target.value) });
  };

  const handleRatingChange = (e) => {
    setFilters({ ...filters, rating: parseInt(e.target.value) });
  };

  const handleDateChange = (date, type) => {
    setFilters({ ...filters, [type]: date });
  };

  return (
    <div className={styles.filterSection}>
      <h2>Filters</h2>
      <div className={styles.filter}>
        <label>Price Range: ${filters.priceRange}</label>
        <input
          type="range"
          min="0"
          max="1000"
          value={filters.priceRange}
          onChange={handlePriceChange}
        />
      </div>
      <div className={styles.filter}>
        <label>Minimum Rating: {filters.rating}</label>
        <input
          type="range"
          min="1"
          max="5"
          step="0.1"
          value={filters.rating}
          onChange={handleRatingChange}
        />
      </div>
      <div className={styles.filter}>
        <label>Check-in Date:</label>
        <DatePicker
          selected={filters.checkIn}
          onChange={(date) => handleDateChange(date, "checkIn")}
          selectsStart
          startDate={filters.checkIn}
          endDate={filters.checkOut}
        />
      </div>
      <div className={styles.filter}>
        <label>Check-out Date:</label>
        <DatePicker
          selected={filters.checkOut}
          onChange={(date) => handleDateChange(date, "checkOut")}
          selectsEnd
          startDate={filters.checkIn}
          endDate={filters.checkOut}
          minDate={filters.checkIn}
        />
      </div>
    </div>
  );
};

export default FilterSection;
