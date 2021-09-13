import React from "react";

function DisplayInfo(data) {
  return (
    <div className="card">
      <p>Trade name</p>
      <h2>{data.data.data.handelsbenaming}</h2>
      <p>Date of first admission</p>
      <h2>{data.data.data.datum_eerste_toelating}</h2>
      <p>Fuel Description</p>
      <h2>{data.data.data.brandstof[0].brandstof_omschrijving}</h2>
    </div>
  );
}

export default DisplayInfo;
