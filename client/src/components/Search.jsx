import React from 'react'

const Search = (props) => {

  
  return (
    <div>
      <input id="searchField" placeholder='Enter a breed' onChange={event => props.handleSearch(event.target.value)} />
      <button onClick={event => {
        props.clearSearch();
      }}>Clear</button>
    </div>
  )
}

export default Search