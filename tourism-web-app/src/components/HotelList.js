import React from "react";
import styles from "./HotelList.module.css";
import { FaStar, FaDollarSign } from "react-icons/fa";

const HotelList = ({ hotels }) => (
  <section className={styles.hotelList}>
    <h2>Hotels</h2>
    {hotels.length === 0 ? (
      <p>No hotels match your criteria.</p>
    ) : (
      <ul>
        {hotels.map((hotel) => (
          <li key={hotel.id} className={styles.hotelItem}>
            <img
              src={hotel.image}
              alt={hotel.name}
              className={styles.hotelImage}
            />
            <div className={styles.hotelInfo}>
              <h3>{hotel.name}</h3>
              <p>
                <FaDollarSign /> ${hotel.price} per night
              </p>
              <p>
                <FaStar /> {hotel.rating.toFixed(1)}
              </p>
            </div>
          </li>
        ))}
      </ul>
    )}
  </section>
);

export default HotelList;
