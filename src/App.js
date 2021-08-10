import React, { Component } from 'react';
import './App.css';
import data from './data'
import { getAirlineById, getAirportByCode } from './data'
import Table from './components/Table'

const App = () => {
  const columns = [
    {name: 'Airline', property: 'airline'},
    {name: 'Source Airport', property: 'src'},
    {name: 'Destination Airport', property: 'dest'},
  ];

  function formatValue(property, value) { 
    if (property === 'airline') return getAirlineById(value)
    return getAirportByCode(value)
  }
  
  return (
    <div className="app">
      <header className="header">
        <h1 className="title">Airline Routes</h1>
      </header>
      <section>
        <p>
          Welcome to the app!
        </p>
      </section>
      <Table className="routes-table" columns={columns} rows={data.routes} format={formatValue} />
      {/* <table>
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
        </tbody>
      </table> */}
    </div>
  )
}

export default App;