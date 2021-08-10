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
      <p>
        Show routes on
        <select name="airline" id="airline-dropdown">
          <option value="all" selected>All Airlines</option>
          {data.airlines.map(airline =>
            <option key={airline.id} value={airline.id}>{airline.name}</option>
          )}
        </select>
        flying in or out of      
      </p>

      <Table className="routes-table" columns={columns} rows={data.routes} format={formatValue} />

    </div>
  )
}

export default App;