import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';

import { dogs } from './utils/fetchData'


const App = () => {

  const [doggies, setDoggies] = useState([])

  
  useEffect(() => {
    dogs().then(res => {
      setDoggies(res);
    })
  }, [])

  let arrayDoggies = doggies.map((doggie, i) => {
    return (
      <div key = {i}>
        <div>{doggie.name}</div>
      </div>
          )
        })
  

  return (
    <div>
      <div>Maloo</div>
      <div>
        {arrayDoggies}
      </div>  

    </div>
  )
}

export default App