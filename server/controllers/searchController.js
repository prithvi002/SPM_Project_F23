import { db } from "../mysql.js";

export async function getAirports(req, res) {
    if (!req.session.user) {
        return res.status(401).json({ message: "Unauthorized" });
    }

    const query = `
        SELECT * FROM Airports;
    `;
    const airports = await db.query(query);

    res.json(airports[0]);
}

export async function searchForFlight(req, res) {
    if (!req.session.user) {
        return res.status(401).json({ message: "Unauthorized" });
    }

    if (!req.body) {
        return res.status(400).json({ message: "Missing body" });
    }

    try {
        const { origin, destination, departure, passengers } = req.body;
        const query = `
        SELECT
            f.FlightID,
            f.Airline,
            f.DepartureDate,
            f.ArrivalDate,
            f.Price,
            f.AvailableSeats,
            f.FlightCode,
            f.FlightDuration,
            dap.AirportCode AS DepartureAirportCode,
            aap.AirportCode AS ArrivalAirportCode
        FROM
            Flight AS f
            INNER JOIN Airports AS dap ON f.DepartureAirportID = dap.AirportID
            INNER JOIN Airports AS aap ON f.ArrivalAirportID = aap.AirportID
        WHERE
            dap.AirportCode = ?
            AND aap.AirportCode = ?
            AND DATE(f.DepartureDate) = DATE(?)
            AND f.AvailableSeats >= ?;
        `;
        const flights = await db.query(query, [origin, destination, departure, passengers]);
        res.json(flights[0]);

    } catch (error) {
        return res.status(400).json({ message: "Missing body" });
    }
}
