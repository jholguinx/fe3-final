import React from "react";
import  {useContextGlobal}  from '../Components/utils/global.context';
import { Link } from "react-router-dom";
import swal from 'sweetalert';

const Card = ({dentista}) => {
  const {stylesSwitch,favs,setFavs} = useContextGlobal();

  const addFav = (dentistaFav)=>{
    if(!favs.includes(dentistaFav)){
      setFavs([...favs, dentistaFav]);
      swal({title: `${dentista.name} added to favorites`,
      icon: 'success'})
    }else{
      swal({title: `${dentista.name} already exists in your favorites`,icon: 'warning'})
    }
  }
  const deleteFav = (dentistFav, idFav) => {
    if(favs.includes(dentistFav)){
      let filter = favs.filter(item => item.id !== idFav);
      setFavs(filter)
      swal({title: `${dentista.name} has been delete from favorites`,
      icon: 'success'})
    }else{
      swal({title: `${dentista.name} can't be deleted as it doesn't exist in your favorites`,icon: 'warning'})
    }
  }
  return (
    <div className="card" style={stylesSwitch}>
      <Link to={'/dentist/' + dentista.id} className="cardBox" style={stylesSwitch}>
        <img src="./images/doctor.jpg" alt="doctor"/>
        <h3>{dentista.name}</h3>
        <p>{dentista.username}</p>
        </Link>
        <div>
        <button onClick={()=>addFav(dentista)} className="favButton">⭐</button>
        <button onClick={()=>deleteFav(dentista,dentista.id)} className="favButton">✖</button>
        </div>
    </div>
  );
};

export default Card;