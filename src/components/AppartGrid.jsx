import React from "react";
import "./AppartGrid.scss";
import Appart from "./Appart";
import { useState } from "react";
import { useEffect } from "react";

function AppartGrid() {
  const [appartements, setAppartemens] = useState([]);

  useEffect(fetchAppartements, []);

  function fetchAppartements() {
    fetch("db.json")
      .then((res) => res.json())
      .then((res) => setAppartemens(res))
      .catch(console.error);
  }

  return (
    <div className="grid">
      {appartements.map((appartment) => (
        <Appart
          title={appartment.title}
          imageUrl={appartment.cover}
          id={appartment.id}
          key={appartment.id}
        />
      ))}
    </div>
  );
}

export default AppartGrid;