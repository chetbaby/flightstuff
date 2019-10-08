import React from 'react';
import moment from 'moment';
import H2Title from './H2Title';

const DateNav = () => (
  <section className="header-nav">
    <button className="button" type="button">
      prev
    </button>
    <H2Title title={moment().format('MMMM Do YYYY')} />
    <button type="button">next</button>
  </section>
);

export default DateNav;
