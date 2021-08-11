import React, { useState } from 'react';
import './App.css';
import data from './data'
import { getAirlineById, getAirportByCode } from './data'
import Table from './components/Table'
import Select from './components/Select'

const App = () => {
  const [airline, setAirline] = useState("all")
  const [airport, setAirport] = useState("all")
  const columns = [
    {name: 'Airline', property: 'airline'},
    {name: 'Source Airport', property: 'src'},
    {name: 'Destination Airport', property: 'dest'},
  ];

  function formatValue(property, value) { 
    if (property === 'airline') return getAirlineById(value)
    return getAirportByCode(value)
  }

  const filteredRoutes = data.routes.filter(route => {
    return (
        [String(route.airline), 'all'].includes(airline)
        &&
        (route.src === airport
          || route.dest === airport
          || airport === "all")
    )
  })

  console.log(filteredRoutes)

  const filteredAirlines = data.airlines.map(airline => {
    const valid = filteredRoutes.some(route => {
      return route.airline === airline.id
    })

    return { ...airline, valid }
  })

  const filteredAirports = data.airports.map(airport => {
    const valid = filteredRoutes.some(route => {
      return [route.src, route.dest].includes(airport.code)
    })

    return { ...airport, valid }
  })

  const showAll = (event) => {
    setAirline('all')
    setAirport('all')
  }

  const selectedAirline = (selection) => {
    setAirline(selection)
  }

  const selectedAirport = (selection) => {
    setAirport(selection)
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
        <Select
          options={filteredAirlines}
          valueKey="id"
          titleKey="name"
          allTitle="All Airlines"
          value={airline}
          onSelect={selectedAirline}
        />
        flying in or out of
        <Select
          options={filteredAirports}
          valueKey="code"
          titleKey="name"
          allTitle="All Airports"
          value={airport}
          onSelect={selectedAirport}
        />
      <button onClick={showAll} disabled={false}>Show All Routes</button>
      </p>
      <Table className="routes-table" columns={columns} rows={data.routes} format={formatValue} />

    </div>
  )
}

export default App;