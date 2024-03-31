import React from "react";

// Dummy data for one business to build the app
const business = {
  imageSrc: "https://content.codecademy.com/programs/react/ravenous/pizza.jpg",
  name: "MarginOtto Pizzeria",
  address: "1010 Paddington Way",
  city: "Flavortown",
  state: "NY",
  zipCode: "10101",
  category: "Italian",
  rating: 4.5,
  reviewCount: 90,
};

// A compnent for displaying a single busnesses information.
const Business = () => {
  return (
    <div>
      <img src={business.imageSrc} alt={business.name} />
      <h2 className="mt-2 text-xl font-bold">{business.name}</h2>

      <div className="mt-2 flex">
        <div>
          <p>{business.address}</p>
          <p>{business.city}</p>
          <p>{business.state}</p>
          <p>{business.zipCode}</p>
        </div>
        <div>
          <p>Category: {business.category}</p>
          <p>Rating: {business.rating}</p>
          <p>Number of Reviews: {business.reviewCount}</p>
        </div>
      </div>
    </div>
  );
};

export default Business;
