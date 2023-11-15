import React, { useContext } from "react";
import { Navigate } from "react-router-dom";
import {UserContext} from "../UserContext";
import SearchResult from "../components/SearchResult";

const FavoritesPage = () => {
  const { user, favorites } = useContext(UserContext);
  console.log("These are the favs");
  console.log(favorites);   

  if (!user) {
    // If the user is not authenticated, redirect to the homepage or login page
    return <Navigate to="/" />;
  }

  return (
    <div>
      <h2>Your Favorite Flights</h2>
      {favorites.length > 0 ? (
        favorites.map((favFlight) => (
          <SearchResult key={favFlight.FlightId} flight={favFlight} />
        ))
      ) : (
        <p>No favorite flights yet.</p>
      )}
    </div>
  );
};

export default FavoritesPage;
