/*
  In the PlantPage component:
    -create a plants state variable and set it to be an array
    -fetch for the plants data in a useEffect hook
    -set the plants list to the plants state variable
    -pass the plants array to the PlantPage component
  In the PlantList component:
    -iterate through the plants array and display all the plants to the DOM 
    -when it's time to add a new plant fromt he NewPlantForm component:
        --create a handleFormData function to pass down as props to the NewPlantForm component
          ---In this function, add the new plant object to the plants array
  In the NewPlantForm component:
    -create a plant state and set it to an object:
      --object format:
        {
          name:'',
          image:'',
          price: ''
        }
    - add a value attribut to the inputs and set the value to match the properties of the plant object
    - create an handleInputChange function 
        -- In this function, get the name of the input and the value of the input
        -- set the plant object to be the name and value of the inputs
    - add an onChange event to each input and set the callback to be the handleInputChange function
    - create a handleSubmit function 
        -- In this function, add the plant object to the server 
        -- call the handleFormData function and pass the formData to the function
    - add new plant to the plantsList in the PlantPage component
*/
import React,{useState, useEffect} from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage() {
  const [plantsList, setPlantsList] = useState([])

  //fetch requests
  useEffect(()=>{
    fetch('http://localhost:6001/plants')
    .then(res => res.json())
    .then(plants => setPlantsList(plants))
  }, [])

  const handleFormData =(newPlant)=>{
    setPlantsList(prevPlant => [...prevPlant, newPlant])
  }
  
  return (
    <main>
      <NewPlantForm onSubmit={handleFormData}/>
      <Search />
      <PlantList plantsList={plantsList} />
    </main>
  );
}

export default PlantPage;
