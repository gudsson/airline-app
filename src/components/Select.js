import React from 'react'

const Select = ({ options, valueKey,
  titleKey, allTitle, value, onSelect }) => {
  
    const handleChange = (e) => {
      e.preventDefault()
      onSelect(e.target.value)
    }

    return (
      <select value={value} onChange={handleChange}>
        <option value="all">{allTitle}</option>
        {console.log(value)}
        {options.map(option =>
          <option
            key={option[valueKey]}
            value={option[valueKey]}
            >
              {option[titleKey]}
          </option>
        )}
      </select>
    )
}

export default Select