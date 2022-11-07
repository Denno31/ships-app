import { useReactiveVar } from "@apollo/client";
import React from "react";
import { favoriteShipsStore } from "../apolloclient";

interface Props {
  addToFavorite:Function
}

const FavoriteShip = ({addToFavorite}:Props) => {
  // const myFavoriteShips = useReactiveVar(favoriteShips)
  return (
    <div></div>
  )
};

export default FavoriteShip;
