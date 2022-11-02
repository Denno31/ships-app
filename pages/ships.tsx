import { gql, useQuery } from "@apollo/client";
import React from "react";
import { ShipsDocument } from "../graphql/schema";

const GetShips = gql`
  query GetShips {
    ships {
      active
      image
      name
      type
    }
  }
`;
const Ships: React.FC = () => {
  const { loading, error, data } = useQuery(ShipsDocument);
  if (loading) {
    return <div>Loading...</div>;
  }
  return (
    <div className="container">
      <div className="ship-wrapper">
        {data &&
          data.ships?.map((ship) => (
            <div className="ship" key={ship?.name}>
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
            </div>
          ))}
      </div>
    </div>
  );
};

export default Ships;
