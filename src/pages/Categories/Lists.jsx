import React from 'react'
import './Categories.css'
const Lists = ({ category, selectedCategories, handleSelect }) => {
  return (

    <li className='list-item'>
      <input
        id={category}
        type='checkbox'
        checked={selectedCategories.includes(category)}
        onChange={() => handleSelect(category)}
      />
      <label htmlFor={category}><span>{category}</span></label>
    </li>

  )
}

export default Lists
