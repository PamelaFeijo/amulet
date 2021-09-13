import React from 'react'

function DisplayInfo(data) {
    //console.log(data.data.data.brandstof[0].brandstof_omschrijving)
    return (
        <div>            
           <p>{data.data.data.kenteken}</p>
           <h2>Trade name</h2>
           <p>{data.data.data.handelsbenaming}</p>
           <h2>Date of first admission</h2> 
           <p>{data.data.data.datum_eerste_toelating}</p>
           <h2>Fuel Description</h2>
           <p>{data.data.data.brandstof[0].brandstof_omschrijving}</p>  
        </div>
    )
}

export default DisplayInfo
