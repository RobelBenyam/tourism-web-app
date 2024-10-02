import React, { useState } from "react";
import Header from "./components/Header";
import DestinationSlider from "./components/DestinationSlider";
import FilterSection from "./components/FilterSection";
import Map from "./components/Map";
import HotelList from "./components/HotelList";
import styles from "./App.module.css";

const App = () => {
  const [filters, setFilters] = useState({
    priceRange: 500,
    rating: 3,
    checkIn: "",
    checkOut: "",
  });

  const hotels = [
    {
      id: 1,
      name: "Luxury Resort",
      price: 800,
      rating: 4.8,
      image: "https://via.placeholder.com/100x100.png?text=Luxury+Resort",
    },
    {
      id: 2,
      name: "City Center Hotel",
      price: 500,
      rating: 4.2,
      image: "https://via.placeholder.com/100x100.png?text=City+Center",
    },
    {
      id: 3,
      name: "Budget Inn",
      price: 200,
      rating: 3.5,
      image: "https://via.placeholder.com/100x100.png?text=Budget+Inn",
    },
    {
      id: 4,
      name: "Beachfront Villa",
      price: 950,
      rating: 4.9,
      image: "https://via.placeholder.com/100x100.png?text=Beachfront",
    },
    {
      id: 5,
      name: "Mountain Lodge",
      price: 600,
      rating: 4.5,
      image: "https://via.placeholder.com/100x100.png?text=Mountain+Lodge",
    },
  ];

  const filteredHotels = hotels.filter(
    (hotel) =>
      hotel.price <= filters.priceRange && hotel.rating >= filters.rating
  );

  return (
    <div className={styles.app}>
      <Header />
      <DestinationSlider />
      <main className={styles.main}>
        <FilterSection filters={filters} setFilters={setFilters} />
        <Map />
        <HotelList hotels={filteredHotels} />
      </main>
    </div>
  );
};

export default App;
