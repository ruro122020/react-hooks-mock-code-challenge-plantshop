import React from "react";
import PlantCard from "./PlantCard";

function PlantList({plantsList}) {
  const displayPlants = plantsList.map(plant => <PlantCard key={plant.id} plant={plant}/>)
  return (
    <ul className="cards">
      {/* render PlantCards components in here */}
      {displayPlants}
      </ul>
  );
}

export default PlantList;
