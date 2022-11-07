import React from 'react'
import { ShipFieldsFragment } from '../graphql/schema'

interface Props {
    ship:ShipFieldsFragment
    addToFavorite:Function
    isShipFavorite:Function
    removeFromFavorite:Function
}

const Ship = ({ship,addToFavorite,isShipFavorite,removeFromFavorite}:Props) => {
  return (
     <div className="ship" >
              <div className="ship-image">
                {ship?.image && <img src={ship?.image} alt={ship?.name} />}
              </div>
              <div className="ship-details">
                <p>
                  <b>Name</b>:{ship?.name}
                </p>
                <p>
                  <b>Type</b>:{ship?.type}
                </p>
              </div>
              <button
              onClick={(e)=>{
                if(isShipFavorite(ship)){
                  return removeFromFavorite(ship)
                }
                addToFavorite(ship.name)
              }}
              >{isShipFavorite(ship) ? "Remove From Favorite":"Add To Favorite"}</button>
            </div>
  )
}

export default Ship