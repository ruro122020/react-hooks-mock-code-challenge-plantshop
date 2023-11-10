/*
Core Deliverables:
  1. When the app starts, I can see all plants.
  2. I can add a new plant to the page by submitting the form.
  3. I can mark a plant as "sold out".
  4. I can search for plants by their name and see a filtered list of plants.
  Core deliverable are done

  Advanced Deliverable:
  1. I can update the price of a plant and still see the updated price after refreshing the page.(done)
  2. I can delete a plant and it is still gone when I refresh the page.
*/
import React from "react";
import Header from "./Header";
import PlantPage from "./PlantPage";

function App() {
  return (
    <div className="app">
      <Header />
      <PlantPage />
    </div>
  );
}

export default App;
