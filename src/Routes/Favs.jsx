import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import Card from "../Components/Card";

const Favs = () => {
  const [favoritos, setFavoritos] = useState([]);

  useEffect(() => {
    const fav = JSON.parse(localStorage.getItem('favs'));
    if (fav) {
      setFavoritos(fav);
    }
  }, []);
  return (
    <>
      <h1>Dentists Favs</h1>
      <div className="card-grid favCard">
        {favoritos.map(dentista => <Card dentista={dentista} key={dentista.id}/>)}
      </div>
    </>
  );
};

export default Favs;
