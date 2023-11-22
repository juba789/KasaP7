import React from "react";
import "./HomePage.scss";
import Banner from "../layout/Banner";
import AppartGrid from "../components/AppartGrid";

function HomePage() {
  const imageUrl = window.location.origin + "/BannerAccueil.png";
  return (
    <>
      <Banner imageUrl={imageUrl} title="Chez vous, partout et ailleurs" />
      <AppartGrid />
    </>
  );
}

export default HomePage;