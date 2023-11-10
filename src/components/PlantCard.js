import React, { useState } from "react";

function PlantCard({ plant, getPlantToEdit }) {
  const { id, image, name, price } = plant
  const [inStock, setInStock] = useState(true)

  const handleInStockClick = () => {
    setInStock(prevInStock => !prevInStock)
  }

  const handleEditClick = () => {
    getPlantToEdit(plant)
  }
  return (
    <li className="card">
      <img src={image} alt={"plant name"} />
      <h4>{name}</h4>
      <p>Price: {price}</p>
      {inStock ? (
        <button onClick={handleInStockClick} className="primary">In Stock</button>
      ) : (
        <button onClick={handleInStockClick}>Out of Stock</button>
      )}
      <button onClick={handleEditClick}>Edit</button>
    </li>
  );
}

export default PlantCard;
