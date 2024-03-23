import React from 'react';

const testBusiness = {
  imageSrc: 'https://content.codecademy.com/programs/react/ravenous/pizza.jpg',
  name: 'MarginOtto Pizzeria',
  address: '1010 Paddington Way',
  city: 'Flavortown',
  state: 'NY',
  zipCode: '10101',
  category: 'Italian',
  rating: 4.5,
  reviewCount: 90
}

function BusinessEntry() {
  return (
    <div>
      <img src={testBusiness.imageSrc} />
      <h2>{testBusiness.name}</h2>
      <p>{testBusiness.address}</p>
      <p>{testBusiness.city}</p>
      <p>{testBusiness.state}</p>
      <p>{testBusiness.zipCode}</p>
      <p>{testBusiness.category}</p>
      <p>{testBusiness.rating}</p>
      <p>{testBusiness.reviewCount}</p>
    </div>
  )
}

export default BusinessEntry;
