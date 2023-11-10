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
  const [isEditForm, setIsEditForm] = useState(false)
  const [plantToEdit, setPlantToEdit] = useState({})
  //fetch requests
  useEffect(() => {
    fetch('http://localhost:6001/plants')
      .then(res => res.json())
      .then(plants => {
        setPlantsList(plants)
      })
  }, [])

  const handleFormData = (newPlant) => {
    if (isEditForm) {
      const updatedPlants = plantsList.map(plant => {
        if (plant.id === newPlant.id) {
          return newPlant
        } else {
          return plant
        }
      })
      setPlantsList(updatedPlants)
      setIsEditForm(false)
    } else {
      setPlantsList(prevPlant => [...prevPlant, newPlant])
    }
  }
  const handleSearch = (searchInput) => {
    setSearchValue(searchInput)
  }

  const getPlantToEdit = (editPlant) => {
    setIsEditForm(true)
    setPlantToEdit(editPlant)
  }
  return (
    <main>
      {isEditForm ?
        <NewPlantForm onSubmit={handleFormData}
          btnText='Submit'
          plantToEdit={plantToEdit}
          setPlantToEdit={setPlantToEdit}
          isEditForm={isEditForm}
        />
        :
        <NewPlantForm onSubmit={handleFormData} btnText='Add Plant' />}

      <Search searchValue={searchValue} onSearch={handleSearch} />
      <PlantList plantsList={plantsList} searchValue={searchValue} getPlantToEdit={getPlantToEdit} />
    </main>
  );
}

export default PlantPage;
