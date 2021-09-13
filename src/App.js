import './App.css';
import { useState } from 'react';
import DisplayInfo from './components/DisplayInfo';

function App() {
  const [showSearch, setShowSearch] = useState(true);
  const [plate, setPlate] = useState([]);
  const [input, setInput] = useState({
    plate: ""
  });

   console.log('plate', plate)

  async function fetchData (e){
    e.preventDefault();
    if(input.plate === ""){
        alert("Add a plate");
    }else{
       const data = await fetch(
        `https://api.overheid.io/voertuiggegevens/${input.plate}?ovio-api-key=6f6678d7a945f648ad8a69f23cdecc7291baa395b0e991523535828613e72cfe`
         )
           .then((res) => res.json())
           .then((data) => (data));
   
       setPlate({ data: data });    
    }  
 }

 const handleChange = (e) => {
  let name = e.target.name;
  let value = e.target.value;

  if (name === "plate") {
    setInput({ ...input, plate: value });
  }      
}
 

  return (
    <div className="App">     
      <div className="weather-container">        

        {!showSearch ? (
          <div onClick={() => setShowSearch(true)}></div>
        ) : (
          <>
           <form>
                <div>
                    <input className="input-css" type="text" name="plate" placeholder="Enter a plate..." onChange={(e) => handleChange(e)} />                   
                </div>
                <button className="submit-css" onClick={(e) => fetchData(e)}>Submit</button>
          </form>
          </>
        )}

       
      {
          plate.data !== undefined  ?
          <div>
             <DisplayInfo data={plate} />
          </div>
          : null
      }       
    </div>
    </div>
  );
}

export default App;

