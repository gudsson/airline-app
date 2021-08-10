import React, { Component } from 'react';
import './App.css';
// const data = require('./data')
import data from './data'
import { getAirlineById, getAirportByCode } from './data'

const App = () => (
  <div className="app">
  <header className="header">
    <h1 className="title">Airline Routes</h1>
  </header>
  <section>
    <p>
      Welcome to the app!
    </p>
  </section>
  <table>
    <thead>
      <tr>
        <th>Airline</th>
        <th>Source Aiport</th>
        <th>Destination Airport</th>
      </tr>
    </thead>
    <tbody>
      <tr></tr>
      {data.routes.map((route, idx) => {
        const srcAirport = getAirportByCode(route.src);
        const desAirport = getAirportByCode(route.dest);
        if (!srcAirport || !desAirport) return null
        return (
          <tr key={idx}>
            <td>{getAirlineById(route.airline)}</td>
            <td>{srcAirport}</td>
            <td>{desAirport}</td>
          </tr>
        )
      })}
      {console.log(data)}
    </tbody>
  </table>
</div>
)

export default App;