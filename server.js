import express from "express";
import fetch from "node-fetch";
import cors from "cors";

const app = express();
app.use(cors());

const API_TOKEN = "e7c31262d8a3cbf35d1431b0a20f4797";
const MARKER = "1KOALOAs"; // <-- Your real affiliate marker

// Format date helper
const formatDate = (d) => d.toISOString().split("T")[0];

// Flights for a specific date
app.get("/flights", async (req, res) => {
  const { origin, destination, date } = req.query;

  if (!origin || !destination || !date) {
    return res.status(400).json({ error: "Origin, destination, and date are required" });
  }

  const url = `https://api.travelpayouts.com/aviasales/v3/prices_for_dates?origin=${origin}&destination=${destination}&departure_at=${date}&currency=usd`;

  try {
    const response = await fetch(url, {
      headers: { "X-Access-Token": API_TOKEN },
    });
    const data = await response.json();

    // Add affiliate link
    data.data = (data.data || []).map((flight) => ({
  ...flight,
  affiliate_link: `https://www.aviasales.com/search/${flight.origin_airport}${flight.departure_at.replace(/-/g, '').slice(2,8)}${flight.destination_airport}1?marker=${MARKER}`,
}));

    res.json(data);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to fetch flights" });
  }
});

// Flights for next 30 days (if date not specified)
app.get("/flights_month", async (req, res) => {
  const { origin, destination } = req.query;

  if (!origin || !destination) {
    return res.status(400).json({ error: "Origin and destination are required" });
  }

  const today = new Date();
  const nextMonth = new Date();
  nextMonth.setDate(today.getDate() + 30);

  const url = `https://api.travelpayouts.com/aviasales/v3/prices_for_dates?origin=${origin}&destination=${destination}&depart_date_from=${formatDate(
    today
  )}&depart_date_to=${formatDate(nextMonth)}&currency=eur`;

  try {
    const response = await fetch(url, {
      headers: { "X-Access-Token": API_TOKEN },
    });
    const data = await response.json();

    // Add affiliate link
    data.data = (data.data || []).map((flight) => ({
      ...flight,
      affiliate_link: `https://www.aviasales.com${flight.link}&marker=${MARKER}`,
    }));

    res.json(data);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to fetch monthly flights" });
  }
});

// 404 handler
app.use((req, res) => {
  res.status(404).json({ error: "Route not found" });
});

app.listen(3001, () => console.log("Backend running on http://localhost:3001"));
