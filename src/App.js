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
  const [currentRotation, setCurrentRotation] = useState([]);
  const [currAirport, setCurrAirport] = useState('');
  const [currDepartureTime, setCurrDepartureTime] = useState(0);

  const onFlightAdd = id => {
    setCurrentRotation([
      ...currentRotation,
      flightsAPI.find(el => el.ident === id),
    ]);
  };

  const onFlightRemove = id => {
    setCurrentRotation(currentRotation.filter(flight => flight.ident !== id));
  };

  return (
    <main className="container">
      <DateNav />
      <section>
        <AircraftDisplay list={planesDATA} />
        <RotationDisplay
          list={flightDATA}
          addFlight={onFlightAdd}
          currentRotation={currentRotation}
        />
        <FlightPlanDisplay
          list={currentRotation}
          currentDepartureTime={setCurrDepartureTime}
          currentAirport={setCurrAirport}
          removeFlight={onFlightRemove}
        />
      </section>
    </main>
  );
}

export default App;
