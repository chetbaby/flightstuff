import React from 'react';
import H5Title from './H5Title';
import ResultsContainer from './ResultsContainer';
import Aircraft from './Aircraft';

const AircraftDisplay = ({ list }) => (
  <section className="section-col columns three">
    <H5Title title="Aircraft" align="center" />
    <hr />
    <ResultsContainer>
      {list.map(aircraft => (
        <Aircraft plane={aircraft.ident} stat="n/a" />
      ))}
    </ResultsContainer>
  </section>
);

export default AircraftDisplay;
