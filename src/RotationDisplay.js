import React from 'react';
import H5Title from './H5Title';
import ResultsContainer from './ResultsContainer';
import Flight from './Flight';

const RotationDisplay = ({ list, isLoading }) => (
  <section className="section-col columns six">
    <H5Title title="Rotation" align="center" />
    <hr />
    <ResultsContainer>
      {!isLoading
        ? list.map(flight => (
            <Flight
              key={flight.ident}
              ident={flight.ident}
              depart={flight.origin}
              departure={flight.readable_departure}
              arrive={flight.destination}
              arrival={flight.readable_arrival}
            />
          ))
        : 'Loading...'}
    </ResultsContainer>
  </section>
);

export default RotationDisplay;
