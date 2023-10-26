import React, {useState} from "react";

function NewPlantForm() {
  const [formData, setFormData] = useState({
    name:'',
    image:'',
    price: ''
  })
  const handleInputChange=(e)=>{
    const {name, value} = e.target
    setFormData(prevFormData => ({...prevFormData, [name]: value}))
  }
  const handleSubmit=(e)=>{
    e.preventDefault()
    fetch(`http://localhost:6001/plants`,{
      method: 'POST',
      headers:{
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData)
    })
    .then(res => res.json())
    .then(plant => console.log(plant))
  }
  return (
    <div className="new-plant-form">
      <h2>New Plant</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" value={formData.name} onChange={handleInputChange} placeholder="Plant name" />
        <input type="text" name="image" value={formData.image} onChange={handleInputChange} placeholder="Image URL" />
        <input type="number" name="price" value={formData.price} onChange={handleInputChange} step="0.01" placeholder="Price" />
        <button type="submit">Add Plant</button>
      </form>
    </div>
  );
}

export default NewPlantForm;
