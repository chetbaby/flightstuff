import React from 'react';
import H6Title from './H6Title';

const DestArrInfo = ({ airport, time }) => (
  <div>
    <H6Title title={airport} />
    <H6Title title={time} />
  </div>
);

export default DestArrInfo;
