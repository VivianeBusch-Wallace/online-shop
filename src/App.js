import React, { useState } from "react";
import Data from "./data.json";
import ProductList from "./components/ProductCatalogue";

function App() {
  // useState >>
  const [userInput, setUserInput] = useState("");
  const [data, setData] = useState(Data);
  // << initialize state with Data and send data to child

  // when the user types into searchbar >>
  const handleChange = (e) => {
    setUserInput(e.target.value);
  };
  // function for filtering by searchbar input >>

  // on submit >>
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="App">
      {
        // for having homepage and not seeing images do this >>
        //<img src={`${process.env.PUBLIC_URL}/${data[0].img}`} alt="Sushi" />
        // fontawesome icons and features >>
        //<FontAwesomeIcon icon={["fab", "apple"]} size="6x" rotation={90} />
      }
      <h1>Spend some money in my store</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" onChange={handleChange} value={userInput} />
        <input type="submit" value="find" />
      </form>
      <ProductList data={data} />
    </div>
  );
}

export default App;

// Do Not forget:
//         <ProductList data={userInput ? filteredData : data} />
// filter function
