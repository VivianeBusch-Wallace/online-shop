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
    const searchText = userInput.toLowerCase().trim();
    // function for filtering with searchbar input >>
    if (searchText) {
      let filteredArray = data.filter((element) =>
        element.productName.includes(searchText)
      );
      setData(filteredArray);
      // << filtered only shows results after entering the second character, why?
    } else {
      setData(Data);
      // << why is this still filtered?
    }
  };

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
      <form onSubmit={handleSubmit} className="form">
        <input
          type="text"
          onChange={handleChange}
          value={userInput}
          placeholder="Search your item"
        />
      </form>
      <ProductList data={data} />
    </div>
  );
}

export default App;

// Do Not forget:
//         <ProductList data={userInput ? filteredData : data} />
// filter function
