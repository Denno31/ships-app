import { gql, useQuery } from '@apollo/client'
import React, { useEffect } from 'react'

const GetShips = gql`
  query GetShips {
    ships {
    active
    image
    name
    type
  }
  }
`
const Ships:React.FC = () => {
   const {loading,error,data} = useQuery(GetShips)
   if(loading){
    return <div>Loading...</div>
   }
  return (
    
    <div className="container">
      <div className="ship-wrapper">
        {
          data.ships.map((ship:{name:string,image:string,type:string})=>(
            <div className="ship" key={ship.name}>
          <div className="ship-image">
            <img src={ship.image} alt={ship.name} />
          </div>
          <div className="ship-details">
            <p><b>Name</b>:{ship.name}</p>
            <p><b>Type</b>:{ship.type}</p>
          </div>
        </div>
          ))
        }
        
        
      </div>
    </div>
  )
}

export default Ships