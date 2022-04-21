import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import './app.css'
import { dogs } from './utils/fetchData'
import DogGrid from './components/DogGrid';


const App = () => {

  const [doggies, setDoggies] = useState([])
  const [loading, setLoading] = useState(true);
  
  //loads the data from api
  useEffect(() => {
    dogs().then(res => {
      setDoggies(res);
      setLoading(false);
    })
  }, [])

 

  return (
    <div className='body'>
      {loading ? <div>Loading...</div>  : <DogGrid className='dog-grid' dogs={doggies}/> }
      
    </div>
  )
}

export default App