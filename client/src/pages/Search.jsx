import { useEffect, useState } from "react";
import Select from "react-select";
import { apiFetch } from "../api";
import SearchResult from "../components/SearchResult";

export default function Search() {
  const [flights, setFlights] = useState([]);
  const [airports, setAirports] = useState([]);
  const [loading, setLoading] = useState(false);
  const [hasSearched, setHasSearched] = useState(false);

  const today = new Date();
  const airportOptions = airports.map((airport) => ({
    value: airport.AirportCode,
    label: `${airport.AirportName} - ${airport.AirportCode}`,
  }));

  const handleSubmit = async (e) => {
    e.preventDefault();

    const searchRequest = {
      origin: e.target.origin.value,
      destination: e.target.destination.value,
      departure: e.target.departure.value,
      passengers: e.target.passengers.value,
    };

    console.log(searchRequest);
    setLoading(true);

    try {
      const response = await apiFetch("/searchFlights", {
        method: "POST",
        body: JSON.stringify(searchRequest),
      });
      const flights = await response.json();
      console.log(flights);
      setFlights(flights);
    } catch (error) {
      console.log(error);
    }

    setLoading(false);
    setHasSearched(true);
  };

  useEffect(() => {
    (async () => {
      const response = await apiFetch("/airports");
      if (response.status === 200) {
        const data = await response.json();
        setAirports(data);
      } else {
        console.log("Error loading airports.");
      }
    })();
  }, []);

  return (
    <>
      <h1>Search</h1>

      <form onSubmit={handleSubmit} className="search-form">
        <label htmlFor="origin">Origin</label>
        <Select
          options={airportOptions}
          name="origin"
          id="origin"
          className="search-form-select"
          required
        />
        {/* <AirportsSelector id="origin" className="search-form-select" required /> */}
        <label htmlFor="destination">Destination</label>
        <Select
          options={airportOptions}
          name="destination"
          id="destination"
          className="search-form-select"
          required
        />
        {/* <AirportsSelector
          id="destination"
          className="search-form-select"
          required
        /> */}
        <label htmlFor="departure">Departure</label>
        <input
          type="date"
          id="departure"
          required
          defaultValue={today.toLocaleDateString()}
        />
        <label htmlFor="passengers">Passengers</label>
        <input type="number" id="passengers" required defaultValue={1} />
        <input type="submit" value="Search" />
      </form>

      <div className="results-box">
        {hasSearched ? (
          loading ? (
            <p key="loading">Loading...</p>
          ) : flights.length > 0 ? (
            flights.map((flight) => <SearchResult flight={flight} />)
          ) : (
            <p key="no-results">No results found for this search.</p>
          )
        ) : (
          <p>Hit "Search" to see results.</p>
        )}
      </div>
    </>
  );
}
