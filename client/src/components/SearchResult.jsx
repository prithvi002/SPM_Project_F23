const formatter = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
});

export default function SearchResult({ flight }) {
  return (
    <div className="flight-result" key={flight.FlightId}>
      <div className="flight-basics">
        <p className="flight-airline">{flight.Airline}</p>
        <p className="flight-code">{flight.FlightCode}</p>
      </div>
      <div className="flight-details">
        <p className="flight-departure">
          <b>{flight.DepartureAirportCode}</b> (
          {new Date(flight.DepartureDate).toLocaleString()})
        </p>
        <p>To</p>
        <p className="flight-arrival">
          <b>{flight.ArrivalAirportCode}</b> (
          {new Date(flight.ArrivalDate).toLocaleString()})
        </p>
      </div>
      <div className="flight-price">
        <p className="flight-price">{formatter.format(flight.Price)}</p>
      </div>
    </div>
  );
}
