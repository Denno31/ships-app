import { gql, useQuery, useReactiveVar } from "@apollo/client";
import { readFile } from "fs/promises";
import React from "react";
import { favoriteShipsStore } from "../apolloclient";
import FavoriteShip from "../components/FavoriteShip";
import Ship from "../components/Ship";
import { ShipsDocument } from "../graphql/schema";

const Ships: React.FC = () => {
  const { loading, error, data } = useQuery(ShipsDocument);
   let favoriteShips = useReactiveVar(favoriteShipsStore)
  if (loading) {
    return <div>Loading...</div>;
  }
  const addToFavorite = (ship):void=>{
    
    favoriteShipsStore(favoriteShipsStore().concat(ship))
  }
  const isShipFavorite = (ship):Boolean=>{
    console.log(favoriteShipsStore().length)
    const favShip = favoriteShipsStore().find(favShip=> favShip ===ship.name)
    if(!favShip){
      return false
    }
    return true
  }
  const removeFromFavorite = (ship):void=>{
    favoriteShipsStore(favoriteShipsStore().filter(favShip=> favShip !== ship.name))
  }
  return (
    <div className="container">
      <div>favorites: {favoriteShips.length}</div>
      <FavoriteShip addToFavorite={addToFavorite}/>
      <div className="ship-wrapper">
        {data &&
          data.ships?.map((ship) => (
           ship && <Ship ship={ship} key={ship.name} removeFromFavorite={removeFromFavorite} isShipFavorite={isShipFavorite} addToFavorite={addToFavorite} />
          ))}
      </div>
    </div>
  );
};

export default Ships;
