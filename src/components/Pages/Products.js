import React from "react";
import "../../App.css";

export default function Products() {

  const menuItems = [
    'img-4.jpeg',
    'img-4.jpg',
    'img-5.jpeg',
    'img-8.jpg',
    'img-1.jpeg',
    'img-2.jpeg',
    'img-3.jpeg'
    // Add more menu item images as needed
  ];

   

  return (
    <div>
      <div className="menu-gallery">
        <h2>Our Delicious Menu</h2>
        <div className="image-container">
          {menuItems.map((item, index) => (
            <div className="image-card">
            <img key={index} 
            // eslint-disable-next-line
            src={'images' + '/' + item}
            alt={`Menu Item ${index + 1}`} />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
