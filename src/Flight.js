import React from 'react';
import H6Title from './H6Title';
import DestArrInfo from './DestArrInfo';

const Flight = ({ ident, depart, departure, arrive, arrival, handleClick }) => (
  <div className="result flight-box" onMouseDown={() => handleClick(ident)}>
    <H6Title title={`Flight: ${ident}`} />
    <div className="itenerary-display">
      <DestArrInfo airport={depart} time={departure} />
      <i className="fas fa-plane " />
      <DestArrInfo airport={arrive} time={arrival} />
    </div>
  </div>
);

export default Flight;
