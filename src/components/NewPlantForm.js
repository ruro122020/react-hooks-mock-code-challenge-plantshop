import React, { useState } from "react";

function NewPlantForm({ onSubmit, btnText, plantToEdit, setPlantToEdit, isEditForm }) {
  const [formData, setFormData] = useState({
    name: '',
    image: '',
    price: ''
  })
  const handleInputChange = (e) => {
    const { name, value } = e.target
    if (isEditForm) {
      setPlantToEdit(({ ...plantToEdit, [name]: value }))
    }
    setFormData(prevFormData => ({ ...prevFormData, [name]: value }))
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    //UPDATE PLANT TO SERVER
    if (isEditForm) {
      fetch(`http://localhost:6001/plants/${plantToEdit.id}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(plantToEdit)
      })
        .then(res => res.json())
        .then(plant => onSubmit(plant))
    } else {
      //ADD NEW PLANT TO SERVER
      fetch(`http://localhost:6001/plants`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      })
        .then(res => res.json())
        .then(plant => onSubmit(plant))
    }

    //clear form
    setFormData({
      name: '',
      image: '',
      price: ''
    })
  }
  return (
    <div className="new-plant-form">
      <h2>New Plant</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" value={isEditForm ? plantToEdit.name : formData.name} onChange={handleInputChange} placeholder="Plant name" />
        <input type="text" name="image" value={isEditForm ? plantToEdit.image : formData.image} onChange={handleInputChange} placeholder="Image URL" />
        <input type="number" name="price" value={isEditForm ? plantToEdit.price : formData.price} onChange={handleInputChange} step="0.01" placeholder="Price" />
        <button type="submit">{btnText}</button>
      </form>
    </div>
  );
}

export default NewPlantForm;
