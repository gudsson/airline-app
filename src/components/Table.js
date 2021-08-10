import React from 'react'

const Table = ({ className, columns, rows, format }) => {
  return (
    <table className={className}>
      <thead>
        <tr>
          {columns.map(column => 
            <th>{column.name}</th>
          )}
        </tr>
      </thead>
      <tbody>
        {rows.map((row, idx) => 
          <tr key={idx}>{columns.map(column => 
            <td>{format(column.property, row[column.property])}</td>
          )}</tr>
        )}
      </tbody>
    </table>
  )
}

export default Table