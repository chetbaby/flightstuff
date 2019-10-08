import React from 'react';
import H5Title from './H5Title';
import ResultsContainer from './ResultsContainer';
import Flight from './Flight';

const RotationDisplay = ({ list, addFlight, currentRotation }) => (
  <section className="section-col columns six">
    <H5Title title="Rotation" align="center" />
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
          handleClick={addFlight}
        />
      ))}
    </ResultsContainer>
  </section>
);

export default RotationDisplay;
