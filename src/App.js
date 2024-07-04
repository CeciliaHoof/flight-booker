import { useState } from "react";
import "./styles.css";

const TODAY = formatDate(new Date());
const DAY_IN_SECONDS = 24 * 60 * 60 * 1000;

function formatDate(date) {
  const year = date.getFullYear();
  const month = (date.getMonth() + 1).toString().padStart(2, "0");
  const day = date.getDate().toString().padStart(2, "0");

  return [year, month, day].join("-");
}

export default function App() {
  const [tripType, setTripType] = useState("one");
  const [dDate, setDDate] = useState(
    formatDate(new Date(Date.now() + DAY_IN_SECONDS))
  );
  const [rDate, setRDate] = useState(dDate);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (tripType === "one") {
      alert(`You have booked a one-way flight on ${dDate}`);
    } else {
      alert(`You have booked a return flight, departing on ${dDate} and returning on ${rDate}`)
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <select
        name="trip-type"
        onChange={(e) => {
          setTripType(e.target.value);
        }}
        value={tripType}
      >
        <option value="one">One-way Flight</option>
        <option value="return">Return Flight</option>
      </select>
      <br />
      <br />
      <label htmlFor="one">Departure:</label> <br />
      <input
        id="one"
        type="date"
        value={dDate}
        min={TODAY}
        onChange={(e) => {
          setDDate(e.target.value);
        }}
      />
      <br />
      <br />
      {tripType === "return" && (
        <>
          <label htmlFor="return">Return:</label> <br />
          <input
            id="return"
            type="date"
            value={rDate}
            min={dDate}
            onChange={(e) => {
              setRDate(e.target.value);
            }}
          />
          <br />
          <br />
        </>
      )}
      <button type="submit">Book Flight</button>
    </form>
  );
}
