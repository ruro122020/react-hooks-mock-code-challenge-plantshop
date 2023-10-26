import React, {useState} from "react";

function PlantCard({plant}) {
  const {id, image, name, price}=plant
  const [inStock, setInStock] = useState(true)
  const handleInStockClick=()=>{
    setInStock(prevInStock => !prevInStock)
  }
  return (
    <li className="card">
      <img src={image} alt={"plant name"} />
      <h4>{name}</h4>
      <p>Price: {price}</p>
      {inStock ? (
        <button onClick={handleInStockClick} className="primary">In Stock</button>
      ) : (
        <button>Out of Stock</button>
      )}
    </li>
  );
}

export default PlantCard;
