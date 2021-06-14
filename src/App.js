import React, { useState } from "react";
import Data from "./data.json";
import ProductList from "./components/ProductCatalogue";

function App() {
  const [userInput, setUserInput] = useState("");

  // when the user types into searchbar >>
  const handleChange = (e) => {
    setUserInput(e.target.value);
  };

  // on submit >>
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="App">
      <h1>Spend some money in my store</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" onChange={handleChange} value={userInput} />
        <input type="submit" value="find" />
        <ProductList data={userInput ? filteredData : data} />
      </form>
    </div>
  );
}

export default App;
