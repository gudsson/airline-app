import React, { useState } from 'react'


const Table = ({ className, columns, rows, format }) => {
  const [startingRow, setStartingRow] = useState(0)
  // const [finishingRow, setfinishingRow] = useState(PAGE_SIZE)
  const perPage = 25
  const totalRows = rows.length
  const displayRows = rows.slice(startingRow, startingRow + perPage)

  
  const prevPage = (event) => {
    setStartingRow(startingRow - perPage)
  }
  const nextPage = (event) => {
    setStartingRow(startingRow + perPage)
  }

  return (
    <div>
      <table className={className}>
        <thead>
          <tr>
            {columns.map(column => 
              <th key={column.name}>{column.name}</th>
            )}
          </tr>
        </thead>
        <tbody>
          {displayRows.map((row, idx) => 
            <tr key={idx}>{columns.map((column, jdx) => 
              <td key={jdx}>{format(column.property, row[column.property])}</td>
            )}</tr>
          )}
        </tbody>
      </table>
      <p>Showing {startingRow + 1}-
        {startingRow + perPage >= totalRows
          ? totalRows
          : startingRow + perPage} of {totalRows} routes</p>
      <p>
        <button onClick={prevPage} disabled={startingRow === 0}>Previous Page</button>
        <button onClick={nextPage} disabled={startingRow + perPage >= totalRows}>Next Page</button>
      </p>
    </div>
  )
}

export default Table