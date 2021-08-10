import React, { Component } from 'react';
import './App.css';
import data from './data'
import { getAirlineById, getAirportByCode } from './data'
import Table from './components/Table'
import Select from './components/Select'

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

  // for testing
  const filteredAirlines = data.airlines
  
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
        <Select
          options={filteredAirlines}
          valueKey="id"
          titleKey="name"
          allTitle="All Airlines"
          value=""
          onSelect=""
        />
        flying in or out of      
      </p>

      <Table className="routes-table" columns={columns} rows={data.routes} format={formatValue} />

    </div>
  )
}

export default App;