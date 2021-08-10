import React from 'react'

const Select = ({ options, valueKey,
  titleKey, allTitle, value, onSelect }) => {
  
    return (
      <select>
        <option value="all" selected>{allTitle}</option>
        {options.map(option =>
          <option key={option[valueKey]} value={option[valueKey]}>{option[titleKey]}</option>
        )}
      </select>
    )
}

export default Select