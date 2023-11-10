/*
1. When the app starts, I can see all plants.
2. I can add a new plant to the page by submitting the form.
3. I can mark a plant as "sold out".
4. I can search for plants by their name and see a filtered list of plants.
*/
import React, { useState, useEffect } from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage() {
  const [plantsList, setPlantsList] = useState([])
  const [searchValue, setSearchValue] = useState('')
  //fetch requests
  useEffect(() => {
    fetch('http://localhost:6001/plants')
      .then(res => res.json())
      .then(plants => {
        setPlantsList(plants)
      })
  }, [])

  const handleFormData = (newPlant) => {
    setPlantsList(prevPlant => [...prevPlant, newPlant])
  }
  const handleSearch = (searchInput) => {
    setSearchValue(searchInput)
  }
  return (
    <main>
      <NewPlantForm onSubmit={handleFormData} />
      <Search searchValue={searchValue} onSearch={handleSearch} />
      <PlantList plantsList={plantsList} searchValue={searchValue} />
    </main>
  );
}

export default PlantPage;
