import React, { useState, useEffect } from 'react';
import ReactJson from 'react-json-view';
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
  const [flightDATA, setFlightDATA] = useState();
  const [planesDATA, setPlanesDATA] = useState();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setFlightDATA(flightsAPI);
      setPlanesDATA(planesAPI);
    }, 0);
    setLoading(false);
  }, []);

  return (
    <main className="container">
      <DateNav />
      <section>
        <AircraftDisplay />
        <RotationDisplay />
        <FlightPlanDisplay />
      </section>
    </main>
  );
}

export default App;
