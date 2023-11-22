import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./AppartPage.scss";
import ImageAppartBanner from "../components/ImageAppartBanner";
import AppartHeader from "../components/AppartHeader";
import { DescriptionPanel } from "../components/DescriptionPanel";
import { Navigate } from "react-router-dom";

function AppartPage() {
  const { appartId } = useParams();
  const [flat, setFlat] = useState(null);
  const [loading, setLoading] = useState(true);
  const jsonPath = `${window.location.origin}/db.json`;

  useEffect(() => {
    fetchAppartData();
  }, []);

  function fetchAppartData() {
    fetch(jsonPath)
      .then((res) => res.json())
      .then((flats) => {
        const foundFlat = flats.find((flat) => flat.id === appartId);
        setFlat(foundFlat);
        setLoading(false);
      })
      .catch((error) => {
        console.error(error);
      });
  }

  if (loading) {
    return <div>Chargement en cours...</div>;
  }

  if (!flat) {
    return <Navigate to="*" />;
  }

  return (
    <div className="appart-page">
      <ImageAppartBanner pictures={flat?.pictures} />
      <AppartHeader flat={flat} />
      <div className="appart__description__area">
        <DescriptionPanel title="Description" content={flat.description} />
        <DescriptionPanel
          title="Equipements"
          content={flat.equipments.map((eq, i) => (
            <li key={i}>{eq}</li>
          ))}
        />
      </div>
    </div>
  );
}

export default AppartPage;