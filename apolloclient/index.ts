import { ApolloClient, InMemoryCache, makeVar } from "@apollo/client";

export const favoriteShipsStore = makeVar([]);

export const client = new ApolloClient({
  uri: "https://api.spacex.land/graphql/",
  cache: new InMemoryCache(),
});
