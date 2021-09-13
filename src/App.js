import "./App.css";
import { useState } from "react";
import DisplayInfo from "./components/DisplayInfo";
import Slider from "./components/Slider";
import Placeholder from "./components/PlaceHolder";

function App() {  
  const [plate, setPlate] = useState([]);
  const [input, setInput] = useState({
    plate: "",
  });

  console.log("plate", plate);

  async function fetchData(e) {
    e.preventDefault();
    if (input.plate === "") {
      alert("Add a plate");
    } else {
      const data = await fetch(
        `https://api.overheid.io/voertuiggegevens/${input.plate}?ovio-api-key=6f6678d7a945f648ad8a69f23cdecc7291baa395b0e991523535828613e72cfe`
      )
        .then((res) => res.json())
        .then((data) => data);

      setPlate({ data: data });
    }
  }

  const handleChange = (e) => {
    let name = e.target.name;
    let value = e.target.value;

    if (name === "plate") {
      setInput({ ...input, plate: value });
    }
  };

  return (
    <div className="App">
      <div className="container">
        <>
          <form>
            <div className="main-container">
              <div className="inner-container">
                <h1>Please enter your license plate number</h1>
                <input
                  className="input-css"
                  type="text"
                  name="plate"
                  placeholder="Enter a plate..."
                  onChange={(e) => handleChange(e)}
                />
                <button className="submit-css" onClick={(e) => fetchData(e)}>
                  Send
                </button>
              </div>
            </div>
          </form>
          <div>
            <Slider />
          </div>
        </>       

        {plate.data !== undefined ? (
          <div>
            <DisplayInfo data={plate} />
          </div>
        ) : <Placeholder/>}
      </div>
    </div>
  );
}

export default App;
