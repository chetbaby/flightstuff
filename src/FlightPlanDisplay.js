import React from 'react';
import H5Title from './H5Title';
import ResultsContainer from './ResultsContainer';
import Flight from './Flight';

const FlightPlanDisplay = ({
  list,
  removeFlight,
  currentAirport,
  currentDepartureTime,
}) => (
  <section className="section-col columns three">
    <H5Title title="Flights" align="center" />
    <hr />
    <ResultsContainer>
      {list.map(flight => (
        <Flight
          key={flight.ident}
          ident={flight.ident}
          depart={flight.origin}
          departure={flight.readable_departure}
          arrive={flight.destination}
          arrival={flight.readable_arrival}
          handleClick={removeFlight}
          currentAirport={currentAirport(flight.destination)}
          currentDepartureTime={currentDepartureTime(
            flight.departuretime + 20 * 60
          )}
        />
      ))}
    </ResultsContainer>
  </section>
);

export default FlightPlanDisplay;
