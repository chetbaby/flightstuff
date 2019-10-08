import React from 'react';
import H6Title from './H6Title';

const Aircraft = ({ plane, stat }) => (
  <div className="result">
    <H6Title align="center" title={plane} />
    <H6Title align="center" title={stat} />
  </div>
);

export default Aircraft;
