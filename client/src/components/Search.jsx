import React from 'react'

const Search = (props) => {

  const searchValue = document.getElementById('searchField')
  
  return (
    <div>
      <input id="searchField" placeholder='Enter a breed' onChange={event => props.handleSearch(event.target.value)} />
      <button onClick={event => {
        props.clearSearch();
        searchValue.value = '';
      }}>Clear</button>
    </div>
  )
}

export default Search