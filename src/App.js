import React, { useState, useEffect } from 'react';
import DateNav from './DateNav';
import AircraftDisplay from './AircraftDisplay';
import RotationDisplay from './RotationDisplay';
import FlightPlanDisplay from './FlightPlanDisplay';
import flightsAPI from './flights';
import planesAPI from './planes';
import './normalize.css';
import './skeleton.css';
import './App.css';

function App() {
  const [flightDATA, setFlightDATA] = useState(
    flightsAPI.sort((a, b) => a.departuretime - b.departuretime)
  );
  const [planesDATA, setPlanesDATA] = useState();
  const [loading, setLoading] = useState(false);

  return (
    <main className="container">
      <DateNav />
      <section>
        <AircraftDisplay list={planesDATA} />
        <RotationDisplay list={flightDATA} isLoading={loading} />
        <FlightPlanDisplay list="" />
      </section>
    </main>
  );
}

export default App;
