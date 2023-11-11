import React from "react";
import PlantCard from "./PlantCard";

function PlantList({ plantsList, searchValue, getPlantToEdit, onPlantDelete }) {
  const filteredPlants = plantsList.filter(plant => {
    if (searchValue === '') return true

    return plant.name.toLowerCase().includes(searchValue)
  })
  const displayPlants = filteredPlants.map(plant => <PlantCard
    key={plant.id}
    plant={plant}
    getPlantToEdit={getPlantToEdit}
    onPlantDelete={onPlantDelete}
  />)
  return (
    <ul className="cards">
      {/* render PlantCards components in here */}
      {displayPlants}
    </ul>
  );
}

export default PlantList;
